<?php
session_start();
if (!isset($_SESSION['logged_in']) || $_SESSION['logged_in'] !== true) {
    header('Location: login.php');
    exit;
}
$configFile = __DIR__ . '/../data/config.json';
$status = true;
if (file_exists($configFile)) {
    $data = json_decode(file_get_contents($configFile), true);
    $status = $data['tiendaAbierta'] ?? true;
}
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $status = isset($_POST['abierta']);
    file_put_contents($configFile, json_encode(['tiendaAbierta' => $status], JSON_PRETTY_PRINT));
}
?>
<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Panel Administrador</title>
</head>
<body>
<h1>Estado de la Tienda</h1>
<form method="post">
    <label>
        <input type="checkbox" name="abierta" value="1" <?php echo $status ? 'checked' : ''; ?>>
        Tienda Abierta
    </label>
    <button type="submit">Guardar</button>
</form>
<p><a href="logout.php">Cerrar sesión</a></p>
</body>
</html>
