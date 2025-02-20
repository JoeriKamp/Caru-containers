class settingsCurrencies {
    FilterFillCode(FillCode) {
        cy.get('#DataGrid17-column0 > .filter > .filter-container > .form-control').type(FillCode);
}

    FilterFillCurrency(FillCurrency) {
        cy.get('#DataGrid17-column1 > .filter > .filter-container > .form-control').type(FillCurrency);
}

    FilterFillSymbol(FillSymbol) {
        cy.get('#DataGrid17-column2 > .filter > .filter-container > .form-control').type(FillSymbol);
}

    ClickUpdateCurrencies() {
        cy.get('.col-md > .btn').click();
}

    ClickCancelUpdateCurrencies() {
        cy.get('.modal-footer > :nth-child(2)').click();
}

    ClickProceedUpdateCurrencies() {
        cy.get('.modal-footer > .btn-primary').click();
}

    ClickOkProceedUpdateCurrencies() {
        cy.get('.modal-footer > .btn').click();
}

    ClickCurrencyDetails() {
        cy.get('[data-position="4,0"] > .td-custom-content > .btn').click();
}
}

export default settingsCurrencies;