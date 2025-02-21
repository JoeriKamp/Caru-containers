const { describe } = require("mocha");

class DepotsDocuments {
    ClickAddRemark() {
        cy.get('.mx-name-layoutGrid7 > .row > :nth-child(2) > .btn').click();
}

    ClickAddDocument() {
        cy.get('.mx-name-layoutGrid9 > .row > :nth-child(2) > .btn').click();
}

    FillDescriptionNewRemark(DescriptionNewRemark) {
        cy.get('#mxui_widget_HorizontalScrollContainer_1 > div > div > div > div > div > div > div > div.mx-dataview-content > div').type(DescriptionNewRemark);
}
    
    ClickCancelNewRemark() {
        cy.get('.mx-name-actionButton2').click();
}

    ClickSaveNewRemark() {
        cy.get('.mx-dataview-controls > .mx-name-actionButton1').click();
}

    DropFile () {
        cy.get('input.filedropper__input').attachFile('TestExcel.xlsx'); 
}

    ChooseLabel(Label) {
        cy.get('.mx-dataview-content > .mx-layoutgrid > :nth-child(2) > .col-lg').click()
        cy.get('.mx-dataview-content > .mx-layoutgrid > :nth-child(2) > .col-lg').type(Label).type('{enter}');
}

    ClickCancelAddDocument() {
        cy.get('.mx-dataview-controls > .mx-name-actionButton1').click();
}

    ClickSaveAddDocument() {
        cy.get('.mx-name-actionButton2').click();
}

    ClickCancel() {
        cy.get('.mx-name-actionButton4').click();
}

    ClickBack() {
        cy.get('.mx-name-actionButton3').click();
}

    ClickFinish() {
        cy.get('.mx-name-container13 > .mx-name-actionButton1').click();
}
}

export default DepotsDocuments;