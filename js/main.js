const questionContent = document.querySelector(".question__content");
const prevButton = document.querySelector(".prev");
const nextButton = document.querySelector(".next");

const icebreakersLastIndex = icebreakers.length - 1;
let index = 0;

function showQuestion(shuffledIcebreakers) {
  questionContent.textContent = shuffledIcebreakers[index];
}

function getPrevIndex(currentIndex) {
  return currentIndex === 0 ? icebreakersLastIndex : currentIndex - 1;
}

function onNextClick(currentIndex) {
  return currentIndex === icebreakersLastIndex ? 0 : currentIndex + 1;
}

function main() {
  const shuffledIcebreakers = shuffle(icebreakers);
  showQuestion(shuffledIcebreakers);

  prevButton.addEventListener("click", () => {
    index = getPrevIndex(index);
    showQuestion(shuffledIcebreakers);
  });

  nextButton.addEventListener("click", () => {
    index = onNextClick(index);
    showQuestion(shuffledIcebreakers);
  });
}

main();
