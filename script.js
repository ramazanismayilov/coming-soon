particlesJS("particles-js", {
  particles: {
    number: {
      value: 170,
      density: {
        enable: true,
        value_area: 800,
      },
    },
    color: {
      value: "#0c2d48",
    },
    shape: {
      type: "circle",
      stroke: {
        width: 0,
        color: "#6f42c1",
      },
    },
    opacity: {
      value: 0.5,
      random: false,
    },
    size: {
      value: 3,
      random: true,
    },
    line_linked: {
      enable: true,
      distance: 150,
      color: "#6f42c1",
      opacity: 0.4,
      width: 1,
    },
    move: {
      enable: true,
      speed: 2.5,
      direction: "none",
      random: false,
      straight: false,
      out_mode: "out",
      bounce: false,
    },
  },
  interactivity: {
    detect_on: "canvas",
    events: {
      onhover: {
        enable: false,
        mode: "repulse",
      },
      onclick: {
        enable: true,
        mode: "push",
      },
      resize: true,
    },
  },
  retina_detect: true,
});
