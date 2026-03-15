// datatypes in typescript
// 1. numbers 
let num1=12;
const num2:number=23;
const num3:number=28;

// run the values
console.log(num1);
console.log(num2);
console.log(num3);


// 2. string typescript
const Firstname:string="Surafel";
const Lastname:string="Berehun";
const email:string="surafelmengist@gmail.com"
// run 
console.log(Firstname)
console.log(Lastname)
console.log(email)


// 3. boolean
let isLogin:boolean=true;
const isStudent:boolean=false;

console.log(isLogin)
console.log(isStudent)

// 4 any type
const fraind:any=12
console.log(fraind)

// 5 arry
let numbers: number[] = [1,2,3,4]
let names: string[] = ["John","Sara"]
console.log(numbers.map((list)=>console.log(list)))
console.log(names)

//6 tuples
const password:[number,string]=[12,"welcome"]
console.log(password)

//7 undefind
const age:undefined=undefined

// interface type
interface students{
   name:string;
   age:number;
   email:string
}


//9 type
type users ={
    id:number | string
    age?:number
    email:string
}


