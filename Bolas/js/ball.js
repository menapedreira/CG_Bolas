
var ballRadius = 20.7;
function checkBallsCollision(ax,ay,bx,by){
    let d = (ax-bx)**2 + (ay-by)**2;
    let r = (2*ballRadius)**2;
    if(d<r)
        return true;
    return false;
}

class Ball extends THREE.Object3D{
    constructor(x,y,z){
        'use strict';
        super();
        								 //(radius, widthSegments, heightSegments )
	    geometry = new THREE.SphereGeometry(ballRadius, 22, 22, 0);
	    material = new THREE.MeshBasicMaterial({ color: 0xEEEEEE, wireframe: true });
	    mesh = new THREE.Mesh(geometry, material);
	    this.add(mesh);

        this.name = "ball";
        
        this.position.x = x;
        this.position.y = y;
        this.position.z = z;

    }
}