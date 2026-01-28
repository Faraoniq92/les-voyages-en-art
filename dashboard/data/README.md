# Mega Dashboard LVEA

Dashboard centralisé pour Les Voyages En Art : admin, design system, templates et brand kit.

---

## 🚀 Installation V1

### Structure à mettre dans le repo GitHub

```
📁 racine du repo/
├── index.html              # Site public (existant)
├── admin.html              # Admin CMS (existant)
├── 📁 dashboard/           # ← NOUVEAU
│   ├── index.html
│   ├── dashboard.css
│   ├── dashboard.js
│   └── 📁 data/
│       ├── tokens.json
│       ├── templates.json
│       └── brand.json
├── 📁 images/              # (existant)
└── 📁 fonts/               # (existant)
```

### Étapes

1. **Télécharge le dossier `dashboard/`** complet
2. **Place-le à la racine** de ton repo GitHub (au même niveau que `index.html`)
3. **Commit + Push**
4. **Accède au dashboard** via : `https://ton-site.netlify.app/dashboard/`

### URLs finales

| Page | URL |
|------|-----|
| Site public | `https://ton-site.netlify.app/` |
| Admin CMS | `https://ton-site.netlify.app/admin.html` |
| **Dashboard** | `https://ton-site.netlify.app/dashboard/` |

---

## 🔧 Configuration admin.html

L'admin est intégré via iframe avec sandbox sécurisé :

```html
<iframe 
    src="../admin.html" 
    sandbox="allow-same-origin allow-scripts allow-forms allow-popups"
></iframe>
```

**Notes :**
- L'admin garde son système d'authentification (mot de passe)
- Le bouton "Ouvrir en plein écran" ouvre l'admin dans un nouvel onglet
- Si problème d'affichage iframe, utiliser le bouton plein écran

---

## 📁 Fichiers de données

### `data/tokens.json`
Design tokens du site : couleurs, typographies, espacements, composants.

### `data/templates.json`
Liste des templates/canvases avec liens (Figma, Notion, Canva, etc.).

### `data/brand.json`
Brand kit : logos, couleurs de marque, fonts, assets téléchargeables.

**Pour modifier :** éditer les fichiers JSON directement, puis commit.

---

## 📱 Responsive

V1 inclut un responsive basique :
- **Desktop** : sidebar fixe à gauche
- **Tablet/Mobile** : sidebar cachée, toggle hamburger

---

## ⚠️ Limitations V1

- Pas de search globale
- Pas de dark mode
- Pas de gestion de permissions
- Données statiques (JSON)
- UI basique (fonctionnelle mais sobre)

Ces points sont adressés dans la V2/V3.

---

# 🗺️ Roadmap V2 / V3

## V2 — UI Upgrade (4-8h)

### Design System interne du dashboard
- [ ] **Dark mode** toggle (CSS variables déjà en place)
- [ ] **Composants UI** : Button, Card, Badge, Input stylisés
- [ ] **Hover states** améliorés avec micro-animations
- [ ] **Loading states** (skeletons)
- [ ] **Empty states** avec illustrations

### UX Améliorations
- [ ] **Search globale** (templates + assets + colors)
- [ ] **Breadcrumbs** pour navigation
- [ ] **Quick actions widget** sur chaque page
- [ ] **Raccourcis clavier** (⌘K pour search, etc.)
- [ ] **Tooltips** informatifs

### Fonctionnalités
- [ ] **Filtres** sur les templates (par type)
- [ ] **Favoris** (localStorage)
- [ ] **Historique** des copies (couleurs copiées récemment)
- [ ] **Export** design tokens en CSS/SCSS/JSON

### Design
- [ ] **Icônes custom** (remplacer les SVG inline)
- [ ] **Illustrations** pour les états vides
- [ ] **Gradients subtils** sur les cards
- [ ] **Glassmorphism** sur la sidebar (optionnel)

---

## V3 — Features Avancées (8-16h)

### Intégration poussée
- [ ] **Sync Figma** : afficher les composants Figma via API
- [ ] **Preview live** des templates dans le dashboard
- [ ] **Édition inline** des tokens (avec save dans JSON)
- [ ] **Upload d'assets** direct depuis le dashboard

### Collaboration
- [ ] **Système de permissions** (admin / viewer)
- [ ] **Audit log** (qui a modifié quoi)
- [ ] **Commentaires** sur les templates
- [ ] **Notifications** de mise à jour

### Analytics
- [ ] **Stats d'utilisation** (couleurs les plus copiées)
- [ ] **Dashboard analytics** (visites du site, etc.)
- [ ] **Checklist projet** avec progression

### Technique
- [ ] **PWA** (installable, offline)
- [ ] **Backend** optionnel (Supabase / Firebase)
- [ ] **API** pour les données
- [ ] **Tests** unitaires

---

## Priorisation suggérée

| Priorité | Feature | Effort | Impact |
|----------|---------|--------|--------|
| 🔴 P0 | Dark mode | 2h | Élevé |
| 🔴 P0 | Search globale | 3h | Élevé |
| 🟠 P1 | Hover states + animations | 2h | Moyen |
| 🟠 P1 | Filtres templates | 1h | Moyen |
| 🟡 P2 | Export tokens | 2h | Moyen |
| 🟡 P2 | Favoris | 1h | Faible |
| 🟢 P3 | Figma sync | 8h | Élevé |
| 🟢 P3 | Permissions | 8h | Moyen |

---

## Tech Stack V2+ (si nécessaire)

Si les besoins grandissent :

| Besoin | Solution recommandée |
|--------|---------------------|
| Framework JS | Alpine.js (léger) ou Vue 3 |
| CSS | Tailwind CSS ou CSS Modules |
| State management | localStorage + Zustand |
| Backend | Supabase (gratuit, simple) |
| Auth | Supabase Auth ou Netlify Identity |
| Déploiement | Netlify (déjà en place) |

**Pour V1-V2, rester en vanilla JS/CSS est suffisant.**

---

## 💡 Quick wins V1.1

Améliorations rapides (<1h chacune) :

1. Ajouter les vrais liens dans `templates.json` (Figma, Notion, etc.)
2. Ajouter plus de logos dans `brand.json` (variantes PNG)
3. Personnaliser les couleurs du dashboard avec les tokens LVEA
4. Ajouter des previews images aux templates
5. Compléter la liste des composants dans `tokens.json`

---

*Dashboard V1 créé le 28/01/2026*
