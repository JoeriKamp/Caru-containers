import Home from "../../../Object repository/Nova/homepage";
import loggedInHomepage from "../../../Object repository/Nova/loggedInHomepage";
import relations from "../../../Object repository/Nova/Relations";

const home = new Home();
const navigate = new loggedInHomepage();
const fill = new relations

it("should go to relation and fill in Berlangas", () => {
    const LoginName = 'Testley'
    const LoginPassword = 'Caru01012025!'
    const ParentAccount = 'Berlangas';
        
        home.visit();
        home.fillLoginName(LoginName);
        home.fillLoginPassword(LoginPassword);
        home.SubmitLogin();
        cy.get('.col-lg > .mx-name-text1').should('have.text', 'Home')
        navigate.ClickNavigationRelations();
        fill.FillParentAccount(ParentAccount);
        cy.get('#\\31 89\\.RelationManagement\\.Relation_Overview\\.textBox1_jsc_7159').should('have.text','Berlangas')
    });
    
