const { defineConfig } = require('cypress');

module.exports = defineConfig({
  e2e: {
    baseUrl:
      'https://www.pecodesoftware.com/qa-portal/registerlogin/registerlogin.php',
  },
  env: {
    user: {
      username: 'username',
      password: 'password',
    },
  },
});
