import {
  Button,
  Flex,
  FormControl,
  FormLabel,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Textarea,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { v4 as uuid } from "uuid";
import { useAppContext } from "../context/AppContextProvider";

const initialState = {
  name: "",
  cuisine: "",
  img: "",
  ingredients: [],
  instructions: [],
};

const RecipeModal = ({ isOpen, onClose, recipe }) => {
  const [recipeDetails, setRecipeDetails] = useState(recipe || initialState);
  const { dispatch } = useAppContext();

  const createRecipeHandler = (e) => {
    e.preventDefault();
    e.stopPropagation();
    if (recipe) {
      dispatch({ type: "EDIT_RECIPE", payload: recipeDetails });
    } else {
      dispatch({
        type: "ADD_RECIPE",
        payload: { ...recipeDetails, id: uuid() },
      });
    }

    onClose();
    setRecipeDetails(initialState);
  };

  const nameInputHandler = (e) => {
    setRecipeDetails((prev) => ({ ...prev, name: e.target.value }));
  };

  const cusineInputHandler = (e) => {
    setRecipeDetails((prev) => ({ ...prev, cuisine: e.target.value }));
  };

  const imgInputHandler = (e) => {
    setRecipeDetails((prev) => ({ ...prev, img: e.target.value }));
  };

  const ingredientsInputHandler = (e) => {
    setRecipeDetails((prev) => ({
      ...prev,
      ingredients: e.target.value.split(","),
    }));
  };

  const instructionsInputHandler = (e) => {
    setRecipeDetails((prev) => ({
      ...prev,
      instructions: e.target.value.split("\n"),
    }));
  };

  const cancelHandler = () => {
    setRecipeDetails(recipe || initialState);
    onClose();
  };

  return (
    <Modal isOpen={isOpen} onClose={cancelHandler} size="lg" m="2">
      <ModalOverlay />
      <ModalContent w="90%">
        <ModalHeader>{recipe ? "Edit Recipe" : "Create Recipe"}</ModalHeader>
        <ModalCloseButton />
        <form onSubmit={createRecipeHandler}>
          <ModalBody justifyContent="space-between">
            <Flex flexDir="column" gap={2}>
              <FormControl isRequired>
                <FormLabel>Name</FormLabel>
                <Input onChange={nameInputHandler} value={recipeDetails.name} />
              </FormControl>
              <FormControl isRequired>
                <FormLabel>Image URL</FormLabel>
                <Input onChange={imgInputHandler} value={recipeDetails.img} />
              </FormControl>
              <FormControl isRequired>
                <FormLabel>Cuisine</FormLabel>
                <Input
                  onChange={cusineInputHandler}
                  value={recipeDetails.cuisine}
                />
              </FormControl>
              <FormControl isRequired>
                <FormLabel>{`Ingredients (Enter comma separated values)`}</FormLabel>
                <Input
                  onChange={ingredientsInputHandler}
                  value={recipeDetails.ingredients.join(",")}
                />
              </FormControl>
              <FormControl isRequired>
                <FormLabel>{`Instructions (Enter new instruction on new line)`}</FormLabel>
                <Textarea
                  onChange={instructionsInputHandler}
                  value={recipeDetails.instructions.join("\n")}
                />
              </FormControl>
            </Flex>
          </ModalBody>
          <ModalFooter>
            <Button mr={3} colorScheme="teal" type="submit">
              {recipe ? "Update" : "Create"}
            </Button>
          </ModalFooter>
        </form>
      </ModalContent>
    </Modal>
  );
};

export default RecipeModal;
