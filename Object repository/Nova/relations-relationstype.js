const GRIDLAYOUT = `.mx-name-dataView11 > :nth-child(1) > .mx-name-dataView2 > :nth-child(1) > .mx-name-dataView1 > :nth-child(1) > .mx-name-container29 > .mx-name-layoutGrid1 > :nth-child(1) > .col-lg-8 > .mx-dataview > .mx-dataview-content > .mx-name-layoutGrid`;

class relationtypes {
    //Houd rekening met dat er meerdere dezelfde commands zijn omdat een type bepaalde invulling nodig heeft, maar wel andere element locators heeft.
    //Keep in mind that there are multiple same commands with other element locators, which fit the relation type.
    

ClickTitle() {
        cy.get('.mx-title').click();
}

    ChooseRelationTypes(Relationtypes) {
        cy.get('.mx-name-layoutGrid3 > :nth-child(2) > .col-lg').click()
        cy.get('.mx-name-layoutGrid3 > :nth-child(2) > .col-lg').type(Relationtypes).type('{downarrow}{enter}');
}
    //Rental customer
    ChooseCurrencyRental(Currency) {
        cy.get(`${GRIDLAYOUT}4> :nth-child(1) > :nth-child(1)`).click()
        cy.get('.mx-name-dataView11 > :nth-child(1) > .mx-name-dataView2 > :nth-child(1) > .mx-name-dataView1 > :nth-child(1) > .mx-name-container29 > .mx-name-layoutGrid1 > :nth-child(1) > .col-lg-8 > .mx-dataview > .mx-dataview-content > .mx-name-layoutGrid4 > :nth-child(1) > :nth-child(1)').type(Currency).type('{enter}');
}

    ChooseAccountManager(AccountManager) {
        cy.get('.mx-name-dataView11 > :nth-child(1) > .mx-name-dataView2 > :nth-child(1) > .mx-name-dataView1 > :nth-child(1) > .mx-name-container29 > .mx-name-layoutGrid1 > :nth-child(1) > .col-lg-8 > .mx-dataview > .mx-dataview-content > .mx-name-layoutGrid4 > :nth-child(2) > :nth-child(2)').click()
        cy.get('.mx-name-dataView11 > :nth-child(1) > .mx-name-dataView2 > :nth-child(1) > .mx-name-dataView1 > :nth-child(1) > .mx-name-container29 > .mx-name-layoutGrid1 > :nth-child(1) > .col-lg-8 > .mx-dataview > .mx-dataview-content > .mx-name-layoutGrid4 > :nth-child(2) > :nth-child(2)').type(AccountManager).type('{enter}');
}

    ChooseVatPercentage(Vatpercentage) {
        cy.get('.mx-name-dataView11 > :nth-child(1) > .mx-name-dataView2 > :nth-child(1) > .mx-name-dataView1 > :nth-child(1) > .mx-name-container29 > .mx-name-layoutGrid1 > :nth-child(1) > .col-lg-8 > .mx-dataview > .mx-dataview-content > .mx-name-layoutGrid4 > :nth-child(2) > :nth-child(1)').click()
        cy.get('.mx-name-dataView11 > :nth-child(1) > .mx-name-dataView2 > :nth-child(1) > .mx-name-dataView1 > :nth-child(1) > .mx-name-container29 > .mx-name-layoutGrid1 > :nth-child(1) > .col-lg-8 > .mx-dataview > .mx-dataview-content > .mx-name-layoutGrid4 > :nth-child(2) > :nth-child(1)').type(Vatpercentage).type('{enter}');
}

    ChooseRentalType(RentalType) {
        cy.get('.mx-name-dataView11 > :nth-child(1) > .mx-name-dataView2 > :nth-child(1) > .mx-name-dataView1 > :nth-child(1) > .mx-name-container29 > .mx-name-layoutGrid1 > :nth-child(1) > .col-lg-8 > .mx-dataview > .mx-dataview-content > .mx-name-layoutGrid4 > :nth-child(3) > :nth-child(1)').click()
        cy.get('.mx-name-dataView11 > :nth-child(1) > .mx-name-dataView2 > :nth-child(1) > .mx-name-dataView1 > :nth-child(1) > .mx-name-container29 > .mx-name-layoutGrid1 > :nth-child(1) > .col-lg-8 > .mx-dataview > .mx-dataview-content > .mx-name-layoutGrid4 > :nth-child(3) > :nth-child(1)').type(RentalType).type('{enter}');
}

    ChooseBillingType(BillingType) {
        cy.get('.mx-name-dataView11 > :nth-child(1) > .mx-name-dataView2 > :nth-child(1) > .mx-name-dataView1 > :nth-child(1) > .mx-name-container29 > .mx-name-layoutGrid1 > :nth-child(1) > .col-lg-8 > .mx-dataview > .mx-dataview-content > .mx-name-layoutGrid4 > :nth-child(3) > :nth-child(2)').click()
        cy.get('.mx-name-dataView11 > :nth-child(1) > .mx-name-dataView2 > :nth-child(1) > .mx-name-dataView1 > :nth-child(1) > .mx-name-container29 > .mx-name-layoutGrid1 > :nth-child(1) > .col-lg-8 > .mx-dataview > .mx-dataview-content > .mx-name-layoutGrid4 > :nth-child(3) > :nth-child(2)').type(BillingType).type('{enter}');
}

    ChoosePaymentTerms(PaymentTerms) {
        cy.get('.mx-name-dataView11 > :nth-child(1) > .mx-name-dataView2 > :nth-child(1) > .mx-name-dataView1 > :nth-child(1) > .mx-name-container29 > .mx-name-layoutGrid1 > :nth-child(1) > .col-lg-8 > .mx-dataview > .mx-dataview-content > .mx-name-layoutGrid4 > :nth-child(4) > :nth-child(1)').click()
        cy.get('.mx-name-dataView11 > :nth-child(1) > .mx-name-dataView2 > :nth-child(1) > .mx-name-dataView1 > :nth-child(1) > .mx-name-container29 > .mx-name-layoutGrid1 > :nth-child(1) > .col-lg-8 > .mx-dataview > .mx-dataview-content > .mx-name-layoutGrid4 > :nth-child(4) > :nth-child(1)').type(PaymentTerms).type('{enter}');
}

    ChooseInvoiceType(InvoiceType) {
        cy.get('.mx-name-dataView11 > :nth-child(1) > .mx-name-dataView2 > :nth-child(1) > .mx-name-dataView1 > :nth-child(1) > .mx-name-container29 > .mx-name-layoutGrid1 > :nth-child(1) > .col-lg-8 > .mx-dataview > .mx-dataview-content > .mx-name-layoutGrid4 > :nth-child(4) > :nth-child(2) > .mx-name-dropDown1').click()
        cy.get('.mx-name-dataView11 > :nth-child(1) > .mx-name-dataView2 > :nth-child(1) > .mx-name-dataView1 > :nth-child(1) > .mx-name-container29 > .mx-name-layoutGrid1 > :nth-child(1) > .col-lg-8 > .mx-dataview > .mx-dataview-content > .mx-name-layoutGrid4 > :nth-child(4) > :nth-child(2) > .mx-name-dropDown1').type(InvoiceType).type('{enter}');
}

    ClickVatNumber() {
        cy.get('.mx-name-dataView11 > :nth-child(1) > .mx-name-dataView2 > :nth-child(1) > .mx-name-dataView1 > :nth-child(1) > .mx-name-container29 > .mx-name-layoutGrid1 > :nth-child(1) > .col-lg-4 > .mx-name-container1 > .mx-name-layoutGrid19 > .row > .col-lg-auto > .btn').click();
}
    //Sales Customer
    ChooseCurrencySales(CurrencySales) {
        cy.get('.mx-name-dataView12 > :nth-child(1) > .mx-name-dataView2 > :nth-child(1) > .mx-name-dataView1 > :nth-child(1) > .mx-name-container29 > .mx-name-layoutGrid1 > :nth-child(1) > .col-lg-8 > .mx-dataview > .mx-dataview-content > .mx-name-layoutGrid4 > :nth-child(1) > :nth-child(1)').click()
        cy.get('.mx-name-dataView12 > :nth-child(1) > .mx-name-dataView2 > :nth-child(1) > .mx-name-dataView1 > :nth-child(1) > .mx-name-container29 > .mx-name-layoutGrid1 > :nth-child(1) > .col-lg-8 > .mx-dataview > .mx-dataview-content > .mx-name-layoutGrid4 > :nth-child(1) > :nth-child(1)').type(CurrencySales).type('{enter}');
}

    ChooseAccountManagerSales(AccountManagerSales) {
        cy.get('.mx-name-dataView12 > :nth-child(1) > .mx-name-dataView2 > :nth-child(1) > .mx-name-dataView1 > :nth-child(1) > .mx-name-container29 > .mx-name-layoutGrid1 > :nth-child(1) > .col-lg-8 > .mx-dataview > .mx-dataview-content > .mx-name-layoutGrid4 > :nth-child(1) > :nth-child(2)').click()
        cy.get('.mx-name-dataView12 > :nth-child(1) > .mx-name-dataView2 > :nth-child(1) > .mx-name-dataView1 > :nth-child(1) > .mx-name-container29 > .mx-name-layoutGrid1 > :nth-child(1) > .col-lg-8 > .mx-dataview > .mx-dataview-content > .mx-name-layoutGrid4 > :nth-child(1) > :nth-child(2)').type(AccountManagerSales).type('{enter}');
}

    ChooseVatPercentageSales(VatpercentageSales) {
        cy.get('.mx-name-dataView12 > :nth-child(1) > .mx-name-dataView2 > :nth-child(1) > .mx-name-dataView1 > :nth-child(1) > .mx-name-container29 > .mx-name-layoutGrid1 > :nth-child(1) > .col-lg-8 > .mx-dataview > .mx-dataview-content > .mx-name-layoutGrid4 > :nth-child(2) > :nth-child(1)').click()
        cy.get('.mx-name-dataView12 > :nth-child(1) > .mx-name-dataView2 > :nth-child(1) > .mx-name-dataView1 > :nth-child(1) > .mx-name-container29 > .mx-name-layoutGrid1 > :nth-child(1) > .col-lg-8 > .mx-dataview > .mx-dataview-content > .mx-name-layoutGrid4 > :nth-child(2) > :nth-child(1)').type(VatpercentageSales).type('{enter}');
}

    ChooseFrequencyCodeSales(FrequencyCodeSales) {
        cy.get('.mx-name-dataView12 > :nth-child(1) > .mx-name-dataView2 > :nth-child(1) > .mx-name-dataView1 > :nth-child(1) > .mx-name-container29 > .mx-name-layoutGrid1 > :nth-child(1) > .col-lg-8 > .mx-dataview > .mx-dataview-content > .mx-name-layoutGrid4 > :nth-child(2) > :nth-child(2)').find('select').select(FrequencyCodeSales);
}
   
    ClickBlockingInvoice() {
        cy.get(':nth-child(3) > :nth-child(1) > .mx-name-switch1 > .widget-switch').click();
}

    ChooseBillingTypeSales(BillingType) {
        cy.get('.mx-name-dataView12 > :nth-child(1) > .mx-name-dataView2 > :nth-child(1) > .mx-name-dataView1 > :nth-child(1) > .mx-name-container29 > .mx-name-layoutGrid1 > :nth-child(1) > .col-lg-8 > .mx-dataview > .mx-dataview-content > .mx-name-layoutGrid4 > :nth-child(3) > :nth-child(2)').find('select').select(BillingType);
}

    ChoosePaymentTerms(PaymentTerms) {
        cy.get('.mx-name-dataView12 > :nth-child(1) > .mx-name-dataView2 > :nth-child(1) > .mx-name-dataView1 > :nth-child(1) > .mx-name-container29 > .mx-name-layoutGrid1 > :nth-child(1) > .col-lg-8 > .mx-dataview > .mx-dataview-content > .mx-name-layoutGrid4 > :nth-child(4) > :nth-child(1)').click()
        cy.get('.mx-name-dataView12 > :nth-child(1) > .mx-name-dataView2 > :nth-child(1) > .mx-name-dataView1 > :nth-child(1) > .mx-name-container29 > .mx-name-layoutGrid1 > :nth-child(1) > .col-lg-8 > .mx-dataview > .mx-dataview-content > .mx-name-layoutGrid4 > :nth-child(4) > :nth-child(1)').type(PaymentTerms).type('{downarrow}{enter}');
}

    ChooseInvoiceTypeSales(InvoiceTypeSales) {
        cy.get('.mx-name-dataView12 > :nth-child(1) > .mx-name-dataView2 > :nth-child(1) > .mx-name-dataView1 > :nth-child(1) > .mx-name-container29 > .mx-name-layoutGrid1 > :nth-child(1) > .col-lg-8 > .mx-dataview > .mx-dataview-content > .mx-name-layoutGrid4 > :nth-child(4) > :nth-child(2)').click()
        cy.get('.mx-name-dataView12 > :nth-child(1) > .mx-name-dataView2 > :nth-child(1) > .mx-name-dataView1 > :nth-child(1) > .mx-name-container29 > .mx-name-layoutGrid1 > :nth-child(1) > .col-lg-8 > .mx-dataview > .mx-dataview-content > .mx-name-layoutGrid4 > :nth-child(4) > :nth-child(2)').type(InvoiceTypeSales).type('{enter}');
}

    ClickVatNumber() {
        cy.get('.mx-name-dataView12 > :nth-child(1) > .mx-name-dataView2 > :nth-child(1) > .mx-name-dataView1 > :nth-child(1) > .mx-name-container29 > .mx-name-layoutGrid1 > :nth-child(1) > .col-lg-4 > .mx-name-container1 > .mx-name-layoutGrid19 > .row > .col-lg-auto > .btn').click();
}

    //Supplier
    ChooseCurrency(Currency) {
        cy.get('.mx-name-layoutGrid5 > .row > :nth-child(1)').click()
        cy.get('.mx-name-layoutGrid5 > .row > :nth-child(1)').type(Currency).type('{enter}');
}

    ChooseAccountManager(AccountManager) {
        cy.get('.mx-name-layoutGrid5 > .row > :nth-child(2)').click()
        cy.get('.mx-name-layoutGrid5 > .row > :nth-child(2)').type(AccountManager).type('{enter}');
}

    //Transport Company
    ChooseCurrency(Currency) {
        cy.get('.mx-name-layoutGrid8 > .row > :nth-child(1)').click()
        cy.get('.mx-name-layoutGrid8 > .row > :nth-child(1)').type(Currency).type('{enter}');
}

    FillFtpDirectory(FtpDirectory) {
        cy.get('.mx-name-layoutGrid8 > .row > :nth-child(2)').type(FtpDirectory);
}

    ClickCancel() {
        cy.get('.mx-name-actionButton3').click();
}

    ClickBack() {
        cy.get('.mx-name-actionButton2').click();
}

    ClickNextStep() {
        cy.get('.mx-name-container2 > .mx-name-actionButton1').click();
}

}
export default relationtypes;