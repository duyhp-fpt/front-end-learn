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