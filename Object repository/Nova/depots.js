class Depots {
    FilterDepotCode(DepotCode) {
        cy.get('.mx-name-layoutGrid6 > :nth-child(1) > :nth-child(1)').type(DepotCode);
}

    FilterDepotName(DepotName) {
        cy.get('.mx-name-layoutGrid6 > :nth-child(1) > :nth-child(2)').type(DepotName);
}

    FilterDepotGroup(DepotGroup) {
        cy.get('.mx-name-layoutGrid6 > :nth-child(1) > :nth-child(3)').type(DepotGroup);
}

    FilterDepartment(Department) {
        cy.get('.mx-name-layoutGrid6 > :nth-child(1) > :nth-child(4)').type(Department);
}

    FilterActivityStatus(ActivityStatus) {
        cy.get('.mx-name-layoutGrid6 > :nth-child(1) > :nth-child(5)').type(ActivityStatus);
}

    FilterRelationName(RelationName) {
        cy.get('.mx-name-layoutGrid6 > :nth-child(2) > :nth-child(1)').type(RelationName);
}

    FilterState(State) {
        cy.get('.mx-name-layoutGrid6 > :nth-child(2) > :nth-child(2)').type(State);
}

    FilterCountry(Country) {
        cy.get('.mx-name-layoutGrid6 > :nth-child(2) > :nth-child(3)').type(Country);
}

    FilterCity(City) {
        cy.get('.mx-name-layoutGrid6 > :nth-child(2) > :nth-child(4)').type(City);
}

    ClickAddDepot() {
        cy.get(':nth-child(2) > .btn').click();
}

ClickResetFilters() {
        cy.get('.mx-name-actionButton3').click();
}

    ClickSearch() {
        cy.get('.mx-name-actionButton6').click();
}}
export default Depots;