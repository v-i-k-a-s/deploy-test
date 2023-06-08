// togle open close form //////////////////////
let isOpen = false;
function togleButton() {
  if (isOpen == false) {
    isOpen = true;
    document.getElementById("myForm").style.display = "block";
  } else {
    isOpen = false;
    document.getElementById("myForm").style.display = "none";
    document.getElementsById("close-open-btn").style.display = "block";
  }
}

// for togle bug labels/////////////
function selectTogel(el, checked) {
  let def = document.getElementById(checked).checked;

  console.log("hhhh");
  var x = document.getElementById(el);

  if (def == false) {
    // def = true;
    x.style.display = "none";
  } else {
    // def = false;
    x.style.display = "block";
  }
}
