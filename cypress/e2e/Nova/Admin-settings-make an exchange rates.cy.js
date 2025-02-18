import Home from "../../../Object repository/Nova/homepage";
import loggedInHomepage from "../../../Object repository/Nova/loggedInHomepage";
import AdminSettings from "../../../Object repository/Nova/admin-settings";
import financeexchangerates from "../../../Object repository/Nova/admin-settings-exchangerates";

const home = new Home();
const navigate = new loggedInHomepage();
const admin = new AdminSettings();
const exchange = new financeexchangerates();

it("Make a new Exchange Rate", () => {
    const LoginName = 'Testley'
    const LoginPassword = 'Caru01012025!'
    const SourceCurrency = 'BRL'
    const TargetCurrency = 'EUR'
    const Rate = '1.8'
    const ValidTo = '19-02-2026';

        home.visit();
        home.fillLoginName(LoginName);
        home.fillLoginPassword(LoginPassword);
        home.SubmitLogin();
        cy.get('.col-lg > .mx-name-text1').should('have.text', 'Home')
        navigate.ClickNavigationSettings();
        admin.ExchangeRates();
        exchange.ClickNewExchangeRate();
        exchange.ChooseSourceCurrency(SourceCurrency);
        exchange.ChooseTargetCurrency(TargetCurrency);
        exchange.fillRate(Rate);
        exchange.FillValidTo(ValidTo);
        exchange.ClickSaveNewExchangeRate();
    })