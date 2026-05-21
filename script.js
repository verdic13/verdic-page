const heroVideo = document.getElementById("heroVideo");
const slider = document.getElementById("partnersSlider");
const partnersBox = document.querySelector(".partners");
const navbar = document.getElementById("navbar");
const menuToggle = document.getElementById("menuToggle");
const mobileMenu = document.getElementById("mobileMenu");
const langButtons = document.querySelectorAll(".lang-button");

const DEFAULT_LANG = "et";

/* TÕLKED */
const translations = {
  et: {
    meta: {
      title: "Verdic"
    },
    nav: {
      logoAria: "Verdic avaleht",
      langSwitcher: "Keele valik",
      toggle: "Ava menüü",
      home: "Avaleht",
      howWorks: "Kuidas see töötab",
      howWeDo: "Kuidas me seda teeme",
      contact: "Kontakt",
      details: "Andmed"
    },
    partners: {
      label: "Tehniline ühendatus",
      title: "Tehniline ühendatus",
      items: [
        "Justiits- ja Digiministeerium",
        "Kohtutäitur Marek Laanemets",
        "Transpordiamet",
        "Kinnisturegister",
        "Ametlikud Teadaanded",
        "E-Äriregister",
        "Rahvastikuregister",
        "Maksu- ja Tolliamet",
        "Töötukassa"
      ]
    },
    hero: {
      eyebrow: "Automatiseeritud tööplatvorm kohtutäituritele, notaritele, pankrotihalduritele, inkassofirmadele, õigus- ja finantsasutustele.",
      description: "Verdic kogub andmed API / X-tee kaudu, analüüsib AI-ga koostöös, koostab korrektsed dokumendid, viib korduvad menetlustoimingud automaatselt lõpuni. Planeerib tööülesanded, kontrollib tähtaegu.",
      ctaDemo: "Küsi demo",
      ctaHow: "Vaata kuidas töötab"
    },
    tech: {
      label: "Kuidas see töötab",
      title: "Tööülesannete täitmine 24/7",
      collectTitle: "Andmete kogumine",
      collectText: "Verdic loeb ja analüüsib e-kirju, erinevaid dokumendiformaate (xls, csv, pdf, docx, xml, jne.) ühendub avalike ja riiklike registritega API / X-tee vahendusel ning kogub nõutud andmed automaatselt.",
      analyzeTitle: "Analüüs",
      analyzeText: "Kogutud andmed analüüsitakse vastavalt liigitusele AI otsuste konsensusel, seotakse konkreetse projektiga, luuakse korrektne ja sisuline andmete struktuur ning selle põhjal luuakse tööülesanne (dokument, e-kiri, automaatne arest jne.).",
      documentsTitle: "Dokumendid",
      documentsText: "Vajalikud dokumendid genereeritakse kliendi dokumendipõhjale automaatselt, tööülesanded inimestele määratakse vastavalt eelnevalt kokkulepitud reeglistikule ning tähtaegade kohaselt.",
      deliveryTitle: "Edastamine",
      deliveryText: "Tööülesanne teostatakse automaatselt X-tee/API olemasolul (näit: eelarest, arest, käsutuskeeld,...) või saadetakse süsteemi poolt dokumendi vormis e-postiga projekti osapooltele."
    },
    implementation: {
      label: "Kuidas me seda teeme",
      title: "Kaardistame Teie ettevõtte tööprotsessid ja automatiseerime need.",
      item1: "Kaardistame Teie igapäevased tööülesanded ning protsessid Teie kontoris, tegeliku elu keskel.",
      item2: "Kirjeldame töövoo etapid, struktureerime tegevused ja otsustuskohad ning selle põhjal loome vastava valdkonna tööprotsesside mudeli Verdic programmis.",
      item3: "API- ja X-tee ühendustega seotud liitumised aitame teha, uuendused hoiame ajakohasena ning vastutame püsivalt ajakohaste ühenduste eest."
    },
    demo: {
      label: "Demo",
      title: "Näitame programmi ülesehitust, jagame kasutajate kogemust.",
      text: "Jagame kasutajate kogemust efektiivsuse ja tulemlikkuse muutuste andmeid. Kui Teie äriprotsessi osaks on andmete kogumine, analüüs ja nende põhjal uute tööülesannete tekkimine ja täitmine, siis Verdic aitab Teid, päriselt."
    },
    contact: {
      email: "Email:",
      phone: "Telefon:",
      whatsapp: "WhatsApp:",
      location: "Asukoht:",
      locationValue: "Tallinn, Eesti",
      sendEmail: "Saada e-kiri",
      openWhatsapp: "Ava WhatsApp"
    },
    footer: {
      rights: "© 2026 Verdic. Kõik õigused kaitstud.",
      promise: "Verdic lubadus: töötab 24/7, ei jää haigeks, ei käi teatris ega ämma sünnipäeval, kõik tähtajad on alati meeles."
    }
  },

  en: {
    meta: {
      title: "Verdic"
    },
    nav: {
      logoAria: "Verdic home",
      langSwitcher: "Language switcher",
      toggle: "Open menu",
      home: "Home",
      howWorks: "How it works",
      howWeDo: "How we implement it",
      contact: "Contact",
      details: "Details"
    },
    partners: {
      label: "Technical integrations",
      title: "Technical integrations",
      items: [
        "Ministry of Justice and Digital Affairs",
        "Enforcement Agent Marek Laanemets",
        "Estonian Transport Administration",
        "E-Land Register",
        "Official Announcements",
        "e-Business Register",
        "Population Register",
        "Estonian Tax and Customs Board",
        "Estonian Unemployment Insurance Fund"
      ]
    },
    hero: {
      eyebrow: "24/7 Data collection. Analysis. Document generation.",
      description: "Verdic gathers data through API / X-Road, analyses it with AI assistance, prepares accurate documents, delivers them to the authorised recipient, plans tasks and tracks deadlines.",
      ctaDemo: "Request a demo",
      ctaHow: "See how it works"
    },
    tech: {
      label: "How it works",
      title: "Task execution 24/7",
      collectTitle: "Data collection",
      collectText: "Verdic reads emails, connects to public and state registries through API / X-Road and automatically gathers the required data.",
      analyzeTitle: "Analysis",
      analyzeText: "The collected data is analysed according to classification rules and AI decision consensus, linked to the relevant project, structured correctly and meaningfully, and used to create a task (document, email, automated seizure, etc.).",
      documentsTitle: "Documents",
      documentsText: "Required documents are generated automatically based on the client’s document template, and tasks are assigned to people according to previously agreed rules and deadlines.",
      deliveryTitle: "Delivery",
      deliveryText: "Documents are sent automatically by email or through API to the project parties."
    },
    implementation: {
      label: "How we implement it",
      title: "We map your company’s workflows and automate them.",
      item1: "We map your daily tasks and processes directly in your office, in the context of real work.",
      item2: "We describe workflow stages, structure activities and decision points, and based on that build the relevant process model in Verdic.",
      item3: "We help establish API and X-Road integrations, keep updates current and take responsibility for continuously up-to-date connections."
    },
    demo: {
      label: "Demo",
      title: "We present the system architecture and share user experience.",
      text: "We share user experience and measurable changes in efficiency and productivity. If your business process includes data collection, analysis and the creation and execution of new tasks based on that data, Verdic can help you in practice."
    },
    contact: {
      email: "Email:",
      phone: "Phone:",
      whatsapp: "WhatsApp:",
      location: "Location:",
      locationValue: "Tallinn, Estonia",
      sendEmail: "Send email",
      openWhatsapp: "Open WhatsApp"
    },
    footer: {
      rights: "© 2026 Verdic. All rights reserved.",
      promise: "Verdic’s promise: works 24/7, never gets sick, never goes to the theatre or a mother-in-law’s birthday, and never forgets a deadline."
    }
  },

  ru: {
    meta: {
      title: "Verdic"
    },
    nav: {
      logoAria: "Главная Verdic",
      langSwitcher: "Выбор языка",
      toggle: "Открыть меню",
      home: "Главная",
      howWorks: "Как это работает",
      howWeDo: "Как мы это делаем",
      contact: "Контакт",
      details: "Данные"
    },
    partners: {
      label: "Техническая интеграция",
      title: "Техническая интеграция",
      items: [
        "Министерство юстиции и цифровых технологий",
        "Судебный исполнитель Марек Лаанеметс",
        "Транспортный департамент Эстонии",
        "Земельный реестр",
        "Официальные объявления",
        "Электронный бизнес-регистр",
        "Регистр народонаселения",
        "Налогово-таможенный департамент",
        "Касса по безработице"
      ]
    },
    hero: {
      eyebrow: "24/7 Сбор данных. Анализ. Подготовка документов.",
      description: "Verdic собирает данные через API / X-Road, анализирует их с участием AI, формирует корректные документы, отправляет их авторизованному получателю, планирует задачи и контролирует сроки.",
      ctaDemo: "Запросить демо",
      ctaHow: "Посмотреть как это работает"
    },
    tech: {
      label: "Как это работает",
      title: "Выполнение задач 24/7",
      collectTitle: "Сбор данных",
      collectText: "Verdic читает электронную почту, подключается к государственным и публичным реестрам через API / X-Road и автоматически собирает необходимые данные.",
      analyzeTitle: "Анализ",
      analyzeText: "Собранные данные анализируются по правилам классификации и консенсусу решений AI, привязываются к конкретному проекту, формируется корректная и содержательная структура данных, и на её основе создаётся задача (документ, письмо, автоматический арест и т. д.).",
      documentsTitle: "Документы",
      documentsText: "Необходимые документы формируются автоматически на основе шаблона клиента, а задачи назначаются сотрудникам в соответствии с заранее согласованными правилами и сроками.",
      deliveryTitle: "Передача",
      deliveryText: "Документы автоматически отправляются по электронной почте или через API участникам проекта."
    },
    implementation: {
      label: "Как мы это делаем",
      title: "Мы картируем рабочие процессы вашей компании и автоматизируем их.",
      item1: "Мы картируем ваши ежедневные задачи и процессы непосредственно в вашем офисе, в реальной рабочей среде.",
      item2: "Мы описываем этапы рабочего процесса, структурируем действия и точки принятия решений и на этой основе создаём модель процессов соответствующей сферы в системе Verdic.",
      item3: "Мы помогаем настроить интеграции, связанные с API и X-Road, поддерживаем обновления в актуальном состоянии и отвечаем за постоянную актуальность подключений."
    },
    demo: {
      label: "Демо",
      title: "Показываем архитектуру программы и делимся опытом пользователей.",
      text: "Мы делимся пользовательским опытом и изменениями в эффективности и результативности. Если в ваших бизнес-процессах присутствуют сбор данных, анализ и создание новых задач на их основе, Verdic действительно поможет вам."
    },
    contact: {
      email: "Email:",
      phone: "Телефон:",
      whatsapp: "WhatsApp:",
      location: "Местоположение:",
      locationValue: "Таллинн, Эстония",
      sendEmail: "Отправить письмо",
      openWhatsapp: "Открыть WhatsApp"
    },
    footer: {
      rights: "© 2026 Verdic. Все права защищены.",
      promise: "Обещание Verdic: работает 24/7, не болеет, не ходит в театр и на день рождения тёщи и всегда помнит все сроки."
    }
  }
};

function getTranslationValue(obj, path) {
  return path.split(".").reduce((acc, key) => (acc && acc[key] !== undefined ? acc[key] : null), obj);
}

/* PARTNERITE LÕPMATU RINGLUS + TOUCH / DRAG */
const dragZone = document.querySelector(".partners-track-wrap");

let offset = 0;
let originals = [];
let animationStarted = false;
const speed = 0.45;

let isHoverPaused = false;
let isDragPaused = false;
let isDragging = false;
let lastX = 0;
let lastMoveTime = 0;
let velocity = 0;
let momentumFrame = null;

function isSliderPaused() {
  return isHoverPaused || isDragPaused;
}

function getSliderGap() {
  if (!slider) return 18;
  const styles = window.getComputedStyle(slider);
  const gapValue = styles.columnGap || styles.gap || "18px";
  const parsed = parseFloat(gapValue);
  return Number.isFinite(parsed) ? parsed : 18;
}

function getItemFullWidth(item) {
  return item.getBoundingClientRect().width + getSliderGap();
}

function renderSlider() {
  if (!slider) return;
  slider.style.transform = `translate3d(${offset}px, 0, 0)`;
}

function normalizeSlider() {
  if (!slider || slider.children.length === 0) return;

  while (slider.children.length > 0) {
    const firstItem = slider.children[0];
    const firstWidth = getItemFullWidth(firstItem);

    if (offset <= -firstWidth) {
      offset += firstWidth;
      slider.appendChild(firstItem);
    } else {
      break;
    }
  }

  while (slider.children.length > 0 && offset > 0) {
    const lastItem = slider.children[slider.children.length - 1];
    const lastWidth = getItemFullWidth(lastItem);

    slider.insertBefore(lastItem, slider.firstChild);
    offset -= lastWidth;
  }
}

function stopMomentum() {
  if (momentumFrame) {
    cancelAnimationFrame(momentumFrame);
    momentumFrame = null;
  }
}

function startMomentum() {
  stopMomentum();

  const momentumStep = () => {
    if (Math.abs(velocity) < 0.01) {
      velocity = 0;
      isDragPaused = false;
      momentumFrame = null;
      return;
    }

    offset += velocity * 16;
    velocity *= 0.95;

    normalizeSlider();
    renderSlider();

    momentumFrame = requestAnimationFrame(momentumStep);
  };

  momentumFrame = requestAnimationFrame(momentumStep);
}

function buildInfiniteSlider() {
  if (!slider || !partnersBox) return;
  if (originals.length === 0) return;

  slider.innerHTML = "";

  originals.forEach((item) => {
    slider.appendChild(item.cloneNode(true));
  });

  while (slider.scrollWidth < partnersBox.clientWidth * 2.5) {
    originals.forEach((item) => {
      slider.appendChild(item.cloneNode(true));
    });
  }

  offset = 0;
  renderSlider();
}

function renderPartnerItems(lang) {
  if (!slider) return;

  const items =
    translations[lang]?.partners?.items ||
    translations[DEFAULT_LANG].partners.items ||
    [];

  slider.innerHTML = "";

  items.forEach((name) => {
    const item = document.createElement("div");
    item.className = "partner-item";
    item.textContent = name;
    slider.appendChild(item);
  });

  originals = Array.from(slider.children).map((item) => item.cloneNode(true));
  buildInfiniteSlider();
}

function stepSlider() {
  requestAnimationFrame(stepSlider);

  if (!slider || !partnersBox || originals.length === 0 || isSliderPaused()) return;

  offset -= speed;
  normalizeSlider();
  renderSlider();
}

function applyTranslations(lang) {
  const dictionary = translations[lang] || translations[DEFAULT_LANG];

  document.documentElement.lang = lang;
  document.title = dictionary.meta.title;

  document.querySelectorAll("[data-i18n]").forEach((element) => {
    const key = element.dataset.i18n;
    const value = getTranslationValue(dictionary, key);

    if (value === null) return;

    const attr = element.dataset.i18nAttr;
    if (attr) {
      element.setAttribute(attr, value);
    } else {
      element.textContent = value;
    }
  });

  renderPartnerItems(lang);

  langButtons.forEach((button) => {
    button.classList.toggle("active", button.dataset.lang === lang);
  });

  localStorage.setItem("verdicLang", lang);
}

langButtons.forEach((button) => {
  button.addEventListener("click", () => {
    applyTranslations(button.dataset.lang);
  });
});

/* HERO VIDEO */
if (heroVideo) {
  heroVideo.muted = true;
  heroVideo.defaultMuted = true;
  heroVideo.playsInline = true;

  const tryPlay = () => {
    heroVideo.play().catch((error) => {
      console.log("Hero video autoplay failed:", error);
    });
  };

  heroVideo.addEventListener("loadeddata", tryPlay);
  heroVideo.addEventListener("canplay", tryPlay);
  tryPlay();
}

/* SLIDER START */
if (slider && partnersBox) {
  if (dragZone) {
    partnersBox.addEventListener("mouseenter", () => {
      isHoverPaused = true;
    });

    partnersBox.addEventListener("mouseleave", () => {
      isHoverPaused = false;
    });

    dragZone.addEventListener("pointerdown", (e) => {
      if (e.pointerType === "mouse" && e.button !== 0) return;

      isDragging = true;
      isDragPaused = true;
      velocity = 0;
      stopMomentum();

      lastX = e.clientX;
      lastMoveTime = performance.now();

      dragZone.classList.add("dragging");
      dragZone.setPointerCapture?.(e.pointerId);
    });

    dragZone.addEventListener("pointermove", (e) => {
      if (!isDragging) return;

      const now = performance.now();
      const dx = e.clientX - lastX;
      const dt = Math.max(now - lastMoveTime, 1);

      velocity = dx / dt;
      offset += dx;

      lastX = e.clientX;
      lastMoveTime = now;

      normalizeSlider();
      renderSlider();
    });

    const endDrag = (e) => {
      if (!isDragging) return;

      isDragging = false;
      dragZone.classList.remove("dragging");
      dragZone.releasePointerCapture?.(e.pointerId);

      startMomentum();
    };

    dragZone.addEventListener("pointerup", endDrag);
    dragZone.addEventListener("pointercancel", endDrag);
  }

  if (!animationStarted) {
    animationStarted = true;
    stepSlider();
  }

  let resizeTimer;
  window.addEventListener("resize", () => {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(() => {
      const currentLang = localStorage.getItem("verdicLang") || DEFAULT_LANG;
      renderPartnerItems(currentLang);
    }, 150);
  });
}

/* INITIAL LANGUAGE */
const savedLang = localStorage.getItem("verdicLang");
applyTranslations(translations[savedLang] ? savedLang : DEFAULT_LANG);

/* STICKY NAVBAR */
window.addEventListener("scroll", () => {
  if (!navbar) return;

  if (window.scrollY > 30) {
    navbar.classList.add("scrolled");
  } else {
    navbar.classList.remove("scrolled");
  }
});

/* MOBILE MENU */
if (menuToggle && mobileMenu) {
  menuToggle.addEventListener("click", () => {
    const isOpen = mobileMenu.classList.toggle("open");
    menuToggle.setAttribute("aria-expanded", String(isOpen));
  });

  mobileMenu.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      mobileMenu.classList.remove("open");
      menuToggle.setAttribute("aria-expanded", "false");
    });
  });
}