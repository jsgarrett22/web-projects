/****** DOM ELEMENTS ******/
let donationEl = document.querySelector('#donation');
let donationButtons = document.querySelectorAll('input[class="btn btn-yellow"]');
let displayTotal = document.querySelector('#display-total');
let submitBtn = document.querySelector('#submit-btn');

let total = 0;

/****** EVENT LISTENERS ******/

donationButtons.forEach((element) => {
   element.onclick = updateDonation;
});

submitBtn.addEventListener('click', updateDisplay);

/****** EVENT HANDLERS ******/
function updateDisplay(e) {
    e.preventDefault();
    if (donationEl.value != null && donationEl.value > 0) {
        total = donationEl.value;
        total = formatNumber(total);
        displayTotal.innerHTML = `${total}`;
        alertPopup();
    } else {
        console.log('Something went wrong. The donated amount is not a valid value.');
        console.log(donationEl.value);
    }
}

function updateDonation() {
    let oldValue = parseInt(donationEl.value);
    let newValue = parseInt(formatString(this.value));

    if (oldValue) {
        donationEl.value = oldValue + newValue;
    } else {
        oldValue = 0;
        donationEl.value = oldValue + newValue;
    }
}

function alertPopup() {
    setTimeout(() => {
        alert(`Thank you for your donation of $${total}. Your confirmation number is 1234.`);
    }, 3000);
}

function formatNumber(number) {
    let stringifiedNum = number.toString();
    return parseInt(stringifiedNum).toLocaleString(undefined);
}

function formatString(string) {
    return string.substring(1);
}