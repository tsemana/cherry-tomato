Accounts.ui.config({
  passwordSignupFields: 'USERNAME_AND_EMAIL'
});

formattedRemaining = function (pomodoro) {
  if (pomodoro.done()) {
    return "0:00";
  }
  remainingAsSeconds = (pomodoro.remaining() / 1000).floor()
  minutes = Math.floor(remainingAsSeconds / 60).toString();
  seconds = remainingAsSeconds % 60;
  return minutes.toString() + ":" + seconds.pad(2);
};
