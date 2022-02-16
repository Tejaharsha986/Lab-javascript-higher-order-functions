//Array Slice
const foods =['pizza', 'burger', 'fingerChips', 'donuts','springRoll'];
const modifiedFood = foods.slice(1,4);
console.log(modifiedFood);

//Array Splice
//const foods =['pizza', 'burger', 'fingerChips', 'donuts','springRoll'];
//const modifiedFood =foods.splice(2,0, 'noodles', 'icecream');
console.log(foods);

//3 Filter
const numberArray =[12,234,213,4,2,3,45,4234];
function isEven(){
    let res = numberArray.filter(function(ele){
        return ele % 2 ==0;
    })
    console.log(res);
}
isEven()

//3.1 Function isprime
//const numberArray =[12,234,213,4,2,3,45,4234];
let isPrime = numberArray.filter(function(ele){
    let n =1;
    for(i=2; i<=ele/2;i++)
    {
        if(ele%i ==0)
        {
            n =0;
        }
    }
    if(n == 1)
    {
        return ele;
    }
    
});
console.log(isPrime);
//4 Reject
let notPrime=numberArray.filter(item =>
    {
        let flag=1;
        for(i=2;i<=item/2;i++)
        {
            if(item%i==0)
            {
                flag=0;
            }
        }
        if(flag==0)
        {
            return item;
        }
    });
console.log(notPrime);



//5 Function isEven using lambdafunction
function isEven(numberArray){
    numberArray = [12,234,213,4,2,3,45,4234];
    var evennumbers =numberArray.filter(number => number%2 ==0)
    console.log(evennumbers);
}
isEven()

//6 Map
function findSquareOfNumbers(myArray){
    myArray = [11, 34, 20, 5, 53, 16];
   let res= myArray.map(function(ele){
        return ele* ele
    });
    console.log(res);
}
findSquareOfNumbers()


//7 reduce

function multiply(myArray){
    myArray = [2,3,4,5]
    let res = myArray.reduce( function(preele, nextele){
        return (preele * nextele);

    })
    console.log(res);
}
multiply()
