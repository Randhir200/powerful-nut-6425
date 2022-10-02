import React, { useState } from 'react';
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
} from '@chakra-ui/react';
import { useDispatch } from 'react-redux';
import { postData } from '../Redux/projects/action';

const ProjectModal = ({ data }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [project, setProject] = useState({});
  const initialRef = React.useRef(null);
  const finalRef = React.useRef(null);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setProject({
      ...project,
      [name]: value,
    });
    
  };
 const dispatch = useDispatch()
  const handleonSubmit = () => {
    dispatch(postData(project))
  };
 


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
            <ModalHeader>Create your projects</ModalHeader>
            <ModalCloseButton />
            <ModalBody pb={6}>
              <FormControl>
                <FormLabel>project name</FormLabel>
                <Input
                  name='name'
                  ref={initialRef}
                  placeholder='First name'
                  onChange={handleChange}
                />
              </FormControl>

              <FormControl mt={4}>
                <FormLabel>Clients</FormLabel>
                <Select name='project' onChange={handleChange}>
                  <option value='projects'>Clients</option>
                </Select>
              </FormControl>

              <FormControl mt={4}>
                <FormLabel>Privacy</FormLabel>
                <Select name='privacy' onChange={handleChange}>
                <option value='null'>Select</option>
                  <option value='public'>Public to Team</option>
                  <option value='private'>Only selected members</option>
                </Select>
              </FormControl>
              <FormControl mt={4}>
                <FormLabel>Who Can Manage Tasks</FormLabel>
                <Select name='manage' onChange={handleChange}>
                  <option value='null'>Select</option>
                  <option value='everyone'>Everyone</option>
                  <option value='admin'>Admins</option>
                </Select>
              </FormControl>
            </ModalBody>

            <ModalFooter>
              <Button onClick={handleonSubmit} colorScheme='blue' mr={3}>
                Save
              </Button>
              <Button onClick={onClose}>Cancel</Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </form>
    </>
  );
};

export default ProjectModal;
