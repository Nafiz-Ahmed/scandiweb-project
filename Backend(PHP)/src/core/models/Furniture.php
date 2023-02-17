<?php

class Furniture extends Product implements Validate
{
    private $inputs;
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
        if (is_numeric($this->inputs['height']) && is_numeric($this->inputs['width']) && is_numeric($this->inputs['length']) && floatval($this->inputs['height'] >= 0) && floatval($this->inputs['width'] >= 0) && floatval($this->inputs['length'] >= 0)) {
            $attributeValue = $this->inputs['height'] . 'x' . $this->inputs['width'] . 'x' . $this->inputs['length'];
            $this->setAttribute($attributeValue);
            return true;
        }

        return false;
    }

}
;