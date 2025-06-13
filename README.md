
# OC-JS-REACT-P12
Développeur d'application JavaScript React - Projet 12 - Développez un tableau de bord d'analytics avec React

# SportSee - Profil Utilisateur

Ce projet consiste à développer la nouvelle page profil utilisateur de SportSee, une plateforme de coaching sportif.

## Prérequis

- [Node.js (>=12.18)](https://nodejs.org/)
- [Yarn](https://classic.yarnpkg.com/) (pour le backend)
- [npm](https://www.npmjs.com/) ou [pnpm](https://pnpm.io/) (pour le frontend)
- [Git](https://git-scm.com/)

## Installation

### 1. Cloner le projet

```bash
git clone https://github.com/manuo1/OC-JS-REACT-P12.git
cd sportsee
```

### 2. Installation 

```bash
cd backend/SportSee
yarn install
cd ../../frontend/sportsee 
npm install
```

### 3. Lancer Front et Back

```bash
npm run dev
```
(concurrently permet de lancer les deux services avec une seule commande)

## Usage

Pour accéder à la page profil utilisateur, utiliser les URLs suivantes :

- http://localhost:5173/profil/18
- http://localhost:5173/profil/12

Seules ces routes fonctionnent actuellement pour simuler différents utilisateurs et voir leurs statistiques sur leur profil.

## Architecture du projet

Voici une vue simplifiée de l’organisation des dossiers et fichiers principaux du projet :

```
.
├── project-meta
├── README.md
└── sportsee
    ├── backend
    │   └── SportSee
    │       ├── app
    │       │   ├── data.js
    │       │   ├── index.js
    │       │   ├── middleware.js
    │       │   ├── models.js
    │       │   └── routes.js
    └── frontend
        └── sportsee
            ├── public
            │   └── favicon.png
            └── src
                ├── App.jsx
                ├── assets
                │   ├── nutrition_icons
                │   ├── sidebar_icons
                │   └── sportsee_logo.png
                ├── components
                ├── main.jsx
                ├── mocks
                ├── pages
                ├── router
                ├── services
                ├── styles
                └── utils


```

- `project-meta` contient la documentation, visuels, et livrables du projet.
- `sportsee/backend` contient le serveur Node.js avec l’API REST.
- `sportsee/frontend` contient la partie client React.

