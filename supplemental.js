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

function syntaxCheck(str) {
  let stack = new Stack();
  const openArray = ['(', '{', '[', '<'];
  const closingArray = [')', '}', ']', '>'];
  let poppedChar = '';

  for (let i = 0; i < str.length; i++) {
    if (inArray(str[i], openArray)) {
      stack.push(str[i]);
    } else if (inArray(str[i], closingArray)) {
      poppedChar = stack.pop();

      if (
        indexOfArray(str[i], closingArray) ===
        indexOfArray(poppedChar, openArray)
      ) {
        continue;
      } else {
        return false;
      }
    }
  }
  return true;
}
function indexOfArray(value, arr) {
  for (let i = 0; i < arr.length; i++) {
    if (value === arr[i]) {
      return i;
    }
  }
}
function inArray(value, arr) {
  for (let i = 0; i < arr.length; i++) {
    if (value === arr[i]) {
      return true;
    }
  }
  return false;
}

module.exports = { display, peak, is_palindrome, syntaxCheck };
