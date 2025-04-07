import chalk from 'chalk';
import { createRequire } from 'module';
const require = createRequire(import.meta.url);

function motivate() {
  const messages = [
    "You're doing great!",
    "Keep pushing forward!",
    "Believe in yourself!",
    "Don't give up!",
    "Keep calm and code on!"
  ];

  const random = Math.floor(Math.random() * messages.length);
  console.log(chalk.green(messages[random]));
}

export default motivate;


