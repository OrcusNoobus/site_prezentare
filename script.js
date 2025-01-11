// Scroll to Top functionality
const scrollToTopBtn = document.getElementById('scroll-to-top');

const handleScroll = () => {
  if (window.scrollY > 300) {
    scrollToTopBtn.classList.add('visible');
  } else {
    scrollToTopBtn.classList.remove('visible');
  }
};

scrollToTopBtn.addEventListener('click', () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
});

window.addEventListener('scroll', handleScroll);

// Language switcher functionality with improved accessibility
const languageSelect = document.getElementById('language-select');
const translations = {
  ro: {
    about: 'Despre noi',
    services: 'Servicii',
    contact: 'Contact'
  },
  en: {
    about: 'About Us',
    services: 'Services',
    contact: 'Contact'
  },
  de: {
    about: 'Über uns',
    services: 'Dienstleistungen',
    contact: 'Kontakt'
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

// Enhanced mobile menu with accessibility
const createMobileMenu = () => {
  const header = document.querySelector('header');
  const nav = document.querySelector('nav');
  const menuButton = document.createElement('button');
  menuButton.className = 'mobile-menu-btn';
  menuButton.setAttribute('aria-label', 'Toggle Navigation Menu');
  menuButton.setAttribute('aria-expanded', 'false');
  menuButton.innerHTML = `
    <span class="menu-icon"></span>
    <span class="sr-only">Toggle Menu</span>
  `;
  
  nav.parentNode.insertBefore(menuButton, nav);
  
  menuButton.addEventListener('click', () => {
    const isExpanded = menuButton.getAttribute('aria-expanded') === 'true';
    menuButton.setAttribute('aria-expanded', !isExpanded);
    nav.classList.toggle('active');
    menuButton.classList.toggle('active');
  });

  // Close menu when clicking outside
  document.addEventListener('click', (e) => {
    if (!header.contains(e.target) && nav.classList.contains('active')) {
      nav.classList.remove('active');
      menuButton.classList.remove('active');
      menuButton.setAttribute('aria-expanded', 'false');
    }
  });

  // Close menu when pressing Escape
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && nav.classList.contains('active')) {
      nav.classList.remove('active');
      menuButton.classList.remove('active');
      menuButton.setAttribute('aria-expanded', 'false');
    }
  });
};

createMobileMenu();

// Enhanced smooth scroll behavior with focus management
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const targetId = this.getAttribute('href');
    const targetElement = document.querySelector(targetId);
    
    if (targetElement) {
      targetElement.scrollIntoView({
        behavior: 'smooth'
      });
      targetElement.setAttribute('tabindex', '-1');
      targetElement.focus({ preventScroll: true });
    }
  });
});

// Enhanced IntersectionObserver with better performance
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

// Optimized observers with better thresholds
const fadeObserver = createObserver({
  threshold: 0.1,
  rootMargin: '50px'
});

document.querySelectorAll('.hidden').forEach(el => fadeObserver.observe(el));

// Enhanced slide observer with smoother animations
const slideObserver = createObserver({
  threshold: [0, 0.1, 0.2],
  rootMargin: '0px 0px -5% 0px'
});

document.querySelectorAll('.service').forEach(service => {
  slideObserver.observe(service);
  
  const features = service.querySelectorAll('.service-feature');
  features.forEach((feature, index) => {
    feature.classList.add('slide-hidden');
    feature.style.transitionDelay = `${(index + 1) * 0.2}s`;
    feature.style.transitionDuration = '0.6s';
    slideObserver.observe(feature);
  });
});

// Enhanced service card interactions
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

// Optimized image lazy loading with error handling
const images = document.querySelectorAll('img[data-src]');
const imgObserver = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const img = entry.target;
      const wrapper = document.createElement('div');
      wrapper.className = 'img-wrapper';
      
      // Create loading spinner
      const spinner = document.createElement('div');
      spinner.className = 'loading-spinner';
      img.parentNode.insertBefore(wrapper, img);
      wrapper.appendChild(img);
      wrapper.appendChild(spinner);
      
      // Enhanced image loading with error handling
      const newImg = new Image();
      
      newImg.onload = () => {
        img.src = img.dataset.src;
        img.classList.add('fade-in');
        spinner.remove();
        
        // Add loaded class for additional styling
        img.classList.add('loaded');
      };
      
      newImg.onerror = () => {
        spinner.remove();
        wrapper.innerHTML += `
          <div class="img-error">
            <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" stroke-width="2">
              <circle cx="12" cy="12" r="10"/>
              <line x1="12" y1="8" x2="12" y2="12"/>
              <line x1="12" y1="16" x2="12" y2="16"/>
            </svg>
            <span>Failed to load image</span>
          </div>
        `;
      };
      
      newImg.src = img.dataset.src;
      observer.unobserve(img);
    }
  });
});

images.forEach(img => imgObserver.observe(img));

// Contact form handling with reCAPTCHA
const contactForm = document.getElementById('contactForm');
contactForm.addEventListener('submit', async (e) => {
  e.preventDefault();
  
  const submitBtn = contactForm.querySelector('button[type="submit"]');
  const originalText = submitBtn.textContent;
  
  // Verifică reCAPTCHA
  const recaptchaResponse = grecaptcha.getResponse();
  if (!recaptchaResponse) {
    const errorMsg = document.createElement('div');
    errorMsg.className = 'form-error';
    errorMsg.textContent = 'Vă rugăm să confirmați că nu sunteți robot.';
    contactForm.appendChild(errorMsg);
    setTimeout(() => errorMsg.remove(), 3000);
    return;
  }
  
  submitBtn.disabled = true;
  submitBtn.textContent = 'Se trimite...';
  
  try {
    // Simulare trimitere date (înlocuiește cu logica reală dacă e cazul)
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    // Afișează mesaj de succes
    const successMsg = document.createElement('div');
    successMsg.className = 'form-success';
    successMsg.textContent = 'Mesajul a fost trimis cu succes!';
    contactForm.appendChild(successMsg);
    
    // Reset form și reCAPTCHA
    contactForm.reset();
    grecaptcha.reset();
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
