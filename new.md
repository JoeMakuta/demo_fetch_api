# LES BOUCLES

- **Definition**
- Fonctionnement
- Types :
  1. `for`
  2. `while`
  3. `do while`
  4. Instruction `break` et `continue`

# EXERCICES

### Exercice 1

Obtenez la somme de deux tableaux… en fait la somme de tous leurs éléments.
PS Chaque tableau ne comprend que des nombres entiers. La sortie est également un nombre.

````javascript
let arr_1 = [3, 5, 22, 5, 7, 2, 45, 75, 89, 21, 2]; // --> 276
let arr_2 = [9, 2, 42, 55, 71, 22, 4, 5, 90, 25, 26]; // --> 351
// Example output:
// 276 + 351 = 627```
````

### Exercice 2

À l’aide d’une boucle for, imprimez tous les nombres pairs jusqu’à n inclus. N'incluez pas 0.

````javascript let n1 = 22;
// Example output:
// 2 4 6 8 10 12 14 16 18 20 22 OR each item on a new line```
````

### Exercice 3

En utilisant une boucle for, affichez les éléments dans l'ordre inverse

````javascript
let arr = [43, "what", 9, true, "cannot", false, "be", 3, true];
// Example output:
// true 3.5  be  false cannot  true 9 what 43 OR each item on a new line```
````

### Exercice 4

Étant donné deux tableaux d’entiers. Additionnez chaque élément à la même position et
créez un nouveau tableau contenant la somme de chaque paire. Supposons que les deux tableaux aient la même longueur.

````javascript
let arr_3 = [4, 6, 7];
let arr_4 = [8, 1, 9];
// Example output:
// [12, 7, 16]```
````

### Exercice 5

Étant donné une chaîne, remplacez une lettre sur deux par un « Z » majuscule. Supposons
qu'il n'y ait pas d'espace.

````javascript
let str1 = "javascript";
// Example output:
// jZvZsZrZpZ OR each letter on a new line
// HINT: You can use  if((i+1) % 2 == 0) to check for even indexes ```
````
