describe('Server working', () => {
  before(() => cy.server())

  it('working', () => cy.visit('/'))
})