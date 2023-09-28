let nums = [22, 31, 22, 35, 31, 23];
  
function removeDuplicates(arr) {
    return [...new Set(arr)];
}
  
console.log(removeDuplicates(nums));