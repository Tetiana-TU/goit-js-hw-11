import{i as n,S as d}from"./assets/vendor-5ObWk2rO.js";(function(){const a=document.createElement("link").relList;if(a&&a.supports&&a.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))l(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const o of t.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&l(o)}).observe(document,{childList:!0,subtree:!0});function s(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function l(e){if(e.ep)return;e.ep=!0;const t=s(e);fetch(e.href,t)}})();const y=r=>`<li class="gallery-card">
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
        </li>`,p=r=>{const a=new URLSearchParams({q:r,key:"48265594-3edacf02e8cadda91195713cc",image_type:"photo",orientation:"horizontal",safesearch:"true"});return fetch(`https://pixabay.com/api/?${a}`).then(s=>{if(!s.ok)throw new Error(s.status);return s.json()})},c=document.querySelector(".js-search-form"),u=document.querySelector(".js-gallery"),i=document.querySelector(".loader"),m=r=>{r.preventDefault();const a=r.currentTarget.elements.user_query.value.trim();if(a===""){n.error({message:"Please enter your request",position:"topRight"});return}i.classList.remove("is-hidden"),p(a).then(s=>{if(s.total===0){n.error({message:'"Sorry, there are no images matching your search query. Please try again!"',position:"topRight"}),u.innerHTML="",c.reset();return}const l=s.hits.map(t=>y(t)).join("");u.innerHTML=l,i.classList.add("is-hidden"),new d(".js-gallery a",{captionDelay:300,captionsData:"alt"}).refresh()}).catch(s=>{i.style.display="none",console.log(s)}),c.reset()};c.addEventListener("submit",m);
//# sourceMappingURL=index.js.map
