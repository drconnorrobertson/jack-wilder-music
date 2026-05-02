// Jack Wilder Music Website - Main JavaScript

// Mobile menu toggle
const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
const navLinks = document.querySelector('.nav-links');

if (mobileMenuBtn) {
  mobileMenuBtn.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    mobileMenuBtn.textContent = navLinks.classList.contains('active') ? '✕' : '☰';
  });
}

// Close mobile menu on link click
document.querySelectorAll('.nav-links a').forEach(link => {
  link.addEventListener('click', () => {
    navLinks.classList.remove('active');
    if (mobileMenuBtn) mobileMenuBtn.textContent = '☰';
  });
});

// Smooth scroll offset for sticky nav
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      const offsetTop = target.offsetTop - 80;
      window.scrollTo({ top: offsetTop, behavior: 'smooth' });
    }
  });
});

// Active nav link highlighting based on scroll position
window.addEventListener('scroll', () => {
  updateActiveNavLink();
});

function updateActiveNavLink() {
  const sections = document.querySelectorAll('section[id]');
  const scrollPosition = window.scrollY + 100;

  sections.forEach(section => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.offsetHeight;
    const sectionId = section.getAttribute('id');

    if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
      document.querySelectorAll('.nav-links a').forEach(link => {
        link.classList.remove('active');
      });
      const activeLink = document.querySelector(`.nav-links a[href="#${sectionId}"]`);
      if (activeLink) activeLink.classList.add('active');
    }
  });
}

// Newsletter subscription
const newsletterForm = document.querySelector('.newsletter-signup');
if (newsletterForm) {
  newsletterForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const input = newsletterForm.querySelector('input');
    const email = input.value;

    if (isValidEmail(email)) {
      alert('Thanks for subscribing! Check your email for confirmation.');
      input.value = '';
    } else {
      alert('Please enter a valid email address.');
    }
  });
}

function isValidEmail(email) {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(email);
}

// Booking form submission
const bookingForm = document.querySelector('.booking-form');
if (bookingForm) {
  const submitBtn = bookingForm.querySelector('button[type="submit"]');

  bookingForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const formData = {
      eventName: document.querySelector('#eventName')?.value,
      eventDate: document.querySelector('#eventDate')?.value,
      eventLocation: document.querySelector('#eventLocation')?.value,
      eventType: document.querySelector('#eventType')?.value,
      guestCount: document.querySelector('#guestCount')?.value,
      budget: document.querySelector('#budget')?.value,
      name: document.querySelector('#name')?.value,
      email: document.querySelector('#email')?.value,
      phone: document.querySelector('#phone')?.value,
      message: document.querySelector('#message')?.value,
    };

    // Validate required fields
    if (!formData.name || !formData.email || !formData.eventType) {
      alert('Please fill in all required fields.');
      return;
    }

    // Send to booking email
    submitBtn.textContent = 'Sending...';
    submitBtn.disabled = true;

    // Simulate submission (replace with actual backend)
    setTimeout(() => {
      console.log('Booking inquiry:', formData);
      alert('Thank you for your booking inquiry! We will contact you shortly.');
      bookingForm.reset();
      submitBtn.textContent = 'Send Booking Request';
      submitBtn.disabled = false;
    }, 1000);
  });
}

// Contact form submission
const contactForm = document.querySelector('form[action*="contact"]');
if (contactForm) {
  const submitBtn = contactForm.querySelector('button[type="submit"]');

  contactForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const name = contactForm.querySelector('input[name="name"]')?.value;
    const email = contactForm.querySelector('input[name="email"]')?.value;
    const subject = contactForm.querySelector('input[name="subject"]')?.value;
    const message = contactForm.querySelector('textarea[name="message"]')?.value;

    if (!name || !email || !subject || !message) {
      alert('Please fill in all fields.');
      return;
    }

    submitBtn.textContent = 'Sending...';
    submitBtn.disabled = true;

    setTimeout(() => {
      console.log('Contact message:', { name, email, subject, message });
      alert('Thank you for your message! We will get back to you soon.');
      contactForm.reset();
      submitBtn.textContent = 'Send Message';
      submitBtn.disabled = false;
    }, 1000);
  });
}

// Lazy load images
if ('IntersectionObserver' in window) {
  const imageObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const img = entry.target;
        img.src = img.dataset.src;
        img.removeAttribute('data-src');
        observer.unobserve(img);
      }
    });
  });

  document.querySelectorAll('img[data-src]').forEach(img => imageObserver.observe(img));
}

// Smooth fade-in on page load
window.addEventListener('load', () => {
  document.body.style.opacity = '1';
});

// Add scroll reveal effect for elements
const revealElements = () => {
  const elements = document.querySelectorAll('.reveal');
  elements.forEach(element => {
    const elementTop = element.getBoundingClientRect().top;
    const elementBottom = element.getBoundingClientRect().bottom;

    if (elementTop < window.innerHeight && elementBottom > 0) {
      element.classList.add('revealed');
    }
  });
};

window.addEventListener('scroll', revealElements);
document.addEventListener('DOMContentLoaded', revealElements);

// Add reveal styles
const style = document.createElement('style');
style.textContent = `
  .reveal {
    opacity: 0;
    transform: translateY(20px);
    transition: opacity 0.6s ease, transform 0.6s ease;
  }

  .reveal.revealed {
    opacity: 1;
    transform: translateY(0);
  }
`;
document.head.appendChild(style);
