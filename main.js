(() => {
  // Icon SVG registry
  const iconPaths = {
    home: '<path d="m3 10 9-7 9 7v10a2 2 0 0 1-2 2h-4v-7H9v7H5a2 2 0 0 1-2-2V10Z"/>',
    building: '<rect x="4" y="2" width="16" height="20" rx="2"/><path d="M9 22v-4h6v4"/><path d="M8 6h.01"/><path d="M12 6h.01"/><path d="M16 6h.01"/><path d="M8 10h.01"/><path d="M12 10h.01"/><path d="M16 10h.01"/><path d="M8 14h.01"/><path d="M12 14h.01"/><path d="M16 14h.01"/>',
    waves: '<path d="M2 12c2.2-1.8 4.4-1.8 6.6 0s4.4 1.8 6.6 0 4.4-1.8 6.8 0"/><path d="M2 17c2.2-1.8 4.4-1.8 6.6 0s4.4 1.8 6.6 0 4.4-1.8 6.8 0"/>',
    hammer: '<path d="m15 12-8.5 8.5a2.1 2.1 0 0 1-3-3L12 9"/><path d="m14 4 6 6"/><path d="m12 6 6 6"/><path d="m16 2 6 6-2 2-6-6 2-2Z"/>',
    mapPin: '<path d="M20 10c0 6-8 12-8 12S4 16 4 10a8 8 0 1 1 16 0Z"/><circle cx="12" cy="10" r="3"/>',
    messageCircle: '<path d="M21 12a8.5 8.5 0 0 1-11.7 7.9L3 21l1.2-5.6A8.5 8.5 0 1 1 21 12Z"/>',
    users: '<path d="M16 21v-2a4 4 0 0 0-4-4H7a4 4 0 0 0-4 4v2"/><circle cx="9.5" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.9"/><path d="M16 3.1a4 4 0 0 1 0 7.8"/>',
    shieldCheck: '<path d="M20 13c0 5-3.5 7.5-8 9-4.5-1.5-8-4-8-9V5l8-3 8 3v8Z"/><path d="m9 12 2 2 4-5"/>',
    mail: '<rect x="3" y="5" width="18" height="14" rx="2"/><path d="m3 7 9 6 9-6"/>',
    phone: '<path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1 1 .4 1.9.7 2.8a2 2 0 0 1-.5 2.1L8.1 9.9a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.5c.9.3 1.8.6 2.8.7a2 2 0 0 1 1.7 2.1Z"/>',
    messages: '<path d="M21 14a4 4 0 0 1-4 4H9l-5 4v-4H3a2 2 0 0 1-2-2V6a4 4 0 0 1 4-4h12a4 4 0 0 1 4 4v8Z"/><path d="M8 9h8"/><path d="M8 13h5"/>',
    search: '<circle cx="11" cy="11" r="7"/><path d="m20 20-3.5-3.5"/>',
    filePen: '<path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h6"/><path d="M14 2v6a2 2 0 0 0 2 2h4"/><path d="m16 19 4-4 2 2-4 4h-2v-2Z"/>',
    key: '<circle cx="8" cy="15" r="4"/><path d="M12 15h9"/><path d="M18 15v-3"/><path d="M15 15v-2"/>',
    yen: '<path d="m6 3 6 8 6-8"/><path d="M12 11v10"/><path d="M8 13h8"/><path d="M8 17h8"/>',
    handshake: '<path d="M8 11 5.5 13.5a3 3 0 0 1-4.2-4.2L6 4.6A4 4 0 0 1 8.8 3.5H12"/><path d="m12 3.5 2.4 2.4a3 3 0 0 0 4.2 0l.9-.9 3.2 3.2-6.4 6.4"/><path d="m7 15 4 4a2 2 0 0 0 2.8 0l4.2-4.2"/><path d="m9.5 12.5 4.5 4.5"/><path d="m12 10 4.5 4.5"/>',
    suitcase: '<rect x="4" y="7" width="16" height="13" rx="2"/><path d="M9 7V5a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v2"/><path d="M8 12h8"/><path d="M8 16h.01"/><path d="M16 16h.01"/>',
    paintbrush: '<path d="m14 4 6 6"/><path d="M16 2 7 11l6 6 9-9-6-6Z"/><path d="M7 11c-2 1-3 2.7-3 5.2 0 1.9-1 3-2 3.8 3.5.2 6.5-.8 8-3l3-3"/>',
    map: '<path d="m3 6 6-3 6 3 6-3v15l-6 3-6-3-6 3V6Z"/><path d="M9 3v15"/><path d="M15 6v15"/>',
    trees: '<path d="M10 18H4l3-4H5l3-4H6l4-6 4 6h-2l3 4h-2l3 4h-6Z"/><path d="M10 18v4"/><path d="M17 22v-5"/><path d="M15 17h6l-3-4h2l-3-4"/>',
    compass: '<circle cx="12" cy="12" r="9"/><path d="m15.5 8.5-2.2 4.8-4.8 2.2 2.2-4.8 4.8-2.2Z"/>',
    laptop: '<path d="M5 5h14v10H5z"/><path d="M2 19h20"/><path d="M8 19h8"/>',
    sun: '<circle cx="12" cy="12" r="4"/><path d="M12 2v2"/><path d="M12 20v2"/><path d="m4.9 4.9 1.4 1.4"/><path d="m17.7 17.7 1.4 1.4"/><path d="M2 12h2"/><path d="M20 12h2"/><path d="m4.9 19.1 1.4-1.4"/><path d="m17.7 6.3 1.4-1.4"/>',
    train: '<path d="M7 3h10a3 3 0 0 1 3 3v8a4 4 0 0 1-4 4H8a4 4 0 0 1-4-4V6a3 3 0 0 1 3-3Z"/><path d="M8 18 6 21"/><path d="m16 18 2 3"/><path d="M8 8h8"/><path d="M8 13h.01"/><path d="M16 13h.01"/>',
    pawPrint: '<circle cx="5.5" cy="10.5" r="2"/><circle cx="9" cy="6.5" r="2"/><circle cx="15" cy="6.5" r="2"/><circle cx="18.5" cy="10.5" r="2"/><path d="M8 18a4 4 0 0 1 8 0c0 1.7-1.5 3-4 3s-4-1.3-4-3Z"/>',
    wind: '<path d="M3 8h11a3 3 0 1 0-3-3"/><path d="M3 12h16"/><path d="M3 16h10a3 3 0 1 1-3 3"/>',
    washingMachine: '<rect x="5" y="3" width="14" height="18" rx="2"/><path d="M8 7h.01"/><path d="M12 7h4"/><circle cx="12" cy="14" r="4"/><path d="M9.5 14c1.3-1 3.7 1 5 0"/>',
    heart: '<path d="M20.8 4.6a5.4 5.4 0 0 0-7.6 0L12 5.8l-1.2-1.2a5.4 5.4 0 1 0-7.6 7.6L12 21l8.8-8.8a5.4 5.4 0 0 0 0-7.6Z"/>',
    menu: '<path d="M4 7h16"/><path d="M4 12h16"/><path d="M4 17h16"/>',
    grid: '<rect x="3" y="3" width="7" height="7" rx="1"/><rect x="14" y="3" width="7" height="7" rx="1"/><rect x="3" y="14" width="7" height="7" rx="1"/><rect x="14" y="14" width="7" height="7" rx="1"/>',
    list: '<path d="M8 6h13"/><path d="M8 12h13"/><path d="M8 18h13"/><path d="M3 6h.01"/><path d="M3 12h.01"/><path d="M3 18h.01"/>',
    deck: '<rect x="4" y="5" width="16" height="14" rx="2"/><path d="M4 11h16"/><path d="M9 5v14"/><path d="M15 5v14"/>',
    utensils: '<path d="M4 3v8"/><path d="M8 3v8"/><path d="M4 7h4"/><path d="M6 11v10"/><path d="M18 3v18"/><path d="M14 3h4a4 4 0 0 1 0 8h-4"/>',
    sparkles: '<path d="M12 3l1.4 4.3L18 9l-4.6 1.7L12 15l-1.4-4.3L6 9l4.6-1.7L12 3Z"/><path d="M5 15l.8 2.2L8 18l-2.2.8L5 21l-.8-2.2L2 18l2.2-.8L5 15Z"/><path d="M19 14l.7 2 2 .7-2 .7-.7 2-.7-2-2-.7 2-.7.7-2Z"/>',
    bath: '<path d="M4 12h16v3a5 5 0 0 1-5 5H9a5 5 0 0 1-5-5v-3Z"/><path d="M6 12V6a3 3 0 0 1 3-3h1"/><path d="M4 20l-1 2"/><path d="M20 20l1 2"/>',
    droplets: '<path d="M7 16c0 2.2 1.8 4 4 4s4-1.8 4-4c0-2.8-4-7-4-7s-4 4.2-4 7Z"/><path d="M18 9c0 1.7 1.3 3 3 3 0-2.1-3-5-3-5s-3 2.9-3 5c1.7 0 3-1.3 3-3Z"/>',
    doorOpen: '<path d="M13 4h4a2 2 0 0 1 2 2v14"/><path d="M13 22V2L5 4v16l8 2Z"/><path d="M9 12h.01"/><path d="M3 22h18"/>',
    car: '<path d="M19 17H5l1.5-6h11L19 17Z"/><path d="M7 17v2"/><path d="M17 17v2"/><path d="M8 11l1.2-4h5.6L16 11"/>',
    box: '<path d="m21 8-9-5-9 5 9 5 9-5Z"/><path d="M3 8v8l9 5 9-5V8"/><path d="M12 13v8"/>',
    wifi: '<path d="M5 13a10 10 0 0 1 14 0"/><path d="M8.5 16.5a5 5 0 0 1 7 0"/><path d="M12 20h.01"/>',
    school: '<path d="M4 22V10l8-4 8 4v12"/><path d="M12 22V6"/><path d="M2 22h20"/><path d="M7 22v-5h10v5"/><path d="M8 13h.01"/><path d="M16 13h.01"/>',
    shoppingBag: '<path d="M6 8h12l-1 13H7L6 8Z"/><path d="M9 8a3 3 0 0 1 6 0"/>',
    store: '<path d="M4 10h16l-1-6H5l-1 6Z"/><path d="M6 10v10h12V10"/><path d="M9 20v-5h6v5"/>',
    instagram: '<rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r=".8" fill="currentColor" stroke="none"/>',
    send: '<path d="m22 2-7 20-4-9-9-4 20-7Z"/><path d="M22 2 11 13"/>',
    youtube: '<path d="M22 12s0-3-.4-4.4a3 3 0 0 0-2.1-2.1C17.7 5 12 5 12 5s-5.7 0-7.5.5a3 3 0 0 0-2.1 2.1C2 9 2 12 2 12s0 3 .4 4.4a3 3 0 0 0 2.1 2.1C6.3 19 12 19 12 19s5.7 0 7.5-.5a3 3 0 0 0 2.1-2.1C22 15 22 12 22 12Z"/><path d="m10 15 5-3-5-3v6Z"/>'
  };

  // Render data-icon placeholders
  const createIconSvg = (name) => {
    const path = iconPaths[name];
    if (!path) return "";
    return `<svg class="he-icon__svg" viewBox="0 0 24 24" aria-hidden="true" focusable="false">${path}</svg>`;
  };

  document.querySelectorAll("[data-icon]").forEach((element) => {
    const icon = createIconSvg(element.dataset.icon);
    if (!icon) return;
    element.classList.add("he-icon");
    element.innerHTML = icon;
  });

  const prependIcon = (element, iconName) => {
    if (element.querySelector(".he-icon")) return;
    const icon = createIconSvg(iconName);
    if (!icon) return;
    const iconWrap = document.createElement("span");
    iconWrap.className = "he-icon he-icon--inline";
    iconWrap.setAttribute("aria-hidden", "true");
    iconWrap.innerHTML = icon;
    element.prepend(iconWrap);
  };

  document.querySelectorAll(".footer-contact__tel, .phone-card__tel").forEach((link) => {
    prependIcon(link, "phone");
  });

  document.querySelectorAll(".btn--line").forEach((button) => {
    prependIcon(button, "send");
  });

  // Header scroll state and mobile menu
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

  // Hero slider
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

  // FAQ accordion
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

  // Property detail gallery and modal
  const detailGalleries = [...document.querySelectorAll("[data-detail-gallery]")];
  if (detailGalleries.length) {
    const modal = document.createElement("div");
    modal.className = "gallery-modal";
    modal.setAttribute("role", "dialog");
    modal.setAttribute("aria-modal", "true");
    modal.setAttribute("aria-label", "物件写真の拡大表示");
    modal.innerHTML = `
      <div class="gallery-modal__dialog">
        <button class="gallery-modal__close" type="button" aria-label="閉じる"></button>
        <button class="gallery-modal__nav gallery-modal__nav--prev" type="button" aria-label="前の写真へ"></button>
        <img class="gallery-modal__image" src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///ywAAAAAAQABAAACAUwAOw==" alt="">
        <button class="gallery-modal__nav gallery-modal__nav--next" type="button" aria-label="次の写真へ"></button>
        <p class="gallery-modal__caption"></p>
      </div>
    `;
    document.body.appendChild(modal);

    const modalImage = modal.querySelector(".gallery-modal__image");
    const modalCaption = modal.querySelector(".gallery-modal__caption");
    const modalClose = modal.querySelector(".gallery-modal__close");
    const modalPrev = modal.querySelector(".gallery-modal__nav--prev");
    const modalNext = modal.querySelector(".gallery-modal__nav--next");
    let activeGallery = null;
    let activeItems = [];
    let activeIndex = 0;

    const getItems = (gallery) => [...gallery.querySelectorAll("[data-gallery-thumb]")];

    const getImageData = (item) => ({
      src: item.dataset.src || item.querySelector("img")?.getAttribute("src") || "",
      alt: item.dataset.alt || item.querySelector("img")?.getAttribute("alt") || "物件写真"
    });

    const setMainImage = (gallery, index, shouldScroll = true) => {
      const items = getItems(gallery);
      const item = items[index];
      const mainImage = gallery.closest(".detail-main")?.querySelector("[data-gallery-main]");
      if (!item || !mainImage) return;
      const image = getImageData(item);
      mainImage.src = image.src;
      mainImage.alt = image.alt;
      items.forEach((thumb, thumbIndex) => {
        const isActive = thumbIndex === index;
        thumb.classList.toggle("is-active", isActive);
        if (isActive) {
          thumb.setAttribute("aria-current", "true");
        } else {
          thumb.removeAttribute("aria-current");
        }
      });
      if (shouldScroll) {
        item.scrollIntoView({ behavior: "smooth", block: "nearest", inline: "center" });
      }
    };

    const updateModal = () => {
      const item = activeItems[activeIndex];
      if (!item) return;
      const image = getImageData(item);
      modalImage.src = image.src;
      modalImage.alt = image.alt;
      modalCaption.textContent = `${activeIndex + 1} / ${activeItems.length}`;
      if (activeGallery) {
        setMainImage(activeGallery, activeIndex);
      }
    };

    const openModal = (gallery, index) => {
      activeGallery = gallery;
      activeItems = getItems(gallery);
      activeIndex = index;
      updateModal();
      modal.classList.add("is-open");
      document.body.classList.add("is-gallery-open");
      modalClose.focus();
    };

    const closeModal = () => {
      modal.classList.remove("is-open");
      document.body.classList.remove("is-gallery-open");
    };

    const moveModal = (direction) => {
      if (!activeItems.length) return;
      activeIndex = (activeIndex + direction + activeItems.length) % activeItems.length;
      updateModal();
    };

    detailGalleries.forEach((gallery) => {
      const items = getItems(gallery);
      const mainOpen = gallery.closest(".detail-main")?.querySelector("[data-gallery-open]");
      const thumbs = gallery.querySelector("[data-gallery-thumbs]");

      items.forEach((item, index) => {
        item.addEventListener("click", () => {
          setMainImage(gallery, index);
          openModal(gallery, index);
        });
      });

      mainOpen?.addEventListener("click", () => {
        const currentIndex = Math.max(0, items.findIndex((item) => item.classList.contains("is-active")));
        openModal(gallery, currentIndex);
      });

      gallery.querySelectorAll("[data-gallery-scroll]").forEach((button) => {
        button.addEventListener("click", () => {
          if (!thumbs) return;
          const direction = button.dataset.galleryScroll === "next" ? 1 : -1;
          thumbs.scrollBy({ left: direction * thumbs.clientWidth * 0.78, behavior: "smooth" });
        });
      });
    });

    modalClose.addEventListener("click", closeModal);
    modalPrev.addEventListener("click", () => moveModal(-1));
    modalNext.addEventListener("click", () => moveModal(1));
    modal.addEventListener("click", (event) => {
      if (event.target === modal) closeModal();
    });
    document.addEventListener("keydown", (event) => {
      if (!modal.classList.contains("is-open")) return;
      if (event.key === "Escape") closeModal();
      if (event.key === "ArrowLeft") moveModal(-1);
      if (event.key === "ArrowRight") moveModal(1);
    });
  }

  // Property search filters and sorting
  const propertySearch = document.querySelector("[data-property-search]");
  const propertyGrid = document.querySelector("[data-property-grid]");
  const propertyCards = propertyGrid ? [...propertyGrid.querySelectorAll("[data-property-card]")] : [];
  const resultCount = document.querySelector("[data-result-count]");
  const resultNote = document.querySelector("[data-result-note]");
  const sortSelect = document.querySelector("[data-sort-select]");

  if (propertySearch && propertyGrid && propertyCards.length) {
    const searchOptions = {
      buy: {
        summary: "福岡県内の売買物件から、条件に合う住まいを探せます。",
        priceLabel: "価格",
        baseCount: 128,
        type: [
          ["all", "すべて"],
          ["マンション", "マンション"],
          ["戸建て", "戸建て"],
          ["土地", "土地"],
          ["リノベ向き物件", "リノベ向き物件"],
          ["投資用物件", "投資用物件"]
        ],
        price: [
          ["all", "下限なし 〜 上限なし"],
          ["buy-under-1000", "1,000万円以下"],
          ["buy-1000-2000", "1,000万円〜2,000万円"],
          ["buy-2000-3000", "2,000万円〜3,000万円"],
          ["buy-3000-5000", "3,000万円〜5,000万円"],
          ["buy-over-5000", "5,000万円以上"]
        ],
        layout: [
          ["all", "すべて"],
          ["ワンルーム", "ワンルーム"],
          ["1K", "1K"],
          ["1DK", "1DK"],
          ["1LDK", "1LDK"],
          ["2K", "2K"],
          ["2DK", "2DK"],
          ["2LDK", "2LDK"],
          ["3K", "3K"],
          ["3DK", "3DK"],
          ["3LDK", "3LDK"],
          ["4K", "4K"],
          ["4DK", "4DK"],
          ["4LDK以上", "4LDK以上"]
        ]
      },
      rent: {
        summary: "福岡県内の賃貸物件から、暮らし方に合うお部屋を探せます。",
        priceLabel: "賃料",
        baseCount: 86,
        type: [
          ["all", "すべて"],
          ["アパート", "アパート"],
          ["マンション", "マンション"],
          ["戸建て賃貸", "戸建て賃貸"],
          ["店舗・事務所", "店舗・事務所"],
          ["駐車場", "駐車場"]
        ],
        price: [
          ["all", "下限なし 〜 上限なし"],
          ["rent-under-5", "5万円以下"],
          ["rent-5-8", "5万円〜8万円"],
          ["rent-8-12", "8万円〜12万円"],
          ["rent-12-15", "12万円〜15万円"],
          ["rent-over-15", "15万円以上"]
        ],
        layout: [
          ["all", "すべて"],
          ["ワンルーム", "ワンルーム"],
          ["1K", "1K"],
          ["1DK", "1DK"],
          ["1LDK", "1LDK"],
          ["2K", "2K"],
          ["2DK", "2DK"],
          ["2LDK", "2LDK"],
          ["3K", "3K"],
          ["3DK", "3DK"],
          ["3LDK", "3LDK"],
          ["4K", "4K"],
          ["4DK", "4DK"],
          ["4LDK以上", "4LDK以上"]
        ]
      }
    };

    const emptyResults = document.createElement("div");
    emptyResults.className = "empty-results";
    emptyResults.textContent = "条件に合うサンプル物件が見つかりませんでした。条件を少し広げるか、無料相談をご利用ください。";
    propertyGrid.after(emptyResults);

    const getSelectedDeal = () => propertySearch.querySelector('input[name="deal"]:checked')?.value || "buy";
    const getSelectValue = (name) => propertySearch.querySelector(`[name="${name}"]`)?.value || "all";
    const getSelectedConditions = () => [...propertySearch.querySelectorAll('input[name="condition"]:checked')].map((input) => input.value);

    const replaceSelectOptions = (selectName, options) => {
      const select = propertySearch.querySelector(`[data-dynamic-select="${selectName}"]`);
      if (!select) return;
      select.replaceChildren(
        ...options.map(([value, label]) => {
          const option = document.createElement("option");
          option.value = value;
          option.textContent = label;
          return option;
        })
      );
    };

    const updateDynamicControls = (deal) => {
      const options = searchOptions[deal] || searchOptions.buy;
      replaceSelectOptions("type", options.type);
      replaceSelectOptions("price", options.price);
      replaceSelectOptions("layout", options.layout);
      const priceLabel = propertySearch.querySelector("[data-price-label]");
      const summary = propertySearch.querySelector("[data-search-summary]");
      if (priceLabel) priceLabel.textContent = options.priceLabel;
      if (summary) summary.textContent = options.summary;
    };

    const setSelectValue = (name, value) => {
      const select = propertySearch.querySelector(`[name="${name}"]`);
      if (!select || !value) return;
      const hasOption = [...select.options].some((option) => option.value === value);
      if (hasOption) select.value = value;
    };

    const applyQueryFilters = () => {
      const params = new URLSearchParams(window.location.search);
      const requestedDeal = params.get("deal");
      if (requestedDeal === "buy" || requestedDeal === "rent") {
        const radio = propertySearch.querySelector(`input[name="deal"][value="${requestedDeal}"]`);
        if (radio) radio.checked = true;
      }

      updateDynamicControls(getSelectedDeal());
      setSelectValue("area", params.get("area"));
      setSelectValue("type", params.get("type"));
      setSelectValue("price", params.get("price"));
      setSelectValue("layout", params.get("layout"));

      const conditions = params.getAll("condition");
      if (conditions.length) {
        propertySearch.querySelectorAll('input[name="condition"]').forEach((input) => {
          input.checked = conditions.includes(input.value);
        });
      }

      if (sortSelect && params.get("sort")) {
        const requestedSort = params.get("sort");
        const hasSortOption = [...sortSelect.options].some((option) => option.value === requestedSort);
        if (hasSortOption) sortSelect.value = requestedSort;
      }
    };

    const matchesPrice = (value, range) => {
      if (range === "all") return true;
      if (range === "buy-under-1000") return value <= 1000;
      if (range === "buy-1000-2000") return value >= 1000 && value <= 2000;
      if (range === "buy-2000-3000") return value >= 2000 && value <= 3000;
      if (range === "buy-3000-5000") return value >= 3000 && value <= 5000;
      if (range === "buy-over-5000") return value >= 5000;
      if (range === "rent-under-5") return value <= 5;
      if (range === "rent-5-8") return value >= 5 && value <= 8;
      if (range === "rent-8-12") return value >= 8 && value <= 12;
      if (range === "rent-12-15") return value >= 12 && value <= 15;
      if (range === "rent-over-15") return value >= 15;
      return true;
    };

    const sortCards = () => {
      const sortValue = sortSelect?.value || "new";
      const sortedCards = [...propertyCards].sort((a, b) => {
        if (sortValue === "price-asc") return Number(a.dataset.price) - Number(b.dataset.price);
        if (sortValue === "price-desc") return Number(b.dataset.price) - Number(a.dataset.price);
        if (sortValue === "area-desc") return Number(b.dataset.size) - Number(a.dataset.size);
        return Number(b.dataset.date) - Number(a.dataset.date);
      });
      sortedCards.forEach((card) => propertyGrid.append(card));
    };

    const filterCards = () => {
      const deal = getSelectedDeal();
      const area = getSelectValue("area");
      const type = getSelectValue("type");
      const price = getSelectValue("price");
      const layout = getSelectValue("layout");
      const conditions = getSelectedConditions();
      const hasNarrowFilter = area !== "all" || type !== "all" || price !== "all" || layout !== "all" || conditions.length > 0;
      let visibleCards = 0;

      propertyCards.forEach((card) => {
        const cardConditions = (card.dataset.conditions || "").split(/\s+/).filter(Boolean);
        const isVisible =
          card.dataset.deal === deal &&
          (area === "all" || card.dataset.area === area) &&
          (type === "all" || card.dataset.type === type) &&
          (layout === "all" || card.dataset.layout === layout) &&
          matchesPrice(Number(card.dataset.price), price) &&
          conditions.every((condition) => cardConditions.includes(condition));

        card.classList.toggle("is-hidden", !isVisible);
        if (isVisible) visibleCards += 1;
      });

      const baseCount = searchOptions[deal]?.baseCount || 128;
      const displayCount = hasNarrowFilter ? (visibleCards ? Math.max(visibleCards * (deal === "buy" ? 14 : 11), visibleCards) : 0) : baseCount;

      if (resultCount) resultCount.textContent = String(displayCount);
      if (resultNote) {
        resultNote.textContent = hasNarrowFilter
          ? `${visibleCards}件のサンプルカードを条件に合わせて表示しています。`
          : "福岡県内のサンプル物件を表示しています。";
      }
      emptyResults.classList.toggle("is-visible", visibleCards === 0);
    };

    const refreshProperties = () => {
      sortCards();
      filterCards();
    };

    propertySearch.addEventListener("change", (event) => {
      if (event.target.matches("[data-deal-option]")) {
        updateDynamicControls(getSelectedDeal());
      }
      refreshProperties();
    });

    propertySearch.addEventListener("submit", (event) => {
      event.preventDefault();
      refreshProperties();
    });

    propertySearch.querySelectorAll("[data-area-quick]").forEach((button) => {
      button.addEventListener("click", () => {
        const areaSelect = propertySearch.querySelector('[name="area"]');
        if (areaSelect) areaSelect.value = button.dataset.areaQuick;
        refreshProperties();
      });
    });

    propertySearch.querySelector("[data-reset-search]")?.addEventListener("click", () => {
      propertySearch.reset();
      updateDynamicControls("buy");
      if (sortSelect) sortSelect.value = "new";
      refreshProperties();
    });

    sortSelect?.addEventListener("change", refreshProperties);

    applyQueryFilters();
    refreshProperties();
  }

  // Fade-up animation
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
      { threshold: 0.08 }
    );
    fadeTargets.forEach((target) => observer.observe(target));
  } else {
    fadeTargets.forEach((target) => target.classList.add("is-visible"));
  }
})();
