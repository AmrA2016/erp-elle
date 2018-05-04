import $ from 'jquery';
$(function(){
    $(document).on('click','.triggreMenu',function(){
      if($(".right-menu").css('display') == "none"){
         $(".triggreMenu").removeClass("glyphicon-menu-hamburger").addClass("glyphicon-remove");
         $(".right-menu").css('display','block');
         $('.header').css('z-index',999);
      }
      else{
        $(".triggreMenu").removeClass("glyphicon-remove").addClass("glyphicon-menu-hamburger");
        $(".right-menu").css('display',"none");
          $('.header').css('z-index',99);
      }
    });
})
