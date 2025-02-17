class admindepreciationrules {
    ClickAddDepreciationRule() {
    cy.get(':nth-child(2) > .btn').click();
}

    ChooseCaruCompany(CaruCompany) {
        cy.get('#downshift-0-toggle-button').type(CaruCompany).type('{enter}');
}

    FillFiscalDepreciationPercentage(FiscalDepreciationPercentage) {
        cy.get('.mx-name-textBox1.mx-textbox.form-group.no-columns').type(FiscalDepreciationPercentage)
}

    FillCommercialDepreciationPercentage(CommercialDepreciationPercentage) {
        cy.get('.mx-name-textBox2.mx-textbox.form-group.no-columns').type(CommercialDepreciationPercentage);
}

    FillFromOnhireYear(FromOnhireYear) {
        cy.get('.mx-name-textBox3.mx-textbox.form-group.no-columns').type(FromOnhireYear);
}

    FillToOnhireYear(ToOnHireYear) {
        cy.get('.mx-name-textBox4.mx-textbox.form-group.no-columns').type(ToOnHireYear);
}

    FillPurchaseDateFrom(PurchaseDateFrom) {
        cy.get('.mx-name-datePicker3.mx-datepicker.form-group.no-columns').type(PurchaseDateFrom);
}

    FillPurchaseDateTo(PurchaseDateTo) {
        cy.get('.mx-name-datePicker4.mx-datepicker.form-group.no-columns').type(PurchaseDateTo);
}

    ClickCancel() {
        cy.get('.mx-dataview-controls > .mx-name-actionButton2').click();
}

    ClickSave() {
        cy.get('.mx-dataview-controls > .mx-name-actionButton1').click();
}

    ClickEditDepreciationRule() {
        cy.get('.mx-name-actionButton5').click();
}

    ClickDeleteDepreciationRule() {
        cy.get('.td-custom-content > .mx-name-actionButton1').click();
}

    ClickCancelDeleteDepreciationRule() {
        cy.get('.modal-footer > :nth-child(2)').click();
    }
    
    ClickConfirmDeleteDepreciationRule() {
        cy.get('.modal-footer > .btn-primary').click();
    }
}

export default admindepreciationrules;