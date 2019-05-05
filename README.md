Examen Angular M1-Dev Hitema : Weather App
==========================================

Méthode à suivre :
------------------
  * Forkez ce repository
  * Clonez **votre** repository forké (N'oubliez pas de faire `npm install` après...)
  * Créez votre branche (`git checkout -b prenom-nom`) de travail
  * Faites régulièrement des commits
  * Pusher votre branche puis créez une Pull Request (n'attendez pas la fin !)

Consignes :
-----------

=> **Résultat final attendu** : https://angular-m1-dev-hitema.herokuapp.com/

1. Dans le composant CityWeatherComponent, ajouter une icône en fonction de la condition météorologique.
  * Une séléction d'icônes est disponible ici : https://fontawesome.com/icons?d=gallery&c=weather

2. Dans les composant CityWeatherComponent & DetailsComponent, formater l'affichage des températures (courante, min, max) avec un **Pipe**
  * Limiter à une décimale
  * Utiliser la locale 'fr-FR' pour remplacer le séparateur  de décimales '.' en ','
    ```
    exemples:
      12.41 deviendra 12,4
      11.67 deviendra 12,7
    ```
3. Créer la route `details/<city-name>` qui doit mener vers le composant DetailsComponent
  * En cliquant n'importe ou sur le composant CityWeatherComponent, on veut afficher le composant DetailsComponent pour la ville courante
  * Depuis le composant DetailsComponent, en cliquant sur "Back" on doit revenir sur CityWeatherComponent

4. Dans le composant DetailsComponent, afficher les prévisions (forecast) pour la semaine.

5. Dans le composant CityWeatherComponent, permettre de modifier le nom de la ville. Cette modification doit bien sûr entrainer la récupération des informations météorologiques de la nouvelle ville séléctionnée.

Bonus :
-------

* Créer un composant pour gérer l'affichage des icônes en fonction de la condition météorologique, avec 2 tailles possibles: grand et petit.
  L'utiliser avec le paramètre "grande taille" dans le composant CityWeatherComponent et avec le paramètre "petite taille" dans le composant DetailsComponent
