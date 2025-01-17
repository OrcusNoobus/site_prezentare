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

// Language switcher translations
const translations = {
  ro: {
    // NAV
    headerTitle: "Ciltrade SRL",
    navAbout: "Despre noi",
    navServices: "Servicii",
    navContact: "Contact",
    // ABOUT
    aboutTitle: "Despre noi",
    aboutSubtitle: "Despre Ciltrade SRL",
    aboutDescription1: "O companie românească unde tradiția și inovația se împletesc pentru a oferi produse și servicii de top.",
    aboutDescription2: "Fondată în 2010 în Târgu Mureș, am început cu o gamă de condimente locale pentru retail și consumatorii casnici. Succesul nostru ne-a condus spre extinderea activităților, dezvoltând servicii de preambalare și deschizând un restaurant cu livrare, devenit rapid un brand local sinonim cu calitatea.",
    aboutDescription3: "Astăzi, ne diversificăm prin tehnologie, investind în inteligența artificială pentru a modela viitorul.",
    missionTitle: "Misiunea și Valorile Noastre",
    missionDescription: "Misiunea noastră: Să oferim consumatorilor produse și servicii care să le îmbogățească viața prin calitate și inovație.",
    valuesTitle: "Valorile noastre:",
    value1: "Respect",
    value2: "Încredere",
    value3: "Devotament",
    futurePlansTitle: "Planuri de Viitor",
    futurePlansDescription: "Privim spre viitor cu ambiție și determinare. Ne propunem să devenim un lider național în servicii de preambalare și să extindem restaurantul nostru la nivel regional. În paralel, continuăm să investim în tehnologie, lucrând la un MVP bazat pe inteligență artificială, care să deschidă noi oportunități în domeniu.",
    // SERVICES
    servicesTitle: "Servicii",
    service1Title: "Servicii de Preambalare",
    service1Highlight: "Soluții complete pentru produse alimentare",
    service1Feature1: "Ambalare profesională sub vid și în atmosferă modificată",
    service1Feature2: "Etichetare și branding personalizat",
    service1Feature3: "Depozitare și distribuție eficientă",
    service2Title: "Restaurant & Livrare",
    service2Highlight: "Experiență culinară premium",
    service2Feature1: "Livrare rapidă și eficientă",
    service2Feature2: "Meniu variat și adaptat sezonier",
    service2Feature3: "Opțiuni pentru diverse regimuri alimentare",
    service3Title: "Inovație Tehnologică",
    service3Highlight: "Tehnologie pentru eficiență maximă",
    service3Feature1: "Soluții AI pentru optimizare",
    service3Feature2: "Sisteme de management integrat",
    service3Feature3: "Arhitecturi AI avansate cu agenți personalizați",
    // CONTACT
    contactTitle: "Contact",
    companyDetailsTitle: "Ciltrade SRL",
    addressTitle: "Adresă",
    addressLine1: "Str. Voinicenilor nr. 108/A",
    addressLine2: "Târgu Mureș, România",
    phoneTitle: "Telefon",
    phoneNumber: "+40 770 662 375",
    emailTitle: "Email",
    email1: "office@preambalari.ro",
    email2: "radumircea86@gmail.com",
    legalTitle: "Detalii Juridice",
    cui: "CUI: RO27346260",
    regCom: "Reg. Com.: J26/575/2010",
    contactFormTitle: "Trimite-ne un Mesaj",
    labelName: "Nume:",
    labelEmail: "Email:",
    labelMessage: "Mesaj:",
    formSubmitBtn: "Trimite Mesaj",
    footer: "2025 Ciltrade SRL. Toate drepturile rezervate."
  },
  en: {
    // NAV
    headerTitle: "Ciltrade SRL",
    navAbout: "About Us",
    navServices: "Services",
    navContact: "Contact",
    // ABOUT
    aboutTitle: "About Us",
    aboutSubtitle: "About Ciltrade SRL",
    aboutDescription1: "A Romanian company where tradition and innovation intertwine to provide top-notch products and services.",
    aboutDescription2: "Founded in 2010 in Târgu Mureș, we started with a range of local spices for retail and home consumers. Our success led us to expand, developing pre-packaging services and opening a delivery restaurant that quickly became a local brand synonymous with quality.",
    aboutDescription3: "Today, we diversify through technology, investing in artificial intelligence to shape the future.",
    missionTitle: "Our Mission and Values",
    missionDescription: "Our mission: To offer consumers products and services that enrich their lives through quality and innovation.",
    valuesTitle: "Our values:",
    value1: "Respect",
    value2: "Trust",
    value3: "Devotion",
    futurePlansTitle: "Future Plans",
    futurePlansDescription: "We look to the future with ambition and determination. We aim to become a national leader in pre-packaging services and expand our restaurant regionally. In parallel, we continue to invest in technology, working on an AI-based MVP to unlock new opportunities in the field.",
    // SERVICES
    servicesTitle: "Services",
    service1Title: "Pre-Packaging Services",
    service1Highlight: "Complete solutions for food products",
    service1Feature1: "Professional vacuum and modified atmosphere packaging",
    service1Feature2: "Custom labeling and branding",
    service1Feature3: "Efficient storage and distribution",
    service2Title: "Restaurant & Delivery",
    service2Highlight: "Premium culinary experience",
    service2Feature1: "Fast and efficient delivery",
    service2Feature2: "Seasonally adapted and varied menu",
    service2Feature3: "Options for various dietary regimes",
    service3Title: "Technological Innovation",
    service3Highlight: "Technology for maximum efficiency",
    service3Feature1: "AI solutions for optimization",
    service3Feature2: "Integrated management systems",
    service3Feature3: "Advanced AI architectures with custom agents",
    // CONTACT
    contactTitle: "Contact",
    companyDetailsTitle: "Ciltrade SRL",
    addressTitle: "Address",
    addressLine1: "Str. Voinicenilor nr. 108/A",
    addressLine2: "Târgu Mureș, Romania",
    phoneTitle: "Phone",
    phoneNumber: "+40 770 662 375",
    emailTitle: "Email",
    email1: "office@preambalari.ro",
    email2: "radumircea86@gmail.com",
    legalTitle: "Legal Details",
    cui: "VAT: RO27346260",
    regCom: "Trade Reg.: J26/575/2010",
    contactFormTitle: "Send Us a Message",
    labelName: "Name:",
    labelEmail: "Email:",
    labelMessage: "Message:",
    formSubmitBtn: "Send Message",
    footer: "2025 Ciltrade SRL. All rights reserved."
  },
  de: {
    // NAV
    headerTitle: "Ciltrade SRL",
    navAbout: "Über uns",
    navServices: "Dienstleistungen",
    navContact: "Kontakt",
    // ABOUT
    aboutTitle: "Über uns",
    aboutSubtitle: "Über Ciltrade SRL",
    aboutDescription1: "Ein rumänisches Unternehmen, in dem sich Tradition und Innovation verbinden, um erstklassige Produkte und Dienstleistungen anzubieten.",
    aboutDescription2: "Gegründet 2010 in Târgu Mureș, starteten wir mit einer Auswahl an lokalen Gewürzen für Einzelhandel und Privatkunden. Unser Erfolg führte zur Erweiterung unserer Aktivitäten, zur Entwicklung von Vorverpackungsdiensten und zur Eröffnung eines Lieferrestaurants, das schnell zu einer lokalen Marke wurde, die für Qualität steht.",
    aboutDescription3: "Heute diversifizieren wir uns durch Technologie und investieren in künstliche Intelligenz, um die Zukunft zu gestalten.",
    missionTitle: "Unsere Mission und Werte",
    missionDescription: "Unsere Mission: Den Verbrauchern Produkte und Dienstleistungen anzubieten, die ihr Leben durch Qualität und Innovation bereichern.",
    valuesTitle: "Unsere Werte:",
    value1: "Respekt",
    value2: "Vertrauen",
    value3: "Hingabe",
    futurePlansTitle: "Zukunftspläne",
    futurePlansDescription: "Wir blicken mit Ehrgeiz und Entschlossenheit in die Zukunft. Wir wollen nationaler Marktführer bei Vorverpackungsdiensten werden und unser Restaurant regional ausbauen. Parallel investieren wir weiter in Technologie und arbeiten an einem KI-basierten MVP, um neue Möglichkeiten zu erschließen.",
    // SERVICES
    servicesTitle: "Dienstleistungen",
    service1Title: "Vorverpackungsdienste",
    service1Highlight: "Komplette Lösungen für Lebensmittelprodukte",
    service1Feature1: "Professionelles Vakuum- und Schutzgasverpacken",
    service1Feature2: "Kundenspezifische Etikettierung und Branding",
    service1Feature3: "Effiziente Lagerung und Distribution",
    service2Title: "Restaurant & Lieferung",
    service2Highlight: "Erstklassiges kulinarisches Erlebnis",
    service2Feature1: "Schnelle und effiziente Lieferung",
    service2Feature2: "Vielfältiges, saisonal angepasstes Menü",
    service2Feature3: "Optionen für verschiedene Ernährungsweisen",
    service3Title: "Technische Innovation",
    service3Highlight: "Technologie für maximale Effizienz",
    service3Feature1: "KI-Lösungen für Optimierung",
    service3Feature2: "Integrierte Managementsysteme",
    service3Feature3: "Fortgeschrittene KI-Architekturen mit kundenspezifischen Agenten",
    // CONTACT
    contactTitle: "Kontakt",
    companyDetailsTitle: "Ciltrade SRL",
    addressTitle: "Adresse",
    addressLine1: "Str. Voinicenilor nr. 108/A",
    addressLine2: "Târgu Mureș, Rumänien",
    phoneTitle: "Telefon",
    phoneNumber: "+40 770 662 375",
    emailTitle: "E-Mail",
    email1: "office@preambalari.ro",
    email2: "radumircea86@gmail.com",
    legalTitle: "Rechtliche Details",
    cui: "USt-IdNr.: RO27346260",
    regCom: "Handelsreg.: J26/575/2010",
    contactFormTitle: "Senden Sie uns eine Nachricht",
    labelName: "Name:",
    labelEmail: "E-Mail:",
    labelMessage: "Nachricht:",
    formSubmitBtn: "Nachricht Senden",
    //footer
    footer: "2025 Ciltrade SRL. Alle Rechte vorbehalten."
  }
};

// Actualizare text când se schimbă limba
function updateLanguage(lang) {
  // Înlocuim textul pe baza id-urilor
  document.getElementById('header-title').textContent = translations[lang].headerTitle;
  document.getElementById('nav-about').textContent = translations[lang].navAbout;
  document.getElementById('nav-services').textContent = translations[lang].navServices;
  document.getElementById('nav-contact').textContent = translations[lang].navContact;
  document.getElementById('about-title').textContent = translations[lang].aboutTitle;
  document.getElementById('about-subtitle').textContent = translations[lang].aboutSubtitle;
  document.getElementById('about-description1').textContent = translations[lang].aboutDescription1;
  document.getElementById('about-description2').textContent = translations[lang].aboutDescription2;
  document.getElementById('about-description3').textContent = translations[lang].aboutDescription3;
  document.getElementById('mission-title').textContent = translations[lang].missionTitle;
  document.getElementById('mission-description').textContent = translations[lang].missionDescription;
  document.getElementById('values-title').textContent = translations[lang].valuesTitle;
  document.getElementById('value1').textContent = translations[lang].value1;
  document.getElementById('value2').textContent = translations[lang].value2;
  document.getElementById('value3').textContent = translations[lang].value3;
  document.getElementById('future-plans-title').textContent = translations[lang].futurePlansTitle;
  document.getElementById('future-plans-description').textContent = translations[lang].futurePlansDescription;
  document.getElementById('services-title').textContent = translations[lang].servicesTitle;
  document.getElementById('service1-title').textContent = translations[lang].service1Title;
  document.getElementById('service1-highlight').textContent = translations[lang].service1Highlight;
  document.getElementById('service1-feature1').textContent = translations[lang].service1Feature1;
  document.getElementById('service1-feature2').textContent = translations[lang].service1Feature2;
  document.getElementById('service1-feature3').textContent = translations[lang].service1Feature3;
  document.getElementById('service2-title').textContent = translations[lang].service2Title;
  document.getElementById('service2-highlight').textContent = translations[lang].service2Highlight;
  document.getElementById('service2-feature1').textContent = translations[lang].service2Feature1;
  document.getElementById('service2-feature2').textContent = translations[lang].service2Feature2;
  document.getElementById('service2-feature3').textContent = translations[lang].service2Feature3;
  document.getElementById('service3-title').textContent = translations[lang].service3Title;
  document.getElementById('service3-highlight').textContent = translations[lang].service3Highlight;
  document.getElementById('service3-feature1').textContent = translations[lang].service3Feature1;
  document.getElementById('service3-feature2').textContent = translations[lang].service3Feature2;
  document.getElementById('service3-feature3').textContent = translations[lang].service3Feature3;
  document.getElementById('contact-title').textContent = translations[lang].contactTitle;
  document.getElementById('company-details-title').textContent = translations[lang].companyDetailsTitle;
  document.getElementById('address-title').textContent = translations[lang].addressTitle;
  document.getElementById('address-line1').textContent = translations[lang].addressLine1;
  document.getElementById('address-line2').textContent = translations[lang].addressLine2;
  document.getElementById('phone-title').textContent = translations[lang].phoneTitle;
  document.getElementById('phone-number').textContent = translations[lang].phoneNumber;
  document.getElementById('email-title').textContent = translations[lang].emailTitle;
  document.getElementById('email1').textContent = translations[lang].email1;
  document.getElementById('email2').textContent = translations[lang].email2;
  document.getElementById('legal-title').textContent = translations[lang].legalTitle;
  document.getElementById('cui').textContent = translations[lang].cui;
  document.getElementById('reg-com').textContent = translations[lang].regCom;
  document.getElementById('contact-form-title').textContent = translations[lang].contactFormTitle;
  document.getElementById('label-name').textContent = translations[lang].labelName;
  document.getElementById('label-email').textContent = translations[lang].labelEmail;
  document.getElementById('label-message').textContent = translations[lang].labelMessage;
  document.getElementById('form-submit-btn').textContent = translations[lang].formSubmitBtn;
  document.getElementById('footer').textContent = translations[lang].footer;
}

// Setăm limba inițială (RO)
document.documentElement.lang = 'ro';

// Ascultă schimbarea limbii
const languageSelect = document.getElementById('language-select');
languageSelect.addEventListener('change', (e) => {
  const lang = e.target.value;
  document.documentElement.lang = lang;
  updateLanguage(lang);
});

// Creăm meniul mobil
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

// Observers
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
