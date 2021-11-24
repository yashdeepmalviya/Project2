 $(document).ready(function() {
//TEST       $('h1').click(function() { $(this).css('background-color','red') }); 


// FOR THE STICKY NAVIGATION

    $('.js--section-features').waypoint(function(direction) {
        if (direction == "down") {
            $('nav').addClass('sticky'); 
        }
        else {
            $('nav').removeClass('sticky');
        }
    },  { offset: '60px' }
    );
            // direction - określa czy strona jest scrollowana do góry czy do dołu
            // gdy scrollujemy w dół to class="sticky" zostanie dodana do <nav>, a przy scrollowaniu w górę zostanie usunięta
            // offset powoduje, że nowa klasa pojawia się/znika wcześniej o określoną odległość % lub px


// SCROLL ON BUTTONS

    $('.js--scroll-to-plans').click(function() {
        $('html, body').animate({scrollTop: $('.js--section-plans').offset().top}, 1000);
    });
            //gdy klikniemy na diva z klasą .js--scroll-to-plans, to zadzieje się to co określone w funkcji. Animacja, która scrolluje do top diva z klasą js--section-plans w czasie 1min=1000milisekund
    
    $('.js--scroll-to-features').click(function() {
        $('html, body').animate({scrollTop: $('.js--section-features').offset().top}, 400);
    });

      
// NAVIGATION SMOOTH SCROLL

        // Select all links with hashes
        $('a[href*="#"]')
        // Remove links that don't actually link to anything
        .not('[href="#"]')
        .not('[href="#0"]')
        .click(function(event) {
            // On-page links
            if (
            location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') 
            && 
            location.hostname == this.hostname
            ) {
            // Figure out element to scroll to
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            // Does a scroll target exist?
            if (target.length) {
                // Only prevent default if animation is actually gonna happen
                event.preventDefault();
                $('html, body').animate({
                scrollTop: target.offset().top
                }, 1000, function() {
                // Callback after animation
                // Must change focus!
                var $target = $(target);
                $target.focus();
                if ($target.is(":focus")) { // Checking if the target was focused
                    return false;
                } else {
                    $target.attr('tabindex','-1'); // Adding tabindex for elements not focusable
                    $target.focus(); // Set focus again
                };
                });
            }
            }
        });

// ANIMATIONS ON SCROLL

        $('.js--wp-1').waypoint(function(direction) {
            $('.js--wp-1').addClass('animated fadeIn'); 
        }, {
            offset: '60%'
        });
        
        $('.js--wp-2').waypoint(function(direction) {
            $('.js--wp-2').addClass('animated fadeIn'); 
        }, {
            offset: '60%'
        });
                //dzięki tej animacji w momencie scrollowania do diva z klasą .js--wp-1 zostaje dodana klasa .animated i .fadeIn. w css klasa js--wp-1 musi być ustawiona opacity: 0; w stanie wyjściowym, a w momencie gdy widoczne są obie klasy .js--wp-1.animated opacity: 1;
        
        $('.js--wp-3').waypoint(function(direction) {
            $('.js--wp-3').addClass('animated fadeInLeft'); 
        }, {
            offset: '60%'
        });

        $('.js--wp-4').waypoint(function(direction) {
            $('.js--wp-4').addClass('animated pulse'); 
        }, {
            offset: '60%'
        });

// MOBILE NAVIGATION

        $('.js--nav-icon').click(function() {
            var nav = $('.js--nav__list');
            var icon = $('.js--nav-icon i');

            nav.slideToggle(200);

            if (icon.hasClass('ion-ios-menu')) {
                icon.addClass('ion-ios-close');
                icon.removeClass('ion-ios-menu');
            }
            else {
                icon.addClass('ion-ios-menu');
                icon.removeClass('ion-ios-close');
            }
        });

// GMAPS

        var map = new GMaps({
            div: '.map',
            lat: 38.7203054,
            lng: -9.04,
            zoom: 12
        });

        map.addMarker({
            lat: 38.7241574,
            lng: -9.1372776,
            title: 'Lisbon',
            infoWindow: {
                content: '<p>Our Lisbon HQ</p>'
              }
        });

});
