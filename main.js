// double this on each click
let pennies = 1;

let additionalTips = [
	'Keep your pennies is a glass jar',
	'Pick up every penny you find on the ground!',
	"Don't let your partner know...",
];

// task 1

// select element with class .quote
const quote = document.querySelector('.quote');

// change its textContent
quote.textContent = `Your time is limited, so don’t waste it living someone else’s life. - Steve Jobs`;

// task 2 - selecting and changing style

const h1 = document.querySelector('h1');
h1.style.textDecoration = 'underline';

// task 3 - change the title
document.title = '💸💸💸';

// task 4 - get penny doubler working

// select output
let output = document.querySelector('output');
// reassign pennies to double their value on each click
// use the value as textContent in output
function handleClick() {
	pennies *= 2;
	output.textContent = `${pennies} pennies`;
}
