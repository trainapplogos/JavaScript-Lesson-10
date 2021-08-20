$(document).ready(function() {
	$('#sendGetBtn').bind('click', function() {
		var firstName = $("#firstNameGet").val();
		var lastName = $("#lastNameGet").val();
		var age = $("#ageGet").val();
		var address = $("#addressGet").val();
		
		if (firstName == null) {
			//event.preventDefault();
			throw "Error: firstname couldn't be null";
		} 
		
		if (lastName == null) {
			throw "Error: lastname couldn't be null";
		}  
		
		if (age <= 0 && age > 100) {
			throw "Error: age must be in range of 1 and 100";
		}
			
		if (address == null) {
			throw "Error: address couldn't be null";
		}
		
		var paramsGet = 'firstName=' + encodeURIComponent(firstName) + 
					 '&lastName=' +	encodeURIComponent(lastName) + 
					 '&age=' + encodeURIComponent(age) + 
					 '&address=' + encodeURIComponent(address);
		
		$.ajax({
			type: 'GET',
			contentType: 'application/json',
			url: 'http://localhost:3000/formGet?' + paramsGet,
			success:  function(data) {
				console.log('success');
				console.log(JSON.stringify(data));
			}
		});
	});
});
	

$(document).ready(function() {
	$('#sendPostBtn').bind('click', function() {
		var firstName = $("#firstNamePost").val();
		var lastName = $("#lastNamePost").val();
		var age = $("#agePost").val();
		var address = $("#addressPost").val();
		
		if (firstName == null) {
			throw "Error: firstname couldn't be null";
		} 
		
		if (lastName == null) {
			throw "Error: lastname couldn't be null";
		}  
		
		if (age <= 0 && age > 100) {
			throw "Error: age must be in range of 1 and 100";
		}
			
		if (address == null) {
			throw "Error: address couldn't be null";
		}
		
		var userData = {
			firstName : firstName,
			lastName : lastName,
			age : age,
			address : address
		};
	
	
		$.ajax({
			type: 'POST',
			data: JSON.stringify(userData),
			contentType: 'application/json',
			url: 'http://localhost:3000/formPost',
			success: function(data) {
				console.log('success');
				console.log(JSON.stringify(data));
			}
		});
	});
});
