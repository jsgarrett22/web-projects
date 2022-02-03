// Calculates the simple interest given the following formula:
// Principal (p) x Rate (r) x Time (t)
$(function () {
    'use strict'

    $('#row-two').hide();
    
    // When simple calculate button is clicked, return the interest earned on the account, given the terms.
    $('#simple-calculateBtn').click(() =>
    {
        let principal = parseInt($('#principal').val());
        let rate = parseInt($('#rate').val());
        let time = parseInt($('#time').val());
        let interest = 0;
        let total = 0;
        
        if ((!isNaN(principal)) && (!isNaN(rate)) && (!isNaN(time))) {
        // all fields have a value
            if (principal > 0) {
                alert("Principal validated.");
                // mark principal form element with 'is-valid'
                if (rate > 0) {
                    alert("Rate validated.");
                    // mark rate form element with 'is-valid'
                    if (time > 0) {
                        alert("Time validated.");

                        if (rate > 0) {
                            rate = convertRateToPercentage(rate);
                            interest = calculateSimpleInterest(principal, rate, time);
                            total = principal + interest;
                        } else {
                            interest = calculateSimpleInterest(principal, rate, time);
                            total = principal + interest;
                        }
                        $('#simple-display').html(`
                            <p><strong>Starting Account Value:</strong>$${principal}</p>
                            <p><strong>Earned Interest:</strong>$${interest}</p>
                            <p><strong>Ending Account Value:</strong>$${total}</p>
                        `);
                        return false;
                        // update the #simple-display element with the above alert
                        // update the #simple-display element 'hidden' attribute to false so that it shows up on page
                        // mark time form element with 'is-valid'
                    } else {
                        alert("Time must be greater than zero.");
                        // mark time rate form element with 'is-invalid'
                    }
                } else {
                    alert("Rate must be greater than zero.");
                    // mark rate form element with 'is-invalid'
                }
            } else {
                alert("Principal must be greater than zero.");
                $('#row-two #principal-validation-display').show();
                // mark principal form element with 'is-invalid'
            }
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
