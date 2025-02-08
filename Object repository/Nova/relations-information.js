class relationinformation {
   ClickIsActive() {
    cy.get(':nth-child(2) > .mx-name-switch1 > .widget-switch').click();
} 

   ClickIsApproved(){
   cy.get('.mx-name-switch2 > .widget-switch').click();
}

   ClickIsBlocked() {
    cy.get('.mx-name-switch3 > .widget-switch').click();
}

   ClickCaruCompany() {
    cy.get('.mx-name-switch4 > .widget-switch').click();
}

   FillRelationName() {
    cy.get('.mx-name-layoutGrid16 > :nth-child(1) > :nth-child(1)').type(RelationName);
}

   FillParentAccount() {
    cy.get('.mx-name-layoutGrid16 > :nth-child(1) > :nth-child(2)').type(ParentAccount);
}

   ChooseLanguage() {
    cy.get('#downshift-68-toggle-button').click();
    cy.get('#downshift-68-toggle-button').type(ChooseLanguage).type('{enter}');
}

   FillShortName(){
    cy.get('.mx-name-layoutGrid16 > :nth-child(2) > :nth-child(1)').type(ShortName);
}

   ChooseBranch() {
    cy.get('.mx-name-comboBox5 > .widget-combobox')
}
   FillPhoneNumber() {
    cy.get('.mx-name-layoutGrid16 > :nth-child(2) > :nth-child(3)').type(PhoneNumber);
}

   ChooseProductGroup() {
    cy.get('#downshift-70-toggle-button').click();
    cy.get('#downshift-70-toggle-button').type(ProductGroup).type('{enter}');
}

   FillWebsiteUrl() {
    cy.get('.mx-name-layoutGrid16 > :nth-child(3) > :nth-child(2)').type(WebsiteUrl);
}

   FillCreditLimit() {
    cy.get('.mx-name-layoutGrid16 > :nth-child(5) > :nth-child(1)').type(CreditLimit);
}

   ChooseCurrency() {

   }
   FillCreditorNumberExact
   FillRiskProfile
   FillVatExamptionNumber
   FillDso

   FillEoriNumber
   FillCocNumber
   FillDunsNumber
   FillExciseNumber





}
export default relationinformation;