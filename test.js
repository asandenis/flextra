// document.getElementsByClassName('header-0-logo').addEventListener('mouseover', function() {
//     this.src = 'media/logo-2.png';
// });

// const test = document.createElement('button');
// test.textContent = 'test';

// const header = document.getElementsByClassName('header-0');
// header.appendChild(test);

document.addEventListener("DOMContentLoaded", () => {
    const para = document.createElement("p");
    const node = document.createTextNode("This is a paragraph.");

    para.appendChild(node);

    document.getElementsByClassName('header-0').appendChild(para);
});