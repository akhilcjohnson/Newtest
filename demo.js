// var count=100;
// var i = 0;
// while ( i < 100){
//     document.write('*');
//     i++ 
// }

// var i = 12;
// do{
//     console.log(i);
//     i++
// }
// while(i<=9);

// for( var i=9 ; i<=11; i++ ){
//     console.log(i)
// }


//var fruits = [ 'apple', 'orange', ' grape', 'banana'];
// for( var i=0; i<=fruits.length; i++){
//     console.log(fruits[i])
// }

// for(var i=0; i<=10; i++){
//     for(var k=0; k<=10; k++){
//         document.write(i + "" + k+"<br>");
//     }
// }
// fruits = [ 10, 20, 30, 40];
// sum = 0;
// for(i in fruits){
//     sum = sum + fruits[i]
// }
// console.log(sum)

// sum = 0
// fruits.forEach(function(value,index){
//   sum = sum + value
// })
// console.log(sum)

// names = ['akhil', 'delma', 'anu', 'lejin', 'angel'];
// names.map((name)=>{
//     alert(`hello ${name}`)
// });

 
// var timeElement = document.getElementById('curentTime');
// function showTime(){
//     var dt = new Data();
//     var dateString = dt.getHours() + '' + dt.getMinutes() + '' + dt.getSeconds();
//     timeElement.innerHTML=dateString;
//     setTimeout(() => {
//     showTime()
//     }, 1000); 
// // }
// // showTime();

// // var a = 0;
// // if(a<0){
// //     console.log('negative number');
// // }
// // else if(a>=0){
// //     console.log('positive number');
// // }
// // else{
// //     console.log('none of the above');
// // }


// // var a="10";
// // switch(a){
// //     case "200": console.log('this is right');break;
// //     case "100": console.log('this is wrong');break;
// //     default :console.log('none of the above');

// // }

// // for(var i=0; i<=10; i++){
// //     console.log('hello' + i);
// // }

// let a=10;
// let b = 20;
// let addition = a+b;
// let subtraction = a-b;

// console.log('the sum is '+ addition);
// console.log('a-b =' + subtraction);
// function sum(a,b){
//     return a+b;
// }
// console.log(2+30);


// function sub(a,b){
//     return a-b;
// }
// console.log('subtration of the two numbers are  ' + sub(2,3));

// let q =19;
// if(q>6 && q<12){
// console.log('good morning');
// }else if(q>12 && q<18){
//     console.log('good afternoon');
// }else{
//     console.log('good eveng');
// }

// let j = 'God is Love';
// for(i=0; i<=10; i++){
//     document.write(j+'<br>');
// }
//  let ar =['akhil', 'anu', 'angel', 'lejin', 'delma'];
//  for(i=0; i<ar.length; i++){
//  document.write('God Loves '+ ar[i]+ '<br>');
//  }

//  let sum1 = 0;
//  let n = 10;

//  for(n=1; n<=10; n++){
//     sum1 +=n;
//  }
//  console.log(sum1);

// //  let v = 1;
// //  switch(v){
// //     case 1: console.log('equals');
// //  }
 
//  var c = 10;
//  switch (c) {
//     case 10: console.log('this is less than 10');break;
//     case 20: console.log('this is greater than 10');break;
//     default:console.log('none of the above');
//  }
//  //simple calculator
// //  let result = 0;
// //  const operator = prompt('Enter operator ( +, -, * , / ): ');
// //  const number1 = parseFloat(prompt('enter first number'));
// //  const number2 = parseFloat(prompt('enter second number'));
// //  switch (operator){
// //     case '+': result = number1 + number2;
// //     console.log(`the result of addition is ${result}`);break;
// //     case '-': result = number1 - number2;
// //     console.log(`the result of subtartion is ${result}`);break;
// //     case '*': result = number1 * number2;
// //     console.log(`the result of multipliction is ${result}`);break;
// //     case '/': result = number1 / number2;
// //     console.log(`the result of division is ${result}`);break;
//  //}

// // let person ={
// //     name:'akhil',
// //     age: 32,
// //     email:'akhjk@gmail.com',
// //     location: 'india',
// //     blogs: ['half gilfriend', 'the alchemist'],
// //     login: function(){
// //         console.log('user is logined');
// //     },
// //     logout: function(){
// //         console.log('the user logout');
// //     },
// //     logblogs:function(){
// //         this.blogs.forEach(blog=>{
// //             document.write(blog);
// //         });
// //     }

// // }
// // person.logblogs()


// let fruits = ['apple', 'grape','orange', 'banana'];
// fruits.map(fruit=>{
//     console.log(fruit);
// })
// //let numbs = [1,22,33,44];
// //let newone = numbs.map(numb=>numb * 2);
//   //  console.log(newone);

//   let numbers = [1,2,3,4,5,6];
//   let evenNumbs = numbers.filter(num=>num%2===0);
//   console.log(evenNumbs);

// let newnumb = numbers.every(num=>num>0);
// console.log(newnumb);

// let newnumb01 = numbers.some(num => num<2);
// console.log(newnumb01);

// let reduceNum = numbers.reduce((acc,num)=>acc+num);
// console.log(reduceNum);
// let names= ['akhil', 'anu', 'angel', 'delma', 'lejin']
// let slicenumb = names.slice(0, 3);
// console.log(slicenumb);
// console.log(names);
// let deleted = names.splice(0,3, 'dona', 'dilu');
// console.log(deleted);
// console.log(names);

// let person = {name: 'Alice',
//                 age: 30,
//                 occupation: 'Engineer',};
// let personasstring = person.toString();
// console.log(personasstring);

function sum(...a){
    let s=0;
    a.forEach((item)=>{
        s=s+item;
        s=s-item;
    });
    return s;
}
console.log(sum(10,20,30,40));


// function sum(a,b,c){
//     let result =a+b+c;
//     console.log(result);
// }
// var x =[20,40,60];
// sum(...x)

// let arr = [1, 2, 3, 2, 3, 4, 5,
//     5, 6, 1, 1, 4, 5, 7, 8, 8];

// function count(arr, element) {
// return arr.filter(
//     (ele) => ele == element).length;
// };

// console.log(count(arr, 5));


// let namees = ['akhil', 'anu', 'angel'];
// let w = 1;
// namees.map((name)=>{ 
//     w++;
//     console.log(`howdy ${name} ${w}`)
// })





// // // Display the word counts for each letter
// // for (let letter = 'a'; letter <= 'z'; letter++) {
// //   console.log(`${letter}: ${wordCounts[letter]}`);
// // }

// //const text = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.";

// // Split the text into words, reverse the order of the words, then join them back into a sentence
// const reversedText = text.split(' ').reverse().join(' ');

// // Print the reversed text
// // console.log(reversedText);


// const paragh = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which dont look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isnt anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.";

// // Count words starting with letters from A to Z
// const wordsCount = {};
// const words = text.split(' ');
// words.forEach(word => {
//   const firstLetter = word.charAt(0).toUpperCase();
//   if (firstLetter >= 'A' && firstLetter <= 'Z') {
//     if (wordsCount[firstLetter]) {
//       wordsCount[firstLetter]++;
//     } else {
//       wordsCount[firstLetter] = 1;
//     }
//   }
// });

// // Print the results
// //console.log('Words Count:', wordsCount);


// let para = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.";
// const wordsCount = {};
// let words = para.split(' ');
// //console.log(words);

// words.forEach(word => {
//    // console.log(word);

//   // Check if word starts with a letter from A to Z
//   const firstLetter = word.charAt(0).toUpperCase();
//   if (firstLetter >= 'A' && firstLetter <= 'Z') {
//     const regEx = /^[A-Z]+$/
//     const result = regEx.test(para);

    // console.log(result);


    // Count the word in the wordsCount object
    // if (cleanedWord) { 
    //   if (wordsCount[firstLetter]) {
    //     wordsCount[firstLetter]++;
    //   } else {
    //     wordsCount[firstLetter] = 1;
    //   }
    //   if (wordsCount[cleanedWord]) {
    //     wordsCount[cleanedWord]++;
    //   } else {
    //     wordsCount[cleanedWord] = 1;
    //   }
    // }
//   }
// });
// Print the results
//console.log('Words Count:', wordsCount);

// const products = [
//   {
//     name: "grape",
//     count: 30,
//     amount: 100
//   },
//   { name: "mango", count: 20, amount: 50 },
//   {
//     name: "banana",
//     count: 10,
//     amount: 25
//   }
// ];

// const totalPrice = products.map((item) => item.amount * item.count);
// console.log(totalPrice);

// const totalProductvalues = products.map((item) => ({
//   name: item.name,
//   totalValue: item.amount * item.count
// }));
// console.log(totalProductvalues);


// let para =
//   "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.";
// //Count words starting with letters from A to Z

// let para01 = para.split(" ");
// //console.log(para01);

// const count = {};
// //console.log(para01);

// para01.forEach((word) => {
//   const firstLetter = word.charAt(0).toUpperCase();
//   //console.log(firstLetter);
//   if (firstLetter >= "A" && firstLetter <= "Z") {
//     if (count[firstLetter]) {
//       count[firstLetter]++;
//     } else {
//       count[firstLetter] = 1;
//     }
//   }
// });
// //console.log("Words Count:" + count);



// let text01 = "Lorem Ipsum is simply dummy text of the printing and typesetting industry.";
// let text02= "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.";
// let words01 = text01.split(' '); // Split the text into an array of words
// let words02 = text02.split(' ');
// let reversedWords01 = [];
// console.log(words01, words02);

// for (let i = 0; i < words01.length; i++) {
//   reversedWords01.push(words01[i].split('').reverse().join(''));
// }
// console.log(reversedWords01);

// let reversedWords02 = [];
// for (let j = 0; j < words02.length; j++) {
//   reversedWords02.push(words02[j].split('').reverse().join(''));
// }
// console.log(reversedWords02);
//  const newword = reversedWords02.concat(reversedWords01);
//  console.log(newword);
 








// }
// console.log(reversedWords01);

// // Join the array of reversed words back into a string
// let reversedText = reversedWords.join(' ');

// console.log(reversedText);

// const number=[1,2,3,4,5,6];
// const even = number.filter(isEven);

// function isEven(value)
//   return value % 2===0;

// console.log(even);

// function multiply(a,b){
//     return a*b};

// console.log(multiply(2,6));


// function sum(x,y){
//     return x+y
// }
// console.log(sum(90,10));

// function pass(mark){
//     if(mark>30){
//         console.log(`you are passed`);
//     }
//     else{
//         console.log(`You are fail better next time`);
//     }
// }
// pass(40)

// function localVariable() {
//     // local scope
//     let a = 10;
//     console.log("'a' inside function is " + a);
//   }
  
//   localVariable();
//   console.log("'a' outside function is " + typeof a);

// //   var count = 0;
// //   function countVowels(name)
// //   {
// //       for (var i=0;i<name.length;i++)
// //       {
// //         if(name[i] == "a" || name[i] == "e" || name[i] == "i" || name[i] == "o" || name[i] == "u")
// //         count = count + 1;
// //       }
// //   document.write("Hello " + name + "!!! Your name has " + count + " vowels.");
// //   }
// //       var myName = prompt("Please enter your name");
// //   countVowels(myName);

//   let persons = [{name:"akhil", age:32, gender:"male"}, {name:"delma", age: 27, gender:"female"}];
//   console.log(persons[0].age);
//   let v =JSON.stringify(persons);
//   let m = JSON.parse(v);
//   typeof m
  

//   let car = {
//     make: "benz",
//     year : 2020,
//     model: "S class",
//     getPrice: function(){
//         return 5000;
//     },
//     printItems: function(){
//         console.log(`${this.make} with ${this.year} is ${this.model} model`);
//     }
// }
// car.printItems();
// console.log(car.make);
// console.log(car.year);

// let b ={
//     newOne: [
// { a: "call",
// c: "add",
// d:"minus"
// }
//     ]
// };

// console.log(b.newOne[0].a); 

// let number = [1,2,3,4,5,6,7,8,10,45,76];

// let sum1 = 0;
//  number.forEach((item, index, arr)=>{
//     sum1 += item;
//     // console.log(`a[${index}] : ${item}`);
//     // console.log(arr);
//     // console.log(index,item);
//  }) 
//  console.log(sum1)



//  let letters =['a','b','c','b', 'c', 'd', 'c'];
//  let count = {};

//  letters.forEach((item)=>{
//     if(count[item]) {
//          count[item]++
//     } else{
//         count[item]=1;
//     }
//  })
//  console.log(count)
// //  function numb(item, index, arr){
// //     console.log(`a[${index}] : ${item}`);
// //  }

// let doubled = number.map(twice)

// function twice(item,index, arr){
//      return item *2;
// }
// console.log(number);
// console.log(doubled);

// let multiplyNumber = number.map(multi);

// function multi(item, index){
//     return index* item;
// }
// console.log(multiplyNumber)

// const op = [
// {name:"Johnson", age: 63},
// {name:"Beena", age: 56},
// {name:"Akhil", age: 32},
// {name:"Delma", age: 26},
// {name:"Anu", age: 28},
// {name:"Lejin", age: 29},
// {name:"Angel", age: 24},
// {name:"Calo", age: 2}
// ]


// //for...of method( in that we itrate all from the array)
// for(let item of op){
//     console.log(item)
// }

// //for ...in method( in that we ittrate the items in the array of objects)
// let item = op[0]
// for(let prop in item){
//     console.log(prop, item[prop])}
// // filter()allows to give result which is in given criteria)

// let filterItem = op.filter(user=>{
//     return user.age<30;
// })
// console.log(filterItem);

// //find() and findIndex()- it will find the first from the array of object
// let findObject = op.find(user=>{
//     return user.name === "Anu";
// })
// console.log(findObject);

// let findIndexObj = op.findIndex(user=>{
//     return user.name == "Delma" ;
// })
// console.log(findIndexObj);

// //map() iterate each element in the array and store in new one.
// let names = op.map(user=>{
//     return {
//         ...user, description: `${user.name} is ${user.age} years old`
//     }
// })
// console.log(names);
// console.log(op);

// let fruit = "bab";
// switch(fruit){
// case "banana": console.log(`this is banana`); break;
// case 'apple':console.log(`this is apple`); break;
// case 'grape':mconsole.log (`this is grape`);break;
// default: console.log(`none of the above`);
// }

// let xc = 0;
// while(xc<=10){
//     console.log(xc);
//     xc++;
// }

// let counts=100;
// let i = 0;
// while(i<counts){
//     document.write('*');
//     i++;
// }



// class Car{
//     constructor(make, model, year){
//         this.make = make;
//         this.model = model;
//         this.year = year;
//     }
//     printDetails(){
//         console.log(`${this.make} made ${this.model} model for families from ${this.year} onwards.`)
//     }
// }
// let myCar = new Car("maruthi", '800','2007');
// console.log(myCar)
// myCar.printDetails()







// // asynchronous

// // console.log(" I  ")
// // console.log(" eat ")
// // setTimeout(()=>{console.log(" icecream  ")},4000);
// // console.log(" with a  ")
// // console.log(" spoon  ")

// // function one ( callback ){
// //     console.log ( " step 1");
// //     callback()
// // }
// //  function two ( ){
// // console.log( " Step-2"); 
// //  }

// //  one(two);





// let stocks = {
//     fruits : ['banana', 'stawberry', 'mango', 'apple'],
//     liquids: ['water', 'ice'],
//     holder :['cone', 'cup', 'stick'],
//     tappings: ['chocolate', 'peanuts']
// }


// let shopOpen = true;
// // let order = (time, work)=>{
// //     return new Promise((resolve, reject)=>{
// //  if (shopOpen){
// //     setTimeout(()=>{
// //         resolve(work());
// //     },time);
// //  }
// //  else{
// //     reject(console.log(`the shop is closed`));
// //  }
// //     })
// // };
// // order(2000, ()=> console.log(`${stocks.fruits[0]} was selected`))

// // .then(()=>{
// //     return order(1000,()=>{
// //         console.log(`production has started`);
// //     } )
// // })
// // .then(()=>{
// //     return order(2000, ()=>{
// //         console.log(`the food has to be chopped`);
// //     })
// // })
// // .then(()=>{
// //     return order(1000, ()=>{
// //         console.log(`added ${stocks.liquids[0]} and ${stocks.liquids[1]} into the food`);
// //     })
// // })
// // .then (()=>{
// //     return order(1000,()=>{
// //         console.log(`the machine has started for preparing food`);
// //     })
// // })
// // .then(()=>{
// //     return order(2000, ()=>{
// //         console.log(`for filling the food ${stocks.holder[1]} was selected`);
// //     })
// // })
// // .then(()=>{
// //     return order(3000, ()=>{
// //         console.log(`${stocks.tappings[1]} selected as toppings`);
// //     }) 
// // })
// // .then(()=>{
// //     return order(2000, ()=>{
// //         console.log(`ready to serve the icecream`);
// //     })
// // })
// // .catch(()=>{
// //     console.log(`customer left from the server`);
// // })

// // .finally(()=>{
// //     console.log(`Day ended, shop is closed`)
// // });




// // let order = (fruit_name, call_pro)=>{
// //     setTimeout(()=>{
// //         console.log(`${stocks.fruits[fruit_name]} was selected`);
// //         call_pro()
// //     },2000);
    
// //     }
    
// // let production = ()=>{
// // setTimeout(()=>{
// //     console.log(`Production has started`);

// //     setTimeout(()=>{
// //         console.log(`The food has to be chopped`);

// //         setTimeout(()=>{
// //             console.log(`${stocks.liquids[0]} and ${stocks.liquids[1]} was added`);

// //             setTimeout(()=>{
// //                 console.log(`The machine was started`);

// //                 setTimeout(()=>{
// //                     console.log(`${stocks.holder[0]} was selected for filling`);
                    
// //                     setTimeout(()=>{
// //                         console.log(`the toppings as ${stocks.tappings[0]} was added`);
// //                         setTimeout(()=>{
// //                             console.log(`serve icecream`);
// //                         },2000);
// //                     },3000);
// //                 },2000);
// //             },1000);
// //         },1000)
// //     },2000);
// // }, );
// // }

// // order(0, production);