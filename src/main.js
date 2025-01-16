import iziToast from 'izitoast';
import SimpleLightbox from 'simplelightbox';
import 'izitoast/dist/css/iziToast.min.css';
import 'simplelightbox/dist/simple-lightbox.min.css';

const searchFormEl = document.querySelector('.js-search-form');
const galleryEl = document.querySelector('.js-gallery');

const createGalleryCardTemplate = imgInfo => {
  return `<li class="gallery-card">
   <img class="gallery-img"src="${imgInfo.webformatURL}" alt="${imgInfo.tags}"/>
    </li>`;
};

const onSearchFormSubmit = event => {
  event.preventDefault();
  const searchedQuery = event.currentTarget.elements.user_query.value;

  fetch(
    `https://pixabay.com/api/?key=48265594-3edacf02e8cadda91195713cc&q=${searchedQuery}&image_type=photo&orientation=horizontal&safesearch=true`
  )
    .then(response => {
      if (!response.ok) {
        throw new Error(response.status);
      }
      return response.json();
    })
    .then(data => {
      if (data.total === 0) {
        iziToast.error({
          message:
            '"Sorry, there are no images matching your search query. Please try again!"',
          position: 'topRight',
        });

        galleryEl.innerHTML = '';
        searchFormEl.reset();
        return;
      }
      const galleryTemplate = data.hits
        .map(el => createGalleryCardTemplate(el))
        .join('');
      galleryEl.innerHTML = galleryTemplate;
    })
    .catch(err => {
      console.log(err);
    });
};
searchFormEl.addEventListener('submit', onSearchFormSubmit);
