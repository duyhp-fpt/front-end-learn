// var courses = [
//     {
//         id: 1,
//         name: 'Java',
//         coin: 1
//     },
//     {
//         id: 2,
//         name: 'Javascript',
//         coin: 1
//     },
//     {
//         id: 3,
//         name: 'PHP',
//         coin: 1
//     },
//     {
//         id: 4,
//         name: 'Python',
//         coin: 1
//     },
//     {
//         id: 5,
//         name: 'ReactJS',
//         coin: 1
//     },
//     {
//         id: 6,
//         name: 'AngularJS',
//         coin: 1
//     }
// ];


// var totalCoin = courses.reduce(function(total,courses){
//     return total += courses.coin;
// },0);
// console.log(totalCoin);


// var watchList = [
//     {
//       "Title": "Inception",
//       "Year": "2010",
//       "Rated": "PG-13",
//       "Released": "16 Jul 2010",
//       "Runtime": "148 min",
//       "Genre": "Action, Adventure, Crime",
//       "Director": "Christopher Nolan",
//       "Writer": "Christopher Nolan",
//       "Actors": "Leonardo DiCaprio, Joseph Gordon-Levitt, Elliot Page, Tom Hardy",
//       "Plot": "A thief, who steals corporate secrets through use of dream-sharing technology, is given the inverse task of planting an idea into the mind of a CEO.",
//       "Language": "English, Japanese, French",
//       "Country": "USA, UK",
//       "imdbRating": "8.8",
//       "imdbVotes": "1,446,708",
//       "imdbID": "tt1375666",
//       "Type": "movie",
//     },
//     {
//       "Title": "Interstellar",
//       "Year": "2014",
//       "Rated": "PG-13",
//       "Released": "07 Nov 2014",
//       "Runtime": "169 min",
//       "Genre": "Adventure, Drama, Sci-Fi",
//       "Director": "Christopher Nolan",
//       "Writer": "Jonathan Nolan, Christopher Nolan",
//       "Actors": "Ellen Burstyn, Matthew McConaughey, Mackenzie Foy, John Lithgow",
//       "Plot": "A team of explorers travel through a wormhole in space in an attempt to ensure humanity's survival.",
//       "Language": "English",
//       "Country": "USA, UK",
//       "imdbRating": "8.6",
//       "imdbVotes": "910,366",
//       "imdbID": "tt0816692",
//       "Type": "movie",
//     },
//     {
//       "Title": "The Dark Knight",
//       "Year": "2008",
//       "Rated": "PG-13",
//       "Released": "18 Jul 2008",
//       "Runtime": "152 min",
//       "Genre": "Action, Adventure, Crime",
//       "Director": "Christopher Nolan",
//       "Writer": "Jonathan Nolan (screenplay), Christopher Nolan (screenplay), Christopher Nolan (story), David S. Goyer (story), Bob Kane (characters)",
//       "Actors": "Christian Bale, Heath Ledger, Aaron Eckhart, Michael Caine",
//       "Plot": "When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, the caped crusader must come to terms with one of the greatest psychological tests of his ability to fight injustice.",
//       "Language": "English, Mandarin",
//       "Country": "USA, UK",
//       "imdbRating": "9.0",
//       "imdbVotes": "1,652,832",
//       "imdbID": "tt0468569",
//       "Type": "movie",
//     },
//     {
//       "Title": "Batman Begins",
//       "Year": "2005",
//       "Rated": "PG-13",
//       "Released": "15 Jun 2005",
//       "Runtime": "140 min",
//       "Genre": "Action, Adventure",
//       "Director": "Christopher Nolan",
//       "Writer": "Bob Kane (characters), David S. Goyer (story), Christopher Nolan (screenplay), David S. Goyer (screenplay)",
//       "Actors": "Christian Bale, Michael Caine, Liam Neeson, Katie Holmes",
//       "Plot": "After training with his mentor, Batman begins his fight to free crime-ridden Gotham City from the corruption that Scarecrow and the League of Shadows have cast upon it.",
//       "Language": "English, Urdu, Mandarin",
//       "Country": "USA, UK",
//       "imdbRating": "8.3",
//       "imdbVotes": "972,584",
//       "imdbID": "tt0372784",
//       "Type": "movie",
//     },
//     {
//       "Title": "Avatar",
//       "Year": "2009",
//       "Rated": "PG-13",
//       "Released": "18 Dec 2009",
//       "Runtime": "162 min",
//       "Genre": "Action, Adventure, Fantasy",
//       "Director": "James Cameron",
//       "Writer": "James Cameron",
//       "Actors": "Sam Worthington, Zoe Saldana, Sigourney Weaver, Stephen Lang",
//       "Plot": "A paraplegic marine dispatched to the moon Pandora on a unique mission becomes torn between following his orders and protecting the world he feels is his home.",
//       "Language": "English, Spanish",
//       "Country": "USA, UK",
//       "imdbRating": "7.9",
//       "imdbVotes": "876,575",
//       "imdbID": "tt0499549",
//       "Type": "movie",
//     }
//   ];
  
  
//   function getListFilm(directorName, watchList){
//     var listFilms = watchList.filter(
//         watchList => watchList.Director === directorName
//     );
//     return listFilms;
//   }

//   function calculateRating(watchList){
//     var listFilms = getListFilm('Christopher Nolan', watchList);
//     var totalRating = listFilms.reduce((imdb, listFilms)=>
//          imdb += parseFloat(listFilms.imdbRating)
//     ,0);
//     console.log(totalRating);
//     return totalRating / listFilms.length;
//   }
//   console.log(calculateRating(watchList));


// var arr = [
//     ['name', 'Sơn Đặng'],
//     ['age', 18],
// ];

// function arrToObj(arr){
//     return arr.reduce((arr,[key,value])=> {
//         arr[key] = value;
//         return arr;
//     },{})
// }
// console.log(arrToObj(arr)); 

// var title = "Responsive web design";
// var title = ['Responsive web design','Ruby','Javascript'];

// console.log(title.includes('Responsive web design',0));


// Map()
// Array.prototype.map2 = function(callback){
//     var array = [], arrayLength = this.length;
//     for (var i = 0; i < arrayLength; i++){
//         var result = callback(this[i],i);
//         array.push(result);
//     }
//     return array;
// }

// var courses = ['Javascript','Java','Ruby'];

// var learn = courses.map2(function(course) {
//     return `<h2>${course}<h2>`;
// });
// console.log(learn);


// forEach()

// Array.prototype.forEach2 = function(callback){
//     for(var index in this){
//         if(this.hasOwnProperty(index)){
//             callback(this[index], index, this);
//         }
//     }
// }


// var courses = ['Javascript','Java','Ruby'];

// courses.forEach2(function(course, index , courses){
//     console.log(course, index , courses);
// })


// Filter
// Array.prototype.forEach2 = function(callback){
//     for(var index in this){
//         if(this.hasOwnProperty(index)){
//             callback(this[index], index, this);
//         }
//     }
// }


// var courses = [
//         {
//             id: 1,
//             name: 'Java',
//             coin: 1,
//             isFinish: true
//         },
//         {
//             id: 2,
//             name: 'Javascript',
//             coin: 2,
//             isFinish: true
//         },
//         {
//             id: 3,
//             name: 'PHP',
//             coin: 3,
//             isFinish: true
//         },
//         {
//             id: 4,
//             name: 'Python',
//             coin: 4,
//             isFinish: false
//         },
//         {
//             id: 5,
//             name: 'ReactJS',
//             coin: 1,
//             isFinish: true
//         },
//         {
//             id: 6,
//             name: 'AngularJS',
//             coin: 1,
//             isFinish: false
//         }
//     ];

// Array.prototype.filter2= function(callback){
//     var array = [];
//     for (var index in this) {
//         if(this.hasOwnProperty(index)){
//             var result = callback(this[index],index, this);
//             if(result) {
//                 array.push(this[index]);
//             }
//         }
//     }
//     return array;
// }

// var filter = courses.filter2(function(course){
//     return course.coin > 2;
// })
// console.log(filter);

// Some

// Array.prototype.some2= function(callback){
//         var boolean = false ;
//         for (var index in this) {
//             if(this.hasOwnProperty(index)){
//                 var result = callback(this[index],index, this);
//                 if(result) {
//                     return true;
//                 }
//             }
//         }
//         return boolean;
//     }
// var some = courses.some2(function(course, index, array){
//     return course, index, array;
// });

// console.log(some);

// Every
// Array.prototype.every2= function(callback){
//             var boolean = true ;
//             for (var index in this) {
//                 if(this.hasOwnProperty(index)){
//                     var result = callback(this[index],index, this);
//                     if(!result) {
//                         return false;
//                     }
//                 }
//             }
//             return boolean;
//         }
//     var some = courses.every2(function(course, index, array){
//         return course.isFinish;
//     });
    
//     console.log(some);
