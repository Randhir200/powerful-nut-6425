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
import { EditIcon } from '@chakra-ui/icons';
import { useDispatch, useSelector } from 'react-redux';
import { editData, postData } from '../Redux/clients/action';
import { useEffect } from 'react';
import { getData } from '../Redux/projects/action';

const Modalclient = ({
  data,
  handleBool,
  bool,
  title,
  isEdit,
  id,
  handleUpdate,
  isUpdate,
}) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [project, setProject] = useState({});
  const initialRef = React.useRef(null);
  const finalRef = React.useRef(null);
  const projectData = useSelector((state) => state.projectReducer.data);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setProject({
      ...project,
      [name]: value,
    });
  };
  const dispatch = useDispatch();
  const handleonSubmit = () => {
    handleBool(bool + 1);
    if (isEdit) {
      dispatch(editData({ id, project }));
      handleUpdate(true);

      setTimeout(() => {
        handleUpdate(false);
      }, 1000);
    } else {
      dispatch(postData(project));
    }

    onClose();
  };
  useEffect(() => {
    dispatch(getData(`http://localhost:8080/projects/`));
  }, []);
  return (
    <>
      <form onSubmit={handleonSubmit}>
        {isEdit ? (
          <EditIcon onClick={onOpen}>{data}</EditIcon>
        ) : (
          <Button bg='lightgreen' color='green' onClick={onOpen}>
            {data}
          </Button>
        )}

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
                <Input
                  name='Client_name'
                  ref={initialRef}
                  placeholder='First name'
                  onChange={handleChange}
                />
              </FormControl>

              <FormControl mt={4}>
                <FormLabel>Projects</FormLabel>
                <Select name='Projects' onChange={handleChange}>
                  <option value='null'>Select</option>
                  {projectData.map((el) => (
                    <option key={el._id} value={[el._id, el.name]}>
                      {el.name}
                    </option>
                  ))}
                </Select>
              </FormControl>

              <FormControl mt={4}>
                <FormLabel>Email</FormLabel>
                <Input name='email' onChange={handleChange} />
              </FormControl>
              <FormControl mt={4}>
                <FormLabel>Business Details</FormLabel>
                <Textarea
                  size='lg'
                  name='Business_Details'
                  onChange={handleChange}
                />
              </FormControl>
              <Flex gap={'20px'} mt={7}>
                <FormControl>
                  <FormLabel>Tax, %</FormLabel>
                  <Input type='number' name='Tax' onChange={handleChange} />
                </FormControl>

                <FormControl>
                  <FormLabel>Discount, %</FormLabel>
                  <Input
                    type='number'
                    name='Discount'
                    onChange={handleChange}
                  />
                </FormControl>

                <FormControl>
                  <FormLabel>Due Terms</FormLabel>
                  <Select name='due' onChange={handleChange}>
                    <option value='Imm'>Imm</option>
                    <option value='3days'>+3days</option>
                    <option value='5days'>+5days</option>
                    <option value='7days'>+7days</option>
                  </Select>
                </FormControl>
              </Flex>
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

export default Modalclient;
