// Q 1 :- Answer

function  AddTwoNumbers(A,B)
{
    return A+B;
}
console.log(AddTwoNumbers(8,5));


// Q.2 :- Answer

const is_Valid = (num1, num2) => {
    if ((num1 >= 1 && num1 <= 10) && (num2 >= 5 && num2 <= 20)) {
        return true;
    }
    else {
        return false;
    }
}
let b = is_Valid(1, 20);
console.log(b);

// Q.3 :- Answer

function Check(A,B)
{
    if(A%10==0 && B%10==0)
    {
        return true;

    }
    else if(A%10!==0 && B%10!==0)
    {
        return false;
    }
    else
    {
        return true;
    }

}
let c = Check(12, 10);
console.log(c);

// Q.4 :- Answer
 
    function First_Digit(N)
    {
        return Math.floor(N/1000);
    }
    var z = 6234;
    console.log(First_Digit(z));

// Q.5 :- Answer

const Last_Digit = (num1) => {
    return num1 % 10;
}
let x = Last_Digit(7403);
console.log(x);



// Q.6 :- Answer

function Find_remainder(X,Y) {

    return Y % X;
}
  console.log(Find_remainder(7,18));
  
   
// Q.7 :- Answer

const Multiply_two_numbers = (num1, num2) => {
    return num1 * num2;
}
let K = Multiply_two_numbers(4, 6);
console.log(K);

// Q.8 :- Answer

const Sum = (aa,bb,cc) => {
    return console.log(`Total marks ${aa+bb+cc}`)
}
const Average = (dd,ee,ff) => {
    return console.log(`Average${((dd+ee+ff) / 3)}`)
}
let h = Sum(93, 85, 78);
let P = Average(93, 85, 78);