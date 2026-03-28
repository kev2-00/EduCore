# EduCore[README.md](https://github.com/user-attachments/files/26324899/README.md)
# EduCore Kenya — Landing Page

**Educational Data Unified, Communications, Operations & Records Engine**

The official marketing website for EduCore Kenya — an offline-first school and college operations platform built for low- to mid-fee schools, colleges, and vocational training centres in Kenya.

---

## Project Structure

```
educore-kenya/
├── index.html       # Main HTML structure and page content
├── styles.css       # All styling, CSS variables, and responsive breakpoints
├── main.js          # Navigation toggle and UI interaction logic
└── README.md        # This file
```

---

## Pages & Sections

The website is a single-page layout with the following sections, each reachable via the sticky navigation bar:

| Section | Anchor | Description |
|---|---|---|
| Hero | `#top` | Headline, badge pills, CTAs, stat cards, and device mockup |
| Who It's For | — | School type grid (private, primary, secondary, colleges, vocational) |
| Problem | `#problem` | Six pain points EduCore Kenya addresses |
| Modules | `#modules` | Five core product modules |
| Interfaces | `#interfaces` | Teacher PWA, Admin Dashboard, Parent Portal |
| Pricing | `#pricing` | Three subscription tiers in KES |
| Roadmap | `#roadmap` | Three-phase development timeline |
| Contact / CTA | `#contact` | Demo request, email, and phone call links |

---

## Getting Started

No build tools or dependencies are required. This is a plain HTML/CSS/JS project.

### Run locally

1. Clone or download the repository
2. Open `index.html` in any modern browser — or use a local server:

```bash
# Option 1 — Python (most systems have this)
python -m http.server 8000

# Option 2 — Node.js
npx serve .

# Option 3 — VS Code
# Install the "Live Server" extension and click "Go Live"
```

3. Visit `http://localhost:8000` in your browser

### No internet required

Once the page has loaded once, all assets are local. The website itself has no external dependencies — no CDN links, no external fonts loaded from a remote server, no JavaScript frameworks.

> **Note:** The Inter font is referenced via the system font stack and will fall back gracefully to `ui-sans-serif` or `system-ui` if Inter is not installed on the user's machine.

---

## Customisation Guide

### 1. Update contact details

In `index.html`, search for the following placeholders and replace with real values:

```html
<!-- Email -->
<a href="mailto:hello@educore.co.ke">Email the Team</a>

<!-- Phone -->
<a href="tel:+254700000000">Call Sales</a>
```

### 2. Update the hero stats

The four stat cards in the hero section use target metrics from the project report. Update them as real pilot data becomes available:

```html
<div class="stat">
  <strong>20%</strong>
  <span>target reduction in fee leakage</span>
</div>
```

### 3. Change brand colours

All colours are defined as CSS custom properties at the top of `styles.css`. Edit the `:root` block to update the entire site at once:

```css
:root {
  --primary:      #12715f;   /* Main green — buttons, links, active states */
  --primary-dark: #0c5648;   /* Hover state for primary elements */
  --accent:       #f0b429;   /* Yellow accent — dot indicator, gradients */
  --accent-soft:  #fff6db;   /* Light yellow background for featured pill */
  --text:         #12302b;   /* Main body text */
  --muted:        #58716c;   /* Secondary / descriptive text */
  --bg:           #f7faf9;   /* Page background */
  --card:         #ffffff;   /* Card background */
  --line:         #d9e5e1;   /* Borders and dividers */
}
```

### 4. Add real school logos

The "Who this is for" section currently uses text placeholder boxes. Replace the `.logo-box` divs with `<img>` tags once partner or pilot school logos are available:

```html
<!-- Replace this -->
<div class="logo-box">Private Schools</div>

<!-- With this -->
<div class="logo-box">
  <img src="assets/logos/school-name.png" alt="School Name" />
</div>
```

### 5. Connect the CTA to a real form

The Book a Demo and Request Pilot Access buttons currently link to the `#contact` anchor. Connect them to your preferred lead capture tool:

```html
<!-- Calendly -->
<a href="https://calendly.com/your-link" class="btn btn-primary">Book a Demo</a>

<!-- Typeform / Tally -->
<a href="https://tally.so/your-form" class="btn btn-primary">Request Pilot Access</a>

<!-- WhatsApp -->
<a href="https://wa.me/254700000000" class="btn btn-primary">Chat on WhatsApp</a>
```

---

## Responsive Behaviour

The layout uses CSS Grid with two breakpoints defined in `styles.css`:

| Breakpoint | Behaviour |
|---|---|
| `> 980px` | Full desktop layout — two-column hero, three-column grids |
| `≤ 980px` | Tablet — single-column hero, two-column grids |
| `≤ 760px` | Mobile — all grids collapse to single column, hamburger nav appears |

The hamburger menu is handled entirely in `main.js` with no external libraries.

---

## Browser Support

| Browser | Support |
|---|---|
| Chrome (Android & Windows) | ✅ Full — primary target |
| Firefox | ✅ Full |
| Safari (iOS) | ✅ Full |
| Edge | ✅ Full |
| Internet Explorer | ❌ Not supported |

Internet Explorer is not supported and will not be targeted — the platform's primary users are on Chrome (Android and Windows).

---

## Deployment

### Option 1 — Netlify (recommended, free)
1. Drag and drop the project folder onto [netlify.com/drop](https://app.netlify.com/drop)
2. Netlify will give you a live URL instantly
3. Connect a custom domain (e.g. `educore.co.ke`) in the Netlify settings

### Option 2 — GitHub Pages (free)
1. Push the project to a GitHub repository
2. Go to **Settings → Pages → Source → main branch**
3. GitHub will publish the site at `https://yourusername.github.io/repo-name`

### Option 3 — Custom VPS / cPanel
Upload `index.html`, `styles.css`, and `main.js` to the `public_html` folder of your hosting account. No server-side configuration needed.

---

## Next Steps for the Website

- [ ] Replace placeholder contact details with real email and phone number
- [ ] Connect CTA buttons to a lead form, Calendly link, or WhatsApp
- [ ] Add real testimonials from pilot schools once available
- [ ] Add an `assets/` folder for school logos, team photos, and screenshots
- [ ] Add a favicon (`favicon.ico` or `favicon.svg`) to the `<head>`
- [ ] Set up Google Analytics or Plausible for visitor tracking
- [ ] Add Open Graph meta tags for WhatsApp and social media link previews

---

## Related Project Documents

| Document | Description |
|---|---|
| `EduCore_Kenya_Project_Report.docx` | Full project report with goals, objectives, roadmap, and revenue model |
| `NDA_SchoolPlatform_Project.docx` | Non-disclosure agreement for team members |
| System Flowchart | Full architecture diagram (generated in project planning session) |

---

## Licence

This website template and all associated content is proprietary and confidential.  
© EduCore Kenya. All rights reserved.  
Unauthorised reproduction or distribution is strictly prohibited.
