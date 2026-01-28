# 📁 Dossier Logos

Ce dossier contient toutes les variantes du logo Les Voyages En Art.

---

## Comment ajouter un nouveau logo

### Étape 1 : Place tes fichiers ici
Glisse tous les formats de ton logo (SVG, PNG, PDF) dans ce dossier.

### Étape 2 : Ajoute une entrée dans `logos.json`

```json
{
  "id": "mon-logo",
  "name": "Logo Noir",
  "variant": "black",
  "background": "light",
  "preview": "logo-noir.svg",
  "files": [
    { "format": "SVG", "file": "logo-noir.svg", "size": "8 KB" },
    { "format": "PNG", "file": "logo-noir.png", "size": "24 KB" },
    { "format": "PDF", "file": "logo-noir.pdf", "size": "12 KB" }
  ]
}
```

### Étape 3 : Commit + Push
Le dashboard affichera le logo avec un menu déroulant pour choisir le format.

---

## Structure d'un logo

| Champ | Description |
|-------|-------------|
| `id` | Identifiant unique (sans espaces) |
| `name` | Nom affiché dans le dashboard |
| `variant` | `white`, `black`, ou `color` |
| `background` | Sur quel fond : `dark`, `light`, ou `any` |
| `preview` | Fichier utilisé pour l'aperçu (généralement le SVG) |
| `files` | Liste des formats disponibles |

### Structure d'un fichier

| Champ | Description |
|-------|-------------|
| `format` | Label affiché (ex: "SVG", "PNG 2x", "PDF print") |
| `file` | Nom du fichier dans ce dossier |
| `size` | Taille approximative (optionnel, pour info) |

---

## Exemple complet

```json
{
  "logos": [
    {
      "id": "principal",
      "name": "Logo Principal",
      "variant": "white",
      "background": "dark",
      "preview": "logo-LVEA.svg",
      "files": [
        { "format": "SVG", "file": "logo-LVEA.svg", "size": "8 KB" },
        { "format": "PNG", "file": "logo-LVEA.png", "size": "24 KB" },
        { "format": "PNG @2x", "file": "logo-LVEA@2x.png", "size": "48 KB" },
        { "format": "PDF", "file": "logo-LVEA.pdf", "size": "12 KB" }
      ]
    },
    {
      "id": "noir",
      "name": "Logo Noir",
      "variant": "black",
      "background": "light",
      "preview": "logo-noir.svg",
      "files": [
        { "format": "SVG", "file": "logo-noir.svg", "size": "8 KB" },
        { "format": "PNG", "file": "logo-noir.png", "size": "24 KB" }
      ]
    }
  ]
}
```

---

## Conventions de nommage

```
logo-LVEA.svg           → Logo principal
logo-LVEA.png           → Version PNG standard
logo-LVEA@2x.png        → Version PNG haute résolution
logo-LVEA.pdf           → Version PDF pour print
logo-noir.svg           → Variante noire
logo-couleur.svg        → Variante couleur
favicon-logo.svg        → Icône/Favicon
```

---

## Fichiers actuels

- `logo-LVEA.svg` — Logo principal blanc
- `favicon-logo.svg` — Icône/Favicon
