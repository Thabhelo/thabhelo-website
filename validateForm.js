function validateForm() {
  // Get form inputs by their IDs
  var name = document.getElementById("name").value;
  var surname = document.getElementById("surname").value;
  var email = document.getElementById("email").value;
  var message = document.getElementById("message").value;
  var phone = document.getElementById("phone").value;
  var toggle = document.getElementById("acknowledgements-toggle");
  var content = document.getElementById("acknowledgements-content");

  if (name == "") {
    alert("Name must be filled out");
    return false;
  }

  if (surname == "") {
    alert("Surname must be filled out");
    return false;
  }

  // Check if name and surname are not empty
  if (name.trim() === "" || surname.trim() === "") {
    alert("Name and surname are required fields.");
    return false; // Prevent form submission
  }

  if (email == "") {
    alert("Email must be filled out");
    return false;
  } else {
    var emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/; // Regular expressions for email validation
    if (!emailRegex.test(email)) {
      alert("Invalid email format");
      return false;
    }
  }

  if (phone != "") {
    var phoneRegex = /^\d{10}$/;
    if (!phoneRegex.test(phone)) {
      alert("Invalid phone number");
      return false;
    }
  }

  // Check if the message is not empty
  if (message.trim() === "") {
    alert("Message field cannot be empty.");
    return false; // Prevent form submission
  }

  return true; // If all validations pass, the form will be submitted
}

content.style.display = "none"; // hide acknowledgements content by default

toggle.addEventListener("click", function (e) {
  e.preventDefault();
  if (content.style.display === "none") {
    content.style.display = "block";
  } else {
    content.style.display = "none";
  }
});