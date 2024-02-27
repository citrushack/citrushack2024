import response from "../../../fixtures/sponsors.json";

const sponsors = response.items;

describe("Sponsors Filters", () => {
  beforeEach(() => {
    cy.fetch({
      role: "admins",
      portal: "admin",
      page: "sponsors",
    });
  });

  it("Default Filters", () => {
    cy.get('[data-cy="pending-filter"]')
      .get("div")
      .should("have.class", "bg-black", "text-white");
    cy.get('[data-cy="rejected-filter"]')
      .get("div")
      .should("have.class", "bg-black", "text-white");
    cy.get('[data-cy="accepted-filter"]')
      .get("div")
      .should("have.class", "bg-black", "text-white");
  });

  it("Click Filters", () => {
    cy.get('[data-cy="pending-filter"]').click();
    cy.get('[data-cy="pending-filter"]')
      .get("div")
      .should("have.class", "text-black", "bg-white");
    cy.get('[data-cy="rejected-filter"]').click();
    cy.get('[data-cy="rejected-filter"]')
      .get("div")
      .should("have.class", "text-black", "bg-white");
    cy.get('[data-cy="accepted-filter"]').click();
    cy.get('[data-cy="accepted-filter"]')
      .get("div")
      .should("have.class", "text-black", "bg-white");
  });

  it("Click Confirm", () => {
    cy.get('[data-cy="accepted-filter"]').click();
    sponsors.forEach((sponsor) => {
      if (sponsor.status === 1)
        cy.get(`[data-cy="${sponsor.uid}"]`).should("not.exist");
      else cy.get(`[data-cy="${sponsor.uid}"]`).should("exist");
    });
  });

  it("Click Not Attending", () => {
    cy.get('[data-cy="rejected-filter"]').click();
    sponsors.forEach((sponsor) => {
      if (sponsor.status === -1)
        cy.get(`[data-cy="${sponsor.uid}"]`).should("not.exist");
      else cy.get(`[data-cy="${sponsor.uid}"]`).should("exist");
    });
  });

  it("Click Pending", () => {
    cy.get('[data-cy="pending-filter"]').click();
    sponsors.forEach((sponsor) => {
      if (sponsor.status === 0)
        cy.get(`[data-cy="${sponsor.uid}"]`).should("not.exist");
      else cy.get(`[data-cy="${sponsor.uid}"]`).should("exist");
    });
  });

  it("Click 2 Filters", () => {
    cy.get('[data-cy="accepted-filter"]').click();
    cy.get('[data-cy="rejected-filter"]').click();
    sponsors.forEach((sponsor) => {
      if (sponsor.status === 1 || sponsor.status === -1)
        cy.get(`[data-cy="${sponsor.uid}"]`).should("not.exist");
      else cy.get(`[data-cy="${sponsor.uid}"]`).should("exist");
    });
  });
});
