// Отримуємо елемент ul з ID 'categories'
const categoriesList = document.getElementById('categories');

// Отримуємо всі елементи li з класом 'item' всередині ul#categories
const items = categoriesList.querySelectorAll('li.item');

// Підраховуємо кількість знайдених елементів
const numberOfCategories = items.length;

// Виводимо кількість категорій в консоль
console.log('Number of categories:', numberOfCategories);
