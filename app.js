const quizzes = [
  {
    question: '問題',
    answers: [
      '不正解',
      '正解',
      '不正解',
      '不正解'
    ],
    correct: '正解'
  },
  {
    question: '問題2',
    answers: [
      '不正解',
      '正解',
      '不正解',
      '不正解'
    ],
    correct: '正解'
  },
  {
    question: '問題3',
    answers: [
      '不正解',
      '正解',
      '不正解',
      '不正解'
    ],
    correct: '正解'
  },
]

const quizLength = quizzes.length;
let quizIndex = 0;



const $button = document.getElementsByTagName('button');
const buttonLength = $button.length;

const setupQuiz = () => {
  document.getElementById('js-question').textContent = quizzes[quizIndex].question;
  let buttonIndex = 0;
  while (buttonIndex < buttonLength) {
    $button[buttonIndex].textContent = quizzes[quizIndex].answers[buttonIndex];
    buttonIndex++;
  }
}
setupQuiz();

const clickHandler = (e) => {
  if (quizzes[quizIndex].correct === e.target.textContent) {
    window.alert('正解！');
  } else {
    window.alert('不正解！');
  }
  quizIndex++;
  if (quizIndex < quizLength) {
    setupQuiz();
  } else {
    window.alert('終了！');
  }
}

let handleIndex = 0;
while (handleIndex < buttonLength) {
  $button[handleIndex].addEventListener('click', (e) => {
    clickHandler(e);
  });
  handleIndex++;
};