let user = {
  name: "John", // свойство: ключ "name", значение "John"
  age: 30       // свойство: ключ "age", значение 30
};
alert(user.name);



// Квадратные скобки ([]): Используются для любых имен свойств (включая многословные) или если имя ключа хранится в переменной.
// JavaScript

user["likes birds"] = true; // Многословное свойство
let key = "name";
alert(user[key]); // Получение через переменную



let fruit = prompt("Какого фрукта купить?", "apple");
let bag = {
  [fruit]: 5, // имя свойства берется из переменной fruit
};


// Если имя свойства совпадает с именем переменной, его значение можно не дублировать:
// JavaScript

function makeUser(name, age) {
  return {
    name, // вместо name: name
    age   // вместо age: age
  };
}

// JavaScript позволяет обращаться к несуществующим свойствам (возвращается undefined). Для точной проверки используется оператор in:
// JavaScript

"age" in user; // true, если свойство существует


let user = {};
user.name = "John";
user.surname = "Smith";
user.name = "Pete";
delete user.name;


function isEmpty(obj) {
  for (let key in obj) {
    // if the loop has started, there is a property
    return false;
  }
  return true;
}


let salaries = {
  John: 100,
  Ann: 160,
  Pete: 130
};

let sum = 0;
for (let key in salaries) {
  sum += salaries[key];
}

alert(sum); // 390


function multiplyNumeric(obj) {
  for (let key in obj) {
    if (typeof obj[key] == 'number') {
      obj[key] *= 2;
    }
  }
}