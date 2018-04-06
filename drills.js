'use strict';
const Stack = require('./stack');
const { display, peak } = require('./supplemental.js');

function main() {
  let starTrek = new Stack();

  starTrek.push('Kirk');
  starTrek.push('Spock');
  starTrek.push('McCoy');
  starTrek.push('Scotty');
  peak(starTrek);
}

main();
