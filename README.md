# RoadApp


## Description
Le but de ce projet est de signaler les defauts d'infrastructures routières. Ce guide vous aidera à démarrer rapidement l'application. le lien vers le site web est disponible via [safetyroad app](https://safetyroad.onrender.com/).

## préréquis
Assurez-vous d'avoir installé les outils suivants : 

* Node.js (v18.15 exactement) : [Telecharger ici](https://nodejs.org/en).
* npm (installé avec Node.js)
* Expo CLI (utilisation de `npx expo`)
* Expo Go App (pour tester l'application sur un appareil mobile) - disponible sur [Google Play](https://play.google.com/store/games?pli=1)
 et [App Store](https://www.apple.com/app-store/).

## Installation et configuration

### 1. Clôner le projet
```
git clone git@github.com:ChetchuengKamsuAI/roadapp.git
cd roadapp
```
### 2. Installer les dependances
```
npm install
```
### 3. Mettre à jour expo si necessaire :
```
npx expo upgrade
```

## Démarrer le projet 

### 1. Lancer le serveur de developpement
```
npx expo start
```
### 2. Scanner le QR code avec l'application Expo Go

* Android:
Utilisez l'application Expo Go pour scanner le QR code affiché dans le terminal ou le navigateur.
* iOS : 
Utilisez l'appareil photo de votre iphone pour scanner le QR code.

## Tester sur un emulateur (facultatif)

* iOS : Assurez-vous d'avoir Xcode installé.
```
npx expo run:ios
```
* Android : Utilisez Android Studio avec un émulateur configuré.
```
npx expo run:android
```

## Néttoyer le projet (si necessaire)
Si vous rencontrez des problemes, éssayez de nettoyer votre projet : 
```
npx expo doctor
npx expo clean
```

## Déploiement 
### 1. Configurer EAS (une seule fois)
```
npm install -g eas-cli
npx eas build:configure
```
Cette commande va generer un fichier `eas.json`

### 2. Construire pour Android
```
eas build -p android
```

### 3. Construire pour iOS (si necessaire) : 
```
eas build -p ios
```

