
import "../../Support/commands.js";

it('visit homepage', ()=> {
cy.visitUrl();

cy.get('[id*="loginIdTextBox"]').type('Testley');
cy.get('[id*="passwordTextBox2"]').type('Caru01012025!');
});