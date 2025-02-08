class relations {
  FillParentAccount(ParentAccount) {
    cy.get('.mx-name-layoutGrid3 > :nth-child(1) > :nth-child(1)').type(ParentAccount);
}
  
  FillContactName(ContactName) {
    cy.get('.mx-name-layoutGrid3 > :nth-child(1) > :nth-child(2)').type(ContactName);
}

  FillContactEmail(ContactEmail) {
    cy.get('.mx-name-layoutGrid3 > :nth-child(1) > :nth-child(3)').type(ContactEmail);
}

  ChooseState(State)  {
    cy.get('#downshift-0-toggle-button').click()
    cy.get('#downshift-0-toggle-button').type(State).type('{enter}');
}

  ChooseActivityStatus(ActivityStatus) {
    cy.get('#downshift-1-toggle-button').click()
    cy.get('#downshift-1-toggle-button').type(ActivityStatus).type('{enter}');
}

  ChooseBranch(Branch) {
    cy.get('#downshift-2-toggle-button').click()
    cy.get('#downshift-2-toggle-button').type(Branch).type('{downarrow}{enter}');
}

  FillRelationName(RelationName) {
    cy.get('.mx-name-layoutGrid3 > :nth-child(2) > :nth-child(1)').type(RelationName);
}

  FillRelationNumber(RelationNumber) {
    cy.get('.mx-name-layoutGrid3 > :nth-child(2) > :nth-child(2)').type(RelationNumber);
}

  FillShortName(ShortName) {
    cy.get('.mx-name-layoutGrid3 > :nth-child(2) > :nth-child(3)').type(ShortName);
}

  ChooseCountry(Country) {
    cy.get('#downshift-3-toggle-button').click()
    cy.get('#downshift-3-toggle-button').type(Country).type('{enter}');
}

  ChooseRelationType(RelationType) {
    cy.get('.mx-name-layoutGrid3 > :nth-child(2) > :nth-child(6)').click();
    cy.get('.mx-name-layoutGrid3 > :nth-child(2) > :nth-child(6)').type(RelationType).type('{enter}');
}

  ClickAddRelation() {
    cy.get(':nth-child(2) > .btn').click();
}

  ClickResetFilters() {
    cy.get('.mx-name-actionButton7').click();
}

  ClickSearch() {
    cy.get('.mx-name-actionButton9').click();
}

}
export default relations;