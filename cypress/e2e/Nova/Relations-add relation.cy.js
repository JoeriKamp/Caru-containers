import Home from "../../../Object repository/Nova/homepage";  
import loggedInHomepage from "../../../Object repository/Nova/loggedInHomepage";
import relations from "../../../Object repository/Nova/relations"; 
import relationinformation from "../../../Object repository/Nova/relations-information";
import relationtypes from "../../../Object repository/Nova/relations-relationstype";
import relationlocation from "../../../Object repository/Nova/relations-locations";  
import relationcontacts from "../../../Object repository/Nova/relations-contacts"; 
import relationdocument from "../../../Object repository/Nova/relations-documents"; //correct import
 

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
    const LoginPassword = 'Caru01012025!'
    const RelationName = 'joeritest'
    const Language = 'Dutch'
    const Relationtypes = 'Sales Customer'
    const ChooseCurrency = 'EUR'
    const VatpercentageSales = '23'
    const FrequencyCodeSales = 'Direct'
    const BillingType = 'Collected'
    const PaymentTerms = '23'
    const LocationName = 'TestLocatie'
    const LocationType = 'Business'
    const LocationType2 = 'Postal'
    const Adressline1 = 'Test Straat'
    const PostalCode = '1234AA'
    const City = 'Schiedam'
    const Country =  'Netherlands'
    const FirstName = 'Joeri'
    const LastName = 'Tester'
    const Email = 'Joeri@fsoesdn.nl'
    const InvoiceContact = 'Sales'
    const Label = 'csc';

    home.visit();
    home.fillLoginName(LoginName);
    home.fillLoginPassword(LoginPassword);
    home.SubmitLogin();
    cy.get('.col-lg > .mx-name-text1').should('have.text', 'Home')
    navigate.ClickNavigationRelations();
    overview.ClickAddRelation();
    information.FillRelationName(RelationName);
    information.ChooseLanguage(Language);
    information.ClickNextStep();
    
    type.ChooseRelationTypes(Relationtypes);
    type.ClickTitle();
    type.ChooseCurrencySales(ChooseCurrency);
    type.ChooseVatPercentageSales(VatpercentageSales);
    type.ChooseFrequencyCodeSales(FrequencyCodeSales);
    type.ChooseBillingTypeSales(BillingType);
    type.ChoosePaymentTerms(PaymentTerms);
    type.ClickTitle();
    type.ClickNextStep();
    cy.wait(1000);

    location.ClickAddLocation();
    location.FillLocationName(LocationName);
    location.ChooseLocationType(LocationType);
    location.ChooseLocationType(LocationType2);
    location.FillAdressLine1(Adressline1);
    location.FillPostalCode(PostalCode);
    location.FillCity(City);
    location.ChooseCountry(Country);
    location.ClickSave(); 
    cy.wait(1000);
    location.ClickNext();
    cy.wait(1000);
    
    contact.ClickAddContact();
    cy.wait(700);
    contact.FillFirstName(FirstName);
    contact.FillLastName(LastName);
    contact.FillEmail(Email);
    contact.ChooseInvoiceContact(InvoiceContact);
    type.ClickTitle();
    contact.ClickSave();
    cy.wait(1000);
    contact.ClickNextStep();
    cy.wait(1000);

    document.ClickAddDocument();
    document.DropFile();
    cy.wait(1500);
    document.ChooseLabel(Label);
    document.ClickSave();
    cy.wait(1000);
    document.ClickFinish();
})
})