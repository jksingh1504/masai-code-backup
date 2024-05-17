import {Container, Heading, Link } from "@chakra-ui/react";
import { AuthContext } from "../../context/AuthContextProvider";
import { useContext } from "react";
function Home() {
  // import the chakra UI components from the chakra UI library, and remove the following.
  // const Container = () => <div></div>;
  // const HStack = () => <div></div>;
  // const Center = () => <div></div>;

  const {authDetails} = useContext(AuthContext);

  return (
    <Container data-cy="home" maxW="container.xl">
      {/*Add Token */}
      {authDetails.isAuth ? 
      <>
      <Heading as='h3'>
        Token: {authDetails.token}
      </Heading>
      <Link href="/products">
      Go to Products Page
      </Link>
      </>:
      <>
      <Heading as='h3'>
        Welcome Guest
      </Heading>
      <Link href="/products">
      Go to Products Page
      </Link>
      </>
      }
    </Container>
  );
}

export default Home;
