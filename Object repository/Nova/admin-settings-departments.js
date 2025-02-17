class settingsdepartments {
    UpdateDepartments() {
        cy.get(':nth-child(2) > .btn').click();
}

    UpdateDepartmentsCancel() {
        cy.get('.modal-footer > :nth-child(2)').click();
}

    UpdateDepartmentsProceed() {
        cy.get('.modal-footer > .btn-primary').click();
}

    UpdateDepartmentsConfirmProceed() {
        cy.get('.modal-footer > .btn').click();
}

    FillCode(Code) {
        cy.get('div.filter-container input.filter-input').eq(0).type(Code);
}

    FillDescription(Description) {
        cy.get('div.filter-container input.filter-input').eq(1).type(Description);
}

    //selecting choosecountry and isarchived is not programmed yet
}

export default settingsdepartments;