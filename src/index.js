//import styles
import './styles/reset.css';
import './styles/styles.scss';

import bridge from './img/daniel-macura-YpiT8ehY5ME-unsplash.jpg';
import lake from './img/juan-di-nella-ne1X1c9M0Hg-unsplash.jpg';
import city from './img/matt-koffel-_W8p_1OBkAw-unsplash.jpg';
import circuit from './img/nicolas-thomas-3GZi6OpSDcY-unsplash.jpg';

const images = [bridge, lake, city, circuit];

const elementImgs = [];

const content = document.createElement('div');
content.className = 'content';
content.style.width = (500 * 4) / 3 + 'px';

const imageBar = document.createElement('div');
imageBar.className = 'image-bar';

const container = document.createElement('div');
container.style.width = (500 * 4) / 3 + 'px';
container.style.height = '500px';
container.className = 'container';
container.style.overflow = 'hidden';
container.style.position = 'relative';

const nextButton = document.createElement('button');
nextButton.innerText = '>';
nextButton.style.right = '0px';

const prevButton = document.createElement('button');
prevButton.innerText = '<';
prevButton.style.left = '0px';

const imagesContainer = document.createElement('div');
imagesContainer.style.display = 'flex';
imagesContainer.style.justifyContent = 'space-between';
imagesContainer.style.width = images.length * 100 + 'vw';
imagesContainer.className = 'images-container';
imagesContainer.style.transition = 'transform .7s ease';
let currentIndex = 0;
const imageWidth = 500 * (4 / 3); //666.66px

images.forEach((image, index) => {
    const img = document.createElement('img');
    img.src = image;
    img.alt = `Image ${index + 1}`;
    img.style.height = '500px';
    img.style.width = (500 * 4) / 3 + 'px';
    img.style.objectFit = 'cover';
    elementImgs.push(img);
    imagesContainer.appendChild(img);
});

function imageBarElement() {
    const imageBarElement = document.createElement('div');
    imageBarElement.className = 'image-bar-element';
    imageBarElement.style.height = '100%';
    imageBarElement.style.width = '30px';
    imageBarElement.style.border = '1px solid #000';
    imageBarElement.style.borderRadius = '50%';
    imageBarElement.style.backgroundImage = `url(${images[currentIndex]})`;
    imageBarElement.style.backgroundSize = 'cover';
    imageBarElement.style.transition = 'background-image .7s ease';
    return imageBarElement;
}

imageBar.appendChild(imageBarElement());

function next() {
    if (currentIndex === images.length - 1) {
        currentIndex = 0;
    }
    currentIndex = (currentIndex + 1) % images.length;
    imagesContainer.style.transform = `translateX(-${currentIndex * imageWidth}px)`;
}

function delay(seconds) {
    return new Promise((resolve) => setTimeout(resolve, seconds * 1000));
}
function prev() {
    if (currentIndex === 0) {
        currentIndex = images.length - 1;
    } else {
        currentIndex = currentIndex - 1;
    }
    imagesContainer.style.transform = `translateX(-${currentIndex * imageWidth}px)`;
}

// Event Listeners
prevButton.addEventListener('click', () => {
    prev();
});

nextButton.addEventListener('click', () => {
    next();
});

container.append(nextButton, prevButton, imagesContainer);
content.append(container, imageBar);
document.body.appendChild(content);
