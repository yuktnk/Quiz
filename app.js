const question = 'ここに問題';
const ansewers = [
  '不正解',
  '正解',
  '不正解',
  '不正解'
];
const correct = '正解';
const $button = document.getElementsByTagName('button');
const buttonLength = $button.length;

const setupQuiz = () => {
  document.getElementById('js-question').textContent = question;
  let buttonIndex = 0;
  while (buttonIndex < buttonLength) {
    $button[buttonIndex].textContent = ansewers[buttonIndex];
    buttonIndex++;
  }
}
setupQuiz();

const clickHandler = (e) => {
  if (correct === e.target.textContent) {
    window.alert('正解！');
  } else {
    window.alert('不正解！');
  }
}

let handleIndex = 0;
while (handleIndex < buttonLength) {
  $button[handleIndex].addEventListener('click', (e) => {
    clickHandler(e);
  });
  handleIndex++;
};