<?php

class Book extends Product implements Validate
{
    protected $inputs;

    function __construct(array $inputs)
    {
        parent::__construct();
        $this->inputs = $inputs;

        $this->setSku($inputs['sku']);
        $this->setName($inputs['name']);
        $this->setPrice($inputs['price']);
        $this->setType($inputs['type']);
    }

    public function validateAttributes()
    {
        if (is_numeric($this->inputs['weight']) && floatval($this->inputs['weight'] >= 0)) {
            $attributeValue = $this->inputs['weight'] . ' KG';
            $this->setAttribute($attributeValue);
            return true;
        }

        return false;
    }
}
;