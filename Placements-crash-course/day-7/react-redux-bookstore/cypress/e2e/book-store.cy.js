import data from "../../submissionData.json"; // do not create this file
// const data = [{ submission_link: "http://localhost:3000", id: "aditya" }];

const getAuthStore = (win) => win.store.getState().authReducer;
const getBookStore = (win) => win.store.getState().bookReducer;

data.forEach(({ submission_link: url, id }) => {
  describe("book store", () => {
    let acc_score = 1;
    beforeEach(() => {
      cy.visit(url);
      Cypress.on("uncaught:exception", (err, runnable) => {
        return false;
      });
      cy.window().its("store").should("exist");
      if (url.charAt(url.length - 1) != "/") {
        url = url + "/";
      }
    });

    it(`Check Initial Redux Store Structure for Authentication`, () => {
      cy.window()
        .then(getAuthStore)
        .should("deep.equal", {
          isLoading: false,
          isError: false,
          isAuth: false,
          token: "",
        })
        .then(() => {
          acc_score += 1;
        });
    });

    it(`Check Initial Redux Store Structure for Books`, () => {
      cy.window()
        .then(getBookStore)
        .should("deep.equal", {
          isLoading: false,
          isError: false,
          books: [],
        })
        .then(() => {
          acc_score += 1;
        });
    });

    it(`Get request should be made for books when home page loads`, () => {
      cy.url().should("eq", url);
      cy.server();
      cy.route("GET", "/books").as("books");
      cy.wait("@books").should((xhr) => {
        expect(xhr.status, "successful GET").to.equal(200);
        expect(xhr.url, "get url").to.match(/\/books$/);
      });
      cy.get("@books").its("response.body").should("have.length", 10);
      cy.then(() => (acc_score += 1));
    });

    it(`isLoading should update accordingly while making request`, () => {
      cy.url().should("eq", url);
      cy.server();
      cy.route("GET", "/books").as("books");

      cy.window().then(getBookStore).its("isLoading").should("eq", false);

      cy.wait("@books");
      cy.wait(1000).then(() => {
        cy.window().then(getBookStore).its("isLoading").should("eq", false);
      });
      cy.then(() => (acc_score += 1));
    });

    it(`Book state in store should update when books loads on homepage`, () => {
      cy.url().should("eq", url);
      cy.server();
      cy.route("GET", "/books").as("books");

      cy.window().then(getBookStore).its("books").should("have.length", 0);

      cy.wait("@books");
      cy.wait(1000);

      cy.window().then(getBookStore).its("books").should("have.length", 10);
      cy.then(() => (acc_score += 2));
    });

    it(`All books should be displayed on home page`, () => {
      cy.get("[data-testid=book-list]").children().should("have.length", 10);
      cy.get(".book-card").should("have.length", 10);
      cy.get(".book-category").eq(1).should("have.text", "Science_Fiction");
      cy.get(".book-year").eq(2).should("have.text", "2021");
      cy.get(".book-category").eq(3).should("have.text", "Science_Fiction");
      cy.get(".book-year").eq(4).should("have.text", "2018");
      cy.then(() => (acc_score += 1));
    });

    it(`On checking filter url should be updated accordingly`, () => {
      cy.get("[data-testid=novel-filter]").click();
      cy.url().should("eq", `${url}?category=Novel`);
      cy.get("[data-testid=science-fiction-filter]").click();
      cy.url().should("eq", `${url}?category=Novel&category=Science_Fiction`);
      cy.get("[data-testid=motivational-filter]").click();
      cy.url().should(
        "eq",
        `${url}?category=Novel&category=Science_Fiction&category=Motivational`
      );
      cy.get("[data-testid=novel-filter]").click();
      cy.url().should(
        "eq",
        `${url}?category=Science_Fiction&category=Motivational`
      );
      cy.get("[data-testid=science-fiction-filter]").click();
      cy.url().should("eq", `${url}?category=Motivational`);
      cy.get("[data-testid=motivational-filter]").click();
      cy.url().should("eq", url);

      cy.then(() => (acc_score += 2));
    });

    it(`On checking sorting order url should be updated accordingly`, () => {
      cy.get("[data-testid=sort-asc]").click();
      cy.url().should("eq", `${url}?order=asc`);
      cy.get("[data-testid=sort-desc]").click();
      cy.url().should("eq", `${url}?order=desc`);

      cy.then(() => (acc_score += 2));
    });

    it(`On checking filter and sorting together url should be updated accordingly`, () => {
      cy.get("[data-testid=novel-filter]").click();
      cy.url().should("eq", `${url}?category=Novel`);
      cy.get("[data-testid=science-fiction-filter]").click();
      cy.url().should("eq", `${url}?category=Novel&category=Science_Fiction`);
      cy.get("[data-testid=motivational-filter]").click();
      cy.url().should(
        "eq",
        `${url}?category=Novel&category=Science_Fiction&category=Motivational`
      );
      cy.get("[data-testid=sort-asc]").click();
      cy.url().should(
        "eq",
        `${url}?category=Novel&category=Science_Fiction&category=Motivational&order=asc`
      );
      cy.get("[data-testid=sort-desc]").click();
      cy.url().should(
        "eq",
        `${url}?category=Novel&category=Science_Fiction&category=Motivational&order=desc`
      );
      cy.get("[data-testid=science-fiction-filter]").click();
      cy.url().should(
        "eq",
        `${url}?category=Novel&category=Motivational&order=desc`
      );

      cy.then(() => (acc_score += 2));
    });

    it(`On loading url with initail params should update the filter and sorting checkboxes accordingly`, () => {
      cy.visit(
        `${url}?category=Novel&category=Science_Fiction&category=Motivational&order=asc`
      ).then(() => {
        cy.get("[data-testid=novel-filter]").should("be.checked");
        cy.get("[data-testid=science-fiction-filter]").should("be.checked");
        cy.get("[data-testid=motivational-filter]").should("be.checked");
        cy.get("[data-testid=sort-asc]").should("be.checked");
      });

      cy.then(() => (acc_score += 2));
    });

    it(`On filtering books, the data on BookList component should change accordingly`, () => {
      cy.get("[data-testid=novel-filter]").click();
      cy.get("[data-testid=book-list]").children().should("have.length", 3);
      cy.get(".book-card").should("have.length", 3);
      cy.get("[data-testid=motivational-filter]").click();
      cy.get("[data-testid=book-list]").children().should("have.length", 5);
      cy.get(".book-card").should("have.length", 5);

      cy.then(() => (acc_score += 1));
    });

    it(`On sorting books, the data on BookList component should change accordingly`, () => {
      cy.get("[data-testid=sort-asc]").click();
      cy.get(".book-year").then((res) => {
        let sort = true;
        for (let i = 1; i < res.length; i++) {
          if (res[i - 1].childNodes[0].data > res[i].childNodes[0].data) {
            sort = false;
          }
        }
        assert.isTrue(sort);
      });
      cy.then(() => (acc_score += 1));
    });

    it(`On filtering, store state should update`, () => {
      cy.visit(url);
      cy.wait(1000);
      cy.window().then(getBookStore).its("books").should("have.length", 10);
      cy.get("[data-testid=novel-filter]").click();
      cy.wait(1000);
      cy.window().then(getBookStore).its("books").should("have.length", 3);
      cy.get("[data-testid=motivational-filter]").click();
      cy.window().then(getBookStore).its("books").should("have.length", 5);
      cy.wait(1000);

      cy.then(() => (acc_score += 2));
    });

    it(`On sorting, store state should update`, () => {
      cy.get("[data-testid=sort-desc]").click();
      cy.wait(1000);
      cy.window()
        .then(getBookStore)
        .its("books")
        .then((res) => {
          let sort = true;
          for (let i = 1; i < res.length; i++) {
            if (res[i - 1].release_year < res[i].release_year) {
              sort = false;
            }
          }
          assert.isTrue(sort);
        });
      cy.then(() => (acc_score += 2));
    });

    it(`On Login the store authReducer state should update accordingly`, () => {
      cy.window().then(getAuthStore).its("isAuth").should("equal", false);
      cy.window().then(getAuthStore).its("token").should("equal", "");

      cy.intercept("POST", "**/api/login").as("login");

      cy.visit(`${url}login`);
      cy.get("[data-testid=user-email]").type("eve.holt@reqres.in");
      cy.get("[data-testid=user-password]").type("cityslicka");
      cy.get("[data-testid=user-login]").click();

      cy.wait("@login");
      cy.wait(1000);

      cy.window().then(getAuthStore).its("isAuth").should("equal", true);

      cy.then(() => (acc_score += 2));
    });

    it(`user is redirected to login page while visiting /edit-book/:id, without authentication and should be redirected back to /edit-book/:id after login`, () => {
      cy.visit(`${url}edit-book/5`).then(() => {
        cy.location("pathname").should("match", /\/login$/);
      });

      cy.get("[data-testid=user-email]").type("eve.holt@reqres.in");
      cy.get("[data-testid=user-password]").type("cityslicka");
      cy.get("[data-testid=user-login]").click();

      cy.wait(1000);
      cy.url().should("eq", `${url}edit-book/5`);

      cy.then(() => (acc_score += 2));
    });

    it(`Name, Author and Number of pages data should be prefilled in input boxes`, () => {
      cy.get(".edit-book").eq(4).click();
      cy.wait(2000);
      cy.get("[data-testid=user-email]").type("eve.holt@reqres.in");
      cy.get("[data-testid=user-password]").type("cityslicka");
      cy.get("[data-testid=user-login]").click();
      cy.url().should("eq", `${url}edit-book/5`);
      cy.get("[data-testid=book-name]").invoke("val").should("not.be.empty");
      cy.get("[data-testid=book-author]").invoke("val").should("not.be.empty");
      cy.get("[data-testid=book-chapter]").invoke("val").should("not.be.empty");
      cy.then(() => (acc_score += 2));
    });

    it(`On changing the data and clicking update button PATCH request should be made`, () => {
      cy.intercept("PATCH", "**/5", {
        no_of_chapters: 10,
        author: "New Author",
        book_name: "New Name",
      }).as("update");
      cy.get(".edit-book").eq(4).click();
      cy.wait(2000);
      cy.get("[data-testid=user-email]").type("eve.holt@reqres.in");
      cy.get("[data-testid=user-password]").type("cityslicka");
      cy.get("[data-testid=user-login]").click();
      cy.url().should("eq", `${url}edit-book/5`);
      cy.get("[data-testid=book-name]").clear();
      cy.get("[data-testid=book-author]").clear();
      cy.get("[data-testid=book-chapter]").clear();
      cy.get("[data-testid=book-name]").type("New Name");
      cy.get("[data-testid=book-author]").type("New Author");
      cy.get("[data-testid=book-chapter]").type(10);
      cy.get("[data-testid=update-book]").click();
      cy.wait("@update");
      cy.then(() => (acc_score += 2));
    });

    it(`generate score`, () => {
      console.log("final score:", acc_score);
      ////////////// this should not be changed
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
      //////////////////
    });
  });
});
