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

function is_palindrome(str) {
  str = str.toLowerCase().replace(/[^a-zA-Z0-9]/g, '');

  let bool = false;

  let palinStack = new Stack();

  for (let i = 0; i < str.length; i++) {
    palinStack.push(str[i]);
  }
  for (let i = 0; i < str.length; i++) {
    if (str[i] === palinStack.pop()) {
      bool = true;
    } else {
      bool = false;
      break;
    }
  }

  return bool;
}

module.exports = { display, peak, is_palindrome };
