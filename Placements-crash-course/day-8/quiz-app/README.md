## React TS Quiz App

**Using TypeScript is mandatory**

## Submission Instructions [Please note]

- Before submitting make sure there is no error or warning in console.
- The Submission should not contain spaces, for example /js-101 folder/eval will not work
- Do not push node_modules and package_lock.json to github

## Maximum Marks - 14

```
 ✅ able to submit the app - 1 mark ( minimum score )
 ✅ Correct page name should be displayed on the navbar on homepage - 1 mark
 ✅ Form should be present to take Quiz problem details on Home page - 1 mark
 ✅ User should be able to add quiz problem to the database - 2 marks.
 ✅ GET request is made on All Problems page to fetch the quiz data - 1 marks.
 ✅ All the response from the server should be displayed on All Problems page - 1 marks.
 ✅ Problem Card should have all the required data in correct format - 2 marks.
 ✅ Correct page name should be displayed on the navbar on All Problems page - 1 mark.
 ✅ Patch request should be made and DOM should be updated when weightage+ button is clicked-1 - 1 mark.
 ✅ Patch request should be made and DOM should be updated when weightage+ button is clicked-2 - 1 marks.
 ✅ Patch request should be made and DOM should be updated when weightage- button is clicked-1 - 1 mark.
 ✅ Patch request should be made and DOM should be updated when weightage- button is clicked-2 - 1 marks.

```

## Installation

- Use node version(LTS) should be `v16.16.0`
- Don't change/override package.json
- please make sure you do not push package-lock.json

```
// install node_modules
npm install --engine-strict

// run locally
npm run start

//to start the json-server

npm run server
```

- **_Note_**:

1. Make sure that the json-server is up and running at port 8080
2. There is a .env file. Include `REACT_APP_JSON_SERVER_PORT=8080` in it
3. Use `http://localhost:${process.env.REACT_APP_JSON_SERVER_PORT}` as the json-server base url

## Folder Structure

```
>src
├── >Components
│    └── Navbar.tsx
│    └── AddQuiz.tsx
│    └── ProblemCard.tsx
│    └── ProblemList.tsx
├── >Pages
│    └── HomePage.tsx (Route:- "/")
│    └── AllProblems.tsx (Route:- "/all-problems")
│    └── MainRoutes.tsx (Add all Routes here)
|
└── api.ts (Make all api calls here)
└── App.tsx
```

## Problem Statement

You have to create a quiz app where you can add quiz, see list of all problems and can increase or decrease weightage.

### Navbar

- It will accept the page name as a prop
- Correct page name should be displayed on every page.
- On Home Page :- `Home Page`
- On Add problems page :- `All Problems`
- Show this page name in h3 tag with `data-testid=page-name`

### HomePage

- HomePage will have `Navbar` and `AddQuiz` component

### AddQuiz

- Provide a form here to accept question and four options with the correct option and weightage.
- Using `form` tag is must.
- The form will have the input fields for the following
  1. Problem statement with class `problem-statement`
  2. Option A with class `option-a`
  3. Option B with class `option-b`
  4. Option C with class `option-c`
  5. Option D with class `option-d`
  6. Correct option select-tag with class `correct-option`

```
<option value="">Select Correct Option</option>
<option value="a">A</option>
<option value="b">B</option>
<option value="c">C</option>
<option value="d">D</option>
```

- Provide a `button` to submit with class `submit-form`
- On submitting make a POST request to the server and update the data.
- The structure of the problem object will be as the below given example

```
{
  "problem": "What is the purpose of the useRef hook in React?",
  "a": "Accessing DOM elements",
  "b": "Handling form submissions",
  "c": "Creating custom hooks",
  "d": "None",
  "correct": "a",
  "weightage": 7,
  "id": 10  // Id will be created by the json-server
}
```

<img width="1726" alt="Screenshot 2023-03-24 at 9 31 13 AM" src="https://masai-course.s3.ap-south-1.amazonaws.com/editor/uploads/2023-07-13/Screenshot%202023-07-13%20at%2012.56.01%20AM_758653.png">

### AllProblems page

- This page will have `Navbar` and `ProblemList` components

### ProblemList

- Here you will show the list of problems in grid format
- Show all the problems within div with `data-testid="problem-list"`
- Maintain a state for the problems
  `const [problems, setProblems] = useState([])`
- Map through the problems using `ProblemCard`
- Get request will be made when `All Problems` page load and the `problems` state will be updated.

### ProblemCard

- It will be used to display individual problems.
- It will accept the `problem data` and `setProblems` as prop, that will be passed from `ProblemList`.
- It will contain the following

  1. Problem statement with class `problem-statement`
  2. Option A with class `option-a`
  3. Option B with class `option-b`
  4. Option C with class `option-c`
  5. Option D with class `option-d`
  6. Correct option with class `correct-option`
  7. Weightage with class `marks`
  8. `Weightage+` button with `data-testid=increase-weightage`
  9. `Weightage-` button with `data-testid=decrease-weightage`

- On clicking `Weightage+` and `Weightage-` button make patch request and update the data.
- The change should also be reflected on the DOM.

**Refer the Image for better Clarity**

<img width="1726" alt="Screenshot 2023-03-24 at 9 31 13 AM" src="https://masai-course.s3.ap-south-1.amazonaws.com/editor/uploads/2023-07-13/Screenshot%202023-07-13%20at%2012.55.50%20AM_541248.png">

**Note:-**

- Do not make another get request after POST, PATCH, or DELETE REQUEST
- To update the DOM use only the `setProblems` function, that will be accepted as a prop.
- Do not make another get request to update the DOM.

## General Instructions (**_IMPORTANT_**)

1. Do not use Global CSS, instead use `<componentName>.module.css` convention for Css in that file.

2. Do Not Remove ` data-testid="xxxx"` from anywhere, this are used by testing tools to test your code, removal of this will lead to low score.

3. Make sure you use only the given components and dont create new files and folders as chaging component name, structures might result in giving you zero marks.

4. Make sure you use only the given data and dont create new data, as chaging data might result in giving you zero marks.

**Note** - This might not be all the things, you are free to use other components.

#### General guidelines

- The system on cp.masaischool.com may take between 1-20 minutes for responding,
- so we request you to read the problem carefully and debug before itself
- we also request you not to just submit it last minute
- try to keep one submission at a time
