/*Script for gadmin*/

// $('[data-toggle="collapse-content"]').click(function(event) {
// 	event.preventDefault();
// 	$(this).parent().toggleClass('hidden-content');
//   $(this).toggleClass('rotate-180');
// });

$( "#gadmin" ).on( "click", "button.navLeftToggler", function(event) {
  event.preventDefault();
  $("#leftPanel").toggleClass('leftPanelIco');
  $("#rightPanel").toggleClass('rightPanelIco');
  $(this).toggleClass('active');

});
