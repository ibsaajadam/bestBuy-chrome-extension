document.getElementById("auto-fill").addEventListener("click", () => {
	chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
		chrome.tabs.sendMessage(tabs[0].id, {
			firstname: document.getElementById('first-name').value,
			lastname: document.getElementById('last-name').value,
			address: document.getElementById('address-1').value,
			city: document.getElementById('city').value,
			state: document.getElementById('state').value,
			zip: document.getElementById('zip').value,
			email: document.getElementById('email').value,
			phone: document.getElementById('phone').value,
			cardnumber: document.getElementById('card-number').value,
			expmonth: document.getElementById('exp-month').value,
			expyear: document.getElementById('exp-year').value,
			cvv: document.getElementById('cvv').value
		}, function(response) {
			console.log(response.status);
		});
	});
});

document.getElementById("reset-fields").addEventListener("click", () => {
	document.getElementById('first-name').value = '';
	document.getElementById('last-name').value = '';
	document.getElementById('address-1').value = '';
	document.getElementById('city').value = '';
	document.getElementById('state').value = '';
	document.getElementById('zip').value = '';
	document.getElementById('email').value = '';
	document.getElementById('phone').value = '';
	document.getElementById('card-number').value = '';
	document.getElementById('exp-month').value = '';
	document.getElementById('exp-year').value = '';
	document.getElementById('cvv').value = '';
});


document.getElementById("save").addEventListener("click", () => {
	chrome.storage.sync.set({
		firstname: document.getElementById('first-name').value,
		lastname: document.getElementById('last-name').value,
		address: document.getElementById('address-1').value,
		city: document.getElementById('city').value,
		state: document.getElementById('state').value,
		zip: document.getElementById('zip').value,
		email: document.getElementById('email').value,
		phone: document.getElementById('phone').value,
		cardnumber: document.getElementById('card-number').value,
		expmonth: document.getElementById('exp-month').value,
		expyear: document.getElementById('exp-year').value,
		cvv: document.getElementById('cvv').value
	}, function() {
		console.log("Saved!");
	});
});

document.getElementById("load").addEventListener("click", () => {
	chrome.storage.sync.get([
		'firstname',
		'lastname',
		'address',
		'city',
		'state',
		'zip',
		'email',
		'phone',
		'cardnumber',
		'expmonth',
		'expyear',
		'cvv'
	], function(result) {
		document.getElementById('first-name').value = result.firstname;
		document.getElementById('last-name').value = result.lastname;
		document.getElementById('address-1').value = result.address;
		document.getElementById('city').value = result.city;
		document.getElementById('state').value = result.state;
        document.getElementById('zip').value = result.zip;
		document.getElementById('email').value = result.email;
		document.getElementById('phone').value = result.phone;
		document.getElementById('card-number').value = result.cardnumber,
		document.getElementById('exp-month').value = result.expmonth,
		document.getElementById('exp-year').value = result.expyear,
		document.getElementById('cvv').value = result.cvv;
	});
});
