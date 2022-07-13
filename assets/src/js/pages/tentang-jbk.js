import fullpage from "fullpage.js";
import { gsap } from "gsap";

// init all TL
function Tentang() {
  let tlAbout = gsap.timeline({ paused: true })
  let tlAbout2 = gsap.timeline({ paused: true })
  let tlAboutTVC = gsap.timeline({ paused: true })

  // Timeline of jbk-tentang
  tlAbout.fromTo('.btn--back a', { y: -150 }, { y: 0, opacity: 1, immediateRender: false, duration: 0.3 })
    .fromTo('.jbk-about h2', { x: -150 }, { x: 0, opacity: 1, immediateRender: false, duration: 0.6 })
    .fromTo('.jbk-about p', { x: -150 }, { x: 0, opacity: 1, immediateRender: false, duration: 0.6, delay: -.4 })
    .fromTo('.jbk-about .thumb', { x: 150 }, { x: 0, opacity: 1, immediateRender: false, duration: 0.6, delay: -.5 })
    .fromTo('.jbk-about a', { x: -150 }, { x: 0, opacity: 1, immediateRender: false, duration: 0.6, delay: -.25 })
  // Timeline of jbk-tentang 2
  tlAbout2.fromTo('.jbk-about-2 p', { x: 150 }, { x: 0, opacity: 1, immediateRender: false, duration: 0.6 })
    .fromTo('.jbk-about-2 a', { x: 150 }, { x: 0, opacity: 1, immediateRender: false, duration: 0.6, delay: -.5 })
    .fromTo('.jbk-about-2 .thumb', { x: -150 }, { x: 0, opacity: 1, immediateRender: false, duration: 0.6, delay: -.5 })
  tlAboutTVC.fromTo('.jbk-about-tvc p', { x: -150 }, { x: 0, opacity: 1, immediateRender: false, duration: 0.6, delay: -.4 })
    .fromTo('.jbk-about-tvc .banner-video', { x: 150 }, { x: 0, opacity: 1, immediateRender: false, duration: 0.6, delay: -.5 })
    .fromTo('.jbk-about-tvc a', { x: -150 }, { x: 0, opacity: 1, immediateRender: false, duration: 0.6, delay: -.25 })

  if (window.innerWidth > 992) {
    let fp = new fullpage('#fullpage', {
      licenseKey: 'YOUR_KEY_HERE',
      navigation: true,
      navigationPosition: 'right',
      scrollOverflow: true,
      easingcss3: "cubic-bezier(0.85, 0, 0.15, 1)",
      responsiveWidth: 992,
      afterLoad: function (origin, destination, direction) {
        if (destination.index === 0) {
          tlAbout.play()
        } else if (destination.index === 1) {
          tlAbout2.play()
        } else if (destination.index === 2) {
          tlAboutTVC.play()
        }
      },
      onLeave: function (origin, destination, direction) {
        if (origin.index === 0) {
          tlAbout.reverse()
        } else if (origin.index === 1) {
          tlAbout2.reverse()
        } else if (origin.index === 2) {
          tlAboutTVC.reverse()
        }
      }
    })
  } else {
    tlAbout.play()
    tlAbout2.play()
    tlAboutTVC.play()
  }

}

export default Tentang