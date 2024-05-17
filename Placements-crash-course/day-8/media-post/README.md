## React TS Media Post

**Using TypeScript is mandatory**

## Submission Instructions [Please note]

- Before submitting make sure there is no error or warning in console.
- The Submission should not contain spaces, for example /js-101 folder/eval will not work
- Do not push node_modules and package_lock.json to github

## Maximum Marks - 14

```
 ✅ able to submit the app - 1 mark ( minimum score )
 ✅ GET request is made on homepage to fetch the posts data - 1 mark
 ✅ All the response from the server should be displayed on home page - 1 mark
 ✅ Correct page name should be displayed on the navbar on homepage - 1 mark.
 ✅ Correct page name should be displayed on the navbar on add-post page - 1 mark.
 ✅ Form should be present to take post details on add-post page - 1 mark.
 ✅ User should be able to add new post to the database - 2 marks.
 ✅ Patch request should be made and DOM should be updated when like button is clicked - 2 marks.
 ✅ Patch request should be made and DOM should be updated when dislike button is clicked - 2 marks.
 ✅ Delete request should be made and DOM should be updated when delete button is clicked - 2 marks.

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
│    └── PostCard.tsx
│    └── PostList.tsx
├── >Pages
│    └── HomePage.tsx (Route:- "/")
│    └── AddPost.tsx (Route:- "/add-post")
│    └── MainRoutes.tsx (Add all Routes here)
|
└── api.ts (Make all api calls here)
└── App.tsx
```

## Problem Statement

You have to make a Media Post page where user can add posts to database. User can remove, like and dislike the post.

### HomePage

- HomePage will have `Navbar` and `PostList` component

### AddPost page

- This page will have `Navbar` and a form
- Provide a `form` here to accept data of posts
- Using `form` tag is must.
- The form will have the following input fields

  1. input to accept name with class `post-name`
  2. input to accept image with class `post-image`
  3. input to accept author with class `post-author`
  4. input to accept content with class `post-content`
  5. Select tag for selecting category with class `post-category`

  ```
  "Select Category" : value=""
  "HTML" : value="html"
  "CSS" : value="css"
  "JS" : value="js"
  "React" : value="react"
  ```

- Provide a `button` to submit with class`submit-form`

- On submitting make a POST request to the server and update the data.
- The structure of the post data object will be

```
{
  name: "",
  author: "",
  image: "",
  content: "",
  category: "",
  like: 0,
  dislike: 0,
},
```

<img src="https://masai-course.s3.ap-south-1.amazonaws.com/editor/uploads/2023-06-09/Screenshot%202023-06-09%20at%208.36.45%20AM_158516.png" alt="add-post"/>

### Navbar

- It will accept the page name as a prop
- Correct page name should be displayed on every page.
- Show this page name in h3 tag with `data-testid=page-name`
- Refer image for more clarity

### PostList

- Here you will show the list of posts in grid format
- Show all the posts within div with `data-testid="post-list"`
- Maintain a state for the posts data
  `const [posts, setPosts] = useState([])`
- Map through the posts using `PostCard` component.
- Get request will be made when home page load and the `posts` state will be updated.

### PostCard

- It will be used to display individual posts.
- It will accept the `posts data` and `setPosts` as prop, that will be passed from `PostList`.
- Every post card will have class `post-card`
- It will contain the following

```
  1. Image with class `post-image`
  2. Name with class `post-name`
  3. Author with class `post-author`
  4. Content with class `post-content`
  5. Category with class `post-category`
  6. Like button with `data-testid="like-button"`
  7. Dislike button button with `data-testid="dislike-button"`
  8. Like count with class `post-like`
  9. Dislike count with class `post-dislike`
  10. Delete button with `data-testid=delete-button`
```

- On clicking like and dislike button make patch request and update the data.
- The change should also be reflected on the DOM.
- Like and dislike count will be reflected in real time.

**Note:-**

- Do not make another get request after POST, PATCH, or DELETE REQUEST
- To update the DOM use only the `setPost` function, that will be accepted as a prop.
- Do not make another get request to update the DOM.

<img src="https://masai-course.s3.ap-south-1.amazonaws.com/editor/uploads/2023-06-09/Screenshot%202023-06-09%20at%208.36.19%20AM_862646.png" alt="Post List"/>

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
