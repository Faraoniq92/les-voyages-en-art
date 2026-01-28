/**
 * =============================================
 * DASHBOARD — Les Voyages En Art
 * V1 — Core Functionality
 * =============================================
 */

// ===== GLOBAL STATE =====
let tokensData = null;
let templatesData = null;
let brandData = null;

// ===== DOM ELEMENTS =====
const sidebar = document.getElementById('sidebar');
const sidebarToggle = document.getElementById('sidebarToggle');
const sidebarLinks = document.querySelectorAll('.sidebar__link[data-page]');
const pages = document.querySelectorAll('.page');
const toast = document.getElementById('toast');

// ===== INITIALIZATION =====
document.addEventListener('DOMContentLoaded', async () => {
    // Load data
    await loadAllData();
    
    // Setup navigation
    setupNavigation();
    
    // Setup mobile sidebar
    setupMobileSidebar();
    
    // Handle initial route
    handleRoute();
    
    // Render all sections
    renderAll();
});

// ===== DATA LOADING =====
async function loadAllData() {
    try {
        // Load tokens
        const tokensResponse = await fetch('data/tokens.json');
        tokensData = await tokensResponse.json();
        
        // Load templates
        const templatesResponse = await fetch('data/templates.json');
        templatesData = await templatesResponse.json();
        
        // Load brand kit
        const brandResponse = await fetch('data/brand.json');
        brandData = await brandResponse.json();
        
        // Update stats
        updateStats();
    } catch (error) {
        console.error('Error loading data:', error);
        showToast('Erreur de chargement des données', 'error');
    }
}

// ===== NAVIGATION =====
function setupNavigation() {
    // Sidebar links
    sidebarLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const page = link.dataset.page;
            navigateTo(page);
        });
    });
    
    // Quick action links
    document.querySelectorAll('[data-nav]').forEach(el => {
        el.addEventListener('click', (e) => {
            e.preventDefault();
            const page = el.dataset.nav;
            navigateTo(page);
        });
    });
    
    // Handle browser back/forward
    window.addEventListener('hashchange', handleRoute);
}

function handleRoute() {
    const hash = window.location.hash.slice(1) || 'home';
    navigateTo(hash, false);
}

function navigateTo(pageId, updateHash = true) {
    // Update hash
    if (updateHash) {
        window.location.hash = pageId;
    }
    
    // Update sidebar active state
    sidebarLinks.forEach(link => {
        link.classList.toggle('active', link.dataset.page === pageId);
    });
    
    // Show correct page
    pages.forEach(page => {
        const isTarget = page.id === `page-${pageId}`;
        page.classList.toggle('active', isTarget);
    });
    
    // Close mobile sidebar
    closeMobileSidebar();
}

// ===== MOBILE SIDEBAR =====
function setupMobileSidebar() {
    // Create overlay
    const overlay = document.createElement('div');
    overlay.className = 'sidebar-overlay';
    overlay.id = 'sidebarOverlay';
    document.body.appendChild(overlay);
    
    // Toggle button
    sidebarToggle.addEventListener('click', toggleMobileSidebar);
    
    // Overlay click
    overlay.addEventListener('click', closeMobileSidebar);
}

function toggleMobileSidebar() {
    sidebar.classList.toggle('open');
    document.getElementById('sidebarOverlay').classList.toggle('show');
}

function closeMobileSidebar() {
    sidebar.classList.remove('open');
    document.getElementById('sidebarOverlay').classList.remove('show');
}

// ===== STATS =====
function updateStats() {
    // Count colors
    let colorCount = 0;
    if (tokensData?.colors) {
        Object.values(tokensData.colors).forEach(group => {
            if (typeof group === 'object') {
                colorCount += Object.keys(group).length;
            }
        });
    }
    document.getElementById('stat-colors').textContent = colorCount;
    
    // Count templates
    const templateCount = templatesData?.templates?.length || 0;
    document.getElementById('stat-templates').textContent = templateCount;
    
    // Count fonts
    const fontCount = brandData?.fonts?.length || 0;
    document.getElementById('stat-fonts').textContent = fontCount;
    
    // Count assets
    const assetCount = brandData?.assets?.length || 0;
    document.getElementById('stat-assets').textContent = assetCount;
}

// ===== RENDER FUNCTIONS =====
function renderAll() {
    renderColors();
    renderTypography();
    renderSpacing();
    renderRadius();
    renderComponents();
    renderTemplates();
    renderLogos();
    renderBrandColors();
    renderBrandFonts();
    renderAssets();
}

// ----- Colors -----
function renderColors() {
    const container = document.getElementById('colors-grid');
    if (!container || !tokensData?.colors) return;
    
    let html = '';
    
    // Flatten color groups
    Object.entries(tokensData.colors).forEach(([groupName, colors]) => {
        if (typeof colors === 'object') {
            Object.entries(colors).forEach(([name, value]) => {
                html += `
                    <div class="color-swatch" onclick="copyToClipboard('${value}', this)">
                        <div class="color-swatch__preview" style="background: ${value};">
                            <span class="color-swatch__copy">Copier</span>
                        </div>
                        <div class="color-swatch__info">
                            <div class="color-swatch__name">${groupName}-${name}</div>
                            <div class="color-swatch__hex">${value}</div>
                        </div>
                    </div>
                `;
            });
        }
    });
    
    container.innerHTML = html;
}

// ----- Typography -----
function renderTypography() {
    const container = document.getElementById('typography-showcase');
    if (!container || !tokensData?.typography) return;
    
    const typo = tokensData.typography;
    const fontFamily = typo.fontFamily || 'Fedra Sans Pro, sans-serif';
    
    const styles = [
        { label: 'Display', size: '64px', weight: '700', sample: 'Les Voyages En Art' },
        { label: 'Heading 1', size: '48px', weight: '700', sample: 'La Peur, le Risque et le Courage' },
        { label: 'Heading 2', size: '32px', weight: '600', sample: 'Une expérience artistique unique' },
        { label: 'Heading 3', size: '24px', weight: '600', sample: 'Conférences-Spectacles' },
        { label: 'Body Large', size: '18px', weight: '400', sample: 'Le Voyage en Art propose des cycles de conférences-spectacles où Isabelle embarque le spectateur dans un voyage à travers les œuvres.' },
        { label: 'Body', size: '16px', weight: '400', sample: 'Une exploration visuelle dynamique des œuvres d\'art rythmée par un texte littéraire.' },
        { label: 'Caption', size: '14px', weight: '400', sample: 'Isabelle de La Selle — Fondatrice' },
    ];
    
    let html = '';
    styles.forEach(style => {
        html += `
            <div class="typography-item">
                <div class="typography-item__label">${style.label}</div>
                <div class="typography-item__sample" style="font-family: ${fontFamily}; font-size: ${style.size}; font-weight: ${style.weight}; line-height: 1.3;">
                    ${style.sample}
                </div>
                <div class="typography-item__meta">${style.size} / ${style.weight}</div>
            </div>
        `;
    });
    
    container.innerHTML = html;
}

// ----- Spacing -----
function renderSpacing() {
    const container = document.getElementById('spacing-list');
    if (!container || !tokensData?.spacing) return;
    
    let html = '';
    Object.entries(tokensData.spacing).forEach(([name, value]) => {
        const numValue = parseInt(value);
        html += `
            <div class="spacing-item">
                <span class="spacing-item__label">--space-${name}</span>
                <div class="spacing-item__visual" style="width: ${Math.min(numValue, 200)}px;"></div>
                <span style="font-size: 12px; color: #666;">${value}</span>
            </div>
        `;
    });
    
    container.innerHTML = html;
}

// ----- Radius -----
function renderRadius() {
    const container = document.getElementById('radius-list');
    if (!container || !tokensData?.radius) return;
    
    let html = '';
    Object.entries(tokensData.radius).forEach(([name, value]) => {
        html += `
            <div class="radius-item">
                <span class="radius-item__label">--radius-${name}</span>
                <div class="radius-item__visual" style="border-radius: ${value};"></div>
                <span style="font-size: 12px; color: #666;">${value}</span>
            </div>
        `;
    });
    
    container.innerHTML = html;
}

// ----- Components -----
function renderComponents() {
    const container = document.getElementById('components-list');
    if (!container || !tokensData?.components) return;
    
    let html = '';
    tokensData.components.forEach(comp => {
        const statusClass = comp.status === 'done' ? '' : 'component-item__status--wip';
        const statusText = comp.status === 'done' ? 'Fait' : 'En cours';
        
        html += `
            <div class="component-item">
                <div class="component-item__icon">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <rect x="3" y="3" width="18" height="18" rx="2"/>
                    </svg>
                </div>
                <span class="component-item__name">${comp.name}</span>
                <span class="component-item__status ${statusClass}">${statusText}</span>
            </div>
        `;
    });
    
    container.innerHTML = html;
}

// ----- Templates -----
function renderTemplates() {
    const container = document.getElementById('templates-grid');
    if (!container || !templatesData?.templates) return;
    
    let html = '';
    templatesData.templates.forEach(template => {
        html += `
            <div class="template-card">
                <div class="template-card__preview">
                    ${template.preview ? `<img src="${template.preview}" alt="">` : 'Aperçu'}
                </div>
                <div class="template-card__content">
                    <h3 class="template-card__title">${template.name}</h3>
                    <p class="template-card__desc">${template.description}</p>
                    <div class="template-card__footer">
                        <span class="template-card__type">${template.type}</span>
                        <a href="${template.url}" target="_blank" class="btn btn--small btn--primary">Ouvrir</a>
                    </div>
                </div>
            </div>
        `;
    });
    
    container.innerHTML = html;
}

// ----- Logos -----
function renderLogos() {
    const container = document.getElementById('logos-grid');
    if (!container || !brandData?.logos) return;
    
    let html = '';
    brandData.logos.forEach(logo => {
        const darkClass = logo.variant === 'white' ? 'logo-item--dark' : '';
        html += `
            <div class="logo-item ${darkClass}">
                <div class="logo-item__preview">
                    <img src="${logo.path}" alt="${logo.name}">
                </div>
                <div class="logo-item__info">
                    <div class="logo-item__name">${logo.name}</div>
                    <div class="logo-item__format">${logo.format}</div>
                </div>
                <a href="${logo.path}" download class="btn btn--small ${logo.variant === 'white' ? 'btn--secondary' : 'btn--primary'}">
                    Télécharger
                </a>
            </div>
        `;
    });
    
    container.innerHTML = html;
}

// ----- Brand Colors -----
function renderBrandColors() {
    const container = document.getElementById('brand-colors');
    if (!container || !brandData?.colors) return;
    
    let html = '';
    brandData.colors.forEach(color => {
        html += `
            <div class="brand-color" onclick="copyToClipboard('${color.hex}', this)">
                <div class="brand-color__swatch" style="background: ${color.hex};"></div>
                <div class="brand-color__info">
                    <div class="brand-color__name">${color.name}</div>
                    <div class="brand-color__hex">${color.hex}</div>
                </div>
            </div>
        `;
    });
    
    container.innerHTML = html;
}

// ----- Brand Fonts -----
function renderBrandFonts() {
    const container = document.getElementById('brand-fonts');
    if (!container || !brandData?.fonts) return;
    
    let html = '';
    brandData.fonts.forEach(font => {
        html += `
            <div class="brand-font">
                <div class="brand-font__info">
                    <div class="brand-font__name" style="font-family: '${font.name}', sans-serif;">${font.name}</div>
                    <div class="brand-font__style">${font.styles.join(', ')}</div>
                </div>
                ${font.downloadUrl ? `<a href="${font.downloadUrl}" target="_blank" class="btn btn--small btn--secondary">Télécharger</a>` : '<span class="btn btn--small" style="opacity: 0.5;">Locale</span>'}
            </div>
        `;
    });
    
    container.innerHTML = html;
}

// ----- Assets -----
function renderAssets() {
    const container = document.getElementById('assets-grid');
    if (!container || !brandData?.assets) return;
    
    let html = '';
    brandData.assets.forEach(asset => {
        html += `
            <a href="${asset.path}" download class="asset-item">
                <div class="asset-item__icon">${asset.icon || '📄'}</div>
                <div class="asset-item__name">${asset.name}</div>
            </a>
        `;
    });
    
    container.innerHTML = html;
}

// ===== UTILITIES =====
function copyToClipboard(text, element) {
    navigator.clipboard.writeText(text).then(() => {
        showToast(`Copié : ${text}`, 'success');
    }).catch(err => {
        console.error('Copy failed:', err);
        showToast('Erreur de copie', 'error');
    });
}

function showToast(message, type = 'default') {
    toast.textContent = message;
    toast.className = 'toast';
    if (type) toast.classList.add(`toast--${type}`);
    toast.classList.add('show');
    
    setTimeout(() => {
        toast.classList.remove('show');
    }, 3000);
}

// ===== EXPOSE GLOBALLY =====
window.copyToClipboard = copyToClipboard;
window.showToast = showToast;
