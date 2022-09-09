# Pecode QA Automation Test Task

## What should be done?

- [x] Write an automation script using a JavaScript testing framework which will open: https://www.pecodesoftware.com/qa-portal/greet.php page.

- [x] Create an environment file and pick up all the credentials values from there.

- [x] Fill in the “Username” and “Password” input fields and click the “Login” button.

- [x] Use an assertion library and verify that all the elements are present on the page.

- [x] Verify that all the error messages appear.

- [x] Create a test-case that will fail because of unsuccessful login.

- [x] Use a page-object pattern or app actions.

- [x] The result of execution should generate:

  - A mochawesome report file.
  - Screenshots for failing the test.
  - Video recording for all the tests.

- [x] Wrap the tests into a docker container. (Optional)

- [x] Post the code (without node_modules) to the public Github repository and provide a link.

## How to run this project?

### Install dependencies:

```
npm i
```

### Run tests:

```
npm run test
```

### Create Docker image file from Dockerfile:

```
docker build -t pecode-qa-automation-test-task:1.0.0 .
```

### Run Cypress tests from Docker container you created:

```
docker run -i -v $PWD:/pecode-qa-automation-test-task -t pecode-qa-automation-test-task:1.0.0
```
