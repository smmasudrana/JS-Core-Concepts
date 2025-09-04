//all primitive values (number, string, boolean) always pass by value;
function multiply(x , y){
    x = x + 5;
    y = y + 5;
    const mult = x * y;
    return mult;
}

const a = 5;
const b = 7;

const result = multiply(a , b);
console.log(result);


//non primitive values (object, array) are passed by referance;
const manik ={name: 'manik', balance: 10000}
const roton ={name: 'roton', balance: 40000}

function totalMoney(person1, person2){
    person1.balance = 0;
    person2.balance = person2.balance / 2;
    const total =person1.balance + person2.balance;
    return total;
}

const balance =totalMoney(manik, roton);
console.log(balance);