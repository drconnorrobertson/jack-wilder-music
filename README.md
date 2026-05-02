# Jack Wilder - Country Music Artist Website

A complete, professional artist website for Jack Wilder, Pittsburgh-based country music artist.

## Site Overview

This is a fully responsive, SEO-optimized website featuring:

### Core Pages
- **Homepage** - Hero section with latest music embed, upcoming shows, about preview, booking CTA
- **About** - Full biography, musical journey, influences, and press quotes
- **Music** - Discography with Spotify and Apple Music embeds, streaming links
- **Shows** - Tour dates, past shows, and event information
- **Booking** - Event booking form, packages, pricing, and logistics
- **Contact** - Contact form, FAQ, and direct email
- **Press Kit** - High-res photos, biography, quotes, and media materials

### Blog Section
- Blog index with featured article
- Multiple long-form blog posts (1000+ words each) covering:
  - Pittsburgh country music scene
  - Songwriting process
  - Live music venues
  - Independent artist guide
  - And more...

### SEO Optimization
- Location-based SEO pages for Pittsburgh-area searches
- Schema markup (MusicGroup, LocalBusiness, BlogPosting, Event)
- Meta tags and descriptions for all pages
- Sitemap.xml and robots.txt
- sameAs links to all social profiles and streaming platforms

## Design

**Color Scheme:**
- Primary: Dark Charcoal (#1a1a1a)
- Accent: Warm Gold (#D4A040)
- Secondary: Rustic Brown (#8B6914)
- Text: White on dark backgrounds

**Typography:**
- Headings: Playfair Display
- Body: Inter

**Aesthetic:**
- Dark, moody, modern artist-focused design
- Responsive mobile-first approach
- Professional and clean layout

## Features

- Fully responsive design (mobile, tablet, desktop)
- Interactive navigation with smooth scrolling
- Newsletter signup functionality
- Booking inquiry form with validation
- Contact form with validation
- Social media integration
- Spotify and Apple Music embeds
- Schema markup for better SEO
- Accessible form elements
- Smooth animations and transitions

## Artist Information

**Jack Wilder**
- Genre: Alt-Country / Pop Country
- Based in: Pittsburgh, PA (originally from Atlanta, GA)
- Booking: jackwildermanagement@gmail.com
- Social: @jackwildercountry (Instagram, TikTok)
- Spotify: https://open.spotify.com/artist/0CS5KPzAm1HuGHciBOyk5M
- Apple Music: https://music.apple.com/us/artist/jack-wilder/1541899634

## Project Structure

```
jack-wilder-music/
├── css/
│   └── styles.css          # Main stylesheet
├── js/
│   └── main.js             # Interactive functionality
├── blog/
│   ├── index.html          # Blog listing page
│   ├── jack-wilder-pittsburgh-country/
│   ├── songwriting-process/
│   └── ... (other blog posts)
├── about/
│   └── index.html
├── music/
│   └── index.html
├── shows/
│   └── index.html
├── booking/
│   └── index.html
├── contact/
│   └── index.html
├── press/
│   └── index.html
├── pittsburgh-country-music/
│   └── index.html          # SEO location page
├── index.html              # Homepage
├── sitemap.xml             # XML sitemap for SEO
├── robots.txt              # Robots instructions
├── .gitignore
└── README.md
```

## Getting Started

### Local Development

1. Clone the repository
2. Open index.html in your browser
3. Or use a local server:

```bash
# Python 3
python -m http.server 8000

# Python 2
python -m SimpleHTTPServer 8000

# Node.js (if http-server installed)
http-server
```

Visit `http://localhost:8000` in your browser.

### Deployment

This is a static website and can be deployed to:
- GitHub Pages
- Netlify
- Vercel
- AWS S3
- Any static hosting service

## SEO Features

- Meta descriptions and titles on all pages
- Open Graph tags for social sharing
- Schema.org markup (MusicGroup, LocalBusiness, Event, Article)
- Sitemap.xml for search engine crawling
- robots.txt for crawler guidance
- Canonical URLs to prevent duplicate content
- Alt text for images
- Semantic HTML structure
- Mobile-friendly responsive design
- Fast page load optimization
- Internal linking strategy

## Customization

### Colors
Edit CSS variables in `css/styles.css`:
```css
:root {
  --dark-bg: #1a1a1a;
  --accent-gold: #D4A040;
  --rustic-brown: #8B6914;
  --text-light: #ffffff;
  --text-muted: #cccccc;
}
```

### Content
All HTML files are in the root and subdirectories. Edit the content directly in the HTML files.

### Fonts
Currently using Google Fonts:
- Playfair Display (headings)
- Inter (body text)

Change in the `<link>` tag in any HTML file's `<head>`.

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers

## Performance Optimization

- Minified CSS and optimized code
- Lazy loading images
- Smooth animations using CSS transitions
- Responsive images
- Efficient DOM manipulation

## Accessibility

- Semantic HTML structure
- Proper heading hierarchy
- Color contrast meets WCAG standards
- Form labels and validation
- Keyboard navigation support
- ARIA labels where appropriate

## Contact & Support

For questions about Jack Wilder or to book performances:
Email: jackwildermanagement@gmail.com

## License

All content on this website is the property of Jack Wilder. Website design and code are available for modification for personal use only.

## Made With

- HTML5
- CSS3
- Vanilla JavaScript
- Google Fonts
- Schema.org markup
- SEO best practices
