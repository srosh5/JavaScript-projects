var selectField = document.getElementById('select-field');
var selectText = document.getElementById('select-text');
var list = document.getElementById('list');
// Below method returns an array
var options = document.getElementsByClassName('options');
var arrowIcon = document.getElementById('arrow-icon');

console.log(options);

selectField.onclick = function () {
  list.classList.toggle('hide');
  arrowIcon.classList.toggle('rotate');
}

for (options of options) {
  options.onclick = function () {
    selectText.innerHTML = this.textContent;
    list.classList.toggle('hide');
    arrowIcon.classList.toggle('rotate');
  }
}
