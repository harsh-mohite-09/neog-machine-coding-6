import React from "react";
import { useAppContext } from "../context/AppContextProvider";
import { Flex } from "@chakra-ui/react";
import Restaurant from "./Restaurant";

const RestaurantList = () => {
  const {
    state: { cuisine, restaurants },
  } = useAppContext();

  const restaurantList = restaurants.filter(
    ({ cuisine_id }) => cuisine_id === cuisine
  );

  return (
    <Flex flexDir="column" gap={16} pb={8}>
      {restaurantList.map((restaurant) => (
        <Restaurant key={restaurant.id} restaurant={restaurant} />
      ))}
    </Flex>
  );
};

export default RestaurantList;
