// double this on each click
let pennies = 1;

// Bonus 3 - toggle dark theme
const themeButton = document.querySelector('#toggle-theme');
themeButton.addEventListener('click', () => {
	const double = document.querySelector('#double');
	document.documentElement.classList.toggle('dark');
	double.textContent = `💸`.repeat(10);
});
const coolSigns = [`💸`.repeat(10), `💵`.repeat(10)];

/* task 1 - select element with class .quote
 change its textContent */
const quote = document.querySelector('.quote');

quote.textContent = `Your time is limited, so don’t waste it living someone else’s life. - Steve Jobs`;

// task 2 - selecting and changing style

const h1 = document.querySelector('h1');
h1.style.textDecoration = 'underline';

// task 3 - change the title
// document.title = '💸💸💸';

// task 4 - get penny doubler working

// select output
let output = document.querySelector('output');
// reassign pennies to double their value on each click
// use the value as textContent in output
// Bonus 2 - change title on click
function handleClick() {
	pennies *= 2;
	output.textContent = `${pennies} pennies`;
	document.title = '💸💸💸';
}

// task 5 - creating elements

// create p element
let newP = document.createElement('p');
// add text
newP.textContent = 'This penny doubler is cool!🎉';

// append to section element
const proofSection = document.querySelector('#proof-section');
proofSection.appendChild(newP);

// add more tips
let additionalTips = [
	'Keep your pennies is a glass jar',
	'Pick up every penny you find on the ground!',
	"Don't let your partner know...",
];
// select tips list
const tipsList = document.querySelector('#tips-list');

// create new element for list item, set textContent to additionalTips[i], add to list
for (let i = 0; i < additionalTips.length; i++) {
	let newLi = document.createElement('li');
	newLi.textContent = additionalTips[i];
	tipsList.appendChild(newLi);
}

// Bonus 1 - remove last tip
// select last tip from list with last-child
const lastTip = document.querySelector('#tips-list li:last-child');
// use remove method to delete
lastTip.remove();
