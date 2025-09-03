let data;
data = 0;
console.log('value of data', data);

if(data){
    console.log('value of data is truthy');
}
else{
    console.log(data,'value of data is falsy');
}


//if i need to capture the falsy value to go inside if block; use logical not;
if(!data){
    console.log('inside if with a falsy value');
}


//capture all positive value; double not;
if(!!data ===true){
    console.log('only true inside the double not')
}