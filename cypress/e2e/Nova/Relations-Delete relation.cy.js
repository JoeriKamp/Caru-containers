import Home from "../../../Object repository/Nova/homepage";  
import loggedInHomepage from "../../../Object repository/Nova/loggedInHomepage";
import relations from "../../../Object repository/Nova/relations"; 

const navigate = new loggedInHomepage();
const home = new Home();
const overview = new relations();

describe("Deleting a relation", () => {
    it("will delete a relation",() => {
        const LoginName = 'Testley'
        const LoginPassword = 'Caru01012025!'
        const RelationName = 'joeri';

        home.visit();
        home.fillLoginName(LoginName);
        home.fillLoginPassword(LoginPassword);
        home.SubmitLogin();
        cy.get('.col-lg > .mx-name-text1').should('have.text', 'Home')
        navigate.ClickNavigationRelations();
        overview.ClickResetFilters();
        overview.FillRelationName(RelationName);
        overview.ClickSearch();
        cy.wait(2000);
        overview.ClickDeleteRelation();
        overview.ClickProceedDeleteRelation();
        cy.wait(3000);
        navigate.ClickNavigationRelations();

    })
});