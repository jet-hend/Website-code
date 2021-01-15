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
    var user=getCookie("username");
    var itemNUM=getCookie("item#");
    if (user != "") {
    //   load orders here
    console.log("hello " + user);
    console.log(itemNUM);

    } else {
        console.log("No Items");
    //    user = prompt("Please enter your name:","");
    //    if (user != "" && user != null) {
    //      setCookie("username", user, 30);
    //     //  set orders here
    //    }
    }
}
function addItem(itemNum) {
  switch (itemNum) {
    case 1:
      setCookie("Item1", "Polly Fox", 30);
      break;
    case 2:
      setCookie("Item2", "idk1", 30);
      break;
    case 3:
      setCookie("Item3", "twist", 30);
      break;
    case 4:
      setCookie("Item4", "idk2", 30);
      break;
    case 5:
      setCookie("Item5", "idk3", 30);
      break;
    default:
      alert("Item Not Found!");
      break;
  }
}
