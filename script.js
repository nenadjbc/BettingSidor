$('.expander').on('click', function(e){
    $('.desc').toggleClass('expanded');
    e.preventDefault();
});

$(".expander").click(function(event) {
    if($('#arrowupdown').hasClass('fa-angle-down')){
        $('#arrowupdown').removeClass('fa-angle-down');
        $('#arrowupdown').addClass('fa-angle-up');
    }
    else{
        $('#arrowupdown').removeClass('fa-angle-up');
        $('#arrowupdown').addClass('fa-angle-down');
    }
});

$('#opennav').on('click', function(e){
    $('.navmenu').toggleClass('active');
    e.preventDefault();
});

$("#opennav").click(function(event) {
    if($('#hamburger').hasClass('fa-bars')){
        $('#hamburger').removeClass('fa-bars');
        $('#hamburger').addClass('fa-xmark-large');
    }
    else{
        $('#hamburger').removeClass('fa-xmark-large');
        $('#hamburger').addClass('fa-bars');
    }
});