$(document).ready(function() {
    // Elements we're working with
    var $moreBtn = $('.moreBtn');
    var $dropdownMenu = $('.dropdown-menu');
    
    // Show dropdown when hovering either button or menu
    $moreBtn.add($dropdownMenu).hover(
        function() {
            $dropdownMenu.addClass('show');
        },
        function() {
            // Hide when mouse leaves both button and menu
            // Use setTimeout to allow time to check if mouse moved to the other element
            setTimeout(function() {
                if (!$moreBtn.is(':hover') && !$dropdownMenu.is(':hover')) {
                    $dropdownMenu.removeClass('show');
                }
            }, 50);
        }
    );
    $('.togglebtn').click(function(){
        $('.header_wrapper header nav').toggleClass('menushow')
        $('.menuOpen , .menuClose').toggle()
    }) 
});