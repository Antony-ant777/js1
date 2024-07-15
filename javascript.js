//1

let a=15;
if(a%3==0&&a%3==0)
    console.log("FizzBuzz");
else if(a%3==0)
    console.log("Fizz");
else if(a%5==0)
    console.log("Buzz");
else
    console.log("Ivalid");

    //2

let a1="antony";
function pali(p){
    let rev=" ";
    for(let i=p.length-1;i>=0;i--)
    {
        rev+=p[i];
    }
     if(rev==p){
    return ("Palindrome");}
     else{
     return("not palindrome");}
   
}
console.log(pali(a1));



//3
let ar=[1,2,3,4,5]
function high(arr){
    let max=arr[0];
   for(let i=0;i<arr.length;i++)
   {
    if(max<arr[i])
        max=arr[i];
   }
   return max;
}
console.log(high(ar));


//4

let str='antony'
function st(str){
let result={}
for(let i=0;i<str.length;i++)
{
    let ch=str.charAt(i)
    if(result!=ch){
        result[ch]=1;
    }
    else
    {
        result[ch]+=1;
    }
}
    return result;
}
console.log(st(str));



//5
let sen="I am Antony Samy";
function longest(str) {
    str = str.match(/[a-zA-Z0-9]+/gi);
    let largest = "";
    for (let i = 0; i < str.length; i++) {
        if (str[i].length > largest.length) {
            largest = str[i];
        }
    }
    return largest;
}
console.log(longest(sen));


//6

function fact(b){
    let f=1;
    for(let i=1;i<=b;i++)
    {
     f=f*i;
    }
    return f;
}
console.log(fact(5));

//7

function farh(c){
   let c7;
   return c7=(c*(9/5))+32;
}
console.log(farh(32));

8

8.distinct numbers

let ar=[1,2,4,5,];
function dist(ar){
    j=1
    for(i=0;i<ar.length;i++,j++){
        if(ar[i]!=j){
            console.log(j);
            break;
        }
   }
}
dist(ar);


