let fruitsArr =['banana', 'apple', 'orange','grape'];
console.log(fruitsArr.splice(1,2));
console.log(fruitsArr)

function sum(...a){
    let s=0;
    a.forEach((item)=>{
        s=s+item;
        s=s-item;
    });
    return s;
}
console.log(sum(10,20,30,40));


// console.log('one');
// document.getElementById('click-EL').onclick=clicking

// clicking(arg=>
//   console.log(arg)
// )
// // clicking('19')
// console.log('two')


let value=[1,2,3,4,5,6];
value.forEach(function myFunction(val){ 
    console.log("Hello ...", val)
})
