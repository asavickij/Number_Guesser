let randomNumber = Math.floor(Math.random() * 100) + 1;
let attempts = 10;

console.log(randomNumber);

const checkGuess = () => {
    attempts --;
  const inputElement = document.getElementById('guess');
  const feedbackElement = document.getElementById('feedback');
  let guess = inputElement.valueAsNumber;

  while (attempts > 0) {
    if (guess === randomNumber) {
        attempts = 0;
        feedbackElement.innerHTML = `CONGRATULATIONS!!! YOU WON!`;
        feedbackElement.style.color = 'green';
        break;
  } else if (guess < randomNumber) {
        feedbackElement.innerHTML = `The number ${guess} is too low! ${attempts} attempts remaining.`;
        feedbackElement.style.color = 'red';
        break;
  } else {
        feedbackElement.innerHTML = `The number ${guess} is too high! ${attempts} attempts remaining.`;
        feedbackElement.style.color = 'red';
        break;
  }}
  
  if (attempts === 0 && guess !== randomNumber) {
    feedbackElement.style.color = "red";
    feedbackElement.innerHTML = `GAME OVER!!! The correct number is ${randomNumber}.`;
  }
};
