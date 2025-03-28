let first;
let second;
let third;
function calculateAmount() {
 first = parseFloat(document.getElementById('first').value);
 second = parseFloat(document.getElementById('second').value);
 third = parseFloat(document.getElementById('third').value);

let amount = first + second + third;
}
document.getElementById('result').innerText = `The total amount is: ${amount}`;
