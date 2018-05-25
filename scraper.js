// ruwix
const numScrambles = 50;
let scrambleList = [];
while(scrambleList.length < numScrambles) {
  domanyscrambles();
  scrambleList.push($('#scrambleAlgorithm')[0].textContent);
}
console.log(JSON.stringify(scrambleList));

// csTimer
const numScrambles = 50;
let scrambleList = [];
while(scrambleList.length < numScrambles) scrambleList.push(scramble_333.getRandomScramble());
console.log(JSON.stringify(scrambleList));

// cubetimer.com
const numScrambles = 50;
let scrambleList = [];
while(scrambleList.length < numScrambles) scrambleList.push(get_scramble());
console.log(JSON.stringify(scrambleList));

// qqTimer
const numScrambles = 50;
let scrambleList = [];
while(scrambleList.length < numScrambles) {
  scrambleIt();
  scrambleList.push(scramble);
}
console.log(JSON.stringify(scrambleList));

// mine (not random state, adapted scrambling algorithm)
var scramble = function() {
    var moves = [],
        turnTypes = [ "U", "R", "L", "D", "B", "F" ],
        revTypes = [ " ", "2", "'" ],
        types = 0,
        type = turnTypes[Math.floor(Math.random()*6)],
        output = '';
    while(types < 25)
      if(types == 0 || moves[types-1] != (type = turnTypes[Math.floor(Math.random()*6)])) {
        moves[types++] = type;
        output += type + revTypes[Math.floor(Math.random()*3)] + ' ';
      }
    return output;
  };
const numScrambles = 50;
let scrambleList = [];
while(scrambleList.length < numScrambles) scrambleList.push(scramble());
console.log(JSON.stringify(scrambleList));

// blockkeeper 
// run this first: https://raw.githubusercontent.com/DallasMcNeil/Block-Keeper/master/app/scripts/libs/scramble_333.js
const numScrambles = 50;
let scrambleList = [];
while(scrambleList.length < numScrambles) scrambleList.push(scramblers['333'].getRandomScramble().scramble_string);
console.log(JSON.stringify(scrambleList));
