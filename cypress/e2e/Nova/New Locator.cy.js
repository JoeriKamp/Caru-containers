
import "../../Support/commands.js";

it('visit homepage', ()=> {
cy.visitUrl();

cy.get('#\\32 02\\.Nova_UI\\.Login\\.loginIdTextBox1').type('Testley');
cy.get('#\\32 02\\.Nova_UI\\.Login\\.passwordTextBox2').type('Caru01012025!');
});