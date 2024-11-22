# RoadApp


## Description
Le but de ce projet est de signaler les defauts d'infrastructures routières. Ce guide vous aidera à démarrer rapidement l'application. le lien vers le site web est disponible via [safetyroad237 app](https://safetyroad237.onrender.com/).

## préréquis
Assurez-vous d'avoir installé les outils suivants : 

* Node.js (v18.15.0 exactement) :<br>
    =>utilisez NVM (node version Manager) pour windows :  [Telechargez le  fichier nvm-setup.zip](https://github.com/coreybutler/nvm-windows/releases?form=MG0AV3), puis dezippez et suivez la procedure d'installation<br>
    =>verifiez l'installation de NVM avec cette commande : 
    ```
    nvm -version
    ```
    => installer la version 18.15.0 avec cette commande :
    ```
    nvm install 18.15.0
    ```
    => utiliser cette version installee : 
    ```
    nvm use 18.15.0
    ```
    => verifier la version de node js : 
    ```
    node -v
    ```

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

