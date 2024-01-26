import Tag from "@/components/dynamic/admin/Tag";
import { COLORS } from "@/data/dynamic/Tags";

describe("Tag", () => {
  it("Accept", () => {
    const color = COLORS["accept"];
    const onClick = cy.stub();
    const text = "Accept";

    cy.mount(<Tag color={color} text={text} onClick={onClick} />);
    cy.get('[data-cy="Accept-tag"]').contains("Accept");
    cy.get('[data-cy="Accept-tag"]').should(
      "have.class",
      "bg-citrus-green-100",
      "text-citrus-green-200",
      "hover:shadow-[inset_0px_0px_0px_2px_#00AFB9]"
    );
    cy.get('[data-cy="Accept-tag"]')
      .click()
      .then(() => expect(onClick).to.be.called);
  });

  it("Pending", () => {
    const color = COLORS["pending"];
    const onClick = cy.stub();
    const text = "Pending";

    cy.mount(<Tag color={color} text={text} onClick={onClick} />);
    cy.get('[data-cy="Pending-tag"]').contains("Pending");
    cy.get('[data-cy="Pending-tag"]').should(
      "have.class",
      "bg-citrus-yellow/20",
      "text-citrus-yellow",
      "hover:shadow-[inset_0px_0px_0px_2px_#FFB800]"
    );
    cy.get('[data-cy="Pending-tag"]')
      .click()
      .then(() => expect(onClick).to.be.called);
  });

  it("Reject", () => {
    const color = COLORS["reject"];
    const onClick = cy.stub();
    const text = "Reject";

    cy.mount(<Tag color={color} text={text} onClick={onClick} />);
    cy.get('[data-cy="Reject-tag"]').contains("Reject");
    cy.get('[data-cy="Reject-tag"]').should(
      "have.class",
      "bg-citrus-red/20",
      "text-citrus-red",
      "hover:shadow-[inset_0px_0px_0px_2px_#E13636]"
    );
    cy.get('[data-cy="Reject-tag"]')
      .click()
      .then(() => expect(onClick).to.be.called);
  });

  it("Custom Classes", () => {
    const color = COLORS["accept"];
    const onClick = cy.stub();
    const text = "Accept";

    cy.mount(
      <Tag
        color={color}
        text={text}
        onClick={onClick}
        classes="border-2 border-black"
      />
    );
    cy.get('[data-cy="Accept-tag"]').contains("Accept");
    cy.get('[data-cy="Accept-tag"]').should(
      "have.class",
      "bg-citrus-green-100",
      "text-citrus-green-200",
      "hover:shadow-[inset_0px_0px_0px_2px_#30503D]"
    );
    cy.get('[data-cy="Accept-tag"]')
      .click()
      .then(() => expect(onClick).to.be.called);
  });

  it("No onClick", () => {
    const color = COLORS["accept"];
    const text = "Accept";

    cy.mount(<Tag color={color} text={text} />);
    cy.get('[data-cy="Accept-tag"]').contains("Accept");
    cy.get('[data-cy="Accept-tag"]').should(
      "have.class",
      "bg-citrus-green-100",
      "text-citrus-green-200"
    );
    cy.get('[data-cy="Accept-tag"]').should(
      "not.have.class",
      "hover:shadow-[inset_0px_0px_0px_2px_#00AFB9]"
    );
  });
});
