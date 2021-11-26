$(document).ready(function(){
    $('ul.list-group li:first').addClass('active-item');
    $('.secciones article').hide();
    $('.secciones article:first').show();

    $('li.list-group-item').click(function(){
        $('.list-group-item').removeClass('active-item');
        $(this).addClass('active-item');
    });
    $('li.list-group-item a').click(function(){
        $('.secciones article').hide();
        var activeTab = $(this).attr('href');
        $(activeTab).show();
    });
});