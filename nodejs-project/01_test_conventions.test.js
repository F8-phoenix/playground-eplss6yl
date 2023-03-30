const utils = require('./utils.js');
const assert = require('assert');
const ex = require('./01_test_conventions.js');

it("création de la variable'", function () {
    try
    {
        assert.strictEqual("Sandrine Manfrini", ex.madameLaDoyenne);
        assert.strictEqual(typeof(ex.madameLaDoyenne), "string");
    }
    catch (error)
    {
        utils.printMessage('Conseil 💡', "Vérifiez le nom et/ou la valeur de la variable 🤔");

        throw error;
    }
});

it("concaténation de la constante'", function () {
    try
    {
        assert.strictEqual(3.14, ex.VALEUR_DE_PI);
        assert.strictEqual(typeof(ex.VALEUR_DE_PI), "number");
    }
    catch (error)
    {
        utils.printMessage('Conseil 💡', "Vérifiez le nom et/ou la valeur de la constante 🤔");

        throw error;
    }
});