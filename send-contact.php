<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = $_POST['name'];
    $email = $_POST['email'];
$mobile = $_POST['mobile'];
$purpose = $_POST['purpose'];    
    $message = $_POST['message'];

    // Validate inputs (optional)

    // Replace with your email address and subject
    $to = 'jhaabhishek88821@gmail.com';
    $subject = 'New Contact Form Submission';

    // Email content
    $body = "Name: $name\nEmail: $email\nMessage:\n$message";

    // Headers
    $headers = "From: $email";

    // Send email
    if (mail($to, $subject, $body, $headers)) {
        echo 'Message sent successfully!';
    } else {
        echo 'Failed to send message. Please try again later.';
    }
} else {
    // Not a POST request, ignore
    echo 'Method not allowed';
}
?>
