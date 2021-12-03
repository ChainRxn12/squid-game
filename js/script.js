//  create camera 
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );

const renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );

//set background color
renderer.setClearColor( 0xb7c3f3, 1 );

// add ambient light
const light = new THREE.AmbientLight( 0xffffff );
scene.add( light );

// const geometry = new THREE.BoxGeometry();
// const material = new THREE.MeshBasicMaterial( { color: 0x00ff00 } );
// const cube = new THREE.Mesh( geometry, material );
// scene.add( cube );

camera.position.z = 5;

// gltf loader for models
const loader = new THREE.GLTFLoader();

// call loader function
loader.load("../SGmodels/scene.gltf", function(gltf) {
    scene.add( gltf.scene );
    //set scale and position of doll
    gltf.scene.scale.set(.4, .4, .4);
    gltf.scene.position.set(0, -1, 0);
});

// automatically animate geometry
function animate() {
    renderer.render( scene, camera );
	requestAnimationFrame( animate );
}
animate();

// create mobile/responsive canvas
window.addEventListener( 'resize' , onWindowResize, false );

function onWindowResize() {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize( window.innerWidth, window.innerHeight );
}