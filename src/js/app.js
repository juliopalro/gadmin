/*Script for gadmin*/

$( "#gadmin" ).on( "click", "button.navLeftToggler", function(event) {
  event.preventDefault();
  $("#leftPanel").toggleClass('leftPanelIco');
  $("#rightPanel").toggleClass('rightPanelIco');
  $(this).toggleClass('active');
});

$( "#gadmin" ).on( "click", "button.navLeftToggleSmall", function(event) {
  event.preventDefault();
  $("#leftPanel").toggleClass('hiddenSmall');
  $(this).toggleClass('active');
});

$( "#gadmin" ).on( "click", "button.navbar-toggler", function() {
  $(this).toggleClass('active');
});

/* Evento para mostrar y ocultar el menú principal en pantallas
para celulares */
$("#leftPanel").on("click",function(event) {
  event.preventDefault();
  console.log("Ocultando el menu izquierdo");
  $("#leftPanel").toggleClass('hiddenSmall');
  $("button.navLeftToggleSmall").toggleClass('active');
});
$("#leftMenu").on("click",function(event) {
  event.stopPropagation();
});

// mostrar y ocultar la lista de enlaces secundarios del menú
$("#leftMenu").on("click", ".menu-primary .nav-list",function(event) {
  event.preventDefault();
  $(this).toggleClass('hidden-list');
});
