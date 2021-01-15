function navButton(x) {
    x.classList.toggle("change");
}

function setCookie(cname,cvalue,exdays) {
    var d = new Date();
    d.setTime(d.getTime() + (exdays*24*60*60*1000));
    var expires = "expires=" + d.toGMTString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
    console.log(cname + "= " + cvalue + "; " + expires)
  }
  
function getCookie(cname) {
    var name = cname + "=";
    var decodedCookie = decodeURIComponent(document.cookie);
    var ca = decodedCookie.split(';');
    for(var i = 0; i < ca.length; i++) {
      var c = ca[i];
      while (c.charAt(0) == ' ') {
        c = c.substring(1);
      }
      if (c.indexOf(name) == 0) {
        return c.substring(name.length, c.length);
      }
    }
    return "";
}

function checkCookie() {
    if (getCookie("Item1") != null) {console.log(getCookie("Item1"))}
    if (getCookie("Item2") != null) {console.log(getCookie("Item2"))}
    if (getCookie("Item3") != null) {console.log(getCookie("Item3"))}
    if (getCookie("Item4") != null) {console.log(getCookie("Item4"))}
    if (getCookie("Item5") != null) {console.log(getCookie("Item5"))}
}
function addItem(itemNum) {
  switch (itemNum) {
    case 1:
      setCookie("Item1", "Polly Fox", .5);
      break;
    case 2:
      setCookie("Item2", "Slug", .5);
      break;
    case 3:
      setCookie("Item3", "twist", .5);
      break;
    case 4:
      setCookie("Item4", "toad", .5);
      break;
    case 5:
      setCookie("Item5", "octo", .5);
      break;
    case 6:
      break;
    case 7:
      var userName = document.getElementById("userText").value;
      setCookie("username", );
      break;
    default:
      alert("Item Not Found!");
      break;
  }
}
