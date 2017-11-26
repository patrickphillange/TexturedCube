   1 var camera;
   2 var scene;
   3 var renderer;
   4 var mesh;
   5 
   6 
   7 init();
   8 animate();
   9 
  10 function init() {
  11 
  12     scene = new THREE.Scene();
  13     camera = new THREE.PerspectiveCamera( 70, window.innerWidth / window.innerHeight, 1, 1000);
  14 
  15     var light = new THREE.DirectionalLight( 0xffffff );
  16     light.position.set( 0, 1, 1 ).normalize();
  17     scene.add(light);
  18 
  19     var geometry = new THREE.CubeGeometry( 10, 10, 10);
  20 
  21     var material = new THREE.MeshPhongMaterial( { map: THREE.ImageUtils.loadTexture('images/texture-atlas.jpg') } );
  22 
  23     var bricks = [new THREE.Vector2(0, .666), new THREE.Vector2(.5, .666), new THREE.Vector2(.5, 1), new THREE.Vector2(0, 1)];
  24     var clouds = [new THREE.Vector2(.5, .666), new THREE.Vector2(1, .666), new THREE.Vector2(1, 1), new THREE.Vector2(.5, 1)];
  25     var crate = [new THREE.Vector2(0, .333), new THREE.Vector2(.5, .333), new THREE.Vector2(.5, .666), new THREE.Vector2(0, .666)];
  26     var stone = [new THREE.Vector2(.5, .333), new THREE.Vector2(1, .333), new THREE.Vector2(1, .666), new THREE.Vector2(.5, .666)];
  27     var water = [new THREE.Vector2(0, 0), new THREE.Vector2(.5, 0), new THREE.Vector2(.5, .333), new THREE.Vector2(0, .333)];
  28     var wood = [new THREE.Vector2(.5, 0), new THREE.Vector2(1, 0), new THREE.Vector2(1, .333), new THREE.Vector2(.5, .333)];
  29 
  30     geometry.faceVertexUvs[0] = [];
  31 
  32         geometry.faceVertexUvs[0][0] = [ bricks[0], bricks[1], bricks[3] ];
  33         geometry.faceVertexUvs[0][1] = [ bricks[1], bricks[2], bricks[3] ];
  34 
  35         geometry.faceVertexUvs[0][2] = [ clouds[0], clouds[1], clouds[3] ];
  36         geometry.faceVertexUvs[0][3] = [ clouds[1], clouds[2], clouds[3] ];
  37 
  38         geometry.faceVertexUvs[0][4] = [ crate[0], crate[1], crate[3] ];
  39         geometry.faceVertexUvs[0][5] = [ crate[1], crate[2], crate[3] ];
  40 
  41         geometry.faceVertexUvs[0][6] = [ stone[0], stone[1], stone[3] ];
  42         geometry.faceVertexUvs[0][7] = [ stone[1], stone[2], stone[3] ];
  43 
  44         geometry.faceVertexUvs[0][8] = [ water[0], water[1], water[3] ];
  45         geometry.faceVertexUvs[0][9] = [ water[1], water[2], water[3] ];
  46 
  47         geometry.faceVertexUvs[0][10] = [ wood[0], wood[1], wood[3] ];
  48         geometry.faceVertexUvs[0][11] = [ wood[1], wood[2], wood[3] ];
  49 
  50     mesh = new THREE.Mesh(geometry,  material);
  51     mesh.position.z = -50;
  52     scene.add( mesh );
  53 
  54     renderer = new THREE.WebGLRenderer();
  55     renderer.setSize( window.innerWidth, window.innerHeight );
  56     document.body.appendChild( renderer.domElement );
  57 
  58     window.addEventListener( 'resize', onWindowResize, false );
  59 
  60     render();
  61 }
  62 
  63 function animate() {
  64     mesh.rotation.x += .04;
  65     mesh.rotation.y += .02;
  66 
  67     render();
  68     requestAnimationFrame( animate );
  69 }
  70 
  71 function render() {
  72     renderer.render( scene, camera );
  73 }
  74 
  75 
  76 function onWindowResize() {
  77     camera.aspect = window.innerWidth / window.innerHeight;
  78     camera.updateProjectionMatrix();
  79     renderer.setSize( window.innerWidth, window.innerHeight );
  80     render();
  81 }
