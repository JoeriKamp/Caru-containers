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

   ChooseBlockedReason(){
    cy.get('#downshift-48-toggle-button').click()
    cy.get('#downshift-48-toggle-button').type(BlockedReason).type('{enter}');
}

   ClickCaruCompany() {
    cy.get('.mx-name-switch4 > .widget-switch').click();
}

   ChooseAdministrationCode() {
    cy.get('#downshift-63-toggle-button').click()
    cy.get('#downshift-63-toggle-button').type(AdministrationCode).type('{enter}');
}

   ChooseStockCompany() {
    cy.get('#downshift-64-toggle-button').click()
    cy.get('#downshift-64-toggle-button').type(StockCompany).type('{enter}');
}

   FillRelationName() {
    cy.get('.mx-name-layoutGrid16 > :nth-child(1) > :nth-child(1)').type(RelationName);
}

   FillParentAccount() {
    cy.get('.mx-name-layoutGrid16 > :nth-child(1) > :nth-child(2)').type(ParentAccount);
}

   ChooseLanguage() {
    cy.get('#downshift-68-toggle-button').click()
    cy.get('#downshift-68-toggle-button').type(ChooseLanguage).type('{enter}');
}

   FillShortName(){
    cy.get('.mx-name-layoutGrid16 > :nth-child(2) > :nth-child(1)').type(ShortName);
}

   ChooseBranch() {
    cy.get('.mx-name-comboBox5 > .widget-combobox').click()
    cy.get('.mx-name-comboBox5 > .widget-combobox').type(Branch).Type('{enter}');
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
    cy.get('#downshift-28-toggle-button').click();
    cy.get('#downshift-28-toggle-button').type(Currency).type('{enter}');
}

   FillCreditorNumberExact() {
    cy.get(':nth-child(5) > :nth-child(3)').type(CreditorNumberExact);
}

   FillRiskProfile() {
    cy.get('.mx-name-layoutGrid16 > :nth-child(6) > :nth-child(1)').type(RiskProfile);
}

   FillVatExamptionNumber() {
   cy.get('.mx-name-layoutGrid16 > :nth-child(6) > :nth-child(2)').type(VatExamptionNumber);
}

   FillDso() {
    cy.get(':nth-child(6) > :nth-child(3)').type(Dso);
}

   FillEoriNumber() {
    cy.get(':nth-child(8) > :nth-child(1)').type(EoriNumber);
}

   FillCocNumber() {
    cy.get(':nth-child(8) > :nth-child(2)').type(CocNumber);
}

   FillDunsNumber() {
    cy.get(':nth-child(8) > :nth-child(3)').type(DunsNumber);
}

   FillExciseNumber() {
    cy.get(':nth-child(9) > :nth-child(1)').type(ExciseNumber);
}

   ClickBack() {
    cy.get('.mx-name-actionButton2').click();
}

   ClickNextStep() {
    cy.get('.mx-name-container2 > .mx-name-actionButton1').click();
   }
}
export default relationinformation;