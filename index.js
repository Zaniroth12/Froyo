//const frequency = (arr, item) => {
//    let count = 0;
  //  for (let i = 0; i < arr.length; i++) {
  //      if (arr[i] === item) {
   //         count++;
  //      }
    //}
    //return count;
//};


const userInputString = prompt(
    "Please tell us what flavors of frozen yogurt you would like: ",
    "vanilla", "chocolate", "coffee", "chocolate", "vanilla", "chocolate", "coffee", "vanilla"
)

const flavors = [userInputString];
const c = {};

flavors.forEach(ele => {
    c[ele] = (c[ele] || 0) + 1;
});

console.log(c);