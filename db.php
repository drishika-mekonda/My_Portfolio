<?php
$servername = "localhost";
$username = "root"; // default XAMPP username
$password = "";     // default XAMPP password is empty
$dbname = "portfolio"; // make sure you created this DB in phpMyAdmin

$conn = new mysqli($servername, $username, $password, $dbname);

if ($conn->connect_error) {
  die("Connection failed: " . $conn->connect_error);
}
?>
