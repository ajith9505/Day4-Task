 
let arr = [ "rotator", "light", "wow", "racecar", "code", "level" ];

let isPlaindrome = function (str)
{
    let str1 = str;
    str = str.split('').reverse().join('');
    return str1 == str;
}

let filterPlaindrome = function (arr)
{
    let ps = [];
    for(let i=0; i<arr.length; i++)
    {
        if(isPlaindrome(arr[i]))
        {
            ps.push(arr[i]);
        }
    }
    return ps;
}

 
let s = filterPlaindrome(arr);
console.log(s);