// This line of code will make sure the page is fully loaded
window.onload = function () {
  // Write the logic in this function
  // 1. Get the excuse element
  const excuse = document.getElementById("excuse");
  console.log(excuse);

  // 2. Generate a random excuse
  const part1 = [
    "Happiness blooms when you",
    "Courage is found when you",
    "Greatness is achieved when you",
    "Peace resides in your ability to",
    "Success unfolds when you",
    "Growth begins when you",
    "Joy multiplies when you",
    "Wisdom develops as you",
  ];
  const part2 = [
    "let go of fear and doubt.",
    "embrace the unknown with confidence.",
    "turn setbacks into opportunities.",
    "find beauty in the small moments.",
    "stay consistent in your efforts.",
    "choose kindness over criticism.",
    "learn from failure and keep going.",
    "focus on progress, not perfection.",
  ];

  const indexPart1 = Math.floor(Math.random() * part1.length); 
  const indexPart2 = Math.floor(Math.random() * part2.length);

  const quoteText = `${part1[indexPart1]} ${part2[indexPart2]}`;

  // 3. Inseart the excuse into the excuse element
  excuse.innerHTML = quoteText;
};
