(function($){
    $(window).load(function(){
        let minScroll = 2,
            interval = 0,
            closeDropdownOnScroll = true,
            didScroll,
            lastScrollTop = $(document).scrollTop(),
            topHeader = $('#top-header'),
            mainHeaderHeight = $('#main-header').outerHeight(),
            topHeaderHeight = topHeader.length ? $('#top-header').outerHeight() : 0,
            mainHeaderTopOffset = mainHeaderHeight + 22;
            console.log('mainheader height' + mainHeaderTopOffset + ' top header is ' + topHeaderHeight);

        $(window).scroll(function(e){
            didScroll = true;
            if(closeDropdownOnScroll){
                closeDropdownMenu();
            }
        });

        setInterval(function(){
            if (didScroll){
                hasScrolled();
                didScroll = false;
            }
        }, interval);

        /**
         * Close dropdown menu
         */
        function closeDropdownMenu(){
            $("#main-header .mobile_nav.opened .mobile_menu_bar_toggle").trigger("click");
            // console.log('clicked mobile');
        }

        /**
         * Show/hide header
         */
        function hasScrolled(){
            let scrollTop = $(this).scrollTop();

            // Make sure the scrolled amount is more than minScroll
            if(Math.abs(lastScrollTop - scrollTop) <= minScroll)
                return;

            // If the page's been scrolled down by more than the header height - hide the header.
            if (scrollTop > lastScrollTop && scrollTop > 0){
                // Hide the main header
                console.log('header resize');
                $('#main-header').removeClass('nav-down').addClass('nav-up');
                $('#main-header.nav-up').css({'top' : `-${mainHeaderTopOffset}px`});

                // Hide the top header (if exists)
                if(topHeader.length){
                    $('#top-header').removeClass('nav-down').addClass('nav-up');
                    $('#top-header.nav-up').css({'top' : `-${topHeaderHeight}px`});
                }

            } else {
                // Show the header when scrolling up
                if(scrollTop + $(window).height() < $(document).height()){
                    // Show the main header
                    $('#main-header').removeClass('nav-up').addClass('nav-down');
                    $('#main-header.nav-down').css({'top' : `${topHeaderHeight}px`});

                    // Show the top header (if exists)
                    if(topHeader.length){
                        $('#top-header').removeClass('nav-up').addClass('nav-down');
                        $('#top-header.nav-down').css({'top' : `0px`});
                    }
                }
            }

            // Update the last scroll position
            lastScrollTop = scrollTop;
        }
    });
})(jQuery);
