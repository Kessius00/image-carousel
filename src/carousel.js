// carousel.js
let currentIndex = 0;
let imageWidth = 0;
let imagesContainer;
let imageBar;

function initCarousel({ containerEl, images, width, height }) {
    currentIndex = 0;
    imageWidth = width;

    const container = containerEl;
    container.style.width = width + 'px';
    container.style.height = height + 'px';
    container.style.overflow = 'hidden';
    container.style.position = 'relative';

    imagesContainer = document.createElement('div');
    imagesContainer.className = 'images-container';
    imagesContainer.style.display = 'flex';
    imagesContainer.style.transition = 'transform 0.7s ease';

    imageBar = document.createElement('div');
    imageBar.className = 'image-bar';

    images.forEach((image, index) => {
        const img = document.createElement('img');
        img.src = image;
        img.alt = `Image ${index + 1}`;
        img.style.height = height + 'px';
        img.style.width = width + 'px';
        img.style.objectFit = 'cover';

        imagesContainer.appendChild(img);

        const barEl = imageBarElement(index);
        if (index === 0) {
            barEl.classList.add('active-img-bar');
        }
        imageBar.appendChild(barEl);
    });

    container.appendChild(imagesContainer);
    return { container, imageBar };
}

function imageBarElement(index) {
    const el = document.createElement('div');
    el.className = 'image-bar-element';
    el.addEventListener('click', () => {
        currentIndex = index;
        updateImageBar();
        imagesContainer.style.transform = `translateX(-${currentIndex * imageWidth}px)`;
        moveCarousel();
    });
    return el;
}

function next() {
    currentIndex = (currentIndex + 1) % imageBar.children.length;
    imagesContainer.style.transform = `translateX(-${currentIndex * imageWidth}px)`;
    updateImageBar();
}

function prev() {
    currentIndex =
        currentIndex === 0 ? imageBar.children.length - 1 : currentIndex - 1;
    imagesContainer.style.transform = `translateX(-${currentIndex * imageWidth}px)`;
    updateImageBar();
}

function updateImageBar() {
    const elements = imageBar.children;
    for (let i = 0; i < elements.length; i++) {
        elements[i].classList.toggle('active-img-bar', i === currentIndex);
    }
}

let carouselInterval;
function moveCarousel() {
    if (carouselInterval) clearInterval(carouselInterval);
    carouselInterval = setInterval(() => next(), 5000);
}

export { initCarousel, moveCarousel, next, prev };
