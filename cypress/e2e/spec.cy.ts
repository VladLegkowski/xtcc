context('End to end test for the application', () => {
  beforeEach(() => {
    cy.visit('/');
  });
  describe('text', () => {
    describe('main page text', () => {
      it('assert text on the page', () => {
        cy.contains(/the places you dream of/i).should('exist');
        cy.contains(/let’s live new adventures/i).should('exist');
      });
    });
  });
});
