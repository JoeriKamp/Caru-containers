import Home from "../../../Object repository/Nova/homepage";
import loggedInHomepage from "../../../Object repository/Nova/loggedInHomepage";
import UserManagement from "../../../Object repository/Nova/admin-usermanagement";

const home = new Home();
const navigate = new loggedInHomepage();
const user = new UserManagement

it("Searching a container by type and checking information about the container type", () => {
    const LoginName = 'Testley'
    const LoginPassword = 'Caru01012025!'
    const FillFullName = 'joeri'
    const FullnameAddUser = 'joeri'
    const UsernameAddUser = 'joeri'
    const EmailAddUser = 'joeri@joeri.nl'
    const PhoneNumberAddUser = '0612345678'
    const DepartmentAddUser = 'NL'
    const ActiveFromAddUser = '19-02-2025';


    home.visit();
        home.fillLoginName(LoginName);
        home.fillLoginPassword(LoginPassword);
        home.SubmitLogin();
        cy.get('.col-lg > .mx-name-text1').should('have.text', 'Home')
        navigate.ClickNavigationUserManagement();
        user.FilterFillFullName(FillFullName);
        user.ClickAddUser();
        user.FillFullNameAddUser(FullnameAddUser);
        user.FillUsernameAddUser(UsernameAddUser);
        user.FillEmailAddUser(EmailAddUser);
        user.ClickUserRoleAddUser();
        user.ChooseBoardMemberUserRoleAddUser();
        user.ChooseSalesRentalManagerUserRoleAddUser();
        cy.wait(1000);
        user.ClickSelectUserRoleAddUser();
        user.FillPhoneNumberAddUser(PhoneNumberAddUser);
        user.ChooseDepartmentAddUser(DepartmentAddUser);
        user.ClickEmptySpace();
        user.FillActiveFromAddUser(ActiveFromAddUser);
        user.ClickSaveAddUser();
})