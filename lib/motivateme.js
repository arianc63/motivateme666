module.exports = function () {
  const messages = [
    "You got this!",
    "Keep pushing!",
    "Stay positive!",
    "Never give up!",
    "Success is near!"
  ];
  const message = messages[Math.floor(Math.random() * messages.length)];
  console.log("MotivateMe: " + message);
};
