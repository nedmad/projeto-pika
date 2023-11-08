var center = document.querySelector(".center");
var image1 =
  'url("https://c.wallhere.com/photos/cc/59/nature_landscape_winter_snow_cold_mountains_trees_mist-1523645.jpg!d")';

var image2 = 'url("https://cdn.wallpapersafari.com/2/58/2mjH5E.jpg")';

var image3 =
  'url("https://images.hdqwalls.com/download/minimal-landscape-sunrise-4k-jy-1600x900.jpg")';

var image4 = 'url("https://wallpaperaccess.com/full/3126530.jpg")';
var image5 = 'url("https://wallpapercave.com/wp/wp1951736.jpg")';

var image6 =
  'url("https://images.hdqwalls.com/download/neblua-space-planet-art-4k-ye-1600x900.jpg")';
var tudo = [image1, image2, image3, image4, image5, image6];

var h3 = document.querySelector("header h3");

var anterior = 0;

setInterval(() => {
  while (true) {
    let num = Math.floor(Math.random() * tudo.length);
    console.log(num);
    if (num != anterior) {
      center.style.backgroundImage = tudo[num];
      anterior = num;
      break;
    }
  }
}, 10000);


setInterval(()=>{
  var data = new Date();
  var hor = data.getHours();
  var minutes = data.getMinutes();
  var segundos = data.getSeconds();
  h3.innerText = `${hor}:${minutes}:${segundos}`;

}, 1000)