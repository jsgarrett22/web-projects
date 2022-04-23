// All valid credit card numbers
const valid1 = [4, 5, 3, 9, 6, 7, 7, 9, 0, 8, 0, 1, 6, 8, 0, 8];
const valid2 = [5, 5, 3, 5, 7, 6, 6, 7, 6, 8, 7, 5, 1, 4, 3, 9];
const valid3 = [3, 7, 1, 6, 1, 2, 0, 1, 9, 9, 8, 5, 2, 3, 6];
const valid4 = [6, 0, 1, 1, 1, 4, 4, 3, 4, 0, 6, 8, 2, 9, 0, 5];
const valid5 = [4, 5, 3, 9, 4, 0, 4, 9, 6, 7, 8, 6, 9, 6, 6, 6];

// All invalid credit card numbers
const invalid1 = [4, 5, 3, 2, 7, 7, 8, 7, 7, 1, 0, 9, 1, 7, 9, 5];
const invalid2 = [5, 7, 9, 5, 5, 9, 3, 3, 9, 2, 1, 3, 4, 6, 4, 3];
const invalid3 = [3, 7, 5, 7, 9, 6, 0, 8, 4, 4, 5, 9, 9, 1, 4];
const invalid4 = [6, 0, 1, 1, 1, 2, 7, 9, 6, 1, 7, 7, 7, 9, 3, 5];
const invalid5 = [5, 3, 8, 2, 0, 1, 9, 7, 7, 2, 8, 8, 3, 8, 5, 4];

// Can be either valid or invalid
const mystery1 = [3, 4, 4, 8, 0, 1, 9, 6, 8, 3, 0, 5, 4, 1, 4];
const mystery2 = [5, 4, 6, 6, 1, 0, 0, 8, 6, 1, 6, 2, 0, 2, 3, 9];
const mystery3 = [6, 0, 1, 1, 3, 7, 7, 0, 2, 0, 9, 6, 2, 6, 5, 6, 2, 0, 3];
const mystery4 = [4, 9, 2, 9, 8, 7, 7, 1, 6, 9, 2, 1, 7, 0, 9, 3];
const mystery5 = [4, 9, 1, 3, 5, 4, 0, 4, 6, 3, 0, 7, 2, 5, 2, 3];

const test = [7, 9, 9, 2, 7, 3, 9, 8, 7, 1, 3];

// An array of all the arrays above
const batch = [valid1, valid2, valid3, valid4, valid5, invalid1, invalid2, invalid3, invalid4, invalid5, mystery1, mystery2, mystery3, mystery4, mystery5];

/**
 * Validates whether an array of numbers is valid or invalid based upon Luhn's Algorithm
 * @param {*} array array of numbers to validate
 * @returns whether the given number is valid or invalid
 */
const validateCred = (array) => {
    const tempArray = array.slice().reverse();
    const givenCheckDigit = tempArray[0];
    let isValid = false;

  for (let i = 0; i < tempArray.length; i++) {
    if (i % 2 !== 0) {                                  // every odd index minus the check digit (last index)
        tempArray[i] *= 2;                             // double every odd indexed digit                                                                    
    }
    if (tempArray[i] > 9) {                           
        tempArray[i] -= 9;                              // if this number is greater than 9, subtract 9 from its value
    }
  }

  const sumDigit = tempArray.reduce(function(previousValue, currentValue) {
    return previousValue + currentValue;
  }, 0);


  isValid = sumDigit % 10 === 0 ? true : false;

    console.log(`\tCredit Card : ${array}
    \tGiven CheckDigit : ${givenCheckDigit}
    \tEnd -> TempArray : ${tempArray}
    \tSumDigit : ${sumDigit} % 10 = ${sumDigit % 10}
    \tisValid : ${sumDigit % 10 === 0 ? true : false}
    `);

    return isValid;
};

/**
 * Takes in a nested array of numbers and returns the ones that are invalid based on Luhn's Alogorithm
 * @param {*} array of nested numbers
 * @returns a nested array of invalid numbers
 */
function findInvalidCards (array) {
  const invalidCards = array.filter(number => {
    return validateCred(number) === false;
  });

  invalidCards.forEach(number => {
    console.log(number);
  });

  return invalidCards;
}

findInvalidCards(batch);