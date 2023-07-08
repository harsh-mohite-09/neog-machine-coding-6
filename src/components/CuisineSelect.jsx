import React from "react";
import { Button, Flex, Heading } from "@chakra-ui/react";
import { useAppContext } from "../context/AppContextProvider";
import { cuisineData } from "../data";

const CuisineSelect = () => {
  const {
    state: { cuisine: selectedCuisine },
    dispatch,
  } = useAppContext();

  const cuisineSelectHandler = (selectedCuisine) => {
    dispatch({ type: "CUISINE_SELECT", payload: selectedCuisine });
  };

  return (
    <Flex flexDir="column" gap={4} alignItems="center">
      <Heading size="md">Select Your Cuisine:</Heading>
      <Flex gap={4}>
        {cuisineData.map((cuisine) => (
          <Button
            key={cuisine.id}
            variant="myRed"
            isActive={cuisine.id === selectedCuisine}
            onClick={() => cuisineSelectHandler(cuisine.id)}
          >
            {cuisine.name}
          </Button>
        ))}
      </Flex>
    </Flex>
  );
};

export default CuisineSelect;
