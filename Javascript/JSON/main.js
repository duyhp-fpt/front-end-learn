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
// var postsAPI = 'http://localhost:3000/courses';

// fetch(postsAPI)
//     .then((response)=>{
//         return response.json();
//     })
//     .then((courses)=>{
//         var htmls = courses.map((course)=>{
//             return `<li class='item'>
//             <h1>${course.name}</h1>
//             <p class='item-paragraph'>${course.description}</p>
//             </li>`
//         })
//         console.log(htmls);
//         var html = htmls.join('');
//         document.getElementById('list-item').innerHTML = html;
//     })
//     .catch((error)=>{
//         console.log(error);
//     })

// Fake API

// Link API
var postsAPI = "http://localhost:3000/courses";

function start() {
  // Get list course
  // getCourses((courses)=>{
  //     console.log(courses);
  //     renderCourse(courses);
  // });
  getCourses(renderCourse);
  handleCreateForm();
  handleUpdateCourse();
}
// start web
start();

function getCourses(callback) {
  fetch(postsAPI)
    .then((response) => {
      return response.json();
    })
    .then(callback)
    .catch((error) => {
      console.log(error);
    });
}

function renderCourse(courses) {
  var listCoursesBlock = document.querySelector("#list-item");
  var htmls = courses.map((course) => {
    return `<li class='item course-item-${course.id}'>
                <div class = "row">
                    <div>
                        <div class="row">
                        <h1>ID: ${course.id} - </h1>
                        <h1> ${course.name}</h1>
                    </div>
                    <p class='item-paragraph'>${course.description}</p>
                    </div>
                <button class="btn btn-delete" onclick=handleDeleteCourse(${course.id})>Xoá</button>
                </div>
            </li>`;
  });
  var html = htmls.join("");
  listCoursesBlock.innerHTML = html;
}

function handleCreateForm() {
  var createBtn = document.querySelector("#btn-create");

  createBtn.onclick = () => {
    var name = document.querySelector('input[name="name"]').value;
    var description = document.querySelector('input[name="description"]').value;

    var formData = {
      name: name,
      description: description,
    };
    createCourse(formData, () => {
      getCourses(renderCourse);
    });
  };
}

function createCourse(data, callback) {
  var options = {
    method: "POST",
    body: JSON.stringify(data),
    headers: {
      "Content-Type": "application/json",
    },
  };
  fetch(postsAPI, options)
    .then((response) => {
      response.json();
    })
    .then(callback)
    .catch((error) => {
      console.log(error);
    });
}

function handleDeleteCourse(idCourse) {
  var options = {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
  };
  fetch(postsAPI + "/" + idCourse, options)
    .then((response) => {
      response.json();
    })
    .then(() => {
      var courseItem = document.querySelector(".course-item-" + idCourse);
      if (courseItem) {
        courseItem.remove();
      }
    })
    .catch((error) => {
      console.log(error);
    });
}

function handleUpdateCourse() {
  var updateBtn = document.querySelector("#btn-update");
  updateBtn.onclick = () => {
    var id = document.querySelector('input[name="id-update"]').value;
    var name = document.querySelector('input[name="new-name"]').value;
    var description = document.querySelector(
      'input[name="new-description"]'
    ).value;
    console.log(id, name, description);

    var formData = {
      name: name,
      description: description,
    };
    updateCourse(id, formData, () => {
      getCourses(renderCourse);
    });
  };
}

function updateCourse(id, dataUpdate) {
  var options = {
    method: "PUT",
    body: JSON.stringify(dataUpdate),
    headers: {
      "Content-Type": "application/json",
    },
  };
  fetch(postsAPI + "/" + id, options)
    .then((response) => {
      response.json();
    })
    .then(callback)
    .catch((error) => {
      console.log(error);
    });
}
