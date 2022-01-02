particlesJS('particles-js',
	{
	  "particles": {
	    "number": {
	      "value": 120,
	      "density": {
	        "enable": true,
	        "value_area": 800
	      }
	    },
	    "color": {
	      "value": "#00ff00"
	    },
	    "shape": {
	      "type": "circle",
	      "stroke": {
	        "width": 1,
	        "color": "#00ffee"
	      },
	      "polygon": {
	        "nb_sides": 3
	      },
	      "image": {
	        "src": "img/github.svg",
	        "width": 100,
	        "height": 100
	      }
	    },
	    "opacity": {
	      "value": 0.75,
	      "random": true,
	      "anim": {
	        "enable": false,
	        "speed": 4,
	        "opacity_min": 0.1,
	        "sync": false
	      }
	    },
	    "size": {
	      "value": 7,
	      "random": true,
	      "anim": {
	        "enable": false,
	        "speed": 40,
	        "size_min": 0.1,
	        "sync": false
	      }
	    },
	    "line_linked": {
	      "enable": true,
	      "distance": 100,
	      "color": "#ffffff",
	      "opacity": 0.25,
	      "width": 0.5
	    },
	    "move": {
	      "enable": true,
	      "speed": 6,
	      "direction": "none",
	      "random": false,
	      "straight": false,
	      "out_mode": "bounce",
	      "bounce": false,
	      "attract": {
	        "enable": false,
	        "rotateX": 600,
	        "rotateY": 1200
	      }
	    }
	  },
	  "interactivity": {
	    "detect_on": "canvas",
	    "events": {
	      "onhover": {
	        "enable": true,
	        "mode": "grab"
	      },
	      "onclick": {
	        "enable": true,
	        "mode": "bubble"
	      },
	      "resize": true
	    },
	    "modes": {
	      "grab": {
	        "distance": 150,
	        "line_linked": {
	          "opacity": 0.25
	        }
	      },
	      "bubble": {
	        "distance": 400,
	        "size": 40,
	        "duration": 2,
	        "opacity": 1,
	        "speed": 3
	      },
	      "repulse": {
	        "distance": 200,
	        "duration": 0.4
	      },
	      "push": {
	        "particles_nb": 4
	      },
	      "remove": {
	        "particles_nb": 2
	      }
	    }
	  },
	  "retina_detect": true
	}
);