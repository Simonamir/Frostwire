function scrollToContent() {
    const osSection = document.querySelector('.container');
    const offsetTop = osSection.offsetTop;
    window.scrollTo({
      top: offsetTop,
      behavior: 'smooth'
    });
  }