import response from "../../../fixtures/volunteers.json";

const volunteers = response.items;
const five = volunteers.slice(0, 5);

describe("Volunteers Select", () => {
  beforeEach(() => {
    cy.fetch({
      role: "admins",
      portal: "admin",
      page: "volunteers",
    });
  });

  it("Select All", () => {
    cy.get('[data-cy="header"]').find('[data-cy="checkbox"]').click();
    volunteers.forEach((volunteer) => {
      cy.get(`[data-cy="${volunteer.uid}"]`).should(
        "have.class",
        "bg-citrus-green-100/30"
      );
    });
  });

  it("Select First 5 Entries", () => {
    five.map((volunteer) =>
      cy
        .get(`[data-cy="${volunteer.uid}"]`)
        .find('[data-cy="checkbox"]')
        .click()
    );
    volunteers.forEach((volunteer, index) => {
      if (index < 5)
        cy.get(`[data-cy="${volunteer.uid}"]`).should(
          "have.class",
          "bg-citrus-green-100/30"
        );
      else
        cy.get(`[data-cy="${volunteer.uid}"]`).should(
          "have.class",
          "bg-gray-200"
        );
    });
  });
});
