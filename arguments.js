function add(a, b){
    console.log(arguments);
    const params = [...arguments];
    console.log(params);
}

add(65, 45, 99, 46)