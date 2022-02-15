// Calculates the simple interest given the following formula:
// Principal (p) x Rate (r) x Time (t)
$(function () {
    'use strict';

    $('#row-two').hide();
    
    // SIMPLE INTEREST CALCULATE
    $('#simple-calculateBtn').click((e) => {

        e.preventDefault();
        let principal = parseInt($('#simple-principal').val());
        let rate = parseInt($('#simple-rate').val());
        let time = parseInt($('#simple-time').val());
        let interest = 0;
        let total = 0;
        
        if ((!isNaN(principal)) && (!isNaN(rate)) && (!isNaN(time))) {
            
            resetDisplay();
            
            if (principal > 0) {
                $('#row-two').show();
                $('#principal-validation-display').addClass('valid').text('Validated').show();
                if (rate > 0) {
                    $('#rate-validation-display').addClass('valid').text('Validated').show();
                    if (time > 0) {
                        $('#time-validation-display').addClass('valid').text('Validated').show();
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
                        // update the #simple-display element with the above alert
                        // update the #simple-display element 'hidden' attribute to false so that it shows up on page
                        // mark time form element with 'is-valid'
                    } else {
                        $('#time-validation-display').addClass('invalid').text('Invalid').show();
                    }
                } else {
                    $('#rate-validation-display').addClass('invalid').text('Invalid').show();
                }
            } else {
                $('#row-two').show();
                $('#principal-validation-display').addClass('invalid').text('Invalid').show();
            }
        } else {
            $('#row-two').show();
            $('#principal-validation-display').addClass('invalid').text('Invalid').show();
            $('#rate-validation-display').addClass('invalid').text('Invalid').show();
            $('#time-validation-display').addClass('invalid').text('Invalid').show();
        }
    });

    // SIMPLE INTEREST RESET
    $('#simple-resetBtn').click((e) => {
        resetDisplay();
        $('#simple-display').empty();
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

/**
 * Utility function that resets validation elements and hides from view
 */
const resetDisplay = () => {
    $('#row-two').hide();                                                  
    $('#principal-validation-display').attr('class', 'col-md-4');
    $('#rate-validation-display').attr('class', 'col-md-3');
    $('#time-validation-display').attr('class', 'col-md-3');
};
