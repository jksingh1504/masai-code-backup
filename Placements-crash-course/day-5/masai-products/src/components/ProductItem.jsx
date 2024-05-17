import { Button, Heading, Image, Text, VStack, useDisclosure } from "@chakra-ui/react";
import {
  Modal,

  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
} from '@chakra-ui/react'
import { useState } from "react";
function ProductItem({productData}) {
 
  const [modal, setModal] = useState(false)
  const { isOpen, onOpen, onClose } = useDisclosure()
const showModal =() =>{
  setModal(!modal);
}

if(modal){
  return (
 
 
    <>
    

      <Modal isOpen={!isOpen} onClose={onClose}>
        
        <ModalContent>
          <ModalHeader>Product Name : {productData.title}</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
          <VStack
      data-cy="product-card"
      spacing="12px"
      align="center"
      border="1px solid black"
      p={4}
    >
      <Image src={productData.image} alt={productData.title} />
    
       {/* <Heading as='h4'>Product: {productData.title}</Heading> */}
       <Text>Product: {productData.title} </Text>
      <Text>Brand: {productData.brand}</Text>
      <Text>Category: {productData.category}</Text>
      <Text>Price: {productData.price}</Text> 
      
     
    </VStack>
          </ModalBody>

          <ModalFooter>
            <Button colorScheme='blue' mr={3} onClick={showModal}>
              Close
            </Button>
   
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  
  )
}
  return (
    <>
    <VStack
      data-cy="product-card"
      spacing="12px"
      align="center"
      border="1px solid black"
      p={4}
    >
      <Image src={productData.image} alt={productData.title} />
    
       {/* <Heading as='h4'>Product: {productData.title}</Heading> */}
       <Text>Product: {productData.title} </Text>

      <Text>Brand: {productData.brand}</Text>
      <Text>Category: {productData.category}</Text>
      <Text>Price: {productData.price}</Text> 
      
      <Button  onClick={showModal}>View in Modal</Button>
    </VStack>

    
    </>
    
  );
}

export default ProductItem;
