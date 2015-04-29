$(document).ready(function() {
    $('.dan').click(function() {
        alert('Hey you clicked on me');
    });
     $('#iwao').click(function() {
        $( ".dan" ).toggle();
    });
});
