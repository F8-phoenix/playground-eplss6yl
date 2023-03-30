let utils = require('./utils.js');
let assert = require('assert');
var ex = require('./01_creer_constante.js');

it("Création d'une constante'", function () {
  try
  {
    assert.equal("Module 288", ex.LE_MODULE);
    assert.equal(typeof(ex.LE_MODULE), "string");
  }
  catch (error)
  {
    utils.printMessage('Conseil 💡', "Vérifiez le nom et/ou la valeur de la constante 🤔");

    throw error;
  }
});
