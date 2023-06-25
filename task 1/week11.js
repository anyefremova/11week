//Пример
//Используйте метод querySelector, чтобы найти элемент <p>. При нажатии на кнопку измените его текст на "Ты нашёл элемент и изменил его текст!"
//Подсказка: Используйте метод для изменения текстового содержимого элемента (innerHTML/innerText/textContent)

const paragraph = document.getElementById('practicum0');

function makeZero() {
	paragraph.innerText = 'Ты нашёл элемент и изменил его текст!';
}

document.querySelector('.b-0').onclick = makeZero;


//Задание 1
//Используйте метод getElementById, чтобы найти элемент <p>. При нажатии на кнопку измените его текст на "Привет!"
//Подсказка: Используйте метод для изменения текстового содержимого элемента (innerHTML/innerText/textContent)
const paragraph1 = document.getElementById('practicum');
function makeOne() {
	paragraph1.innerText = 'Привет!';
}

document.querySelector('.b-1').onclick = makeOne;

//Задание 2
//Используйте метод getElementById, чтобы найти элемент <span>. При нажатии на кнопку измените его текст на "Привет, Мир!"
//Подсказка: Используйте метод для изменения текстового содержимого элемента (innerHTML/innerText/textContent)
const span = document.getElementById('practicum2');

function makeTwo() {
	span.innerText = 'Привет, Мир!';
}

document.querySelector('.b-2').onclick = makeTwo;

//Задание 3
//Используйте метод querySelector, чтобы найти элемент <h1>. При нажатии на кнопку измените его текст на "Заголовок изменен!"
//Подсказка: Используйте метод для изменения текстового содержимого элемента (innerHTML/innerText/textContent)
let header = document.querySelector('#practicum3');

function makeThree() {
	header.innerHTML = 'Заголовок изменен!';
}

document.querySelector('.b-3').onclick = makeThree;

//Задание 4
//Используйте метод querySelector, чтобы найти элемент <div>. При нажатии на кнопку измените его фоновый цвет на красный.
//Подсказка: Используйте свойство style для изменения стилей элемента

let block = document.querySelector('#practicum4');

function makeFour() {
	block.style.background = 'red';
}

document.querySelector('.b-4').onclick = makeFour;

//Задание 5
//Используйте метод getElementById, чтобы найти элемент <input>. При нажатии на кнопку измените его значение на "Новое значение".
//Подсказка: Используйте свойство value для изменения значения элемента формы

const input = document.getElementById('practicum5');

function makeFive() {
	input.value = 'Новое значение'
}

document.querySelector('.b-5').onclick = makeFive;

//Задание 6
//Используйте метод getElementById, чтобы найти элемент <img>. При нажатии на кнопку измените его атрибут src на "newimage.jpg", а атрибут alt на "Новое изображение".
//Подсказка: Используйте знак равенства для изменения атрибутов элемента

function makeSix() {
	var img = document.getElementById('practicum6');
	img.src = 'newimage.jpg';
	img.alt = 'Новое изображение';
}

document.querySelector('.b-6').onclick = makeSix;

//Задание 7
//Используйте метод querySelector, чтобы найти элемент <a>. При нажатии на кнопку измените его href на "https://www.google.com", а название ссылки на "Ссылка на Google".
//Подсказка: Используйте знак равенства для изменения атрибутов элемента и метод для изменения текстового содержимого элемента

let link = document.querySelector('#practicum7');

function makeSeven() {
	link.href = "https://www.google.com"
	link.innerText = 'Ссылка на Google'
}

document.querySelector('.b-7').onclick = makeSeven;

//Задание 8
//Используйте метод getElementById, чтобы найти элемент <ul>. При нажатии на кнопку добавьте новый элемент <li> со значением "Новый элемент" в список.
//Подсказка: Используйте метод createElement(), который используется для динамического изменения и взаимодействия с элементами веб-страницы, и метод append(item), который добавляет элемент в конец списка. Новый элемент становится последним элементом списка.

function makeEight() {
	const list = document.getElementById('practicum8');
	const newElement = document.createElement('li');
	newElement.textContent = 'Новый элемент';
	list.append(newElement);
}

document.querySelector('.b-8').onclick = makeEight;

//Задание 9
//Используйте метод getElementById, чтобы найти элемент <select>. При нажатии на кнопку добавьте новый элемент <option> со значением "Новый вариант" в список.
//Подсказка: Используйте метод createElement(), который используется для динамического изменения и взаимодействия с элементами веб-страницы, и метод append(item), который добавляет элемент в конец списка. Новый элемент становится последним элементом списка.

function makeNine() {
	const select = document.getElementById('practicum9');
	const newElement = document.createElement('option');
	newElement.textContent = 'Новый вариант';
	select.append(newElement);
}

document.querySelector('.b-9').onclick = makeNine;

//Задание 10
//Используйте метод getElementById, чтобы найти элемент <div>. При нажатии на кнопку измените его стиль на "display: none;", чтобы скрыть его.
//Подсказка: Используйте свойство display для изменения стилей элемента

function makeTen() {
	const element10 = document.getElementById('practicum10');
	element10.style.display = 'none';
}

document.querySelector('.b-10').onclick = makeTen;

//Задание 11
//Используйте метод getElementById, чтобы найти элемент <div>. При нажатии на кнопку измените его ширину на 400px и высоту на 200px.
//Подсказка: Используйте свойство style для изменения стилей элемента

function makeEleven() {
	const element11 = document.getElementById('practicum11');
	element11.style.width = '400px';
	element11.style.height = '200px';
}

document.querySelector('.b-11').onclick = makeEleven;

//Задание 12
//Используйте метод querySelector, чтобы найти элемент <div>. При клике на этот элемент измените его ширину на 400px и высоту на 200px. При повторном клике верните его размеры в исходное состояние.
//Подсказка: Используйте метод toggle() для добавления/удаления класса, который изменяет размеры элемента

function makeTwelve() {
	const element12 = document.querySelector('#practicum12');
	element12.classList.toggle('resizeable__large');
}

//Задание 13
//Используйте метод `getElementsByTagName`, чтобы найти первый элемент <ol>. Затем измените его текст на "Первый!".
//Подсказка: Используйте метод для изменения текстового содержимого элемента

function makeThirteen() {
	const element13 = document.getElementsByTagName("ol")[0];
	element13.innerText = 'Первый!';
}

document.querySelector('.b-13').onclick = makeThirteen;

//Задание 14
//Используйте метод querySelectorAll, чтобы найти все элементы <p> на странице. Затем измените их текст на "Огого, что могу!".
//Метод forEach является методом массивов в JavaScript. Он выполняет указанную функцию один раз для каждого элемента в массиве. С этим методом мы познакомимся на следующей неделе.

function makeFourteen() {
	const paragraphs = document.querySelectorAll('p');
	paragraphs.forEach(function (paragraph) {
		paragraph.textContent = "Огого, что могу!";
	});
}

document.querySelector('.b-14').onclick = makeFourteen;

//Если задание выполнено верно, то вы увидите, что все элементы <p> на странице, в том числе и задния, изменили свои значения.  Чтобы вернуть всё, как было до выполнения задания, перезагрузите страницу.

//Задание 15
//Используйте метод getElementById, чтобы найти элемент <div>. При нажатии на кнопку удалите у него класс "practicum15".
//Подсказка: Используйте метод remove для удаления класса элемента

function makeFifteen() {
	const element15 = document.getElementById('practicum15');
	element15.classList.remove('practicum15');
}

document.querySelector('.b-15').onclick = makeFifteen;

//Задание 16
//Используйте метод getElementById, чтобы найти элемент <div>. При нажатии на кнопку добавьте ему класс "practicum16".
//Подсказка: Используйте метод add для добавления класса элемента

function makeSixteen() {
	const element16 = document.getElementById('practicum16');
	element15.classList.add('practicum16');
}

document.querySelector('.b-16').onclick = makeSixteen;

//Задание 17
//Используйте метод getElementById, чтобы найти элемент <div>. При нажатии на кнопку переключите у него класс "color", который изменяет его фоновый цвет. Если класс уже присутствует, удалите его, иначе добавьте.
//Подсказка: Используйте метод toggle класса элемента

function makeSeventeen() {
	const element17 = document.getElementById('practicum17');
	element17.classList.toggle('color');
}

document.querySelector('.b-17').onclick = makeSeventeen;

//Задание 18
//Используйте метод getElementById, чтобы найти элемент <div>. При нажатии на кнопку добавьте ему класс "active", который изменит его стиль, например, изменит цвет текста. При повторном нажатии удалите класс "active".
//Подсказка: Используйте метод toggle класса элемента

function makeEighteen() {
	const element18 = document.getElementById('practicum18');
	element18.classList.toggle('active');
}

document.querySelector('.b-18').onclick = makeEighteen;

//Задание 19
//Используйте метод getElementById, чтобы найти элемент <div>. При нажатии на кнопку удалите у него класс "active", который изменяет его стиль, например, изменяет цвет текста.
//Подсказка: Используйте метод remove класса элемента

function makeNineteen() {
	const element19 = document.getElementById('practicum19');
	element19.classList.toggle('active');
}

document.querySelector('.b-19').onclick = makeNineteen;

//Задание 20
//Используйте метод getElementById, чтобы найти элемент <div>. При нажатии на кнопку добавьте в начало элемента <div> новый дочерний элемент <p> с текстом "Добавлено в начало".
//Подсказка: Используйте метод prepend для добавления нового дочернего элемента в начало элемента <div>

function makeTwenty() {
	const practicum20 = document.getElementById('practicum20');
	const newElement = document.createElement('p');
	newElement.textContent = 'Добавлено в начало';
	practicum20.prepend(newElement);
}

document.querySelector('.b-20').onclick = makeTwenty;

//Задание 21
//Используйте метод getElementById, чтобы найти элемент <div>. При нажатии на кнопку добавьте в конец элемента <div> новый дочерний элемент <p> с текстом "Добавлено в конец".
//Подсказка: Используйте метод append для добавления нового дочернего элемента в конец элемента <div>

function makeTwentyOne() {
	const practicum21 = document.getElementById('practicum21');
	const newElement = document.createElement('p');
	newElement.textContent = 'Добавлено в конец';
	practicum21.append(newElement);
}

document.querySelector('.b-21').onclick = makeTwentyOne;

//Задание 22
//Используйте метод getElementById, чтобы найти элемент <img>. Выведите информацию на экран о наличии атрибута "src" у изображения.
//Подсказка: Используйте метод hasAttribute для проверки наличия атрибута

function makeTwentyTwo() {
	const image = document.getElementById('practicum22');
	const srcImage = image.hasAttribute('src');
	const result = document.getElementById('result22');
	result.textContent = 'Атрибут "src" присутствует:' + srcImage;
}

document.querySelector('.b-22').onclick = makeTwentyTwo;

//Задание 23
//Используйте метод getElementById, чтобы найти элемент <a>. Удалите атрибут "href" ссылки.
//Подсказка: Используйте метод removeAttribute для удаления атрибута

function makeTwentyThree() {
	const element23 = document.getElementById('practicum23');
	element23.removeAttribute('href');
}

document.querySelector('.b-23').onclick = makeTwentyThree;

//Задание 24
//Используйте метод getElementById, чтобы найти элемент <input>. Установите атрибут "value" текстового поля на значение "Новое значение".
//Подсказка: Используйте метод setAttribute для установки атрибута

function makeTwentyFour() {
	const element24 = document.getElementById('practicum24');
	element24.setAttribute('value', 'Новое значение');
}

document.querySelector('.b-24').onclick = makeTwentyFour;

//Задание 25
//Используйте метод getElementById, чтобы найти элемент <div>. Добавьте атрибут "data-info" со значением "Дополнительная информация" к элементу <div>. Выведите значение атрибута на экран.
//Подсказка: Используйте метод setAttribute для добавления атрибута

function makeTwentyFive() {
	const element25 = document.getElementById('practicum25');
	element25.setAttribute('data-info', 'Дополнительная информация');
	const resultElement25 = element25.getAttribute('data-info');
	const infoOutput = document.getElementById('infoOutput');
	infoOutput.textContent = 'Добавленный атрибут: ' + resultElement25;
}

document.querySelector('.b-25').onclick = makeTwentyFive;

//Задание 26
//Используйте метод closest, чтобы найти ближайший родительский элемент с классом "parent". При нажатии на кнопку измените его фоновый цвет на красный.
//Подсказка: Используйте метод closest для поиска ближайшего родительского элемента

const button = document.querySelector('.b-26');
const parent = button.closest('.parent')

const makeTwentySix = () => {
	parent.style.backgroundColor = 'red';
};

document.querySelector('.b-26').onclick = makeTwentySix;

//Задание 27
//Используйте метод `getElementById`, чтобы найти элемент `<div>`. Проверьте, содержит ли данный элемент класс `highlight`. Выедите результат в <div> c id result.
//Подсказка: Используйте метод `contains` для проверки наличия класса у элемента. В <div> должен появиться результат true или false.

function makeTwentySeven() {
	const element27 = document.getElementById('practicum27');
	const highlight = element27.classList.contains('highlight');
	const resultElement27 = document.getElementById('result');
	resultElement27.textContent = 'Содержит класс highlight: ' + highlight;
}

document.querySelector('.b-27').onclick = makeTwentySeven;

//Задание 28
//Используйте метод getElementById, чтобы найти элемент <button>. Добавьте обработчик события click, который будет выводить сообщение "Кнопка нажата" в консоль при каждом клике на кнопку.
//Подсказка: Используйте метод addEventListener для добавления обработчика события

const buttonTaskTwentyEight = document.getElementById('button28');

function handleClick() {
	console.log('Кнопка нажата');
}

buttonTaskTwentyEight.addEventListener('click', handleClick);

//Задание 29
//Используйте метод getElementById, чтобы найти элемент <input />. Добавьте обработчик события change, который будет выводить сообщение "Значение изменено" в консоль при изменении значения в поле ввода.
//Подсказка: Используйте метод addEventListener для добавления обработчика события. Чтобы проверить работу слушателя, нужно напечатать один символ и более в поле ввода и убрать фокус с инпута, кликнув на любое место страницы.

const element29 = document.getElementById('input29');

function handleChange() {
	console.log('Значение изменено');
}

element29.addEventListener('click', handleChange);

//Задание 30
//Используйте метод getElementById, чтобы найти элемент <div>. Добавьте обработчик события `mouseover`, который будет выводить сообщение "Курсор наведен на элемент" в консоль при наведении курсора на элемент.
//Подсказка: Используйте метод addEventListener для добавления обработчика события. Чтобы проверить работу слушателя, нужно напечатать один символ и более в поле ввода и убрать фокус с инпута, кликнув на любое место страницы.

const element30 = document.getElementById('div30');

function handleMouseOver() {
	console.log('Курсор наведен на элемент');
}

element30.addEventListener('mouseover', handleMouseOver);
