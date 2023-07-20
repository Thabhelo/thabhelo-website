<?php

// Get the form data
$name = $_POST['name'];
$surname = $_POST['surname'];
$phone = $_POST['phone'];
$email = $_POST['email'];
$message = $_POST['message'];

// Set the recipient email address
$to = "youremail@example.com";

// Set the email subject
$subject = "New message from your website";

// Set the email message
$body = "Name: $name\n\nSurname: $surname\n\nPhone: $phone\n\nEmail: $email\n\nMessage:\n$message";

// Set the email headers
$headers = "From: $email \r\n";
$headers .= "Reply-To: $email \r\n";
$headers .= "Content-type: text/plain; charset=UTF-8 \r\n";

// Send the email
mail($to, $subject, $body, $headers);

// Redirect the user to a thank you page
header("Location: thank-you.html");
exit();
?>