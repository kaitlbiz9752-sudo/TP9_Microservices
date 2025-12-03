
# TP Microservices — Projet Compte (Backend Spring Boot + Front React)

Ce projet est composé de **deux applications distinctes** :

1. **Backend : compte-api-rest (Spring Boot)**
2. **Frontend : compte-client (React.js)**

Les deux projets communiquent via une API REST permettant la gestion des comptes bancaires.

---

# 1. Backend – Spring Boot (compte-api-rest)

##  Arborescence principale
- `controllers` : contient le contrôleur REST exposant les endpoints.
- `entities` : contient les classes du modèle (Compte, TypeCompte).
- `repositories` : contient les interfaces d’accès aux données.
- `resources/application.properties` : configuration du serveur, base de données, port…
- `pom.xml` : dépendances Maven du projet.



<img width="609" height="976" alt="image" src="https://github.com/user-attachments/assets/5535b060-6fe8-4ed3-a934-b6df9897a2a4" />

##  Fonctionnalités
- Exposer une API REST pour gérer les comptes.
- Fournir les endpoints pour :
  - récupérer la liste des comptes ;
  - ajouter un compte.

##  Lancer le backend
Depuis IntelliJ ou via terminal :

```
mvn spring-boot:run
```

Il démarre par défaut sur :  
 **http://localhost:8082**

---

# 2. Frontend – React (compte-client)

##  Arborescence principale
- `src/components/` : contient les composants React :
  - `CompteList.js` : affichage de la liste des comptes
  - `CompteForm.js` : formulaire d’ajout de compte
- `src/config.js` : contient l’URL du backend
- `App.js` : assemble les composants
- `public/` : fichiers statiques
- `package.json` : dépendances du front



<img width="598" height="970" alt="image" src="https://github.com/user-attachments/assets/70a40e3d-067b-4e91-9e1b-044198cda3d2" />


<img width="964" height="325" alt="image" src="https://github.com/user-attachments/assets/5cd530f0-5d69-448b-9279-c5596d6cecb1" />

##  Fonctionnalités
- Afficher la liste des comptes récupérés depuis l’API REST.
- Ajouter un nouveau compte via un formulaire.
- Communiquer avec Spring Boot via Axios.

##  Lancer le frontend
Depuis le projet React :

```
npm install
npm start
```

L’application s’ouvre automatiquement sur :  
 **http://localhost:3001**

---

# 3. Communication entre Backend et Frontend

Le fichier `src/config.js` du front contient l’URL du backend :

```
http://localhost:8082/api
```

Ainsi, React peut appeler les endpoints exposés par Spring Boot.

---

# 4. Architecture Globale

###  Front-end (React)
Affiche l’interface graphique + envoie des requêtes API.

###  API REST (Spring Boot)
Gère la logique métier + communique avec la base de données.

---

# 5. Résultat attendu

Une mini-application complète permettant :

- d’ajouter un compte bancaire ;
- d’afficher tous les comptes dans un tableau ;
- d’interagir avec un backend Spring Boot.

---



https://github.com/user-attachments/assets/8de32e28-c34d-4c8a-b788-bffd5ed0d1b3



---

# 6. Auteurs

Projet réalisé dans le cadre du TP Microservices.  
Étudiante : *AITLBIZ Kaoutar*



