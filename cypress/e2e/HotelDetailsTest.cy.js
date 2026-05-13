describe('HotelDetails page', () => {
    beforeEach(() => {
        cy.visit('http://localhost:3000/hotel/71222');
    });

    it('should display the totafddsfdsfl price', () => {
        cy.get('.text-indigo-600').should('be.visible');
    });

    it('should display the date picker', () => {
    });

    it('should display an error message if check-in or check-out dates are not selected', () => {
        cy.get('[data-testid=]').should('not.exist');
        cy.get('.bg-brand-secondary').click();
        cy.get('[data-testid=toast__outlet]').should('be.visible');
    });
});