var mouseX = 0,
    mouseY = 0,
    halfX = window.innerWidth / 2,
    halfY = window.innerHeight / 2,
    camera,
    scene,
    renderer;
  
init();
animate();

function init() {

  	var container,
        particle;
    
    container = document.createElement( 'div' );
    document.body.insertBefore( container, document.body.firstChild );

    scene = new THREE.Scene();

    renderer = new THREE.CanvasRenderer({ alpha: true });
    renderer.setSize( window.innerWidth, window.innerHeight );
    container.appendChild( renderer.domElement );
    
    camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 1, 10000 );
    camera.position.z = 100;

	// Particles
    var tau = Math.PI * 2;
    var material = new THREE.SpriteCanvasMaterial({
    	color: 0xffffff,
    	program: function ( context ) {
            context.beginPath();
            context.arc( 0, 0, 0.5, 0, tau, true );
            context.fill();
        }
    });
    
    var geometry = new THREE.Geometry();

    for ( var i = 0; i < 100; i ++ ) {
        particle = new THREE.Sprite( material );
        particle.position.x = Math.random() * 2 - 1;
        particle.position.y = Math.random() * 2 - 1;
        particle.position.z = Math.random() * 2 - 1;
        particle.position.normalize();
        particle.position.multiplyScalar( Math.random() * 10 + 450 );
        particle.scale.x = particle.scale.y = 10;
        scene.add( particle );
        geometry.vertices.push( particle.position );
    }

    // Lines
    var line = new THREE.Line( geometry, new THREE.LineBasicMaterial( { color: 0xffffff, opacity: 0.5 } ) );
    scene.add( line );

    // Mouse
    document.addEventListener( 'mousemove', onDocumentMouseMove, false );
		document.addEventListener( 'touchstart', onDocumentTouchStart, false );
    document.addEventListener( 'touchmove', onDocTouchMove, false );
		
 		window.addEventListener( 'resize', onWindowResize, false );

} // End init();

function onWindowResize() {
    halfX = window.innerWidth / 2;
    halfY = window.innerHeight / 2;
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize( window.innerWidth, window.innerHeight );
}

function onDocumentMouseMove(event) {
    mouseX = event.clientX - halfX;
    mouseY = event.clientY - halfY;
}

function onDocumentTouchStart( event ) {

    if ( event.touches.length > 1 ) {
        event.preventDefault();
        mouseX = event.touches[ 0 ].pageX - halfX;
        mouseY = event.touches[ 0 ].pageY - halfY;
    }
}

function onDocTouchMove( event ) {
    if ( event.touches.length == 1 ) {
        event.preventDefault();
        mouseX = event.touches[ 0 ].pageX - halfX;
        mouseY = event.touches[ 0 ].pageY - halfY;
    }
}

function animate() {
    requestAnimationFrame( animate );
    render();
}

function render() {
    camera.position.x += ( mouseX - camera.position.x ) * .05;
    camera.position.y += ( - mouseY + 200 - camera.position.y ) * .05;
    camera.lookAt( scene.position );
    renderer.render( scene, camera );
}