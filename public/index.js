let count = 0;
let result = 0;
//checking if the browser is Internet Explorer
var isIEX = navigator.userAgent.match(/Trident/);

var doc = isIEX ? document.documentElement : document.body;

function getDocTopLeftPos() {
  scrollTop = window.pageYOffset || doc.scrollTop;
  scrollLeft = window.pageXOffset || doc.scrollLeft;

  clientTop = doc.clientTop || 0;
  clientLeft = doc.clientLeft || 0;

  fromTop = Math.round(scrollTop - clientTop);
  fromLeft = Math.round(scrollLeft - clientLeft);
  //console.log("From Top: ", fromTop, "from Left:", fromLeft);
  return { fT: fromTop, fL: fromLeft };
}

//get the value of the property of the specified element
function getElProps(el, attr) {
  whaT_ = isIEX ? el.currentStyle : window.getComputedStyle(el);

  getWhaT_ = isIEX ? whaT_.getAttribute(attr) : whaT_.getPropertyValue(attr);
  return getWhaT_;
}

//getting the coordinates of the mouse
function cords(ev) {
  if (ev.pageX == null && ev.clientX != null) {
    var html = document.documentElement;
    var body = document.body;
    ev.pageX =
      ev.clientX +
      ((html && html.scrollLeft) || (body && body.scrollLeft) || 0) -
      (html.clientLeft || 0);
    ev.pageY =
      ev.clientY +
      ((html && html.scrollTop) || (body && body.scrollTop) || 0) -
      (html.clientTop || 0);
  }
  return { x: ev.pageX, y: ev.pageY };
}

var x, y;

var dragZone = document.getElementById("dropzone");
var dragZone1 = document.getElementById("dropzone1");
var dragZone2 = document.getElementById("dropzone2");
var dragZone3 = document.getElementById("dropzone3");

//getting our element's coordinates
//the mouse should be between these coordinates, otherwise that wouldn't be the dropzone

//from top
var elTop = dragZone.getBoundingClientRect().top + getDocTopLeftPos().fT;
//from left
var elLeft = dragZone.getBoundingClientRect().left;
//the height of the draggable element + its top coordinate
var elBottom = elTop + parseInt(getElProps(dragZone, "height"));
//the width of the draggable element + its left coordinate
var elRight = elLeft + parseInt(getElProps(dragZone, "width"));

//from top
var elTop1 = dragZone1.getBoundingClientRect().top + getDocTopLeftPos().fT;
//from left
var elLeft1 = dragZone1.getBoundingClientRect().left;
//the height of the draggable element + its top coordinate
var elBottom1 = elTop1 + parseInt(getElProps(dragZone1, "height"));
//the width of the draggable element + its left coordinate
var elRight1 = elLeft1 + parseInt(getElProps(dragZone1, "width"));

var elTop2 = dragZone2.getBoundingClientRect().top + getDocTopLeftPos().fT;
//from left
var elLeft2 = dragZone2.getBoundingClientRect().left;
//the height of the draggable element + its top coordinate
var elBottom2 = elTop2 + parseInt(getElProps(dragZone2, "height"));
//the width of the draggable element + its left coordinate
var elRight2 = elLeft2 + parseInt(getElProps(dragZone2, "width"));

var elTop3 = dragZone3.getBoundingClientRect().top + getDocTopLeftPos().fT;
//from left
var elLeft3 = dragZone3.getBoundingClientRect().left;
//the height of the draggable element + its top coordinate
var elBottom3 = elTop3 + parseInt(getElProps(dragZone3, "height"));
//the width of the draggable element + its left coordinate
var elRight3 = elLeft3 + parseInt(getElProps(dragZone3, "width"));

var dragElement;
var dragElement1;
var dragElement2;
var dragElement3;

document.getElementById("draggable").addEventListener(
  "dragstart",
  function (event) {
    evt = event || window.event;

    if (navigator.userAgent.match(/Firefox/))
      event.dataTransfer.setData("text/plain", null);
  },
  false
);

document.getElementById("draggable1").addEventListener(
  "dragstart",
  function (event) {
    evt = event || window.event;

    if (navigator.userAgent.match(/Firefox/))
      event.dataTransfer.setData("text/plain", null);
  },
  false
);

//document.addEventListener(
document.getElementById("draggable").addEventListener(
  "dragstart",
  function (event) {
    evt = event || window.event;
    //the element that is being dragged
    dragElement = evt.target || evt.srcElement;

    //make our target half transparent;
    dragElement.style.opacity = 0.5;
  },
  false
);

document.getElementById("draggable1").addEventListener(
  "dragstart",
  function (event) {
    evt = event || window.event;
    //the element that is being dragged
    dragElement1 = evt.target || evt.srcElement;

    //make our target half transparent;
    dragElement1.style.opacity = 0.5;
  },
  false
);

document.getElementById("draggable2").addEventListener(
  "dragstart",
  function (event) {
    evt = event || window.event;
    //the element that is being dragged
    dragElement2 = evt.target || evt.srcElement;

    //make our target half transparent;
    dragElement2.style.opacity = 0.5;
  },
  false
);

document.getElementById("draggable3").addEventListener(
  "dragstart",
  function (event) {
    evt = event || window.event;
    //the element that is being dragged
    dragElement3 = evt.target || evt.srcElement;

    //make our target half transparent;
    dragElement3.style.opacity = 0.5;
  },
  false
);
//document.addEventListener(
document.getElementById("draggable").addEventListener(
  "dragend",
  function (event) {
    //if the dragged element was dropped at the right place
    if (x > elLeft && x < elRight && y > elTop && y < elBottom) {
      dragZone.style.background = "yellow";
      document.getElementById("OK1").style.display = "inline";
      result += 1;
      analyzeResult();
      console.log("result", result);
      //dragZone.appendChild(document.getElementById("draggable"));
      //alert("dropped on the dropzone");
    } else {
      //if the destination was wrong or the drag was cancelled (Esc)
      count += 1;
      analyzeFailure();
      console.log("count", count);
      //alert("dropped not on the dropzone");
    }

    //reset our element's  transparency
    dragElement.style.opacity = 1;
    //dragZone.style.background = "brown";
  },
  false
);

document.getElementById("draggable1").addEventListener(
  "dragend",
  function (event) {
    // console.log(
    //   x +
    //     " " +
    //     y +
    //     " " +
    //     elTop1 +
    //     " " +
    //     elLeft1 +
    //     " " +
    //     elBottom1 +
    //     " " +
    //     elRight1
    // );
    //console.log("dragend");
    //if the dragged element was dropped at the right place
    if (x > elLeft1 && x < elRight1 && y > elTop1 && y < elBottom1) {
      dragZone1.style.background = "darkcyan";
      document.getElementById("OK2").style.display = "inline";
      result += 1;
      analyzeResult();
      console.log("result", result);
      //dragZone1.appendChild(document.getElementById("draggable1"));
      //alert("dropped on the dropzone");
    } else {
      //if the destination was wrong or the drag was cancelled (Esc)
      count += 1;
      analyzeFailure();
      console.log("count", count);
      //alert("dropped not on the dropzone");
    }

    //reset our element's  transparency
    dragElement1.style.opacity = 1;
    //dragZone.style.background = "brown";
  },
  false
);

document.getElementById("draggable2").addEventListener(
  "dragend",
  function (event) {
    //if the dragged element was dropped at the right place
    if (x > elLeft2 && x < elRight2 && y > elTop2 && y < elBottom2) {
      dragZone2.style.background = "grey";
      document.getElementById("OK3").style.display = "inline";
      result += 1;
      analyzeResult();
      console.log("result", result);
      // dragZone2.appendChild(document.getElementById("draggable2"));
      // alert("dropped on the dropzone");
    } else {
      //if the destination was wrong or the drag was cancelled (Esc)
      count += 1;
      analyzeFailure();
      console.log("count", count);
      //alert("dropped not on the dropzone");
    }

    //reset our element's  transparency
    dragElement2.style.opacity = 1;
    //dragZone.style.background = "brown";
  },
  false
);

document.getElementById("draggable3").addEventListener(
  "dragend",
  function (event) {
    //if the dragged element was dropped at the right place
    if (x > elLeft3 && x < elRight3 && y > elTop3 && y < elBottom3) {
      dragZone3.style.background = "aqua";
      document.getElementById("OK4").style.display = "inline";
      result += 1;
      analyzeResult();
      console.log("result", result);
      // dragZone3.appendChild(document.getElementById("draggable3"));
      // alert("dropped on the dropzone");
    } else {
      //if the destination was wrong or the drag was cancelled (Esc)
      count += 1;
      analyzeFailure();
      console.log("count", count);
      //alert("dropped not on the dropzone");
    }

    //reset our element's  transparency
    dragElement3.style.opacity = 1;
    //dragZone.style.background = "brown";
  },
  false
);

document.addEventListener(
  //document.getElementById("draggable").addEventListener(
  "dragover",
  function (event) {
    evt = event || window.event;

    x = cords(evt).x;
    y = cords(evt).y;

    //console.log(x + " " + y);

    //this will prevent browser's default behaviour which will allow the drop event to occur

    if (evt.preventDefault) evt.preventDefault();
    else return false;
  },
  false
);

document.addEventListener(
  //document.getElementById("draggable").addEventListener(
  "drop",
  function (event) {
    evt = event || window.event;

    if (evt.preventDefault) evt.preventDefault();
    else return false;
  },
  false
);

function analyzeResult() {
  if (result === 4) {
    document.getElementById("primoNO").style.display = "none";
    document.getElementById("writeNO").style.display = "none";
    document.getElementById("OK").style.display = "inline";
    document.getElementById("writeOK").style.display = "inline";
    document.getElementById("btnOK").style.display = "inline";
  }
}

function analyzeFailure() {
  if (count === 1) {
    document.getElementById("primoNO").style.display = "inline";
    document.getElementById("writeNO").style.display = "inline";
  }
  if (count === 2) {
    document.getElementById("primoNO").style.display = "none";
    document.getElementById("writeNO").style.display = "none";
    document.getElementById("secondoNO").style.display = "inline";
    document.getElementById("writesecondNO").style.display = "inline";
    setTimeout(() => (window.location.href = "index.html"), 1500);
  }
}
