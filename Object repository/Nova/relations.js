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
        cy.get('.mx-name-layoutGrid3 > :nth-child(1) > :nth-child(4)').click()
        cy.get('.mx-name-layoutGrid3 > :nth-child(1) > :nth-child(4)').type(State).type('{enter}');
}

    ChooseActivityStatus(ActivityStatus) {
        cy.get('.mx-name-layoutGrid3 > :nth-child(1) > :nth-child(5)').click()
        cy.get('.mx-name-layoutGrid3 > :nth-child(1) > :nth-child(5)').type(ActivityStatus).type('{enter}');
}

    ChooseBranch(Branch) {
        cy.get('.mx-name-layoutGrid3 > :nth-child(1) > :nth-child(6)').click()
        cy.get('.mx-name-layoutGrid3 > :nth-child(1) > :nth-child(6)').type(Branch).type('{downarrow}{enter}');
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
        cy.get('.mx-name-layoutGrid3 > :nth-child(2) > :nth-child(4)').click()
        cy.get('.mx-name-layoutGrid3 > :nth-child(2) > :nth-child(4)').type(Country).type('{enter}');
}

    ChooseRelationType(RelationType) {
        cy.get('.mx-name-layoutGrid3 > :nth-child(2) > :nth-child(6)').click();
        cy.get('.mx-name-layoutGrid3 > :nth-child(2) > :nth-child(6)').type(RelationType).type('{enter}');
}

    ClickRelationInformation() {
        cy.get('[data-position="9,0"] > .td-custom-content > .mx-name-actionButton2').click();
}

    ClickDeleteRelation() {
        cy.get('[data-position="9,0"] > .td-custom-content > .mx-name-actionButton4').click();
}

    ClickCancelDeleteRelation() {
        cy.get('.modal-footer > :nth-child(2)').click();
}

    ClickProceedDeleteRelation() {
        cy.get('.modal-footer > .btn-primary').click();
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