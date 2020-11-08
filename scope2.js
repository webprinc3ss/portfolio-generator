// var is function-scoped, so changing its value in a block causes its value in the outer environment to change as well:

var three = 'three: declared outside the block';

if (true === true) {
    three = 'three: changed inside the block'; // notice: we don't redeclare
    console.log(three); // prints 'three: changed inside the block'
}

console.log(three); // also prints 'three: changed inside the block', because the variable has function scope. This means that the value change in the block is reflected throughout the function, i.e., outside the block.

// let is block-scoped, so changing its value in a block does change its value outside the block _if_ the variable is not redeclared in the block:

let four = 'four: outside the block';

if (true === true) {
    four = 'four: inside the block'; // notice: we don't redeclare the variable
    console.log(four); // prints 'four: inside the block'
}

console.log(four); // prints 'four: inside the block', because we didn't redeclare the variable inside the block. That meant we referenced the variable outside the block, and we therefore changed it.