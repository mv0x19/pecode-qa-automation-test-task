# Wrap the tests into a docker container. (Optional)
FROM cypress/browsers:node16.14.2-slim-chrome103-ff102
RUN mkdir /pecode-qa-automation-test-task
WORKDIR /pecode-qa-automation-test-task
COPY ./package.json .
COPY ./cypress.config.js .
COPY ./cypress ./cypress
RUN npm install
ENTRYPOINT [ "npx", "cypress", "run" ]
CMD [""]