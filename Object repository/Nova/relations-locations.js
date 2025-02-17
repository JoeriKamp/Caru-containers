class relationlocation {
    ClickAddLocation() {
        cy.get('.col-lg-auto > .btn').click();
}

    FillLocationName(LocationName) {
        cy.get('.mx-name-layoutGrid3 > :nth-child(1) > :nth-child(1)').type(LocationName);
}

    ChooseLocationType(LocationType) {
        cy.get('.mx-name-layoutGrid3 > :nth-child(1) > :nth-child(2)').click();
        cy.get('.mx-name-layoutGrid3 > :nth-child(1) > :nth-child(2)').type(LocationType).type('{downarrow}{enter}');
}

    FillAdressLine1(AdressLine1) {
        cy.get('.mx-name-layoutGrid3 > :nth-child(2) > :nth-child(1)').type(AdressLine1);
}

    FilladressLine2(AdressLine2) {
        cy.get('.mx-name-layoutGrid3 > :nth-child(2) > :nth-child(2)').type(AdressLine2);
}

    FillPostalCode(PostalCode) {
        cy.get('.mx-name-layoutGrid3 > :nth-child(3) > :nth-child(1)').type(PostalCode);
}

    ChooseCountry(Country) {
        cy.get('.mx-name-layoutGrid3 > :nth-child(4) > :nth-child(1)').click()
        cy.get('.mx-name-layoutGrid3 > :nth-child(4) > :nth-child(1)').type(Country).type('{enter}');
}

    //Is niet klikbaar tenzij US als country wordt gekozen
    //Is only usable if country=US
    ChooseState(State) {
        cy.get(':nth-child(4) > :nth-child(2)').click()
        cy.get(':nth-child(4) > :nth-child(2)').type(State).type('{enter}');
}

    FillCity(City) {
        cy.get('.mx-name-layoutGrid3 > :nth-child(3) > :nth-child(2)').type(City);
}       
     //cancel button when you are adding a location
    ClickCancel() {
        cy.get('.mx-name-actionButton3').click();
}

    ClickSave() {
        cy.get('.mx-name-container2 > .mx-name-actionButton1').click();
}
    
    ClickEditLocation() {
        cy.get('.mx-name-actionButton8').click();
}

    ClickDeleteLocation() {
        cy.get('.mx-name-actionButton10').click();
}

    ClickCancelConfirmDelete() {
        cy.get('.modal-footer > :nth-child(2)').click();
}

    ClickProceedDelete() {
        cy.get('.modal-footer > .btn-primary').click();
}
     //cancel button when you are in the overview of location
    ClickCancel() {
        cy.get('.mx-name-actionButton5').click();
}

    ClickBack() {
        cy.get('.mx-name-actionButton3').click();
}

    ClickNext() {
        cy.get('.mx-name-container2 > .mx-name-actionButton1').click();
    }
}

export default relationlocation