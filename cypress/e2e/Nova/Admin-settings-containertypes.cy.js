import Home from "../../../Object repository/Nova/homepage";
import loggedInHomepage from "../../../Object repository/Nova/loggedInHomepage";
import AdminSettings from "../../../Object repository/Nova/admin-settings";
import Settingscontainertypes from "../../../Object repository/Nova/admin-settings-containertypes";

const home = new Home();
const navigate = new loggedInHomepage();
const admin = new AdminSettings();
const types = new Settingscontainertypes();

it("Searching a container by type and checking information about the container type", () => {
    const LoginName = 'Testley'
    const LoginPassword = 'Caru01012025!'
    const FillCode = '22g1';

    home.visit();
        home.fillLoginName(LoginName);
        home.fillLoginPassword(LoginPassword);
        home.SubmitLogin();
        cy.get('.col-lg > .mx-name-text1').should('have.text', 'Home')
        navigate.ClickNavigationSettings();
        admin.ContainerTypes();
        types.ClickUpdateContainerTypes();
        types.ClickProceedUpdateContainerTypes();
        cy.wait(2000);
        types.ClickOkProceedUpdateContainerTypes();
        types.FilterFillCode(FillCode);
        cy.wait(1000);
        types.ClickContainerInformation();
})