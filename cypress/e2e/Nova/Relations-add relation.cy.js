import Home from "../../../Object repository/Nova/homepage";  
import loggedInHomepage from "../../../Object repository/Nova/loggedInHomepage";
import relations from "../../../Object repository/Nova/Relations"; 
import relationinformation from "../../../Object repository/Nova/relations-information";
import relationtypes from "../../../Object repository/Nova/relations-relationstype";
import relationlocation from "../../../Object repository/Nova/relations-locations";  
import relationcontacts from "../../../Object repository/Nova/relations-contacts"; 
import relationdocument from "../../../Object repository/Nova/relations-documents"; //correct import
import { describe } from "mocha";
 
const navigate = new loggedInHomepage();
const home = new Home();
const overview = new relations();
const information = new relationinformation();
const type = new relationtypes();
const location = new relationlocation();
const contact = new relationcontacts();
const document = new relationdocument();

describe("Adding a relation", () => {
it("will make a new relation",() => {
    const LoginName = 'Testley'
    const LoginPassword = 'Caru01012025!';
    
    
    home.visit();
    home.fillLoginName(LoginName);
    home.fillLoginPassword(LoginPassword);
    home.SubmitLogin();
    cy.get('.col-lg > .mx-name-text1').should('have.text', 'Home')
    navigate.ClickNavigationRelations();
    overview.ClickAddRelation();
    information.ClickIsActive();

  
})
})