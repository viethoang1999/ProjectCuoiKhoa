// external js: flickity.pkgd.js

$(document).ready(function() {
    var $gallery = $('.slider__wrapper').flickity({
        prevNextButtons: false,
        pageDots: false,
        // wrapAround: true,
        autoPlay: 3000
    });
    // Flickity instance
    var flkty = $gallery.data('flickity');
    // elements
    var $cellButtonGroup = $('.button-group--cells');
    var $cellButtons = $cellButtonGroup.find('.button');

    // previous
    var $previousButton = $('.button--previous').on('click', function() {
        $gallery.flickity('previous');
    });
    // next
    var $nextButton = $('.button--next').on('click', function() {
        $gallery.flickity('next');
    });

    // update selected cellButtons
    $gallery.on('cellSelect', function() {
        $cellButtons.filter('.is-selected')
            .removeClass('is-selected');
        $cellButtons.eq(flkty.selectedIndex)
            .addClass('is-selected');
        // enable/disable previous/next buttons
        if (!flkty.cells[flkty.selectedIndex - 1]) {
            $previousButton.attr('disabled', 'disabled');
            $nextButton.removeAttr('disabled'); // <-- remove disabled from the next
        } else if (!flkty.cells[flkty.selectedIndex + 1]) {
            $nextButton.attr('disabled', 'disabled');
            $previousButton.removeAttr('disabled'); //<-- remove disabled from the prev
        } else {
            $previousButton.removeAttr('disabled');
            $nextButton.removeAttr('disabled');
        }
    });

    // select cell on button click
    $cellButtonGroup.on('click', '.button', function() {
        var index = $(this).index();
        $gallery.flickity('select', index);
    });

});





///Categorylist
const btnClick = document.querySelector('.js-open')
const cateMenu = document.querySelector('.js-menu')

function showListCate() {
    cateMenu.classList.toggle('show')
}
btnClick.addEventListener('click', showListCate)