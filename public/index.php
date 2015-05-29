<?php

require '../vendor/autoload.php';

use Illuminate\Database\Capsule\Manager as Capsule;

$capsule = new Capsule;

$capsule->addConnection([
    'driver'    => 'mysql',
    'host'      => 'localhost',
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
    //$products = Products::with('Colour')->get();
    //$profiles = Profiles::all();
    $products = Products::with( 'Colour', 'Height', 'Rabbet')->get();
   
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

$app->put('/sunsetApp/products/:id', function($prod_id) use($app) {
    $body = $app->request->getBody();
    $obj = json_decode($body);
    $products = Products::find($prod_id);
    if (is_null($products)) {
        $app->response->status(4040);
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


$app->get('/sunsetApp/profiles', function() {
    $profiles = Profiles::all();
    echo $profiles->toJson();
});

$app->get('/sunsetApp/profiles/:id', function($id) use($app) {
    $profiles = Profiles::find($id);
    if (is_null($profiles)) {
        $app->response->status(404);
        $app->stop();
    }
    echo $profiles->toJson();    
});

$app->post('/sunsetApp/profiles', function() use($app) {
    $body = $app->request->getBody();
    $obj = json_decode($body);
    $profiles = new Profiles;
    
    $profiles->myattr = $obj->{'myattr'};
    $profiles->save();
    $app->response->status(201);
    echo $profiles->toJson();    
});

$app->put('/sunsetApp/profiles/:id', function($id) use($app) {
    $body = $app->request->getBody();
    $obj = json_decode($body);
    $profiles = Profiles::find($id);
    if (is_null($profiles)) {
        $app->response->status(404);
        $app->stop();
    }
    
    $profiles->myattr = $obj->{'myattr'};
    $profiles->save();
    echo $profiles->toJson();    
});

$app->delete('/sunsetApp/profiles/:id', function($id) use($app) {
    $profiles = Profiles::find($id);
    if (is_null($profiles)) {
        $app->response->status(404);
        $app->stop();
    }
    $profiles->delete();
    $app->response->status(204);
});



$app->run();
