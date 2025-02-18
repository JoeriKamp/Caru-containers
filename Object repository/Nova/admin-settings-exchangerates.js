class financeexchangerates {
    FillFilterRate(FilterRate) {
        cy.get('.filter-container > .form-control').type(FilterRate);
}

    ClickNewExchangeRate() {
        cy.get('.mx-name-actionButton4').click();
}

    ChooseSourceCurrency(SourceCurrency) {
        cy.get('#downshift-0-toggle-button').type(SourceCurrency).type('{downarrow}{enter}');
}

    ChooseTargetCurrency(TargetCurrency) {
        cy.get('#downshift-1-toggle-button').type(TargetCurrency).type('{downarrow}{enter}');
}

    fillRate(Rate) {
        cy.get('.mx-name-textBox2.mx-textbox.form-group').type(Rate).type('{enter}');    
}

    FillValidFrom(ValidFrom) {
        cy.get('.mx-name-datePicker1').type(ValidFrom).type('{enter}');
}

    FillValidTo(ValidTo) {
        cy.get('.mx-name-datePicker2').type(ValidTo).type('{enter}');
}

    ClickCancelNewExchangeRate() {
        cy.get('.mx-dataview-controls > .mx-name-actionButton2').click();
}

    ClickSaveNewExchangeRate() {
        cy.get('.mx-dataview-controls > .mx-name-actionButton1').click();
}

    ClickUpdateExchangeRates() {
        cy.get('.mx-name-actionButton2').click();
}

    ClickCancelUpdateExchangeRates() {
        cy.get('.modal-footer > :nth-child(2)').click();
}

    ClickProceedUpdateExchangeRates() {
        cy.get('.modal-footer > .btn-primary').click();
}

    ClickOkProceedUpdateExchangeRates() {
        cy.get('.modal-footer > .btn').click();
}

    ClickDeleteExchangeRate() {
        cy.get('.mx-name-actionButton6').click();
}

    ClickCancelDeleteExchangeRates() {
        cy.get('.modal-footer > :nth-child(2)').click();
}

    ClickProceedDeleteExchangeRates() {
        cy.get('.modal-footer > .btn-primary').click();    
}
}

export default financeexchangerates;