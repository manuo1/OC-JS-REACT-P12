
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

```
.
├── docs
├── project-meta
├── README.md
└── sportsee
    ├── backend
    │   ├── package.json
    │   └── SportSee
    │       └── app
    │           ├── data.js
    │           ├── index.js
    │           ├── middleware.js
    │           ├── models.js
    │           └── routes.js
    └── frontend
        └── sportsee
            ├── index.html
            ├── public
            │   └── favicon.png
            └── src
                ├── App.jsx
                ├── assets
                │   ├── nutrition_icons
                │   ├── sidebar_icons
                │   └── sportsee_logo.png
                ├── components
                │   ├── AverageSessionLineChart.jsx
                │   ├── AverageSessionLineChart.module.scss
                │   ├── DailyActivityBarChart.jsx
                │   ├── DailyActivityBarChart.module.scss
                │   ├── Loader.jsx
                │   ├── Loader.module.scss
                │   ├── NutritionCard.jsx
                │   ├── NutritionCard.module.scss
                │   ├── UserPerformanceRadarChart.jsx
                │   ├── UserPerformanceRadarChart.module.scss
                │   ├── UserScoreRadialChart.jsx
                │   └── UserScoreRadialChart.module.scss
                ├── main.jsx
                ├── mocks
                │   ├── mockData.js
                │   └── userService.js
                ├── models
                │   ├── UserActivity.js
                │   ├── UserAverageSessions.js
                │   ├── User.js
                │   └── UserPerformance.js
                ├── pages
                │   ├── common
                │   │   ├── Header.jsx
                │   │   ├── Header.module.scss
                │   │   ├── Layout.jsx
                │   │   ├── Layout.module.scss
                │   │   ├── Sidebar.jsx
                │   │   └── Sidebar.module.scss
                │   ├── Error404.jsx
                │   ├── Error404.module.scss
                │   ├── HomePage.jsx
                │   ├── HomePage.module.scss
                │   ├── ProfilePage.jsx
                │   └── ProfilePage.module.scss
                ├── router
                │   └── Router.jsx
                ├── services
                │   ├── fetchJson.js
                │   └── userService.js
                └── styles
                    ├── main.scss
                    └── variables.scss
            

```

- `project-meta` contient la documentation, visuels, et livrables du projet.
- `sportsee/backend` contient le serveur Node.js avec l’API REST.
- `sportsee/frontend` contient la partie client React.


## Documentation avec JSDoc

Ce projet utilise JSDoc pour générer automatiquement la documentation à partir des commentaires présents dans le code source JavaScript.

### mettre à jour la documentation

```bash
cd sportsee/frontend/sportsee
npm run docs
```

La documentation actuelle est déployée sur Github Pages:
[Documentation](https://manuo1.github.io/OC-JS-REACT-P12/)
