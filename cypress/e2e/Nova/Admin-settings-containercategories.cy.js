import Home from "../../../Object repository/Nova/homepage";
import loggedInHomepage from "../../../Object repository/Nova/loggedInHomepage";
import AdminSettings from "../../../Object repository/Nova/admin-settings";
import SettingsContainerCategories from "../../../Object repository/Nova/admin-settings-containercategories";

const home = new Home();
const navigate = new loggedInHomepage();
const admin = new AdminSettings();
const categories = new SettingsContainerCategories();

it("Searching a container by category and checking information about the container category", () => {
    const LoginName = 'Testley'
    const LoginPassword = 'Caru01012025!'
    const FillCode = 'A'
    const FillDescription = 'cargo worthy';

    home.visit();
        home.fillLoginName(LoginName);
        home.fillLoginPassword(LoginPassword);
        home.SubmitLogin();
        cy.get('.col-lg > .mx-name-text1').should('have.text', 'Home')
        navigate.ClickNavigationSettings();
        admin.ContainerCategories();
        categories.ClickUpdateCategories();
        categories.ClickProceedUpdateCategories();
        cy.wait(500);
        categories.ClickOkProceedUpdateCategories();
        categories.FilterFillCode(FillCode);
        categories.FilterFillDescription(FillDescription);
        categories.ClickContainerInformation();
})