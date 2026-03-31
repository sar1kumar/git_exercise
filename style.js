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
