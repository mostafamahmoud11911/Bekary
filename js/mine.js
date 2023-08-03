let offset = $("#about").offset().top;

$(window).scroll(function () {
  let currentScroll = $(window).scrollTop();
  if (currentScroll >= offset) {
    $(".navbar").css("backgroundColor", "rgba(0,0,0,0.7)");
  } else {
    $(".navbar").css("backgroundColor", "transparent");
  }
});
/* ********************* */

$(".nav-link").click(function () {
  let href = $(this).attr("href");
  let offset = $(href).offset().top;
  $("html,body").animate({ scrollTop: offset }, 1000);
});

/* ************************ */
let width = $(".color-box").width();

$("#toggleBtn").on("click", function () {
  if ($(".optionBox").css("left") === "0px") {
    $(".optionBox").animate({ left: -width }, 1000);
  } else {
    $(".optionBox").animate({ left: '0px' }, 1000);
  }
});

$(".optionBox").animate({ left: -width }, 0); 


/* ************************* */ 

let colorItem = $('.color-box ul li');


colorItem.eq(0).css('backgroundColor', 'red');
colorItem.eq(1).css('backgroundColor', '#09c');
colorItem.eq(2).css('backgroundColor', '#e5e');
colorItem.eq(3).css('backgroundColor', '#ff0');
colorItem.eq(4).css('backgroundColor', '#000');

colorItem.on('click' , function(e){
  let color = $(e.target).css('backgroundColor');
  $('h1 , h2 ,  h3 , h4').css('color' , color)
})