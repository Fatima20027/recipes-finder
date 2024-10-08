document.addEventListener("DOMContentLoaded", function() {
  const fetchData = async (url) => {
    const response = await fetch(url);
    const data = await response.json();
    return data;
  };

  const getCategories = async () => {
    const data = await fetchData('https://www.themealdb.com/api/json/v1/1/categories.php');
    const categories = data.categories;
    const categoryList = document.getElementById("filter-category");
    categoryList.innerHTML = '';

    categories.forEach(category => {
        const aTag = document.createElement('a');
        aTag.href = "#";
        aTag.textContent = category.strCategory;

        aTag.addEventListener('click', async (event) => {
            event.preventDefault();
            const categoryMeals = await fetchData(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${category.strCategory}`);
            getMealList(categoryMeals.meals);
        });

        categoryList.appendChild(aTag);
    });
};



  const getIngredients = async () => {
    const data = await fetchData('https://www.themealdb.com/api/json/v1/1/list.php?i=list');
    const ingredients = data.meals;
    const ingredientList = document.getElementById("filter-ingredient");
    ingredientList.innerHTML = '';

    ingredients.forEach(ingredient => {
      const aTag = document.createElement('a');
      aTag.href = "#";
      aTag.textContent = ingredient.strIngredient;
      ingredientList.appendChild(aTag);

      aTag.addEventListener('click', async (event) => {
        event.preventDefault();
        const ingredientMeals = await fetchData(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient.strIngredient}`);
        getMealList(ingredientMeals.meals);
      });

      ingredientList.appendChild(aTag);
    });
  };


  const getAreas = async () => {
    const data = await fetchData('https://www.themealdb.com/api/json/v1/1/list.php?a=list');
    const areas = data.meals;
    const areaList = document.getElementById("filter-area");
    areaList.innerHTML = '';  // Clear any existing content

    areas.forEach(area => {
      const aTag = document.createElement('a');
      aTag.href = "#";
      aTag.textContent = area.strArea;
      areaList.appendChild(aTag);
    });
  };

  getCategories();
  getIngredients();
  getAreas();
});
