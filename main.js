let pennies = 1;

function handleClick() {
	console.log("I'm just to prove it's working!");
	// 🔺 Remember, this function is already hooked up to the button. You'll learn how to do this yourself soon! Your task is just to write the code inside this function itself.
}

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
