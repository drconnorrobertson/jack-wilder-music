# GitHub Setup Instructions for Jack Wilder Music Website

## Manual GitHub Repository Creation

Since the GitHub API is not directly accessible from this environment, follow these steps to push the project to GitHub:

### Step 1: Create Repository on GitHub

1. Go to https://github.com/new
2. Fill in the following details:
   - **Repository name:** `jack-wilder-music`
   - **Description:** Professional artist website for Jack Wilder - Pittsburgh country music artist
   - **Homepage:** https://jackwildercountry.com (optional, can update later)
   - **Public** (recommended for artist portfolio)
   - Leave other options as default
3. Click "Create repository"

### Step 2: Push Local Repository

The git repository is already initialized locally at `/sessions/admiring-stoic-keller/jack-wilder-music/`.

Run these commands to push to GitHub:

```bash
cd /sessions/admiring-stoic-keller/jack-wilder-music

# Add the remote (replace USERNAME with your GitHub username)
git remote add origin https://github.com/USERNAME/jack-wilder-music.git

# Rename branch to main (if not already done)
git branch -M main

# Push the code
git push -u origin main
```

### Step 3: Update Repository Settings (Optional)

On GitHub, you can:

1. **Enable GitHub Pages:**
   - Go to Settings > Pages
   - Select `main` branch as source
   - Your site will be live at `https://USERNAME.github.io/jack-wilder-music/`

2. **Add Topics:**
   - country-music
   - artist-portfolio
   - pittsburgh
   - music-website

3. **Update Description:**
   - Add homepage URL: https://jackwildercountry.com

4. **Add Social Preview:**
   - Upload an image for social media preview (recommended size: 1280x640px)

## Using a Custom Domain

To use your own domain (jackwildercountry.com) instead of GitHub Pages:

1. Set up DNS records pointing to your hosting provider
2. Or use a service like Netlify/Vercel for free hosting with custom domains

## Deployment Options

### Option 1: GitHub Pages (Free)
- Enable in Settings > Pages
- URL: `https://username.github.io/jack-wilder-music/`

### Option 2: Custom Domain with GitHub Pages
- Add DNS CNAME record for custom domain
- Add domain in Settings > Pages
- HTTPS automatically available

### Option 3: Netlify (Recommended for Custom Domains)
1. Connect your GitHub repo to Netlify
2. Set build command: (leave blank, it's static)
3. Set publish directory: `/`
4. Add custom domain in Netlify settings
5. Get free HTTPS automatically

### Option 4: Vercel
1. Import project from GitHub
2. Deploy automatically
3. Add custom domain
4. Free tier includes HTTPS

## Repository Structure

The pushed repository will contain:

```
jack-wilder-music/
├── css/
│   └── styles.css
├── js/
│   └── main.js
├── blog/
│   ├── index.html
│   ├── jack-wilder-pittsburgh-country/index.html
│   └── songwriting-process/index.html
├── about/index.html
├── music/index.html
├── shows/index.html
├── booking/index.html
├── contact/index.html
├── press/index.html
├── pittsburgh-country-music/index.html
├── index.html
├── sitemap.xml
├── robots.txt
├── .gitignore
├── README.md
└── GITHUB_SETUP.md
```

## Updating the Website

After pushing to GitHub, you can update the website by:

1. Making changes locally
2. Committing: `git commit -m "Description of changes"`
3. Pushing: `git push origin main`
4. Changes will be live (GitHub Pages automatically rebuilds)

## Git Commands Reference

```bash
# Check status
git status

# View commit history
git log --oneline

# View current remote
git remote -v

# Make changes and commit
git add .
git commit -m "Your message here"

# Push to GitHub
git push origin main

# Pull latest changes
git pull origin main

# Create a new branch (for development)
git checkout -b feature/new-feature
git push -u origin feature/new-feature
```

## Continuous Updates

To keep the website updated:

1. Add new blog posts by creating folders in `/blog/`
2. Update tour dates in `/shows/index.html`
3. Update music releases in `/music/index.html`
4. Commit and push changes

## .gitignore

The repository includes a `.gitignore` file that prevents tracking of:
- System files (.DS_Store, Thumbs.db)
- IDE files (.vscode, .idea)
- Node modules (if added later)
- Environment variables (.env)
- Temporary files

## Questions?

For help with GitHub:
- GitHub Docs: https://docs.github.com
- GitHub Help: https://help.github.com
- Contact: @octocat on GitHub

For website updates:
- Contact: jackwildermanagement@gmail.com
