export default (animate) => {

    const loadingScreen = document.getElementById( 'loading-screen' );

    loadingScreen.classList.add( 'fade-out' );
    loadingScreen.addEventListener( 'transitionend', onTransitionEnd );

    animate();

}

function onTransitionEnd( event ) {
    event.target.remove();
}