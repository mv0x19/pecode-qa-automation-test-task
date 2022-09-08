/// <reference types="cypress" />

// Create an environment file and pick up all the credentials values from there.
const user = Cypress.env('user');

export class Login {
  elements = {
    logo: () => cy.get('[id*=logo]'),
    title: () => cy.get('h1'),
    usernameInput: () => cy.get('input[name=username]'),
    passwordInput: () => cy.get('input[name=password]'),
    loginBtn: () => cy.get('input[type=submit]'),
    missingUsernameErrorMessage: () => cy.get('span').contains('Please enter username.'),
    missingPasswordErrorMessage: () => cy.get('span').contains('Please enter your password.'),
    accountNotFoundErrorMessage: () => cy.get('span').contains('No account found with that username.'),
  };

  visit() {
    cy.visit('/');
  }

  signIn() {
    this.elements.usernameInput().type(user.username);
    this.elements.passwordInput().type(user.password, { log: false });
    this.elements.loginBtn().click();
  }

  checkAllElementsArePresent() {
    this.elements.logo().should('exist').should('be.visible');
    this.elements.title().should('exist').should('be.visible');
    this.elements
      .usernameInput()
      .should('exist')
      .should('be.visible')
      .should('have.attr', 'placeholder')
      .and('match', /Username/);
    this.elements
      .passwordInput()
      .should('exist')
      .should('be.visible')
      .should('have.attr', 'placeholder')
      .and('match', /Password/);
    this.elements.loginBtn().should('exist').should('be.visible');
  }

  getMissingPasswordErrorMessage() {
    this.elements.usernameInput().type(user.username);
    this.elements.loginBtn().click();
    this.elements.missingPasswordErrorMessage().should('exist').should('be.visible');
  }

  getMissingUsernameErrorMessage() {
    this.elements.passwordInput().type(user.password, { log: false });
    this.elements.loginBtn().click();
    this.elements.missingUsernameErrorMessage().should('exist').should('be.visible');
  }

  getNoAccountFoundErrorMessage() {
    this.elements.accountNotFoundErrorMessage();
  }

  checkSignInIsSuccessfull() {
    this.elements.accountNotFoundErrorMessage().should('not.exist');
  }
}
