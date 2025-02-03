
import "../../Support/commands.js";

const LoginName = 'functionaladmin'
const LoginPassword = 'sE2L+ibYSvb6pPj'

it('visit homepage', ()=> {
cy.visitUrl();

cy.get("#\\31 70\\.Nova_UI\\.Login\\.loginIdTextBox1").type(LoginName);
cy.get('#\\31 70\\.Nova_UI\\.Login\\.passwordTextBox2').type(LoginPassword);
cy.get('#mxui_widget_LoginButton_0').click();


})
;