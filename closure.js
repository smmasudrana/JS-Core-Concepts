function counter(){
    let count = 0;
    function innerFunction(){
        console.log('inside the inner function, some one called me')
    }
    return innerFunction;
}

const output = counter();
console.log(output());


//-------------
function numbers(){
    let num = 10;
    return function(){
        num = num + 1;
        console.log('inner function called with return', num)
    }
}

// const innnerFunc = numbers()
// innnerFunc()
// innnerFunc()

const rahimNumbers = numbers();
rahimNumbers('rahim');
rahimNumbers('rahim');
rahimNumbers('rahim');
rahimNumbers('rahim');

const karimNumers = numbers();
karimNumers('karim');
karimNumers('karim');
karimNumers('karim');
karimNumers('karim');