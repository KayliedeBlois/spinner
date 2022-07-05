let spinner = "|/-\\|/-\\|";
let time = 0; 
for (const char of spinner) {
  setTimeout(() => {
    process.stdout.write('\r' + char);
  }, time)
  time += 200;
};