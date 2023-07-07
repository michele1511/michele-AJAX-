-- Active: 1688752528784@@127.0.0.1@3306@to-do list
<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <title>Registro de Actividades Diarias</title>
  <link rel="stylesheet" href="styles/styles.css">
</head>
<body>
  <h1>Registro de Actividades Diarias</h1>

  <form id="registroForm">
    <input type="text" id="actividadInput" placeholder="Actividad">
    <input type="date" id="fechaInput">
    <button type="submit">Agregar</button>
    <button type="submit">Modificar</button>
    <button onclick="eliminarRegistro(registro.id)">Eliminar</button>
  </form>

  <div id="registroList"></div>

  <script src="js/script.js"></script>
</body>
</html>

