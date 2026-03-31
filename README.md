# Git Exercise - Team Collaboration

A simple exercise where 4 people each contribute **one file** to build a webpage with visualizations.

## Final Result Preview

The completed page includes:
- 👥 **Contributor Cards** - Animated cards showing each team member
- 📊 **Doughnut Chart** - Visualizing contribution distribution
- 📅 **Git Timeline** - Animated timeline of commits

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
```

Create `index.html`:
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Git Team Project</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <header>
        <h1>🚀 Git Collaboration Project</h1>
        <p>Built by 4 developers, each contributing one file</p>
    </header>
    <main>
        <section id="contributors">
            <h2>👥 Contributors</h2>
            <div class="cards"></div>
        </section>
        <section id="stats">
            <h2>📊 Project Stats</h2>
            <div class="chart-container">
                <canvas id="chart"></canvas>
            </div>
        </section>
        <section id="timeline">
            <h2>📅 Git Timeline</h2>
            <div class="timeline"></div>
        </section>
    </main>
    <footer id="footer"></footer>
    <script src="https://cdn.jsdelivr.net/npm/chart.js"></script>
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
body { font-family: 'Segoe UI', sans-serif; background: linear-gradient(135deg, #1a1a2e 0%, #16213e 100%); color: #fff; min-height: 100vh; }
header { background: linear-gradient(135deg, #667eea, #764ba2); padding: 60px 20px; text-align: center; }
header h1 { font-size: 2.5rem; margin-bottom: 10px; }
header p { opacity: 0.9; font-size: 1.1rem; }
main { max-width: 1000px; margin: 0 auto; padding: 40px 20px; }
section { background: rgba(255,255,255,0.05); border-radius: 16px; padding: 30px; margin: 30px 0; backdrop-filter: blur(10px); border: 1px solid rgba(255,255,255,0.1); }
section h2 { margin-bottom: 25px; font-size: 1.5rem; }
.cards { display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 20px; }
.card { background: linear-gradient(135deg, rgba(102,126,234,0.3), rgba(118,75,162,0.3)); border-radius: 12px; padding: 25px; text-align: center; transition: transform 0.3s, box-shadow 0.3s; border: 1px solid rgba(255,255,255,0.1); }
.card:hover { transform: translateY(-5px); box-shadow: 0 10px 40px rgba(102,126,234,0.3); }
.card .avatar { width: 60px; height: 60px; background: linear-gradient(135deg, #667eea, #764ba2); border-radius: 50%; margin: 0 auto 15px; display: flex; align-items: center; justify-content: center; font-size: 1.5rem; }
.card h3 { margin-bottom: 5px; }
.card p { opacity: 0.7; font-size: 0.9rem; }
.card .file { background: rgba(0,0,0,0.3); padding: 5px 12px; border-radius: 20px; font-family: monospace; font-size: 0.8rem; margin-top: 10px; display: inline-block; }
.chart-container { height: 300px; }
.timeline { position: relative; padding-left: 30px; }
.timeline::before { content: ''; position: absolute; left: 8px; top: 0; bottom: 0; width: 3px; background: linear-gradient(180deg, #667eea, #764ba2); border-radius: 3px; }
.timeline-item { position: relative; margin-bottom: 25px; padding: 15px 20px; background: rgba(255,255,255,0.05); border-radius: 10px; animation: fadeIn 0.5s ease forwards; opacity: 0; }
.timeline-item::before { content: ''; position: absolute; left: -26px; top: 20px; width: 12px; height: 12px; background: #667eea; border-radius: 50%; border: 3px solid #1a1a2e; }
.timeline-item h4 { color: #667eea; margin-bottom: 5px; }
.timeline-item p { opacity: 0.8; font-size: 0.9rem; }
.timeline-item code { background: rgba(0,0,0,0.3); padding: 2px 8px; border-radius: 4px; font-size: 0.85rem; }
footer { background: rgba(0,0,0,0.3); padding: 30px; text-align: center; margin-top: 40px; }
footer p { opacity: 0.7; }
@keyframes fadeIn { to { opacity: 1; } }
```

```bash
git add style.css
git commit -m "Add style.css - dark theme with animations"
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
    // Contributors cards
    const contributors = [
        { name: 'Person 1', role: 'HTML Structure', file: 'index.html', icon: '📄' },
        { name: 'Person 2', role: 'Styling', file: 'style.css', icon: '🎨' },
        { name: 'Person 3', role: 'Interactivity', file: 'script.js', icon: '⚡' },
        { name: 'Person 4', role: 'Merge & Deploy', file: 'all files', icon: '🚀' }
    ];
    document.querySelector('.cards').innerHTML = contributors.map(c => 
        `<div class="card"><div class="avatar">${c.icon}</div><h3>${c.name}</h3><p>${c.role}</p><span class="file">${c.file}</span></div>`
    ).join('');

    // Chart
    new Chart(document.getElementById('chart'), {
        type: 'doughnut',
        data: {
            labels: ['HTML (Person 1)', 'CSS (Person 2)', 'JS (Person 3)', 'Merge (Person 4)'],
            datasets: [{ data: [25, 25, 25, 25], backgroundColor: ['#667eea', '#764ba2', '#f093fb', '#4facfe'], borderWidth: 0 }]
        },
        options: { responsive: true, maintainAspectRatio: false, plugins: { legend: { labels: { color: '#fff' } } } }
    });

    // Timeline
    const steps = [
        { title: 'Person 1: Create HTML', cmd: 'git commit -m "Add index.html"' },
        { title: 'Person 2: Add Styles', cmd: 'git commit -m "Add style.css"' },
        { title: 'Person 3: Add Script', cmd: 'git commit -m "Add script.js"' },
        { title: 'Person 4: Merge All', cmd: 'git merge feature/person1 feature/person2 feature/person3' },
        { title: 'Deploy to GitHub Pages', cmd: 'git push origin main' }
    ];
    document.querySelector('.timeline').innerHTML = steps.map((s, i) => 
        `<div class="timeline-item" style="animation-delay:${i*0.2}s"><h4>${s.title}</h4><p><code>${s.cmd}</code></p></div>`
    ).join('');

    // Footer
    document.getElementById('footer').innerHTML = `<p>🎉 Built with Git by 4 contributors | ${new Date().getFullYear()}</p>`;
});
```

```bash
git add script.js
git commit -m "Add script.js - charts and animations"
git push origin feature/person3
```

---

### Person 4: Merge All & Deploy

```bash
git fetch origin
git checkout main
git merge origin/feature/person1 -m "Merge person1 - index.html"
git merge origin/feature/person2 -m "Merge person2 - style.css"
git merge origin/feature/person3 -m "Merge person3 - script.js"
git push origin main
```

Enable GitHub Pages: Settings → Pages → Source: `main` branch → Save

---

## File Structure

```
git_excercise/
├── index.html   ← Person 1 (page structure)
├── style.css    ← Person 2 (dark theme + animations)
├── script.js    ← Person 3 (chart + timeline)
└── README.md
```

## Live Demo

After deployment: `https://<username>.github.io/git_excercise/`
