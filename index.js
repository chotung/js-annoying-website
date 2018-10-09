var last_known_scroll_position = 0;
window.addEventListener('scroll', function(event) {
  console.log(window);
  console.log(window.scrollY);
});

// When the page loads,
document.addEventListener('DOMContentLoaded', function() {
  // find the articles el in the DOM
  const articlesEl = document.getElementById('articles');
  const closeModalEl = document.querySelector('#close-modal');
  const modalEl = document.getElementById('modal');

  // make a GET request to the `/articles/1` endpoint and
  // NOTE: we can make articles URL constant in future
  fetch('http://localhost:3000/articles/1')
    .then((res) => res.json())
    .then((article) => renderArticle(articlesEl, article));

  document.body.addEventListener('mouseout', (event) =>
    handleMouseOut(event, modalEl)
  ); // (event) => handleMouseOut(event, modalEl)
  closeModalEl.addEventListener('click', (event) =>
    handleCloseModalClick(event, modalEl)
  ); // (event) => handleCloseModalClick(event, modalEl)
  document.body.addEventListener('keydown', (event) =>
    handleKeyDown(event, modalEl)
  ); // (event) => handleKeyDown(event, modalEl)
});

function renderArticle(articlesEl, article) {
  const articleTemplate = `
        <article id="${article.id}">
          <h3>${article.author}</h3>
          ${article.text}
        </article>
      `;

  articlesEl.innerHTML += articleTemplate;

  // const articleEl = document.createElement('article');
  // articleEl.id = article.id;
  // const articleElH3 = document.createElement('h3');
  // articleElH3.innerText = article.author;
  // articleEl.append(articleElH3);
  // articlesEl.append(articleEl);
}

function handleMouseOut(event, modalEl) {
  // When a user tries to leave the page,
  if (event.y < 0) {
    // display a signup form to get them to sign up to your site's newsletter!
    modalEl.classList.add('dog');
  }
}

function handleCloseModalClick(event, modalEl) {
  modalEl.classList.remove('dog');
}

function handleKeyDown(event, modalEl) {
  if (event.key === 'Escape') {
    modalEl.classList.remove('dog');
  }
}
