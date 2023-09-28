//Anonymous Function

let str = "i'M a fUlL sTAcK deVEloPER";

let titleCase = function (str1)
{
    str1 = str1.toLowerCase().split(" ");
    
    for(let i=0; i<str1.length; i++)
    {
        str1[i] = str1[i].charAt(0).toUpperCase() + str1[i].slice(1);
    }
    return str1.join(" ");
}

let str1 = titleCase(str);

console.log(str1);

//IIFE
let str2 = [];
(function()
{
    let st = str.toLowerCase().split(" ");
    for(let i=0; i<st.length; i++)
    {
        str2[i] = st[i].charAt(0).toUpperCase() + st[i].slice(1);
    }
    return str2;
})()

console.log(str2.join(" "));