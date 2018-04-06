'use strict';
const Stack = require('./stack');
const {
  display,
  peak,
  is_palindrome,
  syntaxCheck,
} = require('./supplemental.js');

function main() {
  let starTrek = new Stack();

  starTrek.push('Kirk');
  starTrek.push('Spock');
  starTrek.push('McCoy');
  starTrek.push('Scotty');
  //   peak(starTrek);
  starTrek.pop();
  starTrek.pop();
  //   display(starTrek);

  //   console.log(is_palindrome('muaath'));

  console.log(syntaxCheck('<(3 + 5) + (2 + 1)>>') === false);
  console.log(syntaxCheck('"(3 + 5) + (2 + 1)"') === true);
}

main();
