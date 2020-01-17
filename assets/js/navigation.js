$(document).ready(()=>{
    $('#loader').fadeToggle(1500);
    loader();
    $('#loader').fadeToggle(2000);
    setTimeout(()=>{
        $("#home").fadeToggle(600);
    },3500);
});

$('#shake').click(()=>{
    $("#home").fadeToggle(1000);
    setTimeout(()=>{
        $("#about").fadeToggle(1000);
    },1000);
});

$('#thinker').click(()=>{
    $("#about").fadeToggle(1000);
    setTimeout(()=>{
        $("#pitch3").fadeToggle(1000);
        gantt();
    },1000);
});

$('#gantt').click(()=>{
    $("#pitch3").fadeToggle(1000);
    setTimeout(()=>{
        $("#pitch4").fadeToggle(1000);
        logos();
    },1000);
});

$('#logos').click(()=>{
    $("#pitch4").fadeToggle(1000);
    setTimeout(()=>{
        $("#featured").fadeToggle(1000);
        box();
    },1000);
});

$('#trans').click(()=>{
    $("#pitch3").fadeToggle(1000);
    setTimeout(()=>{
        $("#featured").fadeToggle(1000);
    },1000);
});

/* Set the width of the side navigation to 250px */
function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
  }
  
  /* Set the width of the side navigation to 0 */
  function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
  }