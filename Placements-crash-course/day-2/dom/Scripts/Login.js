//add your js code here
function handleLogin() {
  event.preventDefault();
  const elements = event.target.children;
  const formData = {};
  for (const ele of elements) {
    if (ele.name) {
      formData[ele.name] = ele.value;
    }
  }
  console.log(formData, "login data");
  const userInfo = JSON.parse(localStorage.getItem("userInfo"));
  if (
    formData.email === userInfo.email &&
    formData.password === userInfo.password
  ) {
    window.location.href = "index.html";
  } else {
    alert("invalid credentials!");
  }
}
