import './styles/reset.css';
import './styles/styles.scss';
import { initCarousel, moveCarousel, next, prev } from './carousel.js';

import bridge from './img/daniel-macura-YpiT8ehY5ME-unsplash.jpg';
import lake from './img/juan-di-nella-ne1X1c9M0Hg-unsplash.jpg';
import city from './img/matt-koffel-_W8p_1OBkAw-unsplash.jpg';
import circuit from './img/nicolas-thomas-3GZi6OpSDcY-unsplash.jpg';

const images = [bridge, lake, city, circuit];

const imageWidth = 500 * (4 / 3); // ~666.66
const imageHeight = 500;

const content = document.createElement('div');
content.className = 'content';
content.style.width = imageWidth + 'px';

const container = document.createElement('div');
const { imageBar } = initCarousel({
    containerEl: container,
    images,
    width: imageWidth,
    height: imageHeight,
});

const nextButton = document.createElement('button');
nextButton.innerText = '>';
nextButton.style.right = '0px';

const prevButton = document.createElement('button');
prevButton.innerText = '<';
prevButton.style.left = '0px';

nextButton.addEventListener('click', () => {
    next();
    moveCarousel();
});

prevButton.addEventListener('click', () => {
    prev();
    moveCarousel();
});

container.append(nextButton, prevButton);
content.append(container, imageBar);
document.body.appendChild(content);

moveCarousel();
