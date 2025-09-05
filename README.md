# My Website

A customizable website template with a fixed header, collapsible sidebar, and main content area. Features a dark theme toggle and responsive layout.

---

## 🚀 Customization Guide

### 🧩 HTML

1. **Logo**: Replace the `src` in `<img>` with your logo path.
2. **Navigation**: Update `<nav>` links (`href` and text) to reflect your site structure.
3. **Sections**: Edit or add `<section>` elements in `<main>` for your content.

### 🎨 CSS

1. **Fonts**: Change the `font-family` in the `body` selector.
2. **Colors**: Update `background-color` and `color` to match your palette.
3. **Spacing**: Adjust `margin`, `padding`, etc. for layout control.
4. **Header/Sidebar**: Modify `height`, `width`, and styles for layout tweaks.

### ⚙ JavaScript

1. **Theme Toggle**: Dark/light theme is handled in JavaScript. Customize if needed.
2. **Sidebar Toggle**: Sidebar retract/expand is also handled via JavaScript.

---

## ➕ Adding New Sections

1. In the sidebar:
    ```html
    <li><a href="#sectionName">Display Text</a></li>
    ```

2. In the main content:
    ```html
    <section id="sectionName">
      <!-- Your content here -->
    </section>
    ```

Ensure `sectionName` matches in both places (no `#` in the section ID).

---

## 🏷️ Basic HTML Tags

- `<h1>` to `<h6>`: Headings, from largest (`h1`) to smallest (`h6`)
- `<a href="URL">Text</a>`: Link to another page or site
- `<p>`: Paragraph text
- `<img src="path">`: Embed an image

Each tag requires a closing tag (e.g., `</h1>`, `</a>`).

---

## 📁 File Overview

- `index.html`: Main structure of your website
- `styles/style.css`: Styling rules
- `scripts/script.js`: Interactivity (theme and sidebar)
- `README.md`: This guide

---

## 💡 Usage Instructions

1. **Download or clone** this project.
2. **Edit** the HTML, CSS, and JS files to suit your content and style.
3. **Open** `index.html` in a browser to view your website.

---

## 📝 Changelog

- Updated README for better clarity and formatting
- Improved sidebar toggle documentation

## 🛠 Recommended Tool

Use [Visual Studio Code](https://code.visualstudio.com/download) for easy and powerful code editing.