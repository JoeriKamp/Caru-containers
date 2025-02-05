class loggedInHomepage {
    visit() {
        cypress.visit("/")
    }

    ClickNavigationDashboard() {
        cy.get('.mx-name-navigationTree3-0').click();
    }
   
    ClickNavigationAdmin(){
        cy.get('.mx-name-navigationTree3-1').click();
    }
    
    ClickNavigationFailedBizbrainRequests(){
        cy.get('.mx-name-navigationTree3-1').click(),
        cy.get('.mx-name-navigationTree3-1-3').click();
    }

    ClickNavigationSettings(){
        cy.get('.mx-name-navigationTree3-1').click(),
        cy.get('.mx-name-navigationTree3-1-5').click();
    }

    ClickNavigationUserManagement(){
        cy.get('.mx-name-navigationTree3-1').click(),
        cy.get('.mx-name-navigationTree3-1-6').click();
    }
   
    ClickNavigationTariffContracts(){
        cy.get('.mx-name-navigationTree3-1').click(),
        cy.get('.mx-name-navigationTree3-1-7').click();
    }
   
    ClickNavigationContainers(){
        cy.get('.mx-name-navigationTree3-2').click();
    }
    
    ClickNavigationCompliance(){
        cy.get('.mx-name-navigationTree3-2').click(),
        cy.get('.mx-name-navigationTree3-2-0').click();
    }
   
    ClickNavigationInformation(){
        cy.get('.mx-name-navigationTree3-2').click(),
        cy.get('.mx-name-navigationTree3-2-1').click();
    }
    
    ClickNavigationMovement(){
        cy.get('.mx-name-navigationTree3-2').click(),
        cy.get('.mx-name-navigationTree3-2-2').click();
    }

    ClickNavigationRangeDetail(){
        cy.get('.mx-name-navigationTree3-2').click(),
        cy.get('.mx-name-navigationTree3-2-3').click();
    }

    ClickNavigationStock(){
        cy.get('.mx-name-navigationTree3-2').click(),
        cy.get('.mx-name-navigationTree3-2-4').click();
    }

    ClickNavigationDepots(){
        cy.get('.mx-name-navigationTree3-3').click();
    }

    ClickNavigationInvoices(){
        cy.get('.mx-name-navigationTree3-4').click();
    }

    ClickNavigationPurchaseInvoices(){
        cy.get('.mx-name-navigationTree3-4').click(),
        cy.get('.mx-name-navigationTree3-4-0').click();
    }

    ClickNavigationOrders(){
        cy.get('.mx-name-navigationTree3-5').click();
    }
    
    ClickNavigationPurchaseOrders(){
        cy.get('.mx-name-navigationTree3-5').click(),
        cy.get('.mx-name-navigationTree3-5-0').click();
    }

    ClickNavigationSalesOrders(){
        cy.get('.mx-name-navigationTree3-5').click(),
        cy.get('.mx-name-navigationTree3-5-1').click();
    }
    
    ClickNavigationTransportOrders(){
        cy.get('.mx-name-navigationTree3-5').click(),
        cy.get('.mx-name-navigationTree3-5-2').click();
    }

    ClickNavigationRelations(){
        cy.get('.mx-name-navigationTree3-6').click();
    }

    ClickNavigationSignOut(){
        cy.get('.mx-link').click();
    }
}
export default loggedInHomepage;