// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
Cypress.on('uncaught:exception', (err, runnable) => {
    // returning false here prevents Cypress from
    // failing the test
    return false
  });

  Cypress.Commands.add("visitUrl", (url='')=>{
    const baseUrl = `/${url}`
    cy.visit(baseUrl);
    //cy.acceptsCookies("cookie");
    

  }); 
  //example cookie accept command
    //Cypress.Commands.add("acceptsCookies", (cookie) => {
    // We gebruiken nu de naam van het product om de juiste card te vinden,
    // en vervolgens op de bijbehorende button te klikken
    //cy.get('#CybotCookiebotDialogBodyLevelButtonLevelOptinAllowAll').click({force: true});
//});