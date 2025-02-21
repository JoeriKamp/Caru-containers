class DepotsLocation {
    FillSelectRelation(SelectRelation) {
        cy.get('.mx-name-layoutGrid7 > :nth-child(2) > .col-lg').type(SelectRelation).type('{enter}');
}

    ClickSelectLocation() {
        cy.get('.mx-name-container3 > .mx-name-container1').click();
}

    ClickCancelLocation() {
        cy.get('.mx-name-actionButton3').click();
}

    ClickNextStepLocation() {
        cy.get('.mx-name-container2 > .mx-name-actionButton1').click();
}}
export default DepotsLocation;