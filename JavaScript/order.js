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
    if (getCookie("Item1") != null) {console.log(getCookie("Item1")) }
    if (getCookie("Item2") != null) {console.log(getCookie("Item2")) }
    if (getCookie("Item3") != null) {console.log(getCookie("Item3")) }
    if (getCookie("Item4") != null) {console.log(getCookie("Item4")) }
    if (getCookie("Item5") != null) {console.log(getCookie("Item5")) }
}
function addItem(itemNum) {
  switch (itemNum) {
    case 1:
      setCookie("Item1", "Polly Fox", .5);
      checkCookie();
      break;
    case 2:
      setCookie("Item2", "Slug", .5);
      checkCookie();
      break;
    case 3:
      setCookie("Item3", "twist", .5);
      checkCookie();
      break;
    case 4:
      setCookie("Item4", "toad", .5);
      checkCookie();
      break;
    case 5:
      setCookie("Item5", "octo", .5);
      checkCookie();
      break;
    case 6:
      break;
    case 7:
      break;
    default:
      alert("Item Not Found!");
      break;
  }
}

//slide show start
var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}

//slide show end

//order start

var $form = $('form#test-form'),
    url = 'https://script.google.com/macros/s/AKfycbxYLn8qUQnHoiZfN6l2CvBi9jbJYQOCex7Vx_cKqJb5pd-mYa9Qo3pG/exec'

$('#submit-form').on('click', function(e) {
  e.preventDefault();
  var jqxhr = $.ajax({
    url: url,
    method: "GET",
    dataType: "json",
    data: $form.serializeObject()
  }).success(
    // do something
  );
})

//order end