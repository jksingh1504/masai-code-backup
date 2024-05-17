import {
  Container,
  HStack,
  Center,
  SimpleGrid,
  Button,
  Box,
  Select,
} from "@chakra-ui/react";
import { useEffect, useReducer, useState } from "react";
import { productsReducer, initState } from "./productsReducer";
import { fetchProducts } from "./api";
import LoadingSkeleton from "../../components/LoadingSkeleton";
import ErrorMessage from "../../components/ErrorMessage";
import ProductItem from "../../components/ProductItem";

const Products = () => {
  // ------------- Use the reducer ---------------
  const [state, dispatch] = useReducer(productsReducer, initState);
  const [params, setParams] = useState({
    page:1,
    sort:"",
    order: "",
    filter: ""
  })
  // -------------------- Get Product function -----------------------
  async function getProducts(params) {
    dispatch({
      type: "LOADING",
    });
    try {
      let response = await fetchProducts(params);
      console.log(response.data);
      dispatch({
        type: "SUCCESS",
        payload: { data: response.data.data, pages: response.data.totalPages },
      });
    } catch (e) {
      dispatch({
        type: "ERROR",
      });

      console.log("err", e);
    }
  }

  // ---------------------- useEffect function ---------------------------
  useEffect(() => {
    getProducts(params);
  }, [params.page, params.order,params.filter]);

  //  -----------------------  Set the loading and err based on the state values --------------------
  if (state.loading) {
    return (
      <>
        <LoadingSkeleton />
      </>
    );
  } else if (state.err) {
    return (
      <>
        <ErrorMessage />
      </>
    );
  }
  // ------------------------------- Buttons array -----------------------

  let pagination = new Array(state.res.pages).fill(0);

  // ----------------------- handlePagination -----------------------

  let handlePagination = (page) =>{
    setParams({
      ...params,
      page:page
    });
    getProducts(params);
  }

  // ----------------------- handleSort -----------------------


  let handleSort = (e) =>{
  
    setParams({
      ...params,
      sort:"price",
      order:  e.target.value
    });
    getProducts(params);
  }

  // ----------------------- handleFilter -----------------------


  let handleFilter = (e) =>{
  
    setParams({
      ...params,
      filter: e.target.value,
      page: 1
    });
    getProducts(params);
  }
  return (
    <Container data-cy="products" maxW="container.xl">
      <HStack spacing="24px" my={4}>
        {/*Add Sort Functionality */}
        <Select placeholder='Select option' name='sort' onChange={handleSort}>
  <option value=''>Sort by price : Order </option>
  <option value='asc'>Ascending </option>
  <option value='desc'>Descending </option>
</Select>
        {/*Add Filter Functionality */}


        <Select placeholder='Select option' name='filter' onChange={handleFilter}>
  <option value=''>Filter by </option>
  <option value='men'>Men </option>
  <option value='women'>Women </option>
  <option value='kids'>Kids </option>
  <option value='homedecor'>Home Decor </option>
</Select>
      </HStack>



      <Center my={4}>
        <HStack data-cy="pagination">
          {pagination.map((ele, index) => (
    
    <Button key={index} onClick={()=>handlePagination(index+1)}>{index + 1}</Button>
          ))}
        </HStack>
      </Center>
      <SimpleGrid
        data-cy="products-container"
        columns={{ base: 1, md: 2, lg: 3 }}
        spacing={8}
        m={6}
      >
        {state.res.data &&
          state.res.data.map((ele, index) => (
            <ProductItem productData={ele} key={index} />
          ))}
      </SimpleGrid>
    </Container>
  );
};

export default Products;
