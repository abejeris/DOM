document.getElementById('ai-photo').style.width = '700px';

const inputs = document.getElementsByTagName('input');

const specialLi = document.getElementsByClassName('special');

const h1 = document.querySelector('h1');

const range = document.querySelector('#range');
const inner = document.querySelector('#inner');

range.addEventListener('input', function () {
	inner.style.transform = `rotate(${range.value}deg)`;
});
