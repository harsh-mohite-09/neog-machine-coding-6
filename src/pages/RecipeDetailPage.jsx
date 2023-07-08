import React from "react";
import { useParams } from "react-router-dom";
import { useAppContext } from "../context/AppContextProvider";
import {
  Card,
  CardBody,
  Flex,
  Heading,
  Image,
  ListItem,
  OrderedList,
  Text,
} from "@chakra-ui/react";

const RecipeDetailPage = () => {
  const { id: recipeId } = useParams();
  const {
    state: { recipes },
  } = useAppContext();

  const recipe = recipes.find(({ id }) => id === recipeId);

  console.log(recipe);

  return (
    <Flex as={"main"} flexDir="column" alignItems="center" gap={8} p={4}>
      <Heading size="lg">{recipe.name}</Heading>
      <Card
        direction={{ base: "column", sm: "row" }}
        overflow="hidden"
        boxShadow="xl"
        w="80%"
      >
        <Image
          objectFit="cover"
          maxW="25rem"
          aspectRatio="1/1"
          src={recipe.img}
          alt={recipe.name}
        />

        <CardBody>
          <Flex flexDir="column" gap={4}>
            <Heading size="md">Cusine: {recipe.cuisine}</Heading>

            <Flex gap={2}>
              <Text as={"span"} fontWeight="bold">
                Ingredients:{" "}
              </Text>
              <Text>{recipe.ingredients.join(", ")}</Text>
            </Flex>
            <Flex flexDir="column" gap={4}>
              <Text fontWeight="bold">Instructions:</Text>
              <OrderedList>
                {recipe.instructions.map((instruction) => (
                  <ListItem>{instruction}</ListItem>
                ))}
              </OrderedList>
            </Flex>
          </Flex>
        </CardBody>
      </Card>
    </Flex>
  );
};

export default RecipeDetailPage;
