//problem 1
let a=15;
let first, second;
first=(a-a%10)/10;
second=a%10;
function gumar(a){
    return(first+second)
}
console.log(gumar(a))

//problem 2
let n=2;
let number;
number=10**n-1;
console.log(number)

//problem 3
let m, k, amount,amount_each;
m=3;
k=10;
amount_each=Math.floor(k/3);
amount=amount_each*m;
console.log(amount)

