import React from "react";
import { Flex, Heading } from "@chakra-ui/react";
import CuisineSelect from "../components/CuisineSelect";
import RestaurantList from "../components/RestaurantList";

const HomePage = () => {
  return (
    <Flex as="main" flexDir="column" gap={8}>
      <Heading as="h1" size="lg" mt={4} textAlign="center">
        Food Ordereing App
      </Heading>
      <CuisineSelect />
      <RestaurantList />
    </Flex>
  );
};

export default HomePage;
