//Anonymous Function
let numbers = [1,2,3,4,5,6,7,8,9,10];
let sum = 0;
let add = function (numArray)
{
    for(let i=0; i<numArray.length; i++)
    {
        sum += numArray[i];
    }
    return sum;
}

let result = add(numbers);
console.log(result);

// IIFE

let numbers1 = [10,10,10,10,10];
sum=0;

(function ()
    {
        for(let i=0; i<numbers1.length; i++)
        {
            sum += numbers1[i];
        }
        return sum;
    }
)()

let result1 = sum;
console.log(result1)

