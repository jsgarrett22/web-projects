// Calculates the simple interest given the following formula:
// Principal (p) x Rate (r) x Time (t)
$(function () {
    'use strict'
    
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
            alert(`Account Value: $${total} with $${interest} in earned interest.`);
            // update the #simple-display element with the above alert
            // update the #simple-display element 'hidden' attribute to false so that it shows up on page
        } else {
            alert("Please fill out all fields.");
            // Add dynamic validation using the bootstrap classes:
            // <div class="is-valid">Valid entry.</div>
            // <div class="is-invalid">Please enter a number.</div>
            // If a field is missing a value or is zero, then it is invalid
            // Otherwise, if the field contains a number greater than zero, then it is valid
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

// <div class="is-valid">Valid entry.</div>
// <div class="is-invalid">Please enter a number.</div>
