// Particle.js Configuration
// Assuming particlesJS is a global function provided by a library, no declaration needed here.
// If it's part of a module, you'd need to import it.
// If particlesJS is not globally available, you can try importing it like this:
// import particlesJS from 'particles.js'; // Or the correct path to the module

// If you are not using modules and particlesJS is expected to be a global function
// but it's not being recognized, you might need to ensure that the particles.js
// library is correctly included in your HTML file before this script.

particlesJS("particles-js", {
    particles: {
      number: {
        value: 80,
        density: {
          enable: true,
          value_area: 800,
        },
      },
      color: {
        value: "#8e44ad",
      },
      shape: {
        type: "circle",
        stroke: {
          width: 0,
          color: "#000000",
        },
        polygon: {
          nb_sides: 5,
        },
      },
      opacity: {
        value: 0.5,
        random: false,
        anim: {
          enable: false,
          speed: 1,
          opacity_min: 0.1,
          sync: false,
        },
      },
      size: {
        value: 3,
        random: true,
        anim: {
          enable: false,
          speed: 40,
          size_min: 0.1,
          sync: false,
        },
      },
      line_linked: {
        enable: true,
        distance: 150,
        color: "#8e44ad",
        opacity: 0.4,
        width: 1,
      },
      move: {
        enable: true,
        speed: 3,
        direction: "none",
        random: false,
        straight: false,
        out_mode: "out",
        bounce: false,
        attract: {
          enable: false,
          rotateX: 600,
          rotateY: 1200,
        },
      },
    },
    interactivity: {
      detect_on: "canvas",
      events: {
        onhover: {
          enable: true,
          mode: "grab",
        },
        onclick: {
          enable: true,
          mode: "push",
        },
        resize: true,
      },
      modes: {
        grab: {
          distance: 140,
          line_linked: {
            opacity: 1,
          },
        },
        bubble: {
          distance: 400,
          size: 40,
          duration: 2,
          opacity: 8,
          speed: 3,
        },
        repulse: {
          distance: 200,
          duration: 0.4,
        },
        push: {
          particles_nb: 4,
        },
        remove: {
          particles_nb: 2,
        },
      },
    },
    retina_detect: true,
  })
  
  // Typing Animation
  document.addEventListener("DOMContentLoaded", () => {
    // Typing animation for home section
    const typingOptions = {
      strings: ["ECE Student", "Tech Enthusiast", "Beginner Explorer", "Eager Learner"],
      typeSpeed: 100,
      backSpeed: 60,
      loop: true,
    }
  
    // Assuming Typed is a global function provided by a library, no declaration needed here.
    // If it's part of a module, you'd need to import it.
    // If Typed is not globally available, you can try importing it like this:
    // import Typed from 'typed.js'; // Or the correct path to the module
  
    // If you are not using modules and Typed is expected to be a global function
    // but it's not being recognized, you might need to ensure that the typed.js
    // library is correctly included in your HTML file before this script.
  
    const typing = new Typed(".typing", typingOptions)
    const typing2 = new Typed(".typing-2", typingOptions)
  
    // Sticky Navigation
    window.addEventListener("scroll", () => {
      const header = document.querySelector("header")
      header.classList.toggle("sticky", window.scrollY > 100)
  
      // Activate skills animation when in viewport
      const skillsSection = document.querySelector(".skills")
      const skillsPosition = skillsSection.getBoundingClientRect().top
      const screenPosition = window.innerHeight / 1.3
  
      if (skillsPosition < screenPosition) {
        skillsSection.classList.add("active")
      }
  
      // Animate timeline items when in viewport
      // const timelineItems = document.querySelectorAll(".timeline-item")
      // timelineItems.forEach((item) => {
      //   const itemPosition = item.getBoundingClientRect().top
      //   if (itemPosition < screenPosition) {
      //     item.classList.add("animate")
      //   }
      // })
    })
  
    // Mobile Navigation
    const hamburger = document.querySelector(".hamburger")
    const navLinks = document.querySelector(".nav-links")
  
    hamburger.addEventListener("click", () => {
      hamburger.classList.toggle("active")
      navLinks.classList.toggle("active")
    })
  
    // Close mobile menu when clicking on a nav link
    document.querySelectorAll(".nav-links li a").forEach((link) => {
      link.addEventListener("click", () => {
        hamburger.classList.remove("active")
        navLinks.classList.remove("active")
      })
    })
  
    // Active link on scroll
    const sections = document.querySelectorAll("section")
    const navLi = document.querySelectorAll(".nav-links li a")
  
    window.addEventListener("scroll", () => {
      let current = ""
  
      sections.forEach((section) => {
        const sectionTop = section.offsetTop
        const sectionHeight = section.clientHeight
        if (pageYOffset >= sectionTop - sectionHeight / 3) {
          current = section.getAttribute("id")
        }
      })
  
      navLi.forEach((li) => {
        li.classList.remove("active")
        if (li.getAttribute("href").substring(1) === current) {
          li.classList.add("active")
        }
      })
    })
  
    // Project Carousel Navigation
    const carousel = document.querySelector(".carousel")
    const prevBtn = document.querySelector(".prev")
    const nextBtn = document.querySelector(".next")
    const cardWidth = 330 // card width + margin
  
    prevBtn.addEventListener("click", () => {
      carousel.scrollBy({
        left: -cardWidth,
        behavior: "smooth",
      })
    })
  
    nextBtn.addEventListener("click", () => {
      carousel.scrollBy({
        left: cardWidth,
        behavior: "smooth",
      })
    })
  
    // Form Submission
    const contactForm = document.querySelector(".contact form")
  
    contactForm.addEventListener("submit", function (e) {
      e.preventDefault()
  
      // Get form values
      const name = this.querySelector('input[type="text"]').value
      const email = this.querySelector('input[type="email"]').value
      const subject = this.querySelector('input[placeholder="Subject"]').value
      const message = this.querySelector("textarea").value
  
      // Simple validation
      if (name && email && subject && message) {
        // Here you would typically send the form data to a server
        alert("Thank you for your message! I will get back to you soon.")
        this.reset()
      } else {
        alert("Please fill in all fields.")
      }
    })
  
    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
      anchor.addEventListener("click", function (e) {
        e.preventDefault()
  
        const targetId = this.getAttribute("href")
        const targetElement = document.querySelector(targetId)
  
        window.scrollTo({
          top: targetElement.offsetTop,
          behavior: "smooth",
        })
      })
    })
  
    // Reveal animations on scroll
    const revealElements = document.querySelectorAll(".about-content, .skills-content, .projects .card, .contact-content")
  
    function reveal() {
      revealElements.forEach((element) => {
        const windowHeight = window.innerHeight
        const elementTop = element.getBoundingClientRect().top
        const elementVisible = 150
  
        if (elementTop < windowHeight - elementVisible) {
          element.classList.add("animate")
        }
      })
    }
  
    window.addEventListener("scroll", reveal)
    reveal() // Call once on load
  })
  
  
