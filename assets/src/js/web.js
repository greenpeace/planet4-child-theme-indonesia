import * as Loadpage from "./Loadpage";

window.onload = function () {
  const pageSlug = document.querySelector('.jkb-page').getAttribute('data-page')
  const hamMenu = document.querySelector(".hamburger");
  const menuContent = document.getElementById('navbarSupportedContent')
  const btnJoinNavbar = document.querySelector('.nav-link.btn__join')

  if (pageSlug == '' || pageSlug == 'jakarta-butuh-kita' || pageSlug == 'jakartabutuhkita') Loadpage.Home()
  else if (pageSlug == 'tentang-jakarta-butuh-kita') Loadpage.About()
  else if (pageSlug == 'tiga-masalah-utama-kota-jakarta') Loadpage.Issues()

  hamMenu.addEventListener('click', function () {
    hamMenu.classList.toggle('is-active')
    menuContent.classList.toggle('show')
  })

  if (window.innerWidth < 767) {
    btnJoinNavbar.addEventListener('click', function() {
      hamMenu.classList.toggle('is-active')
      menuContent.classList.toggle('show')
    })
  }
}