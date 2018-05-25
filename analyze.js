// get data
const data = require('./scrambles.js');

// analyze each scrambler
data.forEach(scrambler => {
  process.stdout.write(`${scrambler.name}\nscrambles left: ${scrambler.scrambles.length}\nsolved (for sanity): ${scrambler.solved.length}\n`);
});