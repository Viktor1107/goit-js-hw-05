const categories = document.querySelectorAll("#categories .item");

// Виводимо в консоль кількість категорій
console.log(`Number of categories: ${categories.length}`);

// Перебираємо кожен елемент li.item і виводимо потрібну інформацію
categories.forEach((category) => {
  const title = category.querySelector("h2").textContent;
  const itemCount = category.querySelectorAll("ul li").length;
  console.log(`Category: ${title}`);
  console.log(`Elements: ${itemCount}`);
});
