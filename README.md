# CV Portfolio Redesign

A modern, low-code focused CV/Resume website designed to position you as a **Low-Code Solutions Architect**.

## 🎨 Design Philosophy

This redesign follows a **"Refined Professional"** aesthetic—inspired by modern tools like Linear, Notion, and the very low-code platforms you work with. The design itself demonstrates your design sensibility.

### Key Design Changes

| Original | Redesigned |
|----------|------------|
| Bootstrap 4 (2017 look) | Custom CSS with modern variables |
| Gradient background | Clean white + sidebar layout |
| Generic "Software Lead" positioning | **Low-Code Solutions Architect** |
| Rating blocks 1-5 | Categorized skills (Expert/Advanced/Proficient) |
| Chronological projects | Featured + filterable grid |
| Hidden metrics | Prominent impact numbers |

## 🚀 Quick Start

1. **Copy your existing `assets/img/` folder** into this directory
2. Open `index.html` in any browser
3. Deploy to GitHub Pages when ready

## 📁 File Structure

```
cv-redesign/
├── index.html          # Main HTML (sidebar + main content layout)
├── styles.css          # Modern CSS with CSS variables
├── app.js              # Data config + rendering logic
├── assets/
│   └── img/            # ← Copy your images here
│       ├── photo.jpg
│       ├── xano.png
│       ├── weweb.jpg
│       ├── tadabase.png
│       ├── strategicvisionz.png
│       ├── lasalle-logo.jpg
│       └── ... (other logos)
└── README.md
```

## 📝 How to Update Your CV

Edit the `CONFIG` object at the top of `app.js`. The data structure has been reorganized for better positioning:

### Personal Information
```javascript
const CONFIG = {
    name: "Your Name",
    title: "Low-Code Solutions Architect",  // Your positioning
    email: "your@email.com",
    phone: "your phone",
    // ...
}
```

### Hero Section (Your Headline)
```javascript
hero: {
    headline: "Building production apps <span class='highlight'>10x faster</span> with low-code platforms",
    subheadline: "Your value proposition here..."
}
```

### Primary Stack (Sidebar)
```javascript
primaryStack: [
    { name: "Xano", img: "xano.png" },
    { name: "Weweb", img: "weweb.jpg" },
    // Add your core tools
]
```

### Featured Projects (2-3 best)
```javascript
featuredProjects: [
    {
        title: "Project Name",
        company: "Company",
        logo: "logo.png",
        timeline: "JAN 2024 - Present",
        description: "Brief description",
        tags: [
            { name: "Xano", img: "xano.png" },
            // ...
        ],
        accomplishments: [
            "Quantified achievement with <strong>impact metrics</strong>",
            // Use XYZ format
        ]
    }
]
```

### Skills (Categorized)
```javascript
skills: {
    expert: [
        { name: "Xano", level: 5 },
        { name: "Weweb", level: 5 },
    ],
    advanced: [
        { name: "Node.js", level: 4 },
    ],
    proficient: [
        { name: "React", level: 3 },
    ]
}
```

## 🎯 Key Positioning Changes

### Before (Generic)
> "Experienced Software Solutions Lead with expertise in logistics, transportation..."

### After (Specific)
> "Building production apps **10x faster** with low-code platforms"

### Skills: From This
```
Android      ■□□□□
PHP          ■□□□□
Xano         ■■■■■
Security     ■■■□□
```

### Skills: To This
```
EXPERT          ADVANCED          PROFICIENT
├── Xano        ├── Tadabase      ├── Security
├── Weweb       ├── Node.js       ├── PHP
└── REST APIs   └── Full Stack    └── React
```

## 🖼️ Required Images

Make sure these images exist in `assets/img/`:

| Image | Purpose |
|-------|---------|
| `photo.jpg` | Your profile photo |
| `xano.png` | Platform logo |
| `weweb.jpg` | Platform logo |
| `tadabase.png` | Platform logo |
| `strategicvisionz.png` | Company logo |
| `lasalle-logo.jpg` | Company logo |
| `coursera.png` | Certification issuer |
| `uplogo.png` | Education logo |
| + other tech logos | Project tags |

## 🚀 Deploy to GitHub Pages

1. Create new repository on GitHub
2. Upload all files (including assets folder)
3. Go to **Settings** → **Pages**
4. Select `main` branch, `/ (root)` folder
5. Save → Your site is live!

## 💡 Design Features

- **Sidebar Navigation**: Always-visible profile and contact info
- **Availability Badge**: Green "Available for opportunities" indicator
- **Metrics Bar**: Quantified impact at a glance
- **Featured Projects**: Your 2-3 best low-code projects prominently displayed
- **Project Filtering**: Toggle between "All", "Low-Code", and "Traditional"
- **Responsive**: Works on mobile, tablet, and desktop
- **Dark Sidebar**: Professional contrast with clean main content
- **Subtle Animations**: Fade-in effects on scroll

## 🎨 Customization

### Change Colors
Edit CSS variables in `styles.css`:

```css
:root {
    --accent-primary: #6366f1;    /* Main accent color */
    --accent-secondary: #8b5cf6;  /* Secondary accent */
    --bg-sidebar: #1a1a2e;        /* Sidebar background */
    /* ... */
}
```

### Change Fonts
The design uses:
- **Fraunces** - Display/headings (elegant serif)
- **DM Sans** - Body text (clean sans-serif)

Change in `styles.css`:
```css
:root {
    --font-display: 'Fraunces', Georgia, serif;
    --font-body: 'DM Sans', sans-serif;
}
```

---

**Built with 💜 for low-code excellence**
