<?php
$db_connect = New Mysqli('localhost','root','','faststart') OR DIE ('Не могу установить соединение');
$name = $_POST['name'];
$email = $_POST['email'];
$submit = $_POST['submit'];

if(isset($submit))
{
    if(isset($name) && isset($email))
    {
        $query = "INSERT INTO `users`(`name`,`email`) VALUES ('{$name}','{$email}')";
        if(mysqli_query($db_connect,$query))
        {
            echo "Запись добавлена!";
        }
    }
}
?>