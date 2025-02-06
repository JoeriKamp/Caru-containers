import loggedInHomepage from "../../../Object repository/Nova/loggedInHomepage";
import Home from "../../../Object repository/Nova/homepage";

const navigate = new loggedInHomepage();
const home = new Home();

describe("Navigating through menu", ()=> {
    beforeEach(() => {
        home.visit();
            const LoginName = 'Testley'
            const LoginPassword = 'Caru01012025!';
            
                home.fillLoginName(LoginName);
                home.fillLoginPassword(LoginPassword);
                home.SubmitLogin();
    })

it("should click Dashboard on navigation menu",()=>{
    navigate.ClickNavigationDashboard();
    });
it("should click Admin on navigation menu",()=>{
    navigate.ClickNavigationAdmin();
    cy.get('.mx-name-navigationTree3-1-3')
      .should('be.visible');
    });
it("should click Failed bizbrain requests on navigation menu",()=>{
    navigate.ClickNavigationFailedBizbrainRequests();
    cy.get('.mx-title').should('have.text', 'Failed requests from/to Bizbrain')
    });
it("should click settings on navigation menu",()=>{
    navigate.ClickNavigationSettings();
    cy.get('.mx-title').should('have.text','System settings')
    });
it("should click Containers on navigation menu",()=>{
    navigate.ClickNavigationContainers();
    });
it("should click Depots on navigation menu",()=>{
    navigate.ClickNavigationDepots();
    });
it("should click Invoices on navigation menu",()=>{
    navigate.ClickNavigationInvoices();
    });
it("should click Orders on navigation menu",()=>{
    navigate.ClickNavigationOrders();
    });
it("should click Relations on navigation menu",()=>{
    navigate.ClickNavigationRelations();
    });
it("should Log out the user with the navigation menu",()=>{
    navigate.ClickNavigationSignOut();
    });
})
