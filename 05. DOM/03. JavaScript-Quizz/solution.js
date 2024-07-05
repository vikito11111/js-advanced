function solve() {
  let quizzie = document.getElementById('quizzie');

  let sections = document.getElementsByTagName('section');

  let resultLi = document.querySelector('.results-inner h1');

  let resultUl = document.querySelector('#results');

  let correctAnswers = ['onclick', 'JSON.stringify()', 'A programming API for HTML and XML documents'];

  let userAnswers = 0;

  let currentStep = 0;

  quizzie.addEventListener('click', (e) => {
    if (e.target.className === 'answer-text') {
      sections[currentStep].style.display = 'none';

      let isAnswerCorrect = correctAnswers.includes(e.target.innerHTML);

      if (isAnswerCorrect) {
        userAnswers++;
      }

      currentStep++;

      if (currentStep < correctAnswers.length) {
        sections[currentStep].style.display = 'block';
      }

      if (currentStep === correctAnswers.length) {
        resultUl.style.display = 'block';

        resultLi.innerHTML = correctAnswers.length === userAnswers ? "You are recognized as top JavaScript fan!" : `"You have ${userAnswers} right answers"`;
      }
    }
  });
}