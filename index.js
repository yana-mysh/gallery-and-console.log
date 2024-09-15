const print = () => console.log("Я учу JavaScript!");
print();

function changeToNext() {
  let image = document.getElementById("img_1");
  image.src = "./img/img2.jpg";
}
function changeToPrevious() {
  let image = document.getElementById("img_1");
  image.src = "./img/img1.jpg";
}
