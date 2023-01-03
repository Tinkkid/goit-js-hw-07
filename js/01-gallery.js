import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

// Створення розмітки на підставі масиву даних galleryItems і наданого шаблону елемента галереї.
function CreateGalleryItemsMarkup() {
  return galleryItems
    .map(({ preview, original, description }) => {
      return ` <div class="gallery__item"><a class="gallery__link" href="${original}">
<img class="gallery__image" src="${preview}" data-source="${original}" alt="${description}"/></a></div>`;
    })
    .join('');
}

// Рендеремо розмітку галерії

const galleryContainer = document.querySelector('.gallery');
const galleryItemsMarkup = CreateGalleryItemsMarkup(galleryItems);

galleryContainer.insertAdjacentHTML('beforeend', galleryItemsMarkup);

// Реалізація делегування на div.gallery і отримання url великого зображення (використання бібліотеки ligthbox).

galleryContainer.addEventListener('click', onClickItem);

function onClickItem(e) {
  e.preventDefault();
  const isPictureItem = e.target.classList.contains('gallery__image');
  if (!isPictureItem) {
    return;
  }

  // Ініціалізація бібліотеку SimpleLightbox
   
  const originalImage = basicLightbox.create(`
        <img src="${e.target.dataset.source}" alt="${e.target.alt}" width="800" height="600"/>
`);
   originalImage.show();
   
   // Закриття модального вікна кнопкою Escape

  document.addEventListener('keydown', function ({ code }) {
    if (code === 'Escape') originalImage.close();
  });
};


