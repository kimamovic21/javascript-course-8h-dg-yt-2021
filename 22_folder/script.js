// 22. Event Listeners

const view = document.querySelector('#view2');
console.log(view);
const div = view.querySelector('div');
console.log(div);
const h2 = div.querySelector('h2');
console.log(h2);

// Syntax addEventListener(event, function, useCapture);
const doSomething = () => {
    alert('doing something');
};

h2.addEventListener('click', doSomething, false);
h2.removeEventListener('click', doSomething, false);

h2.addEventListener('click', (event) => {
    console.log(event.target);
    event.target.textContent = 'Clicked';
});
