function createAndAppendElement() {
    const content = document.getElementById('content');
    const header = document.createElement('h1');
    const lorem = document.createElement('div');
    lorem.classList.add('container');
    lorem.textContent = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus pulvinar odio nec semper ullamcorper. Donec volutpat sodales malesuada. Suspendisse in erat convallis, cursus dui sit amet, suscipit mauris. Nullam consequat pharetra tellus, eu consequat tortor bibendum et. Cras ornare velit non nisl luctus porta. In eget mauris at purus blandit pharetra sed sit amet tortor. In vulputate sodales augue at varius. Suspendisse id velit vitae nulla bibendum fermentum et in dui. Sed orci augue, aliquet et lobortis id, iaculis at dolor. Vestibulum enim sem, rutrum id hendrerit id, scelerisque a lorem. Vestibulum erat sem, laoreet ut augue et, dignissim tincidunt dolor. Cras vitae blandit enim. Nulla id auctor eros. Proin eget quam sem. Morbi bibendum pulvinar tempus."
    header.textContent = "Chung HanShik"
    content.appendChild(header);
    content.appendChild(lorem);
};

export default createAndAppendElement;