<?php

class ProductGateway
{
    public static function get()
    {
        $instance = new ProductGateway;
        return $instance->response((new Product)->getAll());
    }

    public static function add(): void
    {

        $inputs = json_decode(file_get_contents('php://input'), true);

        if (!$inputs)
            return;

        $validator = new Validator($inputs);
    }

    public static function delete()
    {
        $instance = new ProductGateway;
        $inputs = json_decode(file_get_contents("php://input"), true);

        if ($inputs == null)
            return;

        foreach ($inputs['data'] as $value) {
            (new Product)->delete('sku', $value);
        }

        return $instance->response(array('status' => 'danger', 'message' => 'Deleted count of products: ' . count($inputs['data'])));
    }

    function response($response)
    {
        echo json_encode($response);
    }

}
;