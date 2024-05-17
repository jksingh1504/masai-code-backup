import data from "../../submissionData.json"; // do not create this file
// const data = [{ submission_link: "http://localhost:3000", id: "aditya" }];
import db from "../fixtures/seedDatabase.json";
import postData from "../fixtures/postData.json";

data.forEach(({ submission_link: url, id, json_server_link: server_url }) => {
  describe("empty spec", () => {
    let acc_score = 1;
    beforeEach(() => {
      cy.visit(url);
      Cypress.on("uncaught:exception", (err, runnable) => {
        return false;
      });
      if (url.charAt(url.length - 1) != "/") {
        url = url + "/";
      }
    });

    it("Correct page name should be displayed on the navbar on homepage", () => {
      cy.get("[data-testid=page-name]").should("have.text", "Home Page");
      cy.then(() => {
        acc_score += 1;
      });
    });

    it("Form should be present to take Quiz problem details on Home page", () => {
      cy.get("form").should("exist");
      cy.get("input.problem-statement").should("exist");
      cy.get("input.option-a").should("exist");
      cy.get("input.option-b").should("exist");
      cy.get("input.option-c").should("exist");
      cy.get("input.option-d").should("exist");
      cy.get("select.correct-option").should("exist");
      cy.get("input.weightage").should("exist");
      cy.get("button.submit-form").should("exist");
      cy.then(() => {
        acc_score += 1;
      });
    });

    it("User should be able to add quiz problem to the database", () => {
      cy.visit(`${url}`);
      cy.intercept("POST", "**/quizes**", postData).as("postRequest");
      cy.get("input.problem-statement").type("What is JSX in React?");
      cy.get("input.option-a").type("JavaScript Syntax Extension");
      cy.get("input.option-b").type("JavaScript XML");
      cy.get("input.option-c").type("JavaScript Extension");
      cy.get("input.option-d").type("None");
      cy.get("select.correct-option").select("B");
      cy.get("input.weightage").type(7);
      cy.get("button.submit-form")
        .click()
        .then(() => {
          cy.wait("@postRequest").then(({ request, response }) => {
            expect(response.statusCode).to.eq(200);
            expect(response.body.problem).to.eq(postData.problem);
            expect(response.body.a).to.eq(postData.a);
            expect(response.body.b).to.eq(postData.b);
            expect(response.body.c).to.eq(postData.c);
            expect(response.body.d).to.eq(postData.d);
            expect(response.body.correct).to.eq(postData.correct);
            expect(response.body.weightage).to.eq(postData.weightage);
          });
        });
      cy.then(() => {
        acc_score += 2;
      });
    });

    it("GET request is made on All Problems page to fetch the quiz data", () => {
      cy.visit(`${url}all-problems`);
      cy.intercept("GET", "**/quizes", db).as("getRequest");
      cy.wait("@getRequest").then(({ request, response }) => {
        expect(response.statusCode).to.eq(200);
        expect(response.body.length).to.eq(10);
      });
      cy.then(() => {
        acc_score += 1;
      });
    });

    it("All the response from the server should be displayed on All Problems page", () => {
      cy.visit(`${url}all-problems`);
      cy.intercept("GET", "**/quizes", db).as("getRequest");
      cy.wait("@getRequest");
      cy.get("[data-testid=problem-list]").children().should("have.length", 10);
      cy.then(() => {
        acc_score += 1;
      });
    });

    it("Problem Card should have all the required data in correct format", () => {
      cy.visit(`${url}all-problems`);
      cy.intercept("GET", "**/quizes", db).as("getRequest");
      cy.get(".problem-statement").eq(0).should("have.text", "What is React?");
      cy.get(".problem-statement")
        .eq(5)
        .should("have.text", "What is the concept of props in React?");
      cy.get(".option-a")
        .eq(1)
        .should("have.text", "A: JavaScript Syntax Extension");
      cy.get(".option-b")
        .eq(4)
        .should("have.text", "B: Render components faster");
      cy.get(".option-c")
        .eq(7)
        .should("have.text", "C: Creating reusable components");
      cy.get(".correct-option").eq(7).should("have.text", "Correct: a");
      cy.get(".marks").eq(7).should("have.text", "Marks: 9");
      cy.then(() => {
        acc_score += 2;
      });
    });

    it("Correct page name should be displayed on the navbar on All Problems page", () => {
      cy.visit(`${url}all-problems`);
      cy.get("[data-testid=page-name]").should("have.text", "All Problems");
      cy.then(() => {
        acc_score += 1;
      });
    });

    it("Patch request should be made and DOM should be updated when weightage+ button is clicked-1", () => {
      cy.visit(`${url}all-problems`);
      cy.intercept("GET", "**/quizes", db).as("getRequest");
      cy.intercept("PATCH", "**/quizes/1", {
        ...db[0],
        weightage: db[0].weightage + 1,
      }).as("patchRequest");
      cy.get("[data-testid=increase-weightage]").eq(0).click();
      cy.wait("@patchRequest");
      cy.get(".marks")
        .eq(0)
        .should("have.text", `Marks: ${db[0].weightage + 1}`);
      cy.then(() => {
        acc_score += 1;
      });
    });

    it("Patch request should be made and DOM should be updated when weightage+ button is clicked-2", () => {
      cy.visit(`${url}all-problems`);
      cy.intercept("GET", "**/quizes", db).as("getRequest");
      cy.intercept("PATCH", "**/quizes/5", {
        ...db[4],
        weightage: db[4].weightage + 1,
      }).as("patchRequest");
      cy.get("[data-testid=increase-weightage]").eq(4).click();
      cy.wait("@patchRequest");
      cy.get(".marks")
        .eq(4)
        .should("have.text", `Marks: ${db[4].weightage + 1}`);
      cy.then(() => {
        acc_score += 1;
      });
    });

    it("Patch request should be made and DOM should be updated when weightage- button is clicked-1", () => {
      cy.visit(`${url}all-problems`);
      cy.intercept("GET", "**/quizes", db).as("getRequest");
      cy.intercept("PATCH", "**/quizes/2", {
        ...db[1],
        weightage: db[1].weightage - 1,
      }).as("patchRequest");
      cy.get("[data-testid=decrease-weightage]").eq(1).click();
      cy.wait("@patchRequest");
      cy.get(".marks")
        .eq(1)
        .should("have.text", `Marks: ${db[1].weightage - 1}`);
      cy.then(() => {
        acc_score += 1;
      });
    });

    it("Patch request should be made and DOM should be updated when weightage- button is clicked-2", () => {
      cy.visit(`${url}all-problems`);
      cy.intercept("GET", "**/quizes", db).as("getRequest");
      cy.intercept("PATCH", "**/quizes/4", {
        ...db[3],
        weightage: db[3].weightage - 1,
      }).as("patchRequest");
      cy.get("[data-testid=decrease-weightage]").eq(3).click();
      cy.wait("@patchRequest");
      cy.get(".marks")
        .eq(3)
        .should("have.text", `Marks: ${db[3].weightage - 1}`);
      cy.then(() => {
        acc_score += 1;
      });
    });

    it(`generate score`, () => {
      console.log("final score:", acc_score);
      //////////// Do not change this
      let result = {
        id,
        marks: Math.ceil(acc_score),
      };
      result = JSON.stringify(result);
      cy.writeFile("results.json", `\n${result},`, { flag: "a+" }, (err) => {
        if (err) {
          console.error(err);
        }
      });
      ////////////////
    });
  });
});
