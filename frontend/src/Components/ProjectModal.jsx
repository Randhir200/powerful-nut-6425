import React, { useEffect, useState } from 'react';
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
import { editData, postData } from '../Redux/projects/action';
import { getData } from '../Redux/clients/action';
const ProjectModal = ({
  data,
  handleBool,
  bool,
  title,
  isEdit,
  id,
  handleUpdate,
  isUpdate,
}) => {
  const clientData = useSelector((state) => state.clientReducer.data);
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
  const dispatch = useDispatch();
  const handleonSubmit = () => {
    if (isEdit) {
      dispatch(editData({ id, project }));
      handleUpdate(true);

      setTimeout(() => {
        handleUpdate(false);
      }, 1000);
    } else {
      dispatch(postData(project));
    }

    handleBool(bool + 1);
    onClose();
  };
  useEffect(() => {
    dispatch(getData(`http://localhost:8080/clients/`));
  }, []);
  return (
    <>
      <form onSubmit={handleonSubmit}>
        {isEdit ? (
          <EditIcon onClick={onOpen}>{data}</EditIcon>
        ) : (
          <Button bg='lightgreen' color='green' onClick={onOpen}>{data}</Button>
        )}

        <Modal
          initialFocusRef={initialRef}
          finalFocusRef={finalRef}
          isOpen={isOpen}
          onClose={onClose}
        >
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>{title}</ModalHeader>
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
                <Select name='clientId' onChange={handleChange}>
                  <option value='null'>Select</option>
                  {clientData.map((el) => (
                    <option key={el._id} value={[el._id, el.Client_name]}>
                      {el.Client_name}
                    </option>
                  ))}
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
