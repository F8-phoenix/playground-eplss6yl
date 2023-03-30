const utils = require('./utils.js');
const assert = require('assert');
const ex = require('./01_creer_variable.js');

it("Création d'une variable'", function () {
    try
    {
        assert.strictEqual("Bonjour tout le monde !", ex.bonjour);
        assert.strictEqual(typeof(ex.bonjour), "string");
    }
    catch (error)
    {
        utils.printMessage('Conseil 💡', "Vérifiez le nom et/ou la valeur de la variable 🤔");

        throw error;
    }
});
