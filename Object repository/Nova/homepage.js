class Home {
  visit() {
    cy.visit("/")
  } 

  fillLoginName(loginName) {
    cy.get('[id*="loginIdTextBox"]').type(loginName);
    
  }
  fillWrongloginName(wrongLoginName) {
    cy.get('[id*="loginIdTextBox"]').type(wrongLoginName);
  }
  fillLoginPassword(loginPassword){
    cy.get('[id*="passwordTextBox2"]').type(loginPassword);
  }
  fillWrongLoginPassword(wrongPassword){
    cy.get('[id*="passwordTextBox2"]').type(wrongPassword);
  }
  SubmitLogin() { 
    cy.get('#mxui_widget_LoginButton_0').click();
  }
}
export default Home;