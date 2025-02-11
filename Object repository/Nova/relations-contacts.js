class relationcontacts {
    ClickAddContact() {
        cy.get(':nth-child(2) > .btn').click();
}

    FillFirstName() {
        cy.get('.mx-name-container2 > .mx-name-actionButton1').type(Firstname);
}

    FillLastName() {
        cy.get('.mx-name-layoutGrid4 > :nth-child(1) > :nth-child(2)').type(LastName);
}

    FillEmail() {
        cy.get('.mx-name-layoutGrid7 > .row > .col-lg').type(Email);
}

    ChooseGender() {
        cy.get('.mx-name-layoutGrid4 > :nth-child(2) > :nth-child(1)').click()
        cy.get('.mx-name-layoutGrid4 > :nth-child(2) > :nth-child(1)').type('{downarrow}{enter}');
}

    ChooseJobTitle() {
        cy.get('.mx-name-layoutGrid4 > :nth-child(2) > :nth-child(2)').type(JobTitle);
}

    FillOfficeNumber() {
        cy.get('.mx-name-layoutGrid4 > :nth-child(3) > :nth-child(1)').type(OfficeNumber);
}

    FillMobileNumber() {
        cy.get('.mx-name-layoutGrid4 > :nth-child(3) > :nth-child(2)').type(MobileNumber);
}

    ChooseInvoiceContact() {
        cy.get('#downshift-468-toggle-button').click()
        cy.get('#downshift-468-toggle-button').type(InvoiceContact).type('{downarrow}{enter}');
}

    ChooseDefaultOrderedBy() {
        cy.get('#downshift-469-toggle-button').click()
        cy.get('#downshift-469-toggle-button').type(DefaultOrderedBy).type('{downarrow}{enter}');
}

    FillAdress() {
        cy.get('.mx-name-layoutGrid8 > :nth-child(1) > :nth-child(1)').type(Adress);
}

    FillPostalCode() {
        cy.get('.mx-name-layoutGrid8 > :nth-child(1) > :nth-child(2)').type(PostalCode);
}

    FillDepartment() {
        cy.get('.mx-name-layoutGrid8 > :nth-child(1) > :nth-child(3)').type(Department);
}

    ChooseCountry() {
        cy.get('#downshift-470-toggle-button').click()
        cy.get('#downshift-470-toggle-button').type(Country).type('{enter}');
}
    //Is niet klikbaar tenzij US als country wordt gekozen
    //Is only usable if country=US
    ChooseState() {
        cy.get('.mx-name-comboBox9 > .widget-combobox').click()
        cy.get('.mx-name-comboBox9 > .widget-combobox').type(State).type('{enter}');
}

    FillCity() {
        cy.get('.mx-name-layoutGrid8 > :nth-child(2) > :nth-child(3)').type(city);
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