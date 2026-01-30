// task 01
const fruit = ['Mango','Banana','JackFruit', 'Strawberry','PineApple'];
console.log(fruit[3]) ;
fruit[2] = 'Jambura';
console.log(fruit);

// Task 02
const destination = ['Nepal', 'Vutan','Maldip'];
destination.push('Srylonka', 'Australia', 'Kashmir');
// splice die o eta kora jai
// destination.splice(3,0, 'srylonka');
console.log(destination);
destination.pop();
console.log(destination);


// task 03
const book = ['javascript book', 'marhaba java scrip te maro thaba', 'esho c# shekhi', 'esho js shikhi'];
if(book.includes('javascript book')){
    console.log('Book Found');
}
else{
    console.log('Book Not Found');
}

// task 04
const friend = ['rohim','kohim'];
const whoIam = 'I am a Former';
const result = Array.isArray(friend);
const result2 = Array.isArray(whoIam);
console.log(result,',', result2);

// task 05
const cow = ['Sahiwal','Frisian', 'Geer'];
console.log(cow);
const got = ['Black Bangole', 'Totapuri'];
console.log(got);
const res = cow.concat(got);
console.log(res);
