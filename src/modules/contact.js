
function createContactHeader() {
    const header = document.createElement('div');
    header.classList.add('contact-header');
    header.textContent = 'Contact Us';

    return header;
}

function createContactContainer() {
    const contactContainer = document.createElement('div');
    contactContainer.classList.add('contact-container');

    contactContainer.appendChild(createContactHeader());

    contactContainer.appendChild(createContact(
        'Baek Jong Won',
        'Chef, Lovely Man',
        '333-444-5555',
        'baekjongwonsemail@baekjongwon.com',
        '../../images/baek.png'
    ));

    contactContainer.appendChild(createContact(
        'Gordon Ramsay',
        'Waiter',
        '444-333-2222',
        'gordonramsaysemail@gordonramsay.com',
        '../../images/gordon.png'
    ))

    contactContainer.appendChild(createContact(
        'Patrick',
        'Phone Duty',
        '222-444-3333',
        'thisispatrick@thisispatrick.com',
        '../../images/patrick.png'
    ))
    
    return contactContainer;
}

function createContact(name, position, phoneNum, email, imageURL) {
    const contact = document.createElement('div');
    contact.classList.add('contact');

    contact.appendChild(createDiv('name', name));
    contact.appendChild(createDiv('position', position));
    contact.appendChild(createDiv('phoneNum', phoneNum));
    contact.appendChild(createDiv('email', email));
    contact.appendChild(createImg(imageURL))

    return contact;

}

function createImg(imgURL) {
    const image = document.createElement('img');
    image.classList.add('contact-image');
    image.src = imgURL;

    return image;
}

function createDiv(contactClass, content) {
    const contactDiv = document.createElement('div');
    contactDiv.classList.add('contact-info', contactClass);
    contactDiv.textContent = content;

    return contactDiv;
}

export default createContactContainer;