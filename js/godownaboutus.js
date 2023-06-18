function scrollToContent() {
    const rowSection = document.querySelector('.row');
    const offsetTop = rowSection.offsetTop;
    window.scrollTo({
      top: offsetTop,
      behavior: 'smooth'
    });
  }