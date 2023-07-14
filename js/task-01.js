const categoriesList = document.querySelector("ul#categories");
const allElements = categoriesList.children.length;
console.log(`Number of categories: ${allElements}`);

const addlist = [...categoriesList.children];
addlist.forEach( element => {
  const categoryName = element.querySelector("h2").textContent;
  const categoryElements = element.querySelectorAll("li").length;
  console.log(`Category : ${categoryName}`);
  console.log(`Elements: ${categoryElements}`);
}
);