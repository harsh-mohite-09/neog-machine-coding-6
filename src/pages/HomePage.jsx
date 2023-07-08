import { Button, Flex, Heading, useDisclosure } from "@chakra-ui/react";
import React from "react";
import Filter from "../components/Filter";
import { useAppContext } from "../context/AppContextProvider";
import RecipeList from "../components/RecipeList";
import RecipeModal from "../components/RecipeModal";

const HomePage = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const {
    state: { recipes },
  } = useAppContext();

  return (
    <Flex as={"main"} flexDir="column" gap={4} p={4}>
      <Filter />
      <Button w="fit-content" onClick={onOpen}>
        Create New Recipe
      </Button>
      <RecipeModal isOpen={isOpen} onClose={onClose} />
      <Heading>All Recipies: </Heading>
      <RecipeList recipes={recipes} />
    </Flex>
  );
};

export default HomePage;
