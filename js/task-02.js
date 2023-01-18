const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ingredientsRef = document.getElementById('ingredients');

for(let ingredient of ingredients ) {
  const itemListRef = document.createElement('li');
  itemListRef.textContent = ingredient;
  itemListRef.classList.add('item');
  ingredientsRef.append(itemListRef);
  console.log(itemListRef);
};



