import Home from "../../../Object repository/Nova/homepage";
import loggedInHomepage from "../../../Object repository/Nova/loggedInHomepage";
import UserManagement from "../../../Object repository/Nova/admin-usermanagement";

const home = new Home();
const navigate = new loggedInHomepage();
const user = new UserManagement

it("Searching a container by type and checking information about the container type", () => {
    const LoginName = 'Testley'
    const LoginPassword = 'Caru01012025!'
    const FillFullName = 'joeri';

    home.visit();
        home.fillLoginName(LoginName);
        home.fillLoginPassword(LoginPassword);
        home.SubmitLogin();
        cy.get('.col-lg > .mx-name-text1').should('have.text', 'Home')
        navigate.ClickNavigationUserManagement();
        user.FilterFillFullName(FillFullName);
        cy.wait(1000);
        user.ClickDeleteUser();
        cy.wait(500);
        user.ClickProceedDeleteUser();
})