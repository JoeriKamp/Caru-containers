class Home {
  visit() {
    cy.visit("/")
  } 

  fillLoginName(loginName) {
    cy.get("#\\31 70\\.Nova_UI\\.Login\\.loginIdTextBox1").type(loginName);
  }
  fillWrongloginName(wrongLoginName) {
    cy.get("#\\31 70\\.Nova_UI\\.Login\\.loginIdTextBox1").type(wrongLoginName);
  }
  fillLoginPassword(loginPassword){
    cy.get('#\\31 70\\.Nova_UI\\.Login\\.passwordTextBox2').type(loginPassword);
  }
  fillWrongLoginPassword(wrongPassword){
      cy.get('#\\31 70\\.Nova_UI\\.Login\\.passwordTextBox2').type(wrongPassword);
  }
  SubmitLogin() {
    cy.get('#mxui_widget_LoginButton_0').click();
  }
}
export default Home;