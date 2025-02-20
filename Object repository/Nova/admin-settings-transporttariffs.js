class SettingsTransportTariffs {
    ClickUpdateTransportTariffs() {
        cy.get('.col-md > .btn').click();
}

    ClickCancelUpdateTransportTariffs() {
        cy.get('.modal-footer > :nth-child(2)').click();
}

    ClickProceedUpdateTransportTariffs() {
        cy.get('.modal-footer > .btn-primary').click();
}

    ClickOkProceedUpdateTransportTariffs() {
        cy.get('.modal-footer > .btn').click();
}
}

export default SettingsTransportTariffs;