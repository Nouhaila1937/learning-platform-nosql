# Course Management System

Pour ce projet, on va créer une petite API qui va servir de backend à une plateforme d'apprentissage en ligne.

Commençons par l'organisation pratique :

1. Structure du Projet
   - config/: Gestion des connexions (MongoDB, Redis) et variables d'environnement.
   - controllers/: Logique métier des entités (exemple: CourseController).
   - routes/: Points d'entrée API pour chaque ressource.
   - services/: Utilitaires pour manipuler les données.
   - app.js: Point d'entrée principal.

# Réponses aux Questions

1.Config.db.js
   * Question : Pourquoi créer un module séparé pour les connexions aux bases de données ?
   * Réponse : Créer un module séparé pour les connexions aux bases de données permet de       centraliser et réutiliser la logique de connexion, de simplifier la maintenance du code, et d'améliorer la lisibilité. Cela facilite également la gestion des erreurs et des paramètres de configuration, tout en permettant une meilleure séparation des responsabilités (respect du principe SOLID).

   * Question : Comment gérer proprement la fermeture des connexions ?
   * Réponse : 

