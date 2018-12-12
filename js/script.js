$(document).ready(function() {
    // Add smooth scrolling to all links
    $("a").on('click', function(event) {

        // Make sure this.hash has a value before overriding default behavior
        if (this.hash !== "") {
            // Prevent default anchor click behavior
            event.preventDefault();

            // Store hash
            var hash = this.hash;

            // Using jQuery's animate() method to add smooth page scroll
            // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 800, function() {

                // Add hash (#) to URL when done scrolling (default click behavior)
                window.location.hash = hash;
            });
        } // End if
    });


    $(window).scroll(function() {
        navbar = $('#navbar');
        navlink = $('.nav-link');
        navbrand = $('.navbar-brand');
        if ($(window).scrollTop() >= 50) {
            navbar.addClass('color');
            navlink.addClass('color-a');
            navbrand.addClass('color-a');
        } else {
            navbar.removeClass('color');
            navlink.removeClass('color-a');
            navbrand.removeClass('color-a');
        }
    });
});

// init Isotope
var $grid = $('.grid').isotope({
    itemSelector: '.selection'
});

// store filter for each group
var filters = {};

$('.filters').on('click', '.button', function(event) {
    var $button = $(event.currentTarget);
    // get group key
    var $buttonGroup = $button.parents('.button-group');
    var filterGroup = $buttonGroup.attr('data-filter-group');
    // set filter for group
    filters[filterGroup] = $button.attr('data-filter');
    // combine filters
    var filterValue = concatValues(filters);
    // set filter for Isotope
    $grid.isotope({ filter: filterValue });
});

// change is-checked class on buttons
$('.button-group').each(function(i, buttonGroup) {
    var $buttonGroup = $(buttonGroup);
    $buttonGroup.on('click', 'button', function(event) {
        $buttonGroup.find('.button-primary').removeClass('button-primary');
        var $button = $(event.currentTarget);
        $button.addClass('button-primary');
    });
});

$('.button-group').each(function(i, buttonGroup) {
    var $buttonGroup = $(buttonGroup);
    var $grid = $('.grid');
    $buttonGroup.on('click', 'button', function(event) {
        $grid.find('.hidden').toggleClass('hidden');
    });
});

// flatten object by concatting values
function concatValues(obj) {
    var value = '';
    for (var prop in obj) {
        value += obj[prop];
    }
    return value;
}