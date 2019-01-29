var headshot = document.getElementById('headshot');
var banner_txt = document.getElementById('navbar');
var description = document.getElementById('description');
var portrait = document.getElementById('portrait');
var landscape = document.getElementById('landscape');

landscape.onclick = function() {
  window.location.replace("places.html");
}

portrait.onclick = function() {
  window.location.replace("faces.html"); 
}

banner_txt.onclick = function() {
  while(description.style.opacity < 1) {
    description.style.opacity = description.style.opacity + 0.1;
  }
};
