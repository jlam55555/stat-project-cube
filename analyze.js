// statistics code
Array.prototype.mean = function() {
  return this.reduce((a, v) => a + v) / this.length;
};
Array.prototype.std = function(mean) {
  mean = mean || this.mean();
  return Math.sqrt(this.reduce((a, v) => a + Math.pow(v - mean, 2), 0) / (this.length - 1));
};

// get data
const data = require('./scrambles.js');

// analyze each scrambler
data.forEach(scrambler => {
  // calculate mean
  let times = scrambler.solved.map(solve => solve.duration);
  let mean = times.mean();
  let std = times.std();

  // print out data
  process.stdout.write(`name:\t\t\t${scrambler.name}\nscrambles left:\t\t${scrambler.scrambles.length}\nsolved (for sanity):\t${scrambler.solved.length}\nmean:\t\t\t${mean}\nstandard deviation:\t${std}\ntimes:\t\t\t${times}\n------------------------\t\n`);
});