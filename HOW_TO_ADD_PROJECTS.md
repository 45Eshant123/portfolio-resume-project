# How to Add New Projects to Your Portfolio

This guide will help you add new projects to your portfolio website without needing any external help. Follow these steps carefully.

**Note:** For adding blog articles, see `HOW_TO_ADD_ARTICLES.md`

---

## 📁 Files You Need to Edit

You only need to edit **ONE file** to add new projects:
- `src/pages/AllProjects.jsx`

**Important:** Do NOT edit `src/components/Projects.jsx` unless you want to change the 3 projects shown on the homepage.

---

## 🚀 Step-by-Step Guide to Add a New Project

### Step 1: Open the AllProjects.jsx File

Navigate to: `src/pages/AllProjects.jsx`

### Step 2: Find the `allProjects` Array

Look for this section in the file (around line 13):

```jsx
const allProjects = [
  {
    title: '3D Portfolio',
    description: 'Interactive portfolio with Three.js and advanced animations',
    image: '/image/portfolio.png',
    color: 'cyan',
    github: 'https://github.com/45Eshant123/port-folio.git',
    category: 'web',
    tags: ['React', 'Three.js', 'Framer Motion']
  },
  // ... more projects
];
```

### Step 3: Add Your New Project

Add your new project **before the closing `]`** of the array. Copy this template:

```jsx
{
  title: 'Your Project Name',
  description: 'Short description of what your project does',
  image: '/image/cards/your-image.png',
  color: 'cyan',  // Options: 'cyan', 'purple', or 'blue'
  github: 'https://github.com/YourUsername/your-repo.git',  // Optional
  category: 'web',  // Options: 'web', 'ai', 'game', or 'blockchain'
  tags: ['React', 'Node.js', 'API']  // Add relevant technologies
},
```

### Step 4: Full Example

Here's how it looks when you add a new project:

```jsx
const allProjects = [
  {
    title: '3D Portfolio',
    description: 'Interactive portfolio with Three.js and advanced animations',
    image: '/image/portfolio.png',
    color: 'cyan',
    github: 'https://github.com/45Eshant123/port-folio.git',
    category: 'web',
    tags: ['React', 'Three.js', 'Framer Motion']
  },
  // ... existing projects ...
  {
    title: 'Blockchain Wallet',
    description: 'Secure cryptocurrency wallet with transaction tracking',
    image: '/image/cards/blockchain-wallet.png',
    color: 'blue',
    github: 'https://github.com/45Eshant123/blockchain-wallet.git',
    category: 'blockchain',
    tags: ['React', 'Web3', 'Blockchain']
  },
  // 👇 ADD YOUR NEW PROJECT HERE
  {
    title: 'Restaurant Booking App',
    description: 'Online reservation system with real-time table availability',
    image: '/image/cards/restaurant-app.png',
    color: 'purple',
    github: 'https://github.com/45Eshant123/restaurant-app.git',
    category: 'web',
    tags: ['React', 'Firebase', 'Stripe']
  }
];
```

---

## 🎨 Configuration Options

### Colors
Choose one of these colors for the card accent:
- `'cyan'` - Cyan/Turquoise color
- `'purple'` - Purple color
- `'blue'` - Blue color

### Categories
Choose one category for filtering:
- `'web'` - Web applications
- `'ai'` - AI/Machine Learning projects
- `'game'` - Games
- `'blockchain'` - Blockchain/Web3 projects

### Tags
Add relevant technologies as an array:
```jsx
tags: ['React', 'Node.js', 'MongoDB', 'Express']
```

### GitHub Link (Optional)
If your project is private or you don't want to share the code:
- Simply **remove** the `github` line
- Or leave it out completely

Example without GitHub:
```jsx
{
  title: 'Private Project',
  description: 'This is a private project',
  image: '/image/cards/private.png',
  color: 'cyan',
  category: 'web',
  tags: ['React', 'API']
}
```

---

## 🖼️ Adding Project Images

### Step 1: Prepare Your Image
- Recommended size: **400x300 pixels** or similar aspect ratio (4:3)
- Formats: `.png`, `.jpg`, or `.webp`
- Keep file size under 500KB for better performance

### Step 2: Add Image to Project
1. Place your image in: `public/image/cards/`
2. Name it something descriptive: `my-project.png`
3. Reference it in your project object:
   ```jsx
   image: '/image/cards/my-project.png',
   ```

### If Image is Missing
The website will automatically show a placeholder image with your project name if the image doesn't exist.

---

## 📝 Complete Project Template

Copy and paste this template for quick project addition:

```jsx
{
  title: 'Project Name Here',
  description: 'Brief description of your project (1-2 sentences)',
  image: '/image/cards/project-image.png',
  color: 'cyan',
  github: 'https://github.com/45Eshant123/your-repo.git',
  category: 'web',
  tags: ['Tech1', 'Tech2', 'Tech3']
},
```

---

## ✅ Checklist Before Saving

- [ ] Title is clear and concise
- [ ] Description explains what the project does
- [ ] Image path is correct (starts with `/image/cards/`)
- [ ] Color is one of: `cyan`, `purple`, or `blue`
- [ ] Category is one of: `web`, `ai`, `game`, or `blockchain`
- [ ] Tags are in an array format: `['Tag1', 'Tag2']`
- [ ] GitHub URL is correct (or removed if private)
- [ ] Comma is added after the closing `}` (except for the last project)

---

## 🔧 Common Mistakes to Avoid

### ❌ Missing Comma
```jsx
{
  title: 'Project 1',
  // ...
}  // ❌ Missing comma here
{
  title: 'Project 2',
  // ...
}
```

### ✅ Correct
```jsx
{
  title: 'Project 1',
  // ...
},  // ✅ Comma added
{
  title: 'Project 2',
  // ...
}
```

### ❌ Wrong Image Path
```jsx
image: 'image/cards/project.png',  // ❌ Missing leading slash
```

### ✅ Correct
```jsx
image: '/image/cards/project.png',  // ✅ Starts with /
```

### ❌ Invalid Category
```jsx
category: 'mobile',  // ❌ Not a valid category
```

### ✅ Correct
```jsx
category: 'web',  // ✅ Valid: web, ai, game, or blockchain
```

---

## 🎯 Adding a New Category (Advanced)

If you want to add a new category like `'mobile'`:

1. Add your project with the new category:
```jsx
{
  title: 'Mobile App',
  category: 'mobile',
  // ...
}
```

2. Add the category to the filter list (around line 98):
```jsx
const categories = [
  { id: 'all', label: 'All Projects' },
  { id: 'web', label: 'Web Apps' },
  { id: 'ai', label: 'AI/ML' },
  { id: 'game', label: 'Games' },
  { id: 'blockchain', label: 'Blockchain' },
  { id: 'mobile', label: 'Mobile Apps' }  // ✅ Add this line
];
```

---

## 🏠 Changing Homepage Projects

If you want to change which 3 projects appear on the homepage:

**File:** `src/components/Projects.jsx`

Edit the `projects` array (around line 12). This array should only have 3 projects.

**Example:**
```jsx
const projects = [
  {
    title: 'Project 1',
    description: 'Description',
    image: '/image/project1.png',
    color: 'cyan',
    github: 'https://github.com/...'
  },
  {
    title: 'Project 2',
    description: 'Description',
    image: '/image/project2.png',
    color: 'purple',
    github: 'https://github.com/...'
  },
  {
    title: 'Project 3',
    description: 'Description',
    image: '/image/project3.png',
    color: 'blue',
    github: 'https://github.com/...'
  }
];
```

**Note:** These 3 projects should ALSO exist in the `AllProjects.jsx` file.

---

## 🧪 Testing Your Changes

After adding a project:

1. Save the file (`Ctrl + S` or `Cmd + S`)
2. Check your browser - the development server should auto-reload
3. Click "View All My Projects" button on homepage
4. Verify your new project appears in the grid
5. Test the category filters
6. Click on the project card to test hover effects

---

## 💡 Tips

1. **Keep descriptions short** - 1-2 sentences max (around 60-80 characters)
2. **Use consistent image sizes** - All images should be similar dimensions
3. **Vary the colors** - Use different colors for adjacent projects for visual interest
4. **Add relevant tags** - Tags help visitors understand your tech stack
5. **Test GitHub links** - Make sure they point to the correct repository

---

## 📞 Troubleshooting

### Project not showing up?
- Check if you added a comma after the previous project
- Verify the syntax is correct (matching brackets, quotes, etc.)
- Check browser console for errors (F12 > Console)

### Image not displaying?
- Verify the image exists in `public/image/cards/`
- Check the file name spelling
- Ensure the path starts with `/image/cards/`

### Filter not working?
- Make sure the `category` value matches one of the filter options
- Check spelling of category name

---

## 🎉 You're Done!

You can now add as many projects as you want to your portfolio. Just follow this guide each time you want to add a new project.

**Remember:** Only edit `AllProjects.jsx` for adding projects. Don't modify other files unless you know what you're doing.

---

## 📋 Quick Reference

| Property | Type | Required | Options/Example |
|----------|------|----------|-----------------|
| `title` | String | ✅ Yes | `'My Awesome Project'` |
| `description` | String | ✅ Yes | `'A brief description'` |
| `image` | String | ✅ Yes | `'/image/cards/my-project.png'` |
| `color` | String | ✅ Yes | `'cyan'`, `'purple'`, `'blue'` |
| `github` | String | ❌ No | `'https://github.com/user/repo.git'` |
| `category` | String | ✅ Yes | `'web'`, `'ai'`, `'game'`, `'blockchain'` |
| `tags` | Array | ✅ Yes | `['React', 'Node.js', 'API']` |

---

**Happy coding! 🚀**


---

## 🚀 Step-by-Step Guide to Add a New Article

### Step 1: Open the Blog.jsx File

Navigate to: `src/pages/Blog.jsx`

### Step 2: Find the `posts` Array

Look for this section in the file (around line 14):

```jsx
const posts = [
  {
    id: 1,
    title: 'Mastering Three.js in 2024',
    excerpt: 'A comprehensive guide to building immersive 3D web experiences using React and Three.js.',
    category: '3D Graphics',
    readTime: '8 min',
    date: 'Dec 15, 2025',
    image: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee',
    resources: [
      {
        title: 'Three.js Tutorial Video',
        url: 'https://youtu.be/KM64t3pA4fs'
      }
    ]
  },
  // ... more articles
];
```

### Step 3: Add Your New Article

Add your new article **before the closing `]`** of the array. Copy this template:

```jsx
{
  id: 10,  // Increment from the last article ID
  title: 'Your Article Title',
  excerpt: 'Brief summary of your article (1-2 sentences)',
  category: 'Development',  // See categories list below
  readTime: '5 min',  // Estimated reading time
  date: 'Dec 7, 2025',  // Publication date
  image: 'https://images.unsplash.com/your-image-url',  // Or local path
  resources: [  // Optional - external resources
    {
      title: 'Related Video',
      url: 'https://youtube.com/your-video'
    }
  ]
},
```

### Step 4: Full Example

Here's how it looks when you add a new article:

```jsx
const posts = [
  {
    id: 1,
    title: 'Mastering Three.js in 2024',
    excerpt: 'A comprehensive guide to building immersive 3D web experiences.',
    category: '3D Graphics',
    readTime: '8 min',
    date: 'Dec 15, 2025',
    image: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee'
  },
  // ... existing articles ...
  {
    id: 9,
    title: 'Voice-Controlled Web Apps',
    excerpt: 'Exploring voice input and speech recognition.',
    category: 'Web Development',
    readTime: 'Coming Soon',
    date: 'Coming Soon',
    image: 'https://images.unsplash.com/photo-1518770660439-4636190af475'
  },
  // 👇 ADD YOUR NEW ARTICLE HERE
  {
    id: 10,
    title: 'Building Progressive Web Apps',
    excerpt: 'Learn how to create PWAs with offline capabilities and native features.',
    category: 'Web Development',
    readTime: '12 min',
    date: 'Dec 7, 2025',
    image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97',
    resources: [
      {
        title: 'PWA Documentation',
        url: 'https://web.dev/progressive-web-apps/'
      }
    ]
  }
];
```

---

## 🎨 Configuration Options for Articles

### Categories

Choose one category from the existing list:
- `'Development'` - General development topics
- `'Design'` - UI/UX and design topics
- `'3D Graphics'` - Three.js, WebGL, 3D topics
- `'Career'` - Career advice and tips
- `'Artificial Intelligence'` - AI/ML topics
- `'Web Development'` - Web-specific development
- `'Web Design'` - Web design topics

### Read Time

Estimate how long it takes to read your article:
```jsx
readTime: '5 min'
readTime: '10 min'
readTime: 'Coming Soon'  // For future articles
```

### Date Format

Use this format for consistency:
```jsx
date: 'Dec 7, 2025'  // Month DD, YYYY
date: 'Coming Soon'  // For future articles
```

### Resources (Optional)

Add external resources or videos related to your article:
```jsx
resources: [
  {
    title: 'Tutorial Video',
    url: 'https://youtube.com/your-video'
  },
  {
    title: 'GitHub Repository',
    url: 'https://github.com/your-repo'
  }
]
```

If you don't have resources, simply **omit** the `resources` property.

---

## 🖼️ Adding Article Images

### Option 1: Use Unsplash (Recommended)
Use high-quality free images from Unsplash:
```jsx
image: 'https://images.unsplash.com/photo-ID?auto=format&fit=crop&q=80&w=800&h=400'
```

### Option 2: Use Local Images
1. Place your image in: `public/image/cards/`
2. Reference it:
   ```jsx
   image: '/image/cards/my-article.png'
   ```

**Recommended image size:** 800x400 pixels (2:1 aspect ratio)

---

## 📝 Complete Article Template

Copy and paste this template for quick article addition:

```jsx
{
  id: 10,
  title: 'Your Article Title Here',
  excerpt: 'Brief summary that entices readers (keep it under 100 characters)',
  category: 'Development',
  readTime: '7 min',
  date: 'Dec 7, 2025',
  image: 'https://images.unsplash.com/photo-your-image-id',
  resources: [
    {
      title: 'Related Resource',
      url: 'https://example.com'
    }
  ]
},
```

---

## ✅ Checklist Before Saving (Articles)

- [ ] ID is unique and incremented from the last article
- [ ] Title is clear and compelling
- [ ] Excerpt is concise (1-2 sentences)
- [ ] Category matches one of the existing categories
- [ ] Read time is estimated or set to "Coming Soon"
- [ ] Date is in correct format (Month DD, YYYY)
- [ ] Image URL is valid (test it in browser)
- [ ] Resources are optional - add only if relevant
- [ ] Comma is added after the closing `}` (except for the last article)

---

## 🔧 Common Mistakes to Avoid (Articles)

### ❌ Duplicate IDs
```jsx
{
  id: 5,  // ❌ ID already exists
  title: 'New Article',
  // ...
}
```

### ✅ Correct
```jsx
{
  id: 10,  // ✅ Unique ID
  title: 'New Article',
  // ...
}
```

### ❌ Invalid Category
```jsx
category: 'Mobile Dev',  // ❌ Not in the categories list
```

### ✅ Correct
```jsx
category: 'Web Development',  // ✅ Valid category
```

### ❌ Missing Comma
```jsx
{
  id: 9,
  title: 'Article 9',
  // ...
}  // ❌ Missing comma
{
  id: 10,
  title: 'Article 10',
  // ...
}
```

### ✅ Correct
```jsx
{
  id: 9,
  title: 'Article 9',
  // ...
},  // ✅ Comma added
{
  id: 10,
  title: 'Article 10',
  // ...
}
```

---

## 🎯 Adding a New Article Category (Advanced)

If you want to add a new category like `'Mobile Development'`:

1. Add your article with the new category:
```jsx
{
  id: 10,
  title: 'Mobile App Development',
  category: 'Mobile Development',
  // ...
}
```

2. Add the category to the categories array (around line 13):
```jsx
const categories = [
  'All', 
  'Development', 
  'Design', 
  '3D Graphics', 
  'Career', 
  'Artificial Intelligence', 
  'Web Development', 
  'Web Design',
  'Mobile Development'  // ✅ Add this line
];
```

---

## 📊 How the Blog Page Works

- **Initial Display:** Shows only **3 articles** when you first visit `/blog`
- **View All Button:** Click "View All Articles" to see all articles
- **Search:** Start typing to search articles (shows all matching results)
- **Filter:** Click a category to filter articles (shows all in that category)
- **Smart Behavior:** Button disappears when searching, filtering, or after clicking

---

## 💡 Tips for Writing Good Articles

1. **Title:** Keep it clear and under 60 characters
2. **Excerpt:** Write a compelling summary in 1-2 sentences (max 100 characters)
3. **Images:** Use high-quality, relevant images (800x400px recommended)
4. **Categories:** Use existing categories for better filtering
5. **Read Time:** Be realistic - typically 200 words = 1 minute
6. **Resources:** Only add if they genuinely add value
7. **Date:** Keep dates consistent with your actual publishing schedule

---

## 📞 Troubleshooting Articles

### Article not showing up?
- Check if you added a comma after the previous article
- Verify the ID is unique
- Check browser console for errors (F12 > Console)

### Image not displaying?
- Test the image URL in your browser
- For local images, verify the file exists in `public/image/cards/`
- Check the file name spelling

### Category filter not working?
- Make sure the category name exactly matches one in the categories array
- Check spelling and capitalization

---

## 📋 Quick Reference - Articles

| Property | Type | Required | Options/Example |
|----------|------|----------|-----------------|
| `id` | Number | ✅ Yes | `10` (must be unique) |
| `title` | String | ✅ Yes | `'Your Article Title'` |
| `excerpt` | String | ✅ Yes | `'Brief summary here'` |
| `category` | String | ✅ Yes | See categories list above |
| `readTime` | String | ✅ Yes | `'7 min'` or `'Coming Soon'` |
| `date` | String | ✅ Yes | `'Dec 7, 2025'` |
| `image` | String | ✅ Yes | URL or local path |
| `resources` | Array | ❌ No | `[{title: '...', url: '...'}]` |

---

**Happy coding! 🚀**

