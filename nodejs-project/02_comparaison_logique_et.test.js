const utils = require('./utils.js');
const assert = require('assert');
const ex = require('./02_comparaison_logique_et.js');

describe('Test de comparaison opérateur logique et', () => {
    it("Test avec majorité", () => {
        try
        {
            assert.strictEqual("Je suis majeur et étudiant", ex.conditionLogiqueEt(18, true));
            assert.strictEqual("Je suis majeur mais pas étudiant", ex.conditionLogiqueEt(18, false));
        }
        catch (error)
        {
            utils.printMessage('Conseil 💡', "Vérifiez que vous testiez que l'âge soit plus grand ou égal à 18 🤔");
            utils.printMessage('Conseil 💡', "Vérifiez la valeur de la variable phrase 🤔");

            throw error;
        }
    });

    it("Test avec minorité", () => {
        try
        {
            assert.strictEqual("Je suis mineur et étudiant", ex.conditionLogiqueEt(17, true));
            assert.strictEqual("Je suis mineur mais pas étudiant", ex.conditionLogiqueEt(17, false));
        }
        catch (error)
        {
            utils.printMessage('Conseil 💡', "Vérifiez que vous testiez que l'âge soit plus plus petit à 18 🤔");
            utils.printMessage('Conseil 💡', "Vérifiez la valeur de la variable phrase 🤔");

            throw error;
        }
    });
})