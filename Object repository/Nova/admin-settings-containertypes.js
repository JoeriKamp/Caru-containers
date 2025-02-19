class Settingscontainertypes {
    FilterFillCode(FillCode) {
        cy.get('#DataGrid2-column0 > .filter > .filter-container > .form-control').type(FillCode);
}

    FilterFillDescription (FillDescription) {
    cy.get('#DataGrid2-column1 > .filter > .filter-container > .form-control').type(FillDescription);
}

    FilterFillISO(FillISO) {
        cy.get('#DataGrid2-column2 > .filter > .filter-container > .form-control').type(FillISO);
}

    FilterFillLength(FillLength) {
        cy.get('#DataGrid2-column4 > .filter > .filter-container > .form-control').type(FillLength);
}

    FilterFillTeu(FillTeu) {
        cy.get('#DataGrid2-column5 > .filter > .filter-container > .form-control').type(FillTeu);
}

    ClickUpdateContainerTypes() {
        cy.get(':nth-child(2) > .btn').click();
}

    ClickCancelUpdateContainerTypes() {
        cy.get(':nth-child(2) > .btn').click();
}

    ClickProceedUpdateContainerTypes() {
        cy.get('.modal-footer > .btn-primary').click();
}

    ClickOkProceedUpdateContainerTypes() {
        cy.get('.modal-footer > .btn').click();
}

    ClickContainerInformation() {
        cy.get('[data-position="7,0"] > .td-custom-content > .btn').click();
}
}
export default Settingscontainertypes;