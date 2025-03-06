# Secret Santa 🎄🎅

Une application festive en React construite lors d'un hackathon d'une journée après deux mois de formation en développement web. Secret Santa aide les groupes à organiser des échanges de cadeaux, propose des idées de cadeaux et inclut des fonctionnalités sur le thème de Noël.

![Application Secret Santa](https://via.placeholder.com/800x400?text=Secret+Santa+App)

## 🌟 Fonctionnalités

- **Tirage au Sort Secret Santa** : Association aléatoire des participants pour les échanges de cadeaux
- **Galerie d'Idées Cadeaux** : Parcourez des suggestions de cadeaux de Noël avec leur prix
- **Recherche de Films de Noël** : Découvrez des films de vacances grâce à l'API TMDB
- **Calendrier d'Événements** : Créez et gérez des événements festifs avec stockage local
- **Authentification Utilisateur** : Système de connexion simple pour personnaliser l'expérience
- **Interface Festive** : Complète avec animation de chute de neige

## 🛠️ Technologies

- **React** - Bibliothèque d'interface utilisateur
- **Vite** - Outil de construction et serveur de développement
- **React Router** - Navigation et routage
- **Local Storage** - Persistance des données côté client
- **React Calendar** - Gestion des événements
- **API TMDB** - Données sur les films
- **React Snowfall** - Effet d'animation de neige
- **Animations CSS** - Effets interactifs de déballage de cadeaux

## 🚀 Installation

1. Clonez ce dépôt
```bash
git clone https://github.com/votreutilisateur/secret-gift.git
cd secret-gift
```

2. Installez les dépendances
```bash
npm install
```

3. Démarrez le serveur de développement
```bash
npm run dev
```

4. Construction pour la production
```bash
npm run build
```

## 📋 Structure du Projet

```
secret-santa/
├── src/
│   ├── components/
│   │   ├── cadeaux/         # Composant des idées de cadeaux
│   │   ├── EventCalendar/   # Composant du calendrier d'événements
│   │   ├── Movies/          # Composant des films de Noël
│   │   └── UserID/          # Composant d'authentification utilisateur
│   ├── App.jsx              # Composant principal de l'application
│   ├── BddTest.jsx          # Logique de tirage au sort Secret Santa
│   └── Gift.jsx             # Animation de révélation des cadeaux
└── ...
```

## 🎮 Comment Utiliser

1. **Accueil** : Tirez au sort des noms pour votre échange Secret Santa en sélectionnant votre nom et en cliquant sur "Tirez au sort"
2. **Idées Cadeaux** : Parcourez les suggestions de cadeaux avec prix et liens d'achat
3. **Films de Noël** : Explorez des films sur le thème de Noël avec détails et liens vers les bandes-annonces
4. **Calendrier d'Événements** : Créez et gérez vos événements de vacances
5. **Connexion** : Créez un compte pour personnaliser votre expérience

## 🧠 Apprentissages Acquis

Ce projet de hackathon nous a permis de pratiquer :
- L'architecture des composants React
- La gestion d'état avec useState et useEffect
- L'intégration d'API avec des services externes
- Les principes de conception responsive
- Les animations d'interface utilisateur
- Le stockage local pour la persistance des données
- Les flux d'authentification utilisateur de base

## 🔮 Améliorations Futures

- Implémenter un backend avec une authentification réelle
- Ajouter des notifications par email pour les participants du Secret Santa
- Créer une application mobile avec React Native
- Améliorer les fonctionnalités d'accessibilité
- Ajouter le support multilingue
- Implémenter la création et la gestion de groupes

## 👥 Équipe

Ce projet a été développé en collaboration avec :
- [Mouram Chafik](https://github.com/MouramChafik)

## 📝 Licence

Ce projet est sous licence GNU General Public License v3.0 - voir le fichier LICENSE pour plus de détails.

## 🙏 Remerciements

- [Documentation React](https://fr.reactjs.org/)
- [API TMDB](https://www.themoviedb.org/documentation/api)
- [React Calendar](https://www.npmjs.com/package/react-calendar)
- [React Snowfall](https://www.npmjs.com/package/react-snowfall)

---

Développé avec ❤️ lors de notre premier hackathon (Décembre 2023)
