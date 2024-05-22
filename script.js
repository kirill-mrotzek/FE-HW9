let number1 = +prompt('Enter the number');
if(number1 > 0){
    console.log(number1 ** 3);
}
else if(number1 < 0){
    console.log(number1 ** 2);
}

let number2 = +prompt('Enter the number of students');
let number3 = +prompt('Enter the number of chairs');
if(number2<=number3){
    console.log('стульев хватает');
}
else{
    console.log('стульев не хватает');
}

let names = ['John', 'Bob', 'Tom', 'Nick', 'Sam', 'Alex', 'Jack'];
console.log(names[names.length-2]);

names.shift();
names.push('Landon');
names[3] = 'Den';
names.pop();
// console.log(names);