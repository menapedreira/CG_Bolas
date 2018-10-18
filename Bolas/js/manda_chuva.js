var camera1,camera2,camera3, cam,scene, renderer;
var aquarium;
var geometry, material, mesh;

function createScene() {
    'use strict';
    scene = new THREE.Scene();
    scene.add(new THREE.AxisHelper(20));

    aquarium = new Aquarium(0,0,0);
    scene.add( aquarium );
    
    
}

function createCameras() {
    'use strict';
    var viewSize = 200;
    var aspectRatio = window.innerWidth / window.innerHeight;

    camera1 = new THREE.OrthographicCamera(-aspectRatio*viewSize/2, aspectRatio*viewSize/2,viewSize/2,-viewSize/2, -500,500);
    camera1.position.x = 0;
    camera1.position.y = 0;
    camera1.position.z = 90;
    camera1.lookAt(scene.position);
    
    camera2 = new THREE.PerspectiveCamera(90, 1.5, 4, 450);
    camera2.position.x = 250;
    camera2.position.y = 120;
    camera2.position.z = 120;
    camera2.lookAt(scene.position);
    

    camera3 = new THREE.PerspectiveCamera(90, 1.5, 4, 450);
    camera3.position.x = -250;
    camera3.position.y = 120;
    camera3.position.z = -120;
    camera3.lookAt(scene.position);
    cam = camera1
   

}
function render() {
    'use strict';
    renderer.render(scene, cam);
}
function onKeyDown(e) {
    'use strict';
    
    switch (e.keyCode) {
    case 65: //A
    case 97: //a
    //para debug
        scene.traverse( function ( obj ) {
            var s = '|___';
            var obj2 = obj;
            while ( obj2 !== scene ) {
                s = '\t' + s;
                obj2 = obj2.parent;
            }
            console.log( s + obj.name + ' <' + obj.type + '>' );
            if(obj instanceof THREE.Mesh){
                obj.material.wireframe = !obj.material.wireframe;
            }            

        } );
        break;
    case 49:    //1
        cam = camera1;
        break;
    case 50:    //2
        cam = camera2;
        break;
    case 51:    //3
        cam = camera3;
        break;
    
    }
    render();
}
function init() {
    'use strict';
    renderer = new THREE.WebGLRenderer({
        antialias: true
    });
    renderer.setSize(window.innerWidth, window.innerHeight);
    document.body.appendChild(renderer.domElement);
   
    createScene();
    createCameras();
    
    render();
    
    window.addEventListener("keydown", onKeyDown);
   // window.addEventListener("resize", onResize);
    //window.addEventListener("keyup", onKeyUp);
}

function animate() {
    'use strict';
    
    render();
    
    requestAnimationFrame(animate);
}
