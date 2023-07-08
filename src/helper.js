export const getFilteredList = (recipes, search, category) => {
  if (search.length === 0) return recipes;
  switch (category) {
    case "name": {
      return recipes.filter((recipe) =>
        recipe.name.toLowerCase().includes(search.toLowerCase())
      );
    }

    case "cuisine": {
      return recipes.filter((recipe) =>
        recipe.cuisine.toLowerCase().includes(search.toLowerCase())
      );
    }

    case "ingredients": {
      return recipes.filter((recipe) =>
        recipe.ingredients.some((item) =>
          item.toLowerCase().includes(search.toLowerCase())
        )
      );
    }

    default:
      break;
  }
};
