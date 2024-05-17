import data from "../../submissionData.json"; // do not create this file
// const data = [{ submission_link: "http://localhost:3000", id: "aditya" }];
import db from "../fixtures/seedDatabase.json";
import postData from "../fixtures/postData.json";

data.forEach(({ submission_link: url, id }) => {
  describe("Library Management", () => {
    let acc_score = 1;
    beforeEach(() => {
      Cypress.on("uncaught:exception", (err, runnable) => {
        return false;
      });
      if (url.charAt(url.length - 1) != "/") {
        url = url + "/";
      }
    });

    it("GET request is made on homepage to fetch the posts data", () => {
      cy.intercept("GET", "**/posts", db).as("getRequest");
      cy.visit(url);
      cy.wait("@getRequest").then(({ request, response }) => {
        expect(response.statusCode).to.eq(200);
        expect(response.body.length).to.eq(4);
      });
      cy.then(() => {
        acc_score += 1;
      });
    });

    it("All the response from the server should be displayed on home page", () => {
      cy.intercept("GET", "**/posts", db).as("getRequest");
      cy.visit(url);
      cy.wait("@getRequest").then(() => {
        cy.get("[data-testid=post-list]").children().should("have.length", 4);
      });
      cy.then(() => {
        acc_score += 1;
      });
    });

    it("Correct page name should be displayed on the navbar on homepage", () => {
      cy.visit(url);
      cy.get("[data-testid=page-name]").should("have.text", "Home Page");
      cy.then(() => {
        acc_score += 1;
      });
    });

    it("Correct page name should be displayed on the navbar on add-post page", () => {
      cy.visit(`${url}add-post`);
      cy.get("[data-testid=page-name]").should("have.text", "Add Post Page");
      cy.then(() => {
        acc_score += 1;
      });
    });

    it("Form should be present to take post details on add-post page", () => {
      cy.visit(`${url}add-post`);
      cy.get("form").should("exist");
      cy.get("input.post-name").should("exist");
      cy.get("input.post-image").should("exist");
      cy.get("input.post-author").should("exist");
      cy.get("input.post-content").should("exist");
      cy.get("select.post-category").should("exist");
      cy.get("button.submit-form").should("exist");
      cy.then(() => {
        acc_score += 1;
      });
    });

    it("User should be able to add new post to the database", () => {
      cy.intercept("GET", "**/posts", db).as("getRequest");
      cy.visit(`${url}add-post`);
      cy.intercept("POST", "**/posts**", postData).as("postRequest");
      cy.get("input.post-name").type("Intro to Typescript");
      cy.get("input.post-image").type(
        "https://www.datocms-assets.com/45470/1631110818-logo-react-js.png"
      );
      cy.get("input.post-author").type("Test Author");
      cy.get("input.post-content").type("Let's learn typescript");
      cy.get("select.post-category").select("JS");
      cy.get("button.submit-form")
        .click()
        .then(() => {
          cy.wait("@postRequest").then(({ request, response }) => {
            expect(response.statusCode).to.eq(200);
            expect(response.body.name).to.eq(postData.name);
            expect(response.body.image).to.eq(postData.image);
            expect(response.body.author).to.eq(postData.author);
            expect(response.body.content).to.eq(postData.content);
            expect(response.body.category).to.eq(postData.category);
            expect(response.body.like).to.eq(postData.like);
            expect(response.body.dislike).to.eq(postData.dislike);
          });
        });
      cy.then(() => {
        acc_score += 2;
      });
    });

    it("Patch request should be made and DOM should be updated when like button is clicked", () => {
      cy.visit(url);
      cy.intercept("GET", "**/posts", db).as("getRequest");
      cy.intercept("PATCH", "**/posts/1", {
        ...db[0],
        like: db[0].like + 1,
      }).as("patchRequest");
      cy.get("[data-testid=like-button]").eq(0).click();
      cy.wait("@patchRequest");
      cy.get(".post-like")
        .eq(0)
        .should("have.text", db[0].like + 1);
      cy.then(() => {
        acc_score += 2;
      });
    });

    it("Patch request should be made and DOM should be updated when dislike button is clicked", () => {
      cy.visit(url);
      cy.intercept("GET", "**/posts", db).as("getRequest");
      cy.intercept("PATCH", "**/posts/2", {
        ...db[1],
        dislike: db[1].dislike + 1,
      }).as("patchRequest");
      cy.get("[data-testid=dislike-button]").eq(1).click();
      cy.wait("@patchRequest");
      cy.get(".post-dislike")
        .eq(1)
        .should("have.text", db[1].dislike + 1);
      cy.then(() => {
        acc_score += 2;
      });
    });

    it("Delete request should be made and DOM should be updated when delete button is clicked", () => {
      cy.intercept("GET", "**/posts", db).as("getRequest");
      cy.intercept("DELETE", "**/posts/2", {}).as("deleteRequest");
      cy.get("[data-testid=delete-button]").eq(1).click();
      cy.wait("@deleteRequest");
      cy.get("[data-testid=post-list]").children().should("have.length", 3);
      cy.get(".post-name").eq(1).should("not.have.text", "Intro to Css");
      cy.then(() => {
        acc_score += 2;
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
