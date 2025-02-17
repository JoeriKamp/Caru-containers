import Home from "../../../Object repository/Nova/homepage";
import loggedInHomepage from "../../../Object repository/Nova/loggedInHomepage";
import AdminSettings from "../../../Object repository/Nova/admin-settings";
import settingsdepartments from "../../../Object repository/Nova/admin-settings-departments";

const home = new Home();
const navigate = new loggedInHomepage();
const admin = new AdminSettings();
const department = new settingsdepartments();

it("Should go to admin-department settings", () => {
    const LoginName = 'Testley'
    const LoginPassword = 'Caru01012025!'
    const Code = 'INT'
    const Description = 'international';

        home.visit();
        home.fillLoginName(LoginName);
        home.fillLoginPassword(LoginPassword);
        home.SubmitLogin();
        cy.get('.col-lg > .mx-name-text1').should('have.text', 'Home')
        navigate.ClickNavigationSettings();
        admin.AdminDepartments();
        department.UpdateDepartments();
        department.UpdateDepartmentsProceed();
        cy.wait(500);
        department.UpdateDepartmentsConfirmProceed();
        department.FillCode(Code);
        department.FillDescription(Description);
})
