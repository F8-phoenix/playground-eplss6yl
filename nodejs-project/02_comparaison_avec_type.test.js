const utils = require('./utils.js');
const assert = require('assert');
const ex = require('./02_comparaison_avec_type.js');

describe('Test de comparaison de valeurs sans type', () => {
    it("Test avec des valeurs et types identiques", () => {
        try
        {
            assert.strictEqual(true, ex.comparerAvecType(1, 1));
            assert.strictEqual(true, ex.comparerAvecType('Salut', 'Salut'));
        }
        catch (error)
        {
            utils.printMessage('Conseil 💡', "Vérifiez que vous testiez que les valeurs soient identiques 🤔");
            utils.printMessage('Conseil 💡', "Vérifiez la valeur de la variable retour 🤔");

            throw error;
        }
    });

    it("Test avec des valeurs identiques", () => {
        try
        {
            assert.strictEqual(false, ex.comparerAvecType(1, "1"));
            assert.strictEqual(false, ex.comparerAvecType(1, true));
        }
        catch (error)
        {
            utils.printMessage('Conseil 💡', "Vérifiez que vous testiez que les valeurs et les types soient identiques 🤔");
            utils.printMessage('Conseil 💡', "Vérifiez la valeur de la variable retour 🤔");

            throw error;
        }
    });

    it("Test avec des valeurs différentes", () => {
        try
        {
            assert.strictEqual(false, ex.comparerAvecType(1, 0));
            assert.strictEqual(false, ex.comparerAvecType(false, true));
            assert.strictEqual(false, ex.comparerAvecType("bonjour", true));
        }
        catch (error)
        {
            utils.printMessage('Conseil 💡', "Vérifiez que vous testiez que les valeurs soient différentes 🤔");
            utils.printMessage('Conseil 💡', "Vérifiez la valeur de la variable retour 🤔");

            throw error;
        }
    });
})