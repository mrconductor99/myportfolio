function scrolls() 
{
	window.scrollTo(0,1000);
}

function orchest()
{
	location.replace("Past achievement.html")
}

function hob()
{
	location.replace("Hobby.html")
}

function amb()
{
	location.replace("Ambition.html")
}

function feed()
{
	location.replace("Feedback.html")
}



//smooth scroll
$('.navbar a').on('click', function(e)
{
	if (this.hash !== '') 
	{
		e.preventDefault();

		const hash = this.hash;

		$('html, body').animate(
		{
			scrollTop: $(hash).offset().top
		}, 800);
	}
});

function validation()
{
	var name = document.getElementById("name").value;
	var phone = document.getElementById("phone").value;
	var email = document.getElementById("email").value;
	var message = document.getElementById("message").value;
	var error_message = document.getElementById("error_message");
	var text;

	error_message.style.padding = "10px";

	if(name.length < 5)
	{
		text = "Please Enter Valid Name"
		error_message.innerHTML = text;
		return false;
	}

	if(isNaN(phone) || phone.length < 10)
	{
		text = "Enter Valid Phone Number"	
		error_message.innerHTML = text;
		return false;
	}

	if(email.indexOf("@") == -1 || email.length < 5)
	{
		text = "Enter Valid Email"	
		error_message.innerHTML = text;
		return false;
	}

	if(message.length <= 5)
	{
		text = "Please Enter More Message"	
		error_message.innerHTML = text;
		return false;
	}

	alert("Form Submitted Successfully")
	return true;
}