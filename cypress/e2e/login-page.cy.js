/// <reference types="cypress" />

import { Login } from '../pages/Login';

// Use a page-object pattern or app actions.
const page = new Login();

beforeEach(() => {
  page.visit();
});

// Fill in the “Username” and “Password” input fields and click the “Login” button.
describe('Sign-in form', () => {
  it('is available', () => {
    page.signIn();
  });
});

// Use an assertion library and verify that all the elements are present on the page.
describe('All the elements', () => {
  it('are present on the page', () => {
    page.checkAllElementsArePresent();
  });
});

// Verify that all the error messages appear.
describe('All the error messages appear when user enters', () => {
  it('only username', () => {
    page.getMissingPasswordErrorMessage();
  });

  it('only password', () => {
    page.getMissingUsernameErrorMessage();
  });

  it('username from non-existent account', () => {
    page.signIn();
    page.getNoAccountFoundErrorMessage();
  });
});

// Create a test-case that will fail because of unsuccessful login.
describe('User is able to', () => {
  it('sign in successfully', () => {
    page.signIn();
    page.checkSignInIsSuccessfull();
  });
});
