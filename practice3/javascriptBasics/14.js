// An important side effect of storing objects as references is that an object declared as const can be modified.

// For instance:

const user = {
  name: "John"
};

user.name = "Pete"; // (*)

alert(user.name);







// So, copying an object variable creates one more reference to the same object.

// But what if we need to duplicate an object?

// We can create a new object and replicate the structure of the existing one, by iterating over its properties and copying them on the primitive level.

// Like this:

let user = {
  name: "John",
  age: 30
};

let clone = {}; // the new empty object

// let's copy all user properties into it
for (let key in user) {
  clone[key] = user[key];
}

// now clone is a fully independent object with the same content
clone.name = "Pete"; // changed the data in it

alert( user.name ); // still John in the original object






let user = {
  name: "John",
  age: 30
};

let clone = {}; // the new empty object

// let's copy all user properties into it
for (let key in user) {
  clone[key] = user[key];
}

// now clone is a fully independent object with the same content
clone.name = "Pete"; // changed the data in it

alert( user.name ); // still John in the original object







let user = { name: "John" };

let permissions1 = { canView: true };
let permissions2 = { canEdit: true };

// copies all properties from permissions1 and permissions2 into user
Object.assign(user, permissions1, permissions2);

// now user = { name: "John", canView: true, canEdit: true }
alert(user.name); // John
alert(user.canView); // true
alert(user.canEdit); // true


// Стрелочные функции особенные: у них нет собственного this. Если this используется внутри стрелочной функции, оно берется из внешнего контекста.
// JavaScript

let user = {
  firstName: "Ilya",
  sayHi() {
    let arrow = () => alert(this.firstName); // берет "this" из sayHi
    arrow();
  }
};

user.sayHi(); // Ilya




function makeUser() {
  return {
    name: "John",
    ref: this
  };
}

let user = makeUser();

alert( user.ref.name )


let calculator  = {
    sum(){
        return this.a + this.b;
    },
    mul(){
        return this.a * this.b;
    },
    read(){
        this.a = +promt('a', 0);
        this.b = +promt('a', 0);
    }
};
calculator.read();
alert( calculator.sum() );
alert( calculator.mul() );