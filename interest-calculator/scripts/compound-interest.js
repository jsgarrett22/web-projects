// Calculates interest compounding given the following formula:
// A (accrued amount (principal + interest)) = P (Principal) (1 + (rate / frequency per time period) ^ frequency per time period * time
// Given:
// P: 100000
// R: .05
// Frequency: 1 (annual application of interest)
// Time: 7 years
// A = 100000 (1 + .05 / 1)^1*7

const principal = 2000;
const time = 5;
const rate = convertRateToPercentage(8);
const n = 12;

const calculateCompoundInterest = (p, t, r, n) => {
    const amount = p * (Math.pow((1 + r / n), (n * t)));
    const interest = amount - p;
    return interest;
};

console.log(calculateCompoundInterest(principal, time, rate, n));

/**
 * Converts a whole number into its percentage equivalent (decimal form)
 */
 const convertRateToPercentage = rate => rate / 100;