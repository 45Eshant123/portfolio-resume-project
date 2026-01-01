# How to Add New Blog Articles

This guide will help you add new blog articles to your portfolio website without needing any external help. Follow these steps carefully.

---

## 📁 File You Need to Edit

You only need to edit **ONE file** to add new blog articles:
- `src/pages/Blog.jsx`

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
    image: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?auto=format&fit=crop&q=80&w=800&h=400',
    resources: [
      {
        title: 'Three.js Tutorial Video',
        url: 'https://youtu.be/KM64t3pA4fs?si=xV7EP57laHVXzZRa'
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
  image: 'https://images.unsplash.com/your-image-url?auto=format&fit=crop&q=80&w=800&h=400',
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
    image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&q=80&w=800&h=400',
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

## 🎨 Configuration Options

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

If you don't have resources, simply **omit** the `resources` property entirely.

---

## 🖼️ Adding Article Images

### Option 1: Use Unsplash (Recommended)

Use high-quality free images from Unsplash:

```jsx
image: 'https://images.unsplash.com/photo-ID?auto=format&fit=crop&q=80&w=800&h=400'
```

**How to get Unsplash image URL:**
1. Go to [unsplash.com](https://unsplash.com)
2. Search for relevant image
3. Click on the image
4. Right-click and copy image address
5. Add `?auto=format&fit=crop&q=80&w=800&h=400` at the end

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
  image: 'https://images.unsplash.com/photo-your-image-id?auto=format&fit=crop&q=80&w=800&h=400',
  resources: [
    {
      title: 'Related Resource',
      url: 'https://example.com'
    }
  ]
},
```

---

## ✅ Checklist Before Saving

- [ ] ID is unique and incremented from the last article
- [ ] Title is clear and compelling (under 60 characters)
- [ ] Excerpt is concise (1-2 sentences, under 100 characters)
- [ ] Category matches one of the existing categories
- [ ] Read time is estimated or set to "Coming Soon"
- [ ] Date is in correct format (Month DD, YYYY)
- [ ] Image URL is valid and tested in browser
- [ ] Resources are optional - add only if relevant
- [ ] Comma is added after the closing `}` (except for the last article)

---

## 🔧 Common Mistakes to Avoid

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
}  // ❌ Missing comma here
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

### ❌ Wrong Image URL Format

```jsx
image: 'https://unsplash.com/photos/abc123'  // ❌ Wrong format
```

### ✅ Correct

```jsx
image: 'https://images.unsplash.com/photo-abc123?auto=format&fit=crop&q=80&w=800&h=400'  // ✅ Direct image URL
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

2. Add the category to the categories array (around line 13 in Blog.jsx):

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

## 🏠 Updating Homepage Articles

The homepage shows 3 featured articles in the "Latest Thoughts" section.

**File to edit:** `src/pages/Home.jsx`

Find the three blog card sections (around line 68, 92, 120) and update:
- `to="/blog/7"` → Change to your article ID
- Image source
- Category text
- Title
- Description

**Example:**

```jsx
<Link to="/blog/10" className="group block h-full">
  <ElectricBorder color="cyan">
    <div className="bg-slate-900 rounded-2xl overflow-hidden h-full flex flex-col min-h-[420px]">
      <div className="h-48 bg-slate-800 relative overflow-hidden flex-shrink-0">
        <img
          src="/image/cards/your-image.png"
          alt="Your Article Title"
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
        />
      </div>
      <div className="p-6 flex-grow flex flex-col">
        <div className="text-xs font-bold text-cyan-400 mb-2 uppercase tracking-wider">
          Your Category
        </div>
        <h3 className="text-xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors line-clamp-2">
          Your Article Title
        </h3>
        <p className="text-gray-400 text-sm line-clamp-3">
          Your article description...
        </p>
      </div>
    </div>
  </ElectricBorder>
</Link>
```

**Note:** Only edit the homepage if you want to change the featured articles shown there.

---

## 🧪 Testing Your Changes

After adding an article:

1. Save the file (`Ctrl + S` or `Cmd + S`)
2. Check your browser - the development server should auto-reload
3. Navigate to `/blog` to see all articles
4. Test the search functionality
5. Test category filters
6. Click on the article card to ensure the link works

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

## 📞 Troubleshooting

### Article not showing up?

- Check if you added a comma after the previous article
- Verify the ID is unique
- Check browser console for errors (F12 > Console)
- Make sure the syntax is correct (matching brackets, quotes, etc.)

### Image not displaying?

- Test the image URL in your browser
- For local images, verify the file exists in `public/image/cards/`
- Check the file name spelling
- Ensure the image URL includes proper parameters for Unsplash

### Category filter not working?

- Make sure the category name exactly matches one in the categories array
- Check spelling and capitalization (case-sensitive)

### Article link broken?

- Ensure the article ID matches the one you're linking to
- Check that you're using the correct path format: `/blog/{id}`

---

## 📋 Quick Reference

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

## 📚 Example: Adding Multiple Articles at Once

If you want to add several articles at once, just add them one after another:

```jsx
const posts = [
  // ... existing articles ...
  {
    id: 9,
    title: 'Voice-Controlled Web Apps',
    // ...
  },
  {
    id: 10,
    title: 'Building Progressive Web Apps',
    excerpt: 'Learn PWA development techniques.',
    category: 'Web Development',
    readTime: '12 min',
    date: 'Dec 7, 2025',
    image: 'https://images.unsplash.com/photo-123'
  },
  {
    id: 11,
    title: 'GraphQL vs REST APIs',
    excerpt: 'Comparing modern API architectures.',
    category: 'Development',
    readTime: '8 min',
    date: 'Dec 8, 2025',
    image: 'https://images.unsplash.com/photo-456'
  },
  {
    id: 12,
    title: 'Responsive Design Best Practices',
    excerpt: 'Creating mobile-first layouts.',
    category: 'Web Design',
    readTime: '6 min',
    date: 'Dec 9, 2025',
    image: 'https://images.unsplash.com/photo-789'
  }
];
```

Remember to add commas between all articles!

---

**Happy writing! ✍️🚀**
