// ============================================================
// DATA — Ontologi Parfum
// Struktur: Parfum → memiliki (top/mid/base notes) → termasuk (kategori)
// ============================================================
const data = [
  {
    id: 1,
    name: "Chanel No. 5",
    brand: "Chanel",
    kategori: ["sweet", "woody"],
    top: ["Aldehida", "Neroli", "Ylang-ylang"],
    mid: ["Rose de Mai", "Jasmine", "Lily of the Valley"],
    base: ["Sandalwood", "Vetiver", "Vanilla", "Musk"],
    desc: "Ikonik. Floral aldehid klasik sejak 1921."
  },
  {
    id: 2,
    name: "Dior Sauvage",
    brand: "Dior",
    kategori: ["fresh", "woody"],
    top: ["Bergamot", "Pepper"],
    mid: ["Lavender", "Geranium", "Pink Pepper"],
    base: ["Ambroxan", "Cedar", "Labdanum"],
    desc: "Segar dan maskulin, modern & serbaguna."
  },
  {
    id: 3,
    name: "Black Opium",
    brand: "YSL",
    kategori: ["sweet", "oriental"],
    top: ["Coffee", "Pink Pepper", "Pear"],
    mid: ["Jasmine", "Orange Blossom"],
    base: ["Vanilla", "White Musk", "Patchouli", "Cedar"],
    desc: "Adiktif dan intens. Perpaduan kopi & floral."
  },
  {
    id: 4,
    name: "Acqua di Giò",
    brand: "Armani",
    kategori: ["fresh", "citrus"],
    top: ["Lime", "Lemon", "Bergamot", "Neroli"],
    mid: ["Marine", "Jasmine", "Calone"],
    base: ["Cedar", "Patchouli", "White Musk"],
    desc: "Aquatic segar terinspirasi laut Mediterania."
  },
  {
    id: 5,
    name: "La Vie Est Belle",
    brand: "Lancôme",
    kategori: ["sweet", "oriental"],
    top: ["Blackcurrant", "Pear"],
    mid: ["Iris", "Jasmine", "Orange Blossom"],
    base: ["Praline", "Vanilla", "Patchouli", "Sandalwood"],
    desc: "Feminin, manis, dan penuh kebahagiaan."
  },
  {
    id: 6,
    name: "Bleu de Chanel",
    brand: "Chanel",
    kategori: ["woody", "fresh"],
    top: ["Lemon", "Mint", "Pink Pepper", "Grapefruit"],
    mid: ["Ginger", "Iso E Super", "Nutmeg"],
    base: ["Incense", "Vetiver", "Cedar", "Sandalwood"],
    desc: "Elegan woody aromatic untuk pria modern."
  },
  {
    id: 7,
    name: "Flowerbomb",
    brand: "Viktor & Rolf",
    kategori: ["sweet", "oriental"],
    top: ["Bergamot", "Tea"],
    mid: ["Jasmine", "Freesia", "Orchid", "Rose"],
    base: ["Patchouli", "Musk", "Vanilla"],
    desc: "Ledakan floral yang memabukkan dan feminin."
  },
  {
    id: 8,
    name: "Cool Water",
    brand: "Davidoff",
    kategori: ["fresh", "fougere"],
    top: ["Mint", "Lavender", "Coriander", "Rosemary"],
    mid: ["Jasmine", "Geranium", "Neroli"],
    base: ["Musk", "Cedar", "Sandalwood", "Amber"],
    desc: "Fougère aquatic yang segar dan timeless."
  },

  // --- Niche ---
  {
    id: 9,
    name: "Oud Wood",
    brand: "Tom Ford",
    kategori: ["woody", "oriental"],
    top: ["Rosewood", "Cardamom", "Chinese Pepper"],
    mid: ["Oud Wood", "Sandalwood", "Vetiver"],
    base: ["Amber", "Tonka Bean", "Vanilla"],
    desc: "Oud mewah yang hangat, smoky, dan maskulin."
  },
  {
    id: 10,
    name: "Philosykos",
    brand: "Diptyque",
    kategori: ["fresh", "woody"],
    top: ["Fig Leaf", "Green Notes"],
    mid: ["Fig Tree Wood", "Fig"],
    base: ["White Cedar", "Woody Notes"],
    desc: "Seperti berdiri di bawah pohon ara di Mediterania."
  },
  {
    id: 11,
    name: "Baccarat Rouge 540",
    brand: "Maison Francis Kurkdjian",
    kategori: ["sweet", "woody"],
    top: ["Saffron", "Jasmine"],
    mid: ["Amberwood", "Ambergris"],
    base: ["Fir Resin", "Cedar"],
    desc: "Aura manis mineral yang tak terlupakan. Cult fragrance."
  },
  {
    id: 12,
    name: "Aventus",
    brand: "Creed",
    kategori: ["fresh", "woody"],
    top: ["Pineapple", "Bergamot", "Apple", "Blackcurrant"],
    mid: ["Rose", "Dry Birch", "Jasmine", "Patchouli"],
    base: ["Musk", "Oak Moss", "Ambergris", "Vanilla"],
    desc: "Raja niche maskulin. Segar, smoky, dan prestisius."
  },

  // --- Designer populer ---
  {
    id: 13,
    name: "Coco Mademoiselle",
    brand: "Chanel",
    kategori: ["fresh", "oriental"],
    top: ["Orange", "Bergamot", "Grapefruit"],
    mid: ["Rose", "Jasmine", "Mimosa", "Ylang-ylang"],
    base: ["Patchouli", "Vetiver", "Vanilla", "White Musk"],
    desc: "Chic dan sensual. Wanita modern yang percaya diri."
  },
  {
    id: 14,
    name: "Good Girl",
    brand: "Carolina Herrera",
    kategori: ["sweet", "oriental"],
    top: ["Almond", "Coffee"],
    mid: ["Jasmine", "Tuberose", "Tonka"],
    base: ["Cocoa", "Sandalwood", "Cashmere Wood"],
    desc: "Dualitas manis gelap dalam botol sepatu ikonik."
  },
  {
    id: 15,
    name: "Light Blue",
    brand: "Dolce & Gabbana",
    kategori: ["fresh", "citrus"],
    top: ["Sicilian Lemon", "Apple", "Cedar", "Bellflower"],
    mid: ["Bamboo", "Jasmine", "White Rose"],
    base: ["Cedar", "Musk", "Amber"],
    desc: "Kesegaran musim panas Italia yang ringan dan bersih."
  },
  {
    id: 16,
    name: "Miss Dior",
    brand: "Dior",
    kategori: ["fresh", "sweet"],
    top: ["Calabrian Bergamot", "Pink Pepper"],
    mid: ["Grasse Rose", "Peony"],
    base: ["White Musk", "Patchouli"],
    desc: "Floral romantis yang segar dengan sentuhan pink pepper."
  },

  // --- Parfum lokal Indonesia ---
  {
    id: 17,
    name: "Puspa Nusantara",
    brand: "Mustika Ratu",
    kategori: ["sweet", "floral"],
    top: ["Melati", "Kenanga"],
    mid: ["Mawar", "Cempaka"],
    base: ["Gaharu", "Sandalwood", "Musk"],
    desc: "Representasi kecantikan bunga-bunga khas Nusantara."
  },
  {
    id: 18,
    name: "Gaharu & Rempah",
    brand: "Kahf",
    kategori: ["woody", "oriental"],
    top: ["Cardamom", "Black Pepper"],
    mid: ["Gaharu (Oud)", "Cinnamon"],
    base: ["Musk", "Amber", "Patchouli"],
    desc: "Maskulin berani, terinspirasi rempah dan gaharu lokal."
  },
  {
    id: 19,
    name: "Melati Putih",
    brand: "Wardah",
    kategori: ["fresh", "floral"],
    top: ["Bergamot", "Green Tea"],
    mid: ["Melati", "Rose", "Lily"],
    base: ["White Musk", "Cedarwood"],
    desc: "Kesederhanaan bunga melati putih yang bersih dan segar."
  },
  {
    id: 20,
    name: "Rumah Kayu",
    brand: "Sensatia Botanicals",
    kategori: ["woody", "fresh"],
    top: ["Eucalyptus", "Citrus"],
    mid: ["Cedarwood", "Vetiver"],
    base: ["Sandalwood", "Earthy Notes"],
    desc: "Terinspirasi rumah kayu tropis Bali yang hangat."
  }
];

// ============================================================
// STATE
// ============================================================
let activeFilter = "all";
let selected = null;

// ============================================================
// FILTER
// ============================================================
function setFilter(f, btnEl) {
  activeFilter = f;
  document.querySelectorAll(".filter-btn").forEach(b => b.classList.remove("on"));
  btnEl.classList.add("on");
  renderCards();
}

// ============================================================
// RENDER CARDS
// ============================================================
function renderCards() {
  const q = document.getElementById("search").value.toLowerCase();
  const grid = document.getElementById("parfum-grid");

  const filtered = data.filter(p => {
    const matchKat = activeFilter === "all" || p.kategori.includes(activeFilter);
    const matchQ =
      !q ||
      p.name.toLowerCase().includes(q) ||
      p.brand.toLowerCase().includes(q) ||
      [...p.top, ...p.mid, ...p.base].some(n => n.toLowerCase().includes(q));
    return matchKat && matchQ;
  });

  if (!filtered.length) {
    grid.innerHTML = '<div class="empty">Tidak ada parfum ditemukan.</div>';
    return;
  }

  grid.innerHTML = filtered
    .map(p => `
      <div class="parfum-card${selected && selected.id === p.id ? " active" : ""}"
           onclick="showDetail(${p.id})">
        <p class="parfum-name">${p.name}</p>
        <p class="parfum-brand">${p.brand}</p>
        <div class="badge-row">
          ${p.kategori.map(k => `<span class="badge badge-${k}">${k}</span>`).join("")}
        </div>
      </div>
    `)
    .join("");
}

// ============================================================
// SHOW DETAIL
// ============================================================
function showDetail(id) {
  selected = data.find(p => p.id === id);
  const box = document.getElementById("detail");
  box.style.display = "block";

  box.innerHTML = `
    <div class="detail-panel">
      <div class="detail-header">
        <div>
          <div class="detail-title">${selected.name}</div>
          <div class="detail-brand">${selected.brand} — ${selected.desc}</div>
        </div>
        <div class="badge-row">
          ${selected.kategori.map(k => `<span class="badge badge-${k}">${k}</span>`).join("")}
        </div>
      </div>

      <div class="pyramid">
        <div class="pyramid-row">
          <span class="pyramid-label">Top notes</span>
          <div class="pyramid-bar top">
            ${selected.top.map(n => `<span class="note-tag top">${n}</span>`).join("")}
          </div>
        </div>
        <div class="pyramid-row">
          <span class="pyramid-label">Middle notes</span>
          <div class="pyramid-bar mid">
            ${selected.mid.map(n => `<span class="note-tag mid">${n}</span>`).join("")}
          </div>
        </div>
        <div class="pyramid-row">
          <span class="pyramid-label">Base notes</span>
          <div class="pyramid-bar base">
            ${selected.base.map(n => `<span class="note-tag base">${n}</span>`).join("")}
          </div>
        </div>
      </div>

    </div>
  `;

  renderCards();
}

// ============================================================
// INIT
// ============================================================
document.addEventListener("DOMContentLoaded", () => {
  renderCards();
});
