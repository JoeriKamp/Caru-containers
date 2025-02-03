const cypress = require('cypress')
const { defineConfig } = require('cypress')

module.exports = defineConfig({
e2e: {
    setupNodeEvents(on, config){}
    ,
supportFile: 'cypress/support/e2e.js',
baseUrl: 'https://depotmanager-accp.apps.eu-1c.mendixcloud.com/'
}});