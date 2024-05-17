import data from "../../submissionData.json"; // do not create this file

//let data = [{ submission_link: "http://127.0.0.1:5500/", id: 67890 }];

data.forEach((ele) => {
  describe("Test test cases for card-list", () => {
    let url = ele.submission_link;
    let acc_score = 1;
    if (url && url.trim().length) {
      ///_________test cases for card-list ___________________________
      it("should have a container with 5 child divs", () => {
        cy.visit(url);
        cy.get("#container")
          .should("exist")
          .find("div")
          .should("have.length", 5);   
        cy.then(()=>{
          acc_score+=1
        })      
      });
      
      it("Initial layout is achieved, and other CSS as mentioned in the problem statement", () => {
       
        cy.viewport(1400, 768);
        cy.get("#container").should("have.css", "display", "grid");  
        const imageLinks = [
          "https://hips.hearstapps.com/hmg-prod/images/dog-puppy-on-garden-royalty-free-image-1586966191.jpg?crop=0.752xw:1.00xh;0.175xw,0&resize=1200:*",
          "https://cdn-prod.medicalnewstoday.com/content/images/articles/322/322868/golden-retriever-puppy.jpg",
          "https://www.cdc.gov/healthypets/images/pets/cute-dog-headshot.jpg?_=42445",
          "https://hips.hearstapps.com/ghk.h-cdn.co/assets/16/08/gettyimages-530330473.jpg?crop=0.659xw:0.990xh;0.123xw,0.00779xh&resize=980:*",
          "https://image.petmd.com/files/styles/978x550/public/dog-allergies.jpg"
        ];
        cy.get("#container div").each((ele, ind) => {
          cy.wrap(ele).should("have.css", "background-image", `url("${imageLinks[ind]}")`);
          cy.wrap(ele).should("have.css", "background-size", "cover");
        });
        cy.then(()=>{
          acc_score+=1
        }) 
      });
      
      it("Initial layout is achieved, and grid template is used to achieve the layout", () => {
        
        cy.get("#container").should("have.css", "display", "grid");            
        cy.window().then((win) => {
          const bodyWidth = Cypress.$("body").width();      
          if (bodyWidth) {            
            const expectedGridTemplate = `"b1 b2 b3" "b4 b5 b5"`;
            cy.get("#container")
              .should("have.css", "grid-template-areas")
              .and("eq", expectedGridTemplate);
          } 
        });
        cy.then(()=>{
          acc_score+=1
        }) 
      });
      
      it("Check the layout for screen sizes with max-width:900px", () => {
       
        cy.viewport(898, 768);
        cy.get("#container").should("have.css", "display", "grid");            
        cy.window().then((win) => {
          const bodyWidth = Cypress.$("body").width();      
          if (bodyWidth) {            
            const expectedGridTemplate = `"b5 b4 b3 b1" "b2 b2 . b1" "b2 b2 . b1"`;
            cy.get("#container")
              .should("have.css", "grid-template-areas")
              .and("eq", expectedGridTemplate);
          } 
        });
        cy.then(()=>{
          acc_score+=1
        }) 
      });
      
      it("Check the layout for screen sizes with max-width: 470px", () => {
     
        cy.viewport(468, 768);
        cy.get("#container").should("have.css", "display", "grid");            
        cy.window().then((win) => {
          const bodyWidth = Cypress.$("body").width();      
          if (bodyWidth) {            
            const expectedGridTemplate = `"b5 b4 b3 b1" "b2 . . b1" "b2 . . b1"`;
            cy.get("#container")
              .should("have.css", "grid-template-areas")
              .and("eq", expectedGridTemplate);
          } 
        });
        cy.then(()=>{
          acc_score+=1
        }) 
      });
      
      it("Check the layout for screen sizes with max-width: 350px", () => {
       
        cy.viewport(349, 768);
        cy.get("#container").should("have.css", "display", "grid");            
        cy.window().then((win) => {
          const bodyWidth = Cypress.$("body").width();      
          if (bodyWidth) {            
            const expectedGridTemplate = `"b5 b4 b4 b1" "b2 . . b1" "b2 b3 b3 b1"`;
            cy.get("#container")
              .should("have.css", "grid-template-areas")
              .and("eq", expectedGridTemplate);
          } 
        });
        cy.then(()=>{
          acc_score+=1
        }) 
      });
      
      it("Check the background images for child divs when screen size max-width: 350px", () => {
       
        cy.viewport(349, 768);
        cy.get("#container").should("have.css", "display", "grid");            
        cy.window().then((win) => {
          const bodyWidth = Cypress.$("body").width();      
          if (bodyWidth) {            
            const expectedGridTemplate = `"b5 b4 b4 b1" "b2 . . b1" "b2 b3 b3 b1"`;
            cy.get("#container")
              .should("have.css", "grid-template-areas")
              .and("eq", expectedGridTemplate);
          } 
        });
        const imageLinks = [
          "https://hips.hearstapps.com/hmg-prod/images/dog-puppy-on-garden-royalty-free-image-1586966191.jpg?crop=0.752xw:1.00xh;0.175xw,0&resize=1200:*",
          "https://cdn-prod.medicalnewstoday.com/content/images/articles/322/322868/golden-retriever-puppy.jpg",
          "https://www.cdc.gov/healthypets/images/pets/cute-dog-headshot.jpg?_=42445",
          "https://hips.hearstapps.com/ghk.h-cdn.co/assets/16/08/gettyimages-530330473.jpg?crop=0.659xw:0.990xh;0.123xw,0.00779xh&resize=980:*",
          "https://image.petmd.com/files/styles/978x550/public/dog-allergies.jpg"
        ];
        cy.get("#container div").each((ele, ind) => {
          if (ind == 1 || ind == 4 || ind == 0) {
            cy.wrap(ele).should("have.css", "background-image", "none");            
          } else {
            cy.wrap(ele).should("have.css", "background-image", `url("${imageLinks[ind]}")`);
            cy.wrap(ele).should("have.css", "background-size", "cover");
          }          
        });
        cy.then(()=>{
          acc_score+=1
        }) 
      });
      
    }

    it(`generate score`, () => {
      //////////////
      console.log(acc_score);
      let result = {
        id: ele.id,
        marks: Math.floor(acc_score),
      };
      result = JSON.stringify(result);
      cy.writeFile("results.json", `\n${result},`, { flag: "a+" }, (err) => {
        if (err) {
          console.error(err);
        }
      });
    });
  });
});
