const { defineConfig } = require("cypress");

module.exports = defineConfig({
    e2e: {
        setupNodeEvents(on, config) {
            //hier komen de node event listeners
        },
    baseUrl: 'hier komt de basis url van de omgeving',
    env: {
        //hier komen omgevingvariabelen die je kunt gebruiken om bijv een baseurl te wijzigen
    }},
});
