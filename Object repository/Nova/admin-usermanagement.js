class UserManagement {
    FilterFillFullName(FillFullName) {
        cy.get('#DataGrid2-column0 > .filter > .filter-container > .form-control').type(FillFullName);
}

    FilterFillEmail(FillEmail) {
        cy.get('#DataGrid2-column1 > .filter > .filter-container > .form-control').type(FillEmail);
}

    ClickAddUser() {
        cy.get('.col-md > .btn').click();
}

    FillFullNameAddUser(FullNameAddUser) {
        cy.get('.mx-name-layoutGrid2 > :nth-child(1) > :nth-child(1)').type(FullNameAddUser);
}

    FillUsernameAddUser(UsernameAddUser) {
        cy.get('.mx-name-layoutGrid2 > :nth-child(1) > :nth-child(2)').type(UsernameAddUser);
}

    FillEmailAddUser(EmailAddUser) {
        cy.get('.mx-name-layoutGrid2 > :nth-child(2) > :nth-child(1)').type(EmailAddUser);
}

    ClickUserRoleAddUser() {
        cy.get('.mx-name-layoutGrid2 > :nth-child(2) > :nth-child(2)').click();
}

    ClickSelectUserRoleAddUSer() {
        cy.get('#mxui_widget_ControlBarButton_11').click();
}

    ChooseBoardMemberUserRoleAddUser() {
        cy.get('.mx-name-index-0 > .mx-name-column1').click();
}

    ChooseEmployeeUserRoleAddUser() {
        cy.get('.mx-name-index-1 > .mx-name-column1').click();
}
    
    ChooseFinanceSpecialistUserRoleAddUser() {
        cy.get('.mx-name-index-2 > .mx-name-column1').click();
}

    ChooseFunctionalAdminUserRoleAddUser() {
        cy.get('.mx-name-index-3 > .mx-name-column1').click();
}

    ChooseLeaseManagerUserRoleAddUser() {
        cy.get('.mx-name-index-4 > .mx-name-column1').click();
}

    ChooseMaintenanceRepairManagerUserRoleAddUser() {
        cy.get('.mx-name-index-5 > .mx-name-column1').click();
}

    ChooseNewProductionManagerUserRoleAddUser() {
        cy.get('.mx-name-index-6 > .mx-name-column1').click();
}

    ChooseOperationsManagerUserRoleAddUser() {
        cy.get('.mx-name-index-7 > .mx-name-column1').click();
}

    ChooseSalesRentalManagerUserRoleAddUser() {
        cy.get('.mx-name-index-8 > .mx-name-column1').click();
}

    FillPhoneNumberAddUser(PhoneNumberAddUser) {
        cy.get('.mx-name-layoutGrid4 > :nth-child(1) > :nth-child(1)').type(PhoneNumberAddUser);
}

    ClickEmptySpace() {
        cy.get('.mx-name-layoutGrid4 > :nth-child(1) > :nth-child(2)').click();
}

    ChooseDepartmentAddUser(DepartmentAddUser) {
        cy.get('.mx-name-layoutGrid4 > :nth-child(2) > :nth-child(1)').type(DepartmentAddUser).type('{downarrow}{enter}');
}

    FillActiveFromAddUser(ActiveFromAddUser) {
        cy.get('.mx-name-layoutGrid4 > :nth-child(3) > :nth-child(1)').type(ActiveFromAddUser);
}

    FillActiveUntillAddUser(ActiveUntillAddUser) {
        cy.get('.mx-name-layoutGrid4 > :nth-child(3) > :nth-child(2)').type(ActiveUntillAddUser);
}

    ClickCancelAddUser() {
        cy.get('.col-lg > .btn').click();
}

    ClickSaveAddUser() {
        cy.get('.col-lg-auto > .btn').click();
}

    ClickEditUser() {
        cy.get('.col-lg-auto > .btn').click();
}

    ClickDeleteUser() {
        cy.get(':nth-child(2) > .align-column-center > .td-custom-content > .mx-name-actionButton1').click();
}

    ClickCancelDeleteUser() {
        cy.get('.modal-footer > :nth-child(2)').click();
}

    ClickProceedDeleteUser() {
        cy.get('.modal-footer > .btn-primary').click();
}
}

export default UserManagement;