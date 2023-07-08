import {
  Box,
  Card,
  CardBody,
  Flex,
  Heading,
  Image,
  Text,
} from "@chakra-ui/react";
import React from "react";

const MenuCard = ({ menuItem, restaurantName }) => {
  return (
    <Card w="15rem">
      <CardBody p={0}>
        <Image
          src={menuItem.imgSrc}
          alt={menuItem.name}
          h="15rem"
          objectFit="cover"
          borderTopRadius="0.5rem"
        />
        <Flex flexDir="column" gap={1} p={4}>
          <Heading fontSize="1.2rem">{menuItem.name}</Heading>
          <Box fontSize="0.9rem" color="gray.700">
            <Text>{`Rs. ${menuItem.price} for ${menuItem.qty}`}</Text>
            <Text>{restaurantName}</Text>
          </Box>
        </Flex>
      </CardBody>
    </Card>
  );
};

export default MenuCard;
