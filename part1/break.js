var x = 0;
var z = 0;
labelCancelLoops: while (true) {
  console.log('Diluar loop: ' + x);
  x += 1;
  z = 1;
  while (true) {
    console.log('   Didalam loops: ' + z);
    z += 1;
    if (z === 5 && x === 5) {
      break labelCancelLoops;
    } else if (z === 5) {
      break;
    }
  }
}