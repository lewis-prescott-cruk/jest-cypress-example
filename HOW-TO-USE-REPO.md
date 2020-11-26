## Learning Objectives

- Learn basics of Jest
    - running tests
    - structuring tests
    - setup and teardown
    - mocking
- Use Cypress as comparison tool if you get stuck in Jest
- Familiarise yourself with TypeScript

Cat Facts API [Docs](https://alexwohlbruck.github.io/cat-facts/docs/endpoints/facts.html)

### Task 1 - Intro to Jest
1. Convert Cat Facts test from cypress to jest using supertest

### Task 2 - Response
1. Assert `body.text` from `/facts/random` respone. (Bear in mind the text in response changes every time)

### Task 3 - Query Parameters
1. Add cypress test for `dog` animal type
1. Add jest test for `dog` animal type

### Task 4 - POST
1. Assert 404 response when `POST` to url: /facts/random

### Task 5 - Mocking
1. Assert `body.text` with a mock text response from Cat Facts API using Nock (so text is stable)

### Task 6 - Mock Error
1. Assert mock 404 response using Nock

### Task 7 - Types
1. Add Cypress custom command for amount of facts to retrieve  
E.g. `cy.catFacts(2)`  
See docs for [query parameters](https://alexwohlbruck.github.io/cat-facts/docs/endpoints/facts.html)
    - Manually add type to commands.d.ts
