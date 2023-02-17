<?php
require_once 'autoload.php';
include 'config.php';

header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: GET, POST");
header("Access-Control-Allow-Headers: *");
header("Content-type: application/json; charset=UTF-8");

set_error_handler("ErrorHandler::handleError");
set_exception_handler("ErrorHandler::handleException");

$router = new Router();

$router->get('/products/get', 'ProductGateway::get');
$router->post('/products/add', "ProductGateway::add");
$router->delete('/products/delete', 'ProductGateway::delete');

$router->check();
