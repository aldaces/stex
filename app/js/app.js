// // Import jQuery module (npm i jquery)
import $ from 'jquery'
import magnificPopup from 'magnific-popup'
//window.jQuery = $
//window.$ = $

// // Import vendor jQuery plugin example (not module)
//require('~/app/libs/lightzoom/lightzoom.js');
//require('~/app/libs/lightzoom/magnific.js');



$(document).ready(function(){
    $(".head-menu").on("click","a", function (event) {
        event.preventDefault();
        var id  = $(this).attr('href'),
            top = $(id).offset().top;
        $('body,html').animate({scrollTop: top}, 500);
    });
});

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
$(document).ready(function() {
    $('.lightzoom').magnificPopup({
        type:'image',
        image: {
            titleSrc: 'title'
        },
        gallery:{
            enabled: true,
            navigateByImgClick: true
        },
        callbacks: {
            buildControls: function() {
                this.contentContainer.append(this.arrowLeft.add(this.arrowRight));
            }
        }
    });
});
$(document).ready(function() {
    $('.popup-modal').magnificPopup({
        modal: false
    });
});

(function($) {
    $(function() {
        $('nav ul li a:not(:only-child)').click(function(e) {
            $(this).siblings('.nav-dropdown').toggle();
            $('.dropdown').not($(this).siblings()).hide();
            e.stopPropagation();
        });
        $('html').click(function() {
            $('.nav-dropdown').hide();
        });
        $('#nav-toggle').click(function() {
            $('nav ul').slideToggle();
        });
        $('#nav-toggle').on('click', function() {
            this.classList.toggle('active');
        });
    });
})(jQuery);