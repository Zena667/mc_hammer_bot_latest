$(document).ready(function() {
  // var e = "Hello World"
  var player2 = "Goodbye World"
  // var forward = "F!"
  // var xTriggered = 0

  $("#forward").keypress(function(e) {
    $(this).append().text(e.type + ': ' +  e.which );
  });

  $("#backward").keydown(function() {
    $(this).append().text(player2);
  });


  // $("#forward").on("click", function() {
  //   $(this).append().text(player1);
  // });

  $("#backward").on("click", function() {
    $(this).append().text(player2);
  });

  $("#right").on("click", function() {
    $(this).append().text(player2);
  });

  $("#left").on("click", function() {
    $(this).append().text(player2);
  });

  $("#straferight").on("click", function() {
    $(this).append().text(player2);
  });

  $("#strafeleft").on("click", function() {
    $(this).append().text(player2);
  });

  $('#other').click(function() {
  $('#target').keydown();
});

});

// <input id="whichkey" value="type something">
// <div id="log"></div>

// <script>$('#whichkey').on('keydown',function(e){
//   $('#log').html(e.type + ': ' +  e.which );
// });  </script>




// $(document).ready(function() {
//   $(".robot").on("click", function() {
//   $(this).children().toggleClass("dont-display");
//   });
//   var sayHello = function() {
//     return('Hello');
//   };
// });