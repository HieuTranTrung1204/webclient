$( "img" ).click(function(e) {
    e.preventDefault();
    $('.tr-viewimg #ct').attr('src', $(this).attr("src"));
    $('.tr-viewimg').show();
});

$(".btnclose").click(function(){
    $('.tr-viewimg').hide();
})

$(".tr-viewimg").click(function(e) {
     e.preventDefault();
})