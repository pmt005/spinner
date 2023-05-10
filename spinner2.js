const sentence = "|/-\\|/-\\|";
let i = 0;

const spinner2 = function() {
  setTimeout(() => {
    process.stdout.write(`\r${sentence[i]}    `);
    i++;
    if (i < sentence.length) spinner2();
    if (i === sentence.length) process.stdout.write('\n');
  }, 200);
};


spinner2();
