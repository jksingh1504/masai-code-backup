# JS-Recipes-Shop(InfiniteScrolling)

## Installation

```
npm install --engine-strict
```

## Start only Backend server

```
npm run server
```

## Start only Frontend server

```
npm run start
```

## Start both BE & FE in a single command

```
npm run watch
```

# Important files

```
├── index.html
├── scripts
│  └── main.js
```

## Maximum Marks - 10

- The Submission should not contain spaces, for example /rct-101 folder/eval will not work
- Do not push node_modules and package_lock.json to GitHub

```
✅ able to submit the app - 1 mark ( minimum score )

### Test cases for index page

✅ should check if recipe data is being fetched with a limit of 5 - 2 marks
✅ should verify the rendering of the first five recipe cards - 2 mark
✅ should check whether infinite scrolling is working and whether the total results are updating in real-time - 3 marks
✅ should update total results on button click and scrolling - 2 marks

```

# Problem statement

Create a web application where users can fetch and display recipe data with infinite scrolling, adhering to the specified markup and updating the total number of results in the UI. 

- Navbar has already been created no need to build it again.


<div style="color:red;font:bold">
Note:- Don't add extra CSS in the boilerplate. It may result in failing of test cases if you change the CSS in this problem.
</div>

### index page (Infinity scrolling)

1. the user must be able to fetch recipes by making a fetch request by clicking on the `FETCH RECIPES` `button#fetch-recipes` already provided in the boilerplate. The request had to be made to the below URL along with query params so that only <h6 style="color:red;display:inline">5 recipes</h6> would be fetched at a time and we use infinite scrolling to get the recipes by scrolling.

```
const urlAllRecipes = `${baseServerURL}/recipes 
```

A variable called `urlAllRecipes` has already been created for you.

- the route `/recipes` is not protected. you can directly make a `GET` request to get the recipe's data `no need to pass token`
- Note:- you need to pass the query parameters as per the requirement. (For example, you need to fetch only 5 recipes at a time. Initially, page 1 and limit 5 will be applied)
- Whenever the user scrolls the page the additional data should get appended on the screen.
  - When initially clicking on fetch Recipes 5 results should be on screen. When the user scrolls down, an additional 5 results(a total of 10 results) should be there on the DOM. (Every time make a GET request with query params and get the required data)
  - For example:- Initially, we will append a page1 and limit 5 data, when we scroll down completely, the page 2 data will be fetched then page1 and page 2 data(total 10 results) will be there on DOM. and again when the user scrolls down page 3 data will be fetched and page1+page2+page2 data(15 results) will be there on the DOM. In this way, we need to achieve infinite scrolling.
- For knowing which query params to use you can refer to [JSON Server documentation](https://github.com/typicode/json-server).



2. Once the FETCH RECIPES button is clicked you must be able to see the recipe's items/cards. After getting the data render it on the DOM as mentioned in the below markup.

<figure>
  <img src="https://i.imgur.com/WnlcP1Q.png" alt="Image Description" style="width: 100%; border: 1px solid #ccc;">
  <figcaption style="text-align: center; font-weight: bold;">fetch recipe</figcaption>
</figure>

3. The markup of each cart item must be as follows

<div style="color: red">
<h6>Note:- Add all the class names and attributes as mentioned in the markup</h6>
</div>


<figure>
  <img src="https://i.imgur.com/5KDZuU4.png" alt="Image Description" style="width: 100%; border: 1px solid #ccc;">
  <figcaption style="text-align: center; font-weight: bold;">recipe card markup</figcaption>
</figure>

<div style="color:red">
<h6>Note:- The below-mentioned markup is the same as above but provided so that you should not make any typo errors while adding attributes.</h6>
</div>

```
<div class="recipe-card">
      <div>
          <img src="{******You need to render image src of the recipe here********}" alt=""> 
      </div>      
      <div class="recipe-details">
        <h2 class="recipe-name">{***********You need to render name of the recipe here *****}</h2>
        <p class="recipe-price">{*****You need to render price of the recipe here *****}</p>
      </div>
</div>

```
4. The list of recipe items must be wrapped with the following div

```
<div class="data-list-wrapper" id="data-list-wrapper">>
  ...
  ...
  ...
</div>
```

<figure>
  <img src="https://i.imgur.com/iUiKrBG.png" alt="Image Description" style="width: 100%; border: 1px solid #ccc;">
  <figcaption style="text-align: center; font-weight: bold;">list of recipe</figcaption>
</figure>


5. There is a span tag with class="total-results" is there in the boilerplate which should show how many results are there on the DOM. By default the text content will be 0 (as no results will be there on the DOM initially). When the user logs in and clicks on the fetch recipes button, the text content should get updated to 5 (As initially, 5 results should be there on button click). Further when the user scrolls down the text content should get updated based on the number of results appended on the DOM.

- An h2 tag is already added in the template, and your objective is to modify it to reflect the current count of recipes existing in the DOM. For a more comprehensive explanation, please refer to the provided video. The existing h2 tag structure is as follows:

```html
<h2>Total Number Of Results: <span class="total-results">0</span></h2>
```

- Hint : *To implement infinite scroll functionality, attach an event listener to the window and create a function named `handleScroll`. Inside this function, include the necessary logic for handling scrolling actions.* reference [link](https://developer.mozilla.org/en-US/docs/Web/API/Document/scroll_event) 

<video width="90%" height="500" controls>
  <source src="https://i.imgur.com/6jgyjdj.mp4" type="video/mp4">
</video>

<h2 style="color:#397ce7">
Tested on cp.masaischool.com
</h2>

<figure>
  <img src="https://i.imgur.com/NX5iXkX.png" alt="Image Description" style="width: 100%; border: 1px solid #ccc;">
  <figcaption style="text-align: center; font-weight: bold;">Tested on CP</figcaption>
</figure>

### General guidelines

- The system on cp.masaischool.com may take between 1-20 minutes to respond,
- so we request you to read the problem carefully and debug it before itself
- We also request you not just submit it at the last minute
- Try to keep one submission at a time
- Use `${baseServerURL}/what-ever-route` for server url & not `localhost:9090/what-ever-route` in your solution. Failing to do so may cause all the tests to fail.
- If you try to use the VSCodes live server, it won't work. You can use the npm commands provided in this file only.
