const API_BASE_URL = "https://www.themealdb.com/api/json/v1/1";

const fetchCategories = async () => {
  try {
    const response = await axios.get(`${API_BASE_URL}/categories.php`);
    return response.data.categories;
  } catch (error) {
    console.error("Error fetching categories:", error);
    return [];
  }
};

const fetchMealsByCategory = async (categoryName) => {
  try {
    const response = await axios.get(
      `${API_BASE_URL}/filter.php?c=${categoryName}`,
    );
    return response.data.meals;
  } catch (error) {
    console.error(`Error fetching meals for category ${categoryName}:`, error);
    return [];
  }
};

const fetchMealDetails = async (mealId) => {
  try {
    const response = await axios.get(`${API_BASE_URL}/lookup.php?i=${mealId}`);
    return response.data.meals[0];
  } catch (error) {
    console.error(`Error fetching meal details for ID ${mealId}:`, error);
    return null;
  }
};
