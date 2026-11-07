/* ============================================================================
   BUGAI GAMES — WEBSITE CONTENT
   ============================================================================

   THIS IS THE ONLY FILE YOU NEED TO EDIT TO CHANGE THE WEBSITE.

   How to edit:
     1. Change the words BETWEEN the "quote marks".
     2. Keep the quote marks, the commas, and the curly braces { } where they are.
     3. Save this file.
     4. Refresh the website in your browser to see the change.

   A few simple rules so nothing breaks:
     • Only change text inside "double quotes".
     • If your text contains a double quote, write it as \"  (a backslash + quote).
     • Every line that ends with a comma needs to keep its comma.
     • If something looks broken after an edit, undo your last change (Cmd+Z) and save.

   Tip: anything written after  //  on a line is just a note to you. The website
   ignores it. You can ignore it too.
   ========================================================================== */

window.SITE_CONTENT = {

  /* --------------------------------------------------------------------------
     1. BASICS — name, browser tab title, contact email
     -------------------------------------------------------------------------- */
  studioName: "Bugai Games",

  // Shown in the browser tab and used by Google.
  pageTitle: "Bugai Games — an independent studio on the coast of Portugal",
  pageDescription: "Bugai Games is an independent studio on the Atlantic coast of Portugal. We design, build, and ship original games in Unity and Godot.",

  // Your contact email. Used in the big footer link and the contact column.
  email: "hello@bugaigames.com",   // <-- replace with your real address when ready

  // The little timezone label next to the live clock (top of page).
  timezoneLabel: "WET",            // WET = Western European Time (Portugal)

  /* --------------------------------------------------------------------------
     2. HERO — the big opening section
     --------------------------------------------------------------------------
     There are TWO hero styles. Pick one with "style" below:

       "bold"     → the big BUGAI GAMES wordmark with floating props in the
                    corners (dice, cauldron, shield, arrow). This is the one
                    in your screenshot.
       "headline" → a sentence-style headline with two buttons tucked inside it.

     Switch any time by changing the word in quotes after  style:
     -------------------------------------------------------------------------- */
  hero: {
    style: "bold",                 // "bold"  or  "headline"

    // Small line shown at the BOTTOM of the bold hero (a live clock is added).
    eyebrow: "Atlantic coast · Portugal",

    /* ----- used when style is "bold" ----- */
    wordmark: { line1: "BUGAI", line2: "GAMES" },

    // The four floating props. Put image files in the images/ folder (a PNG with
    // a see-through background works best) and write their names here.
    //   corner:   "top-left" / "top-right" / "bottom-left" / "bottom-right"
    //   size:     how big it is (bigger number = bigger). Try 12–22.
    //   rotation: tilt in degrees (negative = left, positive = right).
    // Leave image as "" to hide that prop. A prop also hides itself if its
    // image file isn't found, so the wordmark always looks clean.
    props: [
      { image: "images/dice.png",     corner: "top-left",     size: 16, rotation: -6 },
      { image: "images/cauldron.png", corner: "top-right",    size: 17, rotation: -2 },
      { image: "images/shield.png",   corner: "bottom-left",  size: 17, rotation: -4 },
      { image: "images/arrow.png",    corner: "bottom-right", size: 14, rotation: 6 },
    ],

    /* ----- used when style is "headline" ----- */
    // Reads as one sentence with two buttons tucked inside:
    //   [lead] (button1) / [mid] [italicWord] [after] (button2) / [trail]
    headline: {
      lead: "A proud studio",
      button1: { label: "See our games", href: "#work" },
      mid: "making",
      italicWord: "seriously",       // shown in italic
      after: "good",
      button2: { label: "Say hi", href: "#contact" },
      trail: "games.",
    },
    blurb: "We design and ship original games — sometimes for PC, sometimes for console, sometimes for the device in your pocket.",
    stats: [
      { label: "Studio",   value: "Portugal" },
      { label: "Engines",  value: "Unity & Godot" },
      { label: "Founded",  value: "2026" },
      { label: "Status",   value: "Taking new ideas" },
    ],
  },

  /* --------------------------------------------------------------------------
     3. GAMES SECTION
     --------------------------------------------------------------------------
     Heading + a short line, then the list of games (defined further below).
     -------------------------------------------------------------------------- */
  gamesSection: {
    sectionNumber: "01",
    sectionLabel: "OUR GAMES",
    title: "Small games, made carefully.",
    aside: "Two to play today. Three more in the workshop.",
  },

  /* --------------------------------------------------------------------------
     4. THE GAMES
     --------------------------------------------------------------------------
     Each game is one { ... } block. The list shows them top to bottom.
     Put the games you can play NOW first (status: "available"), then the ones
     that are "coming-soon".

     For each game you can fill in as much or as little as you like. A game with
     only a name + pitch still works — the extra details (about, screenshots,
     press, awards, credits) simply don't show until you add them.

     FIELDS:
       slug        a short web-address id, lowercase-with-hyphens, no spaces.
       name        the game title shown big.
       italicWord  OPTIONAL one word from the title to show in orange italic
                   (e.g. name "Postal Owl" + italicWord "Owl"). Leave "" for none.
       pitch       one short line shown in the games list.
       status      "available"  or  "coming-soon".
       store       where to get it (only used when available):
                     name  e.g. "Steam" / "Google Play" / "App Store"
                     pre   the small label, e.g. "Available on" / "Get it on"
                     url   the link. Leave "" if you don't have it yet.
                     icon  "steam"  or  "google-play"  or  "app-store"
       keyArt      a tall cover image (shown when you hover the game, and big on
                   the game's own page). Put your file in the images/ folder and
                   write its name here, e.g. "images/timeline-trivia.jpg".
                   Leave "" to show a tasteful placeholder until art is ready.
       accent1     two theme colors for this game's OWN page (top-to-bottom
       accent2     gradient). Any hex color like "#4ad6c0". Optional.

     The rest (meta / tagline / about / pullQuote / screenshots / press /
     awards / credits) only appear on the game's own page. All optional.
     -------------------------------------------------------------------------- */
  games: [

    /* ---------- GAME 1 (available) ---------- */
    {
      slug: "timeline-trivia",
      name: "Timeline Trivia",
      italicWord: "",
      pitch: "A history guessing game — place the events on the timeline before time runs out.",
      status: "available",
      store: { name: "Google Play", pre: "Get it on", url: "", icon: "google-play" },
      keyArt: "",                 // e.g. "images/timeline-trivia.jpg"
      accent1: "#a4ecd0",
      accent2: "#4ad6c0",

      // --- the game's own page (all optional) ---
      tagline: "A history guessing game where every wrong answer still teaches you something.",
      meta: {
        released:  "",            // e.g. "2026"
        platforms: "iOS · Android",
        players:   "",            // e.g. "10k players"
        session:   "",            // e.g. "5 minutes"
      },
      about: [
        "Write a sentence or two about what the game is and how it feels to play.",
        "Add another paragraph if you like — what makes it special, where the idea came from.",
      ],
      pullQuote: "",              // a short highlighted quote, optional
      screenshots: [             // add { label, img } items, or leave the list empty []
        // { label: "Title screen", img: "images/tt-shot-1.jpg" },
      ],
      press: [                   // reviews / mentions, or leave empty []
        // { quote: "A lovely little game.", source: "Some Site", note: "4/5" },
      ],
      awards: [                  // or leave empty []
        // { year: "2026", name: "Best Trivia", from: "Some Award" },
      ],
      credits: [                 // or leave empty []
        // { role: "Design · Art", name: "Kate Bugaienko" },
        // { role: "Development",  name: "Andrii Bugaienko" },
      ],
    },

    /* ---------- GAME 2 (available) ---------- */
    {
      slug: "game-two",
      name: "Working title",
      italicWord: "",
      pitch: "One line on how it feels to play — not what it is.",
      status: "available",
      store: { name: "Steam", pre: "Available on", url: "", icon: "steam" },
      keyArt: "",
      accent1: "#ffd2b8",
      accent2: "#ff6a3d",
      tagline: "",
      meta: { released: "", platforms: "", players: "", session: "" },
      about: [],
      pullQuote: "",
      screenshots: [],
      press: [],
      awards: [],
      credits: [],
    },

    /* ---------- GAME 3 (coming soon) ---------- */
    {
      slug: "project-three",
      name: "In development",
      italicWord: "",
      pitch: "One line on how it feels to play.",
      status: "coming-soon",
      store: { name: "", pre: "", url: "", icon: "steam" },
      keyArt: "",
      accent1: "#d6c0ff",
      accent2: "#a08aff",
      tagline: "",
      meta: { released: "", platforms: "", players: "", session: "" },
      about: [],
      pullQuote: "",
      screenshots: [],
      press: [],
      awards: [],
      credits: [],
    },

    /* ---------- GAME 4 (coming soon) ---------- */
    {
      slug: "project-four",
      name: "In development",
      italicWord: "",
      pitch: "One line on how it feels to play.",
      status: "coming-soon",
      store: { name: "", pre: "", url: "", icon: "steam" },
      keyArt: "",
      accent1: "#a8d8ff",
      accent2: "#4a8ed6",
      tagline: "",
      meta: { released: "", platforms: "", players: "", session: "" },
      about: [],
      pullQuote: "",
      screenshots: [],
      press: [],
      awards: [],
      credits: [],
    },

    /* ---------- GAME 5 (coming soon) ---------- */
    {
      slug: "project-five",
      name: "In development",
      italicWord: "",
      pitch: "One line on how it feels to play.",
      status: "coming-soon",
      store: { name: "", pre: "", url: "", icon: "steam" },
      keyArt: "",
      accent1: "#ffeec2",
      accent2: "#f5c068",
      tagline: "",
      meta: { released: "", platforms: "", players: "", session: "" },
      about: [],
      pullQuote: "",
      screenshots: [],
      press: [],
      awards: [],
      credits: [],
    },

  ],

  /* --------------------------------------------------------------------------
     5. STUDIO SECTION — heading + the two founders
     --------------------------------------------------------------------------
     The portraits show a placeholder until you add photos. Put each photo in
     the images/ folder and write its name in "photo" (e.g. "images/kate.jpg").
     Portraits look best in a tall 3:4 shape (e.g. 900 x 1200 pixels).
     -------------------------------------------------------------------------- */
  studioSection: {
    sectionNumber: "02",
    sectionLabel: "THE STUDIO",
    title: "Two people, one studio — plenty of opinions.",
    aside: "Independent and self-funded since day one. Making the kind of games we'd actually want to play.",

    founders: [
      {
        name: "Kate Bugaienko",
        role: "DESIGN · ART",
        photo: "",              // e.g. "images/kate.jpg"
      },
      {
        name: "Andrii Bugaienko",
        role: "OPERATIONS · DEVELOPMENT",
        photo: "",              // e.g. "images/andrii.jpg"
      },
    ],

    // Your longer studio description from the copy doc. It is NOT shown on the
    // page right now (the design uses the two portraits above instead). It is
    // kept here so it isn't lost — tell Claude if you'd like it added as a
    // paragraph on the page.
    aboutParagraphs: [
      "Bugai Games is an independent studio on the coast of Portugal. We design, build, and ship original games — sometimes for PC, sometimes for console, sometimes for the device in your pocket.",
      "We work in Unity and Godot. We pick the engine that fits the game, not the other way around.",
      "The team is two designers, one curious toddler-in-training, and a cat who supervises from the windowsill. Output is small by design. Quality is not.",
    ],
  },

  /* --------------------------------------------------------------------------
     6. CONTACT SECTION (the footer)
     -------------------------------------------------------------------------- */
  contactSection: {
    sectionNumber: "03",
    sectionLabel: "CONTACT",
    title: "Got a game idea? Or a publishing offer?",
    // OPTIONAL: one word from the title to show in orange italic. Leave "" for none.
    titleItalicWord: "idea?",
    aside: "We answer every email within a week — even the ones we have to politely turn down.",

    // The four columns of links at the very bottom.
    // Each column has a heading and a list of lines.
    // A line can be plain text {text:"..."} or a link {text:"...", url:"..."}.
    columns: [
      {
        heading: "Studio",
        lines: [
          { text: "Bugai Games" },
          { text: "Portimão, Portugal" },
        ],
      },
      {
        heading: "Site",
        lines: [
          { text: "Privacy Policy", url: "privacy.html" },
          { text: "Terms of Service", url: "terms.html" },
          { text: "Faino privacy", url: "faino-privacy.html" },
          { text: "Faino terms", url: "faino-terms.html" },
          { text: "Press kit", url: "" },
        ],
      },
      {
        heading: "Contact",
        lines: [
          // This one is filled in automatically from the "email" at the top.
          { text: "EMAIL", url: "EMAIL" },
        ],
      },
      {
        heading: "Elsewhere",
        lines: [
          { text: "Reddit", url: "" },
          { text: "Google Play", url: "" },
          { text: "Steam", url: "" },
        ],
      },
    ],

    // The very bottom line.
    copyright: "© 2026 Bugai Games, Lda.",
    tagline: "Built carefully · Portimão → World",
  },

};
