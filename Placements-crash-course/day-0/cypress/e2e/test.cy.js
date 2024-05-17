import data from "../../submissionData.json"; // do not create this file
//let data = [{ submission_link: "http://127.0.0.1:8080/", id: 67890 }];

const quizData = [
  {
    question: "What is the capital of France?",
    answers: ["Paris", "London", "Berlin", "Madrid"],
    correctAnswer: "Paris",
  },
  {
    question: "Which planet is known as the Red Planet?",
    answers: ["Earth", "Mars", "Venus", "Jupiter"],
    correctAnswer: "Mars",
  },
  {
    question: "What is 1+1?",
    answers: ["2", "1", "3", "4"],
    correctAnswer: "2",
  },
];

describe("Test", function () {
  let acc_score = 1;

  data.map(({ submission_link: url, id }) => {
    beforeEach(() => {
      if (url.charAt(url.length - 1) != "/") {
        url = url + "/";
      }
      Cypress.on("uncaught:exception", (err, runnable) => {
        return false;
      });
    });
    it(`On page load, should display the first question with 4 options and timer`, () => {
      cy.visit(url);
      cy.get("#time-left").should("exist");
      cy.get("#question")
        .should("be.visible")
        .should("have.text", quizData[0].question);
      cy.get(".options button").should("have.length", 4);
      cy.get(".options button").each(($option, index) => {
        cy.wrap($option).should("have.text", quizData[0].answers[index]);
      });
      cy.get("#time-left").should("exist");
      cy.clock();
      cy.then(() => {
        acc_score += 2;
      });
    });

    it(`Able to answer the questions and score is getting updated in real time - Part 1`, () => {
      cy.visit(url);
      cy.get("#question")
        .should("be.visible")
        .should("have.text", quizData[0].question);
      cy.get("#current-score").should("have.text", 0);
      cy.get("#options button")
        .eq(quizData[0].answers.indexOf(quizData[0].correctAnswer))
        .click({ force: true });
      cy.get("#current-score").should("have.text", 1);
      cy.get("#next-button").click({ force: true });
      cy.get("#question")
        .should("be.visible")
        .should("have.text", quizData[1].question);
      cy.get("#current-score").should("have.text", 1);
      cy.get("#options button")
        .eq(quizData[0].answers.indexOf(quizData[1].correctAnswer + 1))
        .click();
      cy.get("#current-score").should("have.text", 1);
      cy.then(() => {
        acc_score += 2;
      });
    });

    it(`Able to answer the questions and score is getting updated in real time - Part 2`, () => {
      cy.visit(url);
      for (let i = 0; i < quizData.length; i++) {
        cy.get("#question")
          .should("be.visible")
          .should("have.text", quizData[i].question);
        cy.get("#current-score").should("have.text", i);
        cy.get("#options button")
          .eq(quizData[i].answers.indexOf(quizData[i].correctAnswer))
          .click({ force: true });
        cy.wait(1000).then(() => {
          cy.get("#current-score").should("have.text", i + 1);
        });
        cy.get("#next-button").click({ force: true });
      }
      cy.then(() => {
        acc_score += 2;
      });
    });

    it(`Showing correct scores after completing quiz`, () => {
      cy.visit(url);
      cy.get("#timer").should("exist");
      cy.get("#question")
        .should("be.visible")
        .should("have.text", quizData[0].question);
      cy.get("#current-score").should("have.text", 0);
      cy.get("#options button")
        .eq(quizData[0].answers.indexOf(quizData[0].correctAnswer + 1))
        .click({ force: true });
      cy.get("#current-score").should("have.text", 0);
      cy.get("#next-button").click({ force: true });
      cy.get("#question")
        .should("be.visible")
        .should("have.text", quizData[1].question);
      cy.get("#current-score").should("have.text", 0);
      cy.get("#options button")
        .eq(quizData[1].answers.indexOf(quizData[1].correctAnswer))
        .click({ force: true });
      cy.get("#current-score").should("have.text", 1);
      cy.get("#next-button").click({ force: true });
      cy.get("#question").should("have.text", "Quiz completed!");
      cy.get("#current-score").should("have.text", 1);
      cy.get("#timer").should("have.attr", "style", "display: none;");
      cy.then(() => {
        acc_score += 2;
      });
    });

    it(`Timer is running for every second - Part 1`, () => {
      cy.clock();
      cy.visit(url);
      cy.tick(10000);
      cy.get("#time-left").should(($element) => {
        const timeInSeconds = parseInt($element.text().split(" ")[0]);
        expect(timeInSeconds).to.be.gte(40);
        expect(timeInSeconds).to.be.lte(52);
      });
      cy.tick(25000);
      cy.get("#time-left").should(($element) => {
        const timeInSeconds = parseInt($element.text().split(" ")[0]);
        expect(timeInSeconds).to.be.gte(24);
        expect(timeInSeconds).to.be.lte(27);
      });
      cy.tick(20000);
      cy.get("#time-left").should(($element) => {
        const timeInSeconds = parseInt($element.text().split(" ")[0]);
        expect(timeInSeconds).to.be.gte(2);
        expect(timeInSeconds).to.be.lte(7);
      });
      cy.clock().then((clock) => clock.restore());
      cy.then(() => {
        acc_score += 2;
      });
    });

    it(`Timer is running for every second - Part 2`, () => {
      cy.clock();
      cy.visit(url);
      cy.get("#next-button").click({ force: true });
      cy.tick(5000);
      cy.get("#time-left").should(($element) => {
        const timeInSeconds = parseInt($element.text().split(" ")[0]);
        expect(timeInSeconds).to.be.gte(44);
        expect(timeInSeconds).to.be.lte(58);
      });
      cy.tick(3000);
      cy.get("#time-left").should(($element) => {
        const timeInSeconds = parseInt($element.text().split(" ")[0]);
        expect(timeInSeconds).to.be.gte(51);
        expect(timeInSeconds).to.be.lte(54);
      });
      cy.tick(40000);
      cy.get("#time-left").should(($element) => {
        const timeInSeconds = parseInt($element.text().split(" ")[0]);
        expect(timeInSeconds).to.be.gte(10);
        expect(timeInSeconds).to.be.lte(15);
      });
      cy.clock().then((clock) => clock.restore());
      cy.then(() => {
        acc_score += 2;
      });
    });

    it(`generate score`, () => {
      //////////////
      console.log(acc_score);
      let result = {
        id,
        marks: acc_score,
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
