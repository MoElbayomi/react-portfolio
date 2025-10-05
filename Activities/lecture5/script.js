var eightBallSayings = [
  "It is certain.",
  "Without a doubt.",
  "You may rely on it.",
  "Ask again later.",
  "Better not tell you now.",
  "Cannot predict now.",
  "Don’t count on it.",
  "My reply is no.",
  "Very doubtful.",
  "Outlook good."
];
var fortuneCookies = [
  "A fresh start will put you on your way.",
  "A golden egg of opportunity falls into your lap this month.",
  "An exciting opportunity lies ahead of you.",
  "Believe it can be done.",
  "Now is the time to try something new.",
  "Your abilities are unparalleled.",
  "All your hard work will soon pay off.",
  "Adventure can be real happiness.",
  "Fortune favors the brave.",
  "A lifetime of happiness lies ahead of you."
];
function getAnswer() {
  var pickList = Math.random() < 0.5 ? 0 : 1;
  var list = pickList === 0 ? eightBallSayings : fortuneCookies;
  var label = pickList === 0 ? "🎱 Magic 8-Ball" : "🍪 Fortune Cookie";
  var idx = Math.floor(Math.random() * list.length);
  var text = list[idx];
  console.log("Picked:", label, "→", text);
  return { source: label, text: text };
}
var btn = document.getElementById("askBtn");
var questionInput = document.getElementById("question");
var sourceEl = document.getElementById("source");
var answerEl = document.getElementById("answer");
btn.addEventListener("click", function () {
  var result = getAnswer();
  sourceEl.innerHTML = "<small>" + result.source + "</small>";
  answerEl.textContent = result.text;
});
questionInput.addEventListener("keydown", function (e) {
  if (e.key === "Enter") btn.click();
});
