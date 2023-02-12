/// <reference types="cypress" />
import React from 'react'

import SimpleForm from './Forms'

// o componente forms foi criado para que eu pudesse aplicar o conteudo do curso.
describe('Forms', () => {
  beforeEach(() => {
    const onSubmitSpy = cy.spy().as("onSubmitSpy");
    cy.mount(<SimpleForm onSubmit={onSubmitSpy} />);
  })

  it("Should mount the component", () => {
    cy.get("[data-testid=form-container]").should("exist");
  });

  it("Should have an placeholder input", () => {
    cy.get("[aria-label=email]").should("exist");
    cy.get("[aria-label=name]").should("exist");

    cy.get("[aria-label=email]").should("have.attr", "placeholder", "Enter your email");
    cy.get("[aria-label=name]").should("have.attr", "placeholder", "Enter your name");
  });

  it("Should be able to write inside the input", () => {
    cy.get("[aria-label=email]").type("italo@gmail.com");
    cy.get("[aria-label=name]").type("Italo");
  });

  it("Should be able to click on submit and fire a submit event with input values", () => {
    cy.get("[aria-label=name]").type("Italo");
    cy.get("[aria-label=email]").type("italo@gmail.com");

    cy.get("[aria-label=submit-btn]").click();

    cy.get("@onSubmitSpy").should("have.been.calledOnceWith", {
      name: "Italo",
      email: "italo@gmail.com",
    });
  });
});