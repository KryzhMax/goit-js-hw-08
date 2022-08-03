// Add imports above this line
import { galleryItems } from './gallery-items';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

console.log(galleryItems);

// Refs
const galleryRef = document.querySelector('.gallery');
const markup = galleryItems
  .map(({ original, preview, description }) => {
    return `<li><a class="gallery__item" href=${original}>
  <img class="gallery__image" src="${preview}" alt="${description}" />
</a> </li>`;
  })
  .join('');
galleryRef.insertAdjacentHTML('beforeend', markup);

let lightbox = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
});
