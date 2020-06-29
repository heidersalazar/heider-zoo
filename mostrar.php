<?php
$nombres = $_POST['nombres'];
$apellidos = $_POST['apellidos'];
$cedula = $_POST['cedula'];
$correo= $_POST['correo'];
$cargos= $_POST['cargos'];
$telefono = $_POST ['telefono'];
$direccion = $_POST ['direccion'];
echo "El personal:<br><br>"; 
echo "Nombres: $nombres <br>";
echo "Apellidos: $apellidos <br>";
echo "Cargo: $cargos <br>";
echo "Cedula: $cedula <br>";
echo "Telefono:$telefono <br>";
echo "Correo Electronico:$correo <br>";
echo "Dirección: $direccion <br><br>";
echo "Ha sido registrado existosamente" ;
?>