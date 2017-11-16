(function(){
    function padBodyForContact(){
        let contactHeight = $('.contact-me.contact-me--static').height();
        $('body').css({'padding-bottom': (contactHeight + 20) +  'px'})
    }

    $( window ).resize(function() {
        padBodyForContact();
    });

    padBodyForContact();    
}());