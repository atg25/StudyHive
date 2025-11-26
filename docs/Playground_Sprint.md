# Playground Page Sprint Plan

**Feature:** Interactive Feature Playground  
**Owner:** Andrew Gardner (Frontend Lead)  
**Timeline:** November 21-24, 2025 (4 days)  
**Goal:** Build live demo page showcasing AI Summaries, Flashcards, and Tutoring Podcasts

---

## Overview

Create an interactive playground page where visitors can test StudyHive's core features without signing up. This serves as both a demo and a conversion tool for the landing page.

---

## Sprint Goals

### Primary Objectives

- ✅ Fully functional AI Summary generator (simulated)
- ✅ Interactive flashcard system with flip animations
- ✅ Tutoring podcast demo (simplified version or placeholder)
- ✅ Mobile-responsive brutalist design
- ✅ Integrated with main landing page navigation

### Success Metrics

- Page loads in <2 seconds
- All demos work on mobile (375px)
- Animations smooth at 60fps
- No real API calls (cost = $0)

---

## Day 1: Structure & AI Summary Demo (Nov 21 - 3 hours)

### Morning Session (1.5 hours)

**Task 1.1: Create Playground Page Structure**

- [ ] Create `/playground.html` with brutalist styling
- [ ] Copy header/footer from `index.html` for consistency
- [ ] Add hero section: "FEATURE PLAYGROUND - TRY IT YOURSELF"
- [ ] Create 3-tab navigation system (AI Summaries | Flashcards | Podcasts)
- [ ] Set up hexagon background pattern
- [ ] Link from main nav in `index.html`

**Deliverable:** Basic playground.html with navigation

---

### Afternoon Session (1.5 hours)

**Task 1.2: Build AI Summary Demo**

- [ ] Create sample notes database (JavaScript object)
  - CS 101: Binary search algorithm notes
  - History 202: Civil War lecture notes
  - Biology 301: Cell biology lab notes
  - Math 250: Calculus integration notes
  - English 201: Shakespeare analysis notes
- [ ] Build input interface:
  - Large textarea (brutalist border, no rounded corners)
  - Subject selector dropdown
  - "GENERATE SUMMARY" yellow CTA button
- [ ] Implement loading state:
  - Hexagon spinner animation
  - "PROCESSING..." text
  - 2-second setTimeout to simulate AI processing
- [ ] Create output display:
  - Summary card with thick borders
  - Pre-written summaries for each sample note
  - Smooth reveal animation (slide up from bottom)

**Deliverable:** Working AI summary demo with 5 sample notes

---

## Day 2: Flashcard Generator (Nov 22 - 2.5 hours)

### Morning Session (1.5 hours)

**Task 2.1: Flashcard Data & Logic**

- [ ] Create flashcard database for each subject:
  - 8-10 flashcards per subject
  - Question/answer format
  - Organized by difficulty (easy → hard)
- [ ] Build flashcard generation logic:
  - Parse summary or notes (simulated)
  - "Generate" flashcards instantly (pre-built data)
  - Counter system (Card X of Y)
- [ ] Implement navigation:
  - Previous/Next buttons (brutalist design)
  - Keyboard shortcuts (← → arrows)
  - Disable prev on first card, next on last card

**Sample Flashcards (CS 101):**

```javascript
[
  { q: "What is Big O notation?", a: "Describes algorithm time complexity" },
  { q: "Best case for binary search?", a: "O(1) - element at middle" },
  { q: "Worst case for binary search?", a: "O(log n) - element not found" },
];
```

**Deliverable:** Flashcard data structure and navigation logic

---

### Afternoon Session (1 hour)

**Task 2.2: Flashcard UI & Animations**

- [ ] Design flashcard component:
  - Large card (400px × 300px on desktop)
  - Thick black border (4px)
  - Question on front, answer on back
  - "TAP TO REVEAL" hint text
- [ ] Implement 3D flip animation:
  - CSS transform: rotateY(180deg)
  - 0.6s transition duration
  - Click/tap to flip
  - Smooth backface visibility
- [ ] Add brutalist styling:
  - No rounded corners
  - High contrast black/white/yellow
  - Hexagon accent in top-right corner
  - Monospace font for card numbers
- [ ] Mobile optimization:
  - Full-width cards on mobile
  - Touch-friendly flip gesture
  - Swipe to navigate (optional)

**Deliverable:** Fully animated flashcard system

---

## Day 3: Podcast Demo & Polish (Nov 23 - 2 hours)

### Morning Session (1 hour)

**Task 3.1: Tutoring Podcast Demo (Simplified)**

**Option A - Full Implementation:**

- [ ] Record 30-second sample podcast using text-to-speech
- [ ] Create brutalist audio player:
  - Custom controls (square buttons, not circles)
  - Yellow play/pause button
  - Thick border design
  - Waveform visualization (optional)
- [ ] Add transcript panel:
  - Timestamped show notes
  - Auto-scroll as audio plays
  - Click timestamp to jump

**Option B - Placeholder (Recommended for MVP):**

- [ ] Design podcast interface mockup:
  - Topic selector dropdown
  - "GENERATE PODCAST" button (disabled)
  - "COMING SOON - PREMIUM FEATURE" badge
  - Preview of what it will look like:
    - Waveform graphic (static image)
    - Sample transcript
    - Download button (disabled)
- [ ] Add to Premium tier marketing:
  - "Upgrade to unlock AI podcasts"
  - Shows value of paid tiers

**Recommendation:** Use Option B to save time, deliver polished core features

**Deliverable:** Podcast demo (placeholder or basic version)

---

### Afternoon Session (1 hour)

**Task 3.2: Interactive Polish**

- [ ] Add peer rating system to summaries:
  - Thumbs up/down buttons
  - Animated counter (123 helpful, 12 not helpful)
  - localStorage to save user's vote
  - Update count on click
- [ ] Implement share functionality:
  - "SHARE SUMMARY" button
  - Copy link to clipboard
  - Toast notification "Link copied!"
- [ ] Add export mockups:
  - "EXPORT AS PDF" button on summaries
  - "DOWNLOAD FLASHCARDS" button
  - Alert: "Feature available in Plus tier"
- [ ] Loading animations:
  - Hexagon spinner for all "generate" actions
  - Skeleton screens while loading
  - Smooth transitions

**Deliverable:** Polished interactive features

---

## Day 4: Responsive Testing & Deployment (Nov 24 - 1.5 hours)

### Morning Session (1 hour)

**Task 4.1: Mobile Responsiveness**

- [ ] Test on mobile viewports:
  - 375px (iPhone SE)
  - 390px (iPhone 12/13)
  - 768px (iPad)
- [ ] Fix layout issues:
  - Stack tabs vertically on mobile
  - Full-width buttons and inputs
  - Readable font sizes (16px minimum)
  - Touch targets 44px minimum
- [ ] Test touch interactions:
  - Flashcard flip on tap
  - Swipe gestures (if implemented)
  - Dropdown selectors on mobile
- [ ] Test on physical devices:
  - iPhone (Safari)
  - Android (Chrome)
  - Verify animations are smooth

**Deliverable:** Fully responsive playground page

---

### Afternoon Session (30 minutes)

**Task 4.2: Browser Testing & Deployment**

- [ ] Cross-browser testing:
  - Chrome (primary)
  - Firefox
  - Safari
  - Edge
- [ ] Performance optimization:
  - Minify CSS if needed
  - Optimize any images
  - Ensure <2s page load
- [ ] Accessibility check:
  - Keyboard navigation works
  - Focus states visible
  - Alt text on any images
  - ARIA labels on interactive elements
- [ ] Deploy to GitHub Pages:
  - Commit all changes
  - Push to main branch
  - Verify live at atg25.github.io/StudyHive/playground.html
  - Update index.html nav link

**Deliverable:** Live, tested playground page

---

## Technical Specifications

### File Structure

```
/playground.html              (main page)
/assets/
  /css/
    playground.css            (specific styles, if separated)
  /js/
    playground.js             (all demo logic)
    flashcards-data.js        (flashcard content)
    sample-notes.js           (note summaries)
  /audio/
    sample-podcast.mp3        (optional)
  /images/
    waveform-placeholder.svg  (if using static graphic)
```

### Demo Data Requirements

**AI Summaries (5 subjects × 1 summary each):**

- CS 101: Algorithms & data structures
- History 202: American Civil War
- Biology 301: Cell biology
- Math 250: Calculus II
- English 201: Shakespeare

**Flashcards (5 subjects × 8 cards each = 40 total):**

- Mix of definitions, concepts, problems
- Difficulty progression: easy → medium → hard
- Clear, concise questions and answers

**Podcast (1 sample):**

- Topic: "Understanding Binary Search"
- Length: 30 seconds
- Transcript: ~100 words with timestamps

---

## Design Specifications

### Color Palette (Consistent with Landing)

```css
--black: #0a0a0a;
--white: #ffffff;
--honey: #ffb800;
--gray: #1a1a1a;
```

### Typography

```css
--heading: "Space Grotesk", sans-serif;
--body: "Inter", sans-serif;
--mono: "JetBrains Mono", monospace;
```

### Key Components

**Tab Navigation:**

```
┌─────────────────────────────────────────┐
│ [AI SUMMARIES] [FLASHCARDS] [PODCASTS] │ ← Active tab has yellow bottom border
└─────────────────────────────────────────┘
```

**Summary Generator:**

```
┌─────────────────────────────────────────┐
│ SELECT SUBJECT: [Dropdown]              │
├─────────────────────────────────────────┤
│                                         │
│  [Large textarea with sample notes]     │
│                                         │
├─────────────────────────────────────────┤
│         [GENERATE SUMMARY]              │ ← Yellow button
└─────────────────────────────────────────┘
        ↓ (after 2s loading)
┌─────────────────────────────────────────┐
│ ⬢ AI SUMMARY                            │
│                                         │
│ [Generated summary text here...]        │
│                                         │
│ 👍 123 Helpful  👎 12 Not Helpful       │
│                                         │
│ [SHARE] [EXPORT PDF] [GENERATE CARDS]   │
└─────────────────────────────────────────┘
```

**Flashcard:**

```
Front:                    Back (flipped):
┌───────────────────┐    ┌───────────────────┐
│        ⬢         │    │        ⬢         │
│                   │    │                   │
│   What is Big O   │    │  Describes time   │
│    notation?      │    │   complexity of   │
│                   │    │   an algorithm    │
│                   │    │                   │
│  TAP TO REVEAL   │    │   TAP TO FLIP    │
│                   │    │                   │
│   Card 1 of 8    │    │   Card 1 of 8    │
└───────────────────┘    └───────────────────┘
   [← PREV] [NEXT →]        [← PREV] [NEXT →]
```

---

## Animation Specifications

### Hexagon Loading Spinner

```css
@keyframes spin {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}

.hexagon-spinner {
  width: 60px;
  height: 60px;
  animation: spin 1s linear infinite;
}
```

### Flashcard Flip

```css
.flashcard {
  transition: transform 0.6s;
  transform-style: preserve-3d;
}

.flashcard.flipped {
  transform: rotateY(180deg);
}
```

### Summary Reveal

```css
@keyframes slideUp {
  from {
    opacity: 0;
    transform: translateY(50px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.summary-output {
  animation: slideUp 0.4s ease-out;
}
```

---

## Interactive Features Checklist

### AI Summary Demo

- [ ] Subject dropdown (5 options)
- [ ] Pre-filled sample notes
- [ ] Generate button (2s simulated processing)
- [ ] Hexagon loading animation
- [ ] Summary display with reveal animation
- [ ] Peer rating buttons (functional with localStorage)
- [ ] Share button (copy to clipboard)
- [ ] Export PDF button (shows upgrade modal)
- [ ] "Generate Flashcards" CTA (switches to flashcard tab)

### Flashcard System

- [ ] Auto-generated from summary or notes
- [ ] 8-10 cards per subject
- [ ] Click/tap to flip (3D animation)
- [ ] Previous/Next navigation
- [ ] Keyboard shortcuts (← →)
- [ ] Card counter (X of Y)
- [ ] Download button (upgrade modal)
- [ ] Subject indicator badge

### Podcast Demo

- [ ] Topic selector
- [ ] Generate button (disabled or functional)
- [ ] Waveform visualization
- [ ] Transcript preview
- [ ] "Premium Feature" badge (if placeholder)
- [ ] Download button (disabled)

---

## Testing Checklist

### Functionality

- [ ] All dropdowns work
- [ ] Generate buttons trigger actions
- [ ] Loading states display correctly
- [ ] Summaries appear after loading
- [ ] Flashcards flip on click/tap
- [ ] Navigation buttons work
- [ ] Keyboard shortcuts work
- [ ] Rating buttons update counters
- [ ] Share button copies link
- [ ] Toast notifications appear

### Responsiveness

- [ ] Works at 375px (mobile)
- [ ] Works at 768px (tablet)
- [ ] Works at 1920px (desktop)
- [ ] Touch targets ≥ 44px
- [ ] Text readable on all sizes
- [ ] No horizontal scroll

### Performance

- [ ] Page loads < 2 seconds
- [ ] Animations smooth (60fps)
- [ ] No janky scrolling
- [ ] localStorage works

### Accessibility

- [ ] Keyboard navigation
- [ ] Focus indicators visible
- [ ] Color contrast WCAG AA
- [ ] Screen reader friendly (basic)

---

## Risk Management

| Risk                              | Likelihood | Impact | Mitigation                         |
| --------------------------------- | ---------- | ------ | ---------------------------------- |
| Animations laggy on mobile        | Medium     | Medium | Test early, simplify if needed     |
| Too many features to finish       | Low        | High   | Use podcast placeholder (Option B) |
| Flashcard flip broken on Safari   | Medium     | Medium | Test on iPhone early, use fallback |
| Sample content not diverse enough | Low        | Low    | Pre-write 5 quality examples       |

---

## Definition of Done

A feature is complete when:

- [ ] Code written and tested locally
- [ ] Works on Chrome, Firefox, Safari
- [ ] Responsive on mobile, tablet, desktop
- [ ] Animations smooth and polished
- [ ] Consistent with brutalist design system
- [ ] No console errors
- [ ] Committed to GitHub
- [ ] Live on GitHub Pages
- [ ] Linked from main navigation

---

## Post-Sprint: Optional Enhancements

If time permits after core features:

**Week 2 Additions:**

- [ ] Multiple summary styles (bullet points, detailed, concise)
- [ ] Flashcard shuffle mode
- [ ] Print-friendly flashcard layout
- [ ] Real text-to-speech for podcast
- [ ] Progress tracking (cards mastered vs. needs review)
- [ ] Quiz mode (multiple choice generated from flashcards)
- [ ] Dark mode toggle for playground
- [ ] Shareable playground links with pre-loaded content

**Nice-to-Have (Future):**

- [ ] Spaced repetition algorithm for flashcards
- [ ] Community-submitted summaries
- [ ] Real AI integration (when budget allows)
- [ ] Export to Anki format
- [ ] Collaborative study sessions

---

## Success Criteria

**Minimum Viable Playground (MVP):**

- ✅ AI Summary demo with 5 sample subjects
- ✅ Flashcard system with flip animation
- ✅ 40 total flashcards (5 subjects × 8 cards)
- ✅ Mobile responsive
- ✅ Loads in <2 seconds
- ✅ Zero API costs (all simulated)

**Stretch Goals:**

- 🎯 Working podcast demo (not just placeholder)
- 🎯 Swipe gestures on mobile flashcards
- 🎯 Animated rating counters
- 🎯 Local storage persistence
- 🎯 Share with pre-loaded content

---

## Next Steps After Completion

1. **User Testing** (Nov 25)

   - Share with team members
   - Get feedback on UX
   - Test on different devices

2. **Marketing Integration** (Nov 26)

   - Add playground screenshots to landing page
   - Update "Watch Demo" button to link to playground
   - Create GIF demos for social media

3. **Analytics Setup** (Nov 27)

   - Track which features get used most
   - Count summary generations
   - Monitor flashcard completions

4. **Backend Preparation** (Week 2)
   - Design API endpoints for real features
   - Plan database schema for user-generated content
   - Research AI API integration

---

## Daily Standup Questions

**Every day at 7 PM (15 min check-in):**

1. What playground features did I complete today?
2. What am I building tomorrow?
3. Any blockers or design decisions needed?
4. Does the brutalist style feel consistent?

---

## Resources

**Design Inspiration:**

- codepen.io/search/pens?q=flashcard+flip
- cssanimation.rocks/principles/
- brutalistwebsites.com

**Code References:**

- MDN: CSS 3D Transforms
- MDN: Web Audio API (if doing real podcast)
- LocalStorage API docs

**Assets Needed:**

- Hexagon SVG for spinner
- Sample note content (5 subjects)
- Flashcard Q&A pairs (40 total)
- Optional: 30s audio file

---

**Sprint Owner:** Andrew Gardner  
**Status:** Ready to Start  
**Start Date:** November 21, 2025  
**Target Completion:** November 24, 2025  
**Estimated Hours:** 9 hours total

---

**Last Updated:** November 21, 2025  
**Next Review:** November 22, 2025 (end of Day 1)
