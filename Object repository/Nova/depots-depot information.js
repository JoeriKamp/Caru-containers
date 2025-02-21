class DepotsInformation {
    ChooseActivityStatus() {
        cy.get('.row > :nth-child(1) > .mx-name-switch1 > .widget-switch').click();
}

    ChooseIsRepairDepot() {
        cy.get('.mx-name-switch2 > .widget-switch').click();
}

    FillDepotName(DepotName) {
        cy.get('.mx-name-layoutGrid1 > :nth-child(3) > :nth-child(1)').type(DepotName);
}

    FillDepotCode(DepotCode) {
        cy.get('.mx-name-layoutGrid1 > :nth-child(4) > :nth-child(1)').type(DepotCode);
}

    FillPrimaryDepartment(PrimaryDepartment) {
        cy.get('.mx-name-layoutGrid1 > :nth-child(5) > :nth-child(1)').type(PrimaryDepartment);
}

    FillTelephoneNumber(TelephoneNumber) {
        cy.get('.mx-name-layoutGrid1 > :nth-child(6) > :nth-child(1)').type(TelephoneNumber);
}

    FillGeoGroup(GeoGroup) {
        cy.get('.mx-name-layoutGrid1 > :nth-child(2) > :nth-child(2)').type(GeoGroup);
}

    FillDepotGroup(DepotGroup) {
        cy.get('.mx-name-layoutGrid1 > :nth-child(3) > :nth-child(2)').type(DepotGroup);
}

    FillCurrencies(Currencies) {
        cy.get('.mx-name-layoutGrid1 > :nth-child(4) > :nth-child(2)').type(Currencies);
}

    FillSecondaryDepartment(SecondaryDepartment) {
        cy.get('.mx-name-layoutGrid1 > :nth-child(5) > :nth-child(2)').type(SecondaryDepartment);
}

    FillUrlOpeningHours(UrlOpeningHours) {
        cy.get('.mx-name-layoutGrid1 > :nth-child(6) > :nth-child(2)').type(UrlOpeningHours);
}

    FillLanguage(Language) {
        cy.get(':nth-child(7) > :nth-child(2)').type(Language);
}

    FillLabourRate(LabourRate) {
        cy.get(':nth-child(8) > :nth-child(2)').type(LabourRate);
}

    Fillemail(Email) {
        cy.get('.mx-name-layoutGrid6 > .row > .col-lg').type(Email);
}

    FillSFTP(SFTP) {
        cy.get('.mx-name-layoutGrid7 > :nth-child(2) > :nth-child(2)').type(SFTP);
}

    FillBicCode(BicCode) {
        cy.get('.mx-name-layoutGrid7 > :nth-child(3) > :nth-child(2)').type(BicCode);
}

    FillEmailEdi(EmailEdi) {
        cy.get('.mx-name-layoutGrid9 > .row > .col-lg').type(EmailEdi);
}

    ChooseDefaultStatus(DefaultStatus) {
        cy.get('.mx-name-layoutGrid8 > :nth-child(2) > :nth-child(1)').type(DefaultStatus).type('{enter}');
}

    ChooseDefaultCategory(DefaultCategory) {
        cy.get('.mx-name-layoutGrid8 > :nth-child(2) > :nth-child(2)').type(DefaultCategory).type('{enter}');
}

    ClickCancelDepotInformation() {
        cy.get('.mx-name-actionButton3').click();
}

    ClickNextStepDepotInformation() {
        cy.get('.sticky-footer > .mx-name-actionButton1').click();
}}
export default DepotsInformation;