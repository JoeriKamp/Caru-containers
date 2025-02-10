class relationtypes {
    //Houd rekening met dat er meerdere dezelfde commands zijn omdat een type bepaalde invulling nodig heeft, maar wel andere element locators heeft.
    //Keep in mind that there are multiple same commands with other element locators, which fit the relation type.

    ChooseRelationTypes(Relationtypes) {
        cy.get('.mx-name-container2 > .mx-name-actionButton1').click()
        cy.get('.mx-name-container2 > .mx-name-actionButton1').type(Relationtypes).type('{enter}');
}
    //Rental customer
    ChooseCurrency() {
        cy.get('#downshift-190-toggle-button').click()
        cy.get('#downshift-190-toggle-button').type(Currency).type('{enter}');
}

    ChooseAccountManager() {
        cy.get('#downshift-191-toggle-button').click()
        cy.get('#downshift-191-toggle-button').type(AccountManager).type('{enter}');
}

    ChooseVatPercentage() {
        cy.get('#downshift-192-toggle-button').click()
        cy.get('#downshift-192-toggle-button').type(Vatpercentage).type('{enter}');
}

    ChooseRentalType() {
        cy.get('.mx-name-dataView11 > :nth-child(1) > .mx-name-dataView2 > :nth-child(1) > .mx-name-dataView1 > :nth-child(1) > .mx-name-container29 > .mx-name-layoutGrid1 > :nth-child(1) > .col-lg-8 > .mx-dataview > .mx-dataview-content > .mx-name-layoutGrid4 > :nth-child(3) > :nth-child(1)').click()
        cy.get('.mx-name-dataView11 > :nth-child(1) > .mx-name-dataView2 > :nth-child(1) > .mx-name-dataView1 > :nth-child(1) > .mx-name-container29 > .mx-name-layoutGrid1 > :nth-child(1) > .col-lg-8 > .mx-dataview > .mx-dataview-content > .mx-name-layoutGrid4 > :nth-child(3) > :nth-child(1)').type(RentalType).type('{enter}');
}

    ChooseBillingType() {
        cy.get('.mx-name-dataView11 > :nth-child(1) > .mx-name-dataView2 > :nth-child(1) > .mx-name-dataView1 > :nth-child(1) > .mx-name-container29 > .mx-name-layoutGrid1 > :nth-child(1) > .col-lg-8 > .mx-dataview > .mx-dataview-content > .mx-name-layoutGrid4 > :nth-child(3) > :nth-child(2)').click()
        cy.get('.mx-name-dataView11 > :nth-child(1) > .mx-name-dataView2 > :nth-child(1) > .mx-name-dataView1 > :nth-child(1) > .mx-name-container29 > .mx-name-layoutGrid1 > :nth-child(1) > .col-lg-8 > .mx-dataview > .mx-dataview-content > .mx-name-layoutGrid4 > :nth-child(3) > :nth-child(2)').type(BillingType).type('{enter}');
}

    ChoosePaymentTerms() {
        cy.get('#downshift-193-toggle-button').click()
        cy.get('#downshift-193-toggle-button').type(PaymentTerms).type('{enter}');
}

    ChooseInvoiceType() {
        cy.get('.mx-name-dataView11 > :nth-child(1) > .mx-name-dataView2 > :nth-child(1) > .mx-name-dataView1 > :nth-child(1) > .mx-name-container29 > .mx-name-layoutGrid1 > :nth-child(1) > .col-lg-8 > .mx-dataview > .mx-dataview-content > .mx-name-layoutGrid4 > :nth-child(4) > :nth-child(2) > .mx-name-dropDown1').click()
        cy.get('.mx-name-dataView11 > :nth-child(1) > .mx-name-dataView2 > :nth-child(1) > .mx-name-dataView1 > :nth-child(1) > .mx-name-container29 > .mx-name-layoutGrid1 > :nth-child(1) > .col-lg-8 > .mx-dataview > .mx-dataview-content > .mx-name-layoutGrid4 > :nth-child(4) > :nth-child(2) > .mx-name-dropDown1').type(InvoiceType).type('{enter}');
}

    ClickVatNumber() {
        cy.get('.mx-name-dataView11 > :nth-child(1) > .mx-name-dataView2 > :nth-child(1) > .mx-name-dataView1 > :nth-child(1) > .mx-name-container29 > .mx-name-layoutGrid1 > :nth-child(1) > .col-lg-4 > .mx-name-container1 > .mx-name-layoutGrid19 > .row > .col-lg-auto > .btn').click();
}
    //Sales Customer
    ChooseCurrency() {
        cy.get('#downshift-224-toggle-button').click()
        cy.get('#downshift-224-toggle-button').type(Currency).type.type('{enter}');
}

    ChooseAccountManager() {
        cy.get('#downshift-225-toggle-button').click()
        cy.get('#downshift-225-toggle-button').type(AccountManager).type('{enter}');
}

    ChooseVatPercentage() {
        cy.get('#downshift-226-toggle-button').click()
        cy.get('#downshift-226-toggle-button').type(Vatpercentage).type('{enter}');
}

    ChooseFrequencyCode() {
        cy.get('.mx-name-dataView12 > :nth-child(1) > .mx-name-dataView2 > :nth-child(1) > .mx-name-dataView1 > :nth-child(1) > .mx-name-container29 > .mx-name-layoutGrid1 > :nth-child(1) > .col-lg-8 > .mx-dataview > .mx-dataview-content > .mx-name-layoutGrid4 > :nth-child(2) > :nth-child(2)').click()
        cy.get('.mx-name-dataView12 > :nth-child(1) > .mx-name-dataView2 > :nth-child(1) > .mx-name-dataView1 > :nth-child(1) > .mx-name-container29 > .mx-name-layoutGrid1 > :nth-child(1) > .col-lg-8 > .mx-dataview > .mx-dataview-content > .mx-name-layoutGrid4 > :nth-child(2) > :nth-child(2)').type(FrequencyCode).type('{enter}');
}

    ClickBlockingInvoice() {
        cy.get(':nth-child(3) > :nth-child(1) > .mx-name-switch1 > .widget-switch').click();
}

    ChooseBillingType() {
        cy.get('.mx-name-dataView12 > :nth-child(1) > .mx-name-dataView2 > :nth-child(1) > .mx-name-dataView1 > :nth-child(1) > .mx-name-container29 > .mx-name-layoutGrid1 > :nth-child(1) > .col-lg-8 > .mx-dataview > .mx-dataview-content > .mx-name-layoutGrid4 > :nth-child(3) > :nth-child(2)').click()
        cy.get('.mx-name-dataView12 > :nth-child(1) > .mx-name-dataView2 > :nth-child(1) > .mx-name-dataView1 > :nth-child(1) > .mx-name-container29 > .mx-name-layoutGrid1 > :nth-child(1) > .col-lg-8 > .mx-dataview > .mx-dataview-content > .mx-name-layoutGrid4 > :nth-child(3) > :nth-child(2)').type(BillingType).type('{enter}');
}

    ChoosePaymentTerms() {
        cy.get('#downshift-227-toggle-button').click()
        cy.get('#downshift-227-toggle-button').type(PaymentTerms).type('{enter}');
}

    ChooseInvoiceType() {
        cy.get('.mx-name-dataView12 > :nth-child(1) > .mx-name-dataView2 > :nth-child(1) > .mx-name-dataView1 > :nth-child(1) > .mx-name-container29 > .mx-name-layoutGrid1 > :nth-child(1) > .col-lg-8 > .mx-dataview > .mx-dataview-content > .mx-name-layoutGrid4 > :nth-child(4) > :nth-child(2)').click()
        cy.get('.mx-name-dataView12 > :nth-child(1) > .mx-name-dataView2 > :nth-child(1) > .mx-name-dataView1 > :nth-child(1) > .mx-name-container29 > .mx-name-layoutGrid1 > :nth-child(1) > .col-lg-8 > .mx-dataview > .mx-dataview-content > .mx-name-layoutGrid4 > :nth-child(4) > :nth-child(2)').type(InvoiceType).type('{enter}');
}

    ClickVatNumber() {
        cy.get('.mx-name-dataView12 > :nth-child(1) > .mx-name-dataView2 > :nth-child(1) > .mx-name-dataView1 > :nth-child(1) > .mx-name-container29 > .mx-name-layoutGrid1 > :nth-child(1) > .col-lg-4 > .mx-name-container1 > .mx-name-layoutGrid19 > .row > .col-lg-auto > .btn').click();
}

    //Supplier
    ChooseCurrency() {
        cy.get('#downshift-232-toggle-button').click()
        cy.get('#downshift-232-toggle-button').type(Currency).type.type('{enter}');
}

    ChooseAccountManager() {
        cy.get('#downshift-233-toggle-button').click()
        cy.get('#downshift-233-toggle-button').type(AccountManager).type('{enter}');
}

    //Transport Company
    ChooseCurrency() {
        cy.get('#downshift-286-toggle-button').click()
        cy.get('#downshift-286-toggle-button').type(Currency).type.type('{enter}');
}

    ClickCancel() {
        cy.get('#downshift-286-toggle-button').click();
}

    ClickBack() {
        cy.get('.mx-name-actionButton2').click();
}

    ClickNextStep() {
        cy.get('.mx-name-container2 > .mx-name-actionButton1')
}

}
export default relationtypes;