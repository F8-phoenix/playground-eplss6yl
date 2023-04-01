const utils = require('./utils.js');
const assert = require('assert');
const ex = require('./02_comparaison_nombre_5.js');

describe('Test de comparaison de valeurs', () => {
    it("Test de nombre plus petit ou égal à 5", () => {
        try
        {
            assert.strictEqual(true, ex.test(4));
            assert.strictEqual(true, ex.test(5));
        }
        catch (error)
        {
            utils.printMessage('Conseil 💡', "Vérifiez que vous testiez que la valeur soit plus petite ou égal à 5 🤔");
            utils.printMessage('Conseil 💡', "Vérifiez la valeur de la variable retour 🤔");

            throw error;
        }
    });

    it("Test de nombre plus grand que 5", () => {
        try
        {
            assert.strictEqual(false, ex.test(6));
        }
        catch (error)
        {
            utils.printMessage('Conseil 💡', "Vérifiez que vous testiez que la valeur soit plus grande que 5 🤔");
            utils.printMessage('Conseil 💡', "Vérifiez la valeur de la variable retour 🤔");

            throw error;
        }
    });
})