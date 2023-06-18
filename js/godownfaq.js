function scrollToContent() {
    const faqContainer = document.querySelector('.faq-container');
    const offsetTop = faqContainer.offsetTop;
    window.scrollTo({
      top: offsetTop,
      behavior: 'smooth'
    });
  }
 
