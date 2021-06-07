// // Import jQuery module (npm i jquery)
//import $ from 'jquery'
//window.jQuery = $
//window.$ = $

// // Import vendor jQuery plugin example (not module)
require('~/app/libs/lightzoom/lightzoom.js');

document.addEventListener('DOMContentLoaded', () => {

	// Custom JS

})
$( document ).ready(function() {
    $('.lightzoom').lightzoom(
        {
            isOverlayClickClosing: true
        }
    );
});
