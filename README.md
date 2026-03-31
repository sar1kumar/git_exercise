# Git Exercise - Team Collaboration

A simple exercise where 4 people each contribute **one file** to build a webpage together.

## How It Works

Each person creates their own branch, adds their file, commits, and pushes. Person 4 merges everything at the end.


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
```

Create `index.html`:
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Team Project</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <header>
        <h1>Welcome to Our Team Project</h1>
        <p>Built collaboratively using Git</p>
    </header>
    <main>
        <section id="about"></section>
        <section id="features"></section>
    </main>
    <footer id="footer"></footer>
    <script src="script.js"></script>
</body>
</html>
```

```bash
git add index.html
git commit -m "Add index.html - main page structure"
git push origin feature/person1
```

---

### Person 2: Create `style.css`

```bash
git checkout -b feature/person2
```

Create `style.css`:
```css
* { margin: 0; padding: 0; box-sizing: border-box; }
body { font-family: Arial, sans-serif; line-height: 1.6; }
header { background: #4a90d9; color: white; padding: 40px; text-align: center; }
main { padding: 40px; max-width: 800px; margin: auto; }
section { margin: 20px 0; padding: 20px; background: #f4f4f4; border-radius: 8px; }
footer { background: #333; color: white; padding: 20px; text-align: center; }
```

```bash
git add style.css
git commit -m "Add style.css - page styling"
git push origin feature/person2
```

---

### Person 3: Create `script.js`

```bash
git checkout -b feature/person3
```

Create `script.js`:
```javascript
document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('about').innerHTML = '<h2>About Us</h2><p>We are learning Git together!</p>';
    document.getElementById('features').innerHTML = '<h2>What We Learned</h2><ul><li>Branching</li><li>Committing</li><li>Merging</li></ul>';
    document.getElementById('footer').innerHTML = '<p>&copy; 2026 Team Project. Made with Git.</p>';
    console.log('Page loaded by Person 3!');
});
```

```bash
git add script.js
git commit -m "Add script.js - page interactivity"
git push origin feature/person3
```

---

### Person 4: Merge All & Deploy

```bash
# Get all branches
git fetch origin

# Merge each branch into main
git checkout main
git merge origin/feature/person1 -m "Merge person1 - index.html"
git merge origin/feature/person2 -m "Merge person2 - style.css"
git merge origin/feature/person3 -m "Merge person3 - script.js"

# Push final result
git push origin main
```

Then enable GitHub Pages:
1. Go to repository Settings → Pages
2. Set Source to "Deploy from a branch"
3. Select `main` branch and `/ (root)`
4. Save and wait for deployment

---

## File Structure

```
git_excercise/
├── index.html   (Person 1)
├── style.css    (Person 2)
├── script.js    (Person 3)
└── README.md
```

## Result

After Person 4 merges, the site will be live at:
`https://sar1kumar.github.io/git_excercise/`
