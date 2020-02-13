var c = document.getElementById('myCanvas');

var scene = new THREE.Scene();
var camera = new THREE.PerspectiveCamera(75, window.innerWidth / 300, 0.1, 1000);
var renderer = new THREE.WebGLRenderer({ canvas: c });
renderer.setSize(window.innerWidth, 300)

camera.position.set(0, 0, 5);
camera.lookAt(0, 0, 0);

/*
 * Adiciona um cubo
 */
var geo = new THREE.BoxGeometry();
var mat = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
var cube = new THREE.Mesh(geo, mat);

// scene.add(cube);
// cube.position.set(0, 0, 0);

var loader = new THREE.FontLoader();
loader.load('./font/Monster Friend Back_Regular.js', function (font) {
    var parametros = {
        font: font,size: 80, height: 5, curveSegments: 12, bevelEnable: true, benelThickness: 10, bevelSize: 8, bevelOffset: 0, bevelSegments: 5
    };
    var text = new THREE.TextGeometry("Oie", parametros);
    scene.add(text);

});



function animate() {
    requestAnimationFrame(animate);

    renderer.render(scene, camera);
}

animate();