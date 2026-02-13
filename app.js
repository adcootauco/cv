/**
 * CV Portfolio Redesign - Application Script
 * 
 * Includes:
 * - Async Data Fetching (Simulated)
 * - Dark Mode Toggle
 * - Deep Linking for Projects
 * - Lazy Loading Images
 */

// State
let appData = null;

document.addEventListener('DOMContentLoaded', () => {
    initApp();
});

async function initApp() {
    // 1. Initialize Theme (before data to avoid flash)
    initTheme();

    // 2. Fetch Data (Simulating API call)
    try {
        // fetchData is globally available from data.js
        appData = await fetchData();

        // 3. Render Content
        renderAll(appData);

        // 4. Initialize Interactions
        initFilterTabs();
        initModal();
        initDeepLinking();

    } catch (error) {
        console.error("Failed to load resume data:", error);
        document.body.innerHTML = `<div style="padding: 2rem; text-align: center; color: red;">Failed to load data. Please check console.</div>`;
    }
}

/* =============================================
 * THEME MANAGEMENT
 * =============================================
 */
function initTheme() {
    const toggleBtn = document.getElementById('theme-toggle');
    const storedTheme = localStorage.getItem('theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

    // Set initial theme
    if (storedTheme === 'dark' || (!storedTheme && prefersDark)) {
        document.documentElement.setAttribute('data-theme', 'dark');
        updateToggleBtn(toggleBtn, 'dark');
    }

    // Toggle Handler
    toggleBtn.addEventListener('click', () => {
        const currentTheme = document.documentElement.getAttribute('data-theme');
        const newTheme = currentTheme === 'dark' ? 'light' : 'dark';

        document.documentElement.setAttribute('data-theme', newTheme);
        localStorage.setItem('theme', newTheme);
        updateToggleBtn(toggleBtn, newTheme);
    });
}

function updateToggleBtn(btn, theme) {
    const icon = btn.querySelector('i');
    const text = btn.querySelector('span');

    if (theme === 'dark') {
        icon.className = 'fas fa-sun';
        text.textContent = 'Light Mode';
    } else {
        icon.className = 'fas fa-moon';
        text.textContent = 'Dark Mode';
    }
}

/* =============================================
 * DEEP LINKING
 * =============================================
 */
function initDeepLinking() {
    // Check hash on load
    handleHashChange();

    // Listen for hash changes
    window.addEventListener('hashchange', handleHashChange);
}

function handleHashChange() {
    const hash = window.location.hash; // e.g., #project/move-calculator

    if (hash.startsWith('#project/')) {
        const projectId = hash.split('/')[1];
        if (projectId) {
            openProjectModal(projectId, false); // false = don't update hash again
        }
    } else if (!hash) {
        closeModal(false);
    }
}

/* =============================================
 * RENDERING
 * =============================================
 */
function renderAll(data) {
    if (!data) return;

    renderSocialLinks(data.social);
    renderPrimaryStack(data.primaryStack);
    renderLanguages(data.languages);
    renderHero(data.hero);
    renderPlatforms(data.platforms);
    renderFeaturedProjects(data.featuredProjects);
    renderExperience(data.experience);
    renderProjects(data.projects);
    renderSkills(data.skills);
    renderEducation(data.education);
    // Certifications merged into Education or separate? Original had separate array but rendered in same grid.
    if (data.certifications) {
        renderCertifications(data.certifications);
    }

    updateFilterCounts(data.projects);
}

// Render Social Links
function renderSocialLinks(social) {
    const container = document.getElementById('social-links');
    container.innerHTML = social.map(s => `
        <a href="${s.url}" target="_blank" rel="noopener" class="social-link" title="${s.label}">
            <i class="${s.icon}"></i>
        </a>
    `).join('');
}

// Render Primary Stack (sidebar)
function renderPrimaryStack(stack) {
    const container = document.getElementById('primary-stack');
    container.innerHTML = stack.map(s => `
        <div class="stack-badge">
            <img src="assets/img/${s.img}" alt="${s.name}" loading="lazy">
            <span>${s.name}</span>
        </div>
    `).join('');
}

// Render Languages
function renderLanguages(languages) {
    const container = document.getElementById('languages-list');
    container.innerHTML = languages.map(lang => `
        <div class="language-item">
            <span class="language-name">${lang.name} <small style="opacity:0.6">(${lang.type})</small></span>
            <div class="language-level">
                ${Array(5).fill(0).map((_, i) => `
                    <span class="language-dot ${i < lang.level ? 'filled' : ''}"></span>
                `).join('')}
            </div>
        </div>
    `).join('');
}

// Render Hero
function renderHero(hero) {
    document.getElementById('hero-headline').innerHTML = hero.headline;
    document.getElementById('hero-subheadline').innerHTML = hero.subheadline;
}

// Render Platform Expertise
function renderPlatforms(platforms) {
    const container = document.getElementById('platform-grid');
    container.innerHTML = platforms.map(p => `
        <div class="platform-card">
            <img src="assets/img/${p.img}" alt="${p.name}" class="platform-icon" loading="lazy">
            <div class="platform-info">
                <h4>${p.name}</h4>
                <span>${p.description}</span>
            </div>
        </div>
    `).join('');
}

// Render Featured Projects
function renderFeaturedProjects(projects) {
    const container = document.getElementById('featured-projects');
    container.innerHTML = projects.map(proj => `
        <div class="featured-card">
            <div class="featured-content">
                <div class="featured-header">
                    <img src="assets/img/${proj.logo}" alt="${proj.company}" class="featured-logo" loading="lazy">
                    <div class="featured-meta">
                        <h3>${proj.title}</h3>
                        <span>${proj.company} · ${proj.timeline}</span>
                    </div>
                </div>
                <p class="featured-description">${proj.description}</p>
                <div class="featured-tags">
                    ${proj.tags.map(t => `
                        <span class="tech-tag">
                            <img src="assets/img/${t.img}" alt="${t.name}" loading="lazy">
                            ${t.name}
                        </span>
                    `).join('')}
                </div>
            </div>
            <div class="featured-accomplishments">
                ${proj.accomplishments.map(a => `
                    <div class="accomplishment">${a}</div>
                `).join('')}
            </div>
        </div>
    `).join('');
}

// Render Experience
function renderExperience(experience) {
    const container = document.getElementById('experience-list');
    container.innerHTML = experience.map(exp => `
        <div class="experience-card">
            <img src="assets/img/${exp.logo}" alt="${exp.company}" class="experience-logo" loading="lazy">
            <div class="experience-content">
                <div class="experience-header">
                    <h3 class="experience-company">${exp.company}</h3>
                    <span class="experience-type">${exp.type}</span>
                </div>
                <div class="experience-positions">
                    ${exp.positions.map(pos => `
                        <div class="position-item">
                            <span class="position-title">${pos.title}</span>
                            <span class="position-dates">${pos.startDate} - ${pos.endDate}</span>
                        </div>
                    `).join('')}
                </div>
                <div class="experience-duties">
                    ${exp.duties.map(d => `
                        <div class="duty-item">
                            <i class="fas fa-circle"></i>
                            <span>${d}</span>
                        </div>
                    `).join('')}
                </div>
            </div>
        </div>
    `).join('');
}

// Render All Projects
function renderProjects(projects) {
    const container = document.getElementById('projects-grid');
    container.innerHTML = projects.map(proj => `
        <div class="project-card" data-category="${proj.category}" data-project-id="${proj.id}">
            <div class="project-header">
                <img src="assets/img/${proj.logo}" alt="${proj.company}" class="project-logo" loading="lazy">
                <div class="project-meta">
                    <h4>${proj.title}</h4>
                    <span>${proj.timeline}</span>
                </div>
            </div>
            <p class="project-description">${proj.description}</p>
            <div class="project-tags">
                ${proj.tags.slice(0, 4).map(t => `<span class="project-tag">${t.name}</span>`).join('')}
                ${proj.tags.length > 4 ? `<span class="project-tag">+${proj.tags.length - 4}</span>` : ''}
            </div>
            <div class="project-click-hint">
                <i class="fas fa-arrow-right"></i>
                <span>Click to view details</span>
            </div>
        </div>
    `).join('');

    // Add click handlers
    document.querySelectorAll('.project-card').forEach(card => {
        card.addEventListener('click', () => {
            const projectId = card.dataset.projectId;
            // Update hash (will trigger modal via hashchange listener)
            window.location.hash = `project/${projectId}`;
        });
    });
}

// Update filter counts
function updateFilterCounts(projects) {
    const allCount = projects.length;
    const lowCodeCount = projects.filter(p => p.category === 'low-code').length;
    const traditionalCount = projects.filter(p => p.category === 'traditional').length;

    document.getElementById('count-all').textContent = `(${allCount})`;
    document.getElementById('count-lowcode').textContent = `(${lowCodeCount})`;
    document.getElementById('count-traditional').textContent = `(${traditionalCount})`;
}

// Render Skills
function renderSkills(skills) {
    const container = document.getElementById('skills-categories');
    const categories = [
        { key: 'expert', label: 'Expert' },
        { key: 'advanced', label: 'Advanced' },
        { key: 'proficient', label: 'Proficient' }
    ];

    container.innerHTML = categories.map(cat => `
        <div class="skill-category">
            <h4>${cat.label}</h4>
            <div class="skill-list">
                ${skills[cat.key].map(skill => `
                    <div class="skill-item">
                        <span class="skill-name">${skill.name}</span>
                        <div class="skill-level">
                            ${Array(5).fill(0).map((_, i) => `
                                <span class="skill-bar ${i < skill.level ? 'filled' : ''}"></span>
                            `).join('')}
                        </div>
                    </div>
                `).join('')}
            </div>
        </div>
    `).join('');
}

// Render Education
function renderEducation(education) {
    const container = document.getElementById('education-grid');
    // We append to innerHTML, so clear it first if needed (but renderAll does single pass)
    // Actually renderAll calls renderEducation then renderCertifications.
    // So let's make sure we don't overwrite if we split functions.

    const eduHtml = education.map(edu => `
        <div class="education-card">
            <img src="assets/img/${edu.logo}" alt="${edu.school}" class="education-logo" loading="lazy">
            <div class="education-content">
                <h4>${edu.school}</h4>
                <p>${edu.course}</p>
                <span class="education-dates">${edu.dates}</span>
            </div>
        </div>
    `).join('');

    // Set content (overwriting previous)
    container.innerHTML = eduHtml;
}

function renderCertifications(certifications) {
    const container = document.getElementById('education-grid');

    const certHtml = certifications.map(cert => `
        <div class="education-card">
            <img src="assets/img/${cert.logo}" alt="${cert.issuer}" class="education-logo" loading="lazy">
            <div class="education-content">
                <h4>${cert.name}</h4>
                <p>${cert.issuer}</p>
                <span class="education-dates">Issued ${cert.date}</span>
                ${cert.url ? `
                    <a href="${cert.url}" target="_blank" rel="noopener" class="certification-link">
                        <i class="fas fa-external-link-alt"></i>
                        View Credential
                    </a>
                ` : ''}
            </div>
        </div>
    `).join('');

    // Append to existing
    container.innerHTML += certHtml;
}

/* =============================================
 * UI INTERACTIONS
 * =============================================
 */

// Filter Tabs Functionality
function initFilterTabs() {
    const tabs = document.querySelectorAll('.filter-tab');
    const projects = document.querySelectorAll('.project-card');

    tabs.forEach(tab => {
        tab.addEventListener('click', () => {
            // Update active tab
            tabs.forEach(t => t.classList.remove('active'));
            tab.classList.add('active');

            // Filter projects
            const filter = tab.dataset.filter;
            projects.forEach(proj => {
                if (filter === 'all' || proj.dataset.category === filter) {
                    proj.classList.remove('hidden');
                } else {
                    proj.classList.add('hidden');
                }
            });
        });
    });
}

// Modal Functionality
function initModal() {
    const modal = document.getElementById('project-modal');
    const closeBtn = document.getElementById('modal-close');

    // Close on button click
    closeBtn.addEventListener('click', () => closeModal(true));

    // Close on overlay click
    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            closeModal(true);
        }
    });

    // Close on Escape key
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && modal.classList.contains('active')) {
            closeModal(true);
        }
    });
}

/**
 * Opens the project modal
 * @param {string} projectId 
 * @param {boolean} updateHash - Whether to update the URL hash
 */
function openProjectModal(projectId, updateHash = true) {
    if (!appData) return;

    const project = appData.projects.find(p => p.id === projectId);
    if (!project) return;

    if (updateHash) {
        // This will trigger handleHashChange, which calls openProjectModal again
        // To avoid loop, we should just set hash and let the listener handle it?
        // Actually, better to just set hash and let the listener do the work.
        // But if called FROM the listener, we don't want to set hash again.

        // Simplified: The cards CLICK sets the hash. The LISTENER calls this function.
        // So updateHash param might be redundant if we strictly follow event-driven.
        // But for safety, if we call this manually...
        window.history.pushState(null, null, `#project/${projectId}`);
    }

    const modal = document.getElementById('project-modal');
    const content = document.getElementById('modal-content');

    content.innerHTML = `
        <div class="modal-header">
            <img src="assets/img/${project.logo}" alt="${project.company}" class="modal-logo" loading="lazy">
            <div class="modal-title-section">
                <h2>${project.title}</h2>
                <p class="modal-subtitle">${project.company}</p>
                <span class="modal-timeline">
                    <i class="fas fa-calendar-alt"></i>
                    ${project.timeline}
                </span>
            </div>
        </div>
        
        <p class="modal-description">${project.description}</p>
        
        <div class="modal-section">
            <h4 class="modal-section-title">Technologies Used</h4>
            <div class="modal-tags">
                ${project.tags.map(t => `
                    <span class="modal-tag">
                        <img src="assets/img/${t.img}" alt="${t.name}" loading="lazy">
                        ${t.name}
                    </span>
                `).join('')}
            </div>
        </div>
        
        ${project.team ? `
            <div class="modal-section">
                <h4 class="modal-section-title">Team</h4>
                <div class="modal-team">
                    <i class="fas fa-users"></i>
                    <span>${project.team}</span>
                </div>
            </div>
        ` : ''}
        
        <div class="modal-section">
            <h4 class="modal-section-title">Key Accomplishments</h4>
            <div class="modal-accomplishments">
                ${project.accomplishments.map(a => `
                    <div class="modal-accomplishment">
                        <div class="modal-accomplishment-icon">
                            <i class="fas fa-check"></i>
                        </div>
                        <div class="modal-accomplishment-text">${a}</div>
                    </div>
                `).join('')}
            </div>
        </div>
    `;

    modal.classList.add('active');
    document.body.classList.add('modal-open');
}

function closeModal(updateHash = true) {
    const modal = document.getElementById('project-modal');
    modal.classList.remove('active');
    document.body.classList.remove('modal-open');

    if (updateHash) {
        // Clean URL
        history.pushState(null, null, ' ');
    }
}