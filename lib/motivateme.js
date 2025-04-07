module.exports = function motivate() {
  const messages = [
    "You got this! 🚀",
    "Keep pushing forward 💪",
    "Every step counts 🔥",
    "Believe in yourself 🌟",
    "Don’t give up now! 🎯"
  ];
  const random = messages[Math.floor(Math.random() * messages.length)];
  console.log(random);
};

