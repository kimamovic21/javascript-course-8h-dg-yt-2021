// 22. Event Listeners

document.addEventListener('readystatechange', (event) => {
    if (event.target.readyState === 'complete') {
        console.log('readyState: complete');
        initApp();
    };
});

const initApp = () => {
    const view = document.querySelector('#view2');
    const div = view.querySelector('div');
    const h2 = div.querySelector('h2');

    view.addEventListener(
        'click', 
        (event) => {
            // event.stopPropagation();
            // event.target.backgroundColor = 'purple';
            // view.style.backgroundColor = 'purple';
            view.classList.toggle('purple');
            view.classList.toggle('darkblue');
        }, 
        // true
        false
    );

    div.addEventListener(
        'click', 
        (event) => {
            // event.stopPropagation();
            // event.target.style.backgroundColor = 'blue';
            // div.style.backgroundColor = 'blue';
            div.classList.toggle('blue');
            div.classList.toggle('black');
        }, 
        // true
        false
    );

    h2.addEventListener(
        'click', 
        (event) => {
            // event.stopPropagation();
            // event.target.textContent = 'Clicked';
            const myText = event.target.textContent;
            myText === 'My 2nd View' 
                ? (event.target.textContent = 'Clicked')
                : (event.target.textContent = 'My 2nd View');
        }, 
        // true
        false
    );

    const nav = document.querySelector('nav');
    nav.addEventListener('mouseover', (event) => {
        event.target.classList.add('height100');
    });
    nav.addEventListener('mouseout', (event => {
        event.target.classList.remove('height100');
    }));
};

