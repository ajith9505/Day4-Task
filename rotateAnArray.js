let arr = [55.98,28,98,27,18];
let k = 3;

let rotateArray = function (nums)
{
    for(let i=1; i<=k; i++)
{
    nums.unshift(nums.pop());
}
return nums;
}

let result = rotateArray(arr);
console.log(result);

// IIFE

let arr1 = [59.38,22,18,29,68];

(function () 
{
    for(let i=1; i<=k; i++)
{
    arr1.unshift(arr1.pop());
}
})()
console.log(arr1);
