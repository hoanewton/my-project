$(function() {

	function validateName(fullname){
	  if(fullname.length > 2){
	    $('#fullname').removeClass('error');
	    $('#fullname-error').hide();
	    return true;
	  }else{
	    $('#fullname').addClass('error');
	    $('#fullname-error').show();
	    return false;
	  }
	}

	function validateEmail(email){
	  var re = /\S+@\S+\.\S+/;
	  if(re.test(email)){
	    $('#email').removeClass('error');
	    $('#email-error').hide();
	    return true;
	  }else{
	    $('#email').addClass('error');
	    $('#email-error').show();
	    return false;
	  }
	}

	function validateMessage(message){
	  if(message.length > 0){
	    $('#message').removeClass('error');
	    $('#message-error').hide();
	    return true;
	  }else{
	    $('#message').addClass('error');
	    $('#message-error').show();
	    return false;
	  }
	}
	$('form').submit(function(event){
	  var fullname =$('#fullname').val(),
	      email = $('#email').val(),
	      message = $.trim($('#message').val());

	  if(validateName(fullname) & validateEmail(email) & validateMessage(message)){
	    return true; //submit form
	  }else{
	    event.preventDefault(); //prevent form from submitting
	  }
	});























});


