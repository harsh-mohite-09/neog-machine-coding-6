import React from "react";
import { Flex, Heading } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import MenuCard from "./MenuCard";

const Restaurant = ({ restaurant }) => {
  return (
    <Flex flexDir="column" gap={4} m="auto">
      <Heading fontSize="1.5rem">Dishes by {restaurant.name}</Heading>
      <Flex gap={4} flexWrap="wrap">
        {restaurant.menu.map((item, i) => (
          <Link to={`/restaurant/${restaurant.id}`} key={i}>
            <MenuCard menuItem={item} restaurantName={restaurant.name} />
          </Link>
        ))}
      </Flex>
    </Flex>
  );
};

export default Restaurant;
