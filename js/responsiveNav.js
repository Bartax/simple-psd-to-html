$(document).ready(function(){
    $('#toggle-nav').click(function(e){
        $('#nav-menu ul').toggleClass('active');
        
        e.preventDefault();
    });
    
});

