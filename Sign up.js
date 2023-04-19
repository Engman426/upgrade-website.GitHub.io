const form = document.querySelector('form');
const name = document.querySelector('#name');
const email = document.querySelector('#email');
const password = document.querySelector('#password');
const confirmPassword = document.querySelector('#confirm-password');
const submitBtn = document.querySelector('#submit-btn');

form.addEventListener('submit', (event) => {
	event.preventDefault();
	
	if (password.value !== confirmPassword.value) {
		alert('Passwords do not match!');
		return;
	}
	
	// Your sign up processing code goes here
	
	alert(`Thank you for signing up, ${name.value}!`);
	
	form.reset();
});
