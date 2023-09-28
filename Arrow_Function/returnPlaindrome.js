let isPlaindrome = (str1) =>
{
    let str = str1;
    str1 = str1.split("").reverse().join("");
    return str == str1;
}

let addPlaindrome = (arr) =>
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
let arr = [ "rotator", "light", "wow", "racecar", "code", "level" ];
let result = addPlaindrome(arr);
console.log(result);