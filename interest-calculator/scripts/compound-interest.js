/**
 * Calculates the compound interest of an account given the parameters
 * @param {number} principal
 * @param {number} time in years
 * @param {number} rate
 * @param {number} frequency of interest additions
 * @returns  interest earned
 */
const calculateCompoundInterest = (p, t, r, n) => {
    const amount = p * (Math.pow((1 + r / n), (n * t)));
    const interest = amount - p;
    return interest;
};

$(function () {
    $('#compound-calculateBtn').on("click", null, null, function(e) {
        e.preventDefault();
        e.stopPropagation();

        const principal = $('#compound-principal').val();
        const rate = convertRateToPercentage($('#compound-rate').val());
        const years = $('#compound-years').val();
        const frequency = $('#compound-frequency').val();
        const interest = calculateCompoundInterest(principal, years, rate, frequency);
        let displayMsg = "";

        console.log(`Given ->
                    Principal: ${principal}
                    Rate: ${rate}
                    Years: ${years}
                    Frequency: ${frequency}
                    Interest: ${interest}`);
        
        displayMsg += `In ${years} years, your investment will be worth ${principal} + ${interest}`;
    
        console.log(displayMsg);
    });
});
