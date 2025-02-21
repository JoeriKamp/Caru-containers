class DepotsContacts {
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
        cy.get('.mx-dataview-content > .mx-name-layoutGrid7 > .row > .col-lg').type(Email);
}

    ChooseGender(Gender) {
        cy.get('.mx-name-layoutGrid4 > :nth-child(2) > :nth-child(1)').type(Gender).type('{enter}');
}

    FillJobTitle(JobTitle) {
        cy.get('.mx-name-layoutGrid4 > :nth-child(2) > :nth-child(2)').type(JobTitle);
}

    FillOfficeNumber(OfficeNumber) {
        cy.get('.mx-name-layoutGrid4 > :nth-child(3) > :nth-child(1)').type(OfficeNumber);
}

    FillMobileNumber(MobileNumber) {
        cy.get('.mx-name-layoutGrid4 > :nth-child(3) > :nth-child(2)').type(MobileNumber);
}

    ChooseInvoiceContact(InvoiceContact) {
        cy.get('.mx-name-layoutGrid4 > :nth-child(4) > :nth-child(1)').type(InvoiceContact).type('{downarrow}{enter}');
}

    ChooseDefaultOrdereBy(DefaultOrdereBy) {
        cy.get('.mx-name-layoutGrid4 > :nth-child(4) > :nth-child(2)').type(DefaultOrdereBy).type('{enter}');
}

    FillAdress(Address) {
        cy.get('.mx-name-layoutGrid8 > :nth-child(1) > :nth-child(1)').type(Address);
}

    FillPostalCode(PostalCode) {
        cy.get('.mx-name-layoutGrid8 > :nth-child(1) > :nth-child(2)').type(PostalCode);
}

    FillDepartment(Department) {
        cy.get('.mx-name-layoutGrid8 > :nth-child(1) > :nth-child(3)').type(Department);
}

    FillCity(City) {
        cy.get('.mx-name-layoutGrid8 > :nth-child(2) > :nth-child(1)').type(City);
}

    ChooseCountry(Country) {
        cy.get('.mx-name-layoutGrid8 > :nth-child(2) > :nth-child(2)').type(Country).type('{enter}');
}

    ChooseState(State) {
        cy.get('.mx-name-layoutGrid8 > :nth-child(2) > :nth-child(3)').type(State).type('{enter}');
}

    ClickCancelNewContact() {
        cy.get('.mx-name-actionButton3').click();
}

    ClickSaveNewContact() {
        cy.get('.sticky-footer > .mx-name-actionButton1').click();
}

    ClickFirstContact() {
        cy.get('[role="gridcell"][tabindex="0"]').click();
}

    ClickCancelContacts() {
        cy.get('.mx-name-actionButton4').click();
}

    ClickBackContacts() {
        cy.get('.mx-name-actionButton3').click();
}

    ClickNextStepContacts() {
        cy.get('.sticky-footer > .mx-name-actionButton1').click();
}
}
export default DepotsContacts;