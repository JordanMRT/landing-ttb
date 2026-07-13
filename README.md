# Time To Binge — Landing page

Page de présentation statique (vanilla HTML/CSS/JS, zéro dépendance,
zéro build) pour montrer l'appli avant que quelqu'un s'y connecte.

## À faire avant de publier

1. **Remplace le lien de l'appli** — trois occurrences de
   `https://TON-LIEN-VERS-L-APPLI` dans `index.html` (nav, hero, CTA
   final). Cherche/remplace en une fois.

2. **Ajoute tes vraies captures d'écran** dans `assets/screenshots/`,
   avec exactement ces noms de fichiers (PNG, idéalement en 9:19.5,
   format téléphone) :
   - `journal.png`
   - `fiche.png`
   - `stats.png`
   - `badges.png`
   - `upcoming.png`

   Tant qu'un fichier n'existe pas, un joli placeholder pointillé
   s'affiche automatiquement à la place — rien ne casse, tu peux
   publier avant d'avoir toutes les images et les ajouter au fur et à
   mesure (aucune modification de code nécessaire, juste déposer les
   fichiers).

3. **Relis et personnalise la section "Pourquoi"** dans `index.html`
   (`<section class="story" id="pourquoi">`) — j'ai écrit un texte de
   départ basé sur ce que je connais du projet (l'export TV Time comme
   point de départ), mais je préfère que tu le réécrives avec tes
   propres mots plutôt que de te faire dire des choses que je ne peux
   pas garantir exactes. La phrase `story-signature` est un
   marqueur à remplacer ou supprimer.

4. **Vérifie la liste des fonctionnalités** — j'ai repris ~9 features
   majeures de ce qu'on a construit ensemble ; ajoute/retire selon ce
   que tu veux mettre en avant.

## Déployer sur GitHub Pages

Option simple : nouveau dépôt séparé, dédié à cette landing page.

```bash
cd landing
git init
git add .
git commit -m "Landing page Time To Binge"
git branch -M main
git remote add origin https://github.com/TON_PSEUDO/time-to-binge-landing.git
git push -u origin main
```

Puis sur GitHub : **Settings → Pages → Source : branch `main`, dossier `/`**.

Si tu préfères la garder dans le même dépôt que l'appli plutôt qu'un
dépôt séparé, place ce dossier `landing/` à la racine de ton dépôt
existant et héberge-la sur un sous-chemin, ou utilise un nom de domaine
personnalisé pointant vers ce dossier si ton hébergeur le permet — dis-moi
si tu veux qu'on regarde cette option plus précisément.

## Structure

```
landing/
├── index.html
├── css/style.css
├── js/script.js         # révélation douce des sections au scroll
└── assets/screenshots/  # dépose tes captures ici
```
