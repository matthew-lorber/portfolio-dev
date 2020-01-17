<?php
#Error reporting (remove once script is running fine)
ini_set('display_errors',1);
error_reporting(E_ALL);
#Receive user input
$email_address = $_POST['email_address'];
$message = $_POST['message'];
#Filter user input
function filter_email_header($form_field) {
    return preg_replace('/[\0\n\r\|\!\/\<\>\^\$\%\*\&]+/','',$form_field);
}
$email_address = filter_email_header($email_address);
#Send email
$headers = "From: $email_address\n";
$sent = mail('matthew.lorber@writeme.com', 'Email Form Submission', $message, $headers);
#Thank user or notify them of a problem
if ($sent) {
    ?><html>
        <head>
            <title>Thank You</title>
        </head>
        <body>
            <h1>Thank You</h1>
            <p>Thank you for your message!</p>
        </body>
    </html>
    <?php
} else {
    ?><html>
        <head>
            <title>Something went wrong</title>
        </head>
        <body>
            <h1>Something went wrong</h1>
            <p>We could not send your message. Please try again.</p>
        </body>
    </html>
    <?php
}
?>