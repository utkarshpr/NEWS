`use strict`;
//logo click ---> home page
let logo = document.getElementById('logo');
logo.addEventListener('click', redirect_homepg);
function redirect_homepg() {
  windows.location.replace('project3.html');
}

//news page redirect
let newsbtn = document.getElementById('newsbtn');
newsbtn.addEventListener('click', news_function);
function news_function() {
  window.location.replace('news_pg.html');
}

//contact page
let contact = document.getElementById('contactbtn');
contact.addEventListener('click', redirect_contact_page);
function redirect_contact_page() {
  window.location.replace('contact_pg.html');
}
