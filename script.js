const messages = [
  "Kevy lives in Java Indonesia, and I’m not going to explain it in more detail.",
  "Kevy has a life that could be described as being 'on the edge.' His financial situation is 'stable' (in quotation marks), and he often spends his time working to help support his family.",
  "Kevy doesn’t like being disturbed, especially if it goes too far.",
  "Kevy is still a minor. 20> DNI.",
  "Kevy likes playing games such as Forsaken, The Battle Bricks, Jujutsu Shenanigans, Pressure, and he also enjoys playing mobile games like Clash Royale.",
  "Kevy doesn’t want any kind of relationship.",
  "Kevy likes the FPE fandom (not sexualized), Forsaken, and TBB (new to this fandom).",
  "Kevy was born on June 24, ####.",
  "Kevy’s main is TwoTime (current) and Elliot (past).",
  "Kevy’s favorite killer is Noli (current) and John Doe (past).",
  "Kevy loves getting praised for his actions.",
  "Kevy likes Engel and Edward (FPE) and TwoTime (Forsaken) and Sebastian Solace (Pressure)."
];


const finalMessage = "You have reached the end of Kevy fun facts, check again later!";

let availableMessages = [...messages];

const textbox = document.getElementById("textbox");
const icon = document.querySelector(".icon");

let isTyping = false;
let clickDisabled = false;

function typeText(text) {
  isTyping = true;
  textbox.textContent = "";
  let index = 0;
  const speed = 40;

  const interval = setInterval(() => {
    textbox.textContent += text[index];
    index++;

    if (index >= text.length) {
      clearInterval(interval);
      isTyping = false;
    }
  }, speed);
}

textbox.addEventListener("click", () => {
  if (isTyping || clickDisabled) return;


  if (availableMessages.length === 0) {
    typeText(finalMessage);
    clickDisabled = true; 
    return;
  }

  const randomIndex = Math.floor(Math.random() * availableMessages.length);
  const randomMsg = availableMessages[randomIndex];
  availableMessages.splice(randomIndex, 1);

  typeText(randomMsg);


  icon.classList.add("jump");
  setTimeout(() => icon.classList.remove("jump"), 600);
});
