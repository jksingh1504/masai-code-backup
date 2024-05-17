import "cypress-localstorage-commands";
import data from "../../submissionData.json"; // do not create this file
//let data = [{ submission_link: "http://127.0.0.1:5500/", id: 67890 }];
describe("Test", function () {
  let acc_score = 1;

  let bodyCareData = [
    {
      img: "https://cdn.shopify.com/s/files/1/1454/5188/products/card-1_340dd7ab-c7f7-4683-b52c-5aa9d45a89df_360x.jpg?v=1657680785%22",
      id: 101,
      originalPrice: 500,
      discountedPrice: 450,
      name: "Coffee Body Scrub for Tan-Free & Smooth Skin - 100 g - Natural & Vegan",
    },
    {
      img: "https://cdn.shopify.com/s/files/1/1454/5188/products/PrimaryImage_3_44052f0e-d848-4985-9fe2-a324d38b288f.jpg?v=1669275527",
      id: 102,
      originalPrice: 350,
      discountedPrice: 300,
      name: "Moisturizing & Creamy Coffee Body Scrub with Berries for Smooth Skin - 200g",
    },
    {
      img: "https://cdn.shopify.com/s/files/1/1454/5188/products/1_43da1e47-13c4-410e-a19f-3c2541099127.jpg?v=1675940080&width=550",
      id: 103,
      originalPrice: 1027,
      discountedPrice: 873,
      name: "Body Cleansing & Moisturizing Trio with Almonds",
    },
    {
      img: "https://cdn.shopify.com/s/files/1/1454/5188/products/1_1.jpg?v=1669190993&width=550",
      id: 104,
      originalPrice: 705,
      discountedPrice: 599,
      name: "Body Polishing Kit with Berries",
    },
    {
      img: "https://cdn.shopify.com/s/files/1/1454/5188/products/card-1a.jpg?v=1649159773&width=550",
      id: 105,
      originalPrice: 749,
      discountedPrice: 637,
      name: "Coffee Exfoliation and Tan Removal Kit - Natural & Vegan",
    },
    {
      img: "https://cdn.shopify.com/s/files/1/1454/5188/products/1_74a6d4d9-6765-4b3e-b4e8-c72ca33f32b1_360x.jpg?v=1630554461%22",
      id: 106,
      originalPrice: 375,
      discountedPrice: 319,
      name: "Coffee Travel Polishing Essentials",
    },
  ];

  let faceCareData = [
    {
      img: "https://cdn.shopify.com/s/files/1/1454/5188/products/Card-1_80c4d1b2-eae6-4d9b-b423-cae1d8a9d2af.jpg?v=1679738718&width=550",
      id: 201,
      originalPrice: 325,
      discountedPrice: 276,
      name: "Green Tea Face Wash with Vitamin C & Hyaluronic Acid - 100 ml",
    },
    {
      img: "https://cdn.shopify.com/s/files/1/1454/5188/products/Card1_d67de8c9-902c-4f11-a140-f6d0ac1e1dbc.jpg?v=1679086680&width=550",
      id: 202,
      originalPrice: 1309,
      discountedPrice: 113,
      name: "Daily Glow Kit",
    },
    {
      img: "https://cdn.shopify.com/s/files/1/1454/5188/products/Card1WhiteBG.jpg?v=1666951621&width=550",
      id: 203,
      originalPrice: 1175,
      discountedPrice: 999,
      name: "Deep Pore Cleansing Regime",
    },
    {
      img: "https://cdn.shopify.com/s/files/1/1454/5188/products/Milky-Brew-Primary-Image-Option-2.jpg?v=1676272300&width=550",
      id: 204,
      originalPrice: 229,
      discountedPrice: 195,
      name: "Milky Brew Coffee Face Scrub with Almond Milk for 24 Hrs Moisturization - 75 g - Natural & Vegan",
    },
    {
      img: "https://cdn.shopify.com/s/files/1/1454/5188/products/Card1copy2_133a81ec-9aa6-4325-9598-5cccbeebe767.jpg?v=1679491518&width=550",
      id: 205,
      originalPrice: 399,
      discountedPrice: 339,
      name: "Green Tea Day Cream with SPF 30 PA++ for Hydration & 24 Hrs Moisture Lock - 50 ml",
    },
    {
      img: "https://cdn.shopify.com/s/files/1/1454/5188/products/Card1_cd1d318a-916d-46c2-8de5-e999a947b75b.jpg?v=1666169735&width=550",
      id: 206,
      originalPrice: 448,
      discountedPrice: 380,
      name: "Vitamin C & Coffee Sheet Mask for Dark Spots Reduction - 20g each - Pack of 3",
    },
  ];
  let hairCareData = [
    {
      img: "https://cdn.shopify.com/s/files/1/1454/5188/products/Cappuccino-Coffee-Shampoo.jpg?v=1644475260&width=550",
      id: 301,
      originalPrice: 499,
      discountedPrice: 424,
      name: "Anti-Dandruff Cappuccino Shampoo with Natural AHA - 250ml",
    },
    {
      img: "https://cdn.shopify.com/s/files/1/1454/5188/products/1_13872b7d-0760-471f-8011-983191fa1b61.jpg?v=1634705420&width=550",
      id: 302,
      originalPrice: 1029,
      discountedPrice: 875,
      name: "Coffee Hair Boost & Hair Fall Control Kit",
    },
    {
      img: "https://cdn.shopify.com/s/files/1/1454/5188/products/1_e1dd14f3-fb54-4622-bd1e-4ebaebf937fd.jpg?v=1637243621&width=550",
      id: 303,
      originalPrice: 689,
      discountedPrice: 586,
      name: "De-stress Hair Oiling Routine",
    },
    {
      img: "https://cdn.shopify.com/s/files/1/1454/5188/products/1_ec1f3313-1406-417f-86cf-b5f7a3d8520d.jpg?v=1636548356&width=550",
      id: 304,
      originalPrice: 1229,
      discountedPrice: 1045,
      name: "Cappuccino- Anti-Dandruff Kit",
    },
    {
      img: "https://cdn.shopify.com/s/files/1/1454/5188/products/8_2.jpg?v=1646893970&width=550",
      id: 305,
      originalPrice: 599,
      discountedPrice: 509,
      name: "Intense Damage Repair Latte Hair Mask with Coconut Milk & Shea Butter - 200g",
    },
    {
      img: "https://cdn.shopify.com/s/files/1/1454/5188/products/8_3.jpg?v=1646903997&width=550",
      id: 306,
      originalPrice: 399,
      discountedPrice: 339,
      name: "Damage Repair Latte Leave-In Hair Cream with Coconut Milk - 50ml",
    },
  ];

  let cartItems = [
    {
      img: "https://cdn.shopify.com/s/files/1/1454/5188/products/1_74a6d4d9-6765-4b3e-b4e8-c72ca33f32b1_360x.jpg?v=1630554461%22",
      id: 106,
      originalPrice: 375,
      discountedPrice: 319,
      name: "Coffee Travel Polishing Essentials",
    },
    {
      img: "https://cdn.shopify.com/s/files/1/1454/5188/products/Card-1_80c4d1b2-eae6-4d9b-b423-cae1d8a9d2af.jpg?v=1679738718&width=550",
      id: 201,
      originalPrice: 325,
      discountedPrice: 276,
      name: "Green Tea Face Wash with Vitamin C & Hyaluronic Acid - 100 ml",
    },
    {
      img: "https://cdn.shopify.com/s/files/1/1454/5188/products/8_3.jpg?v=1646903997&width=550",
      id: 306,
      originalPrice: 399,
      discountedPrice: 339,
      name: "Damage Repair Latte Leave-In Hair Cream with Coconut Milk - 50ml",
    },
  ];
  beforeEach(() => {
    cy.restoreLocalStorage();
  });

  afterEach(() => {
    cy.saveLocalStorage();
  });

  data.map(({ submission_link: url, id }) => {
    if (url.charAt(url.length - 1) != "/") {
      url = url + "/";
    }
    it(`Able to signUp`, () => {
      cy.visit(url);
      cy.get("#signUp").click();
      cy.get("#fullname").clear().type("John Mark");
      cy.get("#email").clear().type("john@gmail.com");
      cy.get("#phone").clear().type(1234567890);
      cy.get("#password").clear().type("john123");
      cy.get("#signUpForm").submit();
      cy.then(() => {
        acc_score += 1;
      });
    }); //1
    it(`After SignUp userInfo should added in LocalStorage`, () => {
      cy.visit(url);
      cy.restoreLocalStorage();
      let user = JSON.parse(localStorage.getItem("userInfo"));
      expect(user.fullname).to.contains("John Mark");
      expect(user.email).to.contains("john@gmail.com");
      expect(user.password).to.contains("john123");
      expect(user.phone).to.contains("1234567890");
      cy.then(() => {
        acc_score += 1;
      });
    }); //2
    it(`Able to Login`, () => {
      cy.visit(url);
      cy.get("#login").click();
      cy.get("#email").clear().type("john@gmail.com");
      cy.get("#password").clear().type("john123");
      cy.get("#loginForm").submit();
      cy.wait(500);
      cy.url().should("include", "/index.html");
      cy.then(() => {
        acc_score += 1;
      });
    }); //1
    it(`Should Not able login with wrong credentials`, () => {
      cy.visit(url);
      cy.get("#login").click();
      cy.get("#email").clear().type("john@gmail.com");
      cy.get("#password").clear().type("john");
      cy.get("#loginForm").submit();
      cy.wait(500);
      cy.url().should("include", "/login.html");
      cy.then(() => {
        acc_score += 1;
      });
    }); //1
    it(`Add Hero Image to index.html`, () => {
      cy.visit(url);
      cy.get("#imgContainer img").should(
        "have.attr",
        "src",
        "https://cdn.shopify.com/s/files/1/1454/5188/files/Desktop_23_c81b511b-62ec-4fe0-b310-923d27deddd2.jpg?v=1687156859"
      );
      cy.get("#imgContainer img").should("have.attr", "alt", "heroImg");
      cy.then(() => {
        acc_score += 1;
      });
    }); //1
    it(`Data of bodyCare items added to DOM in bodyCare.html`, () => {
      cy.visit(url);
      cy.get("#bodyCare").click();
      cy.get("#bodyCareContainer").children().should("have.length", 6);
      cy.get("#bodyCareContainer")
        .children()
        .each((elem, i) => {
          expect(elem.text()).to.include(bodyCareData[i].originalPrice);
          expect(elem.text()).to.include(bodyCareData[i].discountedPrice);
          expect(elem.text()).to.include(bodyCareData[i].name);
        });
      cy.then(() => {
        acc_score += 2;
      });
    }); //2
    it(`Data of faceCare items added to DOM in faceCare.html`, () => {
      cy.visit(url);
      cy.get("#faceCare").click();
      cy.get("#faceCareContainer").children().should("have.length", 6);
      cy.get("#faceCareContainer")
        .children()
        .each((elem, i) => {
          expect(elem.text()).to.include(faceCareData[i].originalPrice);
          expect(elem.text()).to.include(faceCareData[i].discountedPrice);
          expect(elem.text()).to.include(faceCareData[i].name);
        });
      cy.then(() => {
        acc_score += 2;
      });
    }); //2
    it(`Data of hairCare items added to DOM in hairCare.html`, () => {
      cy.visit(url);
      cy.get("#hairCare").click();
      cy.get("#hairCareContainer").children().should("have.length", 6);
      cy.get("#hairCareContainer")
        .children()
        .each((elem, i) => {
          expect(elem.text()).to.include(hairCareData[i].originalPrice);
          expect(elem.text()).to.include(hairCareData[i].discountedPrice);
          expect(elem.text()).to.include(hairCareData[i].name);
        });
      cy.then(() => {
        acc_score += 2;
      });
    }); //2
    it(`Add to cart buttons on click must update LocalStorage from bodyCare page`, () => {
      cy.visit(url);
      cy.get("#bodyCare").click();
      cy.get("#bodyCareContainer").children().should("have.length", 6);
      cy.get("#bodyCareContainer")
        .children()
        .last()
        .find("button")
        .click()
        .then(() => {
          cy.window().then((window) => {
            const cart = JSON.parse(window.localStorage.getItem("cart"));
            expect(cart.length).to.equal(1);
          });
        });
      cy.then(() => {
        acc_score += 2;
      });
    }); //2

    it(`Add to cart buttons on click must update LocalStorage from faceCare page`, () => {
      cy.visit(url);
      cy.get("#faceCare").click();
      cy.get("#faceCareContainer").children().should("have.length", 6);
      cy.get("#faceCareContainer")
        .children()
        .first()
        .find("button")
        .click()
        .then(() => {
          cy.window().then((window) => {
            const cart = JSON.parse(window.localStorage.getItem("cart"));
            expect(cart.length).to.equal(2);
          });
        });
      cy.then(() => {
        acc_score += 2;
      });
    }); //2
    it(`Add to cart buttons on click must update LocalStorage from hairCare page`, () => {
      cy.visit(url);
      cy.get("#hairCare").click();
      cy.get("#hairCareContainer").children().should("have.length", 6);
      cy.get("#hairCareContainer")
        .children()
        .last()
        .find("button")
        .click()
        .then(() => {
          cy.window().then((window) => {
            const cart = JSON.parse(window.localStorage.getItem("cart"));
            expect(cart.length).to.equal(3);
          });
        });
      cy.then(() => {
        acc_score += 2;
      });
    }); //2

    it(`cart.html page should have all items that added in cart`, () => {
      cy.visit(url);
      cy.get("#cart").click();
      cy.get("#cartContainer").children().should("have.length", 3);
      cy.get("#cartContainer")
        .children()
        .each((elem, i) => {
          expect(elem.text()).to.include(cartItems[i].originalPrice);
          expect(elem.text()).to.include(cartItems[i].discountedPrice);
          expect(elem.text()).to.include(cartItems[i].name);
        });
      cy.then(() => {
        acc_score += 2;
      });
    }); //2

    it(`Remove from cart functionality should work as expected`, () => {
      cy.visit(url);
      cy.get("#cart").click();
      cy.get("#cartContainer").children().first().find("button").click();
      cy.get("#cartContainer").children().should("have.length", 2);
      cy.get("#cartContainer")
        .children()
        .first()
        .contains(
          "Green Tea Face Wash with Vitamin C & Hyaluronic Acid - 100 ml"
        );
      cy.get("#cartContainer")
        .children()
        .last()
        .contains(
          "Damage Repair Latte Leave-In Hair Cream with Coconut Milk - 50ml"
        );
      cy.then(() => {
        acc_score += 1;
      });
    }); //1

    it(`Remove from cart should update LocalStorage`, () => {
      let cart = JSON.parse(localStorage.getItem("cart"));
      expect(cart.length).to.equal(2);
      cy.then(() => {
        acc_score += 1;
      });
    }); //1

    it(`Total items and Amount must correct`, () => {
      cy.visit(url);
      cy.get("#cart").click();
      cy.get("#totalItems").contains("2");
      cy.get("#totalAmount").contains("615");
      cy.then(() => {
        acc_score += 1;
      });
    }); //1

    it(`Apply Coupon must reduce total Bill amount`, () => {
      cy.visit(url);
      cy.get("#cart").click();
      cy.get("#billContainer input").clear().type("Masai30");
      cy.get("#billAmount").contains("615");
      cy.get("#billContainer input").clear().type("Masai15");
      cy.get("#billContainer button").click();
      cy.get("#billAmount").contains("523");
      cy.then(() => {
        acc_score += 2;
      });
    }); //2

    it(`No of items in cart should update in navbar every time we added or removed item from cart`, () => {
      cy.visit(url);
      cy.get("nav").contains("2");
      cy.get("#cart").click();
      cy.get("nav").contains("2");
      cy.get("#faceCare").click();
      cy.get("nav").contains("2");
      cy.get("#faceCareContainer").children().first().find("button").click();
      cy.get("#bodyCare").click();
      cy.get("nav").contains("3");
      cy.get("#hairCare").click();
      cy.get("nav").contains("3");
      cy.then(() => {
        acc_score += 2;
      });
    }); //2

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
