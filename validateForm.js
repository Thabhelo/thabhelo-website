function validateForm() {
    var name = document.forms["myForm"]["name"].value;
    var surname = document.forms["myForm"]["surname"].value;
    var email = document.forms["myForm"]["email"].value;
    var phone = document.forms["myForm"]["phone"].value;
  
    if (name == "") {
      alert("Name must be filled out");
      return false;
    }
  
    if (surname == "") {
      alert("Surname must be filled out");
      return false;
    }
  
    if (email == "") {
      alert("Email must be filled out");
      return false;
    } else {
      var emailRegex = /\S+@\S+\.\S+/;
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
  
    return true;
  }