(() => {
  const header = document.querySelector(".site-header");
  const menuButton = document.querySelector(".menu-button");
  const nav = document.querySelector(".site-nav");

  const setHeaderState = () => {
    if (!header) return;
    header.classList.toggle("is-scrolled", window.scrollY > 12);
  };

  setHeaderState();
  window.addEventListener("scroll", setHeaderState, { passive: true });

  if (menuButton && nav) {
    menuButton.addEventListener("click", () => {
      const isOpen = menuButton.getAttribute("aria-expanded") === "true";
      menuButton.setAttribute("aria-expanded", String(!isOpen));
      nav.classList.toggle("is-open", !isOpen);
      document.body.classList.toggle("is-menu-open", !isOpen);
    });

    nav.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", () => {
        menuButton.setAttribute("aria-expanded", "false");
        nav.classList.remove("is-open");
        document.body.classList.remove("is-menu-open");
      });
    });
  }

  const hero = document.querySelector("[data-hero-slider]");
  if (hero) {
    const slides = [...hero.querySelectorAll(".hero__slide")];
    const dots = [...hero.querySelectorAll(".hero__dot")];
    const prev = hero.querySelector("[data-slider-prev]");
    const next = hero.querySelector("[data-slider-next]");
    const titleTarget = hero.querySelector("[data-hero-title]");
    let current = 0;
    let timerId;

    const showSlide = (index) => {
      current = (index + slides.length) % slides.length;
      slides.forEach((slide, slideIndex) => {
        const isActive = slideIndex === current;
        slide.classList.toggle("is-active", isActive);
        slide.setAttribute("aria-hidden", String(!isActive));
      });
      dots.forEach((dot, dotIndex) => {
        dot.classList.toggle("is-active", dotIndex === current);
        dot.setAttribute("aria-selected", String(dotIndex === current));
      });
      if (titleTarget && slides[current]?.dataset.title) {
        titleTarget.textContent = slides[current].dataset.title;
      }
    };

    const start = () => {
      timerId = window.setInterval(() => showSlide(current + 1), 5200);
    };

    const restart = () => {
      window.clearInterval(timerId);
      start();
    };

    prev?.addEventListener("click", () => {
      showSlide(current - 1);
      restart();
    });

    next?.addEventListener("click", () => {
      showSlide(current + 1);
      restart();
    });

    dots.forEach((dot, index) => {
      dot.addEventListener("click", () => {
        showSlide(index);
        restart();
      });
    });

    showSlide(0);
    start();
  }

  document.querySelectorAll(".faq-item").forEach((item) => {
    const button = item.querySelector(".faq-item__question");
    const answer = item.querySelector(".faq-item__answer");
    if (!button || !answer) return;

    button.addEventListener("click", () => {
      const isOpen = item.classList.toggle("is-open");
      button.setAttribute("aria-expanded", String(isOpen));
      answer.style.maxHeight = isOpen ? `${answer.scrollHeight}px` : "0px";
    });
  });

  const fadeTargets = document.querySelectorAll(".fade-up");
  if ("IntersectionObserver" in window) {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.16 }
    );
    fadeTargets.forEach((target) => observer.observe(target));
  } else {
    fadeTargets.forEach((target) => target.classList.add("is-visible"));
  }
})();
