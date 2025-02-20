class SettingsArticles {
    FilterFillCode(FillCode) {
        cy.get('#DataGrid2-column0 > .filter > .filter-container > .form-control').type(FillCode);
}

    FilterFillName(FillName) {
        cy.get('#DataGrid2-column3 > .filter > .filter-container > .form-control').type(FillName);
}

    FilterFillDescription(FillDescription) {
        cy.get('#DataGrid2-column4 > .filter > .filter-container > .form-control').type(FillDescription);
}

    ClickUpdateArticles() {
        cy.get('.col-md > .btn').click();
}

    ClickCancelUpdateArticles() {
        cy.get('.modal-footer > :nth-child(2)').click();
}

    ClickProceedUpdateArticles() {
        cy.get('.modal-footer > .btn-primary').click();
}

    ClickOkProceedUpdateArticles() {
        cy.get('.modal-footer > .btn').click();
}
} 

export default SettingsArticles;