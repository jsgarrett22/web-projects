// initialize count to 0
// listen for clicks on the increment button
// increment the count variable when button is clicked
// change the count-el in html to reflect the new count
let incrementBtn = document.getElementById('increment-btn');
let saveBtn = document.getElementById('save-btn');
let messageEl = document.getElementById('message-el');
let countEl = document.getElementById("count-el");
let count = 0;

 incrementBtn.onclick = () => {
    console.log("The increment button was clicked.");
    count++;
    countEl.innerText = count;
    console.log(count);
}

// 1. Create a function, save() that logs the count to console
saveBtn.onclick = () => {
    messageEl.textContent += " " + count + " - ";
    countEl.textContent = 0;
    count = 0;
}
