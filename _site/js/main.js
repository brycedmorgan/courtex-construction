// Kinetic Precision - Interactive JavaScript
document.addEventListener('DOMContentLoaded', function() {
  
  // Mobile Navigation Toggle
  const navToggle = document.getElementById('nav-toggle');
  const navLinks = document.getElementById('nav-links');
  const nav = document.getElementById('nav');
  
  if (navToggle && navLinks) {
    navToggle.addEventListener('click', function() {
      navLinks.classList.toggle('active');
      navToggle.classList.toggle('active');
    });
    
    // Close mobile nav when clicking on a link
    navLinks.addEventListener('click', function(e) {
      if (e.target.classList.contains('nav-link')) {
        navLinks.classList.remove('active');
        navToggle.classList.remove('active');
      }
    });
  }
  
  // Scroll-based Nav Styling
  let lastScrollY = window.scrollY;
  
  window.addEventListener('scroll', function() {
    const currentScrollY = window.scrollY;
    
    // Add/remove scrolled class for nav shadow
    if (currentScrollY > 60) {
      nav.classList.add('scrolled');
    } else {
      nav.classList.remove('scrolled');
    }
    
    lastScrollY = currentScrollY;
  });
  
  // Intersection Observer for Fade-in Animation
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  };
  
  const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);
  
  // Observe all fade-in elements
  const fadeElements = document.querySelectorAll('.fade-in');
  fadeElements.forEach(el => observer.observe(el));
  
  // Smooth scrolling for anchor links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        target.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    });
  });
  
  // Form handling (placeholder - replace with actual backend)
  const ctaForm = document.querySelector('.cta-form');
  if (ctaForm) {
    ctaForm.addEventListener('submit', function(e) {
      e.preventDefault();
      
      // Get form data
      const formData = new FormData(this);
      const email = formData.get('email');
      
      if (email) {
        // Show success message (replace with actual form submission)
        alert('Thank you for your interest! We will contact you soon.');
        this.reset();
      }
    });
  }
  
  // Enhanced button hover effects
  const buttons = document.querySelectorAll('.btn-primary, .btn-secondary');
  buttons.forEach(button => {
    button.addEventListener('mouseenter', function() {
      this.style.cursor = 'pointer';
    });
  });
  
  // Step number pulse animation trigger
  const stepNumbers = document.querySelectorAll('.step-number');
  stepNumbers.forEach(step => {
    step.addEventListener('mouseenter', function() {
      this.style.cursor = 'pointer';
    });
  });
  
  // Pricing card border animation
  const pricingCards = document.querySelectorAll('.pricing-card');
  pricingCards.forEach(card => {
    card.addEventListener('mouseenter', function() {
      this.style.cursor = 'pointer';
    });
  });
  
  // FAQ accordion enhancement
  const faqDetails = document.querySelectorAll('.faq-item details');
  faqDetails.forEach(detail => {
    detail.addEventListener('toggle', function() {
      if (this.open) {
        // Close other open details
        faqDetails.forEach(other => {
          if (other !== this && other.open) {
            other.open = false;
          }
        });
      }
    });
  });
  
  // Lazy loading for images (if needed)
  const images = document.querySelectorAll('img[loading="lazy"]');
  
  if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const img = entry.target;
          img.src = img.dataset.src || img.src;
          img.classList.remove('lazy');
          observer.unobserve(img);
        }
      });
    });
    
    images.forEach(img => imageObserver.observe(img));
  }
  
  // Trusted by marquee duplication for seamless loop
  const marquee = document.querySelector('.trusted-marquee');
  if (marquee) {
    const marqueeContent = marquee.innerHTML;
    marquee.innerHTML = marqueeContent + marqueeContent;
  }
  
  // Performance optimization: debounce scroll events
  function debounce(func, wait = 20, immediate = true) {
    let timeout;
    return function() {
      const context = this, args = arguments;
      const later = function() {
        timeout = null;
        if (!immediate) func.apply(context, args);
      };
      const callNow = immediate && !timeout;
      clearTimeout(timeout);
      timeout = setTimeout(later, wait);
      if (callNow) func.apply(context, args);
    };
  }
  
  // Apply debounce to scroll handler
  window.addEventListener('scroll', debounce(function() {
    // Additional scroll-based animations can go here
  }));
});

// Touch device optimization
if ('ontouchstart' in window) {
  document.body.classList.add('touch-device');
}

// Prevent iOS zoom on input focus
if (/iPad|iPhone|iPod/.test(navigator.userAgent)) {
  const viewport = document.querySelector('meta[name="viewport"]');
  if (viewport) {
    viewport.content = 'width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0';
  }
}