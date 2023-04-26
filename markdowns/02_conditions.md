# Les conditions

Tout au long du cycle d'exécution d'un programme, il arrive de devoir réaliser des actions différentes, dépendemment de certaines conditions.

Par exemple le programme réalisera des actions différentes si l'utilisateur est majeur ou non. De même il pourra autoriser l'envoi d'un formulaire si celui-ci est valide ou afficher des messages d'erreurs dans le cas contraire.

Pour ce faire nous utiliserons les instructions ``` if (/* condition */) ```, ``` else if (/* condition */) ``` et ``` else ``` :

```js
let feu = 'vert'

if (feu === 'vert') {
    avancer()
} else if (feu === 'orange') {
    accelerer()
    avancer()
}  else {
    arreterLeVehicule()
}
```

La condition évaluée retourne toujours **un booléen**, donc une valeur logique.

La condition ici peut se traduire par :

* _si_ le feu est vert, j'avance
* _sinon si_ le feu est orange, j'accélère et j'avance
* _sinon_ j'arrête mon véhicule (le feu devant logiquement être rouge)

Si une condition est remplie (ici le feu est vert), les autres instructions ne seront pas évaluées. Il n'est pas possible dans un même bloc d'instructions que deux instructions soient évaluées. Dès qu'une condition est vraie, les suivantes sont ignorées.

Dans l'exemple ci-dessous, la capote ne sera jamais levée :

```js
let feu = 'vert'
let meteo = 'grand soleil'

if (feu === 'vert') {
    avancer()
} else if (meteo === 'grand soleil') {
    leverLaCapote()
}
```

Il est possible possible d'imbriquer les conditions, ce qui aurait pu être utile dans l'exemple précédent :

```js
let feu = 'vert'
let meteo = 'grand soleil'

if (feu === 'vert') {
    avancer()

    if (meteo === 'grand soleil') {
        leverLaCapote()
    }
}
```

Ici si le feu est vert la voiture avance et s'il fait beau la capote est levée.

À travers ces exemples, vous aurez compris que les instructions ``` else if (/* condition */) ``` et ``` else ```, sont optionnelles. Seule l'instruction ``` if (/* condition */) ``` est obligatoire.

## Les comparaisons

Le tableau ci-dessous montre les différents opérateurs de comparaisons possibles :

| Opérateur | Signification                     | Exemple   | Résultat |
| --------- | --------------------------------- | --------- | -------- |
| >         | Supérieur à                       | 8 > 7     | true     |
| >=        | Supérieur ou égal à               | 7 >= 7    | true     |
| <         | Inférieur à                       | 8 < 7     | false    |
| <=        | Inférieur ou égal à               | 7 < 8     | true     |
| ==        | Est égal à                        | 7 == 8    | false    |
| !=        | Est différent de                  | 7 != 8    | true     |
| ===       | Est égal à (valeur et type)       | '7' === 7 | false    |
| !==       | Est différent de (valeur et type) | '7' !== 7 | true     |

### Exercices

Écrivez un test de comparaison qui compare une variable de type _number_ au chiffre 5 :

* si ``` nombre ``` est plus petit ou égal à _5_, assignez à la variable ``` retour ``` la valeur **true**
* sinon, assignez à la variable ``` retour ``` la valeur **false**

@[Écrivez le test de comparaison]({"stubs":["02_comparaison_nombre_5.js"], "command":"node_modules/mocha/bin/mocha 02_comparaison_nombre_5.test.js --reporter list"})

Écrivez un test de comparaison qui compare 2 variables de type _number_, ``` nombre1 ``` et ``` nombre2 ``` :

* si ``` nombre1 ``` est plus petit que ``` nombre2 ```, assignez à la variable ``` phrase ``` la valeur **nombre1 est plus petit**
* si ``` nombre1 ``` est plus grand que ``` nombre2 ```, assignez à la variable ``` phrase ``` la valeur **nombre1 est plus grand**
* sinon assignez à la variable ``` phrase ``` la valeur **égalité**

@[Écrivez le test de comparaison]({"stubs":["02_comparaison_nombres.js"], "command":"node_modules/mocha/bin/mocha 02_comparaison_nombres.test.js --reporter list"})

Écrivez un test de comparaison qui compare les valeurs des variables ``` variable1 ``` et ``` variable2 ``` :

* si les 2 valeurs sont identiques **quelque soit leurs types**, assignez à la variable ``` retour ``` la valeur **true**
* sinon assignez à la variable ``` retour ``` la valeur **false**

@[Écrivez le test de comparaison]({"stubs":["02_comparaison_sans_type.js"], "command":"node_modules/mocha/bin/mocha 02_comparaison_sans_type.test.js --reporter list"})

## Les conversions implicites

JavaScript étant un langage faiblement typé, il est possible de comparer une chaine de caractère (ci-dessus '7') avec un nombre. Dans ce cas JavaScript va convertir la chaine de caractères '7' en nombre. La comparaison simple (==) retournera alors _true_ si l'on fait la comparaison ``` '7' === 7 ```.

Dans le cas d'une comparaison stricte (===), JavaScript ne va pas faire la conversion mais simplement retourner _false_, une chaine de caractères n'étant pas du même type qu'un nombre.

D'autres comparaisons peuvent donner un résultat qui peut sembler étrange, par exemple la comparaison ``` '0' == false ``` retournera _true_. Les types étant différents, JavaScript les convertira en nombre, ``` '0' ``` devenant ``` 0 ``` et ``` false ``` devenant ``` 0 ``` (true est transformé en 1), cela alors à comparer ``` 0 == 0 ```, ce qui donne **true**.

Pour ces raisons il est conseillé de prendre l'habitude de toujours utiliser la comparaison stricte ``` === ```, qui peut éviter des comportements qui peuvent sembler étranges.

### Exercice

Écrivez un test de comparaison qui compare les valeurs des variables ``` variable1 ``` et ``` variable2 ``` :

* si les 2 valeurs et leurs types sont identiques, assignez à la variable ``` retour ``` la valeur **true**
* sinon assignez à la variable ``` retour ``` la valeur **false**

@[Écrivez le test de comparaison]({"stubs":["02_comparaison_sans_type.js"], "command":"node_modules/mocha/bin/mocha 02_comparaison_sans_type.test.js --reporter list"})

### Les opérateurs logiques

Il est possible que l'on souhaite que plusieurs conditions soient réunies avant d'exécuter une instruction. Dans ce cas il faut utiliser l'opérateur logique ``` && ```. Il signifie qu'autant la condition à sa gauche **et** celle à sa droite doivent être valides pour que le bloc d'instructions soit exécuté.

Il se peut également que l'on souhaite qu'une condition **ou** une autre ne soit valide pour exécuter le bloc d'instructions. Dans ce cas il faut utiliser l'opérateur logique ``` || ```.

### Exercices

Écrivez un test de comparaison qui utilise 3 variables ``` age ```, ``` estEtudiant ``` et ``` phrase ``` :

* si ``` age ``` est plus grand ou égal à _18_ **et** si ``` estEtudiant ``` est égal à _true_, assignez à la variable ``` phrase ``` la valeur **Je suis majeur et étudiant**
* sinon si ``` age ``` est plus grand ou égal à _18_ **et** si ``` estEtudiant ``` est égal à _false_, assignez à la variable ``` phrase ``` la valeur **Je suis majeur mais pas étudiant**
* sinon si ``` age ``` est plus petit que _18_ **et** si ``` estEtudiant ``` est égal à _true_, assignez à la variable ``` phrase ``` la valeur **Je suis mineur et étudiant**
* sinon assignez à la variable ``` phrase ``` la valeur **Je suis mineur mais pas étudiant**

@[Écrivez le test de comparaison]({"stubs":["02_comparaison_logique_et.js"], "command":"node_modules/mocha/bin/mocha 02_comparaison_logique_et.test.js --reporter list"})

Écrivez un test de comparaison qui utilise 4 variables ``` age ```, ``` estAuChomage ```, ``` estEtudiant ``` et ``` phrase ``` :

* si ``` age ``` est plus petit que _16_, assignez à la variable ```phrase ``` la valeur **tarif enfant**
* sinon si ``` age ``` est plus petit que _18_, **ou** si ``` age ``` est plus grand ou égal à 65, **ou** si ``` estAuChomage ``` est égal à _true_, **ou** si ``` age ``` est plus petit que _25_ mais que ```estEtudiant ``` est égal à _true_, assignez à la variable ```phrase ``` la valeur **tarif réduit**
* sinon assignez à la variable ```phrase ``` la valeur **plein tarif**

@[Écrivez le test de comparaison]({"stubs":["02_comparaison_logique_ou.js"], "command":"node_modules/mocha/bin/mocha 02_comparaison_logique_ou.test.js --reporter list"})

## Le switch

L'instruction ``` switch ``` est une alternative à l'utilisation des tests conditionnels avec des ```if ```, ``` else if ```, ``` else ```.

Il se présente de la manière suivante :

```js
let saison = "été"
let phrase = ""

switch (saison) {
    case "hiver" :
        phrase = "Il fait froid"
        break
    case "printemps" :
        phrase = "Il fait bon"
        break
    case "été" :
        phrase = "Il fait chaud"
        break
    case "automne" :
        phrase = "Il fait gris"
        break
    default :
        phrase = "Je ne connais pas cette saison"
}
```

Dans l'exemple ci-dessus la variable ``` phrase ``` aura comme valeur _Il fait chaud_. La variable ``` saison ``` ayant _été_ comme valeur, l'instruction ``` case "été" ``` est vérifiée.

Le mot clé ``` break ``` signifie que le code est exécuté du ```case ``` vérifié, jusqu'au prochain ``` break ```.

Si aucun ``` break ``` n'est trouvé à la fin d'un ```case ```, le code continue de s'exécuter et la condition du ```case ``` suivant n'est pas vérifiée!

Dans cet exemple :

```js
let saison = "été"
let phrase = ""

switch (saison) {
    case "hiver" :
        phrase = "Il fait froid"
        break
    case "printemps" :
        phrase = "Il fait bon"
        break
    case "été" :
        phrase = "Il fait chaud"
    case "automne" :
        phrase = "Il fait gris"
        break
    default :
        phrase = "Je ne connais pas cette saison"
}
```

la variable ``` phrase ``` aura _Il fait gris_ comme valeur, car il n'y a pas de ``` break ``` après l'affectation de la valeur à la variable ``` phrase ```.

Le mot clé ``` default ``` peut quand à lui être comparé au ``` else ``` d'un ``` if ```. Si aucune condition n'est satisfaite, c'est ce bloc de code qui sera exécuté.

### Exercice

Écrivez un test de comparaison avec un switch qui :

* transforme la valeur de la variable ``` chiffre ``` dans son équivalent en chaine de caractères et assigne le résultat à la variable ``` mot ```. Si ``` chiffre ``` vaut **1** alors ``` mot ``` sera égal à **un**
* si chiffre est différent de 1, 2 ou 3, assignez la chaine de caractère **inconnu** à la variable ``` chiffre ```

@[Écrivez le test de comparaison avec un switch]({"stubs":["02_comparaison_switch.js"], "command":"node_modules/mocha/bin/mocha 02_comparaison_switch.test.js --reporter list"})

## Questions de fin de chapitre

Les questions ci-dessous permettent de valider les connaissances acquises.

?[Soit l'instruction if ("0") { /* ... */ }. Le bloc d'instruction (entre {}) sera-t-il exécuté ?]
-[x] Oui
-[ ] Non

?[Quel opérateur logique doit-on utiliser si l'on souhaite exécuter un bloc d'instruction seulement si plusieurs conditions sont réunies ?]
-[ ] &
-[ ] |
-[ ] ?
-[x] &&
-[ ] ||
-[ ] ??

?[Quel opérateur logique doit-on utiliser si l'on souhaite exécuter un bloc d'instruction seulement si l'une des deux conditions est réunie ?]
-[ ] &
-[ ] |
-[ ] ?
-[ ] &&
-[x] ||
-[ ] ??

?[Quelles instructions de tests conditionnelles sont valides en JavaScript ?]
-[x] if (condition) {/* ... */}
-[x] else if (condition) {/* ... */}
-[ ] elseif (condition) {/* ... */}
-[ ] else (condition) {/* ... */}
-[x] else {/* ... */}

?[Que se passe-t-il si on ne met pas le mot clé break lorsque l'on rentre dans un switch ?]
-[ ] Le bloc d'instruction default sera automatiquement exécuté
-[x] Le bloc d'instruction suivant sera exécuté
-[x] Les blocs d'instruction suivants sont exécutés, sans contrôle de la valeur de la condition du case