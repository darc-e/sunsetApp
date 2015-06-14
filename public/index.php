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
    $products = Products::with( 'Rabbet', 'Colour', 'Height', 'Profile')->get();
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


$app->get('/sunsetApp/profiles', function() {
    $profiles = Profiles::with('Products', 'Colours')->get();
    
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


$app->get('/sunsetApp/rabbets', function() {
    $rabbets = Rabbets::all();
    echo $rabbets->toJson();
});

$app->get('/sunsetApp/rabbets/:id', function($id) use($app) {
    $rabbets = Rabbets::find($id);
    if (is_null($rabbets)) {
        $app->response->status(404);
        $app->stop();
    }
    echo $rabbets->toJson();    
});

$app->post('/sunsetApp/rabbets', function() use($app) {
    $body = $app->request->getBody();
    $obj = json_decode($body);
    $rabbets = new Rabbets;
    
    $rabbets->myattr = $obj->{'myattr'};
    $rabbets->save();
    $app->response->status(201);
    echo $rabbets->toJson();    
});

$app->put('/sunsetApp/rabbets/:id', function($id) use($app) {
    $body = $app->request->getBody();
    $obj = json_decode($body);
    $rabbets = Rabbets::find($id);
    if (is_null($rabbets)) {
        $app->response->status(404);
        $app->stop();
    }
    
    $rabbets->myattr = $obj->{'myattr'};
    $rabbets->save();
    echo $rabbets->toJson();    
});

$app->delete('/sunsetApp/rabbets/:id', function($id) use($app) {
    $rabbets = Rabbets::find($id);
    if (is_null($rabbets)) {
        $app->response->status(404);
        $app->stop();
    }
    $rabbets->delete();
    $app->response->status(204);
});


$app->get('/sunsetApp/heights', function() {
    $heights = Heights::all();
    echo $heights->toJson();
});

$app->get('/sunsetApp/heights/:id', function($id) use($app) {
    $heights = Heights::find($id);
    if (is_null($heights)) {
        $app->response->status(404);
        $app->stop();
    }
    echo $heights->toJson();    
});

$app->post('/sunsetApp/heights', function() use($app) {
    $body = $app->request->getBody();
    $obj = json_decode($body);
    $heights = new Heights;
    
    $heights->myattr = $obj->{'myattr'};
    $heights->save();
    $app->response->status(201);
    echo $heights->toJson();    
});

$app->put('/sunsetApp/heights/:id', function($id) use($app) {
    $body = $app->request->getBody();
    $obj = json_decode($body);
    $heights = Heights::find($id);
    if (is_null($heights)) {
        $app->response->status(404);
        $app->stop();
    }
    
    $heights->myattr = $obj->{'myattr'};
    $heights->save();
    echo $heights->toJson();    
});

$app->delete('/sunsetApp/heights/:id', function($id) use($app) {
    $heights = Heights::find($id);
    if (is_null($heights)) {
        $app->response->status(404);
        $app->stop();
    }
    $heights->delete();
    $app->response->status(204);
});


$app->get('/sunsetApp/colours', function() {
    $colours = Colours::all();
    echo $colours->toJson();
});

$app->get('/sunsetApp/colours/:id', function($id) use($app) {
    $colours = Colours::find($id);
    if (is_null($colours)) {
        $app->response->status(404);
        $app->stop();
    }
    echo $colours->toJson();    
});

$app->post('/sunsetApp/colours', function() use($app) {
    $body = $app->request->getBody();
    $obj = json_decode($body);
    $colours = new Colours;
    
    $colours->myattr = $obj->{'myattr'};
    $colours->save();
    $app->response->status(201);
    echo $colours->toJson();    
});

$app->put('/sunsetApp/colours/:id', function($id) use($app) {
    $body = $app->request->getBody();
    $obj = json_decode($body);
    $colours = Colours::find($id);
    if (is_null($colours)) {
        $app->response->status(404);
        $app->stop();
    }
    
    $colours->myattr = $obj->{'myattr'};
    $colours->save();
    echo $colours->toJson();    
});

$app->delete('/sunsetApp/colours/:id', function($id) use($app) {
    $colours = Colours::find($id);
    if (is_null($colours)) {
        $app->response->status(404);
        $app->stop();
    }
    $colours->delete();
    $app->response->status(204);
});


$app->get('/sunsetApp/wheretobuys', function() {
    $wheretobuys = WhereToBuy::all();
    echo $wheretobuys->toJson();
});

$app->get('/sunsetApp/wheretobuys/:id', function($id) use($app) {
    $whereToBuy = WhereToBuy::find($id);
    if (is_null($whereToBuy)) {
        $app->response->status(404);
        $app->stop();
    }
    echo $whereToBuy->toJson();    
});

$app->post('/sunsetApp/wheretobuys', function() use($app) {
    $body = $app->request->getBody();
    $obj = json_decode($body);
    $whereToBuy = new WhereToBuy;
    
    $whereToBuy->myattr = $obj->{'myattr'};
    $whereToBuy->save();
    $app->response->status(201);
    echo $whereToBuy->toJson();    
});

$app->put('/sunsetApp/wheretobuys/:id', function($id) use($app) {
    $body = $app->request->getBody();
    $obj = json_decode($body);
    $whereToBuy = WhereToBuy::find($id);
    if (is_null($whereToBuy)) {
        $app->response->status(404);
        $app->stop();
    }
    
    $whereToBuy->myattr = $obj->{'myattr'};
    $whereToBuy->save();
    echo $whereToBuy->toJson();    
});

$app->delete('/sunsetApp/wheretobuys/:id', function($id) use($app) {
    $whereToBuy = WhereToBuy::find($id);
    if (is_null($whereToBuy)) {
        $app->response->status(404);
        $app->stop();
    }
    $whereToBuy->delete();
    $app->response->status(204);
});


$app->get('/sunsetApp/catalogues', function() {
    $catalogues = Catalogue::all();
    echo $catalogues->toJson();
});

$app->get('/sunsetApp/catalogues/:id', function($id) use($app) {
    $catalogue = Catalogue::find($id);
    if (is_null($catalogue)) {
        $app->response->status(404);
        $app->stop();
    }
    echo $catalogue->toJson();    
});

$app->post('/sunsetApp/catalogues', function() use($app) {
    $body = $app->request->getBody();
    $obj = json_decode($body);
    $catalogue = new Catalogue;
    
    $catalogue->myattr = $obj->{'myattr'};
    $catalogue->save();
    $app->response->status(201);
    echo $catalogue->toJson();    
});

$app->put('/sunsetApp/catalogues/:id', function($id) use($app) {
    $body = $app->request->getBody();
    $obj = json_decode($body);
    $catalogue = Catalogue::find($id);
    if (is_null($catalogue)) {
        $app->response->status(404);
        $app->stop();
    }
    
    $catalogue->myattr = $obj->{'myattr'};
    $catalogue->save();
    echo $catalogue->toJson();    
});

$app->delete('/sunsetApp/catalogues/:id', function($id) use($app) {
    $catalogue = Catalogue::find($id);
    if (is_null($catalogue)) {
        $app->response->status(404);
        $app->stop();
    }
    $catalogue->delete();
    $app->response->status(204);
});


$app->get('/sunsetApp/contacts', function() {
    $contacts = Contact::all();
    echo $contacts->toJson();
});

$app->get('/sunsetApp/contacts/:id', function($id) use($app) {
    $contact = Contact::find($id);
    if (is_null($contact)) {
        $app->response->status(404);
        $app->stop();
    }
    echo $contact->toJson();    
});

$app->post('/sunsetApp/contacts', function() use($app) {
    $body = $app->request->getBody();
    $obj = json_decode($body);
    $contact = new Contact;
    
    $contact->myattr = $obj->{'myattr'};
    $contact->save();
    $app->response->status(201);
    echo $contact->toJson();    
});

$app->put('/sunsetApp/contacts/:id', function($id) use($app) {
    $body = $app->request->getBody();
    $obj = json_decode($body);
    $contact = Contact::find($id);
    if (is_null($contact)) {
        $app->response->status(404);
        $app->stop();
    }
    
    $contact->myattr = $obj->{'myattr'};
    $contact->save();
    echo $contact->toJson();    
});

$app->delete('/sunsetApp/contacts/:id', function($id) use($app) {
    $contact = Contact::find($id);
    if (is_null($contact)) {
        $app->response->status(404);
        $app->stop();
    }
    $contact->delete();
    $app->response->status(204);
});






$app->run();
