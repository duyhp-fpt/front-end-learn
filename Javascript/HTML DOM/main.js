// DOM Element

// var headingNode = document.getElementById('heading')
// console.log({element: headingNode});

// var headingNodes = document.getElementsByClassName('heading-class');
// console.log(headingNodes);

// var headingNodes = document.getElementsByTagName('h1');
// console.log(headingNodes);

//  var heading = document.querySelector('.heading')
//  var headAll = document.querySelectorAll('h1')
//  console.log(heading);
//  console.log(headAll);
// ==========================================

// DOM Attributes

// var headingElement = document.querySelector('h1');

// headingElement.title = 'DOM Attribute'
// headingElement.className = 'DOM Attribute'
// headingElement.setAttribute('test','DOM Attribute')
// console.log(headingElement.getAttribute('test'));
// ==========================================

// InnerText : lấy text trên trình duyệt
// contentText: lấy text thực có trong HTML DOM
// var headingElement = document.querySelector('.heading');

// console.log('=== before change ===');

// console.log(headingElement.innerText);
// console.log(headingElement.textContent);

// console.log('=== after change ===');
// headingElement.innerText = 'New heading';

// console.log(headingElement.innerText);
// console.log(headingElement.textContent);

// var text = document.querySelector('.text')
// console.log(text.innerText);
// console.log(text.textContent);

// InnerHTML and outerHTML

// var box = document.querySelector('.box');
// box.innerHTML = '<h1>Heading</h1>'

// var courses = ['HTML & CSS', 'Javascript', 'PHP', 'Java']

// function render(courses) {
//     var courseList = document.querySelector('.courses-list');
//     courseList.innerHTML = courses.map((course) => {
//         return `<li>${course}</li>`;
//     }).join('');
// }
// render(courses);

// DOM Events

// onclick
// var h1Elements = document.querySelectorAll('h1');
// h1Elements.forEach((h1Element)=>{
//     h1Element.onclick = (e) =>{
//         console.log(e.target);
//     }
// })

// onchange
// var inputElement = document.querySelector('input[type="text"]');
// inputElement.onchange = (e) => {
//     console.log(e.target.value);
// }

// oninput
// var inputElement = document.querySelector('input[type="text"]');
// inputElement.oninput = (e) => {
//     console.log(e.target.value);
// }

// Key up / down
// var inputElement = document.querySelector('input[type="text"]');
// inputElement.onkeyup = (e) => {
//   console.log(e.target.value);
// };

// Lắng nghe sự kiện từ bàn phím
// document.onkeypress = (e) => {
//     switch(e.which) {
//         case 27: 
//             console.log('EXIT');
//             break;
//         case 13: 
//             console.log('SEND CHAT');
//             break;
//     }
// }


// preventDefault : ngăn chặn hành vi mặt định
// var aElements = document.links;
// for (var i = 0 ; i< aElements.length; ++i){
//     aElements[i].onclick = function(e) {
//         if(e.target.href.startsWith('https://fullstack.edu.vn/')){
//             e.preventDefault();
//         }
//     }
// }

// var ulElement = document.querySelector('ul');

// ulElement.onmousedown = function(e) {
//     e.preventDefault();
// }

// ulElement.onclick = function (e) {
//     console.log(e.target)
// }

// stopPropagation: ngăn hiện tượng nổi bọt