<?php

class Product extends QueryBuilder
{
    private $table_name = 'products';
    private $sku;
    private $name;
    private $price;
    private $type;
    private $attribute;

    function __construct()
    {
        parent::__construct($this->table_name);
    }

    public function setSku($sku)
    {
        $this->sku = $sku;
    }

    public function setName($name)
    {
        $this->name = $name;
    }

    public function setPrice($price)
    {
        $this->price = $price;
    }

    public function setType($type)
    {
        $this->type = $type;
    }

    public function setAttribute($attribute)
    {
        $this->attribute = $attribute;
    }

    public function getArray(): array
    {
        return array($this->sku, $this->name, $this->price, $this->type, $this->attribute);
    }

    public function find(string $sku)
    {
        return $this->select(['*'])->where('sku', '=', $sku)->get();
    }

    public function save()
    {
        return $this->insert(array($this->sku, $this->name, $this->price, $this->type, $this->attribute));
    }

    public function getAll()
    {
        return $this->select(['*'])->get();
    }

    public function validateSKU()
    {
        return (!preg_match('/\s/', $this->sku) && !$this->find($this->sku) && (strlen($this->sku) > 0));
    }

    public function validateName()
    {
        return (strlen($this->name) > 0);
    }

    public function validatePrice()
    {
        return !(filter_var($this->price, FILTER_VALIDATE_FLOAT) && (strlen($this->price) > 0) && floatval($this->price >= 0));
    }

    public function validateType()
    {
        return !(preg_match('/[0-2]/', $this->type) && (strlen($this->type) > 0));
    }

}
;