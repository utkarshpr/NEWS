`use strict`;

//buttton action of nav bar
let newsbtn = document.getElementById('homebtn');
newsbtn.addEventListener('click', news_function);
function news_function() {
  window.location.replace('project3.html');
}
let logo = document.getElementById('logo');
logo.addEventListener('click', news_function);
//

//a6f30bf16cc241dda6f2810d1c019a02
let new_group = document.getElementById('new_group');
//create a get request
const xhr = new XMLHttpRequest();
let source = 'bbc-news';
xhr.open(
  'GET',
  'https://gnews.io/api/v4/top-headlines?lang=en&country=us&token=5715f6772710bd3964536456a5c47e12',
  true
);
//xhr.getResponseHeader('Content-type','application/json');
xhr.onload = function () {
  if (this.status === 200) {
    let json = JSON.parse(this.responseText);
    console.log(json);
    let article = json.articles;
    let newsHtml = '';
    article.forEach(function (element, index) {
      let news = `  <div class="card" >
<img src="${article[index].image}" class="card-img-top" alt="..."  />
<div class="card-body">
  <h5 class="card-title">${article[index].title}</h5>
  <p class="card-text">
  ${article[index].description}
  </p>
  <a href="${article[index].url}" class="btn btn-primary" target="_blank">Click for Details !</a>
</div>
</div>
`;
      newsHtml += news;
    });
    new_group.innerHTML = newsHtml;
  } else {
    console.log('Some error');
  }
};
xhr.send();
