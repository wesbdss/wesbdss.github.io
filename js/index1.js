var c = document.getElementById('myCanvas');

var scene = new THREE.Scene();
var camera = new THREE.PerspectiveCamera(75, 350 / 250, 0.1, 1000);
var renderer = new THREE.WebGLRenderer({ canvas: c, antialias: true });
renderer.setSize(350, 250)
camera.position.set(0, 0, 2);
camera.lookAt(0, 0, 0);


/*
 * Adiciona um cubo2
 */
var geo = new THREE.BoxGeometry(0);
var mat = new THREE.MeshBasicMaterial({ color: 0x0000ff });
var cube = new THREE.Mesh(geo, mat);
var mat = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
var cube1 = new THREE.Mesh(geo, mat);
var mat = new THREE.MeshBasicMaterial({ color: 0xff0000 });
var cube2 = new THREE.Mesh(geo, mat);
cube.position.set(0,0,0);
scene.add(cube);
scene.add(cube1);
scene.add(cube2);



/*
 * Adiciona um luz pontual
 */

var light = new THREE.PointLight(0xff0000,1,100);
light.position.set(0,0,5);

scene.add(light);

function animate() {
    requestAnimationFrame(animate);
    cube.rotation.x += 0.1;
    cube.rotation.y += 0.1;
    cube1.rotation.x += 0.1;
    cube2.rotation.y += 0.1;
    renderer.render(scene, camera);
}

animate();
console.log("è pra rodar");