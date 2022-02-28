/* eslint-disable no-loop-func */
/* eslint-disable no-undef */
// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
Cypress.Commands.add("addById", (id, iter = 1) => {
  if (typeof id === "string") {
    for (let i = 0; i < iter; i++) {
      cy.get(`#${id}`).contains("add to cart").click();
    }
  } else if (Array.isArray(id)) {
    for (let i = 0; i < iter; i++) {
      id.forEach((item) => {
        cy.get(`#${item}`).contains("add to cart").click();
      });
    }
  } else throw new Error("wrong format. 'id' must be of type Array or String");
});
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
