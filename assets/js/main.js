document.addEventListener("DOMContentLoaded", () => {
  const navbar = document.querySelector(".site-navbar");
  const revealItems = document.querySelectorAll("[data-reveal]");
  const counters = document.querySelectorAll("[data-counter]");
  const tiltCards = document.querySelectorAll("[data-tilt]");
  const galleries = document.querySelectorAll(".car-display");
  const filterForm = document.querySelector("[data-stock-filters]");
  const homeStatusSelect = document.getElementById("homeStatus");
  const homeStatusButtons = [...document.querySelectorAll("[data-home-status]")];
  const galleryOrders = {
    "auto-7.html": [
      "WhatsApp Image 2026-04-28 at 17.42.47.jpeg",
      "WhatsApp Image 2026-04-28 at 17.42.46.jpeg",
      "WhatsApp Image 2026-04-28 at 17.42.45 (1).jpeg",
      "WhatsApp Image 2026-04-28 at 17.42.39 (1).jpeg",
      "WhatsApp Image 2026-04-28 at 17.42.40.jpeg",
      "WhatsApp Image 2026-04-28 at 17.42.43.jpeg",
      "WhatsApp Image 2026-04-28 at 17.42.40 (1).jpeg",
      "WhatsApp Image 2026-04-28 at 17.42.39 (8).jpeg",
      "WhatsApp Image 2026-04-28 at 17.42.39.jpeg",
      "WhatsApp Image 2026-04-28 at 17.42.39 (4).jpeg",
      "WhatsApp Image 2026-04-28 at 17.42.42.jpeg",
      "WhatsApp Image 2026-04-28 at 17.42.38.jpeg",
      "WhatsApp Image 2026-04-28 at 17.42.39 (2).jpeg",
      "WhatsApp Image 2026-04-28 at 17.42.39 (3).jpeg",
      "WhatsApp Image 2026-04-28 at 17.42.39 (6).jpeg",
      "WhatsApp Image 2026-04-28 at 17.42.39 (7).jpeg",
      "WhatsApp Image 2026-04-28 at 17.42.44.jpeg",
      "WhatsApp Image 2026-04-28 at 17.42.45.jpeg",
      "WhatsApp Image 2026-04-28 at 17.42.39 (5).jpeg",
    ],
    "auto-8.html": [
      "WhatsApp Image 2026-04-28 at 17.42.53.jpeg",
      "WhatsApp Image 2026-04-28 at 17.42.54.jpeg",
      "WhatsApp Image 2026-04-28 at 17.42.49.jpeg",
      "WhatsApp Image 2026-04-28 at 17.42.56.jpeg",
      "WhatsApp Image 2026-04-28 at 17.42.52.jpeg",
      "WhatsApp Image 2026-04-28 at 17.42.55 (2).jpeg",
      "WhatsApp Image 2026-04-28 at 17.42.55.jpeg",
      "WhatsApp Image 2026-04-28 at 17.42.51.jpeg",
      "WhatsApp Image 2026-04-28 at 17.42.55 (3).jpeg",
      "WhatsApp Image 2026-04-28 at 17.42.50.jpeg",
      "WhatsApp Image 2026-04-28 at 17.42.55 (1).jpeg",
      "WhatsApp Image 2026-04-28 at 17.42.55 (5).jpeg",
      "WhatsApp Image 2026-04-28 at 17.42.55 (6).jpeg",
      "WhatsApp Image 2026-04-28 at 17.42.55 (7).jpeg",
      "WhatsApp Image 2026-04-28 at 17.42.55 (8).jpeg",
      "WhatsApp Image 2026-04-28 at 17.42.55 (9).jpeg",
      "WhatsApp Image 2026-04-28 at 17.42.55 (4).jpeg",
    ],
    "auto-9.html": [
      "WhatsApp Image 2026-04-28 at 17.42.56 (2).jpeg",
      "WhatsApp Image 2026-04-28 at 17.42.56 (9).jpeg",
      "WhatsApp Image 2026-04-28 at 17.42.57 (4).jpeg",
      "WhatsApp Image 2026-04-28 at 17.42.56 (1).jpeg",
      "WhatsApp Image 2026-04-28 at 17.42.56.jpeg",
      "WhatsApp Image 2026-04-28 at 17.42.56 (3).jpeg",
      "WhatsApp Image 2026-04-28 at 17.42.56 (5).jpeg",
      "WhatsApp Image 2026-04-28 at 17.42.56 (6).jpeg",
      "WhatsApp Image 2026-04-28 at 17.42.56 (7).jpeg",
      "WhatsApp Image 2026-04-28 at 17.42.57.jpeg",
      "WhatsApp Image 2026-04-28 at 17.42.57 (1).jpeg",
      "WhatsApp Image 2026-04-28 at 17.42.57 (2).jpeg",
      "WhatsApp Image 2026-04-28 at 17.42.57 (5).jpeg",
      "WhatsApp Image 2026-04-28 at 17.42.56 (8).jpeg",
      "WhatsApp Image 2026-04-28 at 17.42.57 (3).jpeg",
      "WhatsApp Image 2026-04-28 at 17.42.56 (4).jpeg",
    ],
    "auto-10.html": [
      "WhatsApp Image 2026-04-28 at 17.43.08.jpeg",
      "WhatsApp Image 2026-04-28 at 17.43.10 (1).jpeg",
      "WhatsApp Image 2026-04-28 at 17.43.11.jpeg",
      "WhatsApp Image 2026-04-28 at 17.43.09.jpeg",
      "WhatsApp Image 2026-04-28 at 17.43.11 (3).jpeg",
      "WhatsApp Image 2026-04-28 at 17.43.09 (1).jpeg",
      "WhatsApp Image 2026-04-28 at 17.43.11 (4).jpeg",
      "WhatsApp Image 2026-04-28 at 17.43.08 (2).jpeg",
      "WhatsApp Image 2026-04-28 at 17.43.10 (2).jpeg",
      "WhatsApp Image 2026-04-28 at 17.43.10 (3).jpeg",
      "WhatsApp Image 2026-04-28 at 17.43.11 (2).jpeg",
      "WhatsApp Image 2026-04-28 at 17.43.10 (4).jpeg",
      "WhatsApp Image 2026-04-28 at 17.43.10.jpeg",
      "WhatsApp Image 2026-04-28 at 17.43.11 (1).jpeg",
      "WhatsApp Image 2026-04-28 at 17.43.08 (1).jpeg",
    ],
    "auto-11.html": [
      "WhatsApp Image 2026-05-08 at 19.22.05.jpeg",
      "WhatsApp Image 2026-05-08 at 19.22.07 (4).jpeg",
      "WhatsApp Image 2026-05-08 at 19.22.07 (5).jpeg",
      "WhatsApp Image 2026-05-08 at 19.22.07.jpeg",
      "WhatsApp Image 2026-05-08 at 19.22.06 (2).jpeg",
      "WhatsApp Image 2026-05-08 at 19.22.05 (1).jpeg",
      "WhatsApp Image 2026-05-08 at 19.22.06 (9).jpeg",
      "WhatsApp Image 2026-05-08 at 19.22.06 (5).jpeg",
      "WhatsApp Image 2026-05-08 at 19.22.06 (7).jpeg",
      "WhatsApp Image 2026-05-08 at 19.22.07 (6).jpeg",
      "WhatsApp Image 2026-05-08 at 19.22.06 (13).jpeg",
      "WhatsApp Image 2026-05-08 at 19.22.06 (10).jpeg",
      "WhatsApp Image 2026-05-08 at 19.22.06 (14).jpeg",
      "WhatsApp Image 2026-05-08 at 19.22.06 (12).jpeg",
      "WhatsApp Image 2026-05-08 at 19.22.06 (8).jpeg",
      "WhatsApp Image 2026-05-08 at 19.22.05 (2).jpeg",
      "WhatsApp Image 2026-05-08 at 19.22.06 (6).jpeg",
      "WhatsApp Image 2026-05-08 at 19.22.06 (11).jpeg",
      "WhatsApp Image 2026-05-08 at 19.22.06 (1).jpeg",
      "WhatsApp Image 2026-05-08 at 19.22.06 (4).jpeg",
      "WhatsApp Image 2026-05-08 at 19.22.06.jpeg",
      "WhatsApp Image 2026-05-08 at 19.22.05 (3).jpeg",
      "WhatsApp Image 2026-05-08 at 19.22.06 (15).jpeg",
      "WhatsApp Image 2026-05-08 at 19.22.06 (3).jpeg",
      "WhatsApp Image 2026-05-08 at 19.22.07 (1).jpeg",
      "WhatsApp Image 2026-05-08 at 19.22.07 (2).jpeg",
      "WhatsApp Image 2026-05-08 at 19.22.07 (3).jpeg",
      "WhatsApp Image 2026-05-08 at 19.22.07 (7).jpeg",
    ],
    "auto-12.html": [
      "WhatsApp Image 2026-05-07 at 19.31.44.jpeg",
      "WhatsApp Image 2026-05-07 at 19.31.43 (6).jpeg",
      "WhatsApp Image 2026-05-07 at 19.31.43.jpeg",
      "WhatsApp Image 2026-05-07 at 19.31.43 (4).jpeg",
      "WhatsApp Image 2026-05-07 at 19.31.43 (5).jpeg",
      "WhatsApp Image 2026-05-07 at 19.31.42 (8).jpeg",
      "WhatsApp Image 2026-05-07 at 19.31.43 (7).jpeg",
      "WhatsApp Image 2026-05-07 at 19.31.42 (4).jpeg",
      "WhatsApp Image 2026-05-07 at 19.31.42 (5).jpeg",
      "WhatsApp Image 2026-05-07 at 19.31.43 (9).jpeg",
      "WhatsApp Image 2026-05-07 at 19.31.42 (1).jpeg",
      "WhatsApp Image 2026-05-07 at 19.31.42.jpeg",
      "WhatsApp Image 2026-05-07 at 19.31.43 (2).jpeg",
      "WhatsApp Image 2026-05-07 at 19.31.43 (3).jpeg",
      "WhatsApp Image 2026-05-07 at 19.31.43 (8).jpeg",
      "WhatsApp Image 2026-05-07 at 19.31.42 (7).jpeg",
      "WhatsApp Image 2026-05-07 at 19.31.42 (2).jpeg",
      "WhatsApp Image 2026-05-07 at 19.31.42 (6).jpeg",
      "WhatsApp Image 2026-05-07 at 19.31.43 (1).jpeg",
      "WhatsApp Image 2026-05-07 at 19.31.42 (3).jpeg",
    ],
  };

  const updateNavbar = () => {
    if (!navbar) return;
    navbar.classList.toggle("is-scrolled", window.scrollY > 18);
  };

  const setupStockGroups = () => {
    const stockList = document.querySelector("[data-stock-list]");
    if (!stockList || stockList.dataset.stockGrouped === "true") return;

    const items = [...stockList.querySelectorAll("[data-filter-item]")];
    if (!items.length) return;

    const createGroup = (status, eyebrow, title) => {
      const group = document.createElement("div");
      group.className = "stock-status-group";
      group.dataset.filterGroup = status;
      group.innerHTML = `
        <div class="section-heading stock-group-heading">
          <span class="eyebrow mb-3"><i class="fa-solid fa-car"></i> ${eyebrow}</span>
          <h2>${title}</h2>
        </div>
        <div class="row g-4" data-filter-group-row></div>
      `;

      return {
        group,
        row: group.querySelector("[data-filter-group-row]"),
      };
    };

    const availableGroup = createGroup("available", "Direct beschikbaar", "Beschikbare auto's");
    const soldGroup = createGroup("sold", "Archief", "Verkochte auto's");

    items.forEach((item) => {
      const targetGroup = item.dataset.status === "sold" ? soldGroup : availableGroup;
      targetGroup.row.appendChild(item);
    });

    stockList.replaceWith(availableGroup.group, soldGroup.group);
    availableGroup.group.classList.toggle("is-hidden", !availableGroup.row.children.length);
    soldGroup.group.classList.toggle("is-hidden", !soldGroup.row.children.length);
  };

  updateNavbar();
  setupStockGroups();
  window.addEventListener("scroll", updateNavbar, { passive: true });

  if (revealItems.length) {
    const revealObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add("revealed");
        observer.unobserve(entry.target);
      });
    }, { threshold: 0.15 });

    revealItems.forEach((item) => revealObserver.observe(item));
  }

  if (counters.length) {
    const animateCounter = (element) => {
      const target = Number(element.dataset.counter || "0");
      const suffix = element.dataset.suffix || "";
      const duration = 1400;
      const start = performance.now();

      const tick = (now) => {
        const progress = Math.min((now - start) / duration, 1);
        const eased = 1 - Math.pow(1 - progress, 3);
        element.textContent = `${Math.round(target * eased)}${suffix}`;
        if (progress < 1) {
          requestAnimationFrame(tick);
        }
      };

      requestAnimationFrame(tick);
    };

    const counterObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        animateCounter(entry.target);
        observer.unobserve(entry.target);
      });
    }, { threshold: 0.5 });

    counters.forEach((counter) => counterObserver.observe(counter));
  }

  tiltCards.forEach((card) => {
    const damp = 16;
    card.addEventListener("mousemove", (event) => {
      const rect = card.getBoundingClientRect();
      const x = event.clientX - rect.left;
      const y = event.clientY - rect.top;
      const rotateX = -((y / rect.height) - 0.5) * damp;
      const rotateY = ((x / rect.width) - 0.5) * damp;
      card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-6px)`;
    });

    card.addEventListener("mouseleave", () => {
      card.style.transform = "";
    });
  });

  galleries.forEach((gallery) => {
    const mainImage = gallery.querySelector(".main img");
    let thumbs = [...gallery.querySelectorAll(".thumb")];
    const prevBtn = gallery.querySelector(".navbtn.prev");
    const nextBtn = gallery.querySelector(".navbtn.next");

    if (!mainImage || !thumbs.length) return;

    const pageName = window.location.pathname.split("/").pop();
    const preferredOrder = galleryOrders[pageName];
    const thumbShell = gallery.querySelector(".thumbs");

    if (preferredOrder && thumbShell) {
      const orderIndex = new Map(preferredOrder.map((fileName, index) => [fileName, index]));
      thumbs.sort((a, b) => {
        const aFile = (a.dataset.image || "").split("/").pop();
        const bFile = (b.dataset.image || "").split("/").pop();
        return (orderIndex.get(aFile) ?? 999) - (orderIndex.get(bFile) ?? 999);
      });
      thumbs.forEach((thumb, index) => {
        thumb.classList.toggle("active", index === 0);
        thumbShell.appendChild(thumb);
      });
      const firstImage = thumbs[0].dataset.image || thumbs[0].querySelector("img")?.getAttribute("src");
      if (firstImage) {
        mainImage.src = firstImage;
        mainImage.alt = thumbs[0].dataset.alt || mainImage.alt;
      }
    }

    let currentIndex = Math.max(thumbs.findIndex((thumb) => thumb.classList.contains("active")), 0);

    const setImage = (index) => {
      currentIndex = (index + thumbs.length) % thumbs.length;
      const activeThumb = thumbs[currentIndex];
      const newSrc = activeThumb.dataset.image || activeThumb.querySelector("img")?.getAttribute("src");
      if (!newSrc) return;
      mainImage.src = newSrc;
      mainImage.alt = activeThumb.dataset.alt || mainImage.alt;
      thumbs.forEach((thumb, thumbIndex) => thumb.classList.toggle("active", thumbIndex === currentIndex));
    };

    thumbs.forEach((thumb, index) => {
      thumb.addEventListener("click", () => setImage(index));
    });

    prevBtn?.addEventListener("click", () => setImage(currentIndex - 1));
    nextBtn?.addEventListener("click", () => setImage(currentIndex + 1));
  });

  if (homeStatusSelect && homeStatusButtons.length) {
    const syncHomeStatusButtons = () => {
      const current = homeStatusSelect.value || "all";
      homeStatusButtons.forEach((button) => {
        button.classList.toggle("is-active", (button.dataset.homeStatus || "all") === current);
      });
    };

    homeStatusButtons.forEach((button) => {
      button.addEventListener("click", () => {
        homeStatusSelect.value = button.dataset.homeStatus || "all";
        syncHomeStatusButtons();
      });
    });

    homeStatusSelect.addEventListener("change", syncHomeStatusButtons);
    syncHomeStatusButtons();
  }

  if (filterForm) {
    const searchInput = filterForm.querySelector("[data-filter-search]");
    const brandSelect = filterForm.querySelector("[data-filter-brand]");
    const modelSelect = filterForm.querySelector("[data-filter-model]");
    const fuelSelect = filterForm.querySelector("[data-filter-fuel]");
    const statusSelect = filterForm.querySelector("[data-filter-status]");
    const transmissionSelect = filterForm.querySelector("[data-filter-transmission]");
    const yearMinSelect = filterForm.querySelector("[data-filter-year-min]");
    const yearMaxSelect = filterForm.querySelector("[data-filter-year-max]");
    const kmMinSelect = filterForm.querySelector("[data-filter-km-min]");
    const kmMaxSelect = filterForm.querySelector("[data-filter-km-max]");
    const priceMaxSelect = filterForm.querySelector("[data-filter-price-max]");
    const resetButton = filterForm.querySelector("[data-filter-reset]");
    const submitButton = filterForm.querySelector("[data-filter-submit]");
    const countBadge = filterForm.querySelector("[data-filter-count-badge]");
    const statusShortcuts = [...filterForm.querySelectorAll("[data-filter-status-shortcut]")];
    const items = [...document.querySelectorAll("[data-filter-item]")];
    const groups = [...document.querySelectorAll("[data-filter-group]")];
    const resultCount = document.querySelector("[data-filter-count]");
    const emptyState = document.querySelector("[data-filter-empty]");
    const params = new URLSearchParams(window.location.search);

    if (searchInput && params.has("q")) searchInput.value = params.get("q") || "";
    if (brandSelect && params.has("brand")) brandSelect.value = params.get("brand") || "all";
    if (modelSelect && params.has("model")) modelSelect.value = params.get("model") || "all";
    if (fuelSelect && params.has("fuel")) fuelSelect.value = params.get("fuel") || "all";
    if (statusSelect && params.has("status")) statusSelect.value = params.get("status") || "all";
    if (transmissionSelect && params.has("transmission")) transmissionSelect.value = params.get("transmission") || "all";
    if (yearMinSelect && params.has("year_min")) yearMinSelect.value = params.get("year_min") || "all";
    if (yearMaxSelect && params.has("year_max")) yearMaxSelect.value = params.get("year_max") || "all";
    if (kmMinSelect && params.has("km_min")) kmMinSelect.value = params.get("km_min") || "all";
    if (kmMaxSelect && params.has("km_max")) kmMaxSelect.value = params.get("km_max") || "all";
    if (priceMaxSelect && params.has("price_max")) priceMaxSelect.value = params.get("price_max") || "all";

    const applyFilters = () => {
      const searchValue = (searchInput?.value || "").trim().toLowerCase();
      const brandValue = brandSelect?.value || "all";
      const modelValue = modelSelect?.value || "all";
      const fuelValue = fuelSelect?.value || "all";
      const statusValue = statusSelect?.value || "all";
      const transmissionValue = transmissionSelect?.value || "all";
      const yearMinValue = yearMinSelect?.value || "all";
      const yearMaxValue = yearMaxSelect?.value || "all";
      const kmMinValue = kmMinSelect?.value || "all";
      const kmMaxValue = kmMaxSelect?.value || "all";
      const priceMaxValue = priceMaxSelect?.value || "all";
      let visibleCount = 0;

      items.forEach((item) => {
        const haystack = [
          item.dataset.name || "",
          item.dataset.tags || "",
          item.dataset.status || "",
        ].join(" ").toLowerCase();

        const matchesSearch = !searchValue || haystack.includes(searchValue);
        const matchesBrand = brandValue === "all" || (item.dataset.brand || "") === brandValue;
        const matchesModel = modelValue === "all" || (item.dataset.model || "") === modelValue;
        const matchesFuel = fuelValue === "all" || (item.dataset.fuel || "") === fuelValue;
        const matchesStatus = statusValue === "all" || (item.dataset.status || "") === statusValue;
        const matchesTransmission = transmissionValue === "all" || (item.dataset.transmission || "") === transmissionValue;
        const rawYear = item.dataset.year || "";
        const numericYear = rawYear ? Number(rawYear) : null;
        const matchesYearMin = yearMinValue === "all" || (numericYear !== null && numericYear >= Number(yearMinValue));
        const matchesYearMax = yearMaxValue === "all" || (numericYear !== null && numericYear <= Number(yearMaxValue));
        const rawKm = item.dataset.km || "";
        const numericKm = rawKm ? Number(rawKm) : null;
        const matchesKmMin = kmMinValue === "all" || (numericKm !== null && numericKm >= Number(kmMinValue));
        const matchesKmMax = kmMaxValue === "all" || (numericKm !== null && numericKm <= Number(kmMaxValue));
        const rawPrice = item.dataset.price || "";
        const numericPrice = rawPrice ? Number(rawPrice) : null;
        const matchesPrice = priceMaxValue === "all" || (numericPrice !== null && numericPrice <= Number(priceMaxValue));
        const isVisible = matchesSearch && matchesBrand && matchesModel && matchesFuel && matchesStatus && matchesTransmission && matchesYearMin && matchesYearMax && matchesKmMin && matchesKmMax && matchesPrice;

        item.classList.toggle("is-hidden", !isVisible);
        if (isVisible) {
          visibleCount += 1;
        }
      });

      groups.forEach((group) => {
        const visibleGroupItems = [...group.querySelectorAll("[data-filter-item]")].filter((item) => !item.classList.contains("is-hidden"));
        group.classList.toggle("is-hidden", visibleGroupItems.length === 0);
      });

      if (resultCount) {
        resultCount.textContent = `${visibleCount} resultaat${visibleCount === 1 ? "" : "en"}`;
      }

      if (countBadge) {
        countBadge.textContent = String(visibleCount);
      }

      statusShortcuts.forEach((button) => {
        button.classList.toggle("is-active", (button.dataset.filterStatusShortcut || "all") === statusValue);
      });

      emptyState?.classList.toggle("is-visible", visibleCount === 0);
    };

    searchInput?.addEventListener("input", applyFilters);
    brandSelect?.addEventListener("change", applyFilters);
    modelSelect?.addEventListener("change", applyFilters);
    fuelSelect?.addEventListener("change", applyFilters);
    statusSelect?.addEventListener("change", applyFilters);
    transmissionSelect?.addEventListener("change", applyFilters);
    yearMinSelect?.addEventListener("change", applyFilters);
    yearMaxSelect?.addEventListener("change", applyFilters);
    kmMinSelect?.addEventListener("change", applyFilters);
    kmMaxSelect?.addEventListener("change", applyFilters);
    priceMaxSelect?.addEventListener("change", applyFilters);
    submitButton?.addEventListener("click", applyFilters);
    statusShortcuts.forEach((button) => {
      button.addEventListener("click", () => {
        if (statusSelect) {
          statusSelect.value = button.dataset.filterStatusShortcut || "all";
        }
        applyFilters();
      });
    });
    resetButton?.addEventListener("click", () => {
      if (searchInput) searchInput.value = "";
      if (brandSelect) brandSelect.value = "all";
      if (modelSelect) modelSelect.value = "all";
      if (fuelSelect) fuelSelect.value = "all";
      if (statusSelect) statusSelect.value = "all";
      if (transmissionSelect) transmissionSelect.value = "all";
      if (yearMinSelect) yearMinSelect.value = "all";
      if (yearMaxSelect) yearMaxSelect.value = "all";
      if (kmMinSelect) kmMinSelect.value = "all";
      if (kmMaxSelect) kmMaxSelect.value = "all";
      if (priceMaxSelect) priceMaxSelect.value = "all";
      applyFilters();
    });

    applyFilters();
  }
});
