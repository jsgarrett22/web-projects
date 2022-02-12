// implementing user object that will store a specific user's data for future use
// (storing, retrieving, reporting)
const user = {
    _name: 'John Doe',
    _accounts: [],
    get name() {
        return this._name;
    },
    get accounts() {
        return this._accounts;
    },
    /**
     * @param {string} newName
     */
    set name(newName) {
        if (typeof newName === 'string') {
            this._name = newName;
        } else {
            console.log('Type Error: Name must be a string.');
        }
    },
    numOfAccounts() {
        if (this.accounts.length) {
            return this.accounts.length;
        } else {
            return "This user currently doesn't have an account";
        }
    },
    /**
     * @param {string} name 
     * @param {number} amount
     */
    addAccount(name, amount) {
        const newAccount = {
            name,
            amount
        };
        this.accounts.push(newAccount);
    }
};

// TEST: add different accounts for the user
user.addAccount('Savings', 50000);
user.addAccount('Checking', 20000);
user.addAccount('Brokerage2', 88550);

user.accounts.forEach(element => {
    console.log(`
        Name: ${element.name}
        Value: ${element.amount}
    `);
});


// Calculates the simple interest given the following formula:
// Principal (p) x Rate (r) x Time (t)
$(function () {
    'use strict'

    $('#row-two').hide();
    
    // When simple calculate button is clicked, return the interest earned on the account, given the terms.
    $('#simple-calculateBtn').click((e) =>
    {
        e.preventDefault();
        let principal = parseInt($('#principal').val());
        let rate = parseInt($('#rate').val());
        let time = parseInt($('#time').val());
        let interest = 0;
        let total = 0;
        
        if ((!isNaN(principal)) && (!isNaN(rate)) && (!isNaN(time))) {
        // all fields have a value
            if (principal > 0) {
                $('#row-two').show();
                $('#principal-validation-display').show().text("Validated");
                // add bootstrap class 'was-validated'
                if (rate > 0) {
                    $('#rate-validation-display').show().text("Validated");
                    // add bootstrap class 'was-validated'
                    if (time > 0) {
                        $('#time-validation-display').show().text("Validated");
                        // add bootstrap class 'was-validated'
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
            console.log($('#two-row div')); // grab all the validation div's
            // for every div:
            // unhide
            // change text to Invalid
            // change class to boostrap invalid class needs-validation
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
