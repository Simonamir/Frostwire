function scrollToContent() {
    const contactSection = document.querySelector('.contact-container');
    const offsetTop = contactSection.offsetTop;
    window.scrollTo({
      top: offsetTop,
      behavior: 'smooth'
    });
  }