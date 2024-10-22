const createMealDetail = (meal) => {
  const container = document.createElement("section");
  container.classList.add("pb-20");

  let ingredientItems = "";
  for (let i = 1; i <= 20; i++) {
    const ingredient = meal[`strIngredient${i}`];
    const measure = meal[`strMeasure${i}`];

    if (ingredient) {
      ingredientItems += `<li>${ingredient} - ${measure}</li>`;
    }
  }

  const youtubeEmbed = meal.strYoutube
    ? `
      <div class="mt-4">
        <h3 class="text-lg font-semibold mb-2">Watch The Tutorial Video:</h3>
        <iframe width="100%" height="315" src="https://www.youtube.com/embed/${meal.strYoutube.split("=")[1]}" allowfullscreen></iframe>
      </div>`
    : "";

  container.innerHTML = `
    <img src="${meal.strMealThumb}" alt="${meal.strMeal}" class="w-full rounded">
    <h2 class="text-2xl font-bold mt-4">${meal.strMeal}</h2>
    <p class="mb-4">Category: ${meal.strCategory} ${meal.strArea} ${meal.strTags}</p>
    <p class="line-clamp-5 text-justify text-gray-600">${meal.strInstructions}</p>
    <div>
      <button class="accordion-btn text-lg font-semibold mt-4 w-full py-2.5 border-y text-left cursor-pointer duration-300 transition-all" onclick="this.nextElementSibling.classList.toggle('hidden')">
        Recipe (Ingredients)
      </button>
      <ul class="list-disc pl-5 hidden">${ingredientItems}</ul>
    </div>
    ${youtubeEmbed}
  `;

  return container;
};
