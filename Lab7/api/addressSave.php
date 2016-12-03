<?php

/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

include './API-functions.php';


$status_codes = array(
    200 => 'OK',
    201 => 'Created',
    500 => 'Internal Server Error',
);

$response = array(
    "errors" => NULL,
    "data" => NULL
);


//status codes from another page

$fname = filter_input(INPUT_POST, 'fname');
$lname = filter_input(INPUT_POST, 'lname');
$email = filter_input(INPUT_POST, 'email');
$phone = filter_input(INPUT_POST, 'phone');
$address1 = filter_input(INPUT_POST, 'address1');
$address2 = filter_input(INPUT_POST, 'address2');
$city = filter_input(INPUT_POST, 'city');
$state = filter_input(INPUT_POST, 'state');
$zip = filter_input(INPUT_POST, 'zip');

$status = 200;

$response['data']['loginSave'] = addressSave($fname, $lname, $email, $phone, $address1, $address2, $city, $state, $zip);



header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: GET, POST, UPDATE, DELETE");
header("Content-Type: application/json; charset=utf8");

header("HTTP/1.1 " . $status . " " . $status_codes[$status]);
echo json_encode($response, JSON_PRETTY_PRINT);
exit();



    

