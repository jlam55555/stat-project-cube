let fs = require('fs');

// source: https://stackoverflow.com/a/12506613
var stdin = process.stdin;
stdin.resume();
stdin.setEncoding('utf8');
//stdin.setRawMode( true );

// on any data into stdin
stdin.on('data', function(key) {
  // ctrl-c ( end of text )
  if (key === '\u0003') {
    process.exit();
  }

  // when enter is pressed change state
  if(key === '\u000a') {
    switch(state) {
      case 0: startTimer(); break;
      case 1: endTimer(); break;
      case 2: saveTime(); break;
    }
    state = (state + 1) % 3;
    if(state === 0) {
      generateScramble();
    }
  }
  
  // if 'd' (delete) is pressed in state 2, delete last scramble
  if(key === 'd' && state === 2) {
    state = 0;
    generateScramble();
    console.log('time not saved');
  }

});

// source: https://stackoverflow.com/a/34970550
function clock(start) {
  if (!start) return process.hrtime();
  var end = process.hrtime(start);
  return Math.round((end[0]*1000) + (end[1]/1000000));
}

// get data
let data = require('./scrambles.js');

// timer code
let state = 0, start, duration;
/**
  * state = 0 means waiting to start
  * state = 1 means timer running
  * state = 2 means waiting to save
  */

// start timer by beginning the duration
let startTimer = () => {
  start = clock();
  console.log('time started');
};

// end timer by getting duration and printing out the time
let endTimer = () => {
  duration = clock(start);
  console.log(duration/1000 + 's');
};

// save time
let saveTime = () => {
  // get scramble, remove from scrambles array
  let scramble = data[scramblerIndex].scrambles.shift();
  
  // save scramble locally
  if(data[scramblerIndex].solved === undefined) {
    data[scramblerIndex].solved = [];
  }
  data[scramblerIndex].solved.push({
    scramble: scramble,
    duration: duration
  });
  
  // save scramble in file
  fs.writeFile('./scrambles.js', `module.exports = ${ JSON.stringify(data, null, 2) };`, e => e && throw e);
};

// get a scramble and generate first scramble
let scramblerIndex;
let generateScramble;
(generateScramble = () => {
  // disregard data with zero scrambles left
  let filteredData = data.filter(scramblerData => scramblerData.scrambles.length > 0);
  
  // choose random scrambler
  scramblerIndex = data.map(scramblerData => scramblerData.name).indexOf(filteredData[Math.floor(Math.random() * filteredData.length)].name);
  
  // display the first scramble from the chosen scramble
  // format it so that multiple spaces are replaced with one
  console.log(data[scramblerIndex].scrambles[0].replace(/\s+/g, ' '));
})();
