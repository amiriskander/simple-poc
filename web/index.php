<?php 

require_once __DIR__.'/../vendor/autoload.php';

use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\JsonResponse;

$app = new Silex\Application();

$app->get('/', function() use($app) {
    return 'Hello World';
});

$app->get('/hello/{name}', function($name) use($app) {
    return new JsonResponse(['msg'=>'Hello '.$app->escape($name)],200);
});

$app->get('/message/{number}', function($number) use($app) {
    $messages = [];
    for($i=0; $i<$app->escape($number); $i++){
        $messages[$i] = 'Test Message '.$i;
    }
    return new JsonResponse(['msg'=>$messages],200);
});

$app->post('/message', function(Request $request) use($app){
    $message = $request->get('message');
    if(!$message){
        return new JsonResponse("Bad Request", 400);
    }
    return new JsonResponse(['msg'=>$message], 200);
});

$app->run();
