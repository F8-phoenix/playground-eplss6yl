const utils = require('./utils.js');
const assert = require('assert');
const ex = require('./02_comparaison_nombres.js');

describe('Test de comparaison de valeurs', () => {
    it("Test de l'égalité", () => {
        try
        {
            assert.strictEqual("égalité", ex.comparerNombres(5, 5));
        }
        catch (error)
        {
            utils.printMessage('Conseil 💡', "Vérifiez que vous testiez que les valeurs soient identiques 🤔");
            utils.printMessage('Conseil 💡', "Vérifiez la valeur de la variable phrase 🤔");

            throw error;
        }
    });

    it("Test nombre1 est plus petit que nombre2", () => {
        try
        {
            assert.strictEqual("nombre1 est plus petit", ex.comparerNombres(5, 6));
        }
        catch (error)
        {
            utils.printMessage('Conseil 💡', "Vérifiez que vous testiez que la variable nombre1 soit plus petit que nombre2 🤔");
            utils.printMessage('Conseil 💡', "Vérifiez la valeur de la variable phrase 🤔");

            throw error;
        }
    });

    it("Test nombre2 est plus petit que nombre1", () => {
        try
        {
            assert.strictEqual("nombre1 est plus grand", ex.comparerNombres(6, 5));
        }
        catch (error)
        {
            utils.printMessage('Conseil 💡', "Vérifiez que vous testiez que la variable nombre1 soit plus grand que nombre2 🤔");
            utils.printMessage('Conseil 💡', "Vérifiez la valeur de la variable phrase 🤔");

            throw error;
        }
    });
})