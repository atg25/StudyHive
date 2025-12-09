# StudyHive

**Unapologetically Effective Study Platform**

A brutalist-design study tool that transforms class notes into AI-powered summaries, flashcards, and podcasts. Built as an NJIT IT310 Capstone Project.

## Features

- **AI-Generated Summaries** - Convert notes into structured study guides
- **Auto Flashcards** - Generate Q&A cards from your materials
- **Study Podcasts** - Turn summaries into audio for on-the-go learning
- **Peer Ratings** - Community-verified content quality
- **Tiered Pricing** - Free, Plus ($10/mo), Premium ($20/mo)

## Quick Start

1. **Clone the repository**

```bash
git clone https://github.com/atg25/StudyHive.git
cd StudyHive
```

2. **Run locally** (site root is `index.html` at the repo root)

```bash
python3 -m http.server 8000
```

3. **Open in browser**

```text
http://localhost:8000
```

## GitHub Pages

The published site now lives at the repository root (`index.html` on the `main` branch), so GitHub Pages should be pointed at the default root source rather than `public/`.

## Demo Accounts

- **Free Tier**: Username: `DemoFree` | Password: `123`
- **Plus Tier**: Username: `DemoPlus` | Password: `123`
- **Premium Tier**: Username: `DemoPrem` | Password: `123`

## Tech Stack

- **Frontend**: Vanilla HTML, CSS, JavaScript
- **Design**: Brutalist with hexagon/hive theme
- **Storage**: localStorage (no backend required)
- **Demo**: Static CS101 Binary Search content

## Project Structure

```
public/
├── index.html           # Landing page
├── playground.html      # Interactive demo
├── signup.html         # Account creation
├── signin.html         # Login
├── account.html        # User profile
├── payment.html        # Subscription
├── assets/
    ├── css/
    │   ├── base.css        # Shared styles
    │   ├── landing.css     # Homepage styles
    │   └── playground.css  # Demo styles
    ├── js/
    │   ├── auth.js         # Authentication
    │   ├── playground.js   # Demo logic
    │   ├── playground-data.js  # Sample data
    │   └── tos-modal.js    # Terms of Service
    ├── icons/          # SVG icons
    └── audio/          # Demo podcast MP3
```

## Team

- **Andrew Gardner** - Frontend & UI/UX
- **Jovan Fernandez** - Database & Backend
- **Umar Farooq** - AI Integration & Payments
- **Elliot Cecere** - Project Manager

## Project Timeline

**Duration**: September 19 - December 3, 2025  
**Presentation**: December 10, 2025

## Design Philosophy

Bold, brutalist design inspired by brands like Dbrand. High contrast (#0a0a0a black, #ffffff white, #ffb800 honey), sharp edges, and hexagonal elements representing the collaborative "hive" concept.

## License

© 2025 StudyHive | NJIT IT310 Capstone Project

---

**Note**: This is a prototype demonstration. AI features use hardcoded data, and payment processing is simulated for academic purposes only.
