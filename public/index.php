<?php

require '../vendor/autoload.php';

use Illuminate\Database\Capsule\Manager as Capsule;

$capsule = new Capsule;

$capsule->addConnection([
    'driver'    => 'mysql',
    'host'      => '127.0.0.1',
    'database'  => 'sunset_main',
    'username'  => 'root',
    'password'  => '',
    'charset'   => 'utf8',
    'collation' => 'utf8_unicode_ci',
    'prefix'    => '',
]);

// Set the event dispatcher used by Eloquent models... (optional)
use Illuminate\Events\Dispatcher;
use Illuminate\Container\Container;
$capsule->setEventDispatcher(new Dispatcher(new Container));

// Make this Capsule instance available globally via static methods... (optional)
$capsule->setAsGlobal();

// Setup the Eloquent ORM... (optional; unless you've used setEventDispatcher())
$capsule->bootEloquent();

$app = new \Slim\Slim();

$app->get('/', function() use ($app) {
    readfile('index.html');
    $app->stop();
});


$app->get('/sunsetApp/products', function() {
    $products = Products::all();
    echo $products->toJson();
});

$app->get('/sunsetApp/products/:id', function($id) use($app) {
    $products = Products::find($id);
    if (is_null($products)) {
        $app->response->status(404);
        $app->stop();
    }
    echo $products->toJson();    
});

$app->post('/sunsetApp/products', function() use($app) {
    $body = $app->request->getBody();
    $obj = json_decode($body);
    $products = new Products;
    
    $products->myattr = $obj->{'myattr'};
    $products->save();
    $app->response->status(201);
    echo $products->toJson();    
});

$app->put('/sunsetApp/products/:id', function($id) use($app) {
    $body = $app->request->getBody();
    $obj = json_decode($body);
    $products = Products::find($id);
    if (is_null($products)) {
        $app->response->status(404);
        $app->stop();
    }
    
    $products->myattr = $obj->{'myattr'};
    $products->save();
    echo $products->toJson();    
});

$app->delete('/sunsetApp/products/:id', function($id) use($app) {
    $products = Products::find($id);
    if (is_null($products)) {
        $app->response->status(404);
        $app->stop();
    }
    $products->delete();
    $app->response->status(204);
});



$app->run();
