<?php
$configPath = __DIR__ . '/../data/config.json';
$config = json_decode(file_get_contents($configPath), true);
$visible = $config['whatsappVisible'] ?? false;
$message = '';

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $visible = isset($_POST['whatsappVisible']);
    $config['whatsappVisible'] = $visible;
    file_put_contents($configPath, json_encode($config, JSON_PRETTY_PRINT));
    $message = 'Configuración actualizada.';
}
?>
<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Panel de Configuración</title>
    <style>
        body { font-family: Arial, sans-serif; padding: 20px; }
        form { margin-top: 20px; }
    </style>
</head>
<body>
    <h1>Panel de Configuración</h1>
    <?php if ($message) echo "<p>$message</p>"; ?>
    <form method="POST">
        <label>
            <input type="checkbox" name="whatsappVisible" <?php if($visible) echo 'checked'; ?>>
            Mostrar botón de WhatsApp
        </label>
        <br>
        <button type="submit">Guardar</button>
    </form>
</body>
</html>
