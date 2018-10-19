var camera1,camera2,camera3, cam,scene, renderer;
var aquarium;
var geometry, material, mesh;
var ball = [];

 var raio = Math.sqrt(400**2+200**2)/20;

function randomRange(start, stop) {
    return Math.random() * (stop - start) + start; 
} 

function randomPos() {
    return [randomRange(-100+20.7, 100-20.7),randomRange(-50+20.7, 50-20.7)];
} 

// funcao que retorna -1 se estiver a colidir com uma parede
                    // 1 se estiver a colidir com uma bola
                    // 0 se nao estiver a colidir com nada
function validPos(x,z){   
    for(let i = 0;i<ball.length;i++){
        if(checkBallsCollision(x,y,ball[i].position.x,ball[i].position.z))
            return 1;
    }
    if(checkWallsCollision(x,z))
        return -1
    
    return 0;
}


function createScene() {
    'use strict';
    scene = new THREE.Scene();
    scene.add(new THREE.AxisHelper(20));

    let xz = randomPos();
    let y = Math.sqrt(400**2+200**2)/20;
    let i;
    let random;

    //cria as 10 bolas em posicoes random NOTA: apos criar as bolas e necessario verificar se
    for(i = 0;i < 4;i++){                       //estao em colisao, se estiverem chama-se a funcao de tratamento de colisoes
        xz = randomPos();
        for(let j = 0; j<i ; j++){
            if(checkBallsCollision(xz[0],xz[1],ball[j].position.x,ball[j].position.z)){
                xz = randomPos();
                j=-1;
            }
        }  

                            //y e a altura
        ball[i] = new Ball(xz[0],y,xz[1]);
        scene.add(ball[i]);
    }
    aquarium = new Aquarium(0,0,0);
    scene.add( aquarium );
    
    
}

function createCameras() {
    'use strict';
    var viewSize = 400;
    var aspectRatio = window.innerWidth / window.innerHeight;

    camera1 = new THREE.OrthographicCamera(-aspectRatio*viewSize/2, aspectRatio*viewSize/2,viewSize/2,-viewSize/2, -500,500);
    camera1.position.x = 0;
    camera1.position.y = 180;
    camera1.position.z = 0;
    camera1.lookAt(scene.position);
    
    camera2 = new THREE.PerspectiveCamera(90, 1.5, 4, 800);
    camera2.position.x = 500;
    camera2.position.y = 240;
    camera2.position.z = 240;
    camera2.lookAt(scene.position);
    

    camera3 = new THREE.PerspectiveCamera(90, 1.5, 4, 800);
    camera3.position.x = -500;
    camera3.position.y = 240;
    camera3.position.z = -240;
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
    
    
    case 69:    //E    
    case 101:    //e
        console.log('e');
        for(let i = 0; i < 10 ;i++){   
            console.log(i);
            ball[i].axis.visible = !ball[i].axis.visible;
            console.log(ball[i].axis.visible);
        }
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
