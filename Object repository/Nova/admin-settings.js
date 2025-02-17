class adminsettings {
    //departments
    AdminDepartments() {
        cy.get('.mx-name-layoutGrid7 > :nth-child(1) > :nth-child(1)').click();
}

    //finance
    DepreciationRules() {
        cy.get('.mx-name-layoutGrid2 > :nth-child(1) > :nth-child(1)').click();
}

    ExchangeRates() {
        cy.get('.mx-name-layoutGrid2 > :nth-child(1) > :nth-child(2)').click();
}

    GreatLedgerCodeMappingRules () {
        cy.get('.mx-name-layoutGrid2 > :nth-child(1) > :nth-child(3)').click();
}

    //container
    ContainerBoxTypes() {
        cy.get('.mx-name-layoutGrid3 > :nth-child(1) > :nth-child(1)').click();
}

    ContainerCategories() {
        cy.get('.mx-name-layoutGrid3 > :nth-child(1) > :nth-child(2)').click();
}

    ContainerColors() {
        cy.get('.mx-name-layoutGrid3 > :nth-child(1) > :nth-child(3)').click();
}

    ContainerFloorTypes() {
    cy.get('.mx-name-layoutGrid3 > :nth-child(1) > :nth-child(4)').click();
}

    ContainerStatusses() {
        cy.get('.mx-name-layoutGrid3 > :nth-child(2) > :nth-child(1)').click();
}

    ContainerTypes() {
        cy.get('.mx-name-layoutGrid3 > :nth-child(2) > :nth-child(2)').click();
}

    //general
    ArticleGroups() {
        cy.get('.mx-name-layoutGrid8 > :nth-child(1) > :nth-child(1)').click();
}

    Articles() {
        cy.get('.mx-name-layoutGrid8 > :nth-child(1) > :nth-child(2)').click();
}

    BlockedReason() {
        cy.get('.mx-name-layoutGrid8 > :nth-child(1) > :nth-child(3)').click();
}

    Branches() {
        cy.get('.mx-name-layoutGrid8 > :nth-child(1) > :nth-child(4)').click();
}

    Currencies() {
        cy.get('.mx-name-layoutGrid8 > :nth-child(2) > :nth-child(1)').click();
}

    DocumentLabels() {
        cy.get('.mx-name-layoutGrid8 > :nth-child(2) > :nth-child(2)').click();
}

    IntercompanyRules() {
        cy.get('.mx-name-layoutGrid8 > :nth-child(2) > :nth-child(3)').click();
}

    InvoiceTypes() {
        cy.get('.mx-name-layoutGrid8 > :nth-child(2) > :nth-child(4)').click();
}

    PaymentTerms() {
    cy.get('.mx-name-layoutGrid8 > :nth-child(3) > :nth-child(1)').click();
}

    Prefixes() {
        cy.get('.mx-name-layoutGrid8 > :nth-child(3) > :nth-child(2)').click();
}

    PrefixTypes() {
        cy.get('.mx-name-layoutGrid8 > :nth-child(3) > :nth-child(3)').click();
}

    ProductGroups() {
        cy.get('.mx-name-layoutGrid8 > :nth-child(3) > :nth-child(4)').click();
}

    TransportTariffs() {
        cy.get('.mx-name-layoutGrid8 > :nth-child(4) > :nth-child(1)').click();
}

    VatPercentages() {
        cy.get('.mx-name-layoutGrid8 > :nth-child(4) > :nth-child(2)').click();
}

    //locations
    Depots() {
        cy.get('.mx-name-layoutGrid4 > :nth-child(1) > :nth-child(1)').click();
}

    Regions() {
        cy.get('.mx-name-layoutGrid4 > :nth-child(1) > :nth-child(2)').click();
}

    Locations() {
        cy.get('.mx-name-layoutGrid4 > :nth-child(1) > :nth-child(3)').click();
}

    //document templates
    Templates() {
        cy.get('.mx-name-layoutGrid6 > :nth-child(1) > :nth-child(1)').click();
}

    //exact
    Administrations() {
        cy.get('.mx-name-layoutGrid5 > :nth-child(1) > :nth-child(1)').click();
    }

    //configuration
    InvoiceType() {
        cy.get('.mx-name-layoutGrid9 > :nth-child(1) > :nth-child(1)').click();
}
}

export default adminsettings;