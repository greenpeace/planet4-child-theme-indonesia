import fullpage from "fullpage.js";
import { gsap, wrap } from "gsap";

let SplitLines = (str) => {
  let parsedStr = str.replace(/&amp;/g, '&')
  return parsedStr.split(/\r?\n/)
}

let addNode = (str) => {
  let wrapper = document.createElement('div')
  wrapper.classList.add('cell')
  let content = document.createTextNode(str)
  wrapper.appendChild(content)

  return wrapper
}

// init all TL
function Home() {
  let tlBanner = gsap.timeline({ paused: true })
  let tlTentang = gsap.timeline({ paused: true })
  let tlMasalah = gsap.timeline({ paused: true })
  let tlQuality = gsap.timeline({ paused: true })
  let tvc = document.querySelector('video')

  // Timeline of jkb-banner
  tlBanner.fromTo('.jkb-banner h1', { y: 50 }, { y: 0, opacity: 1, immediateRender: false, duration: 0.6 })
    .fromTo('.jkb-banner p', { y: 50 }, { y: 0, opacity: 1, immediateRender: false, duration: 0.6, delay: -.4 })
    .fromTo('.jkb-banner a', { y: 50 }, { y: 0, opacity: 1, immediateRender: false, duration: 0.6, delay: -.25 })

  // Timeline of jkb-tentang
  tlTentang.fromTo('.jkb-tentang h2', { x: -150 }, { x: 0, opacity: 1, immediateRender: false, duration: 0.6 })
    .fromTo('.jkb-tentang p', { x: -150 }, { x: 0, opacity: 1, immediateRender: false, duration: 0.6, delay: -.4 })
    .fromTo('.jkb-tentang .tentang-tvc', { x: 150 }, {
      x: 0, opacity: 1, immediateRender: false, duration: 0.6, delay: -.5, onComplete: function () {
        document.querySelector('.jkb-tentang .tentang-tvc').classList.add('done')
      }
    })
    .fromTo('.jkb-tentang a', { x: -150 }, { x: 0, opacity: 1, immediateRender: false, duration: 0.6, delay: -.25 })

  // Timeline of jkb-masalah
  tlMasalah.fromTo('.jkb-masalah h2', { y: 50 }, { y: 0, opacity: 1, immediateRender: false, duration: 0.6 })
    .fromTo('.jkb-masalah p', { y: 50 }, { y: 0, opacity: 1, immediateRender: false, duration: 0.6, delay: -.4 })
    .fromTo('.jkb-masalah-item .wp-block-column', { y: 50 }, { y: 0, opacity: 1, immediateRender: false, stagger: .15, delay: -.25 })
    .fromTo('.jkb-masalah-item .wp-block-column .img-caption', { y: 50 }, { y: 0, opacity: 1, immediateRender: false, stagger: .15, duration: 0.6, delay: -.15 })
    .fromTo('.jkb-masalah-item .wp-block-buttons a', { y: 50 }, { y: 0, opacity: 1, immediateRender: false, duration: 0.6, delay: -.05 })

  // Timeline of jkb-quality
  tlQuality.fromTo('.jkb-quality h2', { x: 150 }, {
    x: 0, opacity: 1, immediateRender: false, duration: 0.6, onComplete: function () {
      document.querySelector('.jkb-quality h2').classList.add('done')
    }
  })
    .fromTo('.jkb-quality p', { x: 150 }, { x: 0, opacity: 1, immediateRender: false, duration: 0.6, delay: -.4 })
    .fromTo('.jkb-quality a', { x: 150 }, { x: 0, opacity: 1, immediateRender: false, duration: 0.6, delay: -.25 })

  if (window.innerWidth > 992) {
    let homeFP = new fullpage('#fullpage', {
      licenseKey: 'YOUR_KEY_HERE',
      navigation: true,
      navigationPosition: 'right',
      scrollOverflow: true,
      easingcss3: "cubic-bezier(0.85, 0, 0.15, 1)",
      responsiveWidth: 992,
      afterLoad: function (origin, destination, direction) {
        if (destination.index === 0) {
          tlBanner.play()
        } else if (destination.index === 1) {
          tlTentang.play()
        } else if (destination.index === 2) {
          tlMasalah.play()
        } else if (destination.index === 3) {
          tlQuality.play()
        }
      },
      onLeave: function (origin, destination, direction) {
        if (origin.index === 0) {
          tlBanner.reverse()
        } else if (origin.index === 1) {
          tlTentang.reverse()
        } else if (origin.index === 2) {
          tlMasalah.reverse()
        } else if (origin.index === 3) {
          tlQuality.reverse()
          document.querySelector('.jkb-quality h2').classList.remove('done')
        }
      }
    });

    function toFormJoin(e) {
      e.preventDefault();

      let sectionIndex = document.querySelectorAll('.section').length - 1
      homeFP.moveTo(sectionIndex)
      
      return false
    }

    Array.from(document.querySelectorAll('.to-form-join')).forEach(elm => {
      if (elm.querySelector('a')) {
        elm.querySelector('a').addEventListener('click', toFormJoin)
      } else {
        elm.addEventListener('click', toFormJoin)
      }
    })
  } else {
    tlBanner.play()
    tlTentang.play()
    tlMasalah.play()
    tlQuality.play()
    document.querySelector('.jkb-quality h2').classList.remove('done')

    Array.from(document.querySelectorAll('.to-form-join')).forEach(elm => {
      if (elm.querySelector('a')) {
        elm.querySelector('a').addEventListener('click', function() {
          document.getElementById('form-join').scrollIntoView({behavior: "smooth", block: "start", inline: "nearest"})
        })
      }
    })
  }

  // SPLIT TEXT CAPTION MASALAH UTAMA
  let captionForSplits = document.querySelectorAll('.jkb-masalah-item .wp-block-column .img-caption')
  for (let captionIndex = 0; captionIndex < captionForSplits.length; captionIndex++) {
    let caption = captionForSplits[captionIndex];
    let txt = caption.innerHTML.replace(/<br\s*[\/]?>/gi, "\n")
    let lines = SplitLines(txt)
    caption.innerHTML = ''

    for (let index = 0; index < lines.length; index++) {
      let elm = lines[index];
      let string = addNode(elm)

      caption.appendChild(string)
    }
  }

  let tentangTVC = document.querySelector('.tentang-tvc')
  let popupTVC = document.querySelector('.jkb-tentang .wp-block-embed')
  let navbarHeader = document.getElementById('header')
  let navPage = document.getElementById('fp-nav')

  function embedTVC(lty) {
    if (!document.querySelector('.jkb-tentang .tvc__layout')) {
      let video = lty.getAttribute('href')
      let wrapper = document.createElement('div')
      let iframe = document.createElement('iframe')

      wrapper.classList.add('tvc__layout')

      iframe.src = video
      iframe.allow = 'accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture'
      iframe.width = '560'
      iframe.height = '315'
      iframe.style.border = "none";

      wrapper.appendChild(iframe)
      document.querySelector('.jkb-tentang').appendChild(wrapper)

      wrapper.classList.add('show')
    } else {
      document.querySelector('.tvc__layout').classList.add('show')
    }
  }

  tentangTVC.onclick = (e) => {
    e.preventDefault()
    let elm = e.target

    navbarHeader.style.cssText = "transform: translateY(-120%)";
    if (window.innerWidth > 992) navPage.style.cssText = "right: -10%";
    embedTVC(elm.parentElement)
    setTimeout(() => {
      document.querySelector('.tvc__layout').classList.add('done')
    }, 1000);
  }

  document.addEventListener('click', (evt) => {
    let popupTVC = document.querySelector('.tvc__layout')

    if (popupTVC) {
      if (popupTVC.classList.contains('done')) {
        let targetEl = popupTVC.querySelector('iframe').contains(evt.target)

        if (!targetEl) {
          popupTVC.classList.remove('show', 'done')
          navbarHeader.style.cssText = "transform: translateY(0%)";
          if (window.innerWidth > 992) navPage.style.cssText = "";
        }
      }
    }
  })
}

export default Home