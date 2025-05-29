// Script to count from 1 to 300 with a 1-second delay between each number

let i = 1;
const maxCount = 300;

const counter = setInterval(() => {
  console.log(i);

  if (i >= maxCount) {
    clearInterval(counter);
    process.exit(0);
  }

  i++;
}, 300);

// Keep the process running
process.on('SIGINT', () => {
  console.log('Counter stopped');
  clearInterval(counter);
  process.exit(0);
});
