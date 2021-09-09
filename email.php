<?php 
    $addressee = "maximilianocm06@gmail.com";
    $name = $_POST["name"];
    $email = $_POST["email"];
    $message = $_POST["message"];
    $asunto = $name . "  |  " . $email;

    mail($addressee, $asunto, $message);
    header("Location:index.html")
?>