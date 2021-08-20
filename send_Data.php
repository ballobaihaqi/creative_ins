<?php

$email = $_POST['email'];
$nama = $_POST['nama'];
$alamat = $_POST['alamat'];
$telp = $_POST['telpon'];
$paket = $_POST['packet'];

$message = 
"Email : " . $email .
" Nama : " . $nama .
" Alamat : " . $alamat .
" No. Telpon (Whatsapp) : " . $telp .
" Paket Kelas : " . $paket;

echo $message;
