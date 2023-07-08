import {
  Button,
  Divider,
  Flex,
  FormControl,
  FormLabel,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Select,
  Textarea,
  useToast,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { useAppContext } from "../context/AppContextProvider";

const initialState = {
  rating: 0,
  comment: "",
  revName: "Harsh Mohite",
  pp: "https://res.cloudinary.com/dbiyvbal5/image/upload/v1687718901/chirper/Photo-2-modified_afznog.png",
};

const AddReviewModal = ({ isOpen, onClose, restaurantId }) => {
  const [reviewDetails, setReviewDetails] = useState(initialState);
  const { dispatch } = useAppContext();
  const toast = useToast();

  const addReviewHandler = () => {
    if (reviewDetails.rating === 0) {
      toast({
        title: "Please select a rating",
        duration: 1000,
        isClosable: true,
        status: "error",
        position: "top",
        variant: "subtle",
      });
      return;
    }
    if (reviewDetails.comment.trim().length === 0) {
      toast({
        title: "Please add a comment",
        duration: 1000,
        isClosable: true,
        status: "error",
        position: "top",
        variant: "subtle",
      });
      return;
    }
    dispatch({
      type: "ADD_REVIEW",
      payload: { restaurantId, reviewDetails },
    });
    setReviewDetails(initialState);
    onClose();
  };

  const ratingHandler = (e) => {
    setReviewDetails((prev) => ({ ...prev, rating: +e.target.value }));
  };

  const commentHandler = (e) => {
    setReviewDetails((prev) => ({ ...prev, comment: e.target.value }));
  };

  const closeHandler = () => {
    setReviewDetails(initialState);
    onClose();
  };

  return (
    <Modal isOpen={isOpen} onClose={closeHandler} variant="red" isCentered>
      <ModalOverlay />
      <ModalContent bg="red.500" color="white" borderRadius="1rem">
        <ModalCloseButton
          borderRadius="full"
          border="1px solid"
          height="1.5rem"
          width="1.5rem"
          left="1rem"
          top="1rem"
        />
        <ModalHeader textAlign="center" fontSize="1.5rem">
          Add Your Review
        </ModalHeader>
        <Divider w="50%" m="auto" borderColor="white" borderWidth="1px" />
        <ModalBody pb={4} mt={4}>
          <FormControl>
            <Flex alignItems="center" justifyContent="space-between">
              <FormLabel fontSize="1.2rem">Rating:</FormLabel>
              <Select
                placeholder="Select Rating"
                w="rem"
                bg="white"
                color="black"
                size="sm"
                onChange={ratingHandler}
                value={reviewDetails.rating ?? undefined}
                isRequired
              >
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
              </Select>
            </Flex>
          </FormControl>
          <FormControl mt={4}>
            <FormLabel fontSize="1.2rem">Comment:</FormLabel>
            <Textarea
              bg="white"
              color="black"
              resize="none"
              onChange={commentHandler}
              value={reviewDetails.comment}
            />
          </FormControl>
        </ModalBody>
        <ModalFooter justifyContent="center">
          <Button onClick={addReviewHandler}>Submit</Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default AddReviewModal;
