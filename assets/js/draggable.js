drag(document.getElementById("sq"));
drag(document.getElementById("cr"));

function drag(x) {
  var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
    x.onmousedown = dragdwn;
  function dragdwn(e) {
    pos3 = e.clientX;
    pos4 = e.clientY;
    document.onmouseup = stopdrag;
    document.onmousemove = edrag;
  }

  function edrag(e) {
    pos1 = pos3 - e.clientX;
    pos2 = pos4 - e.clientY;
    pos3 = e.clientX;
    pos4 = e.clientY;
    x.style.top = (x.offsetTop - pos2) + "px";
    x.style.left = (x.offsetLeft - pos1) + "px";
  }

  function stopdrag() {
    const sl = $("#sq").offset().left;
    const st = $("#sq").offset().top;
    const Sl = $("#bigS").offset().left;
    const St = $("#bigS").offset().top;
    const cl = $("#cr").offset().left;
    const ct = $("#cr").offset().top;
    const Cl = $("#bigC").offset().left;
    const Ct = $("#bigC").offset().top;
    if ((sl-Sl > 0) && (st-St >0) && (sl-Sl<30) && (st-St<500) &&
        (cl-Cl > 0) && (ct-Ct >0) && (cl-Cl<30) && (ct-Ct<25)) {alert("win")}
    document.onmouseup = null;
    document.onmousemove = null;
  }
}