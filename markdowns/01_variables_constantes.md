# Les variables et constantes

## Les variables

En informatique, une variable est l'association d'un nom et d'une valeur. 

La valeur de la variable peut évoluer au cours de l'exécution d'un programme. Par exemple une variable ``` saison ``` pourra voir sa valeur passer de _printemps_ à _été_.

On peut définir une variable comme une boîte dans laquelle nous allons stocker une information. Si nous souhaitons changer la valeur d'une variable, l'ancienne est sortie de la boite et est remplacée par la nouvelle.

![Les variables](https://github.com/edupellaux/playground-cbebliux/blob/master/images/01_boxes.png "Les variables")

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

## Les constantes

Une constante, contrairement à une variable, ne peut pas voir sa valeur modifiée une fois qu'elle à été déclarée. Une constante se déclare à l'aide du mot ``` const ``` :

```js
const COULEUR_ROUGE = "#f00"
```

Vous pouvez noter ici l'utilisation des majuscules pour nommer la constante. Ce point sera éclairci plus tard dans le document.

L'utilisation d'une constante est conseillée notamment dans le cas ou une valeur est réutilisée à plusieurs reprises et ne change pas tout au long de l'exécution du programme. Si le rouge utilisé dans l'exemple venait à être changé pour un rouge plus sombre, cette modification se ferait à un seul et unique endroit.

Un autre avantage est qu'il est que le nom de la constante est plus facile à comprendre que le code correspondant.

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

### String

### Boolean

### Undefined

### Null

## Conventions de nommage au CFPT

## Affectation

## Concaténation

## Mots réservés