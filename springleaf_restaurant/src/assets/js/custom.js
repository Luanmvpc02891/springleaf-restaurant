
(function ($) {

  "use strict";

  // NAVBAR
  $('.navbar-nav .nav-link').click(function () {
    $(".navbar-collapse").collapse('hide');
  });

})(window.jQuery);

 // Lấy thời gian hiện tại
 var now = new Date().getTime();

 // Thời gian kết thúc đếm ngược: Hiện tại + 1 giờ
 var countdownDate = new Date(now + 3600000).getTime(); // 1 giờ = 3600000 milliseconds

 // Cập nhật đồng hồ đếm ngược mỗi 1 giây
 var x = setInterval(function() {
     var current = new Date().getTime();
     var distance = countdownDate - current;

     var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
     var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
     var seconds = Math.floor((distance % (1000 * 60)) / 1000);

     document.getElementById("countdown").innerHTML = hours + "h " + minutes + "m " + seconds + "s ";

     if (distance < 0) {
         clearInterval(x);
         document.getElementById("countdown").innerHTML = "Hết giờ";
     }
 }, 1000);