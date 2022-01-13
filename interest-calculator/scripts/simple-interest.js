// Calculates the simple interest given the following formula:
// Principal (p) x Rate (r) x Time (t)
function simpleInterest() {
    let principal = document.getElementById('principal').value;
    let rate = document.getElementById('rate').value;
    let time = document.getElementById('time').value;

    // simple validation that all inputs have at least values
    if ((principal != "") && (rate != "") && (time != "")) {
        console.log("The values were properly filled out.");
        console.log(`Principal: ${principal}`);
        console.log(`Rate: ${rate}`);
        console.log(`Time: ${time}`);
    } else {
        alert("At least one field wasn't filled out. Please fill out all fields in order to calculate.");
        console.log(`Principal: ${principal}`);
        console.log(`Rate: ${rate}`);
        console.log(`Time: ${time}`);
    }

    // convert
}