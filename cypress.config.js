const cypress = require('cypress')
const { defineConfig } = require('cypress')

module.exports = defineConfig({
e2e: {
    setupNodeEvents(on, config){}
    ,
supportFile: 'cypress/support/e2e.js',
baseUrl: 'https://depotmanager-accp.apps.eu-1c.mendixcloud.com/'
//dit is de link voor de Datareflector
// https://datadeflector-accp.apps.eu-1c.mendixcloud.com/index.html
}});