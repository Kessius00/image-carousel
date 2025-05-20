# Image Carousel Component

A lightweight, customizable, and responsive image carousel component built with JavaScript and SCSS. Perfect for simple slideshows, galleries, or any dynamic content needing timed transitions and user interaction.

## 🚀 Features

- Auto-sliding every 5 seconds (customizable)
- Manual navigation with previous/next buttons
- Visual image bar with interactive indicators
- Clean and flexible SCSS styling
- Fully embeddable into any layout

## 📦 Installation

You can install the package from npm:

```bash
npm install @kessius00/image-carousel
```

````

## Importing the module

```js
import {
  initCarousel,
  moveCarousel,
  next,
  prev,
} from "@kessius00/image-carousel";
import "@kessius00/image-carousel/styles.scss";
```

## Creating a carousel

```html
<div class="container">
  <button id="prevBtn">&#10094;</button>
  <div class="carousel-images">
    <img src="img1.jpg" class="carousel-image active" />
    <img src="img2.jpg" class="carousel-image" />
    <img src="img3.jpg" class="carousel-image" />
    <!-- Add more images as needed -->
  </div>
  <button id="nextBtn">&#10095;</button>
</div>

<div class="image-bar">
  <div class="image-bar-element active-img-bar"></div>
  <div class="image-bar-element"></div>
  <div class="image-bar-element"></div>
</div>
```

Then initialize it with:

```js
document.getElementById("prevBtn").addEventListener("click", prev);
document.getElementById("nextBtn").addEventListener("click", next);
moveCarousel(); // Starts auto movement
```

## 🛠 Customization

You can override the default styles using your own SCSS or CSS. The following class names are used:

- `.container` — Main wrapper for the carousel
- `.carousel-image` — Individual images in the slider
- `.image-bar` — The row of clickable indicator dots
- `.image-bar-element` — One dot for each image
- `.active-img-bar` — Applied to the currently active dot
- `button` — Navigation buttons (`<`, `>`) on the sides
````
