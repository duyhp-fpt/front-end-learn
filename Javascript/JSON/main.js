// Promise

// var promise = new Promise(
//     // Executor
//     function(resolve, reject) {
//     // Logic
//     // Thành công: resolve()
//     // Thất bại: reject()
//     // reject();
//     resolve();
// })

// promise
//     // sau đó được thực thi
//     .then(function () {
//         console.log('Successfully');
//         return 1;
//     })
//     .then(function (data) {
//         console.log('Successfully 2' + data);
//         return 2;
//     })
//     .then(function (data) {
//         console.log('Successfully 3' + data);
//     })
//     // khi bị từ chối
//     .catch(function () {
//         console.log('Failure');
//     })
//     //
//     .finally(function () {
//         console.log('Finally');
//     })

// Promise alway true or flase
// var promise = Promise.resolve('Successfully');
// promise
//     .then(()=>{
//         console.log('result');
//     })
//     .catch(()=>{
//         console.log('error');
//     })

// Promise All
// var promise1 = new Promise((resolve)=>{
//     setTimeout(() => {
//         resolve([1]);
//     }, 2000);
// })
// var promise2 = new Promise((resolve)=>{
//     setTimeout(() => {
//         resolve([2,3]);
//     }, 5000);
// })
// Promise.all([promise1,promise2])
//     .then((result)=>{
//         var resultAll = result[0].concat(result[1])
//         console.log(resultAll);
//     })

// Fake data
// var users = [
//   {
//     id: 1,
//     name: "User 1",
//   },
//   {
//     id: 2,
//     name: "User 2",
//   },
//   {
//     id: 3,
//     name: "User 3",
//   },
// ];

// var comments = [
//   {
//     id: 1,
//     content: "Content 1",
//     user_id: 1,
//   },
//   {
//     id: 2,
//     content: "Content 2",
//     user_id: 2,
//   },
//   {
//     id: 3,
//     content: "Content 3",
//     user_id: 1,
//   },
// ];

// 1. Lấy comment
// 2. Từ comment lấy ra user_id
// ==> lấy ra user tương ứng

// Fake API

// function getComments() {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       resolve(comments);
//     }, 1000);
//   });
// }

// function getUsersByIds(userIds) {
//   return new Promise((resolve) => {
//     var result = users.filter((user) => {
//       return userIds.includes(user.id);
//     });
//     setTimeout(() => {
//       resolve(result);
//     }, 1000);
//   }, 1000);
// }

// getComments()
//   .then((comments) => {
//     var userIds = comments.map((comments) => {
//       return comments.user_id;
//     });
//     return getUsersByIds(userIds)
//         .then((users) => {
//             return {
//                 users: users,
//                 comments: comments,
//             }
//     });
//   })
//   .then((data) => {
//     console.log(data);
//     var commentBlock = document.getElementById('comment-blocks');
//     var html = '';
//     data.comments.forEach((comment)=>{
//         var user = data.users.find((user)=>{
//             return user.id === comment.user_id;
//         });
//         html += `<li>${user.name}: ${comment.content}</li>`;
//     });
//     commentBlock.innerHTML = html;
//   });


// Fetch

// var postAPI = 'https://jsonplaceholder.typicode.com/posts';

// fetch(postAPI)
//     .then((response)=>{
//         return response.json();
//     })
//     .then((posts)=>{
//         var htmls = posts.map((post)=>{
//             return `<li>
//                 <h2>${post.title}</h2>
//                 <p>${post.body}</p>
//             </li>`;
//         })
//         console.log(htmls);
//         var html = htmls.join('');
//         document.getElementById('post-block').innerHTML = html;

//     })
//     .catch((error)=>{
//         console.log(error);
//     })

// JSON Server
// Fake API
// var postsAPI = 'http://localhost:3000/courses';
// fetch(postsAPI)
//     .then((response)=>{
//         return response.json();
//     })
//     .then((courses)=>{
//         var htmls = courses.map((course)=>{
//             return `<li>
//             <h1>${course.name}</h1>
//             <p>${course.description}</p>
//             </li>`
//         })
//         console.log(htmls);
//         var html = htmls.join('');
//         document.getElementById('print').innerHTML = html;
//     })
//     .catch((error)=>{
//         console.log(error);
//     })

