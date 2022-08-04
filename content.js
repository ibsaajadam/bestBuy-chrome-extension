chrome.runtime.onMessage.addListener(
    function(request, sender, sendResponse) {
        try {
            document.getElementById("firstName").value = request.firstname;
            document.getElementById("lastName").value = request.lastname;
            document.getElementById("street").value = request.address;
            document.getElementById("city").value = request.city;
            document.getElementById("state").value = request.state;
            document.getElementById("zipcode").value = request.zip;
            document.getElementById("user.emailAddress").value = request.email;
            document.getElementById("user.phone").value = request.phone;
            document.getElementById("number").value = request.cardnumber;
            document.getElementById("expMonth").value = request.expmonth;
            document.getElementById("expYear").value = request.expyear;
            document.getElementById("cvv").value = request.cvv; 
            sendResponse({status: "Success!"});
        } catch (error) {
            console.log(error)
            sendResponse({status: "Exception occurred!"});
        }
    }
);