const openButtonImage = document.querySelectorAll('.accordion__item');
const accordinItem = document.querySelectorAll('.accordion__item')

for (let i = 0; i < openButtonImage.length; i++) {
  openButtonImage[i].addEventListener('click', () => {
    accordinItem[i].classList.toggle("active")
  });

}
console.log(openButtonImage.length);
