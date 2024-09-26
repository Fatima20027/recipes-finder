document.querySelectorAll('.navi a').forEach(link => {
  link.addEventListener('click', function() {
    document.querySelectorAll('.navi a').forEach(item => {
        item.classList.remove('active'); 
    });
    this.classList.add('active');
  });
});