import fullpage from "fullpage.js";
import { gsap } from "gsap";


function Issues() {
  let tlIssues1 = gsap.timeline({ paused: true })
  let tlIssues2 = gsap.timeline({ paused: true })
  let tlIssues3 = gsap.timeline({ paused: true })

  // Timeline of jbk-issues-first
  tlIssues1.fromTo('.btn--back a', { y: 150 }, { y: 0, opacity: 1, immediateRender: false, duration: 0.3 })
    .fromTo('.jbk-issues-first h2', { x: 150 }, { x: 0, opacity: 1, immediateRender: false, duration: 0.6 })
    .fromTo('.jbk-issues-first p', { x: 150 }, { x: 0, opacity: 1, immediateRender: false, duration: 0.6, delay: -.4 })
    .fromTo('.jbk-issues-first .thumb', { x: -150 }, { x: 0, opacity: 1, immediateRender: false, duration: 0.6, delay: -.5 })
    .fromTo('.jbk-issues-first a', { x: 150 }, { x: 0, opacity: 1, immediateRender: false, duration: 0.6, delay: -.25 })
  // Timeline of jbk-issues-second
  tlIssues2.fromTo('.jbk-issues-second h2', { x: -150 }, { x: 0, opacity: 1, immediateRender: false, duration: 0.6 })
    .fromTo('.jbk-issues-second p', { x: -150 }, { x: 0, opacity: 1, immediateRender: false, duration: 0.6, delay: -.4 })
    .fromTo('.jbk-issues-second .thumb', { x: 150 }, { x: 0, opacity: 1, immediateRender: false, duration: 0.6, delay: -.5 })
    .fromTo('.jbk-issues-second a', { x: -150 }, { x: 0, opacity: 1, immediateRender: false, duration: 0.6, delay: -.25 })
  // Timeline of jbk-issues-third
  tlIssues3.fromTo('.jbk-issues-third h2', { x: 150 }, { x: 0, opacity: 1, immediateRender: false, duration: 0.6 })
    .fromTo('.jbk-issues-third p', { x: 150 }, { x: 0, opacity: 1, immediateRender: false, duration: 0.6, delay: -.4 })
    .fromTo('.jbk-issues-third .thumb', { x: -150 }, { x: 0, opacity: 1, immediateRender: false, duration: 0.6, delay: -.5 })
    .fromTo('.jbk-issues-third a', { x: 150 }, { x: 0, opacity: 1, immediateRender: false, duration: 0.6, delay: -.25 })

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
          tlIssues1.play()
        } else if (destination.index === 1) {
          tlIssues2.play()
        } else if (destination.index === 2) {
          tlIssues3.play()
        }
      },
      onLeave: function (origin, destination, direction) {
        if (origin.index === 0) {
          tlIssues1.reverse()
        } else if (origin.index === 1) {
          tlIssues2.reverse()
        } else if (origin.index === 2) {
          tlIssues3.reverse()
        }
      }
    })

    function toFormJoin(e) {
      e.preventDefault();

      let sectionIndex = document.querySelectorAll('.section').length - 1
      fp.moveTo(sectionIndex)
      
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
    tlIssues1.play()
    tlIssues2.play()
    tlIssues3.play()

    Array.from(document.querySelectorAll('.to-form-join')).forEach(elm => {
      if (elm.querySelector('a')) {
        elm.querySelector('a').addEventListener('click', function() {
          document.getElementById('form-join').scrollIntoView({behavior: "smooth", block: "start", inline: "nearest"})
        })
      }
    })
  }
}

export default Issues
