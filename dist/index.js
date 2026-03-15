"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// datatypes in typescript
// 1. numbers 
let num1 = 12;
const num2 = 23;
const num3 = 28;
// run the values
console.log(num1);
console.log(num2);
console.log(num3);
// 2. string typescript
const Firstname = "Surafel";
const Lastname = "Berehun";
const email = "surafelmengist@gmail.com";
// run 
console.log(Firstname);
console.log(Lastname);
console.log(email);
// 3. boolean
let isLogin = true;
const isStudent = false;
console.log(isLogin);
console.log(isStudent);
// 4 any type
const fraind = 12;
console.log(fraind);
// 5 arry
let numbers = [1, 2, 3, 4];
let names = ["John", "Sara"];
console.log(numbers.map((list) => console.log(list)));
console.log(names);
//6 tuples
const password = [12, "welcome"];
console.log(password);
//7 undefind
const age = undefined;
// 11 enums intypescript
var Role;
(function (Role) {
    Role[Role["Admin"] = 0] = "Admin";
    Role[Role["User"] = 1] = "User";
    Role[Role["Guest"] = 2] = "Guest";
})(Role || (Role = {}));
let myRole = Role.Admin;
console.log(myRole);
// 13 union  types in ts
let id;
id = 10;
id = "TS1001";
console.log(id);
// function union types 
function printId(id) {
    console.log("ID:", id);
}
printId(101);
printId("EMP101");
// union with type checking
function showValue(value) {
    if (typeof value === "string") {
        console.log(value.toUpperCase());
    }
    else {
        console.log(value + 10);
    }
}
showValue("surafel");
let direction;
direction = "south";
const worker = {
    name: "Surafel",
    employeeId: 101
};
//# sourceMappingURL=index.js.map