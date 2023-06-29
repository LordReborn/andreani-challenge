import Home from "./page";

describe("<Home />", () => {
  it("render", () => {
    cy.mount(<Home />);
    cy.get("button").contains("Crear nueva card").should("exist");
  });

  it("open/close modal", () => {
    cy.mount(<Home />);
    cy.get("button").contains("Crear nueva card").click();
    cy.get("dialog").should("be.visible");
    cy.get("button").contains("✕").click();
    cy.get("dialog").should("not.be.visible");
  });

  it("create new card", () => {
    cy.mount(<Home />);
    cy.get("button").contains("Crear nueva card").click();
    cy.get("input[name=title]").type("Titulo de prueba");
    cy.get("input[name=description]").type("Descripcion de prueba");
    cy.get("button")
      .contains(/^Crear$/)
      .click();
    cy.get("h1").contains("Titulo de prueba").should("exist");
    cy.get("p").contains("Descripcion de prueba").should("exist");
  });

  it("drag and drop", () => {
    cy.mount(<Home />);
    cy.get("button").contains("Crear nueva card").click();
    cy.get("input[name=title]").type("Titulo de prueba");
    cy.get("input[name=description]").type("Descripcion de prueba");
    cy.get("button")
      .contains(/^Crear$/)
      .click();
    const dataTransfer = new DataTransfer();
    cy.get("div[draggable=true]").trigger("dragstart", { dataTransfer });
    cy.get("section>div").eq(1).trigger("drop", { dataTransfer });
    cy.get("section>div").eq(1).should("contain", "Titulo de prueba");
  });
});
