//  function that takes in one argument that is passed through a conditional statement. Return the result as an alert or console.log.
function option(num) {
  if (num==1) {
    return "hello";
  } else if (num==2) {
    return "bye";
  } else if (num==3) {
    return "see you next time";
  } else {
    return "i see you way too often";
  }
}

console.log(option(1));
// console.log(option(2));
// console.log(option(3));
// console.log(option(5));