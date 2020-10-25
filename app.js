const question = 'ここに問題';
const ansewers = [
  '不正解',
  '正解',
  '不正解',
  '不正解'
];
const correct = '正解';

const $button = document.getElementsByTagName('button');

$button[0].textContent = ansewers[0];
$button[1].textContent = ansewers[1];
$button[2].textContent = ansewers[2];
$button[3].textContent = ansewers[3];
  
$button[0].addEventListener('click', () => {
  if (correct === $button[0].textContent) {
    window.alert('正解！');
  } else {
    window.alert('不正解！');
  }
});
$button[1].addEventListener('click', () => {
  if (correct === $button[1].textContent) {
    window.alert('正解！');
  } else {
    window.alert('不正解！');
  }
});
$button[2].addEventListener('click', () => {
  if (correct === $button[2].textContent) {
    window.alert('正解！');
  } else {
    window.alert('不正解！');
  }
});
$button[3].addEventListener('click', () => {
  if (correct === $button[3].textContent) {
    window.alert('正解！');
  } else {
    window.alert('不正解！');
  }
});