# Les variables et constantes

## Les variables

En informatique, une variable est l'association d'un nom et d'une valeur.

La valeur de la variable peut évoluer au cours de l'exécution d'un programme. Par exemple une variable ``` saison ``` pourra voir sa valeur passer de _printemps_ à _été_.

On peut définir une variable comme une boîte dans laquelle nous allons stocker une information. Si nous souhaitons changer la valeur d'une variable, l'ancienne est sortie de la boite et est remplacée par la nouvelle.

![Les variables](https://raw.githubusercontent.com/edupellaux/playground-cbebliux/master/images/01_boxes.png "Les variables")

En javascript une variable se déclare à l'aide du mot clé ``` let ```. Ainsi déclarer une variable _saison_ à laquelle nous affectons la valeur _printemps_ se fait de la manière suivante :

```js
let saison = "printemps"
```

Le mot clé ``` let ``` ne se met devant le nom de la variable uniquement lors de la déclaration de celle-ci. Modifier la valeur d'une variable précédemment déclarée se fait de la manière suivante :

```js
saison = "été"
```

Remettre le mot clé ``` let ``` revient à redéclarer la variable et provoque une erreur.

On peut noter qu'il est possible de déclarer une variable sans lui assigner de valeur :

```js
let saison
```

Il faut encore noter que l'affectation d'une valeur à une variable se fait à l'aide **d'un seul** signe ``` = ```. Nous verrons les comparaisons avec le chapitre des conditions.

### Exercice

Écrivez une variable nommée ``` bonjour ```, qui prendra comme valeur _Bonjour tout le monde !_

@[Écrivez la variable bonjour]({"stubs":["01_creer_variable.js"], "command":"node_modules/mocha/bin/mocha 01_creer_variable.test.js --reporter list"})

## Les constantes

Une constante, contrairement à une variable, ne peut pas voir sa valeur modifiée une fois qu'elle à été déclarée. Une constante se déclare à l'aide du mot ``` const ``` :

```js
const COULEUR_ROUGE = "#f00"
```

Vous pouvez noter ici l'utilisation des majuscules pour nommer la constante. Ce point sera éclairci plus tard dans le document.

L'utilisation d'une constante est conseillée notamment dans le cas ou une valeur est réutilisée à plusieurs reprises et ne change pas tout au long de l'exécution du programme. Si le rouge utilisé dans l'exemple venait à être changé pour un rouge plus sombre, cette modification se ferait à un seul et unique endroit.

Un autre avantage est qu'il est que le nom de la constante est plus facile à comprendre que le code correspondant.

### Exercice

Écrivez une constante nommée ``` LE_MODULE ```, qui prendra comme valeur _Module 288_

@[Écrivez la constante LE_MODULE]({"stubs":["01_creer_constante.js"], "command":"node_modules/mocha/bin/mocha 01_creer_constante.test.js --reporter list"})

## Les types

Chaque valeur en JavaScript est d'un certain type. Dans le cadre de ce module, nous verrons les types suivants :

* number
* string
* boolean
* undefined
* null

Il est important de noter que Javascript est un langage dont le typage est faible et dynamique. Ainsi à variable qui aurait été déclarée avec une valeur de type _string_, on peut ensuite affecter une valeur de type number :

```js
let maValeur = "un string" // la variable est de type string

maValeur = 15              // la variable est maintenant de type number
```

### Number

Contrairement à d'autres langages de programmation, JavaScript ne fait pas de différences entre les nombres entiers et les nombres à virgules.

Toutes les opérations mathématiques usuelles sont possibles sur des variables de type number

```js
let nombre1 = 10
let nombre2 = 5
let total = nombre1 / nombre2 + 13 // total est égal à 15
```

### Exercice

Écrivez 3 variables :

* une variable nommée ``` nombre1 ```, qui prendra comme valeur _5_
* une variable nommée ``` nombre2 ```, qui prendra comme valeur _12_
* une variable nommée ``` total ```, qui prendra comme valeur l'addition des variables nombre1 et nombre2

@[Écrivez les variables demandées]({"stubs":["01_test_number.js"], "command":"node_modules/mocha/bin/mocha 01_test_number.test.js --reporter list"})

### String

Un string représente une chaîne de caractères. Cette chaine de caractères doit être passée entre guillemets afin que le langage ne la  confonde pas avec un élément du langage.

```js
let bonjour = 'Bonjour' // Avec des guillemets simples
let prenom = "Sam"      // Avec des guillemets doubles
```

Il est possible de concaténer 2 chaines de caractères ensemble à l'aide de l'opérateur ``` + ``` :

```js
let bonjour = "Bonjour"
let prenom = "Sam"

let sequence = bonjour + " " + prenom
```
Ici la valeur de la variable sequence est ``` Bonjour Sam ```

### Exercice

Écrivez 2 variables :

* une variable nommée ``` m288 ```, qui prendra comme valeur _module 288_
* une variable nommée ``` phrase ```, qui prendra comme qui sera la concaténation de _Nous suivons le_ et de la variable m288. N'oubliez pas l'espace entre les 2 parties

@[Écrivez la variable demandée et faite la concaténation]({"stubs":["01_test_string.js"], "command":"node_modules/mocha/bin/mocha 01_test_string.test.js --reporter list"})

### Boolean

Un booléen est type logique qui peut prendre 2 valeurs : ``` true ``` (vrai) ou ``` false ``` (faux).

Le résultat d'une comparaison est un booléen :

```js
let age = 18

let estMajeur = age > 18 // estMajeur vaut true
```

Il est bien sûr possible d'assigner une valeur booléenne directement à une variable :

```js
let estValide = false
```

### Exercice

Écrivez 2 variables :

* une variable nommée ``` estVrai ```, qui prendra comme valeur _true_
* une variable nommée ``` estFaux ```, qui prendra valuer _l'inverse_ de la variable ``` estVrai ```. Essayez de le faire en utilisant la variable ``` estVrai ```

@[Écrivez les variable demandées ]({"stubs":["01_test_bool.js"], "command":"node_modules/mocha/bin/mocha 01_test_bool.test.js --reporter list"})

::: Correction
En informatique, la négation d'une valeur booléenne se fait à l'aide du ``` ! ```.

Ainsi l'inversion de la valeur se fait de la manière suivante :

```js
let estValide = true
let estInvalide = !estValide
```

Si vous n'avez pas trouvé la solution, modifiez votre  réponse ci-dessus.
:::

### Undefined

``` undefined ``` est une valeur spéciale propre à JavaScript. Il signifie qu'aucune valeur n'a été attribuée. C'est le cas lorsqu'une variable est déclarée mais qu'aucune valeur ne lui est attribuée :

```js
let saison // la valeur de la variable est undefined
```

### Null

``` null ``` est une autre valeur spéciale que l'on pourrait traduire par "rien". Il signifie donc que l'on a pas de valeur connue à assigner. ``` null ``` est une valeur souvent utilisée lorsque l'on a un peu d'expérience en programmation.

```js
let dateNaissance = null // la valeur de la variable est null
```

## Nommage et conventions de nommage au CFPT

Les variables (et constantes) étant des éléments centraux lorsque l'on développe un site ou un logiciel, il est important de les nommer de manière claire.

Ainsi le nom de la variable doit refléter son contenu :

```js
let p = "Sam" // À éviter

let prenom = "Samantha" // Le nom est parlant
```

Quelques limitations existent sur les noms qu'il est possible de donner aux variables :

* Le nom d'une variable ne peut contenir que des lettres, des chiffres, le symbole ``` $ ``` ou le symbole ``` _ ```
* Une variable ne peut pas commencer par un chiffre
* Les espaces sont interdits

À ces quelques restrictions viennent s'ajouter des conventions de nommages. Le CFPT Informatique utilise la notation dite [camelCase](https://fr.wikipedia.org/wiki/Camel_case). La variable commencera par une minsucule puis chaque mot commencera par une majuscule :

```js
let monPrenom = "James"
let monNomDeFamille = "Connelly"
```

Concernant les constantes, il y aura 2 manières de faire.

Dans le cas d'une constante dont on fixe la valeur avant l'exécution, on nommera cette dernière en majusucule et et séparant les mots avec la notation
dite [pascal_case](https://fr.wikipedia.org/wiki/Snake_case) :

```js
const COULEUR_ROUGE = "#f00"
```

Le deuxième cas concerne une constante dont la valeur est calculée à l'exécution. Dans ce cas elle sera notée de la même manière qu'une variable :

```js
let monFormulaire = document.querySelector('form')
```

### Exercice

Transformez les séquences ci-dessous en nom de variables et constantes respectant les conventions de nommage :

* ``` madame la doyenne ``` est le nom de la variable, assignez lui la valeur _Sandrine Manfrini_
* transformez ``` valeur de pi ``` est le nom de la constante, assignez lui la valeur _3.14_

@[Écrivez les variables et constantes demandées]({"stubs":["01_test_conventions.js"], "command":"node_modules/mocha/bin/mocha 01_test_conventions.test.js --reporter list"})

## Mots réservés

Comme dans chaque langage, certains mots clés sont réservés et ne peuvent pas être utilisés pour déclarer une variable. Par exemple :

Comme dans chaque langage, certains mots clés sont réservés et ne peuvent pas être utilisés pour déclarer une variable.

```js
let let = "est invalide" // let est un mot réservé
```

La liste complète est disponible sur le site de [w3schools](https://www.w3schools.com/js/js_reserved.asp).

## Question de fin de chapitre

Les questions ci-dessous permettent de valider les connaissances acquises.

?[Quel mot clé permet de définir une variable ?]
-[ ] var
-[x] let
-[ ] const

?[Quel mot clé permet de définir une constante ?]
-[ ] var
-[ ] let
-[x] const

?[Soit les variables nombre1="3" et nombre=12. Quel est le résultat de la concaténation nombre1 + nombre2 ?]
-[ ] 15
-[x] 312
-[ ] Cela provoque une erreur

?[Quel sont les valeurs que peut prendre une variable de type booléen ?]
-[x] true
-[x] false
-[ ] vrai
-[ ] faux
-[ ] 1
-[ ] 0

?[Quel le type d'une variable à laquelle la valeur 288 a été assignée ?]
-[x] number
-[ ] int
-[ ] string
-[ ] null
-[ ] undefined
-[ ] boolean

?[Quel le type d'une variable à laquelle la valeur 'true' a été assignée ?]
-[ ] number
-[ ] int
-[x] string
-[ ] null
-[ ] undefined
-[ ] boolean

?[Quel le type d'une variable à laquelle aucune valeur n'a été assignée ?]
-[ ] number
-[ ] int
-[ ] string
-[ ] null
-[x] undefined
-[ ] boolean

?[Quels noms de variables sont valides en JavaScript ?]
-[x] _
-[x] $
-[ ] 123abc
-[x] ma_variable
-[x] maVariable
-[x] maVariable1

?[Quel nom de variable respecte les normes du CFPT ?]
-[ ] ma_variable
-[x] maVariable
-[ ] MA_VARIABLE