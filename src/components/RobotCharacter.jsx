import React, { useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';

const RobotCharacter = () => {
  const containerRef = useRef(null);
  const sceneRef = useRef(null);
  const cameraRef = useRef(null);
  const rendererRef = useRef(null);
  const robotRef = useRef(null);
  const mixerRef = useRef(null);
  const [currentSection, setCurrentSection] = useState('home');
  const [tooltipText, setTooltipText] = useState('');
  const [showTooltip, setShowTooltip] = useState(false);
  const clockRef = useRef(new THREE.Clock());

  // Initialize Three.js scene
  useEffect(() => {
    if (!containerRef.current) return;

    // Scene setup
    const scene = new THREE.Scene();
    sceneRef.current = scene;

    // Camera setup
    const camera = new THREE.PerspectiveCamera(
      45,
      200 / 300,
      0.1,
      1000
    );
    camera.position.set(0, 1, 3);
    camera.lookAt(0, 0.5, 0);
    cameraRef.current = camera;

    // Renderer setup
    const renderer = new THREE.WebGLRenderer({ 
      alpha: true, 
      antialias: true 
    });
    renderer.setSize(200, 300);
    renderer.setClearColor(0x000000, 0);
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    rendererRef.current = renderer;
    containerRef.current.appendChild(renderer.domElement);

    // Lighting
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.6);
    scene.add(ambientLight);

    const directionalLight = new THREE.DirectionalLight(0x22d3ee, 1.5);
    directionalLight.position.set(5, 5, 5);
    directionalLight.castShadow = true;
    directionalLight.shadow.mapSize.width = 2048;
    directionalLight.shadow.mapSize.height = 2048;
    scene.add(directionalLight);

    const backLight = new THREE.DirectionalLight(0xa855f7, 0.8);
    backLight.position.set(-5, 3, -5);
    scene.add(backLight);

    // Load robot model (fallback to simple geometry if model not available)
    const loader = new GLTFLoader();
    
    // Create a simple robot as fallback
    const createSimpleRobot = () => {
      const robot = new THREE.Group();

      // Body
      const bodyGeometry = new THREE.BoxGeometry(0.6, 0.8, 0.4);
      const bodyMaterial = new THREE.MeshStandardMaterial({ 
        color: 0x22d3ee,
        metalness: 0.7,
        roughness: 0.3,
        emissive: 0x22d3ee,
        emissiveIntensity: 0.2
      });
      const body = new THREE.Mesh(bodyGeometry, bodyMaterial);
      body.position.y = 0.5;
      body.castShadow = true;
      robot.add(body);

      // Head
      const headGeometry = new THREE.SphereGeometry(0.25, 32, 32);
      const headMaterial = new THREE.MeshStandardMaterial({ 
        color: 0x3b82f6,
        metalness: 0.8,
        roughness: 0.2,
        emissive: 0x3b82f6,
        emissiveIntensity: 0.3
      });
      const head = new THREE.Mesh(headGeometry, headMaterial);
      head.position.y = 1.1;
      head.castShadow = true;
      robot.add(head);

      // Eyes
      const eyeGeometry = new THREE.SphereGeometry(0.06, 16, 16);
      const eyeMaterial = new THREE.MeshStandardMaterial({ 
        color: 0xffffff,
        emissive: 0x22d3ee,
        emissiveIntensity: 1
      });
      const leftEye = new THREE.Mesh(eyeGeometry, eyeMaterial);
      leftEye.position.set(-0.1, 1.15, 0.2);
      robot.add(leftEye);

      const rightEye = new THREE.Mesh(eyeGeometry, eyeMaterial);
      rightEye.position.set(0.1, 1.15, 0.2);
      robot.add(rightEye);

      // Arms
      const armGeometry = new THREE.CapsuleGeometry(0.08, 0.5, 8, 16);
      const armMaterial = new THREE.MeshStandardMaterial({ 
        color: 0x6366f1,
        metalness: 0.6,
        roughness: 0.4
      });
      
      const leftArm = new THREE.Mesh(armGeometry, armMaterial);
      leftArm.position.set(-0.4, 0.5, 0);
      leftArm.rotation.z = 0.3;
      leftArm.castShadow = true;
      robot.add(leftArm);

      const rightArm = new THREE.Mesh(armGeometry, armMaterial);
      rightArm.position.set(0.4, 0.5, 0);
      rightArm.rotation.z = -0.3;
      rightArm.castShadow = true;
      robot.add(rightArm);

      robot.position.y = -0.5;
      robot.scale.set(0.8, 0.8, 0.8);
      
      scene.add(robot);
      robotRef.current = robot;
    };

    createSimpleRobot();

    // Animation loop
    const animate = () => {
      requestAnimationFrame(animate);
      
      const delta = clockRef.current.getDelta();

      if (robotRef.current) {
        // Floating animation
        robotRef.current.position.y = -0.5 + Math.sin(Date.now() * 0.001) * 0.05;
        
        // Gentle rotation
        robotRef.current.rotation.y += delta * 0.2;
      }

      if (mixerRef.current) {
        mixerRef.current.update(delta);
      }

      renderer.render(scene, camera);
    };
    animate();

    // Cleanup
    return () => {
      if (containerRef.current && renderer.domElement) {
        containerRef.current.removeChild(renderer.domElement);
      }
      renderer.dispose();
    };
  }, []);

  // Handle scroll events
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'skills', 'projects', 'contact'];
      
      const currentSectionId = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 300 && rect.bottom >= 300;
        }
        return false;
      });

      if (currentSectionId && currentSectionId !== currentSection) {
        setCurrentSection(currentSectionId);
        updateRobotPose(currentSectionId);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [currentSection]);

  // Update robot pose based on section
  const updateRobotPose = (section) => {
    if (!robotRef.current) return;

    const robot = robotRef.current;

    switch (section) {
      case 'home':
        setTooltipText('Welcome! 👋');
        // Waving pose
        if (robot.children[4]) { // Right arm
          robot.children[4].rotation.z = -0.8;
        }
        break;
      case 'about':
        setTooltipText('Nice to meet you!');
        robot.children[4]?.rotation.set(0, 0, -0.3);
        break;
      case 'skills':
        setTooltipText('Thinking... 🤔');
        // Thinking pose
        if (robot.children[1]) { // Head
          robot.children[1].rotation.x = -0.2;
        }
        break;
      case 'projects':
        setTooltipText('Check these out! 👉');
        // Pointing pose
        if (robot.children[4]) { // Right arm
          robot.children[4].rotation.z = -1.2;
          robot.children[4].rotation.y = 0.5;
        }
        break;
      case 'contact':
        setTooltipText("Let's connect! 💬");
        // Waving pose
        if (robot.children[4]) {
          robot.children[4].rotation.z = -0.8;
        }
        break;
      default:
        setTooltipText('');
    }
  };

  return (
    <motion.div
      className="fixed bottom-4 right-4 z-40 pointer-events-auto"
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 1, duration: 0.5 }}
      onMouseEnter={() => setShowTooltip(true)}
      onMouseLeave={() => setShowTooltip(false)}
    >
      {/* Tooltip */}
      <AnimatePresence>
        {showTooltip && tooltipText && (
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 20 }}
            className="absolute bottom-full right-0 mb-4 px-4 py-2 bg-slate-900 border border-cyan-500/50 rounded-lg text-white text-sm whitespace-nowrap"
            style={{
              fontFamily: 'Space Grotesk, sans-serif',
              boxShadow: '0 0 20px rgba(34, 211, 238, 0.3)'
            }}
          >
            {tooltipText}
            <div className="absolute top-full right-4 -mt-1 border-4 border-transparent border-t-slate-900" />
          </motion.div>
        )}
      </AnimatePresence>

      {/* Robot container */}
      <div className="relative">
        {/* Glow effect */}
        <div className="absolute inset-0 bg-gradient-to-t from-cyan-500/20 to-transparent rounded-full blur-xl" />
        
        {/* Shadow */}
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-32 h-4 bg-black/30 rounded-full blur-md" />
        
        {/* 3D Canvas */}
        <div 
          ref={containerRef} 
          className="relative rounded-2xl overflow-hidden"
          style={{
            filter: 'drop-shadow(0 10px 30px rgba(34, 211, 238, 0.3))'
          }}
        />
      </div>
    </motion.div>
  );
};

export default RobotCharacter;