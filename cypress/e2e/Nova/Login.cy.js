import Home from "../../../Object repository/Nova/homepage";  // Correct import

const home = new Home();

const loginName = 'Testley'
const wrongLoginName = 'Wronglogin'
const loginPassword = 'Caru01012025!'
const wrongPassword = 'Wrongpassword';

describe("testing login", () => {
  beforeEach(() => {
    // Visit the homepage before each test
    home.visit();
  });

  it("should visit home page", () => {
    // Ensure that the login form is visible
    cy.get('[id*="loginIdTextBox"]', { timeout: 10000 })
      .should('be.visible');
  });

  it("should give an error message with wrong credentials",()=>{
    const wrongLoginName = "wronguser";
    const wrongPassword = "Wrongpassword";
    
    home.fillWrongloginName(wrongLoginName);
    home.fillWrongLoginPassword(wrongPassword);
    home.SubmitLogin();
    cy.get('#mxui_widget_DialogMessage_0_content').should('have.text', 'The username or password you entered is incorrect.')
  });

  it("should login the user", () => {
    
const LoginName = 'Testley'
const LoginPassword = 'Caru01012025!';

    home.fillLoginName(LoginName);
    home.fillLoginPassword(LoginPassword);
    home.SubmitLogin();
    cy.get('.col-lg > .mx-name-text1').should('have.text', 'Home')
  });
});
