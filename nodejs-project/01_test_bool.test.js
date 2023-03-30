const utils = require('./utils.js');
const assert = require('assert');
const ex = require('./01_test_bool.js');

it("création des variables'", function () {
    try
    {
        assert.strictEqual(true, ex.estVrai);
        assert.strictEqual(typeof(ex.estVrai), "boolean");

        assert.strictEqual(false, ex.estFaux);
        assert.strictEqual(typeof(ex.estFaux), "boolean");
    }
    catch (error)
    {
        utils.printMessage('Conseil 💡', "Vérifiez le nom et/ou la valeur de la variable 🤔");

        throw error;
    }
});