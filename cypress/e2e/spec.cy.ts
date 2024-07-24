context('End to end test for the application', () => {
  beforeEach(() => {
    cy.visit('/');
  });
  describe('text', () => {
    describe('main page text', () => {
      it('assert text on the page', () => {
        cy.contains(/apps by host/i).should('exist');
        cy.contains(/for user averylongemailadress@companyname.com/i).should(
          'exist'
        );
      });
    });
  });
});
