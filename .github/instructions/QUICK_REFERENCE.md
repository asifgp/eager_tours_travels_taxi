# Eagle Tours - Developer Quick Reference Guide

## 🚀 Quick Start

### **Local Setup**
```bash
# Clone repository
git clone [repo-url]
cd eagle_tours

# Start local server
npx http-server .
# or
python -m http.server 8000

# Open in browser
http://localhost:8000
```

### **Project Structure Overview**
```
eagle_tours/
├── index.html              # Main HTML file
├── css/styles.css          # All styling (Bootstrap + custom)
├── js/
│   ├── app.js             # Main application class
│   └── data.js            # Data configuration
├── assets/
│   ├── favicon.ico
│   └── img/               # All images
├── KNOWLEDGE_BASE.md      # Comprehensive documentation
├── DEVELOPMENT_PLAN.md    # Enhancement roadmap
└── README.md              # Project overview
```

---

## 🔧 Common Tasks

### **Task: Add a New Portfolio Item**
```javascript
// Edit: js/data.js
portfolio: {
    tiles: [
        // ... existing items ...
        {
            id: 7,                                      // New ID
            title: 'New Project Name',
            category: 'Category',
            imageAlt: './assets/img/portfolio/7.jpg',  // Add image
            client: 'Client Name',
            description: 'Project description...'
        }
    ]
}

// 1. Create image at: assets/img/portfolio/7.jpg
// 2. Update portfolio count if needed
// 3. Refresh page to see changes
```

### **Task: Update Team Members**
```javascript
// Edit: js/data.js → team.members
{
    name: 'New Team Member',
    role: 'Position/Role',
    imageAlt: './assets/img/team/new.jpg',
    social: [
        { icon: 'linkedin-in', url: 'https://linkedin.com/in/...' },
        { icon: 'twitter', url: 'https://twitter.com/...' }
    ]
}
```

### **Task: Modify Services**
```javascript
// Edit: js/data.js → services.tiles
{
    icon: 'icon-name',  // Font Awesome icon
    title: 'Service Title',
    description: 'Service description...'
}

// Available icons: https://fontawesome.com/icons
```

### **Task: Update Timeline (About Section)**
```javascript
// Edit: js/data.js → about.timeline
{
    year: '2024',
    title: 'Event Title',
    description: 'What happened...',
    inverted: false,              // true = right side, false = left side
    imageAlt: './assets/img/about/new.jpg'
}
```

### **Task: Change Colors**
```css
/* Edit: css/styles.css */
:root {
  --bs-primary: #ffc800;        /* Yellow accent */
  --bs-secondary: #6c757d;      /* Gray */
  --bs-dark: #212529;           /* Dark text */
  --bs-light: #f8f9fa;          /* Light background */
}

/* Or override Bootstrap in custom CSS */
.btn-primary { background-color: #yourcolor; }
.navbar { background-color: #yourcolor; }
```

### **Task: Add New Navigation Link**
```javascript
// Edit: js/data.js → navbar.nav
nav: [
    { label: 'Services', href: '#services' },
    { label: 'New Section', href: '#new-section' },  // Add this
    // ... existing ...
]

// Then create section in app.js:
renderNewSection() {
    return `
        <section class="page-section" id="new-section">
            <!-- Content -->
        </section>
    `;
}

// Add to main render() method:
this.renderNewSection() +
```

### **Task: Update Footer Information**
```javascript
// Edit: js/data.js → footer
footer: {
    copyright: 'Copyright © Eagle Tours 2024',
    social: [
        { icon: 'facebook-f', url: 'https://facebook.com/...' },
        { icon: 'linkedin-in', url: 'https://linkedin.com/...' }
    ],
    links: [
        { text: 'Privacy Policy', url: '/privacy' },
        { text: 'Terms of Use', url: '/terms' }
    ]
}
```

### **Task: Enable/Disable Sections**
```javascript
// Edit: js/data.js
services: { visible: true, ... }    // Show services
portfolio: { visible: true, ... }   // Show portfolio
about: { visible: true, ... }       // Show about
team: { visible: true, ... }        // Show team
clients: { visible: false, ... }    // Hide clients
contact: { visible: true, ... }     // Show contact
```

---

## 📱 Responsive Breakpoints

```css
/* Bootstrap default breakpoints */
Extra Small (xs):  < 576px
Small (sm):       ≥ 576px
Medium (md):      ≥ 768px
Large (lg):       ≥ 992px
XL (xl):          ≥ 1200px
XXL (xxl):        ≥ 1400px

/* Usage in Bootstrap classes */
<div class="col-sm-6 col-md-4 col-lg-3">
    <!-- Responsive columns -->
</div>
```

---

## 🎨 CSS Classes Reference

### **Grid System**
```html
<div class="container">              <!-- Responsive container -->
    <div class="row">                <!-- Horizontal group -->
        <div class="col-md-6">       <!-- 50% on medium+ screens -->
        </div>
    </div>
</div>
```

### **Spacing (Margin/Padding)**
```html
<!-- Padding: p{side}-{size} -->
<div class="p-3 pt-5 ps-0">    <!-- padding, top, left -->
</div>

<!-- Margin: m{side}-{size} -->
<div class="m-2 mb-4 ms-auto">  <!-- margin, bottom, left auto -->
</div>

<!-- Size: 0-5 (0=0, 1=0.25rem, 2=0.5rem, 3=1rem, 4=1.5rem, 5=3rem) -->
```

### **Typography**
```html
<h1 class="display-1">Large Heading</h1>
<h2 class="section-heading text-uppercase">Section Title</h2>
<p class="lead">Important paragraph</p>
<p class="text-muted">Secondary text</p>
<p class="text-primary">Accent color</p>
```

### **Colors**
```html
<!-- Text colors -->
<p class="text-primary">Yellow</p>
<p class="text-secondary">Gray</p>
<p class="text-dark">Dark</p>
<p class="text-light">Light</p>
<p class="text-muted">Muted gray</p>

<!-- Background colors -->
<div class="bg-light">Light background</div>
<div class="bg-dark text-white">Dark background</div>
```

### **Buttons**
```html
<button class="btn btn-primary">Primary</button>
<button class="btn btn-outline-primary">Outline</button>
<button class="btn btn-lg">Large button</button>
<button class="btn btn-sm">Small button</button>
```

### **Alignment**
```html
<div class="text-center">Centered text</div>
<div class="text-end">Right-aligned</div>
<div class="d-flex justify-content-between">Flex layout</div>
<div class="align-items-center">Vertical center</div>
```

---

## 🐛 Debugging Tips

### **Browser DevTools**
```javascript
// Check if app initialized
console.log(document.getElementById('app').innerHTML)

// Verify data loaded
console.log(APP_DATA)

// Check event listeners
getEventListeners(document)  // In Chrome console

// Performance check
performance.measure('navigation')
console.table(performance.getEntriesByType('navigation'))
```

### **Common Issues & Solutions**

| Issue | Cause | Solution |
|-------|-------|----------|
| App not rendering | APP_DATA not loaded before app.js | Check script order in HTML |
| Styling not applied | CSS file path wrong | Verify css/styles.css path |
| Images missing | Image paths incorrect | Check assets/img/ folder |
| Form not working | Backend not connected | Implement API endpoint |
| Navigation links dead | Hash href format wrong | Use `#section-id` format |
| Mobile menu closes | Event listener missing | Check setupNavbarToggler() |

### **JavaScript Debugging**

```javascript
// Add debug logging
class AgencyApp {
    init() {
        console.log('App initializing...');
        this.render();
        console.log('App rendered');
        this.setupEventListeners();
        console.log('Event listeners attached');
    }
}

// Check rendering
renderPortfolio() {
    console.log('Rendering portfolio with items:', this.data.portfolio.tiles);
    // ... rest of code
}
```

---

## 🎯 Key Methods in AgencyApp Class

```javascript
// Initialization
app.init()                          // Start app
app.render()                        // Render all sections

// Rendering methods (each returns HTML string)
app.renderNavbar()                  // Navigation bar
app.renderMasthead()                // Hero section
app.renderServices()                // Services grid
app.renderPortfolio()               // Portfolio grid
app.renderAbout()                   // Timeline
app.renderTeam()                    // Team members
app.renderClients()                 // Client logos
app.renderContact()                 // Contact form
app.renderFooter()                  // Footer
app.renderPortfolioModals()         // All modals

// Event handlers
app.setupEventListeners()           // Attach all listeners
app.setupNavbarShrink()             // Scroll effect
app.setupScrollSpy()                // Active nav highlighting
app.setupNavbarToggler()            // Mobile menu
app.setupFormHandling()             // Form events
app.handleFormSubmit(form)          // Form submission
app.isValidEmail(email)             // Email validation
```

---

## 📦 Bootstrap Components Used

### **Navbar**
```javascript
// Uses: bootstrap.Collapse (toggle), custom scroll listener
- Fixed positioning
- Responsive toggle
- Collapse animation
```

### **Modals**
```javascript
// Uses: bootstrap.Modal
- data-bs-toggle="modal"
- data-bs-target="#portfolioModal1"
- Dismiss via backdrop or button
```

### **ScrollSpy**
```javascript
// Uses: bootstrap.ScrollSpy
- Highlights current section in navbar
- Updated on scroll
- Target: #mainNav
```

---

## 🔗 External Libraries

| Library | Version | Purpose | CDN |
|---------|---------|---------|-----|
| Bootstrap | 5.3.0 | CSS Framework | Yes |
| Font Awesome | 6.3.0 | Icons | Yes |
| Google Fonts | Latest | Typography | Yes |
| Roboto Slab | Latest | Body Font | Google Fonts |
| Montserrat | Latest | Heading Font | Google Fonts |

---

## 🌐 Font Awesome Icons Reference

Common icons used in project:

```html
<!-- Service icons -->
<i class="fas fa-shopping-cart"></i>    <!-- E-commerce -->
<i class="fas fa-laptop"></i>           <!-- Responsive Design -->
<i class="fas fa-lock"></i>             <!-- Security -->

<!-- Social icons -->
<i class="fab fa-twitter"></i>
<i class="fab fa-facebook-f"></i>
<i class="fab fa-linkedin-in"></i>

<!-- UI icons -->
<i class="fas fa-bars"></i>             <!-- Menu -->
<i class="fas fa-times"></i>            <!-- Close -->
<i class="fas fa-plus"></i>             <!-- Plus (portfolio hover) -->
<i class="fas fa-xmark"></i>            <!-- X mark -->

<!-- Other -->
<i class="fas fa-circle"></i>           <!-- Circle background -->
<i class="fas fa-image"></i>            <!-- Image placeholder -->
```

Find more: https://fontawesome.com/icons

---

## 📋 Data.js Structure Cheat Sheet

```javascript
APP_DATA = {
    navbar: { brand, nav[] },              // Navigation config
    masthead: { subheading, heading, ... }, // Hero section
    services: { visible, heading, subheading, tiles[] },
    portfolio: { visible, heading, subheading, tiles[] },
    about: { visible, heading, subheading, timeline[] },
    team: { visible, heading, subheading, members[], teamDescription },
    clients: { visible, names[] },         // Client logos
    contact: { visible, heading, subheading },
    footer: { copyright, social[], links[] }
}
```

---

## ✅ Code Quality Checklist

Before committing code:

- [ ] No console.log statements left in production code
- [ ] Indentation is consistent (4 spaces)
- [ ] No unused variables or functions
- [ ] Comments explain complex logic
- [ ] Function names are descriptive
- [ ] No duplicate code (DRY principle)
- [ ] Error handling implemented
- [ ] Responsive design tested
- [ ] Works on mobile devices
- [ ] No browser console errors

---

## 🚀 Deployment Checklist

Before going live:

- [ ] All images optimized and uploaded
- [ ] Contact form backend configured
- [ ] All links tested and working
- [ ] Meta tags updated (SEO)
- [ ] Favicon added
- [ ] Analytics configured
- [ ] SSL certificate installed
- [ ] Performance tested (Lighthouse > 90)
- [ ] Mobile friendly test passed
- [ ] Spelling and grammar checked
- [ ] Backup created
- [ ] Monitoring alerts set up

---

## 📚 Useful Commands

```bash
# Git operations
git status                          # Check status
git add .                          # Stage all changes
git commit -m "message"            # Commit changes
git push origin main               # Push to remote
git pull origin main               # Pull latest
git log --oneline                  # View commit history
git branch -a                      # List branches

# Server operations
python -m http.server 8000         # Python server
npx http-server .                  # Node server
npx live-server .                  # Live reload server

# Image optimization
imagemagick convert input.jpg output.webp    # WebP conversion
tinypng input.png                           # PNG compression

# File operations
find . -name "*.js" | wc -l       # Count JS files
ls -lah assets/img/               # List image directory
du -sh eagle_tours/               # Check folder size
```

---

## 🎓 Learning Path for New Developers

1. **Day 1:** Read KNOWLEDGE_BASE.md & this guide
2. **Day 1:** Explore project structure and understand data.js
3. **Day 2:** Modify some text content to get familiar with workflow
4. **Day 2:** Add a new portfolio item
5. **Day 3:** Implement a small feature (e.g., enable clients section)
6. **Day 3-4:** Pick a task from DEVELOPMENT_PLAN.md to implement

---

## 🔐 Security Notes

- ✅ Sanitize user input on backend before storing
- ✅ Validate email addresses server-side
- ✅ Use HTTPS in production
- ✅ Set secure headers
- ✅ Implement rate limiting on forms
- ✅ Never store passwords in code
- ✅ Keep dependencies updated
- ❌ Don't use inline event handlers (use addEventListener)

---

## 📞 Quick Contact Reference

Update these in data.js when available:

```javascript
footer: {
    social: [
        { icon: 'facebook-f', url: 'https://facebook.com/eagletours' },
        { icon: 'instagram', url: 'https://instagram.com/eagletours' },
        { icon: 'linkedin-in', url: 'https://linkedin.com/company/eagletours' }
    ],
    links: [
        { text: 'Contact', url: 'mailto:info@eagletours.com' },
        { text: 'Phone', url: 'tel:+1234567890' }
    ]
}
```

---

**Document Version:** 1.0  
**Last Updated:** April 23, 2026  
**For Latest Updates:** See KNOWLEDGE_BASE.md and DEVELOPMENT_PLAN.md

