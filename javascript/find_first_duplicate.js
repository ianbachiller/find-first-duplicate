function findFirstDuplicate(arr) {
  const dupl = [];
  const retDupl = [];
  for (i = 0; i < arr.length; i++){
    if(dupl.includes(arr[i])){ 
      retDupl.push(arr[i])
    } else { 
      dupl.push(arr[i])
    };
  }
  if(retDupl.length > 0) {
    return retDupl[0]
  }else{
    return -1
  } 
}
//create two empty arrays
// for every element of arr, check if that element is in dupl array, if it is, add it to retDupl array. if not, add it to dupl array. 
//if retDupl array is not empty, return the element in that array. 
//otherwise, return -1

//explanation:
//make two empty arrays to push/add non duplicate or duplicate number to the appropriate array. iterate over each element and check if that element is in the dupl array; if it is, add it to the retDupl array (where duplicate numbers are stored). After finishing looping, check if retDupl is not empty. if it is not, return the value/element in that array. otherwise, return -1. 


if (require.main === module) {
  // add your own tests in here
  console.log("Expecting: 3");
  console.log("=>", findFirstDuplicate([2, 1, 3, 3, 2]));

  console.log("");

  console.log("Expecting: -1");
  console.log("=>", findFirstDuplicate([1, 2, 3, 4]));
}

module.exports = findFirstDuplicate;

// Please add your pseudocode to this file
// And a written explanation of your solution
