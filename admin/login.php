<?php
session_start();
if (isset($_SESSION['logged_in']) && $_SESSION['logged_in'] === true) {
    header('Location: index.php');
    exit;
}
$error = '';
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $user = $_POST['usuario'] ?? '';
    $pass = $_POST['password'] ?? '';
    if ($user === 'admin' && $pass === 'admin') {
        $_SESSION['logged_in'] = true;
        header('Location: index.php');
        exit;
    } else {
        $error = 'Credenciales incorrectas';
    }
}
?>
<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Login Administrador</title>
</head>
<body>
<h1>Login</h1>
<?php if ($error): ?>
<p style="color:red;"><?php echo $error; ?></p>
<?php endif; ?>
<form method="post">
    <label>Usuario: <input type="text" name="usuario"></label><br>
    <label>Contraseña: <input type="password" name="password"></label><br>
    <button type="submit">Ingresar</button>
</form>
</body>
</html>
