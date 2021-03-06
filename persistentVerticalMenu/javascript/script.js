$(document).ready(function(){

  function persistentMenu() {
    var headerHeight = $('#micrositeHeader').outerHeight(true);
    var heroHeight = $('.heroBox').outerHeight(true);
    var fullColumnHeight = $('#micrositeContentColumnFull').outerHeight(true);
    var mainHeaderHeight = $('#micrositeContentColumnMain > h1').outerHeight(true);
    var topSectionHeight = headerHeight + fullColumnHeight + mainHeaderHeight;
    var stoppingPoint = $('.mainContent').position().top + $('.mainContent').height() - $('.mainRightSidenav').height();

    if($('.mainRightSidenav').offset().top + $('.mainRightSidenav').height() >= $('#micrositeFooter').offset().top)
        $('.mainRightSidenav').css({'position':'absolute','top':stoppingPoint,'padding-left':'640px'});

    if($(document).scrollTop() + window.innerHeight < $('#micrositeFooter').offset().top && $(document).scrollTop() > topSectionHeight)
        $('.mainRightSidenav').css({'position':'fixed','top':'10px','padding-left':'640px'}); // restore when you scroll up

    if($(document).scrollTop() < $('.mainRightSidenav').offset().top)
        $('.mainRightSidenav').css({'position':'fixed','top':'10px','padding-left':'640px'}); // restore when you scroll up

    if($(document).scrollTop() < topSectionHeight)
        $('.mainRightSidenav').css({'position':'relative','top':'inherit','padding-left':'0'});
  }

  $(window).scroll(function(){
    persistentMenu();
  });


});