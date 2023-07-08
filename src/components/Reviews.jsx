import {
  Avatar,
  Divider,
  Flex,
  Heading,
  Tag,
  TagLabel,
  Text,
} from "@chakra-ui/react";
import { faStar } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const Reviews = ({ reviews }) => {
  return (
    <Flex flexDir="column" gap={8}>
      <Heading fontSize="1.6rem">Reviews</Heading>
      {reviews.map((review, i) => (
        <Flex flexDir="column" gap={2} key={i}>
          <Flex justifyContent="space-between">
            <Flex gap={2}>
              <Avatar src={review.pp} size="sm" />
              <Text fontWeight="bold">{review.revName}</Text>
            </Flex>
            <Tag mr="2rem" gap={1} bg="green.600" color="yellow.300">
              <TagLabel fontSize="1.2rem">{review.rating}</TagLabel>
              <FontAwesomeIcon icon={faStar} />
            </Tag>
          </Flex>
          <Text>{review.comment.trim()}</Text>
          <Divider borderColor="gray.600" />
        </Flex>
      ))}
    </Flex>
  );
};

export default Reviews;
