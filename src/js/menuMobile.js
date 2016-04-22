document.querySelector( "#nav-toggle" ).addEventListener( "click", function() {
  this.classList.toggle( "active" );
});

$("#nav-toggle").click(function () {
  if($('nav').hasClass('visible')){
    $('nav').animate({ "right": "-=1180px" }, "fast" ).removeClass('visible');
  }else{

   $('nav').addClass('visible').animate({ "right": "+=1180px" }, "fast" );
 }
});