
const content = document.createElement('div');
content.classList.add('content');
content.textContent = 'This is the glorious text-content!';

container.appendChild(content);

const para = document.createElement('p');
para.textContent = 'Hey I\'m red!';
para.style['color'] = 'red';

container.appendChild(para);

const headThree = document.createElement('h3');
headThree.textContent = 'Hey I\'m a blue h3';
headThree.style['color'] = 'blue';

container.appendChild(headThree);

const content2 = document.createElement('div');
content2.classList.add('content2');
content2.style.cssText = 'background: pink; border: black solid;'
container.appendChild(content2);

const headOne = document.createElement('h1');
headOne.textContent = 'I\'m in a div';
content2.appendChild(headOne);

const para2 = document.createElement('p');
para2.classList.add('inside-div');
para2.textContent = 'ME TOO';

content2.appendChild(para2);
