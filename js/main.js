function initMap() {
  const loc = {
    lat: 44.787197, lng: 20.457273
  };
  const map = new google.maps.Map(document.querySelector('.map'),
  {
    zoom: 14,
    center: loc
  });
  const marker = new google.maps.Marker ( { position: loc, map: map});
}

window.addEventListener('scroll', function() {
  if(window.scrollY > 150) {
    document.querySelector('#navbar').style.opacity = 0.9;
  } else {
    document.querySelector('#navbar').style.opacity = 1;
  }
});

$('#navbar a, .btn').on('click', function(event) {
  if(this.hash !== '') {
    
    event.preventDefault();
    const hash = this.hash;

    $('html, body').animate(
      {
        scrollTop: $(hash).offset().top - 100
      },
      800
      );
  }
});