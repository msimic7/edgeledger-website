/*
 * Using const without Babel is a big risk for backwards compatability
 * Not all browsers support it
 */

function initMap() {
  /*
   * Use trailing comma in objects, this will reduce git diff footprint and keep git history cleaner
   * on every subsequent commit if something was added to the object.
    const loc = {
     lat: 44.787197,
	 lng: 20.457273
	};
   */

  const loc = {
	lat: 44.787197,
	lng: 20.457273
  };

  const map = new google.maps.Map(document.querySelector('.map'), {
    zoom: 14,
    center: loc
  });

  /* const marker = new google.maps.Marker ( { position: loc, map: map});
   * No need to assign google.maps.Marker() to a const if its not going to be used
   * anywhere else in the codebase
   * See eslint no-unused-vars for more info
   */
  new google.maps.Marker({ position: loc, map: map});
}

window.addEventListener('scroll', function() {
  if(window.scrollY > 150) {
    document.querySelector('#navbar').style.opacity = 0.9;
  } else {
    document.querySelector('#navbar').style.opacity = 1;
  }
});

// This works only because you are loading main.js at the end of html DOM
// More on this in Readme.md / It's a bad practice

$('#navbar a, .btn').on('click', function(event) {
  // NOTE: Make sure you are certain what *this* refers to, scoping can be tricky but here it's used correctly
  if(this.hash !== '') {
    event.preventDefault();
    const hash = this.hash;

    $('html, body').animate({
     scrollTop: $(hash).offset().top - 100,
	}, 800);
  }
});
