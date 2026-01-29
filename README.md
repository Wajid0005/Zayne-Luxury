# ZAYNÉ - French Luxury Beauty

ZAYNÉ is a conceptual French luxury beauty brand website featuring a gravity-defying aesthetic, glassmorphism design, and a premium e-commerce experience.

## 🌟 Features

*   **Multi-Page Experience**: Home, Shop, Contact, and Editorial sections.
*   **Custom Design System**: Glassmorphism UI, "Antigravity" floating elements, and parallax animations.
*   **Dynamic Product Catalog**: 50+ products across 10 categories (Lipsticks, K-Beauty, Skincare, etc.).
*   **Interactive Cart**:
    *   Add to cart functionality with local storage persistence.
    *   Quantity controls.
    *   Coupon system (Try: `WELCOME10`, `LUXURY20`).
*   **Checkout Flow**: Custom modal with blur effect and personalized thank you note.

## 🛠️ Tech Stack

*   **HTML5**
*   **CSS3** (Vanilla CSS, no frameworks)
*   **JavaScript** (ES6+)

## 🚀 How to Deploy on Netlify

1.  Push this entire folder to a **GitHub repository**.
2.  Log in to **Netlify** and click **"Add new site"** > **"Import an existing project"**.
3.  Select **GitHub** and choose your repository `zayne-luxury`.
4.  **Build settings**:
    *   **Base directory**: `/` (leave empty)
    *   **Publish directory**: `/` (leave empty or use `.` if asked)
    *   **Build command**: (leave empty)
5.  Click **Deploy site**.

## 📂 Project Structure

*   `index.html` - Home page with hero section and featured products.
*   `products.html` - Full product catalog with filtering.
*   `contact.html` - Contact page.
*   `style.css` - Main stylesheet.
*   `script.js` - Core logic (Cart, Modal, Animations).
*   `home.js` - Specific logic for Home page featured products.
*   `products.js` - Product database.
*   `assets/` - Images and resources.
