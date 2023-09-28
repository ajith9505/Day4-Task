//Anonymous Function
let numbers = [1,2,3,4,5,6,7,8,9,10,21,11,13];

let isPrime = function (num)
{
    if(num == 0 || num == 1){
        return false;
    }
    else if(num == 2)
    {
        return true;
    }
    else
    {
        for(let i=2; i<num; i++)
        {
            if(num % i ===0)
            {
                return false;
            }
        }
    }
    return true;
}

let filterPrimes = function (arr)
{
    return arr.filter(i => isPrime(i));
}

console.log(filterPrimes(numbers));
