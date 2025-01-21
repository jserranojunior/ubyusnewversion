console.log("rest");
var message = "";
function clickIE() {
  if (document.all) {
    message;
    return false;
  }
}
function clickNS(e) {
  if (document.layers || (document.getElementById && !document.all)) {
    if (e.which == 2 || e.which == 3) {
      message;
      return false;
    }
  }
}
if (document.layers) {
  document.captureEvents(Event.MOUSEDOWN);
  document.onmousedown = clickNS;
} else {
  document.onmouseup = clickNS;
  document.oncontextmenu = clickIE;
}

document.oncontextmenu = new Function("return false");

function ChangeSize(width, height) {
  window.parent.document.getElementById("Iframe1").width = width;
  window.parent.document.getElementById("Iframe1").height = height;
}
function toSubmit() {
  var form2 = document.getElementById("form2");
  form2.action = "https://profiles.dunsregistered.com/TPBR-BAS-004_POR.aspx";
  window.open(
    "",
    "formresult",
    "toolbar=0,scrollbars=1,location=0,statusbar=0,menubar=0,resizable=0,width=1020,height=700,Left=0,top=0,titlebar=yes"
  );
  form2.submit();
}
