
// З використанням властивостей і методів DOM - елементів, напиши скрипт, який:

// Порахує й виведе в консоль кількість категорій в ul#categories, тобто елементів li.item.
// Для кожного елемента li.item у списку ul#categories знайде й виведе в консоль текст заголовка елемента (тегу <h2>) і кількість елементів у категорії (усіх <li>, вкладених у нього).


// На що буде звертати увагу ментор при перевірці:

// Кількість категорій, їх назва та кількість елементів отримані за допомогою властивостей і методів DOM-елементів
// Дані за кожною категорією були отримані й виведені в консоль у тілі циклу або методу forEach()
// У консолі має бути виведено наступне повідомлення:

// const categoriesList = document.querySelector('ul#categories');

// console.log('Number of categories: ' + categoriesList.children.length);

// const categoriesItems = document.querySelectorAll('li.item');

// console.log(categoriesItems);

// categoriesItems.forEach(item => {
//     const title = item.querySelector('h2');

//     const elementsList = item.querySelector('ul');
        
//     console.log('Category: ' + title.textContent);

//     console.log('Elements: ' + elementsList.children.length);
// })

const categorieslist = document.querySelectorAll('ul#categories>li.item');

console.log(`Number of categories: ${categorieslist.length}`);

categorieslist.forEach(category => {
    const title = category.querySelector('h2');
    const elementsList = category.querySelector('ul');
        
    console.log(`Category: ${title.textContent}`);

    console.log(`Elements: ${elementsList.children.length}`); 
})



