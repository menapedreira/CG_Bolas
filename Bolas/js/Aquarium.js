
class Aquarium extends THREE.Object3D{
    constructor(x,y,z){
        'use strict'
        super();
        material = new THREE.MeshBasicMaterial({ color: 0x00ff00, wireframe: true });
        addFloor(this,0,0,0);
        addWallSides(this,100,20.7,0);
        addWallSides(this,-100,20.7,0);
        addWallFrontBack(this,0,20.7,50);
        addWallFrontBack(this,0,20.7,-50);
        this.children[2].rotation

        this.position.x = x;
        this.position.y = y;
        this.position.z = z;
        
        this.name = "aquarium"

    }
    
    
}
function addFloor(obj,x,y,z){
    geometry = new THREE.BoxGeometry(200, 0.2 ,100);
    mesh = new THREE.Mesh(geometry, material);
    mesh.position.set(x, y, z);
    obj.add(mesh);
}
function addWallSides(obj,x,y,z){
    geometry = new THREE.BoxGeometry(0.2,41.4,100);
    mesh = new THREE.Mesh(geometry, material);
    mesh.position.set(x, y, z);
    obj.add(mesh);
}
function addWallFrontBack(obj,x,y,z){
    geometry = new THREE.BoxGeometry(200,41.4,0.2);
    mesh = new THREE.Mesh(geometry, material);
    mesh.position.set(x, y, z);
    obj.add(mesh);
}

