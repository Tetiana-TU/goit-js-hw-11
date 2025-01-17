export const fetchPhotosByQuery = searchedQuery => {
    const searchParams = new URLSearchParams({
      q: searchedQuery,
      key: '48265594-3edacf02e8cadda91195713cc',
      image_type: 'photo',
      orientation: 'horizontal',
      safesearch: 'true',
    });
  
    return fetch(`https://pixabay.com/api/?${searchParams}`).then(response => {
      if (!response.ok) {
        throw new Error(response.status);
      }
  
      return response.json();
    });
  };
  

  
    