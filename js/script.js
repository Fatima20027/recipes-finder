const searchBtn = document.getElementById('search-button');
const getList = document.getElementById('meal');
const closeBtn = document.getElementById('close-btn');
const mealList = document.querySelector('.meal-details-content');



closeBtn.addEventListener('click', () => {
    mealList.parentElement.classList.remove('showRecipe');
});

searchBtn.addEventListener('click', getMealList);
getList.addEventListener('click', mealDetails);


function getMealList(){
    let searchInputTxt = document.getElementById('search-input').value.trim();
    fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${searchInputTxt}`)
    .then(response => response.json())
    .then(data => {
        let html = "";
        if(data.meals){
            data.meals.forEach(meal => {
                html += `
                    <div class = "meal-item" data-id = "${meal.idMeal}">
                        <div class = "meal-img">
                            <img src = "${meal.strMealThumb}" alt = "food">
                        </div>
                        <div class = "meal-name">
                            <h3>${meal.strMeal}</h3>
                            <a href = "#" class = "recipe-btn">Get Recipe</a>
                        </div>
                    </div>
                `;
            });
            getList.classList.remove('notFound');
        } else{
            html = "<h2>Sorry, we didn't find any meal!</h2>";
            getList.classList.add('notFound');
        }

        getList.innerHTML = html;
    });
}

function mealDetails(event){
    event.preventDefault();
    if(event.target.classList.contains('recipe-btn')) {
        let mealItems = event.target.parentElement.parentElement;
        fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealItems.dataset.id}`)
        .then(response => response.json())
        .then(data => getMealDetail(data.meals));
    }
}



function getMealDetail(meal){
    console.log(meal);
    meal = meal[0];
    let html = `
    <h2 class="recipe-name">${meal.strMeal}</h2>
      <p class="recipe-category">${meal.strCategory}</p>
      <div class="instructions">
        <h2>Instructions:</h2>
        <p>${meal.strInstructions}</p>
        <img src="${meal.strMealThumb}" alt="" class="img-instru">
        <div class="video">
          <a href="${meal.strYoutube}">Watch Video</a>
        </div>
      </div>
    `;

    mealList.innerHTML = html;
    mealList.parentElement.classList.add('showRecipe');
    
}










