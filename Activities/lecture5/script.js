var eightBallSayings = [
  "It is certain.",
  "Agueeeerrrrrrooooooooooooooooooooooo",
  "I Just came to say hello",
  "Ask again later.",
  "Better not tell you now.",
  "Enjoy the journey",
  "Messi! Show them some respect.",
  "Sweet but Psycho",
  "You will never see anything like this again.",
  "Wijnaldum!"
];
var fortuneCookies = [
  "I believe in Believe.",
  "Never Say Never.",
  "Ancara Messi.",
  "Believe it can be done.",
  "Alqadya momken",
  "Your abilities are unparalleled.",
  "All your hard work will soon pay off.",
  "Adventure can be real happiness.",
  "Barbecue sauce",
  "A lifetime of happiness lies ahead of you."
];
function getAnswer() {
  var pickList = Math.random();
  var list, label;
  if (pickList < 0.5) {
    list = eightBallSayings;
    label = "Magic 8-Ball";
  } else {
    list = fortuneCookies;
    label = "Fortune Cookie";
  }
  var idx = Math.floor(Math.random() * list.length);
  return { source: label, text: list[idx] };
}
var btn = document.getElementById("askBtn");
var questionInput = document.getElementById("question");
var sourceEl = document.getElementById("source");
var answerEl = document.getElementById("answer");

btn.addEventListener("click", function () {
  var result = getAnswer();
  sourceEl.textContent = result.source;
  answerEl.textContent = result.text;
});
questionInput.addEventListener("keydown", function (e) {
  if (e.key === "Enter") {
    btn.click();
  }
});
