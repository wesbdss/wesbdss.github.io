
import loadingManager from './components/loader_html/index.module.js'
import moviment from './components/moviment/index.module.js'

// Start renderer
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

//load scene
import scene from './components/scene/index.module.js'

// Load object
import cube from './components/objects/index.module.js'
import base from './components/objects/base.module.js'

var player = cube
// Scene object
var scene_object = []
var scene_collidable = []
scene_object.push(base)
scene_collidable.push(base)
player.name = 'player'
player.jump = false
player.inbase=false
scene.add(player);
scene.add(base);

// Setting base
base.position.set(-1, -1, 0)

// //load camera
import camera from './components/camera/index.module.js'

// //Add object


// // Camera position
camera.position.z = -5;
camera.lookAt(0, 0, 0)


// // add animation
function animate() {
    requestAnimationFrame(animate);
    // context Animation
    renderer.render(scene, camera);

    try {
        if (detectCollisionCubes(player, scene_collidable).length)
        if (base in detectCollisionCubes(player, [base])){
            player.inbase = true
        }

    } catch (error) {
        console.error(error)

    }



}

function detectCollisionCubes(object1, object2) {
    object1.geometry.computeBoundingBox(); //not needed if its already calculated
    object1.updateMatrixWorld();
    let box1 = object1.geometry.boundingBox.clone();
    box1.applyMatrix4(object1.matrixWorld);

    let intersectobjs = []

    object2.forEach(
        obj => {
            obj.geometry.computeBoundingBox();
            obj.updateMatrixWorld();
            let boxobj = obj.geometry.boundingBox.clone();
            boxobj.applyMatrix4(obj.matrixWorld);
            if (box1.intersectsBox(boxobj)) {
                intersectobjs.push(obj)
            }
        }

    )
    return intersectobjs
}



loadingManager(animate)
// // Load objects
window.addEventListener('resize', resizeCanvas, false);

function resizeCanvas() {
    renderer.setSize(window.innerWidth, window.innerHeight);



    // Redraw everything after resizing the window
    renderer.render(scene, camera);
    animate();
}
resizeCanvas();


// window.addEventListener('keyup', (e) =>{
//     if (!e.repeat)
//         cube.rotation.x +=0.1
//     else
//         cube.rotation.x +=0.1
// });

window.addEventListener('keydown', (e) => {
    moviment(cube, e.key)

});

