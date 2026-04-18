const projects = [
    {
        title: "PyOrganize CLI",
        description: "A Python script that cleans up your downloads folder based on file extensions.",
        tags: ["automation", "productivity"],
        github: "https://github.com/",
        demo: "#"
    },
    {
        title: "Snake Game AI",
        description: "Classic Snake game built with Pygame featuring a basic pathfinding AI.",
        tags: ["game", "ai"],
        github: "https://github.com/",
        demo: "#"
    },
    {
        title: "Stock Scraper",
        description: "BeautifulSoup based scraper to track stock prices and send email alerts.",
        tags: ["automation", "web"],
        github: "https://github.com/",
        demo: "#"
    }
];

function renderProjects(filter = 'all') {
    const grid = document.getElementById('project-grid');
    if(!grid) return;
    
    grid.innerHTML = '';
    
    const filtered = filter === 'all' 
        ? projects 
        : projects.filter(p => p.tags.includes(filter));

    filtered.forEach(p => {
        grid.innerHTML += `
            <div class="project-card">
                <h3>${p.title}</h3>
                <p>${p.description}</p>
                <div class="tags">
                    ${p.tags.map(t => `<span>#${t}</span>`).join('')}
                </div>
                <div class="links">
                    <a href="${p.github}" target="_blank">GitHub</a>
                    ${p.demo !== '#' ? `<a href="${p.demo}" target="_blank">Demo</a>` : ''}
                </div>
            </div>
        `;
    });

    // Update active button
    document.querySelectorAll('.filter-btn').forEach(btn => {
        btn.classList.remove('active');
        if(btn.innerText.toLowerCase() === filter) btn.classList.add('active');
    });
}

document.addEventListener('DOMContentLoaded', () => renderProjects('all'));