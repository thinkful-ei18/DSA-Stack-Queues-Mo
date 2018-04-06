'use strict';
const Stack = require('./stack');

function display(stack) {
  let currNode = stack.top;

  if (currNode == null) {
    console.log('Stack is empty');
  }

  while (currNode !== null) {
    console.log(`${currNode.data}`);
    currNode = currNode.next;
  }
}

function peak(stack) {
  let currNode = stack.top;
  console.log(`Top item in stack: ${currNode.data}`);
}

module.exports = { display, peak };
