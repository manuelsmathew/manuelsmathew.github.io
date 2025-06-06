﻿# Manuel Sathyajith Mathew - Academic Website

## 🚀 Quick Start

1. Clone this repository
2. Place all files in their respective folders as shown in the structure below
3. Open `index.html` in a web browser to preview locally
4. Deploy to GitHub Pages

## 📁 Folder Structure

```
your-website/
│
├── index.html              # Main HTML file
├── css/
│   └── styles.css         # All styles
├── js/
│   └── main.js           # All JavaScript
├── assets/
│   ├── images/           # Profile pictures, logos, etc.
│   └── pdfs/             # PDF files for papers
├── content/
│   ├── publications/
│   │   ├── publications.json    # Publications data
│   │   └── 2024/               # Year-wise organization
│   │       └── wind-power-perception.pdf
│   ├── lectures/
│   │   └── courses.json        # Courses data
│   ├── presentations/
│   │   └── presentations.json  # Presentations data
│   └── musings/
│       └── posts.json          # Blog posts data
└── README.md              # This file
```

## 📝 Adding New Publications

To add a new publication, edit `content/publications/publications.json`:

```json
{
  "id": "pub-2025-new-paper",
  "title": "Your Paper Title Here",
  "authors": "Mathew, Manuel Sathyajith; Co-author Name",
  "year": "2025",
  "venue": "Conference or Journal Name",
  "type": "Scientific Article",
  "abstract": "Brief abstract of your paper...",
  "keywords": ["keyword1", "keyword2", "keyword3"],
  "links": {
    "pdf": "assets/pdfs/2025/your-paper.pdf",
    "doi": "https://doi.org/10.xxxx/xxxxxx",
    "url": "https://conference-website.com/your-paper"
  }
}
```

### Steps to add a paper with PDF:

1. **Add the PDF file**: Place your PDF in `assets/pdfs/[year]/[filename].pdf`
   - Example: `assets/pdfs/2025/ai-wind-farm-optimization.pdf`

2. **Update the JSON**: Add the publication entry to `publications.json`

3. **Optional fields**:
   - `doi`: Digital Object Identifier link
   - `url`: External link to the paper
   - `abstract`: Paper abstract
   - `keywords`: Array of keywords

## 📚 Adding Courses

Edit `content/lectures/courses.json`:

```json
{
  "title": "Course Name",
  "description": "Brief description of the course",
  "semester": "Fall 2024",
  "credits": "5 ECTS",
  "level": "PhD"
}
```

## 🎤 Adding Presentations

Edit `content/presentations/presentations.json`:

```json
{
  "title": "Presentation Title",
  "event": "Conference Name",
  "date": "June 2024",
  "location": "Oslo, Norway",
  "description": "Brief description of the presentation",
  "slides": "assets/pdfs/presentations/2024-conference-slides.pdf"
}
```

## ✍️ Adding Blog Posts

Edit `content/musings/posts.json`:

```json
{
  "id": "post-2024-06-01",
  "title": "Blog Post Title",
  "date": "June 1, 2024",
  "excerpt": "First paragraph or summary of the post...",
  "content": "Full content of the blog post (optional)",
  "tags": ["AI", "renewable energy", "research"]
}
```

## 🚀 Deployment to GitHub Pages

1. Create a new repository on GitHub
2. Push all files to the repository:
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/[username]/[repo-name].git
   git push -u origin main
   ```

3. Enable GitHub Pages:
   - Go to Settings → Pages
   - Source: Deploy from a branch
   - Branch: main / (root)
   - Save

4. Access your site at: `https://[username].github.io/[repo-name]`

## 🎨 Customization

### Colors
Edit the CSS variables in `css/styles.css`:
```css
:root {
    --primary-color: #1a365d;    /* Main blue */
    --secondary-color: #3182ce;   /* Lighter blue */
    --accent-color: #63b3ed;      /* Accent blue */
}
```

### Profile Image
Replace the placeholder in `index.html`:
```html
<div class="profile-img">
    <img src="assets/images/profile.jpg" alt="Manuel Sathyajith Mathew">
</div>
```

## 📱 Mobile Responsive

The website is fully responsive and works on all devices. The navigation menu becomes a hamburger menu on mobile devices.

## 🛠️ Troubleshooting

### JSON files not loading locally
- Use a local server (e.g., Python's `http.server` or VS Code's Live Server)
- Or test directly on GitHub Pages after deployment

### PDFs not displaying
- Ensure the file path in JSON matches the actual file location
- Check that PDF files are committed to the repository

## 📄 License

This website template is available for personal academic use.

## 👤 Contact

Manuel Sathyajith Mathew
- Email: manuel.s.mathew@uia.no
- University of Agder
