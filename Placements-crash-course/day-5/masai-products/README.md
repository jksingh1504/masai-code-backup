<h1 style="color:#397ce7">Masai Products</h1>

<h2 style="color:red">
Submission Instructions [Please note]:
</h2>

- The Submission should not contain spaces, for example,/rct-101 folder/eval will not work
- Do not push node_modules and package-lock.json to GitHub

<h2 style="color:red">
Installation:
</h2>

- Use node version(LTS) should be `v16.16.0`
- Don't change/override package.json
- Download and unzip the boilerplate file and then copy the "**contents**" of the unzipped file in the Masai Folder.
- Navigate to the Masai Folder, in VS Code.
- Run the following commands inside,
- `npm install --engine-strict`
- `npm start`

<h2 style="color:#397ce7">
Maximum Marks - 22
</h2>

```
✅ Able to submit the app - 1 mark ( minimum score )
✅ Check for the initial state of the reducer and reducer is throwing correct error for invalid action type - 1 mark
✅ Check whether Home page is having basic structure - 1 mark
✅ Check Login functionality and also updating context API and home page with token in real time - 2 marks
✅ Check all the products details are correctly rendered - 2 marks
✅ Check whether View in Modal is working for products cards or not - 2 marks
✅ Check whether sorting functionality is working or not - 1 mark
✅ Check whether filter functionality is working or not - 1 mark
✅ Check whether filter and sort functionality working together - 1 mark
✅ Check whether pagination buttons are working or not - 1 mark
✅ Check whether pagination along with filter is working - 1 mark
✅ Check whether context API is getting updated in real-time and whether login and logout Button in the navbar are working accordingly - 2 marks
✅ Check reducer function for LOADING action type - 1 mark
✅ Check reducer function for SUCCESS action type - 1 mark
✅ Check reducer function for ERROR action type - 1 mark
✅ Check if the loading skeleton is visible while data is being fetched - 2 marks
✅ Check if the ErrorMessage component exists on DOM when an API request is failed or any error occurs on Home page - 1 mark
```

<h2 style="color:#397ce7">
Folder Structure (Important Files):
</h2>

```
├── src
    ├── App.css
    ├── App.jsx
    ├── components
    |  ├── AllRoutes.jsx       # Manages routing and rendering of different pages
    |  ├── ErrorMessage.jsx    # Error message which you should be rendered when any error occurs
    |  ├── LoadingSkeleton.jsx # Provides loading skeletons during data fetching
    |  ├── Navbar.jsx          # Displays the navigation bar with links and authentication
    |  └── ProductItem.jsx     # Represents individual product cards with modal view
    ├── context
    |  └── AuthContextProvider.jsx
    └── pages
    |  ├── home
    |  |  └── Home.jsx      # This will contain a heading and a link to products page.
    |  ├── login
    |  |  ├── api.js
    |  |  └── Login.jsx
    |  └── products
    |        ├── api.js
    |        ├── Products.jsx  # handles sorting, filtering, pagination and displays products
    |        └── productsReducer.js  # Reducer for managing Products page state
    ├── index.js
```

<h2 style="color:#397ce7">
Problem Statement:
</h2>

- Develop a Masai Products website using Chakra UI to display various products along with login functionality.
- The user should be able to display 6 products for a page along with sorting and filtering options.
- Establish <span style="color:red;font-weight:bold;">authentication using Context API</span>.(You can store the authentication status of the user and token)
- Utilize the <span style="color:red;font-weight:bold;">'useReducer' hook to manage loading, error, and data states efficiently.</span>

#### <span style="color:red">Note: - </span> Use of <span style="color:red">Chakra UI, ContextAPI, useReducer Hook, and axios</span> is compulsory otherwise test cases will fail

<h3 style="color:#397ce7">
ContextAPI:
</h3>

### src/context/AuthContextProvider

In the `AuthContextProvider` component, you are tasked with updating the `providerState` object and passing it as a value to the `AuthContext.Provider`. The `providerState` object, provided in the boilerplate, requires the following key-value updates:

- `authDetails`: By default, the authentication state of the user should be `{ isAuth: false, token: "" }`.
- `login`: This should be a function that will update the auth state by taking `token` as an argument and update the authDetails in context API. ex:`{isAuth: true, token: token}`.
- `logout`: This should be a function that will update the auth state to the default state. `{ isAuth: false, token: "" }`.

- for example, the `providerState` will be assigned an object that will look like the below obj

```
{
  authDetails:{ isAuth: false, token: "" },
  login:()=>{},
  logout:()=>{}
}
```

<h3 style="color:#397ce7">
useReducer:
</h3>

### src/pages/products/productsReducer

- The initial state of useReducer will be as

```json
{
  "loading": false,
  "err": false,
  "res": {}
}
```

also in reducer if none of the action types matches; the default case should `throw` an `error` with the message `invalid action type`.

- The following action types should be used.

```json
"LOADING" ? triggered while fetching data
"SUCCESS" ? triggered when fetching data is successful and the payload should be the response data(for example {data:[{},{},...], "totalPages":7}) that you get from the API.
"ERROR" ? triggered when fetching data is unsuccessful
```

- The reducer state should be updated as follows
  - `loading` should be `true` while fetching data
  - store results in `res` when fetching data is successful and `loading` should be `false`.
  - if there is an error while fetching data `err` should be true.

<h2 style="color:#397ce7">
Components:
</h2>

<h3 style="color:#397ce7">
1. src/App.jsx
</h3>

- The main entry point of the application. Renders the `Navbar` and `AllRoutes` components.

<h3 style="color:#397ce7">
2. src/components/AllRoutes.jsx
</h3>

- Contains all the routes in this component.
- `/login` for the `Login` page.
- `/` for the `Home` page.
- `/products` for `Products` page.

<h3 style="color:#397ce7">
3. src/components/Navbar.jsx
</h3>

- In this component, use the Chakra UI `Link` component with the text content `HOME`. Clicking on this link should navigate the user to `/`.

- Depending on the user's authentication status, one of the following Chakra UI components should be rendered in the DOM:
  - If the user is not authenticated (not logged in), they should see a Chakra UI `Link` tag with the text content `LOGIN`. Clicking on this link should navigate the user to `/login`.
  - If the user is authenticated (logged in successfully), they should see a Chakra UI `Button` tag with the text content `LOGOUT`. Clicking on this `Button` should make the user logged out and the `authDetails` in the context API should be updated to `{ isAuth: false, token: "" }`.

- Please maintain the order of the above components.

Hint: You can use a ternary operator to conditionally render the `LOGIN` Link and `LOGOUT` Button.

   
<h3 style="color:#397ce7">
4. src/pages/login/Login.jsx
</h3>

  <figure style="border: 1px solid gray; ">
  <img src="https://i.imgur.com/PRSS5Kh.png" width="100%">
  <figcaption align = "center"><b>Login Page</b></figcaption>
  </figure>

- The Login page features a form where users can input their `email` and `password`. Use user email as `bruce@wayne.com` and password as `gotham123` as valid credentials.
  - The form should contain 2 chakra-ui `Input` tags and chakra-ui `Button` tag.
    - The first `Input` tag should contain an attribute as `name="email"`.
    - The second `Input` tag should contain an attribute as `name="password"`.
    - The chakra-ui `Button` tag should contain an attribute as `type="submit"`.
    - Give onSubmit to the form only.
- Upon form submission, a `POST` request is sent to the `https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/login`.

  - The post request should have the `req.body` as
    ```json
    {
      "email": "bruce@wayne.com",
      "password": "gotham123"
    }
    ```
  - Sample Response :

    If successful (credentials are valid)

        {
            "token": "r0bINJoKeRGoTham911"
        }

    If not successful

        {
                "message": "Invalid email or password"
        }

  - After getting the token successfully, you can use the login function from the context API and pass the token of that particular user as an argument to the login function, so that the `authDetails` can be updated accordingly.
    - Also the user is redirected to the `/` page.
    - The `Navbar` component should also be updated accordingly.
    - If the user is not authenticated he should stay on the same page.

  ### src/pages/login/api.js

  - Here you can write all the functions and logic required for making API requests related to the Login component.

  #### The following updates should happen in Context API

  - If the user enters the correct credentials ( i.e., the email and password entered by the user are valid, i.e. we get a token after a sucessfull POST request, the `authDetails` in context API should be updated as follows.

  ```json
    {
        isAuth: true,
        token: token
    }
  ```

<h3 style="color:#397ce7">
5. src/pages/home/Home.jsx(`/`)
</h3>

  <figure style="border: 1px solid gray; ">
  <img src="https://i.imgur.com/feL4IfP.png" width="100%">
  <figcaption align = "center"><b>Home Page - Before Login</b></figcaption>
  </figure>
  <figure style="border: 1px solid gray; ">
  <img src="https://i.imgur.com/GI6Rz4j.png" width="100%">
  <figcaption align = "center"><b>Home Page - After Login</b></figcaption>
  </figure>

- This page will display a chakra-ui `Heading` component as="h3" and a `chakra-ui Link` component with the text content `Go to Products Page`. Clicking on it should navigate us to `/products`.
- If the user is not logged in
    - The text content of the above `Heading` component should be `Welcome Guest`
- if the user is logged in(authenticated)
    - The text content should be `Token: {token}`, where `{token}` is the actual token received from the API during login, which we stored in the Context API.

<h3 style="color:#397ce7">  
6. src/pages/Products.jsx(`/products`)
</h3>

<figure style="border: 1px solid gray; ">
  <img src="https://i.imgur.com/v8iq1xt.png" width="100%">
  <figcaption align = "center"><b>Landing page while data is being fetched</b></figcaption>
  </figure>

- This page is used to display products data along with the filter, sort functionality, and pagination buttons. For better understanding, we divided the problem into the following 4 subparts.

### a. Fetching data from API.

   <figure style="border: 1px solid gray; ">
  <img src="https://i.imgur.com/9FKSPdf.png" width="100%">
  <figcaption align = "center"><b>Landing page after data fetched successfully</b></figcaption>
  </figure>

- We need to display only 6 products for the page and by default page number will be one.
- When the page loads, make an API request to the `https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/get-products` to retrieve the products data(You need to add query params to get only 6 products data based on the page and by default page=1).
- After getting the response from the `API` successfully, analyze it and update the reducer state in productsReducer.js and render pagination buttons(based on total pages)
- During `req` and `res` from the json-server `LoadingSkeleton.jsx` component should exist on the DOM. (Regarding `LoadingSkeleton` please go through the below component description)

### API documentation link:-[https://peerabduljabbar.notion.site/Get-all-products-data-with-price-61220e681c5d4420974c2c460a94991a](https://peerabduljabbar.notion.site/Get-all-products-data-with-price-61220e681c5d4420974c2c460a94991a)

### Display of product data.

- Display the product data with the help of `ProductItem.jsx`.
- All the `ProductItem.jsx` should be wrapped inside the chakra-ui `SimpleGrid` component with `data-cy="products-container"`.(Provided in the boiler plate)

### Reducer updates

- To handle the API request's state, you can use the `useReducer` hook as mentioned earlier.
- The state managed by the useReducer hook should include the following keys: {loading, err, res}.
  - dispatch with action type `LOADING` action to update the `loading` to true before fetching the data.
  - dispatch with action type `ERROR` if the when fetching data is unsuccessful to update the `err` to true.
  - dispatch with action type `SUCCESS` if the fetch request is successful and along with payload as the response of the API.

### b. Sort Functionality

- There should be chakra-ui `Select` component with attributes `name="sort"` which is used for sorting the data based on price. It should have 3 options.

  - option with value as "" and text content as `Sort by price : Order`.
  - option with value as "asc" and text content as `Ascending`.
  - option with value as "desc" and text content as `Descending`.

  <figure style="border: 1px solid gray; ">
  <img src="https://i.imgur.com/0pvww6m.png" width="100%">
  <figcaption align = "center"><b>Sort in Ascending Order</b></figcaption>
  </figure>

### c. Filter functionality

- There should be chakra-ui `Select` component with attributes `name="filter"` which is used for filtering the data based on category. It should have 5 options.

  - option with value as "" and text content as `Filter by`.
  - option with value as "men" and text content as `Men`.
  - option with value as "women" and text content as `Women`.
  - option with value as "kids" and text content as `Kids`.
  - option with value as "homedecor" and text content as `Home Decor`.

  <figure style="border: 1px solid gray; ">
  <img src="https://i.imgur.com/fYO5wLm.png" width="100%">
  <figcaption align = "center"><b>Filter by Category Men</b></figcaption>
  </figure>

  Note:-

  1. Don't use any HOF to achieve sorting and filtering. Use query parameters and get the sorted and filtered data from the API.
  2. The combination of sorting and filtering should also work.
  3. Whenever the user filters the data, he should land on page 1 data by default. (For example, if a user is on the 3rd page and selects the Men category, then he should be able to see page 1 Mens data.)

  <figure style="border: 1px solid gray; ">
  <img src="https://i.imgur.com/RuPstyX.png" width="100%">
  <figcaption align = "center"><b>Sort by Ascending Order and Filter by category Men</b></figcaption>
  </figure>

### d. Pagination

- All the buttons should be wrapped inside a chakra-ui `HStack` component with the attribute as `data-cy="pagination"`.
- Based on the response you get from the API, you will be able to see how many total pages are there. Based on it render the required number of buttons using chakra-ui `Button` component.
- The pagination buttons should be numbered as 1,2,3,4.....
- Hint:- The buttons should be rendered based on the total number of pages mentioned in the API response.

### src/pages/products/api.js

- Here you can write all the functions and logic required for making API requests related to Home.jsx component.

<h3 style="color:#397ce7">  
7. src/components/LoadingSkeleton.jsx
</h3>

<figure style="border: 1px solid gray; padding:5px;">
<img src="https://i.imgur.com/M6mNVPD.png" width="100%">
<figcaption align = "center"><b>6 Skeleton components </b></figcaption>
</figure>

- If the API request is in progress (i.e., loading should be true ).
  - Show 6 Skeleton components(Give random width and height or else it will not be visible on the page) from Chakra UI inside Stack (which is already given in boilerplate code with `data-cy="loading-indicator"`). Please note that this should be visible only when loading is true.

<h3 style="color:#397ce7">
8. src/components/ProductItem.jsx
</h3>

<figure style="border: 1px solid gray; padding:5px;">
<img src="https://i.imgur.com/Uhw9hJT.png" width="100%">
<figcaption align = "center"><b>ProductItem's</b></figcaption>
</figure>

- The `ProductItem.jsx` component will receive the product details as a prop, please create the following chakra-ui components::
  - Create `VStack` component with attribute `data-cy="product-card"`.
  - Create an `Image` component with the attribute src as product image
  - Create a `Text` component with text content as `Product : {title}`.
  - Create a `Text` component with text content as `Brand : {brand}`.
  - Create a `Text` component with text content as `Category : {category}`.
  - Create a `Text` component with text content as `Price : {price}`.
  - Create a button with text content as `View in Modal` onclicking which a chakra-ui `Modal` component should open.
    - The modal component should contain the following things.
      - The `ModalHeader` should contain the text content as `Product Name : {title}` where title is the `title` of the product.
      - The `ModalBody` should contain the following components wrapped inside the `VStack`
        - Create an `Image` component with attribute src as product image.
        - Create a `Text` component with text content as `Product : {title}`.
        - Create a `Text` component with text content as `Brand : {brand}`.
        - Create a `Text` component with text content as `Category : {category}`.
        - Create a `Text` component with text content as `Price : {price}`.
      - The `ModalFooter` should contain a `Button` with text content to `Close` the `MODAL`

<figure style="border: 1px solid gray; padding:5px;">
<img src="https://i.imgur.com/AfeUOkE.png" width="100%">
<figcaption align = "center"><b>Fig.2 - ProductItem with modal opened</b></figcaption>
</figure>

<h3 style="color:#397ce7">
9. src/components/ErrorMessage.jsx
</h3>

<figure style="border: 1px solid gray; padding:5px;">
<img src="https://i.imgur.com/K5kNJSP.png" width="100%">
<figcaption align = "center"><b>Error Message</b></figcaption>
</figure>

- This component is rendered whenever the we face any error while fetching the data or an API request is unsuccessful
  - This should contain a chakra-ui `Alert` component with attributes `data-cy="error"` and `status="error"`.
    - The `Alert` component should contain the following subcomponents.
      - `AlertIcon`
      - `AlertTitle` with text content as `Error`
      - `AlertDescription` with text content as `Something went wrong, Please refresh`

<h2 style="color:#397ce7">
Tested on cp.masaischool.com:         
</h2>

<figure style="border: 1px solid gray; ">
  <img src="https://i.imgur.com/XRoBisY.png" width="100%">
</figure>



<h2 style="color:red">
Important Instructions:
</h2>

- Do not remove the `data-cy` attributes from the boilerplate anywhere. Removing them may lead to low scores
- Do not remove the class names present on the tags, they are required for the UI.
- The `options`, `type`, `name`, `tags`, etc mentioned above are CASE-SENSITIVE. So ensure to use them in the same format, as given above.

<h2 style="color:red">
General Instructions:
</h2>

- the system on cp.masaischool.com may take between 1-20 minutes for responding,
- so we request you to read the problem carefully and debug it before itself
- we also request you not just submit it last minute
- try to keep one submission at a time
