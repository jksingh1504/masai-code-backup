//add your js code here
function handleSignUp() {
    event.preventDefault();
    const elements = event.target.children;
    const formData = {};
    for (const ele of elements) {
      if (ele.name) {
        formData[ele.name] = ele.value;
      }
    }
    console.log(formData,"signUp data")
    localStorage.setItem("userInfo",JSON.stringify(formData))
  }
  