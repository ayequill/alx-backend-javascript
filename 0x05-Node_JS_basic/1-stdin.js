process.stdout.write('Welcome to Holberton School, what is your name?\n');

process.stdin.on('readable', () => {
  process.stdout.write(`Your name is: ${process.stdin.read()}`);
});

process.stdin.on('exit', () => {
  process.stdout.write('This important software is now closing\n');
  process.exit();
});
