class SettingsContainerCategories {
    FilterFillCode(FillCode) {
        cy.get('#DataGrid2-column0 > .filter > .filter-container > .form-control').type(FillCode).type('{enter}');
}

    FilterFillDescription(FillDescription) {
        cy.get('#DataGrid2-column1 > .filter > .filter-container > .form-control').type(FillDescription).type('{enter}');
}

    ClickUpdateCategories() {
        cy.get(':nth-child(2) > .btn').click();
}

    ClickCancelUpdateCategories() {
        cy.get(':nth-child(2) > .btn').click();
}

    ClickProceedUpdateCategories() {
        cy.get('.modal-footer > .btn-primary').click();
}

    ClickOkProceedUpdateCategories() {
        cy.get('.modal-footer > .btn').click();
}

    ClickContainerInformation() {
        cy.get('[data-position="5,0"] > .td-custom-content > .btn').click();
}
}

export default SettingsContainerCategories;