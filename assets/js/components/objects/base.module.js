const geometry = new THREE.BoxGeometry(window.innerWidth,1);
const material = new THREE.MeshBasicMaterial( { color: 0x00ffff } );
const base = new THREE.Mesh( geometry, material );

export default base;