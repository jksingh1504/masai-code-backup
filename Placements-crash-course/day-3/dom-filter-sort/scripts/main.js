// --- do not touch  ↓↓↓↓↓↓↓↓↓↓↓↓ ----------
const baseServerURL = `http://localhost:${
  import.meta.env.REACT_APP_JSON_SERVER_PORT
}`;
// --- do not touch  ↑↑↑↑↑↑↑↑↑↑↑↑ ----------

const userLoginURL = `${baseServerURL}/login`;
const urlTodos = `${baseServerURL}/todos/`;

let mainSection = document.getElementById("data-list-wrapper");
let notificationWrapper = document.getElementById("notifications-wrapper");

let loginUserUsername = document.getElementById("login-user-username");
let loginUserPassword = document.getElementById("login-user-password");
let loginUserButton = document.getElementById("login-user");

let getTodoButton = document.getElementById("fetch-todos");

let sortLowToHigh = document.getElementById("sort-low-to-high");
let sortHighToLow = document.getElementById("sort-high-to-low");
let filterCompleted = document.getElementById("filter-completed");
let filterPending = document.getElementById("filter-pending");


let order = "";
let title = "";
let completed = null;
// ------------ Getting values from the local storage --------------------

let token = JSON.parse(localStorage.getItem("token")) || null;
let username = JSON.parse(localStorage.getItem("username")) || null;
console.log(token, username);
// --------- Fetch functions --------------------------------

function fetchTodos() {
  let url;
if(completed===null){
  url = `${urlTodos}?_sort=${title}&_order=${order}`;

}else{
  url = `${urlTodos}?_sort=${title}&_order=${order}&completed=${completed}`;

}
  fetch(url,{
    method: 'GET',
    headers: {
      "Authorization": `Bearer ${token}`
    }
  })
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      mainSection.innerHTML = null;
      let todoListWrapper = appendData(data);
      mainSection.append(todoListWrapper)
    })
    .catch((err) => {
      console.log(err);
    });
}

function fetchLogin(username, password) {
  let login = {
    username,
    password,
  };
  fetch(userLoginURL, {
    method: "POST",
    body: JSON.stringify(login),
    headers: {
      "Content-type": "application/json",
    },
  })
    .then((res) => res.json())
    .then((data) => {
      if (data.user) {
        localStorage.setItem("username", JSON.stringify(data.user.username));
        localStorage.setItem("token", JSON.stringify(data.accessToken));
        console.log(data);
        notificationWrapper.innerHTML = null;
        let notification = createNotificationElement(data.user.username);
        notificationWrapper.appendChild(notification);
      } else {
       

      }
    })
    .catch((err) => {
      console.log(err);


      alert("Please Fill correct credentials ");
    });
}


function patchRequest(id,value){

  let toggle = {
    completed : !value
  }
  fetch(`${urlTodos}/${id}`,{
    method: 'PATCH',
    body: JSON.stringify(toggle),
    headers: {
      "Content-Type": "application/json",

      "Authorization": `Bearer ${token}`
    }
  })
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      fetchTodos();
    })
    .catch((err) => {
      console.log(err);
    });
}
// -------------- Checking login credentials --------------
loginUserButton.addEventListener("click", (e) => {
  e.preventDefault();
  fetchLogin(loginUserUsername.value, loginUserPassword.value);
});
// -----------------------------------------------------

// ---------- Invoking fetchTodo -----------------
getTodoButton.addEventListener("click", (e) => {
  e.preventDefault();
  order = "";
  title = "";
  completed = null;
  fetchTodos();
});
// ---------------------------------------------
// ----------------- appending the Login Creds ----------------

if (token !== null) {
  notificationWrapper.innerHTML = null;
  
  let notification = createNotificationElement(username);

  notificationWrapper.appendChild(notification);
}

// ------------ appending createNotificationElement function  --------------------------------
function createNotificationElement(username) {
  console.log(username);
  let notification = document.createElement("h5");
  notification.innerText = `hey ${username}, welcome back!`;
  notification.classList.add("notification");
  notification.classList.add("info");
  return notification;
}
// ----------------- appending the todo list ----------------

function appendData(data) {

let todoListWrapper = document.createElement("div");
todoListWrapper.className = "todo-list-wrapper";
todoListWrapper.id = "todo-list-wrapper";

data.forEach((ele,index) =>{

  let label = document.createElement("label");
  label.classList.add("todo-item-label");

  let input = document.createElement("input");
  input.classList.add("todo-item-checkbox");
  input.setAttribute("data-id", ele.id);
  input.setAttribute("type", "checkbox");
 input.checked = ele.completed;
  
 input.addEventListener("click", (e) =>{
e.preventDefault();
patchRequest(ele.id,ele.completed)
 }
)
  label.append(input,ele.title);

  todoListWrapper.append(label);
});
return todoListWrapper;

}

// ---------- sorting functions --------------------------------

sortLowToHigh.addEventListener("click", (e) => {
  e.preventDefault();
   title = "title";
   order = "asc";
  fetchTodos();
});

sortHighToLow.addEventListener("click", (e) => {
  e.preventDefault();
   title = "title";
   order = "desc";
  fetchTodos();
})

// ------------------------------------------------

// --------------- filter functions --------------------------------
filterCompleted.addEventListener("click", (e) => {
  e.preventDefault();
  completed = true;
  fetchTodos();
});

filterPending.addEventListener("click", (e) => {
  e.preventDefault();
  completed = false;
  fetchTodos();
})
// ------------------------------------------------


