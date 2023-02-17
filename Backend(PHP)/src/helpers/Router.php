<?php

class Router
{
    private $path = array();

    public function get(string $path, string $controller): void
    {
        array_push($this->path, array($path, $controller, 'get'));
    }

    public function post(string $path, string $controller): void
    {
        array_push($this->path, array($path, $controller, 'post'));
    }

    public function delete(string $path, string $controller): void
    {
        array_push($this->path, array($path, $controller, 'delete'));
    }

    public function check()
    {
        $key = array_search($_SERVER['PATH_INFO'], array_column($this->path, 0));

        if ($key !== false) {
            if ($this->path[$key][2] == 'get')
                return call_user_func($this->path[$key][1]);
            else
                return call_user_func($this->path[$key][1], $_POST);
        }

        return http_response_code(404);
    }
}
;