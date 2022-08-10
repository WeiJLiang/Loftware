describe ('Loftware Cypress Test', () => {

    //Check the URL, homepage and title
    it ("open the homepage and verify the url and the title", () =>{
        //open the homepage

        cy.visit('https://www.loftware.com/');
        
        //assert the url
        cy.url().should("include", "loftware");

        //assert the title
        cy.title().should("eq", "Standardize your labeling operations with Loftware");
    });
    

    //Click on Menu bar and Click on Products > Labelling > Spectrum - also verify the location
    it('Check for Menu bar and Click on Products > Labelling > Spectrum', () => {

        //Look for Menu bar       
        cy.get('.header__hamburger-menu-toggle').click();

        //check for products menu and click on it
        cy.contains('.hamburger-menu__primary-link','Products').click();

        //click on Labelling
        cy.contains('.hamburger-menu__megamenu-item-link','Labeling').click();

        //click on Spectrum need to use click({force: true}) since element is not visible
        cy.contains('.megamenu-link-card__link-item-label','Spectrum').click({force: true});  

        //Check Spectrum url
        cy.url().should("include", "https://www.loftware.com/products/labeling/spectrum");

        //assert the title
        cy.title().should("eq", "Loftware Spectrum");
    });

    //Check for cookies banner and clicks Accept All button
    it('Check for cookies banner and clicks Accept All button', () => {
        
        //look for cookies banner
        cy.contains('div','We Care About Your Privacy');

        //wait for 3 seconds
        cy.wait(3000) 

        //click on Accept All on cookies banner
        cy.contains('#onetrust-accept-btn-handler','Accept All').click();
        //wait for 3 seconds
        cy.wait(3000) 
        
    });


    //Check for cookies banner and clicks Manage Preferences button
    it('Check for cookies banner and clicks Manage Preferences button', () => {
    
        //reopen site again
        cy.visit('https://www.loftware.com/');

        //look for cookies banner
         cy.contains('div','We Care About Your Privacy');

        //click on manage preferences
         cy.contains('#onetrust-pc-btn-handler','Manage Preferences').click();

        //wait for 3 seconds
        cy.wait(3000) 

        //Click on confirm my choices
        cy.contains('.save-preference-btn-handler.onetrust-close-btn-handler','Confirm My Choices').click();

     });
});