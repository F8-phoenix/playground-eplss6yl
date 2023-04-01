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
| !==       | Est différent de (valeur et type) | '7' === 7 | true     |

## Les conversions implicites

JavaScript étant un langage faiblement typé, il est possible de comparer une chaine de caractère (ci-dessus '7') avec un nombre. Dans ce cas JavaScript va convertir la chaine de caractères '7' en nombre. La comparaison simple (==) retournera alors _true_ si l'on fait la comparaison ``` '7' === 7 ```.

Dans le cas d'une comparaison stricte (===), JavaScript ne va pas faire la conversion mais simplement retourner _false_, une chaine de caractères n'étant pas du même type qu'un nombre.

D'autres comparaisons peuvent donner un résultat qui peut sembler étrange, par exemple la comparaison ``` '0' == false ``` retournera _true_. Les types étant différents, JavaScript les convertira en nombre, ``` '0' ``` devenant ``` 0 ``` et ``` false ``` devenant ``` 0 ``` (true est transformé en 1), cela alors à comparer ``` 0 == 0 ```, ce qui donne **true**.

Pour ces raisons il est conseillé de prendre l'habitude de toujours utiliser la comparaison stricte ``` === ```, qui peut éviter des comportements qui peuvent sembler étranges.

### Les opérateurs logiques

Il est possible que l'on souhaite que plusieurs conditions soient réunies avant d'exécuter une instruction. Dans ce cas il faut utiliser l'opérateur logique ``` && ```. Il signifie qu'autant la condition **et** celle à sa droite doivent être valides pour que le bloc d'instructions soit exécuté.

Il se peut également que l'on souhaite qu'une condition **ou** une autre ne soit valide pour exécuter le bloc d'instructions. Dans ce cas il faut utiliser l'opérateur logique ``` || ```.

## Question de fin de chapitre

Les questions ci-dessous permettent de valider les connaissances acquises.

?[Soit l'instruction if ("0") { /* ... */ }. L'instruction sera-t-elle exécutée ?]
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