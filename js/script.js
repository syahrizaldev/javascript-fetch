// Fetch Example 1 using Local Data
const btnTexts = document.getElementById('getTexts');
const showTexts = document.getElementById('showTexts');

btnTexts.addEventListener('click', function () {
   getTexts();
});

// Basic Function
// function getTexts() {
//    fetch('../data/texts.txt')
//       .then(function (response) {
//          return response.text();
//       })
//       .then(function (data) {
//          console.log(data);
//          showTexts.innerHTML = data;
//       })
//       .catch(function (error) {
//          console.log(error);
//       });
// }

// Arrow Function
function getTexts() {
   fetch('../data/texts.txt')
      .then((response) => response.text())
      .then((data) => {
         console.log(data);
         showTexts.innerHTML = data;
      })
      .catch((error) => console.log(error));
}

// Fetch Example 2 using Local Data
const btnUsers = document.getElementById('getUsers');
const showUsers = document.getElementById('showUsers');

btnUsers.addEventListener('click', () => {
   getUsers();
});

function getUsers() {
   fetch('../data/users.json')
      .then((response) => response.json())
      .then((data) => {
         console.log(data);
         let output = '<h1 class="title title-larges">Get Users Data</h1>';

         data.forEach(function (user) {
            output += `
               <ul style="margin:0.5rem 0;">
                  <li>Id: ${user.id}</li>
                  <li>Name: ${user.name}</li>
                  <li>Email: ${user.email}</li>
                  <li>Address: ${user.address}</li>
               </ul>
            `;
         });

         showUsers.innerHTML = output;
      })
      .catch((error) => console.log(error));
}

// Fetch Example 3 using API Data
const btnPosts = document.getElementById('getPosts');
const showPosts = document.getElementById('showPosts');

btnPosts.addEventListener('click', () => {
   getPosts();
});

function getPosts() {
   fetch('https://jsonplaceholder.typicode.com/posts')
      .then((response) => response.json())
      .then((data) => {
         console.log(data);
         let output = '<h1 class="title title-larges">Get Posts Data</h1>';

         data.forEach(function (post) {
            output += `
               <div class="article">
                  <h2 class="title title-medium">${post.title}</h2>
                  <p class="paragraph">${post.body}</p>
               </div>
            `;
         });

         showPosts.innerHTML = output;
      })
      .catch((error) => console.log(error));
}

// Fetch Example 4 using API Data
const btnComments = document.getElementById('getComments');
const showComments = document.getElementById('showComments');

btnComments.addEventListener('click', () => {
   getComments();
});

function getComments() {
   fetch('https://jsonplaceholder.typicode.com/comments')
      .then((response) => response.json())
      .then((data) => {
         console.log(data);
         let output = '<h1 class="title title-larges">Get Comments Data</h1>';

         data.forEach(function (comment) {
            output += `
               <div class="article">
                  <p>Id: ${comment.id}</p>
                  <p>Name: ${comment.name}</p>
                  <p>Email: ${comment.email}</p>
                  <p class="paragraph">Comment:</p>
                  <p>${comment.body}</p>
               </div>
            `;
         });

         showComments.innerHTML = output;
      })
      .catch((error) => console.log(error));
}

// Fetch Example 5 using API Data
const addPosts = document.getElementById('addPosts');

addPosts.addEventListener('submit', (e) => {
   e.preventDefault();

   let title = document.getElementById('title').value;
   let bodies = document.getElementById('body').value;

   fetch('https://jsonplaceholder.typicode.com/posts', {
      method: 'POST',
      body: JSON.stringify({
         title: title,
         body: bodies,
      }),
      headers: {
         'Content-type': 'application/json; charset=UTF-8',
      },
   })
      .then((response) => response.json())
      .then((data) => {
         console.log(data);
      })
      .catch((error) => console.log(error));
});

// Fetch Example 6 using API Data
const btnPhotos = document.getElementById('getPhotos');
const showPhotos = document.getElementById('showPhotos');

btnPhotos.addEventListener('click', () => {
   getPhotos();
});

function getPhotos() {
   fetch('https://jsonplaceholder.typicode.com/photos')
      .then((response) => response.json())
      .then((data) => {
         console.log(data);
         let output = '<h1 class="title title-larges">Get Photos Data</h1>';

         data.forEach(function (photo) {
            output += `
               <div class="article">
                  <img src="${photo.url}" class="responsive" loading="lazy" alt="">
                  <h3 class="title title-normal">${photo.title}</h3>
               </div>
            `;
         });

         showPhotos.innerHTML = output;
      })
      .catch((error) => console.log(error));
}
