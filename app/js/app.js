// // Import jQuery module (npm i jquery)
//import $ from 'jquery'
//window.jQuery = $
//window.$ = $

// // Import vendor jQuery plugin example (not module)
require('~/app/libs/lightzoom/lightzoom.js');

document.addEventListener('DOMContentLoaded', () => {

    var coll = document.getElementsByClassName("collapsible");
    var i;
    for (i = 0; i < coll.length; i++) {
        coll[i].addEventListener("click", function () {
            this.classList.toggle("active");
            var content = this.nextElementSibling;
            if (content.style.maxHeight) {
                content.style.maxHeight = null;
            } else {
                content.style.maxHeight = content.scrollHeight + "px";
            }
        });
    }
})
$(document).ready(function () {
    $('.lightzoom').lightzoom({
        isOverlayClickClosing: true
    });
});