const form = document.getElementById('form')
const email = document.getElementById('email')
const submitBtn = document.querySelector('.btn')


submitBtn.addEventListener('click', (e) => {
	e.preventDefault()
	 checkInput();
})

function checkInput() {
  const emailValue = email.value.trim();

  if(emailValue === '') {
		setErrorFor(email, 'Please provide a valid email address');
	} else if (!isEmail(emailValue)) {
		setErrorFor(email, 'Please provide a valid email address');
	} else {
		setSuccessFor(email);
	}
}

function setErrorFor(input, message) {
	const formControl = input.parentElement;
	const small = formControl.querySelector('small');

	formControl.className = 'form-control error';
	small.innerText = message;
	email.style.border = '2px solid red';
	small.style.visibility = 'visible';
	
}

function setSuccessFor(input) {
	const formControl = input.parentElement;
	formControl.className = 'form-control success';
	email.style.border = '2px solid green'
	small.style.visibility = 'hidden';
};

function isEmail(email) {
	return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
};
