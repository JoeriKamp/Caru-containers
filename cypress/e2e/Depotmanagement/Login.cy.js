import Home from "../../../Object repository/Depotmanagement/homepage";  // Correct import

const home = new Home();

describe("testing login", () => {
  beforeEach(() => {
    // Visit the homepage before each test
    home.visit();
  });

  it("should visit home page", () => {
    // Ensure that the login form is visible
    cy.get("#\\31 70\\.Nova_UI\\.Login\\.loginIdTextBox1", { timeout: 10000 })
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
    const loginName = "functionaladmin";
    const loginPassword = "sE2L+ibYSvb6pPj";

    // Fill the login form and submit
    home.fillLoginName(loginName);
    home.fillLoginPassword(loginPassword);
    home.SubmitLogin();
    cy.get('.mx-title').should('have.text', 'Dashboard')
  });
});
