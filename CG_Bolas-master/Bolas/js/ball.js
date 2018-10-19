
var ballRadius = Math.sqrt(400**2+200**2)/20;
function checkBallsCollision(ax,az,bx,bz){
    let d = (ax-bx)**2 + (az-bz)**2;
    let r = (2*ballRadius)**2;
    if(d<=r)
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
        this.axis = new THREE.AxisHelper(50);
        this.add(this.axis);
        
        this.position.x = x;
        this.position.y = y;
        this.position.z = z;

    }
}