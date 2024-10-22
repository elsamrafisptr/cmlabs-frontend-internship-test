const createMealDetail = (meal) => {
  const container = document.createElement("section");
  container.classList.add(
    "pb-20",
    "lg:grid",
    "lg:grid-cols-4",
    "lg:gap-4",
    "relative",
    "min-h-[87vh]",
  );

  let ingredientItems = "";
  for (let i = 1; i <= 20; i++) {
    const ingredient = meal[`strIngredient${i}`];
    const measure = meal[`strMeasure${i}`];

    if (ingredient) {
      ingredientItems += `<li>${i}. ${ingredient} - ${measure}</li>`;
    }
  }

  const youtubeEmbed = meal.strYoutube
    ? `
      <div class="mt-4 flex flex-col gap-4">
        <button class="open-video-btn w-full bg-green-600 hover:bg-green-700 flex items-center justify-center gap-2 text-white py-2.5 rounded font-medium">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
            <path stroke-linecap="round" stroke-linejoin="round" d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.347a1.125 1.125 0 0 1 0 1.972l-11.54 6.347a1.125 1.125 0 0 1-1.667-.986V5.653Z" />
          </svg>
          Watch Tutorial Full Screen
        </button>
        <iframe width="100%" height="315" src="https://www.youtube.com/embed/${meal.strYoutube.split("=")[1]}" allowfullscreen></iframe>
      </div>`
    : "";

  container.innerHTML = `
    <div>
      <img src="${meal.strMealThumb}" alt="${meal.strMeal}" class="w-full rounded">
      ${youtubeEmbed}
    </div>
    <div class="lg:col-span-3 flex flex-col gap-2">
      <h2 class="text-2xl font-bold mt-4 lg:mt-0 lg:text-4xl col-span-3 capitalize">${meal.strMeal}</h2>
      <p class="mb-4 text-lg font-medium text-gray-600">${meal.strCategory} Meal, From ${meal.strArea} ${meal.strTags ? meal.strTags : ""}</p>
      <div class="flex flex-col gap-1">
        <button class="accordion-btn bg-green-600 hover:bg-green-700 text-white text-xl font-bold mt-4 px-4 lg:mt-0 lg:text-2xl col-span-3 rounded py-2.5 w-full text-left cursor-pointer duration-300 transition-all" onclick="this.nextElementSibling.classList.toggle('hidden')">
          Recipe (Ingredients)
        </button>
        <ul class="list-none flex-col gap-0.5 border border-green-600 rounded p-4">${ingredientItems}</ul>
      </div>
      <div class="flex flex-col gap-1">
        <button class="accordion-btn bg-green-600 hover:bg-green-700 text-white text-xl px-4 font-bold mt-4 lg:mt-0 lg:text-2xl col-span-3 rounded py-2.5 w-full text-left cursor-pointer duration-300 transition-all" onclick="this.nextElementSibling.classList.toggle('hidden')">
          How To Cook
        </button>
        <p class="text-justify hidden flex-col gap-0.5 border border-green-600 rounded p-4">${meal.strInstructions}</p>
      </div>
    </div>
  `;

  const videoButton = container.querySelector(".open-video-btn");
  if (videoButton) {
    videoButton.addEventListener("click", () => {
      openVideoPopup(meal.strYoutube);
    });
  }

  return container;
};

const openVideoPopup = (videoUrl) => {
  const videoId = videoUrl.split("=")[1];
  const popup = document.createElement("div");
  popup.classList.add(
    "fixed",
    "inset-0",
    "flex",
    "items-center",
    "justify-center",
    "bg-black",
    "bg-opacity-75",
    "z-50",
  );

  popup.innerHTML = `
    <div class="bg-white rounded-lg overflow-hidden shadow-lg relative w-full max-w-2xl">
      <span class="close-btn absolute top-2 right-2 text-xl cursor-pointer text-gray-600">&times;</span>
      <iframe width="100%" height="315" src="https://www.youtube.com/embed/${videoId}" allowfullscreen class="aspect-video"></iframe>
    </div>
  `;

  document.body.appendChild(popup);

  const closeBtn = popup.querySelector(".close-btn");
  closeBtn.addEventListener("click", () => {
    popup.remove();
  });
};
