// console.log("Welcome to the main module")
// let headingElement = document.querySelector("#main-heading");
// headingElement.innerHTML = "TIME TO PARTY!";

// Exercise 1
// let headingElement = document.querySelector("#hello-container");
// headingElement.innerHTML = "Hello,world";


// ****Pulling it together*****
// let menuItemsArray = ["Chicken tenders", "pizza", "spaghetti", "french fries", "pie"]

// for(let i = 0; i < menuItemsArray.length; i++){
//     // target the menu items container and add a bullet for each item in the array
//     document.querySelector("#menu-items-container").innerHTML += `<li>${menuItemsArray[i]}</li>`
  
//   }

// lighting exercise
// let choresArray = ["dishes","cut grass","sweep","dust"]

// for(let i = 0; i < choresArray.length; i++){
//     document.querySelector("#chores-container").innerHTML += `<li>${choresArray[i]}</li>`
// }

// **************Movie Poster***************
// let movieObject = {
//     title: "Star Wars: A New Hope",
//     genre: "Science Fiction",
//     releaseDate: "May 25, 1977"
//   }

//   document.querySelector("#title").innerHTML += 
//   `<h3>${movieObject.title}</h3>
//   <h3>${movieObject.genre}</h3>
//   <h3>${movieObject.releaseDate}</h3>`

// ***********Downtown Restaurants**********
// let downtownRestaurants = ["Backyard Pizza and Raw Bar", "The Bodega", "Surin of Thailand", "Bahnhof", "Jim's Steak and Spaghetti House", "The Peddler", "Jewel City Seafood Market", "Black Sheep Burritos & Brews", "La Famiglia", "Le Bistro", "Charlie Graingers", "The Cellar Door"];

// for(let i = 0; i < downtownRestaurants.length; i++) {
// document.querySelector("#restaurants-list").innerHTML += `<li>${downtownRestaurants[i]}</li>`
// }

//**********sandwich toppings*****/

// let sandwichToppings = ["pickles", "extra cheese", "lettuce", "tomatoes", "avocado", "bacon", "mayo", "mustard"]

// function toppings(array) {
//     for(let i =0; i < array.length; i++) {
//           document.querySelector("#sandwich-container").innerHTML += `<li>${array[i]}</li>`;
                  
//         }
//     }


// toppings(sandwichToppings)

// ***********movie schedule*********

// let movieSchedule = [
//     {
//       title: "Ralph Breaks the Internet",
//       rating: "PG",
//       currentlyPlaying: true,
//       poster: "https://lumiere-a.akamaihd.net/v1/images/r_ralphbreakstheinternet_header_ddt-17403_08ef6d92.jpeg?region=0,0,1024,1274&optimize=true"
//     }, 
//     {
//       title: "The Grinch",
//       rating: "G",
//       currentlyPlaying: true,
//       poster: "https://images-na.ssl-images-amazon.com/images/I/71vgX4VFdiL._SY679_.jpg"
//     },
//     {
//       title: "A Star is Born",
//       rating: "R",
//       currentlyPlaying: false,
//       poster: "https://images-na.ssl-images-amazon.com/images/I/718zWbDKmvL._SY606_.jpg"
//     },
//      {
//       title: "Bohemian Rhapsody",
//       rating: "PG-13",
//       currentlyPlaying: true
//     },
//     {
//       title: "Fantastic Beasts: The Crimes of Grindlewald",
//       rating: "PG-13",
//       currentlyPlaying: true,
//       poster: "https://images-na.ssl-images-amazon.com/images/I/716fk%2BBZ-NL._SY606_.jpg"
//     },
//     {
//       title: "Robin Hood",
//       rating: "PG-13",
//       currentlyPlaying: false,
//       poster: "https://images-na.ssl-images-amazon.com/images/I/61K%2BTyGjsCL.jpg"
//     },
//     {
//       title: "Spider-Man: Into the Spider-Verse",
//       rating: "PG-13",
//       currentlyPlaying: true,
//     }
//   ]

 
//      for(let i =0; i < movieSchedule.length; i++) {
//     document.querySelector("#movie-schedule").innerHTML += 
//    `<li>${movieSchedule[i].title}</li>
//    <li>${movieSchedule[i].rating}</li>
//    <li>${movieSchedule[i].currentlyPlaying}</li>
//    <img src="${movieSchedule[i].poster}">`

//      }
    

// // Pets

// let pets = [
//     {
//         species: "Dog",
//         breed: "Chihuaha",
//         name: "Lil Wayne",
//         age: 4
//     },
//     {
//         species: "Cat",
//         breed: "Ragdoll",
//         name: "Marvin",
//         age: 3
//     },
//     {
//         species: "Lizard",
//         breed: "Bearded Dragon",
//         name: "Melissa",
//         age: 1
//     }, 
//     {
//         species: "Hamster",
//         breed: "Brown",
//         name: "Mayo",
//         age: 25
//     },
//     {
//         species: "Dog",
//         breed: "Great Dane",
//         name: "Jim",
//         age: 7
//     }
// ]

// function printName(array){
// for (let i = 0; i < array.length; i++){
//     document.querySelector("#pets-taco").innerHTML +=
//     ` <h3>${array[i].name}</h3> `
// }
// }
// printName(pets);

// for (let i = 0; i < pets.length; i++){
//     document.querySelector("#pets-taco").innerHTML +=
//     `<h1>${pets[i].species}</h1>
//     <h2>${pets[i].breed}</h2>
//     <h3>${pets[i].name}</h3>
//     <h4>${pets[i].age}</h4>`