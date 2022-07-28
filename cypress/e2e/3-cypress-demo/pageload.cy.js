context('Page Load Test RUN', () => {
  beforeEach(() => {
    cy.visit('http://localhost:8080/commands/actions')
  })

  it('Check if Action page loaded fine', () => {
    cy.get('h1').should('exist')
    cy.get('h1').should('contain.text', 'Actions')
    cy.get('h1').should('have.text', 'Actions')
  })
})
