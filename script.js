document.addEventListener("DOMContentLoaded", function() {
    var thumbnails = document.querySelectorAll('.thumbnail-wrapper .img-thumbnail');
    
    var displayImage = document.querySelector('.product-image-thumbnail');
  
    thumbnails.forEach(function(thumbnail) {
      thumbnail.addEventListener('click', function() {
        displayImage.src = thumbnail.src;
      });
    });
  });

  document.addEventListener("DOMContentLoaded", function() {
    var mySwiper = new Swiper('.swiper-container', {
      slidesPerView: 3, // Adjusted for your layout
      spaceBetween: 30,
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
      // Responsive breakpoints
      breakpoints: {
        // Adjust these values as needed
        320: {
          slidesPerView: 1,
          spaceBetween: 10
        },
        768: {
          slidesPerView: 2,
          spaceBetween: 20
        },
        1024: {
          slidesPerView: 3,
          spaceBetween: 30
        },
      }
    });
  });

  document.addEventListener('DOMContentLoaded', function() {
    // Fetch and include the header
    fetch('header.html')
      .then(response => response.text())
      .then(data => {
        document.querySelector('body').insertAdjacentHTML('afterbegin', data);
      });
  
    // Fetch and include the footer
    fetch('footer.html')
      .then(response => response.text())
      .then(data => {
        document.querySelector('body').insertAdjacentHTML('beforeend', data);
      });
  });
  
  
  