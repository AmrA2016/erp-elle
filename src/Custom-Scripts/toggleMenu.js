import $ from 'jquery';
$(function(){
    $(".triggreMenu").on('click',function(){
      if($(".right-menu").css('display') == "none"){
         $(".triggreMenu").removeClass("glyphicon-menu-hamburger").addClass("glyphicon-remove");
         $(".right-menu").css('display','block');

      }
      else{
        $(".triggreMenu").removeClass("glyphicon-remove").addClass("glyphicon-menu-hamburger");
        $(".right-menu").css('display',"none");
      }
    });
})
