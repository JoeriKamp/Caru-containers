class relationdocument {
    ClickAddDocument() {
        cy.get('.col-lg-auto > .btn').click();
}

    DropFile () {
        cy.get('input.filedropper__input').attachFile('TestExcel.xlsx'); // Change this to your actual file name
}

    ChooseLabel(Label) {
        cy.get('.mx-dataview-content > .mx-layoutgrid > :nth-child(2) > .col-lg').click()
        cy.get('.mx-dataview-content > .mx-layoutgrid > :nth-child(2) > .col-lg').type(Label).type('{enter}');
}

    //Button to clear the error message to upload a file
    ClickOkErrorMessage() {
    cy.get('.modal-footer > .btn').click();
}

    //Cancel button when you are in the pop up screen (add document)
    ClickCancel() {
        cy.get('.mx-dataview-controls > .mx-name-actionButton1').click();
}

    ClickSave() {
        cy.get('.mx-name-actionButton2').click();
}

    ClickDeleteDocument() {
        cy.get('.glyphicon').click();
}

    //Cancel button when you want to delete a document in the pop up screen
    ClickCancelDocumentPopUp() {
        cy.get('.modal-footer > :nth-child(2)').click();
}

    ClickDeleteDocumentPopUp() {
        cy.get('.modal-footer > .btn-primary').click();
}

    //cancel button when you are in the overview of documents
    ClickCancel() {
        cy.get('.mx-name-actionButton5').click();
}

    ClickBack() {
        cy.get('.mx-name-actionButton4').click();
}

    ClickFinish() {
        cy.get('.mx-name-container2 > .mx-name-actionButton1').click();
}
}

export default relationdocument;