let arr = "*";
while (arr.length <= 7) {
    console.log(arr);
    arr += "*";
}


// var slash = '#';
// var space = ' ';
// var result = '';
// var row = true;
// for (var i = 0; i < 8; i++) {
//   for (var j = 0; j < 8; j++) {
//     if ((j+row) / 2 === 0) {
//       result += space;
//     } else {
//       result += slash;
//     }
//   }
//   console.log(result);
//   result='';
//   row = ! row;
// }
const numbers = [];

for (let i = 1; i <= 100; i++) {
    if (i % 15 === 0) {
        numbers.push("FizzBuzz")
    } else if (i % 3 === 0) {
        numbers.push("Fizz");
    } else if (i % 5 === 0) {
        numbers.push("Buzz");
    } else {
        numbers.push(i);
    }
}
console.log(numbers);



let CountChar = (sl, s) => {
  let ggg = 0;
  let tt = s.toLowerCase()
  let q = sl.toLowerCase()
  for (let hh of q) {
      if (hh === tt) ggg++
  }
  console.log('количество символов ' + s + ' в слове ' + sl + ' = ' + ggg);
}
CountChar("avadakedavraaaa", "A")
CountChar("HeloooWoooord", "o")


//4
let CapitalizeString = (str) => {
  str = str.toLowerCase()
  if (str === '') {
      console.log(str);
  } else {
      str = str[0].toUpperCase() + str.substring(1)
      console.log(str)
  }
}

CapitalizeString("еВГЕНИЙ")
CapitalizeString("Киселев")