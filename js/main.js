
function askQuestions(){

	/*
	var firstName = prompt('What is your first name?');
	var lastName = prompt('What is your last name?');
	var fullName = firstName +' '+lastName;

	console.log(fullName);

	var age = prompt('How old are you?');
	age = parseInt(age);
	*/

	/*
	if (age>=18){
		console.log('User is an adult.');
	} else if (age >=13) {
		console.log('User is a teenager.')
	} else {
		console.log('User is a child.');
	}*/

	/*
		If the user's name first name is 'General' and their last name is NOT 'Assembly', then greet the general!*/
	/*
	if (firstName==='General'&&lastName!==='Assembly'){
		console.log('Good afternoon General')
	}*/

	var faveColor = prompt('What is your favourite color?');

	if (faveColor=='red' ||
		faveColor=='blue' ||
		faveColor=='green'||
		faveColor=='yellow'){
		$('h1').css('color', faveColor)
	}
}

//When the page has loaded//
$(function () {

	$('img').on('click', askQuestions);

	// Hide all the sections
	$('h3').not(':first').next().hide();

	// When the User clicks an h3
	$('h3').on('click', function () {

		//Toggle the next section
		$(this).next().slideToggle(2000);
	});

});
