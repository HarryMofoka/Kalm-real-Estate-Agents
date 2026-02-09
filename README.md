# Kalm Real Estate 🏡

![Project Status](https://img.shields.io/badge/Status-Complete-success?style=flat-square&color=17191F)
![License](https://img.shields.io/badge/License-MIT-blue?style=flat-square&color=A1A19F)
![Tech](https://img.shields.io/badge/Tech-HTML%20%7C%20CSS%20%7C%20JS-orange?style=flat-square&color=17191F)

> A premium, serene, and modern real estate landing page experience designed for the Vaal, South Africa market.

**Kalm Real Estate** is a rebrand focusing on sophistication, trust, and local expertise. The website features a modular architecture built with **Vanilla HTML, CSS, and JavaScript**, ensuring high performance, easy maintenance, and zero build-step dependencies.

---

## ✨ Features

- **🎨 Premium UI/UX**
  - **Monochrome Palette**: A sophisticated blend of Deep Black (`#17191F`), Pure White (`#FFFFFF`), and Stone Grey (`#A1A19F`).
  - **Glassmorphism**: Modern frosted glass effects on navigation and overlays.
  - **Typography**: Elegant `Playfair Display` for headings paired with clean `Inter` for body text.

- **⚡ Interactions & Animations**
  - **Custom Loader**: A smooth initial loading sequence.
  - **Scroll Reveals**: Elements gracefully fade and slide in as you scroll.
  - **Dynamic Services**: An auto-rotating services section with progress indicators and background transitions.
  - **Mobile Menu**: A full-screen, animated overlay menu for smaller devices.

- **🛠 Technical Excellence**
  - **Modular CSS**: Styles split into `variables.css`, `layout.css`, `components.css`, etc.
  - **No Frameworks**: Pure Vanilla JS and CSS for maximum control and speed.
  - **Responsive**: Fully optimized for Desktop, Tablet, and Mobile.

---

## 📂 Project Structure

```bash
Kalm-Real-Estate/
├── css/
│   ├── animations.css  # Keyframes and animation classes
│   ├── base.css        # Resets, typography, and core styles
│   ├── components.css  # Buttons, Cards, Sliders, Accordions
│   ├── layout.css      # Header, Footer, Grid systems
│   └── variables.css   # Design tokens (Colors, Fonts, Spacing)
├── js/
│   └── main.js         # Core logic (Loader, Menu, Scroll, Slider)
├── index.html          # Main Landing Page
├── properties.html     # Property Listings
├── sell.html           # Seller Information
├── valuation.html      # Valuation Request Form
├── about.html          # Company Story
├── contact.html        # Contact Details & Form
└── README.md           # Project Documentation
```

---

## 🚀 Getting Started

Since this project uses vanilla technologies, there is no complex build process.

1.  **Clone the Repository**
    ```bash
    git clone https://github.com/HarryMofoka/Kalm-real-Estate-Agents.git
    ```

2.  **Open the Project**
    - Navigate to the folder.
    - Open `index.html` in any modern web browser.
    - Alternatively, use the Live Server extension in VS Code for hot-reloading during development.

---

## 🎨 Customization Guide

### Colors & Fonts
All design tokens are stored in `css/variables.css`. Change these values to instantly update the theme across the entire site.

```css
:root {
    --color-primary: #17191F;  /* Change primary brand color */
    --font-heading: 'Playfair Display', serif; /* Change heading font */
}
```

### Adding New Properties
To add a property card, simply duplicate the `.advantage-card` HTML structure in `properties.html` or `index.html`.

```html
<div class="advantage-card">
    <img src="path/to/image.jpg" alt="Property Name">
    <div class="card-content">
        <div class="glass-tag">Price</div>
        <h3>Property Title</h3>
        <p class="card-desc">Details...</p>
    </div>
</div>
```

---

## 🧱 Credits

- **Icons**: [Lucide Icons](https://lucide.dev/) - Beautiful, consistent SVG icons.
- **Fonts**: [Google Fonts](https://fonts.google.com/) - Inter & Playfair Display.
- **Images**: [Unsplash](https://unsplash.com/) - High-quality placeholder photography.

---

<p align="center">
  Built with ❤️ for Kalm Real Estate
</p>
