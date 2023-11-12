const button = document.querySelector('.info__wrapper-button');
const infoSocials = document.querySelector(".info__socials")
button.addEventListener("click", () => {
  infoSocials.classList.toggle("active")
})
