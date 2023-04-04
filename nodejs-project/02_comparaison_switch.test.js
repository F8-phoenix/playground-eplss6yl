const utils = require('./utils.js');
const assert = require('assert');
const ex = require('./02_comparaison_switch.js');

describe('Test de comparaison avec switch', () => {
	it("Test avec 1", () => {
	    try
	    {
	        assert.strictEqual("un", ex.switchChiffre(1));
	    }
	    catch (error)
	    {
	        utils.printMessage('Conseil 💡', "Vérifiez que que la valeur de chiffre soit bien 1 🤔");
        	utils.printMessage('Conseil 💡', "Vérifiez la valeur de la variable chiffre 🤔");

	        throw error;
	    }
	});

	it("Test avec 2", () => {
	    try
	    {
	        assert.strictEqual("deux", ex.switchChiffre(2));
	    }
	    catch (error)
	    {
	        utils.printMessage('Conseil 💡', "Vérifiez que que la valeur de chiffre soit bien 2 🤔");
        	utils.printMessage('Conseil 💡', "Vérifiez la valeur de la variable chiffre 🤔");

	        throw error;
	    }
	});

	it("Test avec 3", () => {
	    try
	    {
	        assert.strictEqual("trois", ex.switchChiffre(3));
	    }
	    catch (error)
	    {
	        utils.printMessage('Conseil 💡', "Vérifiez que que la valeur de chiffre soit bien 3 🤔");
        	utils.printMessage('Conseil 💡', "Vérifiez la valeur de la variable chiffre 🤔");

	        throw error;
	    }
	});

	it("Test avec une autre valeur", () => {
	    try
	    {
	        assert.strictEqual("inconnu", ex.switchChiffre(4));
	    }
	    catch (error)
	    {
	        utils.printMessage('Conseil 💡', "Vérifiez que que la valeur de chiffre soit bien différente de 1, 2 ou 3 🤔");
        	utils.printMessage('Conseil 💡', "Vérifiez la valeur de la variable chiffre 🤔");

	        throw error;
	    }
	});
})