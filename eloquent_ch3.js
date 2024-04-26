function min(a, b) {
  if (a < b) {
    return a;
  } else if (b < a) {
    return b;
  }
}

console.log(min(0, 10));
console.log(min(0, -10));

function isEven(n) {
  //console.log(n);

  if (n == 0) return true;
  else if (n == 1) return false;
  else if (n < 1) return isEven(n * -1);
  else {
    return isEven(n - 2);
  }
}

console.log(isEven(50));
console.log(isEven(75));
console.log(isEven(-1));

function countBs(string) {
  let isLetterB = 0;

  for (let i in string) {
    if (string[i] === "B") {
      isLetterB++;
    }
  }

  return isLetterB;
}

function countChar(string, c) {
  let isLetterB = 0;

  for (let i in string) {
    if (string[i] === c) {
      isLetterB++;
    }
  }

  return isLetterB;
}

console.log(countBs("BOB"));
console.log(countChar("kakkerlak", "k"));
