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
};

const account2 = {
  owner: "Jessica Davis",
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: "Steven Thomas Williams",
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: "Sarah Smith",
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
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

// Display Movements
const displayMovements = function (movements) {
  containerMovements.innerHTML = "";

  movements.forEach(function (mov, i) {
    const type = mov > 0 ? `deposit` : `withdrawal`;

    const html = `
    <div class="movements__row">
        <div class="movements__type movements__type--${type}">${
      i + 1
    } ${type}</div>
        <div class="movements__value">=${mov}</div>
    </div>
    `;
    containerMovements.insertAdjacentHTML(`afterbegin`, html);
  });
};
displayMovements(account1.movements);

// Display Balance
const calcDisplayBalance = function (movements) {
  const balance = movements.reduce((acc, mov) => acc + mov, 0);
  labelBalance.textContent = `${balance} EUR`;
};

calcDisplayBalance(account1.movements);

// Convert User to Username = Initials
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

// // For Lopp
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

// Challenge #1 && #2

const checkDogs = function (dogsJulia, dogsKate) {
  const dogsJuliaCorrected = dogsJulia.slice();
  dogsJuliaCorrected.splice(0, 1);
  dogsJuliaCorrected.splice(-2);
  console.log(dogsJuliaCorrected);
  const arr = dogsJuliaCorrected.concat(dogsKate);
  console.log(arr);

  arr.forEach(function (value, i) {
    if (value >= 3) {
      console.log(
        `Dog number ${i + 1} is and adult, and is ${value} years old`
      );
    } else {
      console.log(`Dog number ${i + 1} is still a puppy`);
    }
  });
};

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

// Chat Gpt Solution Easier

// const calcAverageHumanAge = function (ages) {
//   const averageHuman = ages
//     .map(age => (age <= 2 ? age * 2 : 16 + age * 4)) // Przelicz wiek psa na ludzki
//     .filter(age => age >= 18) // Filtruj wartości ≥ 18
//     .reduce((acc, age, _, arr) => acc + age / arr.length, 0); // Oblicz średnią
//   console.log(averageHuman);
// };

// calcAverageHumanAge([5, 2, 4, 1, 15, 8, 3]);
// calcAverageHumanAge([16, 6, 10, 5, 6, 1, 4]);
// Map Method//////////////////////////////////////////////////////////////////////////////////////////////////////////

// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

// const eurToUsd = 1.1;

// // const movementsUSD = movements.map(function(mov) {
// //   return mov * eurToUsd;
// // })

// // Arrow
// const movementsUSD = movements.map(mov => mov * eurToUsd);

// console.log(movements);
// console.log(movementsUSD);

// // Alt For Loop
// const movementsUSDfor = [];
// for(const mov of movements) movementsUSDfor.push(mov * eurToUsd);
//   console.log(movementsUSDfor)

// // Example
// const movementsDescription = movements.map((mov, i) =>
//   `Movement ${i +1}: You ${mov > 0 ? `deposited` : `withdrew`} ${Math.abs(mov)}`
// )
// console.log(movementsDescription);

// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

// // Filter Method///////////////////////////////////////////////////////////////////////////////////////////////////////
// const deposits = movements.filter(function(mov, i) {
//   return mov > 0;
// })
// console.log(movements);
// console.log(deposits);

// const withdrawals = movements.filter(function(mov, i) {
//   return mov < 0;
// })

// console.log(withdrawals);

// // For loop
// const depositsFor = [];
// for (const mov of movements) if (mov > 0) depositsFor.push(mov)
//   console.log(depositsFor);

// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

// console.log(movements);

// // accumulator -> SNOWBALL
// const balance = movements.reduce(function(acc, cur, i, arr) {
//   return acc + cur;
// }, 0);
// console.log(balance);

// // For Loop
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
