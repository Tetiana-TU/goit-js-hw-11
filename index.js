import{i as n}from"./assets/vendor-17o45ynk.js";(function(){const l=document.createElement("link").relList;if(l&&l.supports&&l.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const o of t.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&a(o)}).observe(document,{childList:!0,subtree:!0});function s(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function a(e){if(e.ep)return;e.ep=!0;const t=s(e);fetch(e.href,t)}})();const u=r=>`<li class="gallery-card">
            <article class="card">
            <a class="gallery-link" href="${r.largeImageURL}" target="_blank" rel="noopener noreferrer">
              <img class="gallery-img" src="${r.webformatURL}" alt="${r.tags}" />
            </a>
            <div class="gallery-container">
              <div class="gallery-item">
                <p class="gallery-title">Likes</p>
                <p class="gallery-count">${r.likes}</p>
              </div>
              <div class="gallery-item">
                <p class="gallery-title">Views</p>
                <p class="gallery-count">${r.views}</p>
              </div>
              <div class="gallery-item">
                <p class="gallery-title">Comments</p>
                <p class="gallery-count">${r.comments}</p>
              </div>
              <div class="gallery-item">
                <p class="gallery-title">Downloads</p>
                <p class="gallery-count">${r.downloads}</p>
              </div>
            </div>
          </article>
        </li>`,d=r=>{const l=new URLSearchParams({q:r,key:"48265594-3edacf02e8cadda91195713cc",image_type:"photo",orientation:"horizontal",safesearch:"true"});return fetch(`https://pixabay.com/api/?${l}`).then(s=>{if(!s.ok)throw new Error(s.status);return s.json()})},i=document.querySelector(".js-search-form"),c=document.querySelector(".js-gallery"),y=r=>{r.preventDefault();const l=r.currentTarget.elements.user_query.value.trim();if(l===""){alert("Поле має бути заповнено!");return}d(l).then(s=>{if(s.total===0){n.error({message:'"Sorry, there are no images matching your search query. Please try again!"',position:"topRight"}),c.innerHTML="",i.reset();return}const a=s.hits.map(e=>u(e)).join("");c.innerHTML=a}).catch(s=>{console.log(s)})};i.addEventListener("submit",y);
//# sourceMappingURL=index.js.map
