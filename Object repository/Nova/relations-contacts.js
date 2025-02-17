class relationcontacts {
    ClickAddContact() {
        cy.get(':nth-child(2) > .btn').click();
}

    FillFirstName(FirstName) {
        cy.get('.mx-name-layoutGrid4 > :nth-child(1) > :nth-child(1)').type(FirstName);
}

    FillLastName(LastName) {
        cy.get('.mx-name-layoutGrid4 > :nth-child(1) > :nth-child(2)').type(LastName);
}

    FillEmail(Email) {
        cy.get('.mx-name-layoutGrid7 > .row > .col-lg').type(Email);
}

    ChooseGender(Gender) {
        cy.get('.mx-name-layoutGrid4 > :nth-child(2) > :nth-child(1)').find('select').select(Gender);
        
}

    ChooseJobTitle(JobTitle) {
        cy.get('.mx-name-layoutGrid4 > :nth-child(2) > :nth-child(2)').type(JobTitle);
}

    FillOfficeNumber(OfficeNumber) {
        cy.get('.mx-name-layoutGrid4 > :nth-child(3) > :nth-child(1)').type(OfficeNumber);
}

    FillMobileNumber(MobileNumber) {
        cy.get('.mx-name-layoutGrid4 > :nth-child(3) > :nth-child(2)').type(MobileNumber);
}

    ChooseInvoiceContact(InvoiceContact) {
        cy.get('.mx-name-layoutGrid4 > :nth-child(4) > :nth-child(1)').click()
        cy.get('.mx-name-layoutGrid4 > :nth-child(4) > :nth-child(1)').type(InvoiceContact).type('{downarrow}{enter}');
}

    ChooseDefaultOrderedBy(DefaultOrderedBy) {
        cy.get('.mx-name-layoutGrid4 > :nth-child(4) > :nth-child(2)').click()
        cy.get('.mx-name-layoutGrid4 > :nth-child(4) > :nth-child(2)').type(DefaultOrderedBy).type('{downarrow}{enter}');
}

    FillAdress(Adress) {
        cy.get('.mx-name-layoutGrid8 > :nth-child(1) > :nth-child(1)').type(Adress);
}

    FillPostalCode(PostalCode) {
        cy.get('.mx-name-layoutGrid8 > :nth-child(1) > :nth-child(2)').type(PostalCode);
}

    FillDepartment(Department) {
        cy.get('.mx-name-layoutGrid8 > :nth-child(1) > :nth-child(3)').type(Department);
}

    ChooseCountry(Country) {
        cy.get('.mx-name-layoutGrid8 > :nth-child(2) > :nth-child(2)').click()
        cy.get('.mx-name-layoutGrid8 > :nth-child(2) > :nth-child(2)').type(Country).type('{enter}');
}
    //Is niet klikbaar tenzij US als country wordt gekozen
    //Is only usable if country=US
    ChooseState(State) {
        cy.get('.mx-name-comboBox9 > .widget-combobox').click()
        cy.get('.mx-name-comboBox9 > .widget-combobox').type(State).type('{enter}');
}

    FillCity(City) {
        cy.get('.mx-name-layoutGrid8 > :nth-child(2) > :nth-child(3)').type(City);
}
    //cancel button when you are adding a contact
    ClickCancel() {
        cy.get('.mx-name-actionButton3').click();
}

    ClickSave() {
        cy.get('.sticky-footer > .mx-name-actionButton1').click();
}

    ClickEditContact() {
        cy.get('.sticky-footer > .mx-name-actionButton1').click();
}

    ClickDeleteContact() {
        cy.get('.mx-name-actionButton10').click()
}

    ClickCancelConfirmDelete() {
        cy.get('.modal-footer > :nth-child(2)').click();
}


    ClickProceedDelete() {
        cy.get('.modal-footer > .btn-primary').click();
}

    //cancel button when you are in the overview of contacts
    ClickCancel() {
        cy.get('.mx-name-actionButton2').click();
}

    ClickBack() {
        cy.get('.mx-name-actionButton3').click();
}

    ClickNextStep() {
        cy.get('.mx-name-container2 > .mx-name-actionButton1').click();
    }

}

export default relationcontacts