# Git Exercise - Team Collaboration

A simple exercise where 4 people each contribute **one file** to build a webpage. **No JavaScript** - pure HTML & CSS with animated visualizations.

## Features

- 🎨 **CSS-only pie chart** (conic-gradient with rotation animation)
- 📊 **Animated bar chart** (CSS keyframe animations)
- 📅 **Staggered timeline** (fade-in animations)
- 🃏 **Hover effect cards** (CSS transitions)

---

## File Structure

```
git_excercise/
├── index.html    ← Person 1 (main page)
├── style.css     ← Person 2 (all styling)
├── content.html  ← Person 3 (resources page)
└── README.md
```

---

## Instructions

### Setup (Everyone)
```bash
git clone <repository-url>
cd git_excercise
```

---

### Person 1: Create `index.html`

```bash
git checkout -b feature/person1
# Create index.html (main page with structure)
git add index.html
git commit -m "Add index.html - main page structure"
git push origin feature/person1
```

---

### Person 2: Create `style.css`

```bash
git checkout -b feature/person2
# Create style.css (dark theme, charts, animations)
git add style.css
git commit -m "Add style.css - styling and animations"
git push origin feature/person2
```

---

### Person 3: Create `content.html`

```bash
git checkout -b feature/person3
# Create content.html (learning resources page)
git add content.html
git commit -m "Add content.html - resources page"
git push origin feature/person3
```

---

### Person 4: Merge All & Deploy

```bash
git fetch origin
git checkout main
git merge origin/feature/person1 -m "Merge person1 - index.html"
git merge origin/feature/person2 -m "Merge person2 - style.css"
git merge origin/feature/person3 -m "Merge person3 - content.html"
git push origin main
```

**Enable GitHub Pages:**
1. Go to repository **Settings** → **Pages**
2. Source: **Deploy from a branch**
3. Branch: **main** / **root**
4. Click **Save**

---

## Visualizations (CSS-only)

| Visualization | CSS Technique |
|--------------|---------------|
| Pie Chart | `conic-gradient()` + `@keyframes rotate` |
| Bar Chart | `scaleX()` + `animation-delay` |
| Timeline | `::before` pseudo-element + `fadeIn` |
| Cards | `transform: translateY()` on `:hover` |

---

## Live Demo

After deployment: `https://<username>.github.io/git_excercise/`
