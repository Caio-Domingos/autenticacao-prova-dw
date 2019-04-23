<?php
// Listar erros
ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);

// Includes

include_once './conn.php';

$pdo = conexaoBanco();

$user = $_POST['user'];
$pass = $_POST['pass'];

$select = $pdo->query("SELECT * FROM users WHERE nomeUser = '$user' AND password = '$pass'");

$exists = false;
while ($linha = $select->fetch(PDO::FETCH_ASSOC)) {
    $exists = true;
}

echo json_encode($exists);