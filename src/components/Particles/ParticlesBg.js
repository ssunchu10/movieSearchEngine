import React from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import { useCallback } from "react";

function ParticlesBg() {
  const particlesInit = useCallback(async (engine) => {
    await loadFull(engine);
  }, []);

  const particlesLoaded = useCallback(async (container) => {
    await console.log(container);
  }, []);

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      loaded={particlesLoaded}
      options={{
        fullScreen: {
          enable: true,
          zIndex: -1,
        },
        background: {
          image: " linear-gradient(19deg, #21D4FD 0%, #B721FF 100%)",
        },
        particles: {
            number: {
              value: 80,
              density: {
                enable: true,
                area: 800
              }
            },
            color: {
              value: ["#2EB67D", "#ECB22E", "#E01E5B", "#36C5F0"]
            },
            shape: {
              type: "circle"
            },
            opacity: {
              value: 1
            },
            size: {
              value: { min: 1, max: 8 }
            },
            links: {
              enable: true,
              distance: 150,
              color: "#808080",
              opacity: 0.4,
              width: 1
            },
            move: {
              enable: true,
              speed: 5,
              direction: "none",
              random: false,
              straight: false,
              outModes: "out"
            }
          },
          interactivity: {
            events: {
              onHover: {
                enable: true,
                mode: "grab"
              },
              onClick: {
                enable: true,
                mode: "push"
              }
            },
            modes: {
              grab: {
                distance: 140,
                links: {
                  opacity: 1
                }
              },
              push: {
                quantity: 4
              }
            }
          },
        interactivity: {
          detect_on: "canvas",
          events: {
            onhover: { enable: false, mode: "repulse" },
            onclick: { enable: false, mode: "push" },
            resize: true,
          },
          modes: {
            grab: { distance: 800, line_linked: { opacity: 1 } },
            bubble: {
              distance: 790,
              size: 79,
              duration: 2,
              opacity: 0.8,
              speed: 3,
            },
            repulse: { distance: 400, duration: 0.4 },
            push: { particles_nb: 4 },
            remove: { particles_nb: 2 },
          },
        },
        retina_detect: true,
      }}
    />
  );
}

export default ParticlesBg;

