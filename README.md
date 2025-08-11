# 💻 Interactive Rating Component

![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
[![Frontend Mentor](https://img.shields.io/badge/Frontend%20Mentor-3e54a3?style=for-the-badge&logo=frontendmentor&logoColor=white)](https://www.frontendmentor.io/)
[![Visual Studio Code](https://img.shields.io/badge/VS%20Code-007ACC?style=for-the-badge&logo=visual-studio-code&logoColor=white)](https://code.visualstudio.com/)
[![Git](https://img.shields.io/badge/Git-F05032?style=for-the-badge&logo=git&logoColor=white)](https://git-scm.com/)
[![GitHub](https://img.shields.io/badge/GitHub-181717?style=for-the-badge&logo=github&logoColor=white)](https://github.com/)
[![Netlify](https://img.shields.io/badge/Netlify-00C7B7?style=for-the-badge&logo=netlify&logoColor=white)](https://www.netlify.com/)
[![PerfectPixel](https://img.shields.io/badge/PerfectPixel-F56C94?style=for-the-badge)](https://chrome.google.com/webstore/detail/perfectpixel-by-welldonecod/dkaagdgjmgdmbnecmcefdhjekcoceebi)
![Image → Code](https://img.shields.io/badge/Image%20→%20Code-✔️-6a1b9a?style=for-the-badge&labelColor=2e003e&logoColor=white)
![Semantic HTML](https://img.shields.io/badge/Semantic%20HTML-ff9800?style=for-the-badge)
![Accessible](https://img.shields.io/badge/Accessibility-A11Y-0052cc?style=for-the-badge)
![Responsive Layout](https://img.shields.io/badge/Responsive%20Layout-Full%20Support-blue?style=for-the-badge)
![Mobile First](https://img.shields.io/badge/Mobile--First-Design-orange?style=for-the-badge)
![Light Mode](https://img.shields.io/badge/Light--Mode-Available-fff7ed?style=for-the-badge&logo=sun&logoColor=ff9800)
![Dynamic Content](https://img.shields.io/badge/Dynamic%20Content-Available-673ab7?style=for-the-badge)
[![Google Lighthouse](https://img.shields.io/badge/Lighthouse-Audit-00B0FF?style=for-the-badge&logo=lighthouse&logoColor=white)](./assets/downloads/lighthouse-performance-report.pdf)

[![Netlify Status](https://api.netlify.com/api/v1/badges/8b09d18e-e389-493b-81b0-24db68c68d35/deploy-status)](https://interactive-rating-component-fcc-jiro.netlify.app/)
![Status](https://img.shields.io/badge/status-complete-brightgreen)
![Learning Path](https://img.shields.io/badge/learning%20path-month%205-blue)
![Views](https://visitor-badge.laobi.icu/badge?page_id=CodingWithJiro.frontend-mentor-interactive-rating-component&left_text=repo%20views)

## ℹ️ An Interactive Rating Component for a Fictional Support Service

| _Mobile Preview (375x812)_                                   | _Desktop Preview (1440x960)_                                    |
| ------------------------------------------------------------ | --------------------------------------------------------------- |
| ![Mobile](./assets/img/site-preview-mobile-dark_375x812.png) | ![Desktop](./assets/img/site-preview-desktop-dark_1440x960.png) |
| ![Mobile](./assets/img/site-preview-mobile_375x812.png)      | ![Desktop](./assets/img/site-preview-desktop_1440x960.png)      |

A responsive, accessible, and theme-toggle-enabled rating component where users can select a score from 1–5 and submit their feedback.

Created as part of the building challenges from [Frontend Mentor](https://www.frontendmentor.io/).

---

## 🔍 Overview

This project replicates a professional "rate your experience" card that adapts seamlessly between mobile and desktop layouts. The interface includes both light and dark mode themes, ensures smooth animations, and follows accessibility guidelines.

The component features custom focus states for keyboard navigation, hover interactions, and reduced-motion support for users who prefer minimal animation. Once a rating is submitted, a thank-you state is dynamically rendered with the selected score.

---

## ✨ Features

- Dark/light theme toggle using CSS variables
- Accessible with various dynamic ARIA attributes
- Mobile-first, fully responsive design
- Semantic HTML structure
- Focus styles for keyboard users
- Keyboard navigation for changing ratings
- Guarded code logic when submitting without selecting a rating
- Dynamic Confirmation Message on submission
- Reduced Motion Support based on `prefers-reduced-motion`
- [PerfectPixel](https://chrome.google.com/webstore/detail/perfectpixel-by-welldonecod/dkaagdgjmgdmbnecmcefdhjekcoceebi) alignment with design mockups

---

## 🧠 What I Learned

- Building accessible interactive components with semantic HTML
- Creating a functional keyboard navigation logic with `.focus()` and `.click()` methods
- Gained more experience in writing modular JavaScript for cleaner code organization
- Balancing UI feedback between clarity and non-intrusiveness wherein I used `alert()` in my previous code which is not good for UX
- I tried implementing more of the `animation` CSS property and using animation resets in JavaScript using `void element.offsetWidth`
- Complementing CSS animations with `addEventListener("animationend")` and `setTimeout()` for smooth transitions
- Guarding my site from spam clicks by disabling buttons and elements with `button.disabled = true` and `element.style.pointerEvents = "none"` and re-enabling them when an animation ends

---

## 🛠️ Tech Used

- HTML5
- CSS3
- JavaScript
- Git
- GitHub
- Netlify

---

## 🎨 Design Reference & Tools

- JPG design image
- PerfectPixel

---

## 🚀 How to Run

1. Clone the repository
2. Open `index.html` in your browser

---

## 🌐 Live Demo

Or you can check out the 👉 [live website here](https://interactive-rating-component-fcc-jiro.netlify.app/)

---

## 📊 Performance Report

A **Google Lighthouse** audit was conducted on the final version of this project. You can view the full report [here](./assets/downloads/lighthouse-performance-report.pdf).

---

## 🧑‍💻 Author

Created by **Elmar Chavez**

🗓️ Month/Year: **August 2025**

📚 Journey: **5<sup>th</sup>** month of learning _frontend web development_.
