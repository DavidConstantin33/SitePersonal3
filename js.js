let divText = document.getElementById('textJs');
let textShow1 = document.createElement("p");
textShow1.textContent = 'Welcome to my personal website!';
let textShow2 = document.createElement("p");
textShow2.textContent = 'Here You can find information about me,';
let textShow3 = document.createElement("p");
textShow3.textContent = 'look at my social media accounts';
let textShow4 = document.createElement("p");
textShow4.textContent = 'and get in touch with me!';
let title = document.querySelector('.titleHeading');

function showText(element, delay) {
    setTimeout(function () {
        divText.appendChild(element);
        element.classList.add('textShow2');
        title.style.marginTop = '3em';
    }, delay);
}

showText(textShow1, 2000);
showText(textShow2, 3000);
showText(textShow3, 5000);
showText(textShow4, 7000);


