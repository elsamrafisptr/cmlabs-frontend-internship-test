const createMealCard = (meal, categoryName) => {
  const card = document.createElement("article");

  card.classList.add(
    "meal-card",
    "p-4",
    "bg-white",
    "rounded-lg",
    "border",
    "hover:shadow-lg",
    "duration-300",
    "transition-all",
    "cursor-pointer",
    "h-fit",
  );

  card.setAttribute("data-aos", "fade-up");
  card.setAttribute("data-aos-duration", "700");

  card.innerHTML = `
    <img src="${meal.strMealThumb}" alt="${meal.strMeal}" class="w-full rounded">
    <div class="flex flex-col items-center justify-center mt-2">
      <h3 class="text-lg font-semibold text-center">${meal.strMeal.split(" ").splice(0, 4).join(" ")}</h3>
      <p class="text-gray-600">${categoryName}</p>
    </div>
    <button class="mt-6 w-full py-1.5 flex justify-center items-center rounded font-medium bg-green-600 text-white">
      Learn Now
    </button>
  `;

  card.addEventListener("click", () => {
    window.location.href = `/src/pages/MealDetailPage.html?i=${encodeURIComponent(meal.idMeal)}`;
  });

  return card;
};
