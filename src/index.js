//import styles
import './styles/reset.css';

import bridge from './img/daniel-macura-YpiT8ehY5ME-unsplash.jpg';
import lake from './img/juan-di-nella-ne1X1c9M0Hg-unsplash.jpg';
import city from './img/matt-koffel-_W8p_1OBkAw-unsplash.jpg';
import circuit from './img/nicolas-thomas-3GZi6OpSDcY-unsplash.jpg';

const images = [bridge, lake, city, circuit];

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

function updateImageBar() {
    const allNavImg = document.querySelectorAll('.image-bar-element');
    allNavImg.forEach((img, index) => {
        if (img.classList.contains('active-img-bar')) {
            img.classList.remove('active-img-bar');
        }
        if (index === currentIndex) {
            img.classList.add('active-img-bar');
        }
    });
}

function moveCarousel() {
    while (true) {
        delay(5).then(() => {
            next();
            updateImageBar();
        });
    }
}

// moveCarousel();

images.forEach((image, index) => {
    const img = document.createElement('img');
    img.src = image;
    img.alt = `Image ${index + 1}`;
    img.style.height = '500px';
    img.style.width = (500 * 4) / 3 + 'px';
    img.style.objectFit = 'cover';
    const imgBarElement = imageBarElement();
    if (index === 0) {
        imgBarElement.classList.add('active-img-bar');
    }

    imagesContainer.appendChild(img);
    imageBar.appendChild(imgBarElement);
});

function imageBarElement() {
    // Create the image bar element
    const imageBarElement = document.createElement('div');
    imageBarElement.className = 'image-bar-element';

    imageBarElement.addEventListener('click', () => {
        currentIndex = Array.from(imageBar.children).indexOf(imageBarElement);
        updateImageBar();
        imagesContainer.style.transform = `translateX(-${currentIndex * imageWidth}px)`;
    });

    return imageBarElement;
}

function next() {
    if (currentIndex === images.length - 1) {
        currentIndex = 0;
    } else {
        currentIndex = (currentIndex + 1) % images.length;
    }
    imagesContainer.style.transform = `translateX(-${currentIndex * imageWidth}px)`;
    updateImageBar();
}

function prev() {
    if (currentIndex === 0) {
        currentIndex = images.length - 1;
    } else {
        currentIndex = currentIndex - 1;
    }
    imagesContainer.style.transform = `translateX(-${currentIndex * imageWidth}px)`;
    updateImageBar();
}

function delay(seconds) {
    return new Promise((resolve) => setTimeout(resolve, seconds * 1000));
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

import './styles/styles.scss';
