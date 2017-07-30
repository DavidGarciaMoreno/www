<?php

require_once 'vendor/autoload.php';

$app = new \Slim\Slim();
$db = new mysqli('localhost', 'root', '', 'curso_angular4');

// HTTP Headers Config
header('Access-Control-Allow-Origin: *');
header("Access-Control-Allow-Headers: X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Request-Method");
header("Access-Control-Allow-Methods: GET, POST, OPTIONS, PUT, DELETE");
header("Allow: GET, POST, OPTIONS, PUT, DELETE");
$method = $_SERVER['REQUEST_METHOD'];
if($method == "OPTIONS") {
    die();
}

$app->get("/pruebas", function() use($app, $db) {
	echo "Hola mundo desde Slim PHP";
});

$app->get("/probando", function() use($app) {
	echo "Hola mundo desde probando";
});

// GET ALL PRODUCTS
$app->get('/productos', function() use($app, $db) {
	$sql = 'SELECT * FROM productos ORDER BY id DESC';
	$query = $db->query($sql);

	$productos = array();
	while ($producto = $query->fetch_assoc()) {
		$productos[] = $producto;
	}

  $result = array(
  	"status" => 'success',
  	"code" => 200,
  	"data" => $productos
  );

  echo json_encode($result);
});

// GET A PRODUCT
$app->get('/productos/:id', function($id) use($app, $db) {
	$sql = 'SELECT * FROM productos WHERE id = '.$id;
	$query = $db->query($sql);

	$result = array(
  	'status' => 'error',
  	'code' => 404,
  	'message' => 'Producto no disponible'
  );

	if($query->num_rows == 1) {
		$producto = $query->fetch_assoc();

		$result = array(
  		'status' => 'success',
  		'code' => 200,
  		'data' => $producto
  	);
	}

	echo json_encode($result);
});

// DELETE A PRODUCT
$app->delete('/productos/:id', function($id) use($app, $db) {
	$sql = 'DELETE FROM productos WHERE id = '.$id;
	$query = $db->query($sql);

  if($db->affected_rows == 1) {
  	$result = array(
  		'status' => 'success',
  		'code' => 200,
  		'message' => 'Producto eliminado correctamente'
  	);
  } else {
		$result = array(
	  	'status' => 'error',
	  	'code' => 404,
	  	'message' => 'Producto no se ha eliminado'
	  );
  }

  echo json_encode($result);
});

$app->get('/delete-producto/:id', function($id) use($app, $db) {
	$sql = 'DELETE FROM productos WHERE id = '.$id;
	$query = $db->query($sql);

  if($db->affected_rows == 1) {
  	$result = array(
  		'status' => 'success',
  		'code' => 200,
  		'message' => 'Producto eliminado correctamente'
  	);
  } else {
		$result = array(
	  	'status' => 'error',
	  	'code' => 404,
	  	'message' => 'Producto no se ha eliminado'
	  );
  }

  echo json_encode($result);
});

// UPDATE A PRODUCT
$app->post('/update-producto/:id', function($id) use($app, $db) {
	$json = $app->request->post('json');
	$data = json_decode($json, true);

	if(!isset($data['name'])) {
  	$data['name']=null;
  }  

  if(!isset($data['description'])) {
  	$data['description']=null;
  }  

  if(!isset($data['price'])) {
  	$data['price']=null;
  }  

	$sql = "UPDATE productos SET ".
		     "name = '{$data['name']}', ".
		     "description = '{$data['description']}', ";

  if(isset($data['image'])){
    $sql .= "image = '{$data['image']}' ";
  }

  $sql .=	"price = '{$data['price']}' ".
		      "WHERE id = {$id}";

	$query = $db->query($sql);
  if($db->affected_rows == 1) {
  	$result = array(
  		'status' => 'success',
  		'code' => 200,
  		'message' => 'Producto actualizado correctamente'
  	);
  } else {
		$result = array(
	  	'status' => 'error',
	  	'code' => 404,
	  	'message' => 'Producto no se ha actualizado'
	  );
  }

  echo json_encode($result);
});


// UPLOAD A IMAGE
$app->post('/upload-file', function() use($app, $db){
  $result = array(
    'status' => 'error',
    'code' => 404,
    'message' => 'El archivo no ha podido subirse'
  );

  if(isset($_FILES['uploads'])) {
    $piramideUploader = new PiramideUploader();
    $upload = $piramideUploader->upload('image', 'uploads', 'uploads',
      array('image/jpeg', 'image/png', 'image/gif'));
    $file = $piramideUploader->getInfoFile();
    $file_name = $file['complete_name'];

    if(isset($upload) && $upload["uploaded"] == false){
      $result = array(
        'status' => 'error',
        'code' => 404,
        'message' => 'El archivo no ha podido subirse'
      );
    } else {
      $result = array(
        'status' => 'success',
        'code' => 200,
        'message' => 'El archivo se ha subido',
        'filename' => $file_name
      );
    }
  }

  echo json_encode($result);
});

// SAVE A PRODUCT
$app->post('/productos', function() use($app, $db) {
  $json = $app->request->post('json');
  $data = json_decode($json, true);

  if(!isset($data['name'])) {
  	$data['name']=null;
  }  

  if(!isset($data['description'])) {
  	$data['description']=null;
  }  

  if(!isset($data['price'])) {
  	$data['price']=null;
  }  

  if(!isset($data['image'])) {
  	$data['image']=null;
  }

  $query = 
  	"INSERT INTO productos VALUES(NULL,".
  	"'{$data['name']}',".
  	"'{$data['description']}',".
  	"'{$data['price']}',".
  	"'{$data['image']}'".
  	");";

  $insert = $db->query($query);

 	$result = array(
  		"status" => 'error',
  		"code" => 404,
  		"message" => 'Producto NO se ha creado'
  	);

  if($insert) {
  	$result = array(
  		"status" => 'success',
  		"code" => 200,
  		"message" => 'Producto creado correctamente'
  	);
  }

  echo json_encode($result);
});

$app->run();