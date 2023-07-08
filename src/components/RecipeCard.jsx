import React from "react";
import {
  Card,
  CardBody,
  Flex,
  Heading,
  Image,
  Link as ChakraLink,
  Text,
  IconButton,
  useDisclosure,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenToSquare } from "@fortawesome/free-regular-svg-icons";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { useAppContext } from "../context/AppContextProvider";
import RecipeModal from "./RecipeModal";

const RecipeCard = ({ recipe }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { dispatch } = useAppContext();

  const deleteRecipeHandler = () => {
    dispatch({ type: "DELETE_RECIPE", payload: recipe.id });
  };

  return (
    <Card maxW="xs" boxShadow="lg">
      <CardBody>
        <Flex flexDir="column" gap={4}>
          <Flex position="relative">
            <Image
              src={recipe.img}
              alt={recipe.name}
              borderRadius="lg"
              h="15rem"
              w="15rem"
              objectFit="cover"
            />
            <Flex position="absolute" bg="white" top={0} right={0}>
              <IconButton
                icon={<FontAwesomeIcon icon={faPenToSquare} />}
                variant="ghost"
                size="sm"
                onClick={onOpen}
              />
              <RecipeModal isOpen={isOpen} onClose={onClose} recipe={recipe} />
              <IconButton
                icon={<FontAwesomeIcon icon={faTrash} />}
                variant="ghost"
                size="sm"
                onClick={deleteRecipeHandler}
              />
            </Flex>
          </Flex>

          <Heading fontSize="1.5rem">{recipe.name}</Heading>
          <Flex flexDir="column">
            <Flex justifyContent="space-between">
              <Text fontWeight="bold">Cusine Type:</Text>
              <Text>{recipe.cuisine}</Text>
            </Flex>
            <Flex justifyContent="space-between">
              <Text fontWeight="bold">Ingredients:</Text>
              <ChakraLink
                as={Link}
                to={`/recipe/${recipe.id}`}
              >{`See Recipe >`}</ChakraLink>
            </Flex>
            <Flex justifyContent="space-between">
              <Text fontWeight="bold">Instructions:</Text>
              <ChakraLink
                as={Link}
                to={`/recipe/${recipe.id}`}
              >{`See Recipe >`}</ChakraLink>
            </Flex>
          </Flex>
        </Flex>
      </CardBody>
    </Card>
  );
};

export default RecipeCard;
