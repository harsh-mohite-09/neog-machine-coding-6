import { Flex } from "@chakra-ui/react";
import React from "react";
import RecipeCard from "./RecipeCard";
import { useAppContext } from "../context/AppContextProvider";
import { getFilteredList } from "../helper";

const RecipeList = ({ recipes }) => {
  const {
    state: {
      filters: { search, category },
    },
  } = useAppContext();

  const filteredList = getFilteredList(recipes, search, category);

  return (
    <Flex gap={8} flexWrap="wrap">
      {filteredList.map((recipe) => (
        <RecipeCard key={recipe.id} recipe={recipe} />
      ))}
    </Flex>
  );
};

export default RecipeList;
