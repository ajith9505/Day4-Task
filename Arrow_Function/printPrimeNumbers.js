let isPrime = (num) => 
{
    if(num == 0 || num == 1)
    {
        return false;
    }
    else if(num === 2)
    {
        return true;
    }
    else
    {
        for(let i=2; i<num; i++)
        {
            if(num%i === 0)
            {
                return false;
            }
        }
    }
    return true;
}

let filterPrimes = (nums) =>
{
    return nums.filter(i => isPrime(i));
}

let nums = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,17];

let result = filterPrimes(nums);
console.log(result);