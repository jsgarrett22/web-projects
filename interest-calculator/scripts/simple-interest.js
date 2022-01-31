// Calculates the simple interest given the following formula:
// Principal (p) x Rate (r) x Time (t)
$(function () {
    // rate text input

    // When simple calculate button is clicked, return the interest earned on the account, given the terms.
    $('#simple-calculateBtn').click(() =>
    {
        let principal = parseInt($('#principal').val());
        let rate = parseInt($('#rate').val());
        let time = parseInt($('#time').val());
        let interest = 0;
        let total = 0;

        if ((principal != 0) && (rate != 0) && (time != 0)) {
            if (rate > 0) {
                rate = convertRateToPercentage(rate);
                interest = calculateSimpleInterest(principal, rate, time);
                total = principal + interest;
            } else {
                interest = calculateSimpleInterest(principal, rate, time);
                total = principal + interest;
            }
            alert(`Total: ${total}`);
        } else {
            alert("At least one field wasn't filled out. Please fill out all fields in order to calculate.");
        }
    });
});

/**
 * Converts a whole number into its percentage equivalent (decimal form)
 */
const convertRateToPercentage = rate => rate / 100;

/**
 * Calculates and returns the simple interest earned given a principal, specific rate, and frequency of interest (time)
 */
const calculateSimpleInterest = (principal, rate, time) => principal * rate * time;

/**
 * Utility function that returns the data type of a variable that can be used within console.log() or a template string
 */
const type = variable => typeof variable;
