# Karan - Personal Portfolio Website

A modern, minimal, professional light-themed personal portfolio built with React and modern responsive CSS. Tailored for internship and entry-level software developer applications.

---

## 🚀 Live Local Preview

You can view the portfolio immediately in any web browser without needing to install Node.js:

1. **Option A (Instant)**: Double-click `index.html` to open it in Chrome, Edge, Brave, or Firefox.
2. **Option B (Local Python Web Server)**:
   ```powershell
   py -m http.server 8000
   ```
   Then open `http://localhost:8000` in your browser.
3. **Option C (VS Code)**: Right-click `index.html` and click **"Open with Live Server"**.

---

## 📁 Project Structure

```
Portfolio/
├── index.html                   # Production-ready entry file (works directly in any browser)
├── resume.pdf                   # Karan's resume (linked to "Download Resume" buttons)
├── Image.jpeg                   # Profile photo
├── assets/
│   ├── Image.jpeg               # Profile photo asset
│   └── resume.pdf               # Resume backup asset
├── css/
│   └── style.css                # Professional light-themed styling, variables & animations
├── src/
│   ├── App.jsx                  # Main React application layout
│   ├── main.jsx                 # React root mount script
│   ├── data/
│   │   └── portfolioData.js     # Centralized, easily editable source of truth for all data
│   └── components/
│       ├── Navbar.jsx           # Responsive header navigation & resume CTA
│       ├── Hero.jsx             # Hero section with headline, bio, location & action buttons
│       ├── Skills.jsx           # Technical skills (Java, C, Python) and core concepts
│       ├── Projects.jsx         # Employee Payroll System with GitHub repository link
│       ├── Certifications.jsx   # HackerRank & GenAI certificates with interactive upload & link edit
│       ├── Contact.jsx          # Email, phone, location, GitHub & editable LinkedIn
│       └── Footer.jsx           # Clean footer with back-to-top button
├── package.json                 # Optional Node/Vite package configuration
├── vite.config.js               # Optional Vite bundler configuration
└── README.md                    # Project documentation & guide
```

---

## 🛠️ How to Edit & Customize Your Information

### 1. Editing Personal Info, Skills, or Projects
All personal details are organized in `src/data/portfolioData.js` and within the `<script>` configuration in `index.html`:
- **Personal Information**: Name, headline, role, location, email, and phone number.
- **Skills**: Strictly configured to Java, C, Python, and core concepts (OOP, Problem Solving, DSA). No fake percentage bars.
- **Project**: Update the Employee Payroll System description, features, or add new projects to the `projects` array.

### 2. Updating Your Resume
To update your resume:
1. Replace `resume.pdf` in the root folder with your latest resume PDF file (keep the file name as `resume.pdf`).
2. The "Download Resume" buttons in the navigation and hero section will immediately serve your updated file.

### 3. Adding Certificate Images & Credential Verification URLs
The portfolio includes interactive controls right in the browser:
- **Upload Certificate Image**: Click **"Upload Image"** on any certification card to select an image from your computer. The image will be saved and displayed automatically.
- **Edit Verification URL**: Click **"Edit"** on any card to paste your verification link (e.g. from HackerRank or certificate provider).
- **Edit Issuing Organization**: Click **"(Edit Organization)"** on the Generative AI card to set the organization name (e.g. Google Cloud, Coursera, etc.).
- Changes made in the browser are automatically saved to your browser's `localStorage` so they stay even if you refresh!

### 4. Updating Your LinkedIn Profile URL
- In the **Contact** section, click **"✏️ Edit LinkedIn Profile URL"** to update your link.
- You can also directly change the `linkedinUrl` property in `src/data/portfolioData.js` and `index.html`.

---

## 🌐 Free Deployment (GitHub Pages)

To host your portfolio online for free on GitHub Pages:
1. Initialize git (if not already done) and push to GitHub:
   ```bash
   git init
   git add .
   git commit -m "Initial commit of Karan's portfolio"
   git branch -M main
   git remote add origin https://github.com/k6615/portfolio.git
   git push -u origin main
   ```
2. In your GitHub repository, go to **Settings** > **Pages**.
3. Under **Build and deployment** > **Branch**, select `main` branch and `/ (root)` folder, then click **Save**.
4. Your website will be live at `https://k6615.github.io/portfolio/` within 1–2 minutes!
