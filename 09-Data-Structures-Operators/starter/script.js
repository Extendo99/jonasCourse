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
// Challenge #4
// Write a program that receives a list of variable names written in underscore_case
// and convert them to camelCase. The input will come from a textarea inserted into the DOM (see code below to
// insert the elements), and conversion will happen when the button is pressed.

// Test data (pasted to textarea, including spaces):
// underscore_case
//  first_name
// Some_Variable
//  calculate_AGE
// delayed_departure

// Should produce this output (5 separate console.log outputs):
// underscoreCase ✅
// firstName ✅✅
// someVariable ✅✅✅
// calculateAge ✅✅✅✅
// delayedDeparture ✅✅✅✅✅
// Hints:
// § Remember which character defines a new line in the textarea �
// § The solution only needs to work for a variable made out of 2 words, like a_b
// § Start without worrying about the ✅. Tackle that only after you have the variable
// name conversion working �
// § This challenge is difficult on purpose, so start watching the solution in case
// you're stuck. Then pause and continue!
// Afterwards, test with your own test data!
// GOOD LUCK �

// My Solution
// Tworzenie elementów
// const textarea = document.createElement("textarea");
// const button = document.createElement("button");
// // Ustawienie tekstu na przycisku
// button.textContent = "Prześlij";
// // Dodanie elementów do dokumentu
// document.body.append(textarea);
// document.body.append(button);

// // Dodanie obsługi zdarzenia click dla przycisku
// let inputText = "";
// button.addEventListener("click", () => {
//   // Pobranie wartości z textarea
//   inputText = textarea.value;
//   // lowercase
//   const lowerCase = inputText.toLowerCase();
//   // Split
//   const word = lowerCase.split(/[\n]/);

//   for (const words of word) {
//     // Trim All Words
//     const trimmedWords = words.trim();
//     // Create Array
//     let capitalizeLetter = [];
//     // Push to Array First Capitalize
//     capitalizeLetter.push(
//       trimmedWords.replace(trimmedWords[0], trimmedWords[0].toUpperCase())
//     );
//     for (let w of capitalizeLetter) {
//       let indexUnderscore = w.indexOf(`_`);
//       let replaceLetter =
//         w.slice(0, indexUnderscore) +
//         w[indexUnderscore + 1].toUpperCase() +
//         w.slice(indexUnderscore + 2);
//       console.log(replaceLetter);
//     }
//   }
// });

// Jonas Solution
/*
document.body.append(document.createElement('textarea'));
document.body.append(document.createElement('button'));

document.querySelector('button').addEventListener('click', function () {
  const text = document.querySelector('textarea').value;
  const rows = text.split('\n');

  for (const [i, row] of rows.entries()) {
    const [first, second] = row.toLowerCase().trim().split('_');

    const output = `${first}${second.replace(
      second[0],
      second[0].toUpperCase()
    )}`;
    console.log(`${output.padEnd(20)}${'✅'.repeat(i + 1)}`);
  }
});
*/

// String #3///////////////////////////////////////////////////////////////////////////////////////////////////////////
// Split Method
// console.log(`a+very+nice+string`.split(`+`));
// console.log(`Jonas Schmedtmann`.split(` `));
// const [firstName, lastName] = (`Jonas Schmedtmann`.split(` `));

// // Join Method
// const newName = [`Mr.`, firstName, lastName.toUpperCase()].join(' ');
// console.log(newName);

// // Capitalize First Letter Function
// const capitalizeName = function(name) {
//   const names = name.split(` `);
//   const namesUpper = [];

//   for (const n of names) {
//     // Slice Method Capitalize
//     // namesUpper.push(n[0].toUpperCase() + n.slice(1));
//     // Replace Method Capitalize
//     namesUpper.push(n.replace(n[0], n[0].toUpperCase()));
//   }
//   console.log(namesUpper.join(` `));
// }

// capitalizeName(`jessica ann smith davis`)
// capitalizeName(`jonas schmedtmann`)

// // Padding
// const message = `Go to gate 23!`;
// // Pad Start
// console.log(message.padStart(25, `+`));
// console.log(`Jonas`.padStart(25, `+`));
// // Pad End
// console.log(message.padStart(25, `+`).padEnd(30, `+`));
// console.log(`Jonas`.padStart(25, `+`).padEnd(30, `+`));

// // Example
// const maskCreditCard = function(number) {
//   // Convert Number to String
//   // const string = number + ``;
//   const str = String(number);
//   const last = str.slice(-4);
//   return last.padStart(str.length, `*`);
// }
// console.log(maskCreditCard(`135314531512512`));
// console.log(maskCreditCard(43344343345345));

// // Repeat
// const message2 = `Bad weather... All departures Delayed... `;
// console.log(message2.repeat(5));
// // Repeat Function
// const planesInLine = function(n) {
//   console.log(`The are ${n} planes in line ${`Plane`.repeat(n)}`);
// }
// planesInLine(5)

// Assigment #17///////////////////////////////////////////////////////////////////////////////////////////////////////

// 17.1
// const bookCategories = 'science;computing;computer science;algorithms;business;operating systems;networking;electronics';
// function logBookCategories (book){
//   const bookArr = bookCategories.split(`;`);
//   for (let book of bookArr) {
//     console.log(book);
//   }
// }
// logBookCategories(bookCategories);

// 17.2
// function getKeywordsAsString(book){
//   let allKeywords = [];
//   for (let book of books) {
//     allKeywords.push(...book.keywords);
//   }
//   // Delete Duplicate and Convert to Array
//   const keywordsSet = [...new Set(allKeywords)];
//   // Join All Elements in Array to single String
//   return keywordsSet.join(`;`);
// };
// console.log(getKeywordsAsString(books));

// 17.3
// const bookChapters = [['The Basics', 14], ['Sorting', 254], ['Searching', 372], ['Graphs', 526], ['Strings', 706]];
// logBookChapters(bookChapters);

// function logBookChapters (arr) {
//   for (let [chapter, page] of bookChapters) {
//     console.log(chapter.padEnd(20, `-`)+ ``+ page);
//   }
// }

// String #2///////////////////////////////////////////////////////////////////////////////////////////////////////////
// Lower Case
// console.log(airline.toLowerCase());
// Uppercase
// console.log(airline.toUpperCase());

// Fix Capitalize in Name
// const passenger = `jOnAS`;
// const passengerLower = passenger.toLowerCase(); // jonas
// const passengerCorrect =
//   passengerLower[0].toUpperCase() + passengerLower.slice(1); // Jonas
// console.log(passengerCorrect);

// Comparing emails
// const email = `hello@jonas.io`;
// const loginEmail = `  Hello@Jonas.Io \n`;
// const normalizedEmail = loginEmail.toLowerCase().trim();
// console.log(email === normalizedEmail);

// Replacing
// const priceGB = `288,97£`;
// const priceUS = priceGB.replace(`£`, `$`).replace(`,`, `.`);
// console.log(priceUS);

// const announcement = `All passenger come to boarding door 23. Boarding door 23!`;
// Replace the first occurrence
// console.log(announcement.replace(`door`, `gate`));
// Replace all occurrences of Door
// console.log(announcement.replaceAll(`door`, `gate`));

// Old way for Replace All
// console.log(announcement.replaceAll(/door/g, `gate`));

// Booleans
// Include Method
// const plane = `Airbus A320neo`;
// console.log(plane.includes(`A320`));
// console.log(plane.includes(`Boeing`));

// Start With
// console.log(plane.startsWith(`Air`));
// Ends With
// if (plane.startsWith(`Airbus`) && plane.endsWith(`neo`)) {
//   console.log(`Part of the NEW Airbus family`);
// }

// Practice Exercise
// const checkBaggage = function (items) {
//   const baggage = items.toLowerCase();
//   if (baggage.includes(`knife` || baggage.includes(`gun`))) {
//     console.log(`You are not allowed on board`);
//   } else {
//     console.log(`Welcome aboard!`);
//   }
// };
// checkBaggage(`I have a laptop, some Food and a pocket Knife`);
// checkBaggage(`Socks and camera`);
// checkBaggage(`Got some snacks and a gun for protection`);

// Assigment #16///////////////////////////////////////////////////////////////////////////////////////////////////////
// 16.1
// My Solution
// function normalizeAuthorName(author) {
// Lower Case
//   const authorLower = author.toLowerCase();

// Delete Contributor
//   const cleanAuthor = authorLower.replace(`(contributor)`, ``);

// Uppercase First Name
//   const nameCapitalize = cleanAuthor[0].toUpperCase() + cleanAuthor.slice(1);

// Uppercase Last Name
// First Letter Uppercase
//   const lastNameFirstLetterCapitalize = nameCapitalize
//     .slice(nameCapitalize.indexOf(` `) + 1, nameCapitalize.indexOf(` `) + 2)
//     .toUpperCase();

// Full Last Name
//   const fullLastName =
//     lastNameFirstLetterCapitalize +
//     nameCapitalize.slice(nameCapitalize.indexOf(` `) + 2);
// Full Name
//   const fullName =
//     nameCapitalize.slice(0, nameCapitalize.indexOf(` `)) + " " + fullLastName;
//   console.log(fullName);
// }
// normalizeAuthorName(`kOnrAd lADa (Contributor)`);

// Jonas Solution
// function normalizeAuthorName(author) {
//   author = author.trim();
//   console.log(author);

// const firstName = author.slice(0, author.indexOf(" "));

// let lastName = "";
// if (author.indexOf(" ") === author.lastIndexOf(" ")) {
//   lastName = author.slice(author.indexOf(" ") + 1, author.length);
// } else {
//   lastName = author.slice(author.indexOf(" ") + 1, author.lastIndexOf(" "));
// }

// const capitalizedFirstName =
//   firstName[0].toUpperCase() + firstName.slice(1).toLowerCase();
// const capitalizedLastName =
//   lastName[0].toUpperCase() + lastName.slice(1).toLowerCase();

// return capitalizedFirstName + " " + capitalizedLastName;
// }
// normalizeAuthorName(`kOnrAd lADa (Contributor)`);

// 16.2
// const newBookTitle = books[1].title.replace(`Programs`, `Software`);
// console.log(newBookTitle);

// 16.3
// function logBookTheme(booktitle) {
//   const lowerBook = booktitle.toLowerCase();
//   if (lowerBook.startsWith(`computer`)) {
//     console.log(`This book is about computers`);
//   } else if (
//     lowerBook.includes(`algorithms`) &&
//     lowerBook.includes(`structures`)
//   ) {
//     console.log(`This book is about algorithms and data structures`);
//   } else if (
//     lowerBook.endsWith(`system`) ||
//     (lowerBook.endsWith(`systems`) && !lowerBook.includes(`operating`))
//   ) {
//     console.log(
//       `This book is about some systems, but definitely not about operating systems`
//     );
//   }
// }

// logBookTheme(`system and systems`);
// logBookTheme(`algorithms and structures`);
// logBookTheme(`computer`);

// String #1 - Slice Method////////////////////////////////////////////////////////////////////////////////////////////
// const airline = `TAP Air Portugal`;
// const plane = `A320`;

// Letter on position
// console.log(plane[0]);
// console.log(`B737`[0]);

//String Length
// console.log(airline.length);
// console.log(`B737`.length);

//String Methods
//First Index of Letter
// console.log(airline.indexOf(`r`));
//Last Index of Letter
// console.log(airline.lastIndexOf(`r`));
//Word Index
// console.log(airline.indexOf(`Portugal`));

//Slice Methods Return New String
// console.log(airline.slice(4));
// console.log(airline.slice(4, 7));

// Slice First Word
// console.log(airline.slice(0, airline.indexOf(` `)));

//Slice Last Word
// console.log(airline.slice(airline.lastIndexOf(` `) + 1));

// Negative cut last
// console.log(airline.slice(-2));
// console.log(airline.slice(1, -1));

// Example
// const checkMiddleSeat = function (seat) {
// B and E are Middle Seats
//   const s = seat.slice(-1);
//   if (s === `B` || s === `E`) {
//     console.log(`You got the middle seat`);
//   } else {
//     console.log(`You got lucky`);
//   }
// };

// checkMiddleSeat(`11B`);
// checkMiddleSeat(`23C`);
// checkMiddleSeat(`3E`);

//JavaScript, convert a string to an object so methods work. When the method is done, convert it back to a string.
// console.log(new String(`jonas`));
// console.log(typeof new String(`Jonas`));
// console.log(typeof new String(`jonas`).slice(1));

// Assigment #15///////////////////////////////////////////////////////////////////////////////////////////////////////

// 15.1
// console.log(
//   books[0].ISBN[6],
//   books[0].ISBN[4],
//   books[0].ISBN[9],
//   books[0].ISBN[8]
// );

// 15.2
// const quote =
//   "A computer once beat me at chess, but it was no match for me at kick boxing";
// console.log(quote.indexOf(`chess`));

//15.3
// console.log(quote.slice(quote.lastIndexOf(` `) + 1));

//15.4
//My Solution
// function isContributor(author) {
//   const contributorCheck = author.slice(author.lastIndexOf(` `) + 1);
//   if (contributorCheck === "(Contributor)") {
//     return true;
//   } else {
//     return false;
//   }
// }
//Jonas Solution
// function isContributor(author) {
//   return author.lastIndexOf("(Contributor)") !== -1;
// }

// console.log(isContributor("Julie Sussman (Contributor)"));
// console.log(isContributor("Robert Sedgewick"));

// Challenge #3////////////////////////////////////////////////////////////////////////////////////////////////////////
// const gameEvents = new Map([
//   [17, "⚽ GOAL"],
//   [36, "� Substitution"],
//   [47, "⚽ GOAL"],
//   [61, "� Substitution"],
//   [64, "� Yellow card"],
//   [69, "� Red card"],
//   [70, "� Substitution"],
//   [72, "� Substitution"],
//   [76, "⚽ GOAL"],
//   [80, "⚽ GOAL"],
//   [92, "� Yellow card"],
// ]);

//1. Create an array 'events' of the different game events that happened (no duplicates)
//My Solution
// const eventsArr = [];
// for (const [key, value] of gameEvents) {
//   eventsArr.push(value);
// }
// const eventsSet = new Set(eventsArr);
// const uniqueEventsArr = [...eventsSet];
// console.log(uniqueEventsArr);

// Jonas Solution
// const events = [...new Set(gameEvents.values())];
// console.log(events);

// 2. After the game has finished, is was found that the yellow card from minute 64
//   was unfair. So remove this event from the game events log.
// gameEvents.delete(64);
// console.log(gameEvents);

// 3. Compute and log the following string to the console: "An event happened, on
//   average, every 9 minutes" (keep in mind that a game has 90 minutes)
// const time = [...gameEvents.keys()].pop();
// console.log(
//   `An event happened, on average, every ${time / gameEvents.size} minutes`
// );

// 4. Loop over 'gameEvents' and log each element to the console, marking
//   whether it's in the first half or second half (after 45 min) of the game, like this:
//   [FIRST HALF] 17: ⚽ GOAL
// MY SOLUTION
// for (const [key, value] of gameEvents) {
//   if (key <= 45) {
//     console.log(`[FIRST HALF] ${key}: ${value}`);
//   } else {
//     console.log(`[SECOND HALF] ${key}: ${value}`);
//   }
// }

// GPT SOLUTION
// for (const [key, value] of gameEvents) {
//   const half = key <= 45 ? "[FIRST HALF]" : "[SECOND HALF]";
//   console.log(`${half} ${key}: ${value}`);
// }

// Data Structure Pros and Cons////////////////////////////////////////////////////////////////////////////////////////
// Simple List
// Array > Ordered with Duplicate. Manipulate
// Sets > Unique Value. Remove Duplicate

// Key/Value Pairs  >
// Objects > Easy to access and write. Function and Methods
// Maps > Keys any data type. Keys when not strings

// Maps Iteration//////////////////////////////////////////////////////////////////////////////////////////////////////
// const question = new Map([
//   [`question`, `What is the best programming language in the world?`],
//   [1, `C`],
//   [2, `Java`],
//   [3, `JavaScript`],
//   [`correct`, 3],
//   [true, `Correct`],
//   [false, `Try Again`],
// ]);
// console.log(question);

// Convert Object to Map
// console.log(Object.entries(openingHours));
// const hoursMap = new Map(Object.entries(openingHours));
// console.log(hoursMap);

// Iteration
// Quiz App
// console.log(question.get(`question`));
// for (const [key, value] of question) {
//   if (typeof key === `number`) console.log(`Answear ${key}: ${value}`);
// }
// Prompt Answer
// const answer = Number(prompt(`Your answer`));
// console.log(answer);

// My Solution
// if (answer === 3) {
//   console.log(question.get(true));
// } else console.log(question.get(false));
// Jonas Solution
// console.log(question.get(question.get(`correct`) === answer));

// Convert Map to Array
// console.log([...question]);
// console.log(questions.entries());
// console.log([...question.keys()]);
// console.log([...question.values()]);

// Assigment #14
// 14.1
// const firstBookMap = new Map(Object.entries(books[0]));
//console.log(firstBookMap);

//14.2
// for (const [key, value] of firstBookMap) {
//   if (typeof value === `number`) console.log(key);
// }
// Maps////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// const rest = new Map();
// rest.set(`name`, `Classico Italiano`);
// rest.set(1, `Firenze, Italy`);
// console.log(rest.set(2, `Lisbon, Portugal`));

// Create Map
// rest
//   .set(`categories`, ["Italian", "Pizzeria", "Vegetarian", "Organic"])
//   .set(`open`, 11)
//   .set(`close`, 23)
//   .set(true, `We are open :D`)
//   .set(false, `We are close ):`);

// Get elements from map
// console.log(rest.get(`name`));
// console.log(rest.get(true));

// Example
// const time = 8;
// console.log(rest.get(time > rest.get(`open`) && time < rest.get(`close`)));

//Check Elements
// console.log(rest.has(`categories`));

// Delete Elements
// rest.delete(2);
// console.log(rest);

// Size Map
// console.log(rest.size);

//Remove All Elements
// rest.clear();

// Array in Map
// const arr = [1, 2];
// rest.set(arr, `Test`);
// console.log(rest.get(arr));

// Object in Map
// rest.set(document.querySelector(`h1`), `Heading`);
// console.log(rest);

// Assigments #13
// 13.1
// const bookMap = new Map([
//   ["title", "Clean Code"],
//   ["author", "Robert C. Martin"],
// ]);
// 13.2
// bookMap.set(`pages`, 464);

// 13.3
// console.log(`"${bookMap.get(`title`)}" by ${bookMap.get(`author`)}`);

// 13.4
// console.log(bookMap.size);

// 13.5
// if (bookMap.has(`author`)) {
//   console.log("The author of the book is known");
// }

// Sets////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Unique Values
// const ordersSet = new Set([
//   `Pasta`,
//   `Pizza`,
//   `Pizza`,
//   `Risotto`,
//   `Pasta`,
//   `Pizza`,
// ]);

// console.log(ordersSet);

// Size of Set
// console.log(ordersSet.size);

// Check Elements
// console.log(ordersSet.has(`Pizza`));
// console.log(ordersSet.has(`Bread`));

// Add new elements
// ordersSet.add(`Garlic Bread`);
// ordersSet.add(`Garlic Bread`);

// Delete Elements
// ordersSet.delete(`Risotto`);

// Delete all elements
// ordersSet.clear();

// Sets are Iterable so we can loop
// for (const order of ordersSet) console.log(order);

// Main Use Case Remove Duplicate
// const staff = [`Waiter`, `Chef`, `Waiter`, `Manager`, `Chef`, `Waiter`];

// Make Unique Array
// const staffUnique = [...new Set(staff)];
// console.log(staffUnique);

// Array Unique Size
// console.log(
//   new Set([`Waiter`, `Chef`, `Waiter`, `Manager`, `Chef`, `Waiter`]).size
// );

// Letters Counter
// console.log(new Set(`jonasschmedtmann`).size);

// Assigment #12

// 12.1
// const allKeywords = [];
// for (let index = 0; index < books.length; index++) {
//   allKeywords.push(...books[index].keywords);
// }
// console.log(allKeywords);
// 12.1 Jonas Solution
// for (const book of books) {
//   allKeywords.push(...book.keywords);
// }

// 12.2
// const allKeywordsUnique = new Set(allKeywords);
// console.log(allKeywordsUnique);
// 12.2 Jonas Solution
//const uniqueKeywords = new Set(allKeywords);

// 12.3
// allKeywordsUnique.add(`coding`);
// allKeywordsUnique.add(`science`);

// 12.4
// allKeywordsUnique.delete(`business`);

// 12.5
// const uniqueKeywordsArr = [...allKeywordsUnique];
// console.log(uniqueKeywordsArr);

// 12.6
// allKeywordsUnique.clear();
// console.log(allKeywordsUnique);

//Looping Objects/////////////////////////////////////////////////////////////////////////////////////////////////////
// Property Names
// const properties = Object.keys(openingHours);
// console.log(properties);

// let openStr = `We are open on ${properties.length} days: `;
// for (const day of properties) {
//   openStr += `${day}, `;
// }
// console.log(openStr);

// Property Values
// const values = Object.values(openingHours);
// console.log(values);

// Names + Values = Entries
// Entire Object
// const entries = Object.entries(openingHours);
// console.log(entries);

// [key, value]
// for (const [key, { open, close }] of entries) {
//   console.log(`On ${key} we open at ${open} and close at ${close}`);
// }

// Assigment #11///////////////////////////////////////////////////////////////////////////////////////////////////////
// 11.1

// const entries = [];
// for (const key of Object.keys(books[0].thirdParty.goodreads)) {
//   entries.push([key]);
// }
// console.log(entries);

// 11.2
// for (const [index, value] of Object.values(
//   books[0].thirdParty.goodreads
// ).entries()) {
//   entries[index].push(value);
// }

// 11.3
// const entries2 = Object.entries(books[0].thirdParty.goodreads);

// 11.4
// console.log(entries);
// console.log(entries2);

// Optional Chaining///////////////////////////////////////////////////////////////////////////////////////////////////
// Bad
// if (restaurant.openingHours && restaurant.openingHours.mon)
//   console.log(restaurant.openingHours.mon.open);

// Good With Chaining
// Check if mon exist
// console.log(restaurant.openingHours.mon?.open);

// Check if mon and openingHours exist
// console.log(restaurant.openingHours?.mon?.open);

// Example
// const days = [`mon`, `tue`, `wed`, `thu`, `fri`, `sat`, `sun`];

// for (const day of days) {
// ?? because open at 0. If openinghourse doesnt exist print closed
//   const open = restaurant.openingHours[day]?.open ?? `closed`;
//   console.log(`On ${day}, we open at ${open}`);
// }

// Methods
// console.log(restaurant.order?.(0, 1) ?? `Method does not exist`);
// console.log(restaurant.orderRisotto?.(0, 1) ?? `Method does not exist`);

// Arrays
// const users = [{ name: `Jonas`, email: `hello@jonas.io` }];
// console.log(users[0]?.name ?? `User array empty`);

// Assigment #10///////////////////////////////////////////////////////////////////////////////////////////////////////
// function getFirstKeyword(book) {
//   return book.keywords?.[0];
// }

// getFirstKeyword(books[0]);

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

//8.2
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

// Challenge #1 && #2//////////////////////////////////////////////////////////////////////////////////////////////////
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

// Challenge #2////////////////////////////////////////////////////////////////////////////////////////////////////////
// 1. Loop over the game.scored array and print each player name to the console, along with the goal number (Example: "Goal 1: Lewandowski"
// for (const [i, player] of game.scored.entries()) {
//   console.log(`Goal ${i + 1}: ${player}`);
// }
// 2. Use a loop to calculate the average odd and log it to the console (We already studied how to calculate averages, you can go check if you don't remember
// Create Array
// let oddArr = [];
// for (odd of Object.values(game.odds)) {
//   oddArr.push(odd);
// }
// console.log(oddArr);
// Sum
// let sumOdd = 0;
// for (let index = 0; index < oddArr.length; index++) {
//   sumOdd += oddArr[index];
// }
// Average
// let averageOdd = sumOdd / oddArr.length;
// console.log(averageOdd);

//  3. Print the 3 odds to the console, but in a nice formatted way, exactly like this: Odd of victory Bayern Munich: 1.33
// Odd of draw: 3.25 Odd of victory Borrussia Dortmund: 6.5 Get the team names directly from the game object, don't hardcode them
// (except for "draw"). Hint: Note how the odds and the game objects have the same property names �

// console.log(
//   `Odd of Victory ${game.team1}: ${game.odds.team1}\nOdd of Draw ${game.odds.x}\nOdd of Victory ${game.team2}: ${game.odds.team2}`
// );

// for (const [team, odd] of Object.entries(game.odds)) {
//   const teamStr = team === `x` ? `draw` : `victory ${game[team]}`;
//   console.log(`Odd of ${teamStr} ${odd}`);
// }

// 4. Bonus: Create an object called 'scorers' which contains the names of the players who scored as properties, and the number of goals as the value. In this
// game, it will look like this: { Gnarby: 1, Hummels: 1, Lewandowski: 2}

// const scorers = {};
// for (const player of game.scored) {
//   scorers[player] ? scorers[player]++ : (scorers[player] = 1);
// }

// Challenge #1////////////////////////////////////////////////////////////////////////////////////////////////////////
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
// numGuests: 20,
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
// return books.programmingLanguage === `Java` || `no data available`;
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
