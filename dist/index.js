"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// function  in  ts
const Hello = () => {
    console.log("welcome ");
};
Hello();
const countries = [
    { id: 1, city: "Addis Ababa", name: "ethiopia", addrese: "East Africa" },
    { id: 2, city: "Nirobi", name: "Kenya", addrese: "East Africa" },
    { id: 3, city: "Mosco", name: "Russia", addrese: "North Europe" },
];
function city() {
    return countries.map((list) => console.log(list.id, list.name, list.city, list.addrese));
}
city();
// Generics 
function identity(value) {
    return value;
}
const lab1 = identity("Hello");
const lab2 = identity(10);
console.log(lab1);
console.log(lab2);
// Generic Array
function getFirstSafe(arr) {
    if (arr.length === 0) {
        return undefined;
    }
    return arr[0];
}
const num = getFirstSafe([1, 2, 3]); // Type is number | undefined
const str = getFirstSafe(["a", "b", "c"]); // Type is string | undefined
const empty = getFirstSafe([]); // Type is string | undefined
// TypeScript now forces you to handle the undefined case
if (empty !== undefined) {
    console.log(empty.toUpperCase());
}
const updateUser = (user) => {
    console.log(user);
};
updateUser({ name: "Surafel" });
// 3️⃣ TYPING EVENTS (React)
//   const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
//   console.log(event.currentTarget)
// }
//# sourceMappingURL=index.js.map