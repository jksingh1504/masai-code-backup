import { Link, Flex, HStack, Spacer,Heading, LinkBox, Button } from "@chakra-ui/react";
import {AuthContext} from "../context/AuthContextProvider";
import { useContext } from "react";
function Navbar() {
  // import the chakra UI components from the chakra UI library, and remove the following.
  // const Flex = () => <div></div>;
  // const HStack = () => <div></div>;
  // const Spacer=()=><div></div>;
  // const Heading=()=><div></div>;

  const {authDetails, logout} = useContext(AuthContext);
  
  
  
  return (
    <Flex
      data-cy="navbar"
      align="center"
      backgroundColor="gray.900"
      color="gray.50"
      p={4}
    >
     <Heading as="h3" size="lg">
        Masai Products
      </Heading>
      <Spacer />
      <HStack spacing="24px">
        <Link href="/">HOME</Link>
        {
          authDetails.isAuth? 
          <Button onClick={logout}>
            LOGOUT
          </Button> 
          :
          <Link href="/login">
            LOGIN
          </Link>
        }
      </HStack>
    </Flex>
  );
}

export default Navbar;
