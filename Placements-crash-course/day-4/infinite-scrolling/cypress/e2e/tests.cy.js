import data from "../../submissionData.json";
//let data = [{ submission_link: "http://localhost:8080", id: 67890 }];

/// <reference types="cypress" />

// let baseServerURL = Cypress.env("serverUrl");

data.map(({ submission_link: url, id }) => {
  describe("Test", () => {
    let acc_score = 1;

    beforeEach(() => {
      Cypress.on("uncaught:exception", (err, runnable) => {
        return false;
      });
    });

    it("should check if recipe data is being fetched with a limit of 5", () => {
      cy.intercept("GET", `**/recipes?**`).as("getRecipesData");
      cy.visit(url);
      
      cy.get("#fetch-recipes").click({ force: true });
      cy.wait("@getRecipesData").then(() => {
        cy.get(".data-list-wrapper").children().should("have.length", 5);
      });
      cy.then(() => {
        acc_score += 2;
      });
    });

    it("should verify the rendering of the first five recipe cards", () => {
      cy.fixture("backupData.json").then((res) => {
        cy.get(".recipe-card").should("have.length.gt", 0);
        for (let i = 0; i < 5; i++) {
          const recipe = res.recipes[i];
          cy.get(".recipe-card")
            .eq(i)
            .within(() => {
              cy.get(".recipe-image img")
                .should("have.attr", "src")
                .and("include", "https://source.unsplash.com/500x300?food");
              cy.get(".recipe-details .recipe-name")
                .should("have.text", recipe.name)
                .and("not.be.empty");
              cy.get(".recipe-details .recipe-price")
                .should("have.text", recipe.price)
                .and("not.be.empty");
            });
        }
      });
      cy.then(() => {
        acc_score += 2;
      });
    });

    it("should check whether infinite scrolling is working and the total results are updating in real-time", () => {
      // Intercept the API call
      cy.intercept("GET", `**/recipes?**`).as("getRecipesData");
      // Visit the URL
      cy.visit(url);

      

      // Click the "Fetch Recipes" button
      cy.get("#fetch-recipes").click({ force: true });

      // Wait for the initial request to complete
      cy.wait("@getRecipesData").then(() => {
        // Assert that initially, there are 5 items
        cy.get(".data-list-wrapper").children().should("have.length", 5);

        // Scroll to bottom
        cy.scrollTo("bottom");

        // Wait for the second request to complete
        cy.wait("@getRecipesData").then(() => {
          // Assert that now there are 10 items
          cy.get(".data-list-wrapper").children().should("have.length", 10);

          // You can repeat the process for additional sets of items if needed
          // Uncomment the following lines and adjust as per your application behavior

          // cy.scrollTo("bottom");
          // cy.wait("@getRecipesData").then(() => {
          //   cy.get(".data-list-wrapper").children().should("have.length", 15);
          // });
        });
      });

      cy.then(() => {
        acc_score += 3;
      });
    });

    // it("should check if the total results are getting updated in real-time", () => {
    //   cy.visit(url);
    //   cy.intercept("GET", `**/recipes?**`).as("getRecipesData");
    //   cy.get("#fetch-recipes").click({ force: true });
    //   cy.wait("@getRecipesData").then(() => {
    //     cy.get(".data-list-wrapper").children().should("have.length", 5);
    //   });

    //   cy.get(window).scrollTo("bottom")

    //   cy.wait("@getRecipesData")
    //   cy.wait(200)
    //   cy.get(window).scrollTo("bottom");

    //   cy.wait("@getRecipesData")
    //   cy.wait(200)
    //   cy.get(".total-results").should("have.text", 15);
    //   cy.get(window).scrollTo("bottom");
    //   cy.wait("@getRecipesData").then((res) => {
    //     cy.wait(500).then((res) => {
    //       cy.get(".data-list-wrapper").children().should("have.length", 20);
    //       cy.get(".total-results").should("have.text", 20);
    //     });
    //   });
    //   cy.then(() => {
    //     acc_score += 1;
    //   });
    // });

    it("should update total results on button click and scrolling", () => {
      cy.intercept("GET", `**/recipes?**`).as("getRecipesData");
      cy.visit(url);

      

      cy.get("#fetch-recipes").click({ force: true });
      cy.wait(500).then(() => {
        cy.wait("@getRecipesData").then(() => {
          cy.get(".total-results").should("have.text", "5");

          cy.intercept("GET", `**/recipes?**`).as("scrollGetRecipesData");

          cy.scrollTo("bottom");

          cy.wait("@scrollGetRecipesData").then(() => {
            cy.get(".total-results").should("have.text", "10");
          });
        });
        
      });
      cy.then(() => {
        acc_score += 2;
      });
    });

    it(`generate score`, () => {
      //////////////
      console.log(acc_score);
      let result = {
        id,
        marks: Math.floor(acc_score),
      };
      result = JSON.stringify(result);
      cy.writeFile("results.json", `\n${result},`, { flag: "a+" }, (err) => {
        if (err) {
          console.error(err);
        }
      });
      //////////////////
    });
  }); // describe
});
