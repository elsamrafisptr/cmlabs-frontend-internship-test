const createCategoryCard = (category) => {
  const card = document.createElement("article");
  card.classList.add(
    "category-card",
    "cursor-pointer",
    "flex",
    "flex-col",
    "justify-center",
    "items-center",
  );

  card.setAttribute("data-aos", "fade-up");
  card.setAttribute("data-aos-duration", "500");

  card.innerHTML = `
        <img src="${category.strCategoryThumb}" alt="${category.strCategory}" class="border aspect-square object-cover object-center w-full rounded-xl bg-gradient-to-t transition-all duration-300 from-gray-300 to-gray-100">
        <h3 class="text-base leading-tight mt-1 font-medium">${category.strCategory}</h3>
    `;
  card.onclick = () => {
    window.location.href = `/src/pages/CategoryDetailPage.html?c=${category.strCategory}`;
  };
  return card;
};
