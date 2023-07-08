import React from "react";
import {
  Box,
  Button,
  Divider,
  Flex,
  Heading,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import AddReviewModal from "../components/AddReviewModal";
import Reviews from "../components/Reviews";
import { Link, useParams } from "react-router-dom";
import { useAppContext } from "../context/AppContextProvider";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";

const RestaurantPage = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { id: restaurantId } = useParams();
  const {
    state: { restaurants },
  } = useAppContext();

  const restaurant = restaurants.find(({ id }) => id === +restaurantId);

  const menuItems = restaurant.menu.map(({ name }) => name);

  const avgRating =
    restaurant.ratings.reduce((acc, { rating }) => acc + rating, 0) /
    restaurant.ratings.length;

  return (
    <Flex flexDir="column" gap={4}>
      <Box pos="absolute" top="2rem" left="2rem">
        <Link to="/">
          <FontAwesomeIcon icon={faArrowLeft} fontSize="2rem" />
        </Link>
      </Box>
      <Flex w="52rem" m="auto" flexDir="column" gap={4} mt="5rem">
        <Flex justifyContent="space-between" w="full" alignItems="center">
          <Flex flexDir="column">
            <Heading mb={2}>{restaurant.name}</Heading>
            <Text>{menuItems.join(", ")}</Text>
            <Text>{restaurant.address}</Text>
            <Text>Average rating: {avgRating.toFixed(1)} </Text>
          </Flex>
          <Button variant="myRed" onClick={onOpen}>
            Add Review
          </Button>
          <AddReviewModal
            isOpen={isOpen}
            onClose={onClose}
            restaurantId={restaurant.id}
          />
        </Flex>
        <Divider borderColor="gray.600" />
        <Reviews reviews={restaurant.ratings} />
      </Flex>
    </Flex>
  );
};

export default RestaurantPage;
