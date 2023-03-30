const utils = require('./utils.js');
const assert = require('assert');
const ex = require('./01_test_string.js');

it("création de la variable'", function () {
    try
    {
        assert.strictEqual("module 288", ex.m288);
        assert.strictEqual(typeof(ex.m288), "string");
    }
    catch (error)
    {
        utils.printMessage('Conseil 💡', "Vérifiez le nom et/ou la valeur de la variable 🤔");

        throw error;
    }
});

it("concaténation de la phrase'", function () {
    try
    {
        assert.strictEqual("Nous suivons le module 288", ex.phrase);
        assert.strictEqual(typeof(ex.phrase), "string");
    }
    catch (error)
    {
        utils.printMessage('Conseil 💡', "Vérifiez votre concaténation 🤔");

        throw error;
    }
});