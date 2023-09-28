let addNumberArray = (nums) =>
{
    let sum = 0;
    for(let i=0; i<nums.length; i++){
        sum += nums[i];
    }
    return sum;
}

let numArray = [50,50,100,50,50];
let result = addNumberArray(numArray);

console.log(result);