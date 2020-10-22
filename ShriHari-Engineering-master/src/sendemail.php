<?php
	header('Content-type: application/json');
	$status = array(
		'type'=>'success',
		'message'=>'Thank you for contact us. As early as possible  we will contact you '
	);

    $firstname = @trim(stripslashes($_POST['firstname'])); 
    $lastname = @trim(stripslashes($_POST['lastname'])); 
    $email = @trim(stripslashes($_POST['email'])); 
	$phone = @trim(stripslashes($_POST['phone'])); 
    $subject = "New enquiry mail from the website";
    $message = @trim(stripslashes($_POST['message'])); 

    $email_from = $email;
    $email_to = 'sample@localhost';//replace with your email

    $body = 'Firstname: ' . $firstname . "\n\n" . 'Lastname: ' . $lastname . "\n\n" . 'Email: ' . $email . "\n\n" . 'Phone: ' . $phone . "\n\n" . 'Message: ' . $Message ;

    $success = @mail($email_to, $subject, $body, 'From: <'.$email_from.'>');    
	
	sleep(3);
	
	header('Location: index.html');

    //echo json_encode($status);
    die;
	?>