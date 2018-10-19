var height = Math.sqrt(400**2+200**2)/10;
class Aquarium extends THREE.Object3D{
    constructor(x,y,z){
        'use strict'
        super();
        material = new THREE.MeshBasicMaterial({ color: 0x00ff00, wireframe: true });
       
        addFloor(this,0,0,0);
        addWallSides(this,200,height/2,0);
        addWallSides(this,-200,height/2,0);
        addWallFrontBack(this,0,height/2,100);
        addWallFrontBack(this,0,height/2,-100);
        this.children[2].rotation

        this.position.x = x;
        this.position.y = y;
        this.position.z = z;
        
        this.name = "aquarium"

        

    }
    
    
}
function addFloor(obj,x,y,z){
    geometry = new THREE.BoxGeometry(400, 0.2 ,200);
    mesh = new THREE.Mesh(geometry, material);
    mesh.position.set(x, y, z);
    obj.add(mesh);
}
function addWallSides(obj,x,y,z){
    geometry = new THREE.BoxGeometry(0.2,height,200);
    mesh = new THREE.Mesh(geometry, material);
    mesh.position.set(x, y, z);
    obj.add(mesh);
}
function addWallFrontBack(obj,x,y,z){
    geometry = new THREE.BoxGeometry(400,height,0.2);
    mesh = new THREE.Mesh(geometry, material);
    mesh.position.set(x, y, z);
    obj.add(mesh);
}

function checkWallsCollision(x,z){
    
}