<?php

header ('Access-Control-Allow-Origin: *');
header ('Access-Control-Allow-Headers: *, Autorization');
header ('Access-Control-Allow-Methods: *');
header ('Content-type: json/application');

$url = $_SERVER['REQUEST_URI'];
$url = explode('?', $url);
$url = $url[0];

$method = $_SERVER['REQUEST_METHOD'];
// die ($method);
 
$connect = mysqli_connect('localhost', 'root', '', 'Exam'); 

if ($method === 'GET') {
    // Поиск юзера по паролю
    if ($url === "/user") {
        $posts = mysqli_query($connect, "SELECT `ID`, `Email`, `Password` FROM `User` WHERE 1");

        $t = [];
        
        while ($users = mysqli_fetch_assoc($posts)) {
            $t[] = $users;
        }
        
        echo json_encode($t);
    }

    // Вход пользователя
    if ($url === "/login") {
        $password_user = $_GET['password'];
        $email = $_GET['email'];

        $user = mysqli_query($connect, "SELECT `ID` FROM `User` WHERE `Password` = '$password_user' and `Email` = '$email'");


        $users_list = [];
        
        $trust_user = mysqli_fetch_assoc($user);
        echo json_encode($trust_user);
    }

} else if ($method === 'POST') {
    $email = $_POST['email'];
    $password = $_POST['password'];

    if ($url === '/reg') {
        mysqli_query ( $connect, "INSERT INTO `User`(`Email`, `Password`) VALUES ('$email', '$password')");
        echo json_encode(1);

    }

    http_response_code(201);

}
