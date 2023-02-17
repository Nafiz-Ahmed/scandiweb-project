<?php
class Validator
{
    private $inputs;
    private $message = null;

    function __construct(array $inputs)
    {
        $this->inputs = $inputs['data'];
        $types = [
            "0" => (new Disk($this->inputs)),
            "1" => (new Book($this->inputs)),
            "2" => (new Furniture($this->inputs))
        ];

        $this->validate($types[$this->inputs['type']]);
    }

    public function validate(Validate $validate)
    {
        !$validate->validateSKU() && $this->message .= 'Wrong SKU or Already exist';
        !$validate->validateName() && $this->message .= 'Name is not valid';
        $validate->validatePrice() && $this->message .= 'Price is not valid';
        $validate->validateType() && $this->message .= 'Type is not Valid';
        !$validate->validateAttributes() && $this->message .= 'Attributes is not valid';

        ($this->message == null) && $this->saveData($validate);
        (!$this->message == null) && $this->response(array('status' => 'danger', 'message' => $this->message));
    }

    public function saveData($validate)
    {
        $validate->save();
        return $this->response(array('status' => 'success', 'message' => 'Product added to the database'));
    }

    function response($response)
    {
        echo json_encode($response);
    }

}
;