# 📚 Waikiki Library — Responsive Book Website

<div align="center">

![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![GitHub Pages](https://img.shields.io/badge/GitHub%20Pages-222222?style=for-the-badge&logo=githubpages&logoColor=white)

**A modern, responsive digital manga & webtoon library website built with pure HTML, CSS, and JavaScript.**

[🌐 View Live Demo](https://azlan-sys.github.io/Waikiki-Library-Frontend-Project/)

</div>

---

## 📖 About The Project

**Waikiki Library** is a fully responsive front-end web application that simulates a digital manga and webtoon library experience. Users can browse, discover, and explore a curated collection of popular manga and webtoon titles — all within a sleek, modern dark-themed interface.

This project was developed as part of an academic assignment for **ISP 465 (LAB)** to demonstrate front-end web development skills including responsive design, interactive UI components, and modern web aesthetics.

### 🎯 Target Audience
- Manga and webtoon readers & enthusiasts
- Anyone looking for a visually appealing digital library experience

---

## ✨ Features

### Core Features
| Feature | Description |
|---------|-------------|
| 🌙 **Dark/Light Theme Toggle** | Switch between dark and light modes; preference saved in `localStorage` |
| 📱 **Fully Responsive** | Mobile-first design that adapts seamlessly to all screen sizes |
| 🔍 **Search Overlay** | Full-screen search modal for finding books quickly |
| 📖 **Book Detail Pages** | 13 individual book pages with synopsis, ratings, genre tags & trailers |
| 📋 **Watchlist Management** | Add and remove manga from a personal watchlist |
| 📊 **Reading Progress Tracking** | Visual progress bars showing reading completion |
| 📝 **Feedback System** | Multi-field form with emoji-based satisfaction ratings |
| 📅 **Events Page** | Upcoming library events with WhatsApp sharing |
| 🔗 **QR Code Generator** | Generate QR codes for any text or URL |
| 🎵 **Audio Playback** | Genre page features audio functionality |
| 🔐 **Login/Register UI** | Dual-form authentication with social login options (Google, Apple) |

### UI/UX Highlights
- **Swiper.js Carousels** — Touch-enabled sliders for featured books and testimonials
- **ScrollReveal Animations** — Elements animate smoothly into view on scroll
- **Animated Hamburger Menu** — CSS-powered mobile navigation
- **Floating Shape Animations** — Dynamic background on login page
- **Hover Zoom Effects** — Interactive image scaling on book cards
- **Emoji Satisfaction Rating** — Fun, visual feedback selector
- **Star Ratings** — Visual rating display on book detail pages

---

## 🗂️ Pages Overview

### 1. 🏠 Main Page (`main page.html`)
The homepage and heart of the website featuring:
- Hero section showcasing a featured manga title
- Featured Books carousel (12+ titles)
- Discount/promotional section
- New arrivals grid
- User testimonials with star ratings
- Newsletter subscription form
- Full navigation with search, login, and theme toggle

### 2. 📅 Events (`events.html`)
Lists upcoming library events including:
- Waikiki World Cosplay Summit
- Manga Marathon Reading Challenge
- Meet the Mangaka: Live Q&A
- Anime Movie Night
- Manga Trivia Night & Art Workshop

Each event includes date, time, venue, description, and WhatsApp sharing.

### 3. 💬 Feedback (`feedback.html`)
A comprehensive feedback form with:
- Name, email, phone, and subject fields
- Emoji-based satisfaction rating (5 levels)
- Comment textarea
- Newsletter opt-in checkbox

### 4. 🔐 Login Page (`login page.html`)
- Side-by-side Login and Register forms
- Social login options (Google, Apple)
- Animated floating background shapes
- Gradient-styled interface

### 5. 👤 Profile Pages
- **Profile Overview** (`profile.html`) — User stats, reading streaks, achievements, genre tags
- **Continue Watching** (`profile-continue-watching.html`) — Grid of in-progress manga with progress bars
- **Watchlist** (`profile-watchlist.html`) — Bookmarked manga with remove functionality

### 6. 📚 Book Detail Pages (13 titles)
Individual detail pages for each manga featuring cover art, synopsis, genre tags, ratings, chapter lists, and trailer references.

### 7. 🎭 Genre Page (`WAKIKI LIBRARY-ikram/Genre.html`)
Browse manga by genre: Sports, Comedy, Adventure, Horror, and Romance — with image carousels and audio features.

### 8. 📱 QR Code Generator (`QR-code generator/QR.html`)
Standalone tool to generate and download QR codes from any text or URL input.

---

## 📚 Featured Manga & Webtoon Titles

| # | Title | # | Title |
|---|-------|---|-------|
| 1 | Solo Leveling | 8 | Sweet Home |
| 2 | Tower of God | 9 | Lore Olympus |
| 3 | Demon Slayer | 10 | Lumine |
| 4 | Lookism | 11 | A Day Before Us |
| 5 | I Love Yoo | 12 | Your Throne |
| 6 | Unordinary | 13 | The Way of the House Husband |
| 7 | Villain to Kill | | |

---

## 🛠️ Tech Stack

| Technology | Usage |
|-----------|-------|
| **HTML5** | Semantic page structure |
| **CSS3** | Custom styling with CSS Grid, Flexbox, variables, transitions & animations |
| **Vanilla JavaScript** | DOM manipulation, event handling, localStorage |
| **[Swiper.js](https://swiperjs.com/)** | Touch-enabled carousels and sliders |
| **[ScrollReveal.js](https://scrollrevealjs.org/)** | Scroll-triggered entrance animations |
| **[Remix Icons](https://remixicon.com/)** | Icon library via CDN |
| **QR Code API** | External API for QR code generation |
| **GitHub Pages** | Hosting and deployment |
| **GitHub Actions** | Automated CI/CD deployment pipeline |

> **No frameworks or backend required** — this is a purely static front-end project.

---

## 🎨 Design Philosophy

- **Dark Theme Default** — Deep dark backgrounds with vibrant orange/amber accent colors
- **CSS Custom Properties** — Extensive use of CSS variables for easy theming
- **Card-Based Layouts** — Modern card UI with rounded corners and subtle shadows
- **Glassmorphism Effects** — Translucent overlays on certain elements
- **Mobile-First** — Designed for mobile, then scaled up for tablets and desktops
- **Smooth Micro-Animations** — Hover effects, scale transforms, and color transitions

---

## 📁 Project Structure

```
Waikiki-Library-Frontend-Project/
│
├── index.html                         # Entry point (redirects to main page)
├── main page.html                     # Homepage
├── events.html                        # Events listing page
├── feedback.html                      # Feedback form page
├── login page.html                    # Login & registration page
├── profile.html                       # User profile overview
├── profile-continue-watching.html     # Continue reading page
├── profile-watchlist.html             # Watchlist management page
│
├── assets/
│   ├── css/
│   │   ├── main page.css              # Main stylesheet
│   │   ├── Genre.css                  # Genre page styles
│   │   ├── profile.css                # Profile styles
│   │   ├── profile-continue-watching.css
│   │   ├── profile-watchlist.css
│   │   └── swiper-bundle.min.css      # Swiper library styles
│   │
│   ├── js/
│   │   ├── main.js                    # Main page JavaScript
│   │   ├── carousel.js                # Carousel logic
│   │   ├── login page.js              # Login form interactions
│   │   ├── profile.js                 # Profile page logic
│   │   ├── profile-watchlist.js       # Watchlist management
│   │   ├── swiper-bundle.min.js       # Swiper library
│   │   └── scrollreveal.min.js        # ScrollReveal library
│   │
│   ├── img/                           # All image assets (covers, UI graphics)
│   ├── sound/                         # Audio assets
│   │
│   └── book details/                  # Individual book detail pages
│       ├── Solo Leveling/
│       ├── Tower of God/
│       ├── Demon Slayer/
│       └── ... (13 titles total)
│
├── QR-code generator/                 # QR code tool
│   ├── QR.html
│   ├── QR.css
│   └── QR.js
│
├── WAKIKI LIBRARY-ikram/              # Genre browsing section
│   ├── Genre.html
│   ├── css/
│   ├── js/
│   ├── image/
│   └── audio/
│
├── remove item/                       # Item removal features
│
├── .github/workflows/deploy.yml       # GitHub Actions deployment
├── .gitignore
├── .nojekyll
└── README.md
```

---

## 🚀 Getting Started

### View Live
Visit the deployed site: **[https://azlan-sys.github.io/Waikiki-Library-Frontend-Project/](https://azlan-sys.github.io/Waikiki-Library-Frontend-Project/)**

### Run Locally
1. **Clone the repository**
   ```bash
   git clone https://github.com/azlan-sys/Waikiki-Library-Frontend-Project.git
   ```
2. **Navigate to the project directory**
   ```bash
   cd Waikiki-Library-Frontend-Project
   ```
3. **Open in your browser**
   ```bash
   # Simply open index.html in any browser, or use a live server:
   # VS Code: Install "Live Server" extension → Right-click index.html → "Open with Live Server"
   ```

> **No installation or build step needed** — it's a static site!

---

## 🤝 Team

| Member | Contribution |
|--------|-------------|
| **Azlan** | Main website development (homepage, book details, login, profile, events, feedback) |
| **Ikram** | Genre page, audio features, carousel components |

---

## 📄 License

This project was created for educational purposes as part of the **ISP 465 (LAB)** coursework.

---

<div align="center">

**Made with ❤️ by the Waikiki Library Team**

</div>
