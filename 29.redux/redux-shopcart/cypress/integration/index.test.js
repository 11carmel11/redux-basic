/* eslint-disable no-undef */
describe("test add to cart", function () {
  beforeEach(() => {
    cy.visit("http://localhost:3000");
  });

  it("should add banana on click", function () {
    cy.get("#banana")
      .contains("add to cart")
      .click()
      .parents()
      .contains("banana - $ 5 x 14");

    cy.get("#cart").contains("banana - $ 5 x 1");
  });

  it("should add apple on click", function () {
    cy.get("#apple")
      .contains("add to cart")
      .click()
      .parents()
      .contains("apple - $ 3 x 14");

    cy.get("#cart").contains("apple - $ 3 x 1");
  });

  it("should give the total price", function () {
    cy.get("#banana").contains("add to cart").click();
    cy.get("#banana").contains("add to cart").click();

    cy.get("#apple").contains("add to cart").click();
    cy.get("#apple").contains("add to cart").click();

    cy.get("#cart").contains("Total price: $ 16");
    cy.get("#cart").contains("banana - $ 5 x 2");
    cy.get("#cart").contains("apple - $ 3 x 2");
  });

  it("should be unable to over-click an add button", function () {
    for (let i = 0; i < 15; i++) {
      cy.get("#banana").contains("add to cart").click();
    }

    cy.get("#cart").contains("banana - $ 5 x 15");
    cy.get("#cart").contains("Total price: $ 75");

    cy.get("#banana").contains("add to cart").should("be.disabled");
  });

  it("should checkout", function () {
    cy.get("#banana").contains("add to cart").click();
    cy.get("#banana").contains("add to cart").click();

    cy.get("#apple").contains("add to cart").click();
    cy.get("#apple").contains("add to cart").click();

    cy.get("#checkout-btn").click();

    cy.get("#cart").contains("Total price: $ 0");
    cy.get("#cart").contains("please add items to cart");

    cy.get("#banana").contains("banana - $ 5 x 13");
  });
});
