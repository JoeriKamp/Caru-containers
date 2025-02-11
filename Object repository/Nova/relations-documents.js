class relationdocument {
    ClickAddDocument() {
        cy.get('.col-lg-auto > .btn').click();
}

    DropFile () {
        cy.get('.filedropper__dropzone').selectfile('C:\Users\JoeriKampijon\Documents\TestBestand');
}

    ChooseLabel() {
        cy.get('#downshift-241-toggle-button').click()
        cy.get('#downshift-241-toggle-button').type(Label).type('{enter}');
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