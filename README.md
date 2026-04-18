# 🐍 My Python Open-Source Showcase

Welcome to the source code for my portfolio website! This site serves as a live gallery for my Python scripts, CLI tools, and automation experiments.

---

## 🚀 About This Site
This is a **static, high-performance portfolio** built with a "Developer-First" aesthetic. 
- **Zero Backend:** Hosted entirely for free on GitHub Pages.
- **Dark Mode UI:** Designed for developers, by a developer.
- **Data-Driven:** Projects are managed via a simple JavaScript configuration (no manual HTML editing for new cards).
- **Responsive:** Optimized for desktop, tablet, and mobile.

---

## 🛠 Tech Stack
- **Frontend:** HTML5, CSS3 (Custom Variables), Vanilla JavaScript.
- **Typography:** Inter (Body) & JetBrains Mono (Code).
- **Icons:** Font Awesome.
- **Contact Logic:** Formspree.io (Serverless contact form).

---

## 📝 How I Update My Projects (Quick Guide)
To add a new Python tool to the live site, I follow these steps:

1. Open `assets/js/projects.js`.
2. Append a new project object to the `projects` constant:
   ```javascript
   {
       title: "Tool Name",
       description: "Short description of what the script does.",
       tags: ["automation", "cli"],
       github: "https://github.com/YOUR_USERNAME/repo-name",
       demo: "#" 
   },

3. Commit and push to GitHub: git commit -am "Added new tool" && git push
4. GitHub Pages automatically rebuilds the site with the new project.

🤝 Contributing
If you find a bug in one of my tools or want to suggest a feature, feel free to open an issue in the specific tool's repository or contact me via the site!
