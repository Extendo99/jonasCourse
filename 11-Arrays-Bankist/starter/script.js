"use strict";

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

// Data
const account1 = {
  owner: "Jonas Schmedtmann",
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
  type: `premium`,
};

const account2 = {
  owner: "Jessica Davis",
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
  type: `standard`,
};

const account3 = {
  owner: "Steven Thomas Williams",
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
  type: `premium`,
};

const account4 = {
  owner: "Sarah Smith",
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
  type: `basic`,
};

const accounts = [account1, account2, account3, account4];

// Elements
const labelWelcome = document.querySelector(".welcome");
const labelDate = document.querySelector(".date");
const labelBalance = document.querySelector(".balance__value");
const labelSumIn = document.querySelector(".summary__value--in");
const labelSumOut = document.querySelector(".summary__value--out");
const labelSumInterest = document.querySelector(".summary__value--interest");
const labelTimer = document.querySelector(".timer");

const containerApp = document.querySelector(".app");
const containerMovements = document.querySelector(".movements");

const btnLogin = document.querySelector(".login__btn");
const btnTransfer = document.querySelector(".form__btn--transfer");
const btnLoan = document.querySelector(".form__btn--loan");
const btnClose = document.querySelector(".form__btn--close");
const btnSort = document.querySelector(".btn--sort");

const inputLoginUsername = document.querySelector(".login__input--user");
const inputLoginPin = document.querySelector(".login__input--pin");
const inputTransferTo = document.querySelector(".form__input--to");
const inputTransferAmount = document.querySelector(".form__input--amount");
const inputLoanAmount = document.querySelector(".form__input--loan-amount");
const inputCloseUsername = document.querySelector(".form__input--user");
const inputClosePin = document.querySelector(".form__input--pin");

// Display Movements //////////////////////////////////////////////////////////////////////////////
const displayMovements = function (movements, sort = false) {
  containerMovements.innerHTML = "";

  // Slice make copy
  const movs = sort ? movements.slice().sort((a, b) => a - b) : movements;

  movs.forEach(function (mov, i) {
    const type = mov > 0 ? `deposit` : `withdrawal`;
    const html = `
    <div class="movements__row">
        <div class="movements__type movements__type--${type}">${
      i + 1
    } ${type}</div>
        <div class="movements__value">${mov} EUR</div>
    </div>
    `;
    containerMovements.insertAdjacentHTML(`afterbegin`, html);
  });
};

// Display Balance ////////////////////////////////////////////////////////////////////////////////
const calcDisplayBalance = function (acc) {
  acc.balance = acc.movements.reduce((acc, mov) => acc + mov, 0);
  labelBalance.textContent = `${acc.balance} EUR`;
};

// Display Summary ////////////////////////////////////////////////////////////////////////////////
const calcDisplaySummary = function (acc) {
  const incomes = acc.movements
    .filter((mov) => mov > 0)
    .reduce((acc, mov) => acc + mov, 0);
  labelSumIn.textContent = `${incomes} EUR`;

  const out = acc.movements
    .filter((mov) => mov < 0)
    .reduce((acc, mov) => acc + mov, 0);
  labelSumOut.textContent = `${Math.abs(out)} EUR`;

  const interest = acc.movements
    .filter((mov) => mov > 0)
    .map((deposit) => (deposit * acc.interestRate) / 100)
    .filter((int) => int >= 1)
    .reduce((acc, int) => acc + int, 0);
  labelSumInterest.textContent = `${interest}`;
};

// Convert User to Username = Initials ////////////////////////////////////////////////////////////
const createUsernames = function (accs) {
  accs.forEach(function (acc) {
    acc.username = acc.owner
      .toLowerCase()
      .split(` `)
      .map((name) => name[0])
      .join(``);
  });
};
createUsernames(accounts);

// Update UI //////////////////////////////////////////////////////////////////////////////////////
const updateUI = function (acc) {
  // Display Movements
  displayMovements(acc.movements);
  // Display Balance
  calcDisplayBalance(acc);
  // Display Summary
  calcDisplaySummary(acc);
};

// Login Function /////////////////////////////////////////////////////////////////////////////////
let currentAccount;
btnLogin.addEventListener(`click`, function (event) {
  // Prevent Form from Submitting
  event.preventDefault();
  currentAccount = accounts.find(
    (acc) => acc.username === inputLoginUsername.value
  );
  // Current Account Exist ? Symbol
  if (currentAccount?.pin === Number(inputLoginPin.value)) {
    // Display UI and Welcome Message
    labelWelcome.textContent = `Welcome Back ${
      currentAccount.owner.split(` `)[0]
    }`;
    containerApp.style.opacity = 1;
    // Clear Input Fields
    inputLoginUsername.value = ``;
    inputLoginPin.value = ``;
    inputLoginPin.blur();
    // Update UI
    updateUI(currentAccount);
  }
});

// Transfer Function //////////////////////////////////////////////////////////////////////////////

btnTransfer.addEventListener(`click`, function (event) {
  event.preventDefault();
  const amount = Number(inputTransferAmount.value);
  const receiverAcc = accounts.find(
    (acc) => acc.username === inputTransferTo.value
  );
  // Clear Input
  inputTransferAmount.value = inputTransferTo.value = ``;
  if (
    amount > 0 &&
    receiverAcc &&
    currentAccount.balance >= amount &&
    receiverAcc?.username !== currentAccount.username
  ) {
    // Doing the Transfer
    currentAccount.movements.push(-amount);
    receiverAcc.movements.push(amount);
    // Update UI
    updateUI(currentAccount);
  }
});

// Request Loan ///////////////////////////////////////////////////////////////////////////////////

btnLoan.addEventListener(`click`, function (event) {
  event.preventDefault();
  const amount = Number(inputLoanAmount.value);

  if (
    amount > 0 &&
    currentAccount.movements.some((mov) => mov >= amount * 0.1)
  ) {
    // Add movement
    currentAccount.movements.push(amount);

    // Update UI
    updateUI(currentAccount);
  }
  inputLoanAmount = ``;
});

// Close Account Function /////////////////////////////////////////////////////////////////////////

btnClose.addEventListener(`click`, function (event) {
  event.preventDefault();

  if (
    currentAccount.username === inputCloseUsername.value &&
    currentAccount.pin === Number(inputClosePin.value)
  ) {
    const index = accounts.findIndex(
      (acc) => acc.username === currentAccount.username
    );
    // Delete Account
    accounts.splice(index, 1);

    // Hide UI
    containerApp.style.opacity = 0;
  }
  // Clear UI
  inputCloseUsername.value = inputClosePin.value = ``;
});

// Sort Function //////////////////////////////////////////////////////////////////////////////////
let sorted = false;
btnSort.addEventListener(`click`, function (event) {
  event.preventDefault();
  displayMovements(currentAccount.movements, !sorted);
  sorted = !sorted;
});

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES

// const currencies = new Map([
//   ['USD', 'United States dollar'],
//   ['EUR', 'Euro'],
//   ['GBP', 'Pound sterling'],
// ]);

// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

/////////////////////////////////////////////////

// Array Methods //////////////////////////////////////////////////////////////////////////////////////////////////////

// let arr = [`a`, `b`, `c`, `d`, `e`];

// Slice - Create New Array//////////////////////
// console.log(arr.slice(2));
// console.log(arr.slice(2, 4));
// console.log(arr.slice(-2));
// console.log(arr.slice(-1));
// console.log(arr.slice(1, -2));

// Same Result
// console.log(arr.slice());
// console.log([...arr]);

// Splice - Delete From Original Arr/////////////
// console.log(arr.splice(2));

// Remove Last Element
// arr.splice(-1)
// arr.splice(1, 2);
// console.log(arr);

// Reverse - Change Original Array///////////////
// arr = [`a`, `b`, `c`, `d`, `e`];
// const arr2 = [`j`, `i`, `h`, `g`, `f`];
// console.log(arr2.reverse());

// Concat - Create New Array/////////////////////
// const letters = arr.concat(arr2);
// console.log(letters);
// Same Result
// console.log(...arr, ...arr2);

// Join//////////////////////////////////////////
// console.log(letters.join(` - `));

// AT Method //////////////////////////////////////////////////////////////////////////////////////////////////////////

// const arr = [23, 11, 64];
// console.log(arr[0]);
// console.log(arr.at(0));

// Get last elements
// console.log(arr[arr.length - 1]);
// console.log(arr.slice(-1)[0]);
// Easier
// console.log(arr.at(-1));

// Work on String
// console.log(`jonas`.at(0));
// console.log(`jonas`.at(-1));

// For Each Loop //////////////////////////////////////////////////////////////////////////////////////////////////////

// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

// For Lopp
// for (const [i, movement] of movements.entries()){
// if(movement > 0) {
// console.log(`Movement ${i +1}: You deposited ${movement}`);
// } else {
//  console.log(`Movement ${i +1}: You withdrew ${Math.abs(movement)}`);
// }
// }

// For Each Loop
// movements.forEach(function(mov, i, arr) {
//   if(mov > 0) {
//   console.log(`Movement ${i +1}: You deposited ${mov}`);
//   } else {
//   console.log(`Movement ${i +1}: You withdrew ${Math.abs(mov)}`);
// }
// })

// 0: function(200)
// 1: function(450)
// 2: function(400)
// ...

// For Each on Maps and Sets

// const currencies = new Map([
//   ['USD', 'United States dollar'],
//   ['EUR', 'Euro'],
//   ['GBP', 'Pound sterling'],
// ]);

// currencies.forEach(function(value, key, map) {
//   console.log(`${key}: ${value}`)
// });

// Set
// const currenciesUnique = new Set([`USD`, `GBP`, `USD`, `EUR`]);
// console.log(currenciesUnique);

// currenciesUnique.forEach(function(value, _, set) {
//   console.log(`${value}: ${value}`)
// });

// Challenge #1 && #2//////////////////////////////////////////////////////////////////////////////////////////////////

// const checkDogs = function (dogsJulia, dogsKate) {
//   const dogsJuliaCorrected = dogsJulia.slice();
//   dogsJuliaCorrected.splice(0, 1);
//   dogsJuliaCorrected.splice(-2);
//   console.log(dogsJuliaCorrected);
//   const arr = dogsJuliaCorrected.concat(dogsKate);
//   console.log(arr);

//   arr.forEach(function (value, i) {
//     if (value >= 3) {
//       console.log(`Dog number ${i+1} is and adult, and is ${value} years old`)
//     } else {
//       console.log(`Dog number ${i+1} is still a puppy`)
//     }
//   })
// };

// checkDogs( [3, 5, 2, 12, 7],  [4, 1, 15, 8, 3]);

// const calcAverageHumanAge = function(ages){
//   const dogAgeToHumanAge = ages.map(function(age) {
//     if (age <= 2) return age * 2;
//     else if (age > 2) return 16 + age * 4;
//   })
//   const above18 = dogAgeToHumanAge.filter(function(age){
//     return age >= 18;
//   })

//   const above18Sum = above18.reduce(function(acc, age){
//     return acc + age;
//   })

//   const averageHuman = above18Sum / above18.length;
//   console.log(averageHuman);
// };

// calcAverageHumanAge([5, 2, 4, 1, 15, 8, 3])
// calcAverageHumanAge([16, 6, 10, 5, 6, 1, 4])

// calcAverageHumanAge([5, 2, 4, 1, 15, 8, 3]);
// calcAverageHumanAge([16, 6, 10, 5, 6, 1, 4]);

// Challenge #3

// const calcAverageHumanAge = ages => ages.map(age =>(age <= 2 ? 2 * age : 16 + age *4)).filter(age => age >= 18).reduce((acc, age, i, arr) => acc + age / arr.length, 0);

// const avg1 = calcAverageHumanAge([5, 2, 4, 1, 15, 8, 3]);
// const avg2 = calcAverageHumanAge([16, 6, 10, 5, 6, 1, 4]);

// console.log(avg1, avg2);
// Map Method//////////////////////////////////////////////////////////////////////////////////////////////////////////

// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

// const eurToUsd = 1.1;

// const movementsUSD = movements.map(function(mov) {
//   return mov * eurToUsd;
// })

// Arrow
// const movementsUSD = movements.map(mov => mov * eurToUsd);

// console.log(movements);
// console.log(movementsUSD);

// Alt For Loop
// const movementsUSDfor = [];
// for(const mov of movements) movementsUSDfor.push(mov * eurToUsd);
//   console.log(movementsUSDfor)

// Example
// const movementsDescription = movements.map((mov, i) =>
//   `Movement ${i +1}: You ${mov > 0 ? `deposited` : `withdrew`} ${Math.abs(mov)}`
// )
// console.log(movementsDescription);

// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

// Filter Method///////////////////////////////////////////////////////////////////////////////////////////////////////
// const deposits = movements.filter(function(mov, i) {
//   return mov > 0;
// })
// console.log(movements);
// console.log(deposits);

// const withdrawals = movements.filter(function(mov, i) {
//   return mov < 0;
// })

// console.log(withdrawals);

// For loop
// const depositsFor = [];
// for (const mov of movements) if (mov > 0) depositsFor.push(mov)
//   console.log(depositsFor);

// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

// console.log(movements);

// accumulator -> SNOWBALL
// const balance = movements.reduce(function(acc, cur, i, arr) {
//   return acc + cur;
// }, 0);
// console.log(balance);

// For Loop
// let balance2 = 0;
// for (const mov of movements) balance2 += mov;
//   console.log(balance2)

// Maximum value
// const max = movements.reduce((acc, mov) => {
//   if (acc > mov)
//     return acc;
//   else return mov;
// }, movements[0])

// console.log(max);

// Chaining ///////////////////////////////////////////////////////////////////////////////////////////////////////////

// const eurToUsd = 1.1;
// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
// const totalDepositsUSD = movements.filter(mov => mov > 0).map(mov => mov * eurToUsd).reduce((acc, mov) => acc + mov, 0)
// console.log(totalDepositsUSD);

// Find Method/////////////////////////////////////////////////////////////////////////////////////////////////////////

// const firstWithdrawal = movements.find(mov => mov < 0);
// console.log(movements);
// console.log(firstWithdrawal);

// console.log(accounts);
// const account = accounts.find(acc => acc.owner === `Jessica Davis`)
// console.log(account);

// findLast and findLastIndex  ////////////////////////////////////////////////////////////////////////////////////////

// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

// const lastWithdrawal = movements.findLast(mov => mov < 0)
// // console.log(lastWithdrawal);

// const largestMovementIndex = movements.findLastIndex(mov => Math.abs(mov) > 1000);
// console.log(`Your lates large movement was ${movements.length - largestMovementIndex} movements ago`)

// Some Every /////////////////////////////////////////////////////////////////////////////////////////////////////////

// console.log(movements);
// Equality
// console.log(movements.includes(-130));

// SOME: Condition
// console.log(movements.some(mov => mov === -130));

// const anyDeposits = movements.some(mov => mov > 0)
// console.log(anyDeposits);

// EVERY: Condition

// console.log(movements.every(mov => mov > 0));
// console.log(account4.movements.every(mov => mov > 0));

// Separate callback

// const deposit = mov => mov > 0;
// console.log(movements.some(deposit));
// console.log(movements.every(deposit));
// console.log(movements.filter(deposit));

// Flat Map ///////////////////////////////////////////////////////////////////////////////////////////////////////////

// const arr = [[1, 2, 3], [4, 5, 6], 7, 8];
// console.log(arr.flat());

// const arrDeep = [[[1, 2], 3], [4, [5, 6], 7, 8]];
// console.log(arrDeep.flat(2));

// const accountMovements = accounts.map(acc => acc.movements);
// console.log(accountMovements);
// const allMovements = accountMovements.flat();
// console.log(allMovements);
// const overallBalance = allMovements.reduce((acc, mov) => acc + mov, 0);
// console.log(overallBalance);

// Chain
// const overallBalance = accounts.map(acc => acc.movements).flat().reduce((acc, mov) => acc + mov, 0);
// console.log(overallBalance);

// FlatMap
// const overallBalance = accounts.flatMap(acc => acc.movements).reduce((acc, mov) => acc + mov, 0);
// console.log(overallBalance);

// Coding Challenge #4 ////////////////////////////////////////////////////////////////////////////////////////////////

/*
This time, Julia and Kate are studying the activity levels of different dog breeds.

YOUR TASKS:
1. Store the the average weight of a "Husky" in a variable "huskyWeight"
2. Find the name of the only breed that likes both "running" and "fetch" ("dogBothActivities" variable)
3. Create an array "allActivities" of all the activities of all the dog breeds
4. Create an array "uniqueActivities" that contains only the unique activities (no activity repetitions). HINT: Use a technique with a special data structure that we studied a few sections ago.
5. Many dog breeds like to swim. What other activities do these dogs like? Store all the OTHER activities these breeds like to do, in a unique array called "swimmingAdjacent".
6. Do all the breeds have an average weight of 10kg or more? Log to the console whether "true" or "false".
7. Are there any breeds that are "active"? "Active" means that the dog has 3 or more activities. Log to the console whether "true" or "false".

BONUS: What's the average weight of the heaviest breed that likes to fetch? HINT: Use the "Math.max" method along with the ... operator.

TEST DATA:
*/

// const breeds = [
//   {
//     breed: 'German Shepherd',
//     averageWeight: 32,
//     activities: ['fetch', 'swimming'],
//   },
//   {
//     breed: 'Dalmatian',
//     averageWeight: 24,
//     activities: ['running', 'fetch', 'agility'],
//   },
//   {
//     breed: 'Labrador',
//     averageWeight: 28,
//     activities: ['swimming', 'fetch'],
//   },
//   {
//     breed: 'Beagle',
//     averageWeight: 12,
//     activities: ['digging', 'fetch'],
//   },
//   {
//     breed: 'Husky',
//     averageWeight: 26,
//     activities: ['running', 'agility', 'swimming'],
//   },
//   {
//     breed: 'Bulldog',
//     averageWeight: 36,
//     activities: ['sleeping'],
//   },
//   {
//     breed: 'Poodle',
//     averageWeight: 18,
//     activities: ['agility', 'fetch'],
//   },
// ];

// 1. Store the the average weight of a "Husky" in a variable "huskyWeight"
// const huskyWeight = breeds.find(dog => dog.breed === 'Husky').averageWeight;
// console.log(huskyWeight);

// 2. Find the name of the only breed that likes both "running" and "fetch" ("dogBothActivities" variable)
// const dogBothActivities = breeds.find(dog => dog.activities.includes(`running`) && dog.activities.includes(`fetch`)).breed;
// console.log(dogBothActivities);

// 3. Create an array "allActivities" of all the activities of all the dog breeds

// const allActivities = breeds.flatMap(dog => dog.activities);
// console.log(allActivities);

// 4. Create an array "uniqueActivities" that contains only the unique activities (no activity repetitions). HINT: Use a technique with a special data structure that we studied a few sections ago.

// const uniqueActivities = new Set (allActivities);
// console.log(uniqueActivities);

// 5. Many dog breeds like to swim. What other activities do these dogs like? Store all the OTHER activities these breeds like to do, in a unique array called "swimmingAdjacent".

// const arrActivities = [...uniqueActivities];
// console.log(arrActivities);

// const swimmingAdjacent = arrActivities.filter(arr => arr !== `swimming`);
// console.log(swimmingAdjacent);

// 6. Do all the breeds have an average weight of 10kg or more? Log to the console whether "true" or "false".

// const checkWeight = breeds.every(dog => dog.averageWeight >= 10);
// console.log(checkWeight);

// 7. Are there any breeds that are "active"? "Active" means that the dog has 3 or more activities. Log to the console whether "true" or "false".

// const isActiveBreed = breeds.some(dog => dog.activities.length >= 3);
// console.log(isActiveBreed); // Zwróci true, jeśli przynajmniej jedna rasa ma 3 lub więcej aktywności, false w przeciwnym razie

// BONUS: What's the average weight of the heaviest breed that likes to fetch? HINT: Use the "Math.max" method along with the ... operator.

// 1. Filtrujemy psy, które lubią "fetch"
// const breedsThatLikeFetch = breeds.filter(dog => dog.activities.includes('fetch'));

// 2. Znajdujemy wagę najcięższej rasy z tych, które lubią "fetch"
// const heaviestBreedWeight = Math.max(...breedsThatLikeFetch.map(dog => dog.averageWeight));
// console.log(heaviestBreedWeight);

// Sort ///////////////////////////////////////////////////////////////////////////////////////////////////////////////

// const owners = [`Jonas`, `Zach`, `Adam`, `Martha`];
// STRINGS - Sort Mutate Array and Sort Alfabetic
// console.log(owners.sort());
// console.log(owners);

// NUMBERS - Sort Convert Number to String and Sort Alfabetic
// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

// return < 0, A, B (keep order)
// return > 0, B, A (switch order)

// Ascending
// movements.sort((a, b) => {
//   if (a > b)
//     return 1;
//   if (a < b)
//     return -1;
// });
// Simple Solution /////
// movements.sort((a, b) => a - b);

// console.log(movements);

// Descending
// movements.sort((a, b) => {
//   if (a > b)
//     return -1;
//   if (a < b)
//     return 1;
// });
// Simple Solution /////
// movements.sort((a, b) => b - a);
// console.log(movements);

// Array Grouping /////////////////////////////////////////////////////////////////////////////////////////////////////

// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

// const groupedMovements = Object.groupBy(movements, movements => movements > 0 ? `deposits` : `withdrawals`);
// console.log(groupedMovements);

// const groupedByActivity = Object.groupBy(accounts, account => {
//   const movementCount = account.movements.length;
//   if(movementCount >= 8) return `very active`;
//   if(movementCount >= 4) return `active`;
//   if(movementCount >= 1) return `moderate`;
//   else return 'inactive';
// })
// console.log(groupedByActivity);

// const groupedAccounts = Object.groupBy(accounts, account => account.type);
// console.log(groupedAccounts);

// Creating and Filling Arrays ////////////////////////////////////////////////////////////////////
// const arr = [1, 2, 3, 4, 5, 6, 7];

// Empty Arrays + Fill Method
// const x = new Array(7);
// console.log(x);

// x.fill(1);
// x.fill(1, 3, 5);
// console.log(x);

// arr.fill(23, 2, 6);
// console.log(arr);

// Array.from
// const y = Array.from({length: 7}, () => 1);
// console.log(y);

// const z = Array.from({length: 7}, (_, i) => i + 1);
// console.log(z)

// labelBalance.addEventListener(`click`, function(){
//   const movementsUI = Array.from(document.querySelectorAll(`.movements__value`));
//   console.log(movementsUI.map(el => Number(el.textContent.replace(` EUR`, ``))));
// })

// Non Destructive Alternatives ///////////////////////////////////////////////////////////////////
// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

// console.log(movements);
// const reversedMov = movements.toReversed();
// console.log(reversedMov);
// console.log(movements);

// toSorted (sort), toSpliced (splice)
// movements[1] = 2000;
// const newMovements = movements.with(1, 2000);
// console.log(movements);
// console.log(newMovements);

// Array Methods Practive /////////////////////////////////////////////////////////////////////////

// 1.
// const bankDepositSum = accounts.flatMap(acc => acc.movements).filter(mov => mov > 0).reduce((acc, cur) => acc + cur, 0);
// console.log(bankDepositSum);

// 2.
// const numDeposits1000 = accounts.flatMap(acc => acc.movements).filter(mov => mov >= 1000).length;
// console.log(numDeposits1000);

// 2. Other Solution with Reduce

// const numDeposits1000 = accounts.flatMap(acc => acc.movements).reduce((count, cur) => cur >= 1000 ? count + 1: count ,0);
// console.log(numDeposits1000);

// 3.
// const {deposits, withdrawals} = accounts.flatMap(acc => acc.movements).reduce((sums, cur) => {
//   // cur > 0 ? sums.deposits += cur : sums.withdrawals += cur;
//   sums[cur > 0 ? `deposits` : `withdrawals`] += cur;
//   return sums;
// }, {deposits: 0, withdrawals: 0})

// console.log(deposits, withdrawals);

// 4.
// This is a nice title -> This Is a Nice Title
// const convertTitleCase = function(title) {
//   const capitalize = str => str[0].toUpperCase() + str.slice(1)
//   const exceptions = [`a`, `an`, `and`, `the`, `but`, `or`, `on`, `in`, `with`];
//   const titleCase = title.toLowerCase().split(` `).map(word => exceptions.includes(word) ? word : capitalize(word)).join(` `);
//   return capitalize(titleCase);
// }

// console.log(convertTitleCase(`This is a nice title`));
// console.log(convertTitleCase(`This is a LONG title but not too long`));
// console.log(convertTitleCase(`and here is another title with an EXAMPLE`));

// Challenge #5 ///////////////////////////////////////////////////////////////////////////////////

///////////////////////////////////////
// Coding Challenge #5

/* 
Julia and Kate are still studying dogs. This time they are want to figure out if the dogs in their are eating too much or too little food.

- Formula for calculating recommended food portion: recommendedFood = weight ** 0.75 * 28. (The result is in grams of food, and the weight needs to be in kg)
- Eating too much means the dog's current food portion is larger than the recommended portion, and eating too little is the opposite.
- Eating an okay amount means the dog's current food portion is within a range 10% above and below the recommended portion (see hint).

YOUR TASKS:
1. Loop over the array containing dog objects, and for each dog, calculate the recommended food portion (recFood) and add it to the object as a new property. Do NOT create a new array, simply loop over the array (We never did this before, so think about how you can do this without creating a new array).
2. Find Sarah's dog and log to the console whether it's eating too much or too little. HINT: Some dogs have multiple users, so you first need to find Sarah in the owners array, and so this one is a bit tricky (on purpose) 🤓
3. Create an array containing all owners of dogs who eat too much (ownersTooMuch) and an array with all owners of dogs who eat too little (ownersTooLittle).
4. Log a string to the console for each array created in 3., like this: "Matilda and Alice and Bob's dogs eat too much!" and "Sarah and John and Michael's dogs eat too little!"
5. Log to the console whether there is ANY dog eating EXACTLY the amount of food that is recommended (just true or false)
6. Log to the console whether ALL of the dogs are eating an OKAY amount of food (just true or false)
7. Create an array containing the dogs that are eating an OKAY amount of food (try to reuse the condition used in 6.)
8. Group the dogs into the following 3 groups: 'exact', 'too-much' and 'too-little', based on whether they are eating too much, too little or the exact amount of food, based on the recommended food portion.
9. Group the dogs by the number of owners they have
10. Sort the dogs array by recommended food portion in an ascending order. Make sure to NOT mutate the original array!

HINT 1: Use many different tools to solve these challenges, you can use the summary lecture to choose between them 😉
HINT 2: Being within a range 10% above and below the recommended portion means: current > (recommended * 0.90) && current < (recommended * 1.10). Basically, the current portion should be between 90% and 110% of the recommended portion.

TEST DATA:
const dogs = [
  { weight: 22, curFood: 250, owners: ['Alice', 'Bob'] },
  { weight: 8, curFood: 200, owners: ['Matilda'] },
  { weight: 13, curFood: 275, owners: ['Sarah', 'John', 'Leo'] },
  { weight: 18, curFood: 244, owners: ['Joe'] },
  { weight: 32, curFood: 340, owners: ['Michael'] },
];

// GOOD LUCK 😀
// */

// const dogs = [
//   { weight: 22, curFood: 250, owners: ["Alice", "Bob"] },
//   { weight: 8, curFood: 200, owners: ["Matilda"] },
//   { weight: 13, curFood: 275, owners: ["Sarah", "John", "Leo"] },
//   { weight: 18, curFood: 244, owners: ["Joe"] },
//   { weight: 32, curFood: 340, owners: ["Michael"] },
// ];

// 1. Loop over the array containing dog objects, and for each dog, calculate the recommended food portion (recFood) and add it to the object as a new property. Do NOT create a new array, simply loop over the array (We never did this before, so think about how you can do this without creating a new array).

// dogs.forEach(function (dog, i) {
//   const recFood = Math.floor(dog.weight ** 0.75 * 28);
//   dogs[i].recFood = recFood;
// });
// 2. Find Sarah's dog and log to the console whether it's eating too much or too little. HINT: Some dogs have multiple users, so you first need to find Sarah in the owners array, and so this one is a bit tricky (on purpose) 🤓
// dogs.forEach(function (dog, i, arr) {
//   if (dog.owners.includes(`Sarah`)) {
//     if (dog.curFood > dog.recFood) {
//       console.log(
//         `Sarah's dog eats too much. Recommended food is ${dog.recFood}, but he's eating ${dog.curFood}.`
//       );
//     } else if (dog.curFood < dog.recFood) {
//       console.log(
//         `Sarah's dog eat too little. Recommended food is ${dog.recFood}, but he's eating ${dog.curFood}.`
//       );
//     } else {
//       console.log(
//         `Sarah's dog eat perfect. Recommended food is ${dog.recFood}, and he's eating ${dog.curFood}.`
//       );
//     }
//   }
// });

// 3. Create an array containing all owners of dogs who eat too much (ownersTooMuch) and an array with all owners of dogs who eat too little (ownersTooLittle).
// const ownersTooMuch = [];
// const ownersTooLittle = [];

// dogs.forEach(function (dog, i, arr) {
//   if (dog.curFood > dog.recFood) {
//     ownersTooMuch.push(...dog.owners);
//   } else {
//     ownersTooLittle.push(...dog.owners);
//   }
// });

// 4. Log a string to the console for each array created in 3., like this: "Matilda and Alice and Bob's dogs eat too much!" and "Sarah and John and Michael's dogs eat too little!"

// console.log(`${ownersTooMuch.join(` and `)}'s dogs eat too much!'`);
// console.log(`${ownersTooLittle.join(` and `)}'s dogs eat too little!'`);

// 5. Log to the console whether there is ANY dog eating EXACTLY the amount of food that is recommended (just true or false)

// const equalFood = dogs.some((dog) => dog.curFood === dog.recFood);
// console.log(equalFood);

// 6. Log to the console whether ALL of the dogs are eating an OKAY amount of food (just true or false)
// const okayFood = dogs.every(
//   (dog) => dogs.curFood > dog.recFood * 0.9 && dogs.curFood < dog.recFood * 1.1
// );
// console.log(okayFood);

// 7. Create an array containing the dogs that are eating an OKAY amount of food (try to reuse the condition used in 6.)
// const dogsOkayFood = [];

// dogs.forEach(function (dog, i, arr) {
//   if (dog.curFood > dog.recFood * 0.9 && dog.curFood < dog.recFood * 1.1) {
//     dogsOkayFood.push(dog);
//   }
// });
// console.log(dogsOkayFood);

// 8. Group the dogs into the following 3 groups: 'exact', 'too-much' and 'too-little', based on whether they are eating too much, too little or the exact amount of food, based on the recommended food portion.

// const groupedDogs = Object.groupBy(dogs, (dog) => {
//   if (dog.curFood > dog.recFood) return `too-much`;
//   if (dog.curFood < dog.recFood) return `too-little`;
//   else return `exact`;
// });
// console.log(groupedDogs);

// 9. Group the dogs by the number of owners they have
// const groupByOwners = Object.groupBy(dogs, (dog) => dog.owners.length);
// console.log(groupByOwners);

// 10. Sort the dogs array by recommended food portion in an ascending order. Make sure to NOT mutate the original array!
// const ascendingOrder = dogs.toSorted((a, b) => a.recFood - b.recFood);
// console.log(ascendingOrder);
