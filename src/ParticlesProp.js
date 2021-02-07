export const particlesProps = {
  "background": {
    "color": {
      "value": "transparent"
    },
    "position": "50% 50%",
    "repeat": "no-repeat",
    "size": "cover"
  },
  "backgroundMask": {
    "cover": {
      "color": {
        "value": "#0d7377"
      }
    }
  },
  "backgroundMode": {
    "enable": true,
    "zIndex": 1
  },
  "interactivity": {
    "events": {
      "onClick": {
        "enable": true,
        "mode": "push"
      },
      "onHover": {
        "enable": true,
        "mode": "slow",
        "parallax": {
          "force": 60
        }
      }
    },
    "modes": {
      "bubble": {
        "distance": 400,
        "duration": 2,
        "opacity": 0.8,
        "size": 40
      },
      "grab": {
        "distance": 400
      },
      "light": {
        "area": {
          "gradient": {
            "start": {
              "value": "#0d7377"
            }
          }
        }
      },
      "slow": {
        "radius": 100
      }
    }
  },
  "particles": {
    "color": {
      "value": "#0d7377"
    },
    "links": {
      "color": {
        "value": "#0d7377"
      },
      "distance": 150,
      "enable": true,
      "opacity": 0.4
    },
    "move": {
      "attract": {
        "rotate": {
          "x": 600,
          "y": 1200
        }
      },
      "enable": true,
      "outModes": {
        "bottom": "out",
        "left": "out",
        "right": "out",
        "top": "out"
      },
      "speed": 20
    },
    "number": {
      "density": {
        "enable": true
      },
      "value": 80
    },
    "opacity": {
      "value": 0.5,
      "animation": {
        "minimumValue": 0.1,
        "speed": 1
      }
    },
    "shape": {
      "options": {
        "polygon": {
          "nb_sides": 5
        },
        "star": {
          "nb_sides": 5
        },
        "image": {
          "src": "https://cdn.matteobruni.it/images/particles/github.svg",
          "width": 100,
          "height": 100
        },
        "images": {
          "src": "https://cdn.matteobruni.it/images/particles/github.svg",
          "width": 100,
          "height": 100
        }
      }
    },
    "size": {
      "random": {
        "enable": true
      },
      "value": 5,
      "animation": {
        "minimumValue": 0.1,
        "speed": 40
      }
    },
    "stroke": {
      "color": {
        "value": "#000000",
        "animation": {
          "enable": false,
          "speed": 1,
          "sync": true
        }
      }
    }
  }
};