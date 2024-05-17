/* eslint-disable no-undef */

import data from "../../submissionData.json"; // do not create this file
import booksData from "../fixtures/booksData.json";
import sortData from "../fixtures/sortData.json";
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
  data: [],
  error: false,
};
data.forEach(({ submission_link: url, id, json_server_link: server_url }) => {
  describe("React-Chakra-UI-Books-Library-useReducer", function () {
    let acc_score = 1;

    beforeEach(() => {
      if (url.charAt(url.length - 1) != "/") {
        url = url + "/";
      }
      if (server_url.charAt(server_url.length - 1) != "/") {
        server_url = server_url + "/";
      }
      cy.visit(url);
      // cy.window().its("reducerInitialState").should("exist");
    });

    it("Check for the initial state and reducer is returning state for invalid action type", () => {
      cy.window().then(getInitialState).should("deep.equal", initialStateCheck);
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

    it("On page load reducer is updating state for loading and books data", () => {
      cy.intercept("GET", "**/books").as("getBooks");

      cy.window().then(getInitialState).should("deep.equal", initialStateCheck);
      cy.window().then(getReducer).should("exist");

      cy.window()
        .then(getReducer)
        .then((res) => res)
        .then((reducer) => {
          let reducerState = reducer(initialStateCheck, {
            type: "FETCH_DATA_LOADING",
          });
          expect(reducerState).to.deep.eq({
            loading: true,
            data: [],
            error: false,
          });
        });

      cy.wait("@getBooks");

      cy.window()
        .then(getReducer)
        .then((res) => res)
        .then((reducer) => {
          let reducerState = reducer(initialStateCheck, {
            type: "FETCH_DATA_SUCCESS",
            payload: booksData,
          });
          expect(reducerState).to.deep.eq({
            loading: false,
            data: booksData,
            error: false,
          });
        });

      cy.then(() => {
        acc_score += 2;
      });
    });

    it("Check if the loading skeleton is visible while data is being fetched", () => {
      cy.intercept("GET", "**/books", (req) => {
        req.on("response", (res) => {
          // Wait for delay in milliseconds before sending the response to the client.
          res.setDelay(1000);
        });
      }).as("getBooks");

      cy.get('[data-cy="loading_indicator"]').should("exist");
      cy.get('[data-cy="loading_indicator"]').within(() => {
        cy.get(".chakra-skeleton").should("exist").and("have.length", 4);
      });
      cy.get('[data-cy="books_container"]').should("not.exist");

      cy.wait("@getBooks").then(
        () => cy.get('[data-cy="loading_indicator"]').should("not.exist"),
        cy.get('[data-cy="books_container"]').should("exist")
      );

      cy.then(() => {
        acc_score += 1;
      });
    });

    it("Check if correct books information is visible in the dom", () => {
      cy.intercept("GET", "**/books").as("getBooks");
      cy.wait("@getBooks");
      cy.get('[data-cy="books_container"]').should("exist");
      cy.get('[data-cy="books_container"]').should(
        "have.css",
        "display",
        "grid"
      );
      cy.get('[data-cy="books_container"]')
        .children()
        .should("have.length", 15);

      cy.get('[data-cy="books_container"]').within(() => {
        cy.get('[data-cy="book_card"]').each((el, index) => {
          cy.wrap(el)
            .find("h2")
            .should("contain", booksData[index].title)
            .and("have.class", "chakra-heading");
          cy.wrap(el)
            .find("h3")
            .should("contain", booksData[index].author)
            .and("have.class", "chakra-heading");
          cy.wrap(el)
            .find("h5")
            .should("contain", booksData[index].category)
            .and("have.class", "chakra-heading");
          cy.wrap(el)
            .find("h6")
            .should("contain", booksData[index].publication_date)
            .and("have.class", "chakra-heading");
          cy.wrap(el)
            .find(".chakra-text")
            .should("contain", booksData[index].isbn);
        });
      });

      cy.then(() => {
        acc_score += 2;
      });
    });

    it("Check if Filter is working as expected - 1", () => {
      cy.intercept("GET", "**/books").as("getBooks");
      cy.intercept("GET", "**/books?**").as("getFilteredBooks");
      cy.wait("@getBooks");
      cy.get('[data-cy="books_filter"]').select("fantasy");
      cy.wait("@getFilteredBooks");
      cy.window()
        .then(getReducer)
        .then((res) => res)
        .then((reducer) => {
          let reducerState = reducer(initialStateCheck, {
            type: "FETCH_DATA_SUCCESS",
            payload: booksData.filter((el) => el.category === "fantasy"),
          });
          expect(reducerState).to.deep.eq({
            loading: false,
            data: booksData.filter((el) => el.category === "fantasy"),
            error: false,
          });
        });

      const filteredData = booksData.filter((el) => el.category === "fantasy");

      cy.get('[data-cy="books_container"]').within(() => {
        cy.get('[data-cy="book_card"]').each((el, index) => {
          cy.wrap(el)
            .find("h2")
            .should("contain", filteredData[index].title)
            .and("have.class", "chakra-heading");
          cy.wrap(el)
            .find("h3")
            .should("contain", filteredData[index].author)
            .and("have.class", "chakra-heading");
          cy.wrap(el)
            .find("h5")
            .should("contain", filteredData[index].category)
            .and("have.class", "chakra-heading");
          cy.wrap(el)
            .find("h6")
            .should("contain", filteredData[index].publication_date)
            .and("have.class", "chakra-heading");
          cy.wrap(el)
            .find(".chakra-text")
            .should("contain", filteredData[index].isbn);
        });
      });

      cy.then(() => {
        acc_score += 1;
      });
    });

    it("Check if Filter is working as expected - 2", () => {
      cy.intercept("GET", "**/books").as("getBooks");
      cy.intercept("GET", "**/books?**").as("getFilteredBooks");
      cy.wait("@getBooks");
      cy.get('[data-cy="books_filter"]').select("epic_poem");
      cy.wait("@getFilteredBooks");
      cy.window()
        .then(getReducer)
        .then((res) => res)
        .then((reducer) => {
          let reducerState = reducer(initialStateCheck, {
            type: "FETCH_DATA_SUCCESS",
            payload: booksData.filter((el) => el.category === "epic_poem"),
          });
          expect(reducerState).to.deep.eq({
            loading: false,
            data: booksData.filter((el) => el.category === "epic_poem"),
            error: false,
          });
        });

      const filteredData = booksData.filter(
        (el) => el.category === "epic_poem"
      );

      cy.get('[data-cy="books_container"]').within(() => {
        cy.get('[data-cy="book_card"]').each((el, index) => {
          cy.wrap(el)
            .find("h2")
            .should("contain", filteredData[index].title)
            .and("have.class", "chakra-heading");
          cy.wrap(el)
            .find("h3")
            .should("contain", filteredData[index].author)
            .and("have.class", "chakra-heading");
          cy.wrap(el)
            .find("h5")
            .should("contain", filteredData[index].category)
            .and("have.class", "chakra-heading");
          cy.wrap(el)
            .find("h6")
            .should("contain", filteredData[index].publication_date)
            .and("have.class", "chakra-heading");
          cy.wrap(el)
            .find(".chakra-text")
            .should("contain", filteredData[index].isbn);
        });
      });

      cy.then(() => {
        acc_score += 1;
      });
    });

    it("Check if Sorting is working as expected for ascending", () => {
      cy.intercept("GET", "**/books").as("getBooks");
      cy.intercept("GET", "**/books?**").as("getSortedBooks");
      cy.wait("@getBooks");
      cy.get('[data-cy="books_sort"]').select("publication_date");
      cy.get('[data-cy="books_sort_order"]').select("asc");
      cy.wait("@getSortedBooks");
      cy.window()
        .then(getReducer)
        .then((res) => res)
        .then((reducer) => {
          let reducerState = reducer(initialStateCheck, {
            type: "FETCH_DATA_SUCCESS",
            payload: sortData.publication_asc,
          });
          expect(reducerState).to.deep.eq({
            loading: false,
            data: sortData.publication_asc,
            error: false,
          });
        });

      cy.get('[data-cy="books_container"]').within(() => {
        cy.get('[data-cy="book_card"]').each((el, index) => {
          cy.wrap(el)
            .find("h2")
            .should("contain", sortData.publication_asc[index].title)
            .and("have.class", "chakra-heading");
          cy.wrap(el)
            .find("h3")
            .should("contain", sortData.publication_asc[index].author)
            .and("have.class", "chakra-heading");
          cy.wrap(el)
            .find("h5")
            .should("contain", sortData.publication_asc[index].category)
            .and("have.class", "chakra-heading");
          cy.wrap(el)
            .find("h6")
            .should("contain", sortData.publication_asc[index].publication_date)
            .and("have.class", "chakra-heading");
          cy.wrap(el)
            .find(".chakra-text")
            .should("contain", sortData.publication_asc[index].isbn);
        });
      });

      cy.then(() => {
        acc_score += 1;
      });
    });

    it("Check if Sorting is working as expected for descending", () => {
      cy.intercept("GET", "**/books").as("getBooks");
      cy.intercept("GET", "**/books?**").as("getSortedBooks");
      cy.wait("@getBooks");
      cy.get('[data-cy="books_sort"]').select("category");
      cy.get('[data-cy="books_sort_order"]').select("desc");
      cy.wait("@getSortedBooks");
      cy.window()
        .then(getReducer)
        .then((res) => res)
        .then((reducer) => {
          let reducerState = reducer(initialStateCheck, {
            type: "FETCH_DATA_SUCCESS",
            payload: sortData.category_desc,
          });
          expect(reducerState).to.deep.eq({
            loading: false,
            data: sortData.category_desc,
            error: false,
          });
        });

      cy.get('[data-cy="books_container"]').within(() => {
        cy.get('[data-cy="book_card"]').each((el, index) => {
          cy.wrap(el)
            .find("h2")
            .should("contain", sortData.category_desc[index].title)
            .and("have.class", "chakra-heading");
          cy.wrap(el)
            .find("h3")
            .should("contain", sortData.category_desc[index].author)
            .and("have.class", "chakra-heading");
          cy.wrap(el)
            .find("h5")
            .should("contain", sortData.category_desc[index].category)
            .and("have.class", "chakra-heading");
          cy.wrap(el)
            .find("h6")
            .should("contain", sortData.category_desc[index].publication_date)
            .and("have.class", "chakra-heading");
          cy.wrap(el)
            .find(".chakra-text")
            .should("contain", sortData.category_desc[index].isbn);
        });
      });

      cy.then(() => {
        acc_score += 1;
      });
    });

    it("Check if Filtering and Sorting both are working together", () => {
      cy.intercept("GET", "**/books").as("getBooks");
      cy.intercept("GET", "**/books?**").as("getFilteredSortedBooks");
      cy.wait("@getBooks");
      cy.get('[data-cy="books_filter"]').select("classic");
      cy.wait(200);
      cy.get('[data-cy="books_sort"]').select("publication_date");
      cy.get('[data-cy="books_sort_order"]').select("asc");
      cy.wait("@getFilteredSortedBooks");
      cy.window()
        .then(getReducer)
        .then((res) => res)
        .then((reducer) => {
          let reducerState = reducer(initialStateCheck, {
            type: "FETCH_DATA_SUCCESS",
            payload: sortData.classic_pb_asc,
          });
          expect(reducerState).to.deep.eq({
            loading: false,
            data: sortData.classic_pb_asc,
            error: false,
          });
        });

      cy.wait(500);

      cy.get('[data-cy="books_container"]').within(() => {
        cy.get('[data-cy="book_card"]').each((el, index) => {
          cy.wrap(el)
            .find("h2")
            .should("contain", sortData.classic_pb_asc[index].title)
            .and("have.class", "chakra-heading");
          cy.wrap(el)
            .find("h3")
            .should("contain", sortData.classic_pb_asc[index].author)
            .and("have.class", "chakra-heading");
          cy.wrap(el)
            .find("h5")
            .should("contain", sortData.classic_pb_asc[index].category)
            .and("have.class", "chakra-heading");
          cy.wrap(el)
            .find("h6")
            .should("contain", sortData.classic_pb_asc[index].publication_date)
            .and("have.class", "chakra-heading");
          cy.wrap(el)
            .find(".chakra-text")
            .should("contain", sortData.classic_pb_asc[index].isbn);
        });
      });

      cy.then(() => {
        acc_score += 4;
      });
    });

    it("On clicking the Reset All button filter and sorting is removed", () => {
      cy.intercept("GET", "**/books").as("getBooks");
      cy.intercept("GET", "**/books?**").as("getFilteredSortedBooks");
      cy.wait("@getBooks");
      cy.get('[data-cy="books_filter"]').select("classic");
      cy.wait(200);
      cy.get('[data-cy="books_sort"]').select("publication_date");
      cy.get('[data-cy="books_sort_order"]').select("asc");
      cy.wait("@getFilteredSortedBooks");
      cy.window()
        .then(getReducer)
        .then((res) => res)
        .then((reducer) => {
          let reducerState = reducer(initialStateCheck, {
            type: "FETCH_DATA_SUCCESS",
            payload: sortData.classic_pb_asc,
          });
          expect(reducerState).to.deep.eq({
            loading: false,
            data: sortData.classic_pb_asc,
            error: false,
          });
        });

      cy.wait(500);

      cy.get('[data-cy="books_container"]').within(() => {
        cy.get('[data-cy="book_card"]').each((el, index) => {
          cy.wrap(el)
            .find("h2")
            .should("contain", sortData.classic_pb_asc[index].title)
            .and("have.class", "chakra-heading");
          cy.wrap(el)
            .find("h3")
            .should("contain", sortData.classic_pb_asc[index].author)
            .and("have.class", "chakra-heading");
          cy.wrap(el)
            .find("h5")
            .should("contain", sortData.classic_pb_asc[index].category)
            .and("have.class", "chakra-heading");
          cy.wrap(el)
            .find("h6")
            .should("contain", sortData.classic_pb_asc[index].publication_date)
            .and("have.class", "chakra-heading");
          cy.wrap(el)
            .find(".chakra-text")
            .should("contain", sortData.classic_pb_asc[index].isbn);
        });
      });

      cy.get('[data-cy="reset_all"]')
        .should("have.class", "chakra-button")
        .click();
      cy.wait("@getBooks");
      cy.get('[data-cy="books_container"]').should("exist");
      cy.get('[data-cy="books_container"]').should(
        "have.css",
        "display",
        "grid"
      );
      cy.get('[data-cy="books_container"]')
        .children()
        .should("have.length", 15);

      cy.get('[data-cy="books_container"]').within(() => {
        cy.get('[data-cy="book_card"]').each((el, index) => {
          cy.wrap(el)
            .find("h2")
            .should("contain", booksData[index].title)
            .and("have.class", "chakra-heading");
          cy.wrap(el)
            .find("h3")
            .should("contain", booksData[index].author)
            .and("have.class", "chakra-heading");
          cy.wrap(el)
            .find("h5")
            .should("contain", booksData[index].category)
            .and("have.class", "chakra-heading");
          cy.wrap(el)
            .find("h6")
            .should("contain", booksData[index].publication_date)
            .and("have.class", "chakra-heading");
          cy.wrap(el)
            .find(".chakra-text")
            .should("contain", booksData[index].isbn);
        });
      });

      cy.then(() => {
        acc_score += 1;
      });
    });

    after(() => {
      let result = {
        id,
        marks: Math.ceil(acc_score),
      };
      // console.log(result);
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
