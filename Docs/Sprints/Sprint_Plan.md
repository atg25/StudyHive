# Capstone Project 9 - Two-Week Sprint Plan

**Team:** Andrew Gardner, Jovan Fernandez, Umar Farooq, Elliot Cecere  
**Timeline:** November 19 - December 3, 2025  
**Presentation Date:** December 10, 2025

---

## Sprint Overview

### Objectives

- Deliver functional prototype with user auth, file management, AI integration, and payment demo
- Create professional presentation materials
- Deploy to NJIT server with complete documentation

### 🤖 AI SUGGESTIONS - Core Improvements

- **Focus on peer-verified summaries** as unique differentiator (not just AI alone)
- **Mobile-first design** - students study on phones primarily
- **Simplify payment to mock demo** - save $40 and complexity, clearly label as prototype
- **Use modern stack** - TailwindCSS, Supabase, Vercel for faster development
- **Pre-answer:** "Why not just use ChatGPT?" - persistence, organization, community verification, purpose-built study tools

### Team Roles & Responsibilities

- **Elliot Cecere (PM):** Coordinate tasks, manage timeline, oversee integration, analytics tracking
- **Andrew Gardner:** Database architecture, backend logic, caching strategy
- **Jovan Fernandez:** Frontend UI/UX, **mobile-first responsive design**, accessibility
- **Umar Farooq:** AI integration (GPT-3.5/Claude for cost savings), payment flow simulation

---

## Week 1: Foundation & Core Features (Nov 19-25)

### Day 1-2 (Nov 19-20): Project Setup & Database

**Priority:** Critical Path  
**Owner:** Andrew (Lead), All team members

#### Tasks

- [ ] Initialize GitHub repository with proper structure
  - Create folders: `/public`, `/src`, `/database`, `/docs`, `/assets`
  - Set up `.gitignore` for sensitive files
  - Add README.md with project overview
- [ ] Database Schema Design (Andrew)
  - [ ] Create ER diagram
  - [ ] Design `users` table (id, username, email, password_hash, tier, created_at)
  - [ ] Design `notes` table (id, user_id, title, file_path, upload_date, category, visibility, view_count, share_token)
  - [ ] Design `subscriptions` table (id, user_id, tier, start_date, end_date, status)
  - [ ] Design `ai_summaries` table (id, note_id, summary_text, created_at, **is_cached, helpful_count, not_helpful_count**)
  - [ ] Design `payments` table (id, user_id, amount, tier, transaction_id, date, **is_simulated**)
  - [ ] **🤖 AI SUGGESTION:** Add `summary_ratings` table (id, summary_id, user_id, rating, comment, created_at) for peer verification
  - [ ] **🤖 AI SUGGESTION:** Add `analytics` table (id, user_id, action_type, metadata, timestamp) for tracking usage
  - [ ] **🤖 AI SUGGESTION:** Add indexes on user_id, note_id, created_at for performance with 100+ users
- [ ] Set up MySQL database on NJIT server (Andrew)

  - [ ] Create database instance
  - [ ] Run schema creation scripts
  - [ ] Test connections
  - [ ] Insert sample data for testing

- [ ] Environment Configuration (All)
  - [ ] Create `config.php` with database credentials
  - [ ] Set up local development environments
  - [ ] Test NJIT server access and permissions

**Deliverable:** Working database with all tables, GitHub repo initialized

---

### Day 3-4 (Nov 21-22): Authentication System

**Priority:** Critical Path  
**Owner:** Andrew (Backend), Jovan (Frontend)

#### Tasks

- [ ] Backend Authentication (Andrew)

  - [ ] Create `register.php` endpoint
    - Input validation (email format, password strength)
    - Password hashing using `password_hash()`
    - Insert new users into database
    - Error handling for duplicate emails
  - [ ] Create `login.php` endpoint
    - Verify credentials with `password_verify()`
    - Start PHP session
    - Store user data in session variables
  - [ ] Create `logout.php` endpoint
    - Destroy session
    - Redirect to homepage
  - [ ] Create `auth_check.php` middleware
    - Verify session on protected pages
    - Redirect unauthorized users

- [ ] Frontend Pages (Jovan)
  - [ ] Design registration page (`register.html`)
    - Form fields: username, email, password, confirm password
    - Client-side validation with JavaScript
    - **🤖 AI SUGGESTION:** Mobile-first responsive design (test 375px first, then scale up)
  - [ ] Design login page (`login.html`)
    - Form fields: email, password
    - "Remember me" option
    - "Forgot password" link (placeholder)
  - [ ] Create navigation bar component
    - Show different options for logged-in vs logged-out users
    - User profile dropdown
    - **🤖 AI SUGGESTION:** Add dark mode toggle in navbar
    - **🤖 AI SUGGESTION:** Show user stats badge (e.g., "12 notes uploaded")
    - **🤖 AI SUGGESTION:** Add dark mode toggle in navbar
    - **🤖 AI SUGGESTION:** Show user stats badge (e.g., "12 notes uploaded")
- [ ] Session Management (Andrew)
  - [ ] Implement secure session handling
  - [ ] Set session timeout (30 minutes)
  - [ ] Create "Remember Me" functionality with cookies

**Deliverable:** Users can register, login, logout with persistent sessions

---

### Day 5-6 (Nov 23-24): File Upload & Management

**Priority:** Critical Path  
**Owner:** Andrew (Backend), Jovan (Frontend)

#### Tasks

- [ ] Backend File Handling (Andrew)

  - [ ] Create `upload.php` endpoint
    - Accept PDF, DOCX, TXT files (max 10MB)
    - Validate file types and sizes
    - Generate unique filenames
    - Store files in `/uploads/user_id/` directory
    - Insert metadata into `notes` table
    - Associate uploads with logged-in user
  - [ ] Create `notes_list.php` API
    - Retrieve all notes for current user
    - Return JSON with note metadata
    - Filter by category/date
  - [ ] Create `download.php` endpoint
    - Verify user owns note or note is public
    - Serve file with proper headers
  - [ ] Create `delete_note.php` endpoint
    - Remove file from server
    - Delete database record

- [ ] Frontend Upload Interface (Jovan)
  - [ ] Design upload page (`upload.html`)
    - Drag-and-drop file upload area
    - File type indicator
    - Progress bar for uploads
    - Form fields: title, category, visibility (public/private)
    - **🤖 AI SUGGESTION:** Add keyboard shortcut (Ctrl/Cmd + U) for quick upload
    - **🤖 AI SUGGESTION:** Show file size quota remaining
  - [ ] Create notes dashboard (`dashboard.html`)
    - Grid/list view of uploaded notes
    - Search and filter functionality
    - Sort by date, title, category
    - Download and delete buttons
    - **🤖 AI SUGGESTION:** Show "most viewed" and "most helpful" notes sections
    - **🤖 AI SUGGESTION:** Add simple stats widget: "You've uploaded X notes, generated Y summaries this week"
  - [ ] Build note preview modal
    - Show note details
    - Display AI summary (if available)
    - Download/share options
    - **🤖 AI SUGGESTION:** Add markdown preview for formatted notes
    - **🤖 AI SUGGESTION:** Add "Share via link" button that generates unique URL
    - **🤖 AI SUGGESTION:** Add "Export summary as PDF" button

**Deliverable:** Users can upload, view, download, and delete their notes

---

### Day 7 (Nov 25): AI Integration - Phase 1

**Priority:** Critical Path  
**Owner:** Umar

#### Tasks

- [ ] AI Service Setup (Umar)

  - [ ] Choose AI provider (OpenAI GPT-4, Claude, or similar)
  - [ ] Set up API credentials
  - [ ] Create `ai_service.php` wrapper class
    - Function: `generateSummary($text)`
    - Function: `generateFlashcards($text)`
    - Function: `generateQuiz($text)`
    - Error handling for API failures
    - Rate limiting logic

- [ ] Text Extraction (Umar)

  - [ ] Implement PDF text extraction (use library like `Smalot\PdfParser`)
  - [ ] Implement DOCX text extraction (use PHPWord)
  - [ ] Implement TXT reading
  - [ ] Create unified `extractText($filePath)` function

- [ ] Summary Generation (Umar)

  - [ ] Create `process_note.php` endpoint
    - Extract text from uploaded file
    - Send to AI API for summarization
    - Store result in `ai_summaries` table
    - Return summary to frontend
  - [ ] Create background processing option
    - Queue system for large files
    - Status tracking (processing/complete/failed)

- [ ] Frontend Integration (Jovan + Umar)
  - [ ] Add "Generate Summary" button to notes
  - [ ] Display loading state during processing
  - [ ] Show AI-generated summary in modal
  - [ ] Add copy/export summary functionality
  - [ ] **🤖 AI SUGGESTION - PEER VERIFICATION:** Add thumbs up/down rating below summaries
  - [ ] **🤖 AI SUGGESTION:** Show "X students found this helpful" counter
  - [ ] **🤖 AI SUGGESTION:** Allow users to submit improved versions of summaries
  - [ ] **🤖 AI SUGGESTION:** Highlight community-verified summaries with badge

**Deliverable:** AI summaries working for uploaded notes + peer verification system (unique differentiator)

---

## Week 2: Polish & E-Commerce (Nov 26-Dec 2)

### Day 8-9 (Nov 26-27): Subscription Tier System

**Priority:** High  
**Owner:** Andrew (Backend), Jovan (Frontend)

#### Tasks

- [ ] Tier Logic Implementation (Andrew)

  - [ ] Create `check_tier_access.php` function
    - Free: view notes, basic AI summaries (limit 5/month)
    - Plus: unlimited summaries, custom study packets, advanced AI
    - Premium: AI tutoring, video walkthroughs, priority support
  - [ ] Implement usage tracking
    - Count AI requests per user per month
    - Store in `usage_tracking` table
  - [ ] Create tier upgrade/downgrade logic
  - [ ] Build tier comparison API endpoint

- [ ] Tier-Based Features (Umar)

  - [ ] Free tier: Basic summaries only
  - [ ] Plus tier: Add flashcard generation
  - [ ] Premium tier: Add quiz generation + detailed explanations
  - [ ] Show upgrade prompts when limits reached

- [ ] Frontend Tier Pages (Jovan)
  - [ ] Design pricing page (`pricing.html`)
    - Three-column layout (Free/Plus/Premium)
    - Feature comparison table
    - "Current Plan" indicator
    - "Upgrade" CTAs
  - [ ] Create tier badges for UI
    - Show user's current tier in navbar
    - Display tier benefits on dashboard
  - [ ] Build upgrade modal
    - Explain benefits of upgrading
    - Link to payment page

**Deliverable:** Tiered feature access with clear upgrade paths

---

### Day 10-11 (Nov 28-29): Payment Integration

**Priority:** High  
**Owner:** Umar (Lead), Andrew (Support)

#### Tasks

- [ ] Payment Gateway Setup (Umar)
  - [ ] Create Stripe account (use test mode)
  - [ ] Set up Stripe API keys
  - [ ] Create `stripe_config.php` with credentials
  - [ ] Define pricing:
    - Plus: $9.99/month
    - Premium: $19.99/month
- [ ] Checkout Flow (Umar)

  - [ ] Create `checkout.php` page
    - Stripe Elements integration
    - Display selected tier and price
    - Collect payment information
    - Process payment via Stripe API
  - [ ] Create `process_payment.php` endpoint
    - Create Stripe payment intent
    - Handle successful payment
    - Update user tier in database
    - Record transaction in `payments` table
    - Send confirmation email (simulated)
  - [ ] Create `webhook.php` for Stripe events
    - Handle subscription renewals
    - Handle payment failures
    - Update database accordingly

- [ ] PayPal Alternative (Umar)

  - [ ] Set up PayPal sandbox account
  - [ ] Create PayPal button integration
  - [ ] Process PayPal payments
  - [ ] Unify payment recording logic

- [ ] Payment UI (Jovan + Umar)
  - [ ] Design checkout page
    - Order summary
    - Payment method selection (Stripe/PayPal)
    - Secure payment form
  - [ ] Create success page (`payment_success.html`)
    - Confirmation message
    - Receipt details
    - Link back to dashboard
  - [ ] Create failure page (`payment_failed.html`)
    - Error message
    - Retry option

**Deliverable:** Working payment flow for tier upgrades (test mode)

---

### Day 12 (Nov 30): UI/UX Polish & Responsive Design

**Priority:** Medium  
**Owner:** Jovan (Lead), All review

#### Tasks

- [ ] Design System (Jovan)

  - [ ] Create consistent color scheme
    - Primary: Educational blue (#2563eb)
    - Secondary: Success green (#10b981)
    - Accent: Premium gold (#f59e0b)
  - [ ] Define typography hierarchy
  - [ ] Create reusable CSS components
  - [ ] Build component library

- [ ] Homepage Design (Jovan)

  - [ ] Hero section with value proposition
  - [ ] Feature highlights (AI summaries, collaboration, tiers)
  - [ ] Call-to-action buttons (Sign Up/Login)
  - [ ] Sample screenshots/mockups
  - [ ] Testimonials section (mock data)

- [ ] Responsive Design (Jovan)

  - [ ] Test all pages on mobile (375px)
  - [ ] Test on tablet (768px)
  - [ ] Test on desktop (1920px)
  - [ ] Fix layout issues
  - [ ] Optimize images for performance

- [ ] UX Improvements (Jovan)

  - [ ] Add loading spinners for async operations
  - [ ] Implement toast notifications for actions
  - [ ] Add form validation feedback
  - [ ] Create empty states for dashboard
  - [ ] Add tooltips for complex features

- [ ] Accessibility (Jovan)
  - [ ] Add alt text to images
  - [ ] Ensure keyboard navigation works
  - [ ] Test color contrast ratios (WCAG AA minimum)
  - [ ] Add ARIA labels where needed
  - [ ] **🤖 AI SUGGESTION:** Add text-to-speech for summaries using browser Speech API (free, impressive demo feature)
  - [ ] **🤖 AI SUGGESTION:** Implement high-contrast mode toggle
  - [ ] **🤖 AI SUGGESTION:** Add keyboard shortcuts guide (press '?' to show)

**Deliverable:** Polished, responsive, accessible UI across all pages

---

### Day 13 (Dec 1): Testing & Sample Data

**Priority:** High  
**Owner:** All team members

#### Tasks

- [ ] Create Sample Data (Andrew)

  - [ ] Generate 5-10 test user accounts
  - [ ] Upload 20+ sample notes across categories
  - [ ] Create AI summaries for all sample notes
  - [ ] Set users to different tiers
  - [ ] Create mock payment history

- [ ] Feature Testing (All)

  - [ ] Test user registration edge cases
  - [ ] Test login with wrong credentials
  - [ ] Test file upload limits
  - [ ] Test AI summary generation
  - [ ] Test tier restrictions
  - [ ] Test payment flow (sandbox)
  - [ ] Test file download/delete
  - [ ] Test search and filter

- [ ] Cross-Browser Testing (Jovan)

  - [ ] Test on Chrome
  - [ ] Test on Firefox
  - [ ] Test on Safari
  - [ ] Fix browser-specific issues

- [ ] Security Review (Andrew)

  - [ ] SQL injection prevention (prepared statements)
  - [ ] XSS prevention (input sanitization)
  - [ ] CSRF protection (tokens)
  - [ ] File upload validation
  - [ ] Session security
  - [ ] Password strength requirements

- [ ] Performance Optimization (All)
  - [ ] **🤖 AI SUGGESTION:** Optimize database queries - add indexes on user_id, note_id, created_at from start
  - [ ] **🤖 AI SUGGESTION:** Test with 100+ users, not just 5 (simulate realistic load)
  - [ ] Minify CSS/JS
  - [ ] Compress images
  - [ ] **🤖 AI SUGGESTION:** Enable aggressive caching for AI summaries (never regenerate same note)
  - [ ] Test page load times (target: <2 seconds on mobile)

**Deliverable:** Fully tested system with sample data

---

### Day 14 (Dec 2): Documentation & Deployment

**Priority:** Critical  
**Owner:** Elliot (Lead), All contribute

#### Tasks

- [ ] Code Documentation (All)

  - [ ] Add comments to all PHP files
  - [ ] Document API endpoints
  - [ ] Create database schema diagram
  - [ ] Write function documentation

- [ ] User Documentation (Elliot)

  - [ ] Create README.md with:
    - Project overview
    - Features list
    - Installation instructions
    - Configuration steps
    - Usage guide
    - Technology stack
  - [ ] Create USER_GUIDE.md
    - How to register
    - How to upload notes
    - How to generate summaries
    - How to upgrade tier
    - FAQ section

- [ ] Technical Documentation (Andrew)

  - [ ] Create SETUP.md
    - Server requirements
    - Database setup steps
    - Environment configuration
    - Deployment checklist
  - [ ] Create API_DOCS.md
    - Endpoint descriptions
    - Request/response formats
    - Authentication requirements
    - Error codes

- [ ] Deployment to NJIT Server (Andrew + Elliot)

  - [ ] Transfer files via FTP/SFTP
  - [ ] Set up production database
  - [ ] Configure production `config.php`
  - [ ] Test all functionality on live server
  - [ ] Set proper file permissions
  - [ ] Test external access

- [ ] GitHub Repository (All)
  - [ ] Commit all code with clear messages
  - [ ] Create meaningful branch structure
  - [ ] Add .gitignore for sensitive files
  - [ ] Create release/tag for v1.0
  - [ ] Add license file

**Deliverable:** Deployed application with complete documentation

---

## Days 15-17 (Dec 3-5): Presentation Preparation

### Day 15 (Dec 3): Demo Video & PowerPoint

**Priority:** Critical  
**Owner:** Elliot (Lead), All contribute

#### Tasks

- [ ] PowerPoint Presentation (Elliot + All)

  - [ ] Slide 1: Title slide with team names
  - [ ] Slide 2: Problem statement (why this platform is needed)
  - [ ] Slide 3: Solution overview (our platform features)
  - [ ] Slide 4: Target audience & market
  - [ ] Slide 5: Technology stack
  - [ ] Slide 6: Architecture diagram
  - [ ] Slide 7: Database schema
  - [ ] Slide 8: Key features demo (screenshots)
  - [ ] Slide 9: Tier comparison
  - [ ] Slide 10: Business model & pricing
  - [ ] Slide 11: Future roadmap
  - [ ] Slide 12: Challenges & solutions
  - [ ] Slide 13: Team contributions
  - [ ] Slide 14: Q&A / Thank you

- [ ] Demo Video Recording (Umar)

  - [ ] Script walkthrough (5-7 minutes)
    1. Homepage introduction
    2. User registration
    3. Login
    4. Upload a note
    5. Generate AI summary
    6. View dashboard
    7. Check pricing page
    8. Simulate upgrade/payment
    9. Show upgraded features
  - [ ] Record screen with narration
  - [ ] Edit video (add transitions, captions)
  - [ ] Upload to unlisted YouTube/Loom
  - [ ] Add link to README

- [ ] Live Demo Practice (All)
  - [ ] Run through complete user journey
  - [ ] Prepare for potential questions
  - [ ] Create backup plan (video) if live demo fails
  - [ ] Test on presentation room equipment

**Deliverable:** Complete PowerPoint and demo video

---

### Day 16-17 (Dec 4-5): Final Review & Rehearsal

**Priority:** High  
**Owner:** All

#### Tasks

- [ ] Presentation Rehearsal (All)

  - [ ] Practice full presentation (15-20 min)
  - [ ] Time each section
  - [ ] Assign speaking roles
  - [ ] Prepare for Q&A
  - [ ] Get feedback from each other

- [ ] Final Testing (All)

  - [ ] Complete end-to-end user journey
  - [ ] Verify all links work
  - [ ] Check mobile responsiveness
  - [ ] Test payment demo
  - [ ] Verify AI summaries generate

- [ ] Backup Preparation (Elliot)
  - [ ] Create local backup of entire project
  - [ ] Prepare offline version if server fails
  - [ ] Have demo video ready
  - [ ] Print handouts (optional)

**Deliverable:** Polished presentation ready for Dec 10

---

## Daily Standup Template

**Every Day at 7 PM (15 minutes via Teams/Discord)**

Each team member answers:

1. What did I complete today?
2. What am I working on tomorrow?
3. Any blockers or issues?

---

## Risk Management

### Potential Risks & Mitigation

| Risk                       | Probability | Impact | Mitigation                                                 |
| -------------------------- | ----------- | ------ | ---------------------------------------------------------- |
| AI API costs exceed budget | Medium      | Medium | Use free tier, implement caching, prepare mock responses   |
| NJIT server downtime       | Low         | High   | Develop locally first, have backup hosting (Heroku/Vercel) |
| Payment integration issues | Medium      | Medium | Use Stripe test mode, focus on flow over real transactions |
| Team member unavailable    | Low         | High   | Document all work, cross-train on critical features        |
| Database corruption        | Low         | High   | Daily backups, version control for schema                  |
| Presentation tech failure  | Medium      | High   | Pre-record demo video, have offline version ready          |

---

## Definition of Done

A task is complete when:

- [ ] Code is written and tested
- [ ] Code is committed to GitHub with clear message
- [ ] Documentation is updated
- [ ] Peer review completed (at least one teammate reviews)
- [ ] Feature works on NJIT server (after deployment)

---

## Success Metrics

**Minimum Viable Product (MVP):**

- ✅ User registration and login
- ✅ File upload and storage
- ✅ AI summary generation
- ✅ Tier-based access control
- ✅ Payment flow demonstration
- ✅ Responsive UI
- ✅ Deployed and accessible

**Stretch Goals:**

- 🎯 Flashcard generation from notes
- 🎯 Community sharing features
- 🎯 Admin dashboard
- 🎯 Email notifications
- 🎯 Advanced search with filters

---

## Communication Channels

- **Primary:** Microsoft Teams (daily updates)
- **Code:** GitHub (issues, pull requests, comments)
- **Documents:** Google Drive (shared docs, diagrams)
- **Emergency:** Group text/WhatsApp

---

## Next Steps (Immediate Actions)

1. **Everyone:** Review this sprint plan (by Nov 19 EOD)
2. **Elliot:** Schedule first standup meeting
3. **Andrew:** Initialize GitHub repo and database
4. **Jovan:** Set up frontend boilerplate
5. **Umar:** Research AI API options
6. **All:** Set up local development environments

---

**Last Updated:** November 19, 2025  
**Next Review:** November 26, 2025 (mid-sprint check-in)
