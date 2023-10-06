
function createContactHeader() {
    const header = document.createElement('div');
    header.textContent = 'Contact Us';

    return header;
}

function createContactContainer() {
    const contactContainer = document.createElement('div');
    contactContainer.classList.add('contact-container');

    contactContainer.appendChild(createContactHeader());

    contactContainer.appendChild(createContact(
        'Baek Jong Won',
        'Lovely Man',
        '333-444-5555',
        'baekjongwonsemail@baekjongwon.com'
        ));

    return contactContainer;
}

function createContact(name, position, phoneNum, email) {
    const contactInfo = document.createElement('div');
    contactInfo.classList.add('contactInfo');

    const nameDiv = document.createElement('div');
    nameDiv.classList.add('contact', 'name');
    nameDiv.textContent = name;

    const positionDiv = document.createElement('div');
    positionDiv.classList.add('contact', 'position');
    positionDiv.textContent = position;

    const phoneNumDiv = document.createElement('div');
    phoneNumDiv.classList.add('contact', 'phoneNum');
    phoneNumDiv.textContent = phoneNum;

    const emailDiv = document.createElement('div');
    emailDiv.classList.add('contact', 'email');
    emailDiv.textContent = email;

    contactInfo.appendChild(nameDiv);
    contactInfo.appendChild(positionDiv);
    contactInfo.appendChild(phoneNumDiv);
    contactInfo.appendChild(emailDiv);

    return contactInfo;

}

export default createContactContainer;