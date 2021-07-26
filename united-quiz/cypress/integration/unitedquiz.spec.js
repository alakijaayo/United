context('UnitedQuiz', () => {
  beforeEach(() => cy.visit('http://localhost:3000/'));
  beforeEach(() => cy.viewport('macbook-15'));

  it('Shows Homepage', () => {
    cy.get('[data-cy=title]').contains("Manchester United Quiz");
    cy.get('[data-cy=homepage]').contains("Homepage");
    cy.get('[data-cy=leaderboard]').contains("Leaderboard");
    cy.get('[data-cy=username]').contains("Name:");
    cy.get('[data-cy=question]').contains("Question: 0/25");
    cy.get('[data-cy=score]').contains("Score: 0/25");
    cy.get('[data-cy=beginner]').contains("Beginner");
    cy.get('[data-cy=intermediate]').contains("Intermediate");
    cy.get('[data-cy=expert]').contains("Expert");
  });

  it('Updates Name', () => {
    cy.get('[data-cy=textfield]').type("Ayodele Alakija");
    cy.get('[data-cy=username]').should((text) => {
        expect(text).to.contain("Name: Ayodele Alakija")
    });
  });
});