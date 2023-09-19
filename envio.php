<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
  $fullName = $_POST['full_name'];
  $email = $_POST['email'];
  $mobileNumber = $_POST['mobile_number'];
  $subject = $_POST['subject'];
  $message = $_POST['message'];

  // Configurar el correo electrónico
  $to = 'caicedosebastian122@gmail.com';
  $subject = 'Nuevo mensaje del formulario de contacto';
  $body = "Nombre: $fullName\nCorreo electrónico: $email\nNúmero de teléfono: $mobileNumber\nAsunto: $subject\nMensaje: $message";
  $headers = "From: $email";

  // Enviar el correo electrónico
  if (mail($to, $subject, $body, $headers)) {
    echo 'El correo electrónico se envió correctamente.';
  } else {
    echo 'Hubo un error al enviar el correo electrónico.';
  }
}
?>
