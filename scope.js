if(true){
    const data = 58;
    console.log('inside the if block', data);
}

//-----------
for(const num of [1, 5 , 6, 8, 9]){

}

//function scope or local scope
function doMath(a,b){
    console.log(a, b);
    const sum = a + b;
    const total = sum + 10;
    return total;
}




// 1. Global Scope
// 👉 যেকোনো ভ্যারিয়েবল function বা block এর বাইরে ডিক্লেয়ার করলে সেটা global হয় → সব জায়গা থেকে access করা যায়।
let globalVar = "I am global";

function showGlobal() {
  console.log(globalVar); // accessible
}


// 2. Function Scope--------------------
// 👉 var, let, const দিয়ে function এর ভেতরে ডিক্লেয়ার করা ভ্যারিয়েবল শুধু ঐ function এর ভেতরে accessible।

function myFunc() {
  let funcVar = "I am inside function";
  console.log(funcVar); // ✅ works
}
myFunc();


// 3. Block Scope (let & const)------------
// 👉 { } ব্লকের মধ্যে ডিক্লেয়ার করা let ও const কেবল ওই ব্লকের ভেতরেই ব্যবহার করা যায়।

if (true) {
  let blockVar = "I am block scoped";
  console.log(blockVar); // ✅ works
}


// 4. Lexical Scope / Closure----------------
// 👉 Inner function outer scope এর variable access করতে পারে → একে closure বলে।

function outer() {
  let outerVar = "Hello";
  function inner() {
    console.log(outerVar); // ✅ accessible due to closure
  }
  inner();
}
outer();