import { Button, Container, Input } from "@chakra-ui/react";
import axios from "axios";
import { AuthContext } from "../../context/AuthContextProvider";
import { useContext } from "react";
import {useNavigate } from "react-router-dom";
import { getLogin } from "./api";
function Login() {
  // import the chakra UI components from the chakra UI library, and remove the following.
  // const Container = () => <div></div>;
  const {login} = useContext(AuthContext);
 const navigate = useNavigate()
  const handleForm = async (e) => {
    e.preventDefault();

    let email = e.target.email.value;
    let password = e.target.password.value;
    let response= await getLogin(email,password);
    console.log(response);

    if(response === "Invalid email or password"){
console.log("error")
    }else{
      login(response);
  navigate("/")
    }
   
  };
  return (
    <Container data-cy="login" maxW="container.md" mt={4}>
      {/* Add form here */}
      <form onSubmit={handleForm}>
        <Input name="email" type="email" placeholder="Email" id="email"></Input>
        <Input
          name="password"
          type="password"
          placeholder="Password"
          id="password"
        ></Input>
        <Button type="submit">LOG IN</Button>
      </form>
    </Container>
  );
}

export default Login;
