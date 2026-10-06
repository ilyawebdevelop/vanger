export function backgroundParallax() {
  const sections = document.querySelectorAll(".sect-parallax");

  if (sections.length) {
    sections.forEach((section) => {
      const backgrounds = section.querySelectorAll(".sect-parallax-el");
      if (window.matchMedia("(min-width: 992px)").matches) {
        section.addEventListener("mousemove", (e) => {
          const { width, height } = section.getBoundingClientRect();
          const x = (e.offsetX / width - 0.5) * 20;
          const y = (e.offsetY / height - 0.5) * 20;

          backgrounds.forEach((bg, index) => {
            const duration = bg.dataset.duration;

            const depth = (index + 1) * 5;

            gsap.to(bg, {
              x: x * depth,
              y: y * depth,
              duration: duration || 15,
              ease: "power2.out",
            });
          });
        });
        section.addEventListener("mouseleave", () => {
          gsap.to(backgrounds, {
            x: 0,
            y: 0,
            duration: 15,
            ease: "power2.out",
          });
        });
      } else {
        backgrounds.forEach((b) => stirring(b, 5));
      }
    });
  }
}

function stirring(el, duration) {
  gsap.to(el, {
    x: "random(-15, 15, 1)", // случайное движение по X
    y: "random(-15, 15, 1)", // случайное движение по Y
    rotation: "random(-3, 3, 1)", // небольшое вращение
    duration: duration || 1.5, // плавность
    ease: "sine.inOut",
    repeat: -1, // бесконечно
    yoyo: true, // возврат в исходное положение
  });
}
