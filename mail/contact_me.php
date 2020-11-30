<?php
// Check for empty fields
if(empty($_POST['name'])      ||
   empty($_POST['email'])     ||
   empty($_POST['phone'])     ||
   empty($_POST['message'])   ||
   !filter_var($_POST['email'],FILTER_VALIDATE_EMAIL))
   {
   echo "No arguments Provided!";
   return false;
   }
   
$name = strip_tags(htmlspecialchars($_POST['name']));
$email_address = strip_tags(htmlspecialchars($_POST['email']));
$phone = strip_tags(htmlspecialchars($_POST['phone']));
$message = strip_tags(htmlspecialchars($_POST['message']));
   
$to = 'marcelofortes306@gmail.com';
$email_subject = "Contato a partir do seu website:  $name";
$email_body = "Você recebeu um e-mail a partir do seu website pessoal.\n\n"."Aqui estão os detalhes:\n\nNome: $name\n\nEmail: $email_address\n\nTelefone: $phone\n\Mensagem:\n$message";
$headers = "From: noreply@yourdomain.com\n";
$headers .= "Reply-To: $email_address";   
mail($to,$email_subject,$email_body,$headers);
return true;         
?>