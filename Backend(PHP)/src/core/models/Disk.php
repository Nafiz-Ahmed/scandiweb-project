<?php

class Disk extends Product implements Validate
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
        if (is_numeric($this->inputs['size']) && floatval($this->inputs['size'] >= 0)) {
            $attributeValue = $this->inputs['size'] . ' MB';
            $this->setAttribute($attributeValue);
            return true;
        }

        return false;
    }
}
;