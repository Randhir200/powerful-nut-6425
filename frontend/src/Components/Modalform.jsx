import React, { useState } from 'react'
import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    useDisclosure,
    Input,
    Select,
    FormControl,
    FormLabel,
    Button,
    Textarea,
    Flex,
  } from '@chakra-ui/react'


const Modalform = ({data}) => {
    const { isOpen, onOpen, onClose } = useDisclosure()
const [client,setClient]= useState({})
    const initialRef = React.useRef(null)
    const finalRef = React.useRef(null)
   const handleChange=(e)=>{
    const{name,value}=e.target
    setClient({
      ...client,
      [name]:value
    })
    // console.log(client)
   }

    const handleonSubmit=(e)=>{
      e.preventDefault();
      console.log(client);
      // onClose()
    }    


  return (
    <>
        <form onSubmit={handleonSubmit}>
      <Button onClick={onOpen}>{data}</Button>

      <Modal
        initialFocusRef={initialRef}
        finalFocusRef={finalRef}
        isOpen={isOpen}
        onClose={onClose}
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Create your account</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
            <FormControl>
              <FormLabel>client name</FormLabel>
              <Input name="clientname" ref={initialRef} placeholder="First name"  onChange={handleChange}/>
            </FormControl>

            <FormControl mt={4}>
              <FormLabel   >Projects</FormLabel>
              <Select name="project" onChange={handleChange} >
                  <option value="projects" >projects</option>
                  
                </Select>
            </FormControl>

            <FormControl mt={4}>
              <FormLabel>Email</FormLabel>
              < Input  name="email" onChange={handleChange} />
            </FormControl>
            <FormControl mt={4}>
              <FormLabel>Business Details</FormLabel>
              <Textarea size="lg" name="bussiness" onChange={handleChange} />
            </FormControl>
            <Flex gap={"20px"}  mt={7}>
              <FormControl>
                <FormLabel>Tax, %</FormLabel>
                <Input type="email"  name="tax" onChange={handleChange}/>
              </FormControl>

              <FormControl>
                <FormLabel>Discount, %</FormLabel>
                <Input type="email" name="discount" onChange={handleChange}/>
              </FormControl>

              <FormControl>
                <FormLabel >Due Terms</FormLabel>
                <Select name="due"  onChange={handleChange}>
                  <option value="Imm">Imm</option>
                  <option value="3days">+3days</option>
                  <option value="5days">+5days</option>
                  <option value="7days">+7days</option>
                </Select>
              </FormControl>
            </Flex >
          </ModalBody>

          <ModalFooter>
            <Button onClick={handleonSubmit} colorScheme="blue" mr={3}>
              Save
            </Button>
            <Button   onClick={onClose}>Cancel</Button>
          </ModalFooter>
        </ModalContent>
        </Modal>
        </form>
    </>
  )
}

export default Modalform