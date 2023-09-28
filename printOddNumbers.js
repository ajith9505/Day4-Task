let arr = [1,2,3,4,5,6,7,8,9,10];

//Anonymous Function
let oddArray = [];
let getOddNumbers = function(num)
{
    for(let i = 0; i<num.length; i++)
    {
        if(arr[i]%2 !== 0)
        {
            oddArray.push(arr[i]);
        }
    }
    return oddArray;
}

getOddNumbers(arr);

console.log(oddArray);

//IIFE

let arr1 = [25,84,91,56,47,69,11,22];
let odd = [];

(function ()
{
    for(let i = 0; i<arr1.length; i++)
    {
        if(arr1[i]%2 !== 0)
        {
            odd.push(arr1[i]);
        }
    }
    return odd;
})()

console.log(odd);