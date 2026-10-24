const upgrades = [
  { id: "click",        name: "Click",                       icon: "👆", type: "click", power: 1,                  baseCost: 15 },
  { id: "atm",          name: "ATM",                         icon: "🏧", type: "auto",  power: 8,                  baseCost: 100 },
  { id: "store",        name: "Store",                       icon: "🏪", type: "auto",  power: 40,                 baseCost: 900 },
  { id: "company",      name: "Company",                     icon: "🏢", type: "auto",  power: 180,                baseCost: 8000 },
  { id: "printer",      name: "Money Printer",               icon: "🖨️", type: "auto",  power: 900,                baseCost: 75000 },
  { id: "bank",         name: "Bank",                        icon: "🏦", type: "auto",  power: 4500,               baseCost: 700000 },
  { id: "goldmine",     name: "Gold Mine",                   icon: "⛏️", type: "auto",  power: 22000,              baseCost: 6500000 },
  { id: "diamond",      name: "Diamond Mine",                icon: "💎", type: "auto",  power: 110000,             baseCost: 60000000 },
  { id: "goldenClick",  name: "Golden Click",                icon: "✨", type: "click", power: 250000,             baseCost: 550000000 },
  { id: "mnc",          name: "MNC Company",                 icon: "🌐", type: "auto",  power: 600000,             baseCost: 5000000000 },
  { id: "government",   name: "Government",                  icon: "🏛️", type: "auto",  power: 3500000,            baseCost: 45000000000 },
  { id: "space",        name: "Space Mining",                icon: "🚀", type: "auto",  power: 20000000,           baseCost: 400000000000 },
  { id: "mars",         name: "Mars Colonization",           icon: "🔴", type: "auto",  power: 120000000,          baseCost: 3500000000000 },
  { id: "dyson",        name: "Dyson Sphere / Sun",          icon: "☀️", type: "auto",  power: 750000000,          baseCost: 30000000000000 },
  { id: "robotLabor",   name: "AI / Robot Labor Force",      icon: "🤖", type: "auto",  power: 5000000000,         baseCost: 250000000000000 },
  { id: "alienLabor",   name: "Alien Labor Force",           icon: "👽", type: "auto",  power: 30000000000,        baseCost: 2000000000000000 },
  { id: "galaxy",       name: "Galaxy Colonization",         icon: "🌌", type: "auto",  power: 180000000000,       baseCost: 15000000000000000 },
  { id: "blackhole",    name: "Black Hole Extraction",       icon: "🕳️", type: "auto",  power: 1000000000000,      baseCost: 100000000000000000 },
  { id: "universe",     name: "Universe Colonization",       icon: "🌠", type: "auto",  power: 7000000000000,      baseCost: 1e19 },
  { id: "timeMachine",  name: "Time Machine Manufacturing",  icon: "⏳", type: "auto",  power: 50000000000000,      baseCost: 1e21 },
  { id: "timeColonial", name: "Time Colonial",               icon: "🌀", type: "auto",  power: 350000000000000,     baseCost: 1e23 },
  { id: "multiverse",   name: "Multiverse Colonization",     icon: "♾️", type: "auto",  power: 2500000000000000,    baseCost: 1e25 },
  { id: "bigBang",      name: "Big Bang Manufacturing",      icon: "💥", type: "auto",  power: 18000000000000000,   baseCost: 1e27 },
  { id: "demonLabor",   name: "Demon Labor Force",           icon: "😈", type: "auto",  power: 1e17,               baseCost: 1e30 },
  { id: "angelLabor",   name: "Angel Labor Force",           icon: "😇", type: "auto",  power: 1e18,               baseCost: 1e34 },
  { id: "godLabor",     name: "God Labor Force",             icon: "⚡", type: "auto",  power: 1e20,               baseCost: 1e40 }
];

const PRICE_GROWTH = 1.20;
const SAVE_KEY = "moneyClickerSave";

const PRESTIGE_BASE = 1e100;
const PRESTIGE_BONUS = 0.10;
const ACHIEVEMENT_BONUS = 0.01;

const GOLDEN_MIN_WAIT = 45;
const GOLDEN_MAX_WAIT = 120;
const GOLDEN_STAY_TIME = 13;

const achievements = [
  { id: "c1",     icon: "💵", name: "First Dollar",    desc: "Click the dollar once",             stat: "clicks",    goal: 1 },
  { id: "c100",   icon: "👆", name: "Sore Finger",     desc: "Click 100 times",                   stat: "clicks",    goal: 100 },
  { id: "c1k",    icon: "🔥", name: "Click Addict",    desc: "Click 1,000 times",                 stat: "clicks",    goal: 1000 },
  { id: "c10k",   icon: "🏋️", name: "Carpal Tunnel",   desc: "Click 10,000 times",                stat: "clicks",    goal: 10000 },

  { id: "l1k",    icon: "🪙", name: "Pocket Change",   desc: "Earn $1,000 in total",              stat: "lifetime",  goal: 1000 },
  { id: "l100k",  icon: "💰", name: "Six Figures",     desc: "Earn $100K in total",               stat: "lifetime",  goal: 100000 },
  { id: "l1m",    icon: "🤑", name: "Millionaire",     desc: "Earn $1M in total",                 stat: "lifetime",  goal: 1000000 },
  { id: "l1b",    icon: "💎", name: "Billionaire",     desc: "Earn $1B in total",                 stat: "lifetime",  goal: 1000000000 },
  { id: "l1t",    icon: "👑", name: "Trillionaire",    desc: "Earn $1T in total",                 stat: "lifetime",  goal: 1000000000000 },

  { id: "p1",     icon: "🌱", name: "Passive Income",  desc: "Earn $1 per second",                stat: "perSecond", goal: 1 },
  { id: "p1k",    icon: "⚙️", name: "Money Machine",   desc: "Earn $1K per second",               stat: "perSecond", goal: 1000 },
  { id: "p1m",    icon: "⛲", name: "Money Fountain",  desc: "Earn $1M per second",               stat: "perSecond", goal: 1000000 },

  { id: "o10",    icon: "📦", name: "Collector",       desc: "Own 10 upgrades",                   stat: "owned",     goal: 10 },
  { id: "o50",    icon: "🗄️", name: "Hoarder",         desc: "Own 50 upgrades",                   stat: "owned",     goal: 50 },
  { id: "o150",   icon: "🏙️", name: "Tycoon",          desc: "Own 150 upgrades",                  stat: "owned",     goal: 150 },
  { id: "o400",   icon: "🌍", name: "Empire",          desc: "Own 400 upgrades",                  stat: "owned",     goal: 400 },

  { id: "bank10", icon: "🧑‍💼", name: "Bank Manager",  desc: "Own 10 Banks",                      stat: "own:bank",  goal: 10 },
  { id: "gold10", icon: "🥇", name: "Gold Rush",       desc: "Own 10 Gold Mines",                 stat: "own:goldmine", goal: 10 },

  { id: "g1",     icon: "🍀", name: "Lucky Strike",    desc: "Click a golden dollar",             stat: "golden",    goal: 1 },
  { id: "g10",    icon: "✨", name: "Golden Touch",    desc: "Click 10 golden dollars",           stat: "golden",    goal: 10 },
  { id: "g50",    icon: "🌟", name: "Midas",           desc: "Click 50 golden dollars",           stat: "golden",    goal: 50 },

  { id: "pr1",    icon: "🦀", name: "Krabbed",         desc: "Perform a Krab Reset",              stat: "prestige",  goal: 1 },
  { id: "pr5",    icon: "🌠", name: "Krab Veteran",    desc: "Perform 5 Krab Resets",             stat: "prestige",  goal: 5 }
];

let money = 0;
let lifetimeEarned = 0;
let owned = {};
let buyAmount = 1;

let totalClicks = 0;
let goldenClicks = 0;
let prestigeBars = 0;
let prestigeCount = 0;
let unlocked = {};

let buffs = [];
let goldenEl = null;
let goldenTimer = null;
let nextGoldenAt = 0;

for (let i = 0; i < upgrades.length; i++) {
  owned[upgrades[i].id] = 0;
}

const mainEl = document.getElementById("main");
const balanceEl = document.getElementById("balance");
const perSecondEl = document.getElementById("per-second");
const perClickEl = document.getElementById("per-click");
const buffBarEl = document.getElementById("buff-bar");
const dollarBtn = document.getElementById("dollar");
const listEl = document.getElementById("upgrade-list");
const resetBtn = document.getElementById("reset-btn");
const amountBtns = document.querySelectorAll(".amount-btn");
const achBtn = document.getElementById("ach-btn");
const achCountEl = document.getElementById("ach-count");
const prestigeBtn = document.getElementById("prestige-btn");
const achListEl = document.getElementById("ach-list");
const toastsEl = document.getElementById("toasts");

const pBarsEl = document.getElementById("p-bars");
const pBonusEl = document.getElementById("p-bonus");
const pTotalEl = document.getElementById("p-total");
const pPendingEl = document.getElementById("p-pending");
const pNextEl = document.getElementById("p-next");
const ascendBtn = document.getElementById("ascend-btn");

const cards = {};
const achCards = {};

const suffixes = ["", "K", "M", "B", "T", "Qa", "Qi"];

function formatNumber(n) {
  if (!Number.isFinite(n)) return "∞";

  if (Math.abs(n) >= 1e15) {
    return n.toExponential(2).replace("e+", "e");
  }

  if (n < 1000) {
    if (n < 10 && n % 1 !== 0) {
      return parseFloat(n.toFixed(1)).toString();
    }

    return Math.floor(n).toString();
  }

  let tier = 0;

  while (n >= 1000 && tier < suffixes.length - 1) {
    n = n / 1000;
    tier++;
  }

  return n.toFixed(1).replace(".0", "") + suffixes[tier];
}

function randomBetween(a, b) {
  return a + Math.random() * (b - a);
}

function countAchievements() {
  let count = 0;

  for (let i = 0; i < achievements.length; i++) {
    if (unlocked[achievements[i].id]) {
      count++;
    }
  }

  return count;
}

function getPrestigeMultiplier() {
  return 1 + prestigeBars * PRESTIGE_BONUS;
}

function getAchievementMultiplier() {
  return 1 + countAchievements() * ACHIEVEMENT_BONUS;
}

function getGlobalMultiplier() {
  return getPrestigeMultiplier() * getAchievementMultiplier();
}

function getBuffMultiplier(kind) {
  let multiplier = 1;

  for (let i = 0; i < buffs.length; i++) {
    if (buffs[i].kind === kind) {
      multiplier *= buffs[i].mult;
    }
  }

  return multiplier;
}

function getPerClick() {
  let total = 1;

  for (let i = 0; i < upgrades.length; i++) {
    if (upgrades[i].type === "click") {
      total += upgrades[i].power * owned[upgrades[i].id];
    }
  }

  return total * getGlobalMultiplier() * getBuffMultiplier("click");
}

function getPerSecond() {
  let total = 0;

  for (let i = 0; i < upgrades.length; i++) {
    if (upgrades[i].type === "auto") {
      total += upgrades[i].power * owned[upgrades[i].id];
    }
  }

  return total * getGlobalMultiplier() * getBuffMultiplier("production");
}

function getCost(upgrade, amount) {
  if (!Number.isFinite(amount) || amount < 1) return 0;

  const first = upgrade.baseCost * Math.pow(PRICE_GROWTH, owned[upgrade.id]);
  const total = first * (Math.pow(PRICE_GROWTH, amount) - 1) / (PRICE_GROWTH - 1);

  return Math.ceil(total);
}

function getMaxAffordable(upgrade) {
  const first = upgrade.baseCost * Math.pow(PRICE_GROWTH, owned[upgrade.id]);

  if (!Number.isFinite(first) || first <= 0 || money < first) {
    return 0;
  }

  let count = Math.floor(
    Math.log(1 + money * (PRICE_GROWTH - 1) / first) /
    Math.log(PRICE_GROWTH)
  );

  count = Math.max(0, Math.min(100000, count));

  while (count > 0 && getCost(upgrade, count) > money) {
    count--;
  }

  return count;
}

function getTotalOwned() {
  let total = 0;

  for (let i = 0; i < upgrades.length; i++) {
    total += owned[upgrades[i].id];
  }

  return total;
}

function addMoney(amount) {
  money += amount;
  lifetimeEarned += amount;
}

function showFloatingText(x, y, amount) {
  const el = document.createElement("div");
  el.className = "float-text";
  el.textContent = "+$" + formatNumber(amount);
  el.style.left = x + "px";
  el.style.top = y + "px";

  document.body.appendChild(el);

  setTimeout(function () {
    el.remove();
  }, 1000);
}

dollarBtn.addEventListener("click", function (event) {
  const amount = getPerClick();

  addMoney(amount);
  totalClicks++;

  let x = event.clientX;
  let y = event.clientY;

  if (x === 0 && y === 0) {
    const box = dollarBtn.getBoundingClientRect();
    x = box.left + box.width / 2;
    y = box.top + box.height / 2;
  }

  showFloatingText(x + (Math.random() * 40 - 20), y - 20, amount);
  updateDisplay();
});

function buildStore() {
  for (let i = 0; i < upgrades.length; i++) {
    const up = upgrades[i];

    const card = document.createElement("div");
    card.className = "upgrade locked";
    card.tabIndex = 0;
    card.setAttribute("role", "button");

    card.innerHTML =
      '<div class="upgrade-icon">' + up.icon + '</div>' +
      '<div class="upgrade-info">' +
        '<div class="upgrade-name"></div>' +
        '<div class="upgrade-desc"></div>' +
        '<div class="upgrade-price"></div>' +
      '</div>' +
      '<div class="upgrade-owned">0</div>';

    cards[up.id] = {
      card: card,
      name: card.querySelector(".upgrade-name"),
      desc: card.querySelector(".upgrade-desc"),
      price: card.querySelector(".upgrade-price"),
      count: card.querySelector(".upgrade-owned")
    };

    card.addEventListener("click", function () {
      buyUpgrade(up);
    });

    card.addEventListener("keydown", function (e) {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        buyUpgrade(up);
      }
    });

    listEl.appendChild(card);
  }
}

function buyUpgrade(upgrade) {
  const amount = buyAmount === "max" ? getMaxAffordable(upgrade) : buyAmount;

  if (!Number.isFinite(amount) || amount < 1) return;

  const cost = getCost(upgrade, amount);

  if (Number.isFinite(cost) && money >= cost) {
    money -= cost;
    owned[upgrade.id] += amount;

    saveGame();
    updateDisplay();
  }
}

for (let i = 0; i < amountBtns.length; i++) {
  amountBtns[i].addEventListener("click", function () {
    const selected = amountBtns[i].dataset.amount;
    buyAmount = selected === "max" ? "max" : Number(selected);

    for (let j = 0; j < amountBtns.length; j++) {
      amountBtns[j].classList.remove("active");
      amountBtns[j].setAttribute("aria-pressed", "false");
    }

    amountBtns[i].classList.add("active");
    amountBtns[i].setAttribute("aria-pressed", "true");

    updateDisplay();
  });
}

function showToast(icon, title, text) {
  const el = document.createElement("div");
  el.className = "toast";

  el.innerHTML =
    '<div class="toast-icon">' + icon + '</div>' +
    '<div><div class="toast-title"></div><div class="toast-text"></div></div>';

  el.querySelector(".toast-title").textContent = title;
  el.querySelector(".toast-text").textContent = text;

  toastsEl.appendChild(el);

  setTimeout(function () {
    el.remove();
  }, 4000);
}

function openModal(id) {
  document.getElementById(id).classList.add("open");
  updateDisplay();
}

function closeModals() {
  const modals = document.querySelectorAll(".modal");

  for (let i = 0; i < modals.length; i++) {
    modals[i].classList.remove("open");
  }
}

achBtn.addEventListener("click", function () {
  openModal("ach-modal");
});

prestigeBtn.addEventListener("click", function () {
  openModal("prestige-modal");
});

const closeBtns = document.querySelectorAll(".modal-close");

for (let i = 0; i < closeBtns.length; i++) {
  closeBtns[i].addEventListener("click", closeModals);
}

const allModals = document.querySelectorAll(".modal");

for (let i = 0; i < allModals.length; i++) {
  allModals[i].addEventListener("click", function (event) {
    if (event.target === allModals[i]) {
      closeModals();
    }
  });
}

document.addEventListener("keydown", function (event) {
  if (event.key === "Escape") {
    closeModals();
  }
});

function getStat(name) {
  if (name === "clicks") return totalClicks;
  if (name === "lifetime") return lifetimeEarned;
  if (name === "perSecond") return getPerSecond();
  if (name === "owned") return getTotalOwned();
  if (name === "golden") return goldenClicks;
  if (name === "prestige") return prestigeCount;

  if (name.indexOf("own:") === 0) {
    return owned[name.slice(4)] || 0;
  }

  return 0;
}

function buildAchievements() {
  for (let i = 0; i < achievements.length; i++) {
    const a = achievements[i];

    const card = document.createElement("div");
    card.className = "ach";

    card.innerHTML =
      '<div class="ach-icon">' + a.icon + '</div>' +
      '<div class="ach-name"></div>' +
      '<div class="ach-desc"></div>';

    card.querySelector(".ach-name").textContent = a.name;
    card.querySelector(".ach-desc").textContent = a.desc;

    achCards[a.id] = card;
    achListEl.appendChild(card);
  }
}

function refreshAchievements() {
  for (let i = 0; i < achievements.length; i++) {
    const a = achievements[i];

    if (unlocked[a.id]) {
      achCards[a.id].classList.add("unlocked");
    } else {
      achCards[a.id].classList.remove("unlocked");
    }
  }
}

function checkAchievements() {
  let gotNew = false;

  for (let i = 0; i < achievements.length; i++) {
    const a = achievements[i];

    if (!unlocked[a.id] && getStat(a.stat) >= a.goal) {
      unlocked[a.id] = true;
      gotNew = true;

      showToast(a.icon, "Achievement: " + a.name, a.desc + " (+1% income)");
    }
  }

  if (gotNew) {
    refreshAchievements();
    saveGame();
  }
}

function scheduleNextGolden() {
  nextGoldenAt = Date.now() + randomBetween(GOLDEN_MIN_WAIT, GOLDEN_MAX_WAIT) * 1000;
}

function spawnGolden() {
  if (goldenEl !== null) return;

  const el = document.createElement("button");
  el.className = "golden";
  el.setAttribute("aria-label", "Golden dollar - click it for a bonus!");
  el.style.left = randomBetween(8, 72) + "%";
  el.style.top = randomBetween(28, 62) + "%";
  el.addEventListener("click", clickGolden);

  mainEl.appendChild(el);
  goldenEl = el;

  goldenTimer = setTimeout(function () {
    if (goldenEl) {
      goldenEl.classList.add("fading");
    }

    goldenTimer = setTimeout(removeGolden, 2000);
  }, (GOLDEN_STAY_TIME - 2) * 1000);
}

function removeGolden() {
  clearTimeout(goldenTimer);

  if (goldenEl !== null) {
    goldenEl.remove();
    goldenEl = null;
  }

  scheduleNextGolden();
}

function addBuff(name, kind, mult, seconds) {
  const kept = [];

  for (let i = 0; i < buffs.length; i++) {
    if (buffs[i].name !== name) {
      kept.push(buffs[i]);
    }
  }

  kept.push({
    name: name,
    kind: kind,
    mult: mult,
    endsAt: Date.now() + seconds * 1000
  });

  buffs = kept;
}

function removeExpiredBuffs() {
  const kept = [];
  const now = Date.now();

  for (let i = 0; i < buffs.length; i++) {
    if (buffs[i].endsAt > now) {
      kept.push(buffs[i]);
    }
  }

  buffs = kept;
}

function clickGolden() {
  const roll = Math.random();

  if (roll < 0.45) {
    const gain = Math.min(money * 0.15, getPerSecond() * 900) + 13;
    addMoney(gain);
    showToast("🍀", "Lucky!", "+$" + formatNumber(gain));
  } else if (roll < 0.85) {
    addBuff("Frenzy x7", "production", 7, 30);
    showToast("⚡", "Frenzy!", "Passive income x7 for 30 seconds");
  } else {
    addBuff("Click Frenzy x100", "click", 100, 13);
    showToast("👆", "Click Frenzy!", "Clicks are worth x100 for 13 seconds. Click fast!");
  }

  goldenClicks++;
  removeGolden();
  saveGame();
  updateDisplay();
}

function getTotalPrestigeBars() {
  return money >= PRESTIGE_BASE ? 1 : 0;
}

function getPendingBars() {
  return getTotalPrestigeBars();
}

function getNextBarAt() {
  return PRESTIGE_BASE;
}

function ascend() {
  if (money < PRESTIGE_BASE) return;

  if (!confirm("KRAB RESET: spend $1e100 (one centillion) to reset ordinary progress and gain 1 Krab Point? Each Krab Point gives +10% income.")) {
    return;
  }

  prestigeBars += 1;
  prestigeCount += 1;
  money = 0;

  for (let i = 0; i < upgrades.length; i++) {
    owned[upgrades[i].id] = 0;
  }

  buffs = [];
  removeGolden();
  closeModals();

  showToast("🦀", "KRAB RESET!", "+1 Krab Point. Permanent income multiplier: x" + getPrestigeMultiplier().toFixed(2));

  saveGame();
  updateDisplay();
}

ascendBtn.addEventListener("click", ascend);

function updateDisplay() {
  checkAchievements();

  balanceEl.textContent = "$" + formatNumber(money);
  perSecondEl.textContent = "per second: $" + formatNumber(getPerSecond());
  perClickEl.textContent = "per click: $" + formatNumber(getPerClick());

  document.title = "$" + formatNumber(money) + " - Money Clicker";

  let buffText = "";

  for (let i = 0; i < buffs.length; i++) {
    const secondsLeft = Math.ceil((buffs[i].endsAt - Date.now()) / 1000);
    buffText += '<span class="buff">⚡ ' + buffs[i].name + " (" + secondsLeft + "s)</span>";
  }

  buffBarEl.innerHTML = buffText;

  if (achCountEl) {
    achCountEl.textContent = countAchievements() + "/" + achievements.length;
  } else {
    achBtn.textContent = "🏆 " + countAchievements() + "/" + achievements.length;
  }

  const pending = getPendingBars();

  prestigeBtn.textContent = pending >= 1 ? "🦀 Krab Reset (Ready!)" : "🦀 Krab Reset";

  if (pending >= 1) {
    prestigeBtn.classList.add("ready");
  } else {
    prestigeBtn.classList.remove("ready");
  }

  pBarsEl.textContent = prestigeBars;
  pBonusEl.textContent = "x" + getPrestigeMultiplier().toFixed(2) + " (Krab Points)  x" + getAchievementMultiplier().toFixed(2) + " (achievements)";
  pTotalEl.textContent = "$" + formatNumber(lifetimeEarned);
  pPendingEl.textContent = "+" + pending;
  pNextEl.textContent = "$" + formatNumber(getNextBarAt());

  ascendBtn.disabled = pending < 1;
  ascendBtn.textContent = pending >= 1 ? "KRAB RESET — gain +1 point" : "Reach $1e100 to reset";

  for (let i = 0; i < upgrades.length; i++) {
    const up = upgrades[i];
    const c = cards[up.id];

    const purchaseAmount = buyAmount === "max" ? getMaxAffordable(up) : buyAmount;
    const cost = purchaseAmount > 0 ? getCost(up, purchaseAmount) : getCost(up, 1);

    const isUnlocked = owned[up.id] > 0 || lifetimeEarned >= getCost(up, 1);

    if (!isUnlocked) {
      c.card.className = "upgrade locked";
      c.name.textContent = "???";
      c.desc.textContent = "";
      c.price.textContent = "$" + formatNumber(getCost(up, 1));
      c.count.textContent = "";
      continue;
    }

    c.name.textContent = up.name;

    c.desc.textContent = up.type === "click"
      ? "+$" + formatNumber(up.power) + " per click"
      : "+$" + formatNumber(up.power) + " per second";

    c.price.textContent = "$" + formatNumber(cost) +
      (buyAmount === "max"
        ? " (Max: x" + purchaseAmount + ")"
        : (buyAmount > 1 ? " (x" + buyAmount + ")" : ""));

    c.count.textContent = owned[up.id];

    if (money >= cost) {
      c.card.className = "upgrade affordable";
    } else {
      c.card.className = "upgrade too-expensive";
    }
  }
}

setInterval(function () {
  removeExpiredBuffs();

  const perSecond = getPerSecond();

  if (perSecond > 0) {
    addMoney(perSecond / 10);
  }

  if (goldenEl === null && Date.now() >= nextGoldenAt) {
    spawnGolden();
  }

  updateDisplay();
}, 100);

function saveGame() {
  const data = {
    money: money,
    lifetimeEarned: lifetimeEarned,
    owned: owned,
    totalClicks: totalClicks,
    goldenClicks: goldenClicks,
    prestigeBars: prestigeBars,
    prestigeCount: prestigeCount,
    unlocked: unlocked
  };

  localStorage.setItem(SAVE_KEY, JSON.stringify(data));
}

function loadGame() {
  const text = localStorage.getItem(SAVE_KEY);

  if (text === null) return;

  try {
    const data = JSON.parse(text);

    money = data.money || 0;
    lifetimeEarned = data.lifetimeEarned || data.totalEarned || 0;
    totalClicks = data.totalClicks || 0;
    goldenClicks = data.goldenClicks || 0;
    prestigeBars = data.prestigeBars || 0;
    prestigeCount = data.prestigeCount || 0;
    unlocked = data.unlocked || {};

    const oldIdMap = {
      finger: "click",
      piggy: "atm",
      robot: "goldenClick",
      magnet: "goldenClick",
      stocks: "mnc",
      central: "government",
      time: "timeMachine"
    };

    for (let i = 0; i < upgrades.length; i++) {
      const id = upgrades[i].id;
      let savedCount = data.owned && data.owned[id];

      if (!savedCount && data.owned) {
        for (const oldId in oldIdMap) {
          if (oldIdMap[oldId] === id && data.owned[oldId]) {
            savedCount = (savedCount || 0) + data.owned[oldId];
          }
        }
      }

      owned[id] = Number.isFinite(savedCount) ? savedCount : 0;
    }
  } catch (error) {
    console.log("Save file was broken, starting fresh.");
  }
}

setInterval(saveGame, 5000);
window.addEventListener("beforeunload", saveGame);

resetBtn.addEventListener("click", function () {
  if (confirm("Reset the game? You will lose ALL progress, including Krab Points and achievements.")) {
    localStorage.removeItem(SAVE_KEY);

    money = 0;
    lifetimeEarned = 0;
    totalClicks = 0;
    goldenClicks = 0;
    prestigeBars = 0;
    prestigeCount = 0;
    unlocked = {};
    buffs = [];

    for (let i = 0; i < upgrades.length; i++) {
      owned[upgrades[i].id] = 0;
    }

    removeGolden();
    refreshAchievements();
    updateDisplay();
  }
});

buildStore();
buildAchievements();
loadGame();
refreshAchievements();
scheduleNextGolden();
updateDisplay();