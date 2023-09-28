let printOdd = (nums) =>
{
    let oddArray = [];
    for(let i=0; i<nums.length; i++)
    {
        if(nums[i]%2 !== 0)
        {
            oddArray.push(nums[i]);
        }
    }
    return oddArray;
}
let nums = [1,2,3,4,5,6,7,8,9,11];
let result = printOdd(nums);
console.log(result);