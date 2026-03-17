// function  in  ts
const Hello=()=>{
  console.log("welcome ")
}
Hello()


interface country {
  id:number
  name:string
  addrese:string
  city?:string | null
}
const countries=[
  {id:1,city:"Addis Ababa", name:"ethiopia",addrese:"East Africa"},
  {id:2,city:"Nirobi", name:"Kenya",addrese:"East Africa"},
  {id:3,city:"Mosco", name:"Russia",addrese:"North Europe"},
  
]
  

function city(){
   return  countries.map((list)=>console.log(list.id,list.name,list.city,list.addrese))
}
   city()



   interface User {
  id: number
  name: string
  email: string
}

type PartialUser = Partial<User>






// Generics 
function identity<T>(value: T): T {
  return value
}

const lab1=identity<string>("Hello")
const lab2=identity<number>(10)
console.log(lab1)
console.log(lab2)




// Generic Array
function getFirstSafe<T>(arr: T[]): T | undefined {
  if (arr.length === 0) {
    return undefined;
  }
  return arr[0];
}

const num = getFirstSafe<number>([1, 2, 3]); // Type is number | undefined
const str = getFirstSafe<string>(["a", "b", "c"]); // Type is string | undefined
const empty = getFirstSafe<string>([]); // Type is string | undefined

// TypeScript now forces you to handle the undefined case
if (empty !== undefined) {
    console.log(empty.toUpperCase());
}
