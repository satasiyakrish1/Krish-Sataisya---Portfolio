# Krish Satasiya — Portfolio

A React portfolio website based on the modern black-and-red design system from the reference HTML file, with all content updated to Krish Satasiya's personal brand.

## 🗂 Project Structure

```
krish-portfolio/
├── public/
│   └── index.html              # HTML shell + Google Fonts
├── src/
│   ├── index.js                # React entry point
│   ├── index.css               # Global CSS variables & resets
│   ├── App.jsx                 # Root component (page layout)
│   ├── App.css                 # Global utility classes
│   └── components/
│       ├── Navbar.jsx          # Sticky top navigation (desktop + mobile)
│       ├── Navbar.css
│       ├── Hero.jsx            # Hero headline, CTAs, video placeholder
│       ├── Hero.css
│       ├── Ticker.jsx          # Scrolling tech stack marquee
│       ├── Ticker.css
│       ├── WhyMe.jsx           # 7-benefit cards grid
│       ├── WhyMe.css
│       ├── Stats.jsx           # 4-stat grid with quadrant background
│       ├── Stats.css
│       ├── Services.jsx        # 6-service cards (3-col grid)
│       ├── Services.css
│       ├── Process.jsx         # 4-step dev process cards
│       ├── Process.css
│       ├── Projects.jsx        # Featured project cards
│       ├── Projects.css
│       ├── Testimonials.jsx    # Client reviews + platform ratings
│       ├── Testimonials.css
│       ├── Contact.jsx         # Contact form + social links
│       ├── Contact.css
│       ├── Footer.jsx          # Footer with tagline, skills, social
│       └── Footer.css
└── package.json
```

## 🚀 Getting Started

### Prerequisites
- Node.js 16+ and npm

### Install & Run

```bash
# Install dependencies
npm install

# Start development server
npm start

# Build for production
npm run build
```

Opens at **http://localhost:3000**

## 🎨 Design System

| Token | Value |
|-------|-------|
| Primary color | `#f81927` (red) |
| Font Display | Outfit |
| Font Mono | JetBrains Mono |
| Background | White `#fff` |
| Border color | Black `#000` |

## ✏️ Customization

### Update your info
- **Contact links**: Edit `Contact.jsx` and `Footer.jsx` (email, LinkedIn, GitHub)
- **Projects**: Edit `Projects.jsx` — add real project screenshots & links
- **Testimonials**: Edit `Testimonials.jsx` with real client feedback
- **Stats**: Edit `Stats.jsx` — update years, project count, clients, satisfaction

### Add your photo / project images
Replace the placeholder divs in `Projects.jsx` with `<img>` tags pointing to your assets in `public/`.

### Deploy
```bash
npm run build
# Deploy the /build folder to Netlify, Vercel, or any static host
```
