let car = document.getElementById('car');
let output = document.getElementById('output');
let id = 0;

function addCar() {
  id += 1;
  output.innerHTML +=
    '<ul>' +
      '<li id="' + id + '">' + car.value + '<a href="#" onClick="deleteCar(' + id + ')"> DELETE<a/></li>'
    '</ul>'
}

function deleteCar(id) {
  let el = document.getElementById(id);
  el.style = 'display: none';
}
