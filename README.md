# Portfolio — Khadije Ahmedou Limam

Site web statique — Développeuse Full-Stack Web & Mobile.

## Aperçu local

Ouvre simplement `index.html` dans ton navigateur. C'est tout.

Ou lance un petit serveur (facultatif, pour un rendu plus fidèle) :

```bash
# Depuis ce dossier
python -m http.server 8080
# Puis ouvrir http://localhost:8080 dans le navigateur
```

## Structure

```
portfolio/
├── index.html    # page unique avec toutes les sections
├── style.css     # design complet (responsive + animations)
├── script.js     # micro-interactions (header, menu mobile, reveal)
└── README.md
```

## Déploiement gratuit sur GitHub Pages (recommandé)

1. Crée un nouveau dépôt GitHub nommé exactement :
   `Khadi125.github.io`
2. Copie les fichiers `index.html`, `style.css`, `script.js` à la racine
   de ce dépôt.
3. Push sur `main`.
4. Ton portfolio sera disponible à l'URL :
   **https://Khadi125.github.io**

## Sections

1. Accueil (hero)
2. À propos
3. Compétences
4. Projets (Koulia en projet phare)
5. Expérience & Formation
6. Contact

## Personnalisation

- Pour changer la couleur d'accent : modifier `--accent` dans `style.css`
  (au tout début, dans `:root`).
- Pour ajouter un projet : dupliquer un bloc `<article class="project-card">`
  dans `index.html`.
- Pour changer une info : la chercher directement dans `index.html`.
