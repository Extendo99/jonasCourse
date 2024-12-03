// "use strict";

// Data needed for a later exercise
// const flights =
//   "_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30";

// Assigment Array Book //////////////////
const books = [
  {
    title: "Algorithms",
    author: ["Robert Sedgewick", "Kevin Wayne"],
    publisher: "Addison-Wesley Professional",
    publicationDate: "2011-03-24",
    edition: 4,
    keywords: [
      "computer science",
      "programming",
      "algorithms",
      "data structures",
      "java",
      "math",
      "software",
      "engineering",
    ],
    pages: 976,
    format: "hardcover",
    ISBN: "9780321573513",
    language: "English",
    programmingLanguage: "Java",
    onlineContent: true,
    thirdParty: {
      goodreads: {
        rating: 4.41,
        ratingsCount: 1733,
        reviewsCount: 63,
        fiveStarRatingCount: 976,
        oneStarRatingCount: 13,
      },
    },
    highlighted: true,
  },
  {
    title: "Structure and Interpretation of Computer Programs",
    author: [
      "Harold Abelson",
      "Gerald Jay Sussman",
      "Julie Sussman (Contributor)",
    ],
    publisher: "The MIT Press",
    publicationDate: "2022-04-12",
    edition: 2,
    keywords: [
      "computer science",
      "programming",
      "javascript",
      "software",
      "engineering",
    ],
    pages: 640,
    format: "paperback",
    ISBN: "9780262543231",
    language: "English",
    programmingLanguage: "JavaScript",
    onlineContent: false,
    thirdParty: {
      goodreads: {
        rating: 4.36,
        ratingsCount: 14,
        reviewsCount: 3,
        fiveStarRatingCount: 8,
        oneStarRatingCount: 0,
      },
    },
    highlighted: true,
  },
  {
    title: "Computer Systems: A Programmer's Perspective",
    author: ["Randal E. Bryant", "David Richard O'Hallaron"],
    publisher: "Prentice Hall",
    publicationDate: "2002-01-01",
    edition: 1,
    keywords: [
      "computer science",
      "computer systems",
      "programming",
      "software",
      "C",
      "engineering",
    ],
    pages: 978,
    format: "hardcover",
    ISBN: "9780130340740",
    language: "English",
    programmingLanguage: "C",
    onlineContent: false,
    thirdParty: {
      goodreads: {
        rating: 4.44,
        ratingsCount: 1010,
        reviewsCount: 57,
        fiveStarRatingCount: 638,
        oneStarRatingCount: 16,
      },
    },
    highlighted: true,
  },
  {
    title: "Operating System Concepts",
    author: ["Abraham Silberschatz", "Peter B. Galvin", "Greg Gagne"],
    publisher: "John Wiley & Sons",
    publicationDate: "2004-12-14",
    edition: 10,
    keywords: [
      "computer science",
      "operating systems",
      "programming",
      "software",
      "C",
      "Java",
      "engineering",
    ],
    pages: 921,
    format: "hardcover",
    ISBN: "9780471694663",
    language: "English",
    programmingLanguage: "C, Java",
    onlineContent: false,
    thirdParty: {
      goodreads: {
        rating: 3.9,
        ratingsCount: 2131,
        reviewsCount: 114,
        fiveStarRatingCount: 728,
        oneStarRatingCount: 65,
      },
    },
  },
  {
    title: "Engineering Mathematics",
    author: ["K.A. Stroud", "Dexter J. Booth"],
    publisher: "Palgrave",
    publicationDate: "2007-01-01",
    edition: 14,
    keywords: ["mathematics", "engineering"],
    pages: 1288,
    format: "paperback",
    ISBN: "9781403942463",
    language: "English",
    programmingLanguage: null,
    onlineContent: true,
    thirdParty: {
      goodreads: {
        rating: 4.35,
        ratingsCount: 370,
        reviewsCount: 18,
        fiveStarRatingCount: 211,
        oneStarRatingCount: 6,
      },
    },
    highlighted: true,
  },
  {
    title: "The Personal MBA: Master the Art of Business",
    author: "Josh Kaufman",
    publisher: "Portfolio",
    publicationDate: "2010-12-30",
    keywords: ["business"],
    pages: 416,
    format: "hardcover",
    ISBN: "9781591843528",
    language: "English",
    thirdParty: {
      goodreads: {
        rating: 4.11,
        ratingsCount: 40119,
        reviewsCount: 1351,
        fiveStarRatingCount: 18033,
        oneStarRatingCount: 1090,
      },
    },
  },
  {
    title: "Crafting Interpreters",
    author: "Robert Nystrom",
    publisher: "Genever Benning",
    publicationDate: "2021-07-28",
    keywords: [
      "computer science",
      "compilers",
      "engineering",
      "interpreters",
      "software",
      "engineering",
    ],
    pages: 865,
    format: "paperback",
    ISBN: "9780990582939",
    language: "English",
    thirdParty: {
      goodreads: {
        rating: 4.7,
        ratingsCount: 253,
        reviewsCount: 23,
        fiveStarRatingCount: 193,
        oneStarRatingCount: 0,
      },
    },
  },
  {
    title: "Deep Work: Rules for Focused Success in a Distracted World",
    author: "Cal Newport",
    publisher: "Grand Central Publishing",
    publicationDate: "2016-01-05",
    edition: 1,
    keywords: ["work", "focus", "personal development", "business"],
    pages: 296,
    format: "hardcover",
    ISBN: "9781455586691",
    language: "English",
    thirdParty: {
      goodreads: {
        rating: 4.19,
        ratingsCount: 144584,
        reviewsCount: 11598,
        fiveStarRatingCount: 63405,
        oneStarRatingCount: 1808,
      },
    },
    highlighted: true,
  },
];

// Restaurant Array ///////////////////////////////////////////////////////////////////////////////////////////////////
const weekdays = [`mon`, `tue`, `wed`, `thu`, `fri`, `sat`, `sun`];

const openingHours = {
  [weekdays[3]]: {
    open: 12,
    close: 22,
  },
  [weekdays[4]]: {
    open: 11,
    close: 23,
  },
  [weekdays[5]]: {
    open: 0, // Open 24 hours
    close: 24,
  },
};

const restaurant = {
  name: "Classico Italiano",
  location: "Via Angelo Tavanti 23, Firenze, Italy",
  categories: ["Italian", "Pizzeria", "Vegetarian", "Organic"],
  starterMenu: ["Focaccia", "Bruschetta", "Garlic Bread", "Caprese Salad"],
  mainMenu: ["Pizza", "Pasta", "Risotto"],

  // ES6 Enchanced Object Literals
  openingHours,
  // Without Function Keyword
  order(starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },

  orderDelivery: function ({
    starterIndex = 1,
    mainIndex = 0,
    time = `20:00`,
    adress,
  }) {
    console.log(
      `Order received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${adress} at ${time}`
    );
  },
  orderPasta: function (ing1, ing2, ing3) {
    console.log(
      `Here is your delicious pasta with ${ing1}, ${ing2} and ${ing3}`
    );
  },
  orderPizza: function (mainIngredient, ...otherIngredients) {
    console.log(mainIngredient);
    console.log(otherIngredients);
  },
};

// Assigment #9////////////////////////////////////////////////////////////////////////////////////////////////////////
//8.1
// const bookData = [
//   ["title", "Computer Networking: A Top-Down Approach"],
//   ["author", ["James F. Kurose", "Keith W. Ross"]],
//   ["publisher", "Addison Wesley"],
// ];

// const newBook = {
//   [bookData[0][0]]: bookData[0][1],
//   [bookData[1][0]]: bookData[1][1],
//   [bookData[2][0]]: bookData[2][1],
// };

// //8.2
// const pages = 880;

// const newBook2 = {
//   title: "The C Programming Language",
//   author: ["Brian W. Kernighan", "Dennis M. Ritchie"],
//   pages,
// };

// For Looping Arrays//////////////////////////////////////////////////////////////////////////////////////////////////
// const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];

// for (const item of menu) console.log(item);

// Entries
// for (const [i, el] of menu.entries()) {
//   console.log(`${i + 1}: ${el}`);
// }

// Assigment #8////////////////////////////////////////////////////////////////////////////////////////////////////////
//8.1
// let pageSum = 0;

// for (let book of books) {
//   pageSum += book.pages;
// }
// console.log(pageSum);

// 8.2
// const allAuthors = [];
// for (const book of books) {
//   if (typeof book.author === `string`) {
//     allAuthors.push(book.author);
//   } else if (Array.isArray(book.author)) {
//     allAuthors.push(...book.author);
//   }
// }

// console.log(allAuthors);

// 8.3
// for (const [i, author] of allAuthors.entries())
//   console.log(`${i + 1}: ${author}`);

// Challenge #1////////////////////////////////////////////////////////////////////////////////////////////////////////
// const game = {
//   team1: "Bayern Munich",
//   team2: "Borrussia Dortmund",
//   players: [
//     [
//       "Neuer",
//       "Pavard",
//       "Martinez",
//       "Alaba",
//       "Davies",
//       "Kimmich",
//       "Goretzka",
//       "Coman",
//       "Muller",
//       "Gnarby",
//       "Lewandowski",
//     ],
//     [
//       "Burki",
//       "Schulz",
//       "Hummels",
//       "Akanji",
//       "Hakimi",
//       "Weigl",
//       "Witsel",
//       "Hazard",
//       "Brandt",
//       "Sancho",
//       "Gotze",
//     ],
//   ],
//   score: "4:0",
//   scored: ["Lewandowski", "Gnarby", "Lewandowski", "Hummels"],
//   date: "Nov 9th, 2037",
//   odds: {
//     team1: 1.33,
//     x: 3.25,
//     team2: 6.5,
//   },
// };

// 1. Create one player array for each team (variables 'players1' and 'players2')
// const [players1, players2] = game.players;

// console.log(players1);
// console.log(players2);

// 2. The first player in any player array is the goalkeeper and the others are field
// players. For Bayern Munich (team 1) create one variable ('gk') with the
// goalkeeper's name, and one array ('fieldPlayers') with all the remaining 10 field players
// const [gk, ...fieldPlayers] = players1;
// console.log(gk);
// console.log(fieldPlayers);

// 3. Create an array 'allPlayers' containing all players of both teams (22 players)
// const allPlayers = [...players1, ...players2];
// console.log(allPlayers);

// 4. During the game, Bayern Munich (team 1) used 3 substitute players. So create a
// new array ('players1Final') containing all the original team1 players plus 'Thiago', 'Coutinho' and 'Perisic'

// const players1Final = [...players1, `Thiago`, `Coutinho`, `Perisic`];
// console.log(players1Final);

// 5. Based on the game.odds object, create one variable for each odd (called 'team1', 'draw' and 'team2')
// const {
//   odds: { team1: team1 },
// } = game;
// console.log(team1);

// const {
//   odds: { x: x },
// } = game;
// console.log(x);

// const {
//   odds: { team2: team2 },
// } = game;
// console.log(team2);

// Can be one line
// const {
//   odds: { team1, x, team2 },
// } = game;
// console.log(team1, x, team2);

// 6. Write a function ('printGoals') that receives an arbitrary number of player names (not an array) and prints each of them to the console, along with the
// number of goals that were scored in total (number of player names passed in)

// function printGoals(...playersName) {
//   for (let i = 0; i < playersName.length; i++) {
//     console.log(`${i + 1} Goal: ${playersName[i]}`);
//   }
// }
// printGoals("Davies", "Muller", "Lewandowski", "Kimmich");

// 7. The team with the lower odd is more likely to win. Print to the console which
// team is more likely to win, without using an if/else statement or the ternary operator.

// if (team1 < team2 && team1 < x) {
//   console.log(`Team 1 is more likely to win with ${team1} Odds`);
// } else if (team2 < team1 && team2 < x) {
//   console.log(`Team 2 is more likely to win with ${team2} Odds`);
// } else console.log(`The most likely result is a draw with ${x} Odds`);

// Solution
// team1 < team2 && console.log(`Team 1 is more likely to win with ${team1} Odds`);
// team2 < team1 && console.log(`Team 2 is more likely to win with ${team2} Odds`);

// Logical Assigment Operators/////////////////////////////////////////////////////////////////////////////////////////

// const rest1 = {
//   name: `Capri`,
//   // numGuests: 20,
//   numGuests: 0,
// };

// const rest2 = {
//   name: `La Piazza`,
//   owner: `Giovanni Rossi`,
// };

// OR Assigment////////////////////////////////////////////
// If doesn't exist set default 10
// rest1.numGuests ||= 10;
// rest2.numGuests ||= 10;

// Nulish Assigment Operator (null, undefined)/////////////
// rest1.numGuests ??= 10;
// rest2.numGuests ??= 10;

// AND Assigment Operator//////////////////////////////////
// Set if Exist
// rest1.owner &&= `<ANONYMOUS>`;
// rest2.owner &&= `<ANONYMOUS>`;

// Assigment #7

// 7.1
// for (let index = 0; index < books.length; index++) {
//   books[index].edition ||= 1;
// }

// 7.2
// for (let index = 0; index < books.length; index++) {
//   books[index].highlighted &&= !books[index].thirdParty.goodreads.rating < 4.2;
// }

// Nulish Operator/////////////////////////////////////////////////////////////////////////////////////////////////////
// Problem with 0 because its false value. This will print 10
// restaurant.numGuests = 0;
// const guests = restaurant.numGuests || 10;
// console.log(guests);

// Nullish: null and undefined NOT INCLUDE 0 or ""
// const guestCorrect = restaurant.numGuests ?? 10;
// console.log(guestCorrect);

// Assigment #6////////////////////////////////////////////////////////////////////////////////////////////////////////
// for (let index = 0; index < books.length; index++) {
//   books[index].onlineContent ??
//     console.log(
//       `"${books[index].title}" provides no data about its online content`
//     );
// }
// Short Circuiting OR ||//////////////////////////////////////////////////////////////////////////////////////////////
// If the first ONE is TRUE, PRINT it,
// console.log(3 || `Jonas`);
// console.log(true || 0);
// if NOT, print the LAST one even if it is false.
// console.log(`` || `Jonas`);
// console.log(undefined || null);

// Print First True Value
// console.log(undefined || 0 || `` || `Hello` || 23 || null); // First True Value is Hello

// If numguest doesn't exist print default value 10
// Bad
// const guests1 = restaurant.numGuests ? restaurant.numGuests : 10;
// console.log(guests1);
// Good
// const guests2 = restaurant.numGuests || 10;
// console.log(guests2);

// Short Circuiting AND &&/////////////////////////////////////////////////////////////////////////////////////////////
// If the first ONE is False, PRINT it,
// console.log(0 && `Jonas`);
// if NOT, print the LAST one even if it is True.
// console.log(7 && `Jonas`);

// Print First False Value
// console.log(`Hello` && 23 && null && `jonas`);

// Practical Example
// Bad
// if (restaurant.orderPizza) {
//   restaurant.orderPizza(`mushrooms`, `spinach`);
// }
// Good
//If restaurant.orderPizza is not False and Exist Call Function
// restaurant.orderPizza && restaurant.orderPizza(`mushrooms`, `spinach`)

// Assigment #5
// 5.1
// function hasExamplesInJava(books) {
//   console.log(books.programmingLanguage === `Java` || `no data available`);
//   // return books.programmingLanguage === `Java` || `no data available`;
// }
// hasExamplesInJava(books[0]);
// hasExamplesInJava(books[1]);

// 5.2
// for (let i = 0; i < books.length; i++) {
//   books[i].onlineContent &&
//     console.log(`"${books[i].title}" provides online content`);
// }

// Rest Operator///////////////////////////////////////////////////////////////////////////////////////////////////////
// 1) Destructuring
// Arrays
// const [a, b, ...others] = [1, 2, 3, 4, 5];
// console.log(a, b, others);

// const [pizza, , risotto, ...otherFood] = [
//   ...restaurant.mainMenu,
//   ...restaurant.starterMenu,
// ];
// console.log(pizza, risotto, otherFood);

// Objects
// const { sat, ...weekdays } = restaurant.openingHours;
// console.log(weekdays);

// 2) Functions
// const add = function (...numbers) {
//   console.log(numbers);
//   let sum = 0;
//   for (let i = 0; i < numbers.length; i++) sum += numbers[i];
//   console.log(sum);
// };

// add(2, 3);
// add(5, 3, 7, 2);
// add(8, 2, 5, 3, 2, 1, 4);

// Spread
// const x = [23, 5, 7];
// add(...x);

// Function OrderPizza
// restaurant.orderPizza(`Mushrooms`, `onion`, `olives`, `spinach`);
// restaurant.orderPizza(`Mushrooms`);

// Assigment #4////////////////////////////////////////////////////////////////////////////////////////////////////////
// 4.1
// const [mainKeyword, ...rest] = books[0].keywords;

// 4.2
// const { publisher: bookPublisher, ...restOfTheBook } = books[1];

// 4.3
// function printBookAuthorsCount(title, ...authors) {
//   console.log(`The book "${title}" has ${authors.length} authors`);
// }

// Spread Operator//////////////////////////////////////////////////////////////////////////////////////////////////
// const arr = [7, 8, 9];
// Bad
// const badNewArr = [1, 2, arr[0], arr[1], arr[2]];
// console.log(badNewArr);
// Good
// const newArr = [1, 2, ...arr];
// console.log(newArr);

// Invidual
// Bad
// console.log(1, 2, 7, 8, 9);
// Good
// console.log(...newArr);

// New Array and Add New Elements to old Array
// const newMenu = [...restaurant.mainMenu, `Gnocci`];
// console.log(newMenu);

// Copy Array
// const mainMenuCopy = [...restaurant.mainMenu];

// Join 2 Arrays
// const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];
// console.log(menu);

// Iterables: Arrays, Strings, Maps, Sets NOT OBJECTS
// const str = `Jonas`;
// const letters = [...str, ` `, `S.`];
// console.log(letters);
// console.log(...str);

// Real World Example with Function
// const ingredients = [
//   prompt(`Let's make pasta! Ingredient 1?`),
//   prompt(`Ingredient 2?`),
//   prompt(`Ingredient 3?`),
// ];
// Bad
// restaurant.orderPasta(ingredients[0], ingredients[1], ingredients[2]);
// Good
// restaurant.orderPasta(...ingredients);

// Objects
// const newRestaurant = { foundedIn: 1998, ...restaurant, founder: `Guiseppe` };
// console.log(newRestaurant);
// Object Copy

// const restaurantCopy = {...restaurant};
// restaurantCopy.name = `Ristorante Roma`;
// console.log(restaurantCopy.name);
// console.log(restaurant.name);

// Assigment #3////////////////////////////////////////////////////////////////////////////////////////////////////////

//3.1
// const bookAuthors = [...books[0].author, ...books[1].author];
// console.log(bookAuthors);
//3.2
// function spellWord(string) {
//   console.log(...string);
// }
// spellWord("JavaScript");

// Destructuring Objects///////////////////////////////////////////////////////////////////////////////////////////////

// Same name as in object
// const { name, openingHours, categories } = restaurant;
// console.log(name, openingHours, categories);

// Different name
// const {
//   name: restaurantName,
//   openingHours: hours,
//   categories: tags,
// } = restaurant;
// console.log(restaurantName, hours, tags);

// Default Values
// const { menu = [], starterMenu: starters = [] } = restaurant;
// console.log(menu, starters);

// Mutating Variables
// let a = 111;
// let b = 999;
// const obj = { a: 23, b: 7, c: 14 };

// ({ a, b } = obj);
// console.log(a, b);

// Nested Objects
// const {
//   fri: { open: o, close: c },
// } = openingHours;
// console.log(o, c);

// Calling Function

// restaurant.orderDelivery({
//   time: "23:30",
//   adress: `Via del Sole, 21`,
//   mainIndex: 2,
//   starterIndex: 2,
// });

// restaurant.orderDelivery({
//   adress: `Via del Sole, 21`,
//   starterIndex: 1,
// });

// Assigment #2////////////////////////////////////////////////////////////////////////////////////////////////////////

// 2.1
// const { title, author, ISBN } = books[0];
// console.log(title, author, ISBN);

// 2.2
// const { keywords: tags } = books[0];
// console.log(tags);

// 2.3
// const { language, programmingLanguage = `unknown` } = books[6];
// console.log([programmingLanguage]);

// 2.4
// let bookTitle = "unknown";
// let bookAuthor = "unknown";
// ({ title: bookTitle, author: bookAuthor } = books[0]);
// console.log(bookTitle, bookAuthor);

// 2.5
// const {
//   thirdParty: {
//     goodreads: { rating: bookRating },
//   },
// } = books[0];
// console.log(bookRating);

// 2.6
// function printBookInfo({ title, author, year = `year unknown` }) {
//   console.log(`${title} by ${author}, ${year}`);
// }
// printBookInfo({
//   title: "Algorithms",
//   author: "Robert Sedgewick",
//   year: "2011",
// });

// Destructuring Array ////////////////////////////////////////////////////////////////////////////////////////////////
// const arr = [2, 3, 4];
// const a = arr[0];
// const b = arr[1];
// const c = arr[2];

// const [x, y, z] = arr;
// console.log(x, y, z);
// console.log(arr);

// Skip Second Position
// let [main, , secondary] = restaurant.categories;
// console.log(main, secondary);

// Switching Variables
// [main, secondary] = [secondary, main];
// console.log(main, secondary);

// Receive 2 return values from a function
// const [starter, mainCourse] = restaurant.order(2, 0);
// console.log(starter, mainCourse);

// Nested Arrays
// const nested = [2, 4, [5, 6]];
// const [i, , [j, k]] = nested;
// console.log(i, j, k);

// Default Values
// const [p = 1, q = 1, r = 1] = [8, 9];
// console.log(p, q, r);

// Assigment #1 ///////////////////////////////////////////////////////////////////////////////////////////////////////

// 1.1
// const [firstBook, secondBook] = books;
// console.log(firstBook, secondBook);

// 1.2
// const [, , thirdBook] = books;
// console.log(thirdBook);

// 1.3
// const ratings = [
//   ["rating", 4.19],
//   ["ratingsCount", 144584],
// ];
// const [[, rating], [, ratingcount]] = ratings;
// console.log(rating, ratingcount);

// 1.4
// const ratingStars = [63405, 1808];
// const [fiveStarRatingCount, oneStarRatingCount, threeStarRating = 0] =
//   ratingStars;
// console.log(threeStarRating);
