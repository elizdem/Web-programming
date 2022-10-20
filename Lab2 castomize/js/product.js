const accordion = document.getElementsByClassName('accord__item');

for (i=0; i<accordion.length; i++) {
  accordion[i].addEventListener('click', function () {
    this.classList.toggle('active')
  })
}
console.log(accordion)