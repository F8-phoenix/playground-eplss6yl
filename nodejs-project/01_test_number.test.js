const utils = require('./utils.js');
const assert = require('assert');
const ex = require('./01_test_number.js');

it("création des variables'", function () {
    try
    {
        assert.strictEqual(5, ex.nombre1);
        assert.strictEqual(typeof(ex.nombre1), "number");

        assert.strictEqual(12, ex.nombre2);
        assert.strictEqual(typeof(ex.nombre2), "number");
    }
    catch (error)
    {
        utils.printMessage('Conseil 💡', "Vérifiez les noms et/ou les valeurs des variables 🤔");

        throw error;
    }
});

it("calcul du total'", function () {
    try
    {
        assert.strictEqual(17, ex.total);
        assert.strictEqual(typeof(ex.total), "number");
    }
    catch (error)
    {
        utils.printMessage('Conseil 💡', "Vérifiez votre addition 🤔");

        throw error;
    }
});