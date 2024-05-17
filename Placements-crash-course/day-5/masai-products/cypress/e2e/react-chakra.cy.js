/* eslint-disable no-undef */

import data from "../../submissionData.json"; // do not create this file

import page1Data from "../fixtures/page1Data.json";
import page5Data from "../fixtures/page5Data.json";
import page7Data from "../fixtures/page7Data.json";
import page1DataAsc from "../fixtures/page1DataAsc.json";
import page1DataDesc from "../fixtures/page1DataDesc.json";
import page1FilterMen from "../fixtures/page1FilterMen.json";
import page7DataDesc from "../fixtures/page7DataDesc.json";
import page1FilterWomen from "../fixtures/page1FilterWomen.json";
import page1DescKids from "../fixtures/page1DescKids.json";

// const data = [
//   {
//     submission_link: "http://localhost:3000",
//     id: "shanti-local",
//     json_server_link: `http://localhost:8080/`,
//   },
// ];
const getInitialState = (win) => win.reducerInitialState;
const getReducer = (win) => win.reducer;

const initialStateCheck = {
  loading: false,
  err: false,
  res: {},
};
const loginApi =
  "https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/login";
const productsApi =
  "https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/get-products";

data.forEach(({ submission_link: url, id, json_server_link: server_url }) => {
  describe("React-Masai-Products", function () {
    let acc_score = 1;

    beforeEach(() => {
      if (url.charAt(url.length - 1) != "/") {
        url = url + "/";
      }
      if (server_url.charAt(server_url.length - 1) != "/") {
        server_url = server_url + "/";
      }
      Cypress.on("uncaught:exception", (err, runnable) => {
        return false;
      });
    });

    it("Check for the initial state of the reducer and reducer is returning correct error for invalid action type", () => {
      cy.visit(url);
      cy.window()
        .then(getInitialState)
        .should("exist")
        .should("deep.equal", initialStateCheck);
      cy.window().then(getReducer).should("exist");
      cy.window()
        .then(getReducer)
        .then((res) => {
          try {
            res(initialStateCheck, { type: "invalid" });
            // If the execution reaches this line, it means no error was thrown
            expect.fail("No error was thrown");
          } catch (error) {
            expect(error.message).to.equal("invalid action type");
          }
        });
      cy.then(() => {
        acc_score += 1;
      });
    });

    it("Check whether Home page is having basic structure", () => {
      cy.visit(url);
      cy.get(`[data-cy="home"] h3`)
        .eq(0)
        .should("have.class", "chakra-heading")
        .contains("Welcome Guest");
      cy.get(`[data-cy="home"] a`)
        .should("have.class", "chakra-link")
        .should("have.text", `Go to Products Page`);
      cy.then(() => {
        acc_score += 1;
      });
    });

    it("Check Login functionality and also updating context API and home page with token in real time", () => {
      cy.intercept("POST", loginApi).as("postLoginRequest");
      cy.visit(url + `login`);
      cy.get("form")
        .should("exist")
        .within(() => {
          //wrong password
          cy.get(`input[name="email"]`)
            .should("have.class", "chakra-input")
            .clear()
            .type("bruce@wayne.com");
          cy.get(`input[name="password"]`)
            .should("have.class", "chakra-input")
            .clear()
            .type("gotham");
          cy.get("button").click({ force: true });
          cy.wait("@postLoginRequest").then(() => {
            cy.wait(1000).then(() => {
              cy.get(`input[name="email"]`).should("exist");
              cy.get(`input[name="password"]`).should("exist");
              cy.url().should("include", "login");
            });
          });
        });
      //correct credentials
      let token = "r0bINJoKeRGoTham911";
      cy.get(`input[name="email"]`).clear().type("bruce@wayne.com");
      cy.get(`input[name="password"]`).clear().type("gotham123");
      cy.get("button").click({ force: true });
      cy.wait("@postLoginRequest").then(() => {
        cy.wait(500).then(() => {
          cy.get(`input[name="email"]`).should("not.exist");
          cy.get(`input[name="password"]`).should("not.exist");
          cy.url().should("not.include", "login");
          cy.get(`[data-cy="home"] h3`).should("contain", token);
        });
      });
      cy.then(() => {
        acc_score += 2;
      });
    });

    it("Check all the products details are correctly rendered", () => {
      cy.intercept("GET", `${productsApi}?**`).as("getProducts");
      cy.visit(url + `products`);
      cy.wait("@getProducts").then(() => {
        cy.get('[data-cy="product-card"]')
          .should("have.length", 6)
          .each((ele, ind) => {
            if (ind % 2 === 0) {
              const product = page1Data.data[ind];
              cy.wrap(ele).within(() => {
                cy.get("img").should("have.attr", "src", product.image);
                cy.get("p").eq(0).should("contain", product.title);
                cy.get("p").eq(1).should("contain", product.brand);
                cy.get("p").eq(2).should("contain", product.category);
                cy.get("p").eq(3).should("contain", product.price);
                cy.get("button")
                  .should("exist")
                  .should("contain", "View in Modal");
              });
            }
          });
      });
      cy.then(() => {
        acc_score += 2;
      });
    });

    it("Check whether View in Modal is working for products cards or not", () => {
      cy.intercept("GET", `${productsApi}?**`).as("getProducts");
      cy.visit(url + `products`);
      cy.wait("@getProducts").then(() => {
        cy.get(`[data-cy="product-card"]`).should("have.length", 6);
        let product = page1Data.data[4];
        cy.get(`[data-cy="product-card"] button`).eq(4).click({ force: true });
        cy.wait(1000).then(() => {
          cy.get(".chakra-modal__header")
            .should("be.visible")
            .should("contain", product.title);
          cy.get(".chakra-modal__body")
            .should("be.visible")
            .within(() => {
              cy.get("img").should("have.attr", "src", product.image);
              cy.get("p").eq(0).should("contain", product.title);
              cy.get("p").eq(1).should("contain", product.brand);
              cy.get("p").eq(2).should("contain", product.category);
              cy.get("p").eq(3).should("contain", product.price);
            });
        });
      });
      cy.then(() => {
        acc_score += 2;
      });
    });

    it("Check whether sorting functionality is working or not", () => {
      cy.intercept("GET", `${productsApi}?**`).as("getProducts");
      cy.visit(url + `products`);
      cy.wait("@getProducts").then(() => {
        cy.get("select")
          .should("have.class", "chakra-select")
          .eq(0)
          .select("Ascending");
        cy.wait("@getProducts").then(() => {
          cy.get('[data-cy="product-card"]')
            .should("have.length", 6)
            .each((ele, ind) => {
              if (ind % 2 === 0) {
                const product = page1DataAsc.data[ind];
                cy.wrap(ele).within(() => {
                  cy.get("img").should("have.attr", "src", product.image);
                  cy.get("p").eq(0).should("contain", product.title);
                  cy.get("p").eq(1).should("contain", product.brand);
                  cy.get("p").eq(2).should("contain", product.category);
                  cy.get("p").eq(3).should("contain", product.price);
                  cy.get("button")
                    .should("exist")
                    .should("contain", "View in Modal");
                });
              }
            });
        });
        cy.get("select")
          .should("have.class", "chakra-select")
          .eq(0)
          .select("Descending");
        cy.wait("@getProducts").then(() => {
          cy.get('[data-cy="product-card"]')
            .should("have.length", 6)
            .each((ele, ind) => {
              if (ind % 2 === 0) {
                const product = page1DataDesc.data[ind];
                cy.wrap(ele).within(() => {
                  cy.get("img").should("have.attr", "src", product.image);
                  cy.get("p").eq(0).should("contain", product.title);
                  cy.get("p").eq(1).should("contain", product.brand);
                  cy.get("p").eq(2).should("contain", product.category);
                  cy.get("p").eq(3).should("contain", product.price);
                  cy.get("button")
                    .should("exist")
                    .should("contain", "View in Modal");
                });
              }
            });
        });
      });
      cy.then(() => {
        acc_score += 1;
      });
    });

    it("Check whether filter functionality is working or not", () => {
      cy.intercept("GET", `${productsApi}?**`).as("getProducts");
      cy.visit(url + `products`);
      cy.wait("@getProducts").then(() => {
        cy.get("select")
          .should("have.class", "chakra-select")
          .eq(1)
          .select("Men");
        cy.wait("@getProducts").then(() => {
          cy.get('[data-cy="product-card"]')
            .should("have.length", 6)
            .each((ele, ind) => {
              if (ind % 2 === 0) {
                const product = page1FilterMen.data[ind];
                cy.wrap(ele).within(() => {
                  cy.get("img").should("have.attr", "src", product.image);
                  cy.get("p").eq(0).should("contain", product.title);
                  cy.get("p").eq(1).should("contain", product.brand);
                  cy.get("p").eq(2).should("contain", product.category);
                  cy.get("p").eq(3).should("contain", product.price);
                  cy.get("button")
                    .should("exist")
                    .should("contain", "View in Modal");
                });
              }
            });
        });
        cy.get(`[data-cy="pagination"]`)
          .should("exist")
          .children()
          .should("have.length", 2);
        cy.get("select")
          .should("have.class", "chakra-select")
          .eq(1)
          .select("Women");
        cy.wait("@getProducts").then(() => {
          cy.get('[data-cy="product-card"]')
            .should("have.length", 6)
            .each((ele, ind) => {
              if (ind % 2 === 0) {
                const product = page1FilterWomen.data[ind];
                cy.wrap(ele).within(() => {
                  cy.get("img").should("have.attr", "src", product.image);
                  cy.get("p").eq(0).should("contain", product.title);
                  cy.get("p").eq(1).should("contain", product.brand);
                  cy.get("p").eq(2).should("contain", product.category);
                  cy.get("p").eq(3).should("contain", product.price);
                  cy.get("button")
                    .should("exist")
                    .should("contain", "View in Modal");
                });
              }
            });
          cy.get(`[data-cy="pagination"]`)
            .should("exist")
            .children()
            .should("have.length", 2);
        });
      });

      cy.then(() => {
        acc_score += 1;
      });
    });
    it("Check whether filter and sort functionality working together", () => {
      cy.intercept("GET", `${productsApi}?**`).as("getProducts");
      cy.visit(url + `products`);
      cy.wait("@getProducts").then(() => {
        cy.get("select")
          .should("have.class", "chakra-select")
          .eq(0)
          .select("Descending");

        cy.wait("@getProducts").then(() => {
          cy.get("select")
            .should("have.class", "chakra-select")
            .eq(1)
            .select("Kids");
          cy.wait("@getProducts").then(() => {
            cy.get('[data-cy="product-card"]')
              .should("have.length", 6)
              .each((ele, ind) => {
                if (ind % 2 === 0) {
                  const product = page1DescKids.data[ind];
                  cy.wrap(ele).within(() => {
                    cy.get("img").should("have.attr", "src", product.image);
                    cy.get("p").eq(0).should("contain", product.title);
                    cy.get("p").eq(1).should("contain", product.brand);
                    cy.get("p").eq(2).should("contain", product.category);
                    cy.get("p").eq(3).should("contain", product.price);
                    cy.get("button")
                      .should("exist")
                      .should("contain", "View in Modal");
                  });
                }
              });
          });
        });
      });
      cy.then(() => {
        acc_score += 1;
      });
    });
    it("Check whether pagination buttons are working or not", () => {
      cy.intercept("GET", `${productsApi}?**`).as("getProducts");
      cy.visit(url + `products`);

      cy.wait("@getProducts").then(() => {
        cy.get(`[data-cy="pagination"] button`).should("have.length", 7);
        cy.get(`[data-cy="pagination"] button`)
          .eq(6)
          .should("exist")
          .click({ force: true });
        cy.wait("@getProducts").then(() => {
          cy.get('[data-cy="product-card"]')
            .should("have.length", 4)
            .each((ele, ind) => {
              if (ind % 2 === 0) {
                const product = page7Data.data[ind];
                cy.wrap(ele).within(() => {
                  cy.get("img").should("have.attr", "src", product.image);
                  cy.get("p").eq(0).should("contain", product.title);
                  cy.get("p").eq(1).should("contain", product.brand);
                  cy.get("p").eq(2).should("contain", product.category);
                  cy.get("p").eq(3).should("contain", product.price);
                  cy.get("button")
                    .should("exist")
                    .should("contain", "View in Modal");
                });
              }
            });
        });
      });
      cy.get(`[data-cy="pagination"] button`)
        .eq(4)
        .should("exist")
        .click({ force: true });
      cy.wait("@getProducts").then(() => {
        cy.get('[data-cy="product-card"]')
          .should("have.length", 6)
          .each((ele, ind) => {
            if (ind % 2 === 0) {
              const product = page5Data.data[ind];
              cy.wrap(ele).within(() => {
                cy.get("img").should("have.attr", "src", product.image);
                cy.get("p").eq(0).should("contain", product.title);
                cy.get("p").eq(1).should("contain", product.brand);
                cy.get("p").eq(2).should("contain", product.category);
                cy.get("p").eq(3).should("contain", product.price);
                cy.get("button")
                  .should("exist")
                  .should("contain", "View in Modal");
              });
            }
          });
      });
      cy.then(() => {
        acc_score += 1;
      });
    });
    it("Check whether pagination along with filter is working", () => {
      cy.intercept("GET", `${productsApi}?**`).as("getProducts");
      cy.visit(url + `products`);

      cy.wait("@getProducts").then(() => {
        cy.get(`[data-cy="pagination"] button`).should("have.length", 7);
        cy.get(`[data-cy="pagination"] button`)
          .eq(6)
          .should("exist")
          .click({ force: true });
        cy.wait("@getProducts").then(() => {
          cy.get("select")
            .should("have.class", "chakra-select")
            .eq(0)
            .select("Descending");
          cy.wait("@getProducts").then(() => {
            cy.get('[data-cy="product-card"]')
              .should("have.length", 4)
              .each((ele, ind) => {
                if (ind % 2 === 0) {
                  const product = page7DataDesc.data[ind];
                  cy.wrap(ele).within(() => {
                    cy.get("img").should("have.attr", "src", product.image);
                    cy.get("p").eq(0).should("contain", product.title);
                    cy.get("p").eq(1).should("contain", product.brand);
                    cy.get("p").eq(2).should("contain", product.category);
                    cy.get("p").eq(3).should("contain", product.price);
                    cy.get("button")
                      .should("exist")
                      .should("contain", "View in Modal");
                  });
                }
              });
          });
        });
      });
      cy.then(() => {
        acc_score += 1;
      });
    });

    it("Check whether context API is getting updated in real-time and whether login Link and logout button in the navbar are working accordingly", () => {
      cy.intercept("POST", loginApi).as("postLoginRequest");
      cy.intercept("GET", `${productsApi}?**`).as("getProducts");
      cy.visit(url + `login`);
      cy.window()
        .its("store")
        .then((res) => {
          // console.log(res.authDetails )
          return res?.authDetails;
        })
        .should("deep.equal", {
          isAuth: false,
          token: "",
        });
      cy.window()
        .its("store")
        .then((res) => {
          expect(typeof res.login).to.equal("function");
          expect(typeof res.logout).to.equal("function");
        });
      cy.get(`[data-cy="navbar"] a`).should("have.length", 2);
      cy.get(`[data-cy="navbar"] a`).eq(1).should("contain", "LOGIN");
      cy.get("form")
        .should("exist")
        .within(() => {
          //correct credentials
          cy.get(`input[name="email"]`).clear().type("bruce@wayne.com");
          cy.get(`input[name="password"]`).clear().type("gotham123");
          cy.get("button").click({ force: true });
        });
      cy.wait("@postLoginRequest").then(() => {
        cy.wait(500).then(() => {
          cy.get(`[data-cy="home"] a`).click({ force: true });
        });
      });
      cy.wait("@getProducts").then(() => {
        cy.window()
          .its("store")
          .then((res) => {
            return res?.authDetails;
          })
          .should("deep.equal", {
            isAuth: true,
            token: "r0bINJoKeRGoTham911",
          });
        cy.get(`[data-cy="navbar"] a`).should("have.length", 1);
        cy.get(`[data-cy="navbar"] button`)
          .eq(0)
          .should("contain", "LOGOUT")
          .click({ force: true });
        cy.get(`[data-cy="navbar"] a`).should("have.length", 2);
        cy.get(`[data-cy="navbar"] a`).eq(1).should("contain", "LOGIN");
      });
      cy.window()
        .its("store")
        .then((res) => {
          return res?.authDetails;
        })
        .should("deep.equal", {
          isAuth: false,
          token: "",
        });
      cy.then(() => {
        acc_score += 2;
      });
    });
    it("Check reducer function for LOADING action type", () => {
      cy.visit(url);
      cy.wait(100);
      cy.window().then((win) => {
        const reducer = getReducer(win);
        let newState = reducer(
          {
            loading: false,
            err: false,
            res: {},
          },
          { type: "LOADING" }
        );
        expect(newState).to.deep.equal({
          loading: true,
          err: false,
          res: {},
        });
        newState = reducer(newState, {
          type: "SUCCESS",
          payload: { data: page1Data.data, totalPages: 7 },
        });
        expect(newState).to.deep.equal({
          loading: false,
          err: false,
          res: { data: page1Data.data, totalPages: 7 },
        });
      });
      cy.then(() => {
        acc_score += 1;
      });
    });
    it("Check reducer function for SUCCESS action type", () => {
      cy.visit(url);
      cy.wait(100);
      cy.window().then((win) => {
        const reducer = getReducer(win);
        let newState = {
          loading: true,
          err: false,
          res: {},
        };
        newState = reducer(newState, {
          type: "SUCCESS",
          payload: page1Data.data,
        });
        expect(newState).to.deep.equal({
          loading: false,
          err: false,
          res: page1Data.data,
        });
      });
      cy.then(() => {
        acc_score += 1;
      });
    });

    it("Check reducer function for ERROR action type", () => {
      cy.visit(url);
      cy.wait(100);
      cy.window().then((win) => {
        const reducer = getReducer(win);
        let newState = {
          loading: true,
          err: false,
          res: {},
        };
        newState = reducer(newState, { type: "ERROR" });
        expect(newState).to.deep.equal({
          loading: false,
          err: true,
          res: {},
        });
      });
      cy.then(() => {
        acc_score += 1;
      });
    });

    it("Check if the loading skeleton is visible while data is being fetched", () => {
      cy.intercept("GET", `${productsApi}?**`, (req, res) => {
        req.reply((res) => {
          res.delay = 1000;
        });
      }).as("getProducts");
      cy.visit(url + `products`);
      cy.get('[data-cy="loading-indicator"]').should("exist");
      cy.get('[data-cy="loading-indicator"]').within(() => {
        cy.get(".chakra-skeleton").should("exist").and("have.length", 6);
      });
      cy.wait("@getProducts").then(() => {
        cy.get('[data-cy="loading-indicator"]').should("not.exist");
      });
      cy.then(() => {
        acc_score += 2;
      });
    });
    it("Check if the ErrorMessage component exists on DOM when an API request is failed or any error occurs on Home page", () => {
      cy.intercept("GET", `${productsApi}?**`, {
        statusCode: 500, // Set the desired status code for the error scenario
        body: "Error message", // Optionally, provide an error message
        headers: { "content-type": "application/json" }, // Adjust content type if needed
      }).as("getProducts");
      cy.visit(url + `products`);
      cy.wait("@getProducts").then(() => {
        cy.get(`[data-cy="error"]`).should("exist");
        cy.get(`[data-cy="error"] div`).eq(1).should("exist");
      });
      cy.then(() => {
        acc_score += 1;
      });
    });

    // it("Check whether the Products page is protected or not", () => {
    //   cy.intercept("GET", `${productsApi}?**`).as("getProducts");
    //   cy.intercept("POST", loginApi).as("postLoginRequest");
    //   cy.visit(url);
    //   cy.url().should("not.include", "login");
    //   cy.visit(url+"products")
    //   cy.url().should("include", "login");
    //   cy.get("form")
    //     .should("exist")
    //     .within(() => {
    //       //correct credentials
    //       cy.get(`input[name="email"]`).clear().type("bruce@wayne.com");
    //       cy.get(`input[name="password"]`).clear().type("gotham123");
    //       cy.get("button").click({ force: true });
    //     });

    //     cy.wait("@postLoginRequest").then(() => {
    //       cy.wait(500).then(() => {
    //         cy.get(`[data-cy="home"] a`).click({force:true});
    //       });
    //     });
    //     cy.wait("@getProducts").then(() => {
    //       const token = "r0bINJoKeRGoTham911";
    //       cy.get(`[data-cy="products"]`)
    //         .should("exist")
    //         .within(() => {
    //           cy.get(`select[name="sort"]`).should("exist");
    //           cy.get(`select[name="filter"]`).should("exist");
    //         });
    //       cy.get('[data-cy="product-card"]').should("have.length", 6);
    //     });
    //   cy.then(() => {
    //     acc_score += 1;
    //   });
    // });

    after(() => {
      let result = {
        id,
        marks: Math.ceil(acc_score),
      };
      console.log(result);
      result = JSON.stringify(result);
      cy.writeFile("results.json", `\n${result},`, { flag: "a+" }, (err) => {
        if (err) {
          console.error(err);
        }
      });
      //////////////////
    });
  });
});
