function scrollToContent() {
    const formSection = document.querySelector('.containerform');
    const offsetTop = formSection.offsetTop
    window.scrollTo({
      top: offsetTop,
      behavior: 'smooth'
    });
  }