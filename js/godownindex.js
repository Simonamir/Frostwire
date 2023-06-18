function scrollToContent() {
    const osCard = document.querySelector('.os-card');
    const offsetTop = osCard.offsetTop;
    window.scrollTo({
      top: offsetTop,
      behavior: 'smooth'
    });  
  }
 
