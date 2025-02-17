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

   ChooseBlockedReason(BlockedReason){
      cy.get('.mx-name-layoutGrid15 > :nth-child(2) > :nth-child(2)').click()
      cy.get('.mx-name-layoutGrid15 > :nth-child(2) > :nth-child(2)').type(BlockedReason).type('{enter}');
}

   ClickCaruCompany() {
      cy.get('.mx-name-switch4 > .widget-switch').click();
}

   ChooseAdministrationCode(AdministrationCode) {
      cy.get('.mx-name-layoutGrid15 > :nth-child(2) > :nth-child(3)').click()
      cy.get('.mx-name-layoutGrid15 > :nth-child(2) > :nth-child(3)').type(AdministrationCode).type('{enter}');
}

   ChooseStockCompany(StockCompany) {
      cy.get(':nth-child(3) > .mx-name-container3').click()
      cy.get(':nth-child(3) > .mx-name-container3').type(StockCompany).type('{enter}');
}

   FillRelationName(RelationName) {
      cy.get('.mx-name-layoutGrid16 > :nth-child(1) > :nth-child(1)').type(RelationName);
}

   FillParentAccount(ParentAccount) {
      cy.get('.mx-name-layoutGrid16 > :nth-child(1) > :nth-child(2)').type(ParentAccount);
}

   ChooseLanguage(ChooseLanguage) {
      cy.get('.mx-name-layoutGrid16 > :nth-child(1) > :nth-child(3)').click()
      cy.get('.mx-name-layoutGrid16 > :nth-child(1) > :nth-child(3)').type(ChooseLanguage).type('{enter}');
}

   FillShortName(ShortName){
      cy.get('.mx-name-layoutGrid16 > :nth-child(2) > :nth-child(1)').type(ShortName);
}

   ChooseBranch(Branch) {
      cy.get('.mx-name-layoutGrid16 > :nth-child(2) > :nth-child(2)').click()
      cy.get('.mx-name-layoutGrid16 > :nth-child(2) > :nth-child(2)').type(Branch).Type('{enter}');
}

   FillPhoneNumber(PhoneNumber) {
      cy.get('.mx-name-layoutGrid16 > :nth-child(2) > :nth-child(3)').type(PhoneNumber);
}

   ChooseProductGroup(ProductGroup) {
      cy.get('.mx-name-layoutGrid16 > :nth-child(3) > :nth-child(1)').click();
      cy.get('.mx-name-layoutGrid16 > :nth-child(3) > :nth-child(1)').type(ProductGroup).type('{enter}');
}

   FillWebsiteUrl(WebsiteUrl) {
      cy.get('.mx-name-layoutGrid16 > :nth-child(3) > :nth-child(2)').type(WebsiteUrl);
}

   FillCreditLimit(CreditLimit) {
      cy.get('.mx-name-layoutGrid16 > :nth-child(5) > :nth-child(1)').type(CreditLimit);
}

   ChooseCurrency(Currency) {
      cy.get('.mx-name-layoutGrid16 > :nth-child(5) > :nth-child(2)').click();
      cy.get('.mx-name-layoutGrid16 > :nth-child(5) > :nth-child(2)').type(Currency).type('{enter}');
}

   FillCreditorNumberExact(CreditorNumberExact) {
      cy.get(':nth-child(5) > :nth-child(3)').type(CreditorNumberExact);
}

   FillRiskProfile(RiskProfile) {
      cy.get('.mx-name-layoutGrid16 > :nth-child(6) > :nth-child(1)').type(RiskProfile);
}

   FillVatExamptionNumber(VatExamptionNumber) {
      cy.get('.mx-name-layoutGrid16 > :nth-child(6) > :nth-child(2)').type(VatExamptionNumber);
}

   FillDso(Dso) {
      cy.get(':nth-child(6) > :nth-child(3)').type(Dso);
}

   FillEoriNumber(EoriNumber) {
      cy.get(':nth-child(8) > :nth-child(1)').type(EoriNumber);
}

   FillCocNumber(CocNumber) {
      cy.get(':nth-child(8) > :nth-child(2)').type(CocNumber);
}

   FillDunsNumber(DunsNumber) {
      cy.get(':nth-child(8) > :nth-child(3)').type(DunsNumber);
}

   FillExciseNumber(ExciseNumber) {
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