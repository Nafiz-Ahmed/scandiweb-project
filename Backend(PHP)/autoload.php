<?php
spl_autoload_register(function ($class_name) {
    $directories = array(
        'src/helpers/',
        'src/error-handlers/',
        'src/core/',
        'src/core/database/',
        'src/core/models/',
        'src/core/product-controller/',
        'src/core/validators/',
    );

    $file_extension = '.php';

    foreach ($directories as $directory) {
        $file_path = $directory . str_replace('\\', '/', $class_name) . $file_extension;

        if (file_exists($file_path)) {
            require_once $file_path;
            return;
        }
    }
});