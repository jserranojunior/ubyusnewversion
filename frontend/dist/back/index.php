<!DOCTYPE html>
<html lang="ptBr" class="dark">

<head>
  <meta charset="UTF-8" />
  <link rel="icon" href="/favicon.ico" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <meta property="og:locale" content="pt_BR">
  <meta property="og:type" content="website">
  <meta property="og:title" content="Home -">
  <meta property="og:description"
    content="O que nos move UbyUS expressa o princípio de REPRESENTATIVIDADE, materializado por relações sinceras, profissionais e perenes com nossos clientes.O cliente (“you”)&nbsp; passa a ser representado pela nossa organização com suas demandas e anseios sendo incorporados por nós (“by us”) contando com a nossa PRESENÇA efetiva em todas as etapas do Projeto.Temos como propósito a … Home Leia mais »">
  <meta property="og:url" content="https://ubyusadvisors.com/">
  <meta property="article:modified_time" content="2021-11-11T19:57:02+00:00">
  <meta name="twitter:card" content="summary_large_image">
  <meta name="twitter:label1" content="Est. tempo de leitura">
  <meta name="twitter:data1" content="6 minutos">
  <meta http-equiv="Content-Security-Policy" content="upgrade-insecure-requests">
  <title>Ubyus</title>
</head>

<body class="" style="height: auto;">

</body>
</html>

<?php
require 'class.phpmailer.php';
require 'class.smtp.php';
require 'class.pop3.php';

$mail = new PHPMailer;
header('Content-Type: application/json');

  $name = $_REQUEST["name"];
  $email = $_REQUEST["email"];
  $message = $_REQUEST["message"];
    $phone = $_REQUEST["phone"];

$mail->isSMTP();                                      
$mail->Host = 'smtp.gmail.com';  
$mail->SMTPAuth = true;                               
$mail->Username = 'ubyusadvisors@gmail.com'; 
$mail->Password = 'kllyoieiorrmyzif'; 
$mail->SMTPSecure = 'ssl'; 
$mail->Port = 465;  

 $mail->From = 'ubyusadvisors@gmail.com';
$mail->addAddress('contato@ubyusadvisors.com'); 
/*  $mail->From = 'alvitreempresa@gmail.com';
 $mail->addAddress('jorgeserranojunior@gmail.com'); */
$mail->FromName = 'Ubyus Contato';

$mail->isHTML(true); 

$mail->Subject = 'E-mail enviado pelo site Ubyus';
$mail->Body    = 'Nome: <b>'. $name . '</b><br>' . 'Email: <b>'. $email . '</b><br>' . 'Celular: <b>'. $phone . '</b><br>' . 'Mensagem: <b>'. $message . '</b><br>' ;

if(!$mail->send()) {
   $errSendMail =  array('err'=>$mail->ErrorInfo);
  echo json_encode($errSendMail);
} else {
    echo 'Message has been sent';
}