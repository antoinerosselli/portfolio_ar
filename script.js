// ===== Réglages =====
// Adresse qui reçoit les demandes (collectif et playtest).
const CONTACT_EMAIL = "antoinerosselli.26@gmail.com";
// Liens du collectif affichés à côté du bouton. Laisse vide ce que tu n'as pas.
const OP_LINKS = [
  // { label: "Discord", url: "https://discord.gg/..." },
  // { label: "Instagram", url: "https://instagram.com/..." },
];

// ===== Textes de la page, en français et en anglais =====
// Chaque clé correspond à un attribut data-i18n="clé" dans index.html.
const TEXTS = {
  fr: {
    skip: "Aller au contenu",
    navLabel: "Navigation principale",
    navGames: "Jeux",
    navCredits: "Crédits",
    navTools: "Outils",
    navNext: "À venir",
    navContact: "Contact",
    langLabel: "Langue",
    statIndie: "Jeux créés en indé",
    statTotal: "Jeux sur lesquels j’ai travaillé",
    roleClass: "Classe",
    roleMain: "Programmeur",
    rolesOther: "Autres rôles",
    roleWriter: "Scénariste",
    skillEngines: "Moteurs",
    skillInHouse: "et moteurs internes",
    skillLanguages: "Langages",
    introLabel: "Présentation",
    intro: "Salut, moi c’est Antoine. Programmeur avant tout, j’écris aussi les histoires de mes jeux : étranges, parfois drôles, toujours portées par leur ambiance. Je publie mes jeux depuis 2023, et le prochain est en route.",
    menuGames: "Voir mes jeux",
    menuNext: "Le prochain projet",
    menuItch: "Ma page itch.io ↗",
    menuLinkedin: "Mon LinkedIn ↗",
    gamesTitle: "Ce que j’ai fait",
    filtersLabel: "Filtrer les jeux",
    filterAll: "Tous",
    filterNarrative: "Narration",
    filterArcade: "Arcade &amp; action",
    playOnItch: "Jouer sur itch.io ↗",
    with: "avec",
    creditsTitle: "Dans les crédits",
    creditsLead: "Les jeux de studios sur lesquels j’ai travaillé.",
    toolsTitle: "Code &amp; outils",
    toolsLead: "Ce que je programme à côté des jeux : des outils pour les équipes, et des projets pour apprendre.",
    opEyebrow: "Le collectif",
    opLead: "Un collectif de jeux vidéo indépendants que j’ai fondé avec un ami. Ici, personne ne décide seul : à chaque étape de la création, chaque membre donne son avis, et chaque avis compte.",
    opJoin: "Demander à rejoindre",
    opSite: "Voir le site du collectif →",
    opWorks: "Jeux du collectif",
    opDemo: "Démo sur itch.io",
    opSoon: "Bientôt",
    opInDev: "En développement",
    joinTitle: "Rejoindre le collectif",
    joinHelp: "Présente-toi en quelques lignes. Le bouton prépare un email avec tes réponses, tu n’as plus qu’à l’envoyer.",
    fieldName: "Ton nom ou pseudo",
    fieldRole: "Ce que tu fais",
    rolePick: "Choisis un rôle",
    roleProg: "Programmation",
    roleWriting: "Écriture et narration",
    role2d: "Art 2D",
    role3d: "Art 3D",
    roleSound: "Son et musique",
    roleVoice: "Doublage",
    roleOther: "Autre",
    fieldLink: "Un lien vers ton travail <span>(facultatif)</span>",
    fieldWhy: "Pourquoi Of Passage ?",
    cancel: "Annuler",
    prepareEmail: "Préparer l’email",
    joinError: "Remplis ton nom, ton rôle et ton message pour continuer.",
    nextTitle: "Ce que je fais ensuite",
    vbAlt: "Logo de Veilbound",
    vbStatus: "En développement · avec Of Passage",
    vbText: "Mon prochain jeu, développé avec Of Passage sous Godot. Toute l’équipe participe aux choix, et des sessions de playtest sont en cours.",
    vbChipPlaytest: "Playtests en cours",
    vbJoin: "Rejoindre le playtest",
    vbNotice: "Lire la notice →",
    ptTitle: "Rejoindre le playtest",
    ptHelp: "Dis-nous qui tu es. Le bouton prépare un email avec tes réponses, tu n’as plus qu’à l’envoyer.",
    ptFieldExp: "Tu as déjà fait des playtests ?",
    ptExpPick: "Choisis une réponse",
    ptExpNever: "Jamais, ce sera le premier",
    ptExpFew: "Quelques fois",
    ptExpOften: "Souvent",
    ptExpPro: "Je suis testeur QA",
    ptFieldGames: "Tes jeux préférés <span>(facultatif)</span>",
    ptFieldMsg: "Un mot pour nous ? <span>(facultatif)</span>",
    ptError: "Remplis ton nom et dis-nous si tu as déjà fait des playtests.",
    mailDone: (email) => `Ta messagerie devrait s’ouvrir avec l’email prêt. Rien ne s’est passé ? Écris directement à <strong class="join-email">${email}</strong>.`,
    contactTitle: "Parlons-en.",
    contactLead: "Une collaboration, un projet, ou juste envie de dire bonjour ?",
    // Emails reçus
    mailName: "Nom",
    mailRole: "Rôle",
    mailWork: "Travail",
    mailExp: "Playtests",
    mailGames: "Jeux préférés",
    mailJoinSubject: (name, role) => `Rejoindre Of Passage : ${name} (${role})`,
    mailPlaytestSubject: (name) => `Playtest Veilbound : ${name}`,
  },
  en: {
    skip: "Skip to content",
    navLabel: "Main navigation",
    navGames: "Games",
    navCredits: "Credits",
    navTools: "Tools",
    navNext: "Coming next",
    navContact: "Contact",
    langLabel: "Language",
    statIndie: "Indie games made",
    statTotal: "Games I’ve worked on",
    roleClass: "Class",
    roleMain: "Programmer",
    rolesOther: "Other roles",
    roleWriter: "Writer",
    skillEngines: "Engines",
    skillInHouse: "and in-house engines",
    skillLanguages: "Languages",
    introLabel: "Introduction",
    intro: "Hi, I’m Antoine. A programmer first, I also write the stories of my games: strange, sometimes funny, always driven by their atmosphere. I’ve been releasing games since 2023, and the next one is on its way.",
    menuGames: "See my games",
    menuNext: "My next project",
    menuItch: "My itch.io page ↗",
    menuLinkedin: "My LinkedIn ↗",
    gamesTitle: "What I’ve made",
    filtersLabel: "Filter games",
    filterAll: "All",
    filterNarrative: "Narrative",
    filterArcade: "Arcade &amp; action",
    playOnItch: "Play on itch.io ↗",
    with: "with",
    creditsTitle: "In the credits",
    creditsLead: "Studio games I’ve worked on.",
    toolsTitle: "Code &amp; tools",
    toolsLead: "What I build alongside games: tools for teams, and projects to learn.",
    opEyebrow: "The collective",
    opLead: "An indie game collective I founded with a friend. Here, nobody decides alone: at every step of making a game, every member has a say, and every opinion counts.",
    opJoin: "Ask to join",
    opSite: "Visit the collective’s site →",
    opWorks: "Games from the collective",
    opDemo: "Demo on itch.io",
    opSoon: "Soon",
    opInDev: "In development",
    joinTitle: "Join the collective",
    joinHelp: "Introduce yourself in a few lines. The button prepares an email with your answers, all you have to do is send it.",
    fieldName: "Your name or nickname",
    fieldRole: "What you do",
    rolePick: "Pick a role",
    roleProg: "Programming",
    roleWriting: "Writing and narrative",
    role2d: "2D art",
    role3d: "3D art",
    roleSound: "Sound and music",
    roleVoice: "Voice acting",
    roleOther: "Other",
    fieldLink: "A link to your work <span>(optional)</span>",
    fieldWhy: "Why Of Passage?",
    cancel: "Cancel",
    prepareEmail: "Prepare the email",
    joinError: "Fill in your name, role and message to continue.",
    nextTitle: "What I’m making next",
    vbAlt: "Veilbound logo",
    vbStatus: "In development · with Of Passage",
    vbText: "My next game, made with Of Passage in Godot. The whole team takes part in the decisions, and playtest sessions are underway.",
    vbChipPlaytest: "Playtests ongoing",
    vbJoin: "Join the playtest",
    vbNotice: "Read the manual →",
    ptTitle: "Join the playtest",
    ptHelp: "Tell us who you are. The button prepares an email with your answers, all you have to do is send it.",
    ptFieldExp: "Have you done playtests before?",
    ptExpPick: "Pick an answer",
    ptExpNever: "Never, this will be my first",
    ptExpFew: "A few times",
    ptExpOften: "Often",
    ptExpPro: "I’m a QA tester",
    ptFieldGames: "Your favourite games <span>(optional)</span>",
    ptFieldMsg: "Anything to add? <span>(optional)</span>",
    ptError: "Fill in your name and tell us if you’ve done playtests before.",
    mailDone: (email) => `Your email app should open with the message ready. Nothing happened? Write directly to <strong class="join-email">${email}</strong>.`,
    contactTitle: "Let’s talk.",
    contactLead: "A collaboration, a project, or just want to say hi?",
    mailName: "Name",
    mailRole: "Role",
    mailWork: "Work",
    mailExp: "Playtests",
    mailGames: "Favourite games",
    mailJoinSubject: (name, role) => `Join Of Passage: ${name} (${role})`,
    mailPlaytestSubject: (name) => `Veilbound playtest: ${name}`,
  },
};

// ===== Jeux indé =====
// Pour en ajouter un, copie un bloc et modifie-le. Les textes ont une version fr et en.
// tags : "narration" et/ou "arcade" (utilisés par les filtres).
// featured : true affiche le jeu en grand dans son année.
// tech : moteur et langage (facultatif).
const projects = [
  {
    title: "Hoboss - Curse under the bridge",
    year: 2026,
    pitch: {
      fr: "Tu es immortel, mais coincé sous un pont. En gros, le SDF le plus cool du coin : le « Hoboss ».",
      en: "You’re immortal, but stuck under a bridge. Basically, you’re the coolest homeless guy around: the “Hoboss”.",
    },
    genre: { fr: "Aventure", en: "Adventure" },
    platform: { fr: "Navigateur", en: "Browser" },
    tags: ["narration"],
    img: "img/cover-hoboss.png",
    url: "https://antowaan.itch.io/hoboss-curse-under-the-bridge",
    tech: "Godot · GDScript",
    featured: true,
  },
  {
    title: "Gaslighters",
    year: 2025,
    pitch: {
      fr: "Un brouillard mystérieux tombe sur Rock Valley. À la radio, des inconnus disent des demi-vérités.",
      en: "A mysterious fog has fallen over Rock Valley. Strangers speak half-truths over the radio.",
    },
    genre: { fr: "Mystère", en: "Mystery" },
    platform: { fr: "Windows · Démo", en: "Windows · Demo" },
    studio: "Of Passage",
    tags: ["narration"],
    img: "img/cover-gaslighters.png",
    url: "https://antowaan.itch.io/gaslighters",
    tech: "Godot · GDScript",
    featured: true,
  },
  {
    title: "Tears of Mama",
    year: 2024,
    pitch: { fr: "Jusqu’où irais-tu pour ta mère ?", en: "How far would you go for your mother?" },
    genre: { fr: "Narratif", en: "Narrative" },
    platform: { fr: "", en: "" },
    tags: ["narration"],
    img: "img/cover-tears.png",
    url: "https://antowaan.itch.io/tears-of-mama",
    featured: true,
  },
  {
    title: "Soul Food",
    year: 2024,
    pitch: {
      fr: "Invoque des monstres pour rassasier tes clients affamés. Créé en équipe pour la Ludum Dare 55.",
      en: "Summon monsters to feed your hungry customers. Made as a team for Ludum Dare 55.",
    },
    genre: { fr: "Game jam", en: "Game jam" },
    platform: { fr: "Navigateur · Windows", en: "Browser · Windows" },
    studio: "UnitedFailures",
    tags: ["arcade"],
    img: "img/cover-soulfood.png",
    url: "https://unitedfailures.itch.io/soul-food",
    tech: "Unity · C#",
  },
  {
    title: "Perle Rogue",
    year: 2024,
    pitch: { fr: "Un roguelike facile à comprendre et difficile à finir.", en: "A roguelike that’s easy to understand and hard to finish." },
    genre: { fr: "Roguelike", en: "Roguelike" },
    platform: { fr: "Navigateur", en: "Browser" },
    tags: ["arcade"],
    img: "img/cover-perle.png",
    url: "https://antowaan.itch.io/perlerogue",
  },
  {
    title: "Happy Murder",
    year: 2023,
    pitch: { fr: "Bienvenue à Sun Forest, la ville la plus tranquille du pays.", en: "Welcome to Sun Forest, the quietest town in the country." },
    genre: { fr: "Mystère", en: "Mystery" },
    platform: { fr: "Navigateur", en: "Browser" },
    tags: ["narration"],
    img: "img/cover-happy.png",
    url: "https://antowaan.itch.io/happy-murder",
  },
  {
    title: "Terror under the sun",
    year: 2023,
    pitch: { fr: "Un jeu d’arcade : un cowboy contre des zombies.", en: "An arcade game: a cowboy versus zombies." },
    genre: { fr: "Arcade", en: "Arcade" },
    platform: { fr: "Navigateur", en: "Browser" },
    tags: ["arcade"],
    img: "img/cover-terror.png",
    url: "https://antowaan.itch.io/terror-under-the-sun",
  },
  {
    title: "Hysteria",
    year: 2023,
    pitch: {
      fr: "Tu es différent, et c’est pour ça qu’ils t’ont enfermé. Il est temps de t’évader et de te venger.",
      en: "You are different, and that’s why they locked you up. It’s time to escape and get revenge.",
    },
    genre: { fr: "Action", en: "Action" },
    platform: { fr: "Windows", en: "Windows" },
    tags: ["arcade", "narration"],
    img: "img/cover-hysteria.png",
    url: "https://antowaan.itch.io/hysteria",
  },
  {
    title: "Life Inspection Bureau",
    year: 2023,
    pitch: {
      fr: "Explore la vie des gens avant qu’ils ne la vivent, pour décider s’ils sont un danger pour le monde ou pour eux-mêmes.",
      en: "Explore people’s lives before they live them, to decide whether they’re a danger to the world or to themselves.",
    },
    genre: { fr: "Narratif", en: "Narrative" },
    platform: { fr: "Navigateur", en: "Browser" },
    tags: ["narration"],
    img: "img/cover-lib.png",
    url: "https://antowaan.itch.io/life-inspection-bureau",
  },
];

// ===== Jeux en studio (sources : MobyGames, crédits officiels) =====
// studio : "microids" ou "quanticdream" (affiche le logo correspondant).
const credits = [
  { title: "Corsairs: Battle of the Caribbean", year: 2026, studio: "microids" },
  { title: "Garfield Kart 2: All You Can Drift", year: 2025, studio: "microids" },
  { title: "Amerzone: The Explorer's Legacy", year: 2025, studio: "microids" },
  { title: "Spellcasters Chronicles", year: 2025, studio: "quanticdream" },
  { title: "The Smurfs: Dreams", year: 2024, studio: "microids" },
  { title: "Empire of the Ants", year: 2024, studio: "microids" },
  { title: "Totally Spies! Cyber Mission", year: 2024, studio: "microids" },
  { title: "Flint: Treasure of Oblivion", year: 2024, studio: "microids" },
  { title: "Flashback 2", year: 2023, studio: "microids" },
];

// ===== Code & outils =====
// links : liens affichés sous l'outil (laisse vide s'il n'y en a pas).
const tools = [
  {
    title: "QuAds",
    kind: { fr: "Outil interne · Quantic Dream", en: "In-house tool · Quantic Dream" },
    pitch: {
      fr: "Un outil pour créer, modifier et publier les builds du jeu. Je l’ai développé pour Quantic Dream, et toute l’équipe QA l’utilisait au quotidien.",
      en: "A tool to create, edit and publish game builds. I built it for Quantic Dream, and the whole QA team used it every day.",
    },
    stack: {
      fr: ["Python", "Gestion de builds", "Utilisé par toute l’équipe QA"],
      en: ["Python", "Build management", "Used by the whole QA team"],
    },
    links: [],
    featured: true,
  },
  {
    title: "QAA",
    kind: { fr: "Outil pour testeurs QA", en: "Tool for QA testers" },
    pitch: {
      fr: "Une plateforme open source pour les testeurs de jeux vidéo : génère un rapport de session propre et regroupe les outils pour capturer et monter les vidéos de bugs.",
      en: "An open source platform for game testers: it generates a clean session report and gathers the tools to capture and edit bug videos.",
    },
    stack: { fr: ["Next.js", "React", "Open source"], en: ["Next.js", "React", "Open source"] },
    links: [
      { label: { fr: "Voir le site", en: "Visit the site" }, url: "https://qaa-feur.vercel.app/" },
      { label: { fr: "GitHub", en: "GitHub" }, url: "https://github.com/antoinerosselli/QAA" },
    ],
  },
  {
    title: "heronboy",
    kind: { fr: "Émulateur Game Boy · en cours", en: "Game Boy emulator · in progress" },
    pitch: {
      fr: "Un émulateur Game Boy écrit de zéro : processeur, mémoire, chargement des ROM. Testé avec les ROM de test du processeur.",
      en: "A Game Boy emulator written from scratch: CPU, memory, ROM loading. Tested against CPU test ROMs.",
    },
    stack: { fr: ["C++", "CMake"], en: ["C++", "CMake"] },
    links: [],
  },
  {
    title: "OPbot",
    kind: { fr: "Bot Discord pour Of Passage", en: "Discord bot for Of Passage" },
    pitch: {
      fr: "Le bot du collectif : on crée et on assigne les tâches de production avec des commandes Discord, et tout est suivi en base de données.",
      en: "The collective’s bot: we create and assign production tasks with Discord commands, and everything is tracked in a database.",
    },
    stack: { fr: ["Python", "discord.py", "PostgreSQL"], en: ["Python", "discord.py", "PostgreSQL"] },
    links: [],
  },
  {
    title: "vb-notices",
    kind: { fr: "Notice de Veilbound", en: "Veilbound manual" },
    pitch: {
      fr: "Une petite page pour lire la notice de Veilbound comme un livret, page par page.",
      en: "A small page to read Veilbound’s manual like a booklet, page by page.",
    },
    stack: { fr: ["JavaScript", "pdf.js"], en: ["JavaScript", "pdf.js"] },
    // Une fois en ligne, remplace par l'adresse complète de la page Veilbound
    links: [{ label: { fr: "Lire la notice", en: "Read the manual" }, url: "https://ofpassagecollective.vercel.app/veilbound.html#notice" }],
  },
];

// ===== Langue =====
// Choix mémorisé dans le navigateur ; sinon, langue du navigateur (français par défaut).
const LANG_KEY = "antowaan-lang";
const browserLang = () => ((navigator.language || "fr").toLowerCase().startsWith("fr") ? "fr" : "en");
let lang = browserLang();
try {
  const saved = localStorage.getItem(LANG_KEY);
  if (saved === "fr" || saved === "en") lang = saved;
} catch (e) { /* stockage indisponible : on garde la langue du navigateur */ }
const t = (key) => TEXTS[lang][key];

function applyTexts() {
  document.documentElement.lang = lang;
  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const value = t(el.dataset.i18n);
    if (typeof value !== "string") return;
    if (value.includes("<") || value.includes("&")) el.innerHTML = value;
    else el.textContent = value;
  });
  document.querySelectorAll("[data-i18n-aria]").forEach((el) => el.setAttribute("aria-label", t(el.dataset.i18nAria)));
  document.querySelectorAll("[data-i18n-alt]").forEach((el) => el.setAttribute("alt", t(el.dataset.i18nAlt)));
  document.querySelectorAll(".lang-btn").forEach((b) => b.setAttribute("aria-pressed", String(b.dataset.lang === lang)));
}

// ===== Rendu des listes =====
const studios = {
  microids: `<img src="img/logo-microids-icon.png" alt="" class="studio-icon"><span>Microids</span>`,
  quanticdream: `<span class="studio-wordmark studio-qd" role="img" aria-label="Quantic Dream"></span>`,
};

function renderCredits() {
  document.getElementById("credits-list").innerHTML = credits
    .map((c) => `
      <li class="credit">
        <span class="credit-year">${c.year ?? ""}</span>
        <span class="credit-title" translate="no">${c.title}</span>
        <span class="credit-studio">${studios[c.studio]}</span>
      </li>`)
    .join("");
}

const timeline = document.getElementById("timeline");
let currentFilter = "all";

function gameHTML(p) {
  const meta = [p.genre[lang], p.platform[lang], p.studio && `${t("with")} ${p.studio}`]
    .filter(Boolean).join(" · ");
  return `
    <article class="game${p.featured ? " game-featured" : ""}">
      <a class="game-img" href="${p.url}" target="_blank" rel="noopener" tabindex="-1" aria-hidden="true">
        <img src="${p.img}" alt="" loading="lazy">
      </a>
      <div class="game-text">
        <p class="game-meta">${meta}</p>
        <h3 translate="no"><a href="${p.url}" target="_blank" rel="noopener">${p.title}</a></h3>
        <p>${p.pitch[lang]}</p>
        ${p.tech ? `<p class="game-tech">${p.tech}</p>` : ""}
        <a class="game-link" href="${p.url}" target="_blank" rel="noopener">${t("playOnItch")}</a>
      </div>
    </article>`;
}

function renderGames() {
  const list = projects.filter((p) => currentFilter === "all" || p.tags.includes(currentFilter));
  const years = [...new Set(list.map((p) => p.year))].sort((a, b) => b - a);
  timeline.innerHTML = years
    .map((y) => `
      <div class="year">
        <p class="year-label">${y}</p>
        <div class="year-games">${list.filter((p) => p.year === y).map(gameHTML).join("")}</div>
      </div>`)
    .join("");
}

function renderTools() {
  document.getElementById("tools-list").innerHTML = tools
    .map((tool) => `
      <article class="tool${tool.featured ? " tool-featured" : ""}">
        <p class="tool-kind">${tool.kind[lang]}</p>
        <h3 translate="no">${tool.title}</h3>
        <p class="tool-pitch">${tool.pitch[lang]}</p>
        <ul class="tool-stack">${tool.stack[lang].map((s) => `<li>${s}</li>`).join("")}</ul>
        ${tool.links.length ? `<p class="tool-links">${tool.links
          .map((l) => `<a href="${l.url}" target="_blank" rel="noopener">${l.label[lang]} ↗</a>`)
          .join("")}</p>` : ""}
      </article>`)
    .join("");
}

function renderAll() {
  applyTexts();
  renderGames();
  renderCredits();
  renderTools();
}

document.querySelectorAll(".filter").forEach((btn) => {
  btn.addEventListener("click", () => {
    document.querySelectorAll(".filter").forEach((b) => {
      b.classList.remove("is-active");
      b.setAttribute("aria-pressed", "false");
    });
    btn.classList.add("is-active");
    btn.setAttribute("aria-pressed", "true");
    currentFilter = btn.dataset.filter;
    renderGames();
  });
});

document.querySelectorAll(".lang-btn").forEach((btn) => {
  btn.addEventListener("click", () => {
    lang = btn.dataset.lang;
    try { localStorage.setItem(LANG_KEY, lang); } catch (e) { /* stockage indisponible */ }
    renderAll();
  });
});

renderAll();
document.getElementById("year").textContent = new Date().getFullYear();

// ===== Stats de l'intro =====
// Jeux indé = la liste "projects" ; total = jeux indé + jeux en studio ("credits").
document.getElementById("stat-indie").textContent = projects.length;
document.getElementById("stat-total").textContent = projects.length + credits.length;

// ===== Of Passage =====
// Logo : si img/of-passage.png est absent, on affiche le titre en texte.
const opLogo = document.getElementById("op-logo");
const showOpText = () => {
  opLogo.hidden = true;
  document.getElementById("op-title-text").hidden = false;
};
if (opLogo.complete && opLogo.naturalWidth === 0) showOpText();
opLogo.addEventListener("error", showOpText);

document.getElementById("op-links").innerHTML = OP_LINKS
  .map((l) => `<li><a href="${l.url}" target="_blank" rel="noopener">${l.label} ↗</a></li>`)
  .join("");

// ===== Formulaires qui préparent un email =====
// required : champs obligatoires, dans l'ordre où le curseur va s'il en manque un.
function setupMailForm({ dialogId, openId, closeId, errorId, doneId, required, errorKey, buildMail }) {
  const dialog = document.getElementById(dialogId);
  const form = dialog.querySelector("form");
  const error = document.getElementById(errorId);
  const done = document.getElementById(doneId);

  document.getElementById(openId).addEventListener("click", () => {
    error.hidden = true;
    done.hidden = true;
    dialog.showModal();
  });
  document.getElementById(closeId).addEventListener("click", () => dialog.close());
  dialog.addEventListener("click", (e) => {
    if (e.target === dialog) dialog.close(); // clic en dehors de la boîte
  });

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const missing = required.find((id) => !document.getElementById(id).value.trim());
    if (missing) {
      error.textContent = t(errorKey);
      error.hidden = false;
      done.hidden = true;
      document.getElementById(missing).focus();
      return;
    }
    error.hidden = true;

    const data = new FormData(form);
    const get = (name) => (data.get(name) || "").toString().trim();
    const { subject, lines, message } = buildMail(get);
    const body = lines.filter(Boolean).join("\n") + (message ? "\n\n" + message : "");

    window.location.href =
      `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    // Si la messagerie du visiteur ne s'ouvre pas, il a l'adresse sous les yeux.
    done.innerHTML = t("mailDone")(CONTACT_EMAIL);
    done.hidden = false;
  });
}

// Rejoindre Of Passage
setupMailForm({
  dialogId: "op-join",
  openId: "op-join-open",
  closeId: "op-join-close",
  errorId: "join-error",
  doneId: "join-done",
  required: ["join-name", "join-role", "join-msg"],
  errorKey: "joinError",
  buildMail: (get) => ({
    subject: t("mailJoinSubject")(get("name"), get("role")),
    lines: [
      `${t("mailName")} : ${get("name")}`,
      `${t("mailRole")} : ${get("role")}`,
      get("link") && `${t("mailWork")} : ${get("link")}`,
    ],
    message: get("message"),
  }),
});

// Rejoindre le playtest de Veilbound
setupMailForm({
  dialogId: "pt-join",
  openId: "pt-join-open",
  closeId: "pt-join-close",
  errorId: "pt-error",
  doneId: "pt-done",
  required: ["pt-name", "pt-exp"],
  errorKey: "ptError",
  buildMail: (get) => ({
    subject: t("mailPlaytestSubject")(get("name")),
    lines: [
      `${t("mailName")} : ${get("name")}`,
      `${t("mailExp")} : ${get("experience")}`,
      get("games") && `${t("mailGames")} : ${get("games")}`,
    ],
    message: get("message"),
  }),
});
