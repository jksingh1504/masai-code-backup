
# PT-WEB14-B26-C4 (m caffeine App)

## Submission Instructions [Please note]

## Maximum Marks - 27

- The Submission should not contain spaces; for example,/js-101 folder/eval will not work

```
 ✅ Able to submit - 1 mark ( minimum score )

 ### Test cases for the signUp page
 ✅ Able to signUp - 1 mark 
 ✅ After SignUp userInfo should be added in LocalStorage - 1 mark.

 ### Test cases for the login page
 ✅ Able to Login - 1 mark.
 ✅ Should Not able login with wrong credentials - 1 mark.

 ### Test cases for the index page
  ✅ Add Hero Image to index.html - 1 mark.
 
 ### Test cases for the bodyCare page
 ✅ Data of bodyCare items added to DOM in bodyCare.html - 2 marks.
 ✅ Add to cart buttons on click must update LocalStorage from bodyCare page - 2 marks.
 
 ### Test cases for the faceCare page
 ✅ Data of faceCare items added to DOM in faceCare.html - 2 marks.
 ✅ Add to cart buttons on click must update LocalStorage from faceCare page - 2 marks.
 
 ### Test cases for the hairCare page
 ✅ Data of hairCare items added to DOM in hairCare.html - 2 marks.
 ✅ Add to cart buttons on click must update LocalStorage from hairCare page - 2 marks.
 
  ### Test cases for the cart page
 ✅ cart.html page should have all items added in the cart - 2 marks.
 ✅ Remove from cart functionality should work as expected - 1 mark.
 ✅ Remove from cart should update LocalStorage - 1 mark.
 ✅ Total items and Amount must be correct - 1 mark.
 ✅ Apply Coupon must reduce total Bill amount - 2 marks.
 ✅ No of items in the cart should update in the navbar every time we add or remove an item from the cart - 2 marks.

```

## Installation

- Use node version(LTS) should be `v16.16.0`
- Don't change/override package.json
- Download and unzip the boilerplate
- Navigate to the correct path

## Folder structure

```
├── index.html
├── login.html
├── signUp.html
├── bodyCare.html
├── faceCare.html
├── hairCare.html
├── cart.html
├── **Scripts**
|        ├── index.js
|        ├── login.js
|        ├── signUp.js
|        ├── bodyCare.js
|        ├── faceCare.js
|        ├── hairCare.js
|        └── cart.js
└── **Styles**
         ├── index.css
         ├── cart.css
         └── You can add styles files in this folder as per your need.
```

- Please ignore all the other files/folders except the above-mentioned ones.
- Styles folder include different style files; add your CSS in these files.

### You haven't taught Cypress to run the test cases locally. You can see the passed/ failed test cases and test errors on CP itself.

#### Use the template provided below to write your code (Mandatory)

## Some Rules to follow:-

- Before writing a single line of code, please read the problem statement very carefully.
- <span style=" color: red">Don't change the already given ids or classes.</span>
- If you don't follow these rules, you might not get any marks even if you do everything correctly.

## Problem Statement:-

- Build an m caffeine App where you have to design all functionality related to an E-commerce website.

***`Flow of Problem`***
1. New users have to signUp and store details in localStorage in the object format.
2. Now the user can *login* if input details match with localStorage, redirect the user to an index.html page
3. On the index page, add a *Hero* image.
4.  *bodycare* data is already added in the js file. Show it on DOM with Add to cart button.
5. similare with *faceCare* and *hairCare* data.
6. finally, *cart* shows the total Amount and can add a Coupon. The user can remove the item from the cart.

- Your application has a **`Navbar`** (_this is already in the template; no need to build it_) deatils are as follow :

| Sr. | navbar element                                                    |
| --- | ----------------------------------------------------------------- |
| 1.  | <span style=" color: #73cdc1">m caffeine Logo</span> anchor tag to Navigate `index.html`              |
| 2.  | <span style=" color: #73cdc1">Body Care</span> anchor tag to Navigate `bodyCare.html`                 |
| 3.  | <span style=" color: #73cdc1">Face Care</span> anchor tag to Navigate `faceCare.html`                 |
| 4.  | <span style=" color: #73cdc1">Hair Care</span> anchor tag to Navigate `hairCare.html`                 |
| 5.  | <span style=" color: #73cdc1">login</span> anchor tag to Navigate `login.html`                        |
| 6.  | <span style=" color: #73cdc1">signUp</span> anchor tag to Navigate `signUp.html`                      |
| 7.  | <span style=" color: #73cdc1">🛍️(cart.html)</span> anchor tag to Navigate `cart.html`                 |
|     | div with ***`id=cartCount`***, which displays no of the item present in the cart. |

<h3 style="color:#215dc8">
1. signUp Page [2]:-
</h3>

- Form with `id=signUpForm`

| input for | id       | type    |
| --------- | -------- | ------- |
| fullname  | fullname | text    |
| email     | email    | email   |
| phone     | phone    | number  |
| password  | password | password |

| button | value  | type   |
| ------ | ------ | ------ |
| input  | Submit | submit |

- After submitting the form, you should store the user data in your local storage with the key `userInfo`. (use of submit eventListener is mandatory)

- `Example object `
```
   const user1 = {
      fullname: "Virat Kohli",
      email: "virat@gmail.com",
      phone: 0123456789,
      password: "virat123",
    };
```

Follow the above object schema while storing new user's data in local storage.

`Hint: localStorage.setItem("userInfo", JSON.stringify)`

- Refer to this image for a better understanding:-

<figure>
<img src="https://i.imgur.com/EV4OPpr.png"  style="border: 1px solid gray; border-radius: 5px;" />
<figcaption align = "center"><b>Sign up form for new user</b></figcaption>
</figure>

- `Already Registered` is the anchor tag that redirects the user to the `login.html` page as a user has completed the signup procedure. (This part is a bonus)

<h3 style="color:#215dc8">
2. login Page [2]:-
</h3>

- Form with `id=loginForm`

| input for | id       | type     |
| --------- | -------- | -------- |
| email     | email    | email    |
| password  | password | password |

| button | value | type   |
| ------ | ----- | ------ |
| input  | Login | submit |

- On submitting a form, if the user's email and password match with localStorage `userInfo`, in that case, redirect the user to `index.html`. (use of submit eventListener is mandatory)

- `Hint: JSON.parse(localStorage.getItem("userInfo"))`
- `Note: (to redirect user) use window.location.href = "index.html"`

- Refer to this image for a better understanding:-

<figure>
<img src="https://i.imgur.com/AhDf4vm.png"  style="border: 1px solid gray; border-radius: 5px;" />
<figcaption align = "center"><b>Login form</b></figcaption>
</figure>

- `New User` is the anchor tag that redirects the user to the `signUp.html` page; as a user is new to the website, the user needs to signUp first. (This part is a bonus)

<h3 style="color:#215dc8 ;">
3. index Page [1]:-
</h3>

<figure>
<img src="https://i.imgur.com/VUo0I2T.png"  style="border: 1px solid gray; border-radius: 5px;" width="100%"/>
<figcaption align = "center"><b>Hero Image on index page</b></figcaption>
</figure>

- Add a hero image in a div with `id=imgContainer` (div is already created).
- Image must have attribute `alt` with `heroImg`
- Use image url = `https://cdn.shopify.com/s/files/1/1454/5188/files/Desktop_23_c81b511b-62ec-4fe0-b310-923d27deddd2.jpg?v=1687156859`

<h3 style="color:#215dc8">
4. bodyCare Page [4]:-
</h3>

- A div with `id=bodyCareContainer` is already created.
- an array of the bodyCare item is added in the bodyCare.js file.
- you have to map this array and update the UI

- Single item has 
  1. image of the product
  2. name of the product 
  3. original Price 
  4. discounted Price
    - use the `img tag` for image of single item. 
    - use the `p tag` for name, original and discounted price of single item.
```
Hint: for mapping data

data.map((elem, i) => {

})
```

<figure>
<img src="https://i.imgur.com/j9cblyN.png"  style="border: 1px solid gray; border-radius: 5px;" />
<figcaption align = "center"><b>Body Care page</b></figcaption>
</figure>

-  Every item has a button `Add to Cart` on clicking this button; that particular item must be pushed to the cart array in localStorage and update `cartCount` in the navbar.

`Hint: localStorage.setItem("cart", JSON.stringify)`

<h3 style="color:#215dc8">
5. faceCare Page [4]:-
</h3>

- Similar to bodyCare page

<figure>
<img src="https://i.imgur.com/hm86zt4.png"  style="border: 1px solid gray; border-radius: 5px;" />
<figcaption align = "center"><b>Add to cart from faceCare page</b></figcaption>
</figure>

<h3 style="color:#215dc8">
6. hairCare Page [4]:-
</h3>

- Similar to the bodyCare page

<h3 style="color:#215dc8">
7. cart Page [5]:-
</h3>

- A div with `id=cartContainer` is already created.
- Map all cart data from localStorage and show on DOM.
- For example, in below image
    - there are two items in the cart, so `cartCount` is 2 in the navbar.
    - Add `h2` tag with (`id=totalItems`) text as `Total items in cart:2`
    - Add `h2` tag with (`id=totalAmount`) text as `Total Amount :622`

<figure>
<img src="https://i.imgur.com/6k4R248.png"  style="border: 1px solid gray; border-radius: 5px;" />
<figcaption align = "center"><b>Add to Cart from faceCare page</b></figcaption>
</figure>


<h3 style="color:#215dc8">
8. Apply Coupon in cart Page [2]:-
</h3>

- Create an Input to enter coupon code as ***`Masai15`***. 
   - you can use any id or class for Input
- Create a button `Apply Coupon` on clicking `Total Amount` that must be reduced by 15%. 
  - you can use any id or class for button.
- Update the *bill amount* with this **reduced amount**.
   - Add `h1` tag with (`id=billAmount`) text as below
     - before application of coupon `Bill Amount : 622` and after `Bill Amount : 529`

`Hint: use .toFixed() to round off the bill amount.`
<figure>
<img src="https://i.imgur.com/9cIhd6W.png"  style="border: 1px solid gray; border-radius: 5px;" />
<figcaption align = "center"><b>Applied Coupon</b></figcaption>
</figure>

<h3 style="color:#215dc8">
8. Remove from the cart [2]:-
</h3>

- Each item in the cart has a button `Remove from Cart` on click item must be removed from DOM and localStorage. 

- `cartCount` in the navbar, `Total items in cart ` and `Total Amount` must be updated with this. Refer to the below image for a better understanding 

<figure>
<img src="https://i.imgur.com/9vzHXZN.png"  style="border: 1px solid gray; border-radius: 5px;" />
<figcaption align = "center"><b>Remove from Cart</b></figcaption>
</figure>

### General guidelines

- The system on cp.masaischool.com may take between 1-20 minutes to respond,
- so we request you to read the problem carefully and debug it before itself
- we also request you not just submit it last minute
- try to keep one submission at a time
