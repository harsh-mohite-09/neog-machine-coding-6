import { Flex, Input, Radio, RadioGroup, Stack, Text } from "@chakra-ui/react";
import React from "react";
import { useAppContext } from "../context/AppContextProvider";

const Filter = () => {
  const {
    state: {
      filters: { search, category },
    },
    dispatch,
  } = useAppContext();

  const handleFilterSelect = (e) => {
    dispatch({ type: "SELECT_FILTER", payload: e.target.value });
  };

  const handleFilterSearch = (e) => {
    dispatch({ type: "SEARCH_FILTER", payload: e.target.value });
  };

  return (
    <Flex border="1px solid #424242" borderRadius="lg" gap={2}>
      <Flex w="15rem">
        <Input
          type="text"
          placeholder="Search the items"
          border="none"
          _active={{ border: "none" }}
          _focus={{ border: "none" }}
          onChange={handleFilterSearch}
          value={search}
        />
      </Flex>
      <Flex alignItems="center" gap={4}>
        <Text fontWeight="bold">Filters:</Text>
        <RadioGroup value={category}>
          <Stack direction="row">
            <Radio value="name" onChange={handleFilterSelect}>
              Name
            </Radio>
            <Radio value="ingredients" onChange={handleFilterSelect}>
              Ingredients
            </Radio>
            <Radio value="cuisine" onChange={handleFilterSelect}>
              Cuisine
            </Radio>
          </Stack>
        </RadioGroup>
      </Flex>
    </Flex>
  );
};

export default Filter;
