// Language switcher functionality
const languageSelect = document.getElementById('language-select');
const translations = {
  ro: {
    about: 'Despre noi',
    services: 'Servicii',
    contact: 'Contact',
    // Add more translations as needed
  },
  en: {
    about: 'About Us',
    services: 'Services', 
    contact: 'Contact',
  },
  de: {
    about: 'Über uns',
    services: 'Dienstleistungen',
    contact: 'Kontakt',
  }
};

languageSelect.addEventListener('change', (e) => {
  const lang = e.target.value;
  document.documentElement.lang = lang;
  
  // Update navigation text
  document.querySelector('a[href="#about"]').textContent = translations[lang].about;
  document.querySelector('a[href="#services"]').textContent = translations[lang].services;
  document.querySelector('a[href="#contact"]').textContent = translations[lang].contact;
});

// Mobile menu toggle
const createMobileMenu = () => {
  const nav = document.querySelector('nav');
  const menuButton = document.createElement('button');
  menuButton.className = 'mobile-menu-btn';
  menuButton.innerHTML = `
    <span class="menu-icon"></span>
    <span class="sr-only">Toggle Menu</span>
  `;
  
  nav.parentNode.insertBefore(menuButton, nav);
  
  menuButton.addEventListener('click', () => {
    nav.classList.toggle('active');
    menuButton.classList.toggle('active');
  });
};

createMobileMenu();

// Add smooth scroll behavior
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});

// Enhanced scroll animations with different effects
const createObserver = (options = {}) => {
  return new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('show');
        if (entry.target.dataset.delay) {
          entry.target.style.transitionDelay = entry.target.dataset.delay;
        }
      }
    });
  }, options);
};

// Main content fade in
const fadeObserver = createObserver({
  threshold: 0.2
});

document.querySelectorAll('.hidden').forEach(el => fadeObserver.observe(el));

// Service features slide in with improved timing
const slideObserver = createObserver({
  threshold: 0.1,
  rootMargin: '0px 0px -10% 0px'
});

document.querySelectorAll('.service').forEach(service => {
  // First observe the service container
  slideObserver.observe(service);
  
  // Then handle features with staggered animations
  const features = service.querySelectorAll('.service-feature');
  features.forEach((feature, index) => {
    feature.classList.add('slide-hidden');
    feature.style.transitionDelay = `${(index + 1) * 0.2}s`;
    feature.style.transitionDuration = '0.6s';
    slideObserver.observe(feature);
  });
});

// Add service card hover effects
const serviceCards = document.querySelectorAll('.service');
serviceCards.forEach(card => {
  card.addEventListener('mouseenter', () => {
    card.style.transform = 'scale(1.02)';
    card.style.boxShadow = '0 8px 16px rgba(0,0,0,0.2)';
  });
  
  card.addEventListener('mouseleave', () => {
    card.style.transform = 'scale(1)';
    card.style.boxShadow = '0 4px 8px rgba(0,0,0,0.1)';
  });
});

// Enhanced image lazy loading with loading indicator
const images = document.querySelectorAll('img[data-src]');
const imgObserver = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const img = entry.target;
      const wrapper = document.createElement('div');
      wrapper.className = 'img-wrapper';
      
      // Create and add loading spinner
      const spinner = document.createElement('div');
      spinner.className = 'loading-spinner';
      img.parentNode.insertBefore(wrapper, img);
      wrapper.appendChild(img);
      wrapper.appendChild(spinner);
      
      // Load image
      const newImg = new Image();
      newImg.onload = () => {
        img.src = img.dataset.src;
        img.classList.add('fade-in');
        spinner.remove();
      };
      newImg.src = img.dataset.src;
      observer.unobserve(img);
    }
  });
});

images.forEach(img => imgObserver.observe(img));

// Contact form handling
const contactForm = document.querySelector('.contact-form form');
contactForm.addEventListener('submit', async (e) => {
  e.preventDefault();
  
  const submitBtn = contactForm.querySelector('button[type="submit"]');
  const originalText = submitBtn.textContent;
  submitBtn.disabled = true;
  submitBtn.textContent = 'Se trimite...';
  
  // Simulate form submission
  try {
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    // Show success message
    const successMsg = document.createElement('div');
    successMsg.className = 'form-success';
    successMsg.textContent = 'Mesajul a fost trimis cu succes!';
    contactForm.appendChild(successMsg);
    
    // Reset form
    contactForm.reset();
    
    // Remove success message after 3 seconds
    setTimeout(() => successMsg.remove(), 3000);
  } catch (error) {
    console.error('Form submission error:', error);
    const errorMsg = document.createElement('div');
    errorMsg.className = 'form-error';
    errorMsg.textContent = 'A apărut o eroare. Vă rugăm încercați din nou.';
    contactForm.appendChild(errorMsg);
    
    setTimeout(() => errorMsg.remove(), 3000);
  } finally {
    submitBtn.disabled = false;
    submitBtn.textContent = originalText;
  }
});
