import * as Loadpage from "./Loadpage";

window.onload = function () {
  const pageSlug = document.querySelector('.jkb-page').getAttribute('data-page')
  const hamMenu = document.querySelector(".hamburger");
  const menuContent = document.getElementById('navbarSupportedContent')

  if (pageSlug == '') Loadpage.Home()
  else if (pageSlug == 'tentang-jakarta-butuh-kita') Loadpage.About()
  else if (pageSlug == 'tiga-masalah-utama-kota-jakarta') Loadpage.Issues()

  hamMenu.addEventListener('click', function () {
    hamMenu.classList.toggle('is-active')
    menuContent.classList.toggle('show')
  })
}