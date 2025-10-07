// Menunggu semua elemen halaman dimuat sebelum menjalankan script
document.addEventListener('DOMContentLoaded', () => {
    
  // Mengambil elemen-elemen penting dari DOM
  const book = document.getElementById('book');
  const pages = Array.from(document.querySelectorAll('.page'));
  const pageCount = pages.length;
  const video = document.querySelector('#p4 video');
    
  let currentPage = 0;
  let startX = 0;
  let endX = 0;

  function updateBookState() {
    if (currentPage === 0) {
        book.classList.remove('opened');
    } else {
        book.classList.add('opened');
    }
  }

  function goNextPage() {
    if (currentPage < pageCount) {
      const pageToFlip = pages[currentPage];
      if (pageToFlip) {
        pageToFlip.classList.add('flipped');
        currentPage++;
        updateBookState();
        if (pageToFlip.id === 'p3' && video) {
            video.play();
        }
      }
    }
  }

  function goPrevPage() {
    if (currentPage > 0) {
      const prevIndex = currentPage - 1;
      const pageToUnflip = pages[prevIndex];
      if (pageToUnflip) {
        pageToUnflip.classList.remove('flipped');
        currentPage = prevIndex;
        updateBookState();
        if (pageToUnflip.id === 'p3' && video) {
            video.pause();
            video.currentTime = 0;
        }
      }
    }
  }

    // Logika swipe untuk buku
    book.addEventListener('touchstart', (e) => {
        startX = e.touches[0].clientX;
    }, { passive: true });
    book.addEventListener('touchmove', (e) => {
        endX = e.touches[0].clientX;
    }, { passive: true });
    book.addEventListener('touchend', (e) => {
        endX = e.changedTouches[0].clientX;
        const diffX = startX - endX;
        const swipeThreshold = 50; 
        if (diffX > swipeThreshold) { goNextPage(); } 
        else if (diffX < -swipeThreshold) { goPrevPage(); }
        startX = 0; endX = 0;
    });

    // Logika klik untuk buku
    book.addEventListener('click', (e) => {
        if (Math.abs(startX - endX) > 10) return;
        const rect = book.getBoundingClientRect();
        if ((e.clientX - rect.left) > rect.width / 2) { goNextPage(); } 
        else { goPrevPage(); }
    });

    // Tombol 'Tentu'
    const finalButton = document.getElementById('final-button');
    if (finalButton) {
        finalButton.addEventListener('click', (e) => {
            e.stopPropagation();
            alert("YEYY, Terimakasii Sayangg <3");
        });
    }

    // Inisialisasi Partikel JS
    particlesJS('particles-js', 
      { "particles": { "number": { "value": 100, "density": { "enable": true, "value_area": 800 } }, "color": { "value": "#ffffff" }, "shape": { "type": "circle" }, "opacity": { "value": 0.6, "random": true, "anim": { "enable": true, "speed": 1, "opacity_min": 0.1, "sync": false } }, "size": { "value": 2.5, "random": true, "anim": { "enable": false } }, "line_linked": { "enable": false }, "move": { "enable": true, "speed": 0.4, "direction": "none", "random": true, "straight": false, "out_mode": "out", "bounce": false } }, "interactivity": { "detect_on": "canvas", "events": { "onhover": { "enable": true, "mode": "repulse" }, "onclick": { "enable": false }, "resize": true }, "modes": { "repulse": { "distance": 50, "duration": 0.4 } } }, "retina_detect": true }
    );
});
