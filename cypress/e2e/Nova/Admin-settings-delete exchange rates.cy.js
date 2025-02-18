import Home from "../../../Object repository/Nova/homepage";
import loggedInHomepage from "../../../Object repository/Nova/loggedInHomepage";
import AdminSettings from "../../../Object repository/Nova/admin-settings";
import financeexchangerates from "../../../Object repository/Nova/admin-settings-exchangerates";

const home = new Home();
const navigate = new loggedInHomepage();
const admin = new AdminSettings();
const exchange = new financeexchangerates();

it("deletes an Exchange Rate with rate value 1.8", () => {
    const LoginName = 'Testley'
    const LoginPassword = 'Caru01012025!'
    const FilterRate = '1.8'
    

        home.visit();
        home.fillLoginName(LoginName);
        home.fillLoginPassword(LoginPassword);
        home.SubmitLogin();
        cy.get('.col-lg > .mx-name-text1').should('have.text', 'Home')
        navigate.ClickNavigationSettings();
        admin.ExchangeRates();
        exchange.FillFilterRate(FilterRate);
        cy.wait(1000);
        exchange.ClickDeleteExchangeRate();
        exchange.ClickProceedDeleteExchangeRates();
    })