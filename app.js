/* ==========================
   DATA (você pode editar)
   ========================== */

const fundamentals = [
  {
    id: "apresentacao",
    title: "Apresentação Pessoal",
    timeMin: 20,
    desc: "Boas-vindas à Vanélle, postura profissional. Marcas: Morena Rosa, Arte e Beleza.",
    icon: iconUser(),
    status: "done", // done | progress | none
    dots: 3,
    content: `
      <h4>Bem-vindo(a) ao Vanélle</h4>
      <p>Bem-vindo(a) ao Vanélle Concept Beleza e Bem-Estar — um espaço único, sonhado e construído com propósito.</p>
      <h4>Nossas marcas</h4>
      <ul>
        <li><b>Morena Rosa Art e Beleza</b> — excelência em estética e beleza</li>
        <li>Outras marcas parceiras — padrão e experiência premium</li>
      </ul>
    `
  },
  {
    id: "missao",
    title: "Missão, Visão e Valores",
    timeMin: 30,
    desc: "Experiências inesquecíveis com excelência. Referência no Vale do Araguaia.",
    icon: iconStar(),
    status: "progress",
    dots: 3,
    content: `
      <h4>Missão</h4>
      <p>Entregar experiências inesquecíveis em beleza, com excelência, respeito e profissionalismo.</p>
      <h4>Visão</h4>
      <p>Ser referência em todo o Vale do Araguaia, transformando cada cliente em sua melhor versão, com uma experiência única.</p>
      <h4>Valores</h4>
      <ul>
        <li>Compromisso</li><li>Clareza</li><li>Respeito</li><li>Excelência</li><li>Crescimento contínuo</li><li>Responsabilidade coletiva</li>
      </ul>
      <p><b>Observação:</b> Ao ingressar na Vanélle Concept, todo profissional declara ciência e concordância com este manual, que possui força complementar ao contrato.</p>
    `
  },
  {
    id: "conduta",
    title: "Código de Conduta e Regulamento Interno",
    timeMin: 60,
    desc: "Regras essenciais, comportamento profissional, valores e princípios da empresa.",
    icon: iconDoc(),
    status: "none",
    dots: 3,
    content: `
      <h4>Horário padrão de atendimento</h4>
      <p><b>Segunda a sábado:</b> 8h às 19h30</p>
      <h4>Diretrizes</h4>
      <ul>
        <li>Postura e comunicação profissional</li>
        <li>Organização do ambiente após cada atendimento</li>
        <li>Respeito à equipe e ao cliente</li>
        <li>Padrões de apresentação e higiene</li>
      </ul>
    `
  },
  {
    id: "sistemas",
    title: "Sistemas Internos",
    timeMin: 40,
    desc: "Registro obrigatório de atendimentos. NÃO LANÇOU = PERDE COMISSÃO.",
    icon: iconMonitor(),
    status: "none",
    dots: 3,
    content: `
      <h4>Agenda e sistema</h4>
      <p>O sistema é o coração da operação. Cada transação, cada cliente, cada atendimento deve estar registrado.</p>
      <h4>Princípio crítico</h4>
      <p style="padding:10px 12px;border-radius:14px;border:1px solid rgba(164,106,53,.26);background:rgba(240,228,207,.7)">
        🚨 <b>NÃO LANÇOU = PERDE COMISSÃO</b>
      </p>
      <ul>
        <li>Registrar atendimento imediatamente após finalizar</li>
        <li>Conferir serviços e produtos usados</li>
        <li>Confirmar pagamento e forma de recebimento</li>
      </ul>
    `
  },
  {
    id: "higiene",
    title: "Higiene & Segurança",
    timeMin: 45,
    desc: "Limpeza profunda, organização individual e uso exclusivo de produtos profissionais.",
    icon: iconShield(),
    status: "none",
    dots: 3,
    content: `
      <h4>Estrutura e organização</h4>
      <ul>
        <li><b>Limpeza profunda:</b> equipe especializada realiza limpeza periódica em todo o espaço.</li>
        <li><b>Responsabilidade individual:</b> bancada, lavatório e carrinho sempre higienizados.</li>
        <li><b>Rodízio de organização:</b> obrigatório para cabeleireiros e barbeiros.</li>
      </ul>
      <p><b>Importante:</b> Produtos utilizados são profissionais, dermatologicamente testados e aprovados.</p>
    `
  },
  {
    id: "produtos",
    title: "Nossos Produtos",
    timeMin: 60,
    desc: "Tratamentos premium, finalizadores e proteção capilar de alta performance.",
    icon: iconFlask(),
    status: "none",
    dots: 3,
    content: `
      <h4>Linha profissional Vanélle</h4>
      <ul>
        <li><b>Tratamentos:</b> máscaras, cremes e séruns premium.</li>
        <li><b>Acabamento:</b> óleos, pomadas e finalizadores.</li>
        <li><b>Higiene:</b> desinfetantes e esterilizadores profissionais.</li>
        <li><b>Proteção:</b> protetores térmicos e leave-ins.</li>
      </ul>
    `
  }
];

const tracks = [
  { id:"t-recepcao", title:"Recepção", desc:"Atendimento ao cliente, agendamentos e pagamentos", modules:8,  done:1, icon: iconPeople() },
  { id:"t-cabelos",  title:"Cabeleireiros", desc:"Cortes, colorimetria, alongamentos e tratamentos", modules:12, done:4, icon: iconSmile() },
  { id:"t-barbeiros",title:"Barbeiros", desc:"Navalha clássica, acabamento e tratamento facial", modules:6,  done:3, icon: iconBeard() },
  { id:"t-gestao",   title:"Gestão", desc:"Financeiro, recursos humanos e relatórios", modules:5,  done:1, icon: iconChart() }
];

/* ==========================
   STORAGE (estado)
   ========================== */
const KEY = "vanelle_mvp_state_v1";
const state = loadState();

function loadState(){
  try{
    const raw = localStorage.getItem(KEY);
    if(!raw) return { activeSection:"home", scrollY:0, moduleStatus:{} };
    const parsed = JSON.parse(raw);
    return {
      activeSection: parsed.activeSection || "home",
      scrollY: Number.isFinite(parsed.scrollY) ? parsed.scrollY : 0,
      moduleStatus: parsed.moduleStatus || {}
    };
  } catch {
    return { activeSection:"home", scrollY:0, moduleStatus:{} };
  }
}
function saveState(){
  localStorage.setItem(KEY, JSON.stringify(state));
}

/* ==========================
   RENDER
   ========================== */
const fundGrid = document.getElementById("fundGrid");
const tracksGrid = document.getElementById("tracksGrid");
const overallPct = document.getElementById("overallPct");
const overallBar = document.getElementById("overallBar");
const nextHint = document.getElementById("nextHint");

// badges
document.getElementById("badge-recepcao").textContent = tracks.find(t=>t.title==="Recepção")?.modules ?? 8;
document.getElementById("badge-cabeleireiros").textContent = tracks.find(t=>t.title==="Cabeleireiros")?.modules ?? 12;
document.getElementById("badge-barbeiros").textContent = tracks.find(t=>t.title==="Barbeiros")?.modules ?? 6;
document.getElementById("badge-gestao").textContent = tracks.find(t=>t.title==="Gestão")?.modules ?? 5;

// apply stored status
for(const m of fundamentals){
  if(state.moduleStatus[m.id]){
    m.status = state.moduleStatus[m.id];
  }
}

function renderFundamentals(){
  fundGrid.innerHTML = "";
  fundamentals.forEach((m) => {
    const el = document.createElement("button");
    el.type = "button";
    el.className = "card";
    el.setAttribute("data-id", m.id);
    el.innerHTML = `
      <div class="card-top">
        <div class="icon-tile" aria-hidden="true">${m.icon}</div>
        <div class="time">${iconClock()}<span>${m.timeMin} min</span></div>
      </div>
      <div>
        <h4>${escapeHTML(m.title)}</h4>
        <p>${escapeHTML(m.desc)}</p>
      </div>
      <div class="card-bottom">
        <div class="dots" aria-hidden="true">${renderDots(m.dots, m.status)}</div>
        <div class="status ${statusClass(m.status)}">${statusLabel(m.status)}</div>
      </div>
    `;
    el.addEventListener("click", () => openModule(m.id));
    fundGrid.appendChild(el);
  });
}

function renderTracks(){
  tracksGrid.innerHTML = "";
  tracks.forEach((t) => {
    const pct = Math.round((t.done / t.modules) * 100);
    const el = document.createElement("button");
    el.type = "button";
    el.className = "track";
    el.innerHTML = `
      <div class="track-top">
        <div class="track-title">
          <div class="icon-tile" aria-hidden="true">${t.icon}</div>
          <div style="min-width:0">
            <h4>${escapeHTML(t.title)}</h4>
            <div class="desc">${escapeHTML(t.desc)}</div>
          </div>
        </div>
        <div class="mods">${t.modules}<small>módulos</small></div>
      </div>
      <div class="pbar" aria-hidden="true"><span style="width:${pct}%"></span></div>
      <div class="foot">
        <span>${t.done} de ${t.modules} concluídos</span>
        <b>${pct}%</b>
      </div>
    `;
    el.addEventListener("click", () => {
      const map = { "Recepção":"recepcao", "Cabeleireiros":"cabeleireiros", "Barbeiros":"barbeiros", "Gestão":"gestao" };
      const target = map[t.title] || "home";
      scrollToSection(target, true);
    });
    tracksGrid.appendChild(el);
  });
}

function computeOverall(){
  const total = fundamentals.length + tracks.reduce((a,t)=>a+t.modules,0);
  const fundDone = fundamentals.filter(m => m.status === "done").length;
  const tracksDone = tracks.reduce((a,t)=>a+t.done,0);

  const done = fundDone + tracksDone;
  const pct = Math.max(0, Math.min(100, Math.round((done/total)*100)));

  overallPct.textContent = pct + "%";
  overallBar.style.width = pct + "%";

  const next = fundamentals.find(m => m.status !== "done") || fundamentals[0];
  nextHint.textContent = next ? `Próximo módulo: ${next.title}` : "Próximo módulo: —";
}

/* ==========================
   Modal (detalhes)
   ========================== */
const overlay = document.getElementById("overlay");
const closeModalBtn = document.getElementById("closeModal");
const backBtn = document.getElementById("backBtn");
const markProgressBtn = document.getElementById("markProgressBtn");
const modalTitle = document.getElementById("modalTitle");
const modalTime = document.getElementById("modalTime");
const modalStatus = document.getElementById("modalStatus");
const modalBody = document.getElementById("modalBody");
const modalIcon = document.getElementById("modalIcon");

let currentModuleId = null;

function openModule(id){
  const m = fundamentals.find(x => x.id === id);
  if(!m) return;
  currentModuleId = id;

  modalTitle.textContent = m.title;
  modalTime.textContent = "⏱ " + m.timeMin + " min";
  modalStatus.textContent = statusLabel(m.status);
  modalIcon.innerHTML = m.icon;
  modalBody.innerHTML = m.content;

  overlay.classList.add("show");
  overlay.setAttribute("aria-hidden","false");
  document.body.style.overflow = "hidden";
}

function closeModule(){
  overlay.classList.remove("show");
  overlay.setAttribute("aria-hidden","true");
  document.body.style.overflow = "";
  currentModuleId = null;
}

overlay.addEventListener("click", (e) => { if(e.target === overlay) closeModule(); });
closeModalBtn.addEventListener("click", closeModule);
backBtn.addEventListener("click", closeModule);

markProgressBtn.addEventListener("click", () => {
  if(!currentModuleId) return;
  const m = fundamentals.find(x => x.id === currentModuleId);
  if(!m) return;

  const next = m.status === "none" ? "progress" : (m.status === "progress" ? "done" : "none");
  m.status = next;
  state.moduleStatus[m.id] = next;
  saveState();

  modalStatus.textContent = statusLabel(m.status);
  renderFundamentals();
  computeOverall();
});

document.addEventListener("keydown", (e) => {
  if(e.key === "Escape" && overlay.classList.contains("show")) closeModule();
});

/* ==========================
   Navegação / active section
   ========================== */
const nav = document.getElementById("nav");
const navLinks = Array.from(nav.querySelectorAll("a[data-section]"));

function setActive(section){
  navLinks.forEach(a => a.classList.toggle("active", a.dataset.section === section));
  state.activeSection = section;
  saveState();
}

function scrollToSection(section, smooth=false){
  const el = document.querySelector(`[data-section="${section}"]`) || document.getElementById(section);
  if(!el) return;
  setActive(section);
  el.scrollIntoView({ behavior: smooth ? "smooth" : "auto", block: "start" });
}

nav.addEventListener("click", (e) => {
  const a = e.target.closest("a[data-section]");
  if(!a) return;
  e.preventDefault();
  const section = a.dataset.section;
  scrollToSection(section, true);
  closeDrawer();
});

// detect section on scroll
const sections = ["home","fundamentos","recepcao","cabeleireiros","barbeiros","gestao"];
let ticking = false;

window.addEventListener("scroll", () => {
  if(ticking) return;
  ticking = true;
  requestAnimationFrame(() => {
    state.scrollY = window.scrollY;
    saveState();

    const current = getCurrentSection();
    if(current) setActive(current);

    ticking = false;
  });
},{ passive:true });

function getCurrentSection(){
  const offset = 120;
  for(let i=sections.length-1; i>=0; i--){
    const id = sections[i];
    const el = document.querySelector(`[data-section="${id}"]`) || document.getElementById(id);
    if(!el) continue;
    const top = el.getBoundingClientRect().top + window.scrollY;
    if(window.scrollY + offset >= top) return id;
  }
  return "home";
}

/* ==========================
   Mobile drawer
   ========================== */
const sidebar = document.getElementById("sidebar");
const drawerOverlay = document.getElementById("drawerOverlay");
const hamb = document.getElementById("hamb");

function openDrawer(){
  sidebar.classList.add("open");
  drawerOverlay.classList.add("show");
  drawerOverlay.setAttribute("aria-hidden","false");
  document.body.style.overflow = "hidden";
}
function closeDrawer(){
  sidebar.classList.remove("open");
  drawerOverlay.classList.remove("show");
  drawerOverlay.setAttribute("aria-hidden","true");
  document.body.style.overflow = "";
}

hamb?.addEventListener("click", openDrawer);
drawerOverlay.addEventListener("click", closeDrawer);

window.addEventListener("resize", () => {
  if(window.innerWidth > 820) closeDrawer();
});

/* ==========================
   Continue button
   ========================== */
document.getElementById("continueBtn").addEventListener("click", () => {
  const next = fundamentals.find(m => m.status !== "done") || fundamentals[0];
  if(next) openModule(next.id);
});

/* ==========================
   Init
   ========================== */
function init(){
  renderFundamentals();
  renderTracks();
  computeOverall();

  if(typeof state.scrollY === "number" && state.scrollY > 0){
    window.scrollTo({ top: state.scrollY, behavior: "auto" });
  }
  setActive(state.activeSection || "home");

  const d = new Date();
  document.getElementById("lastUpdate").textContent = "Hoje (" + d.toLocaleDateString("pt-BR") + ")";
}
init();

/* ==========================
   Helpers
   ========================== */
function statusLabel(s){
  if(s === "done") return "Concluído";
  if(s === "progress") return "Em progresso";
  return "Não iniciado";
}
function statusClass(s){
  if(s === "done") return "ok";
  if(s === "progress") return "mid";
  return "no";
}
function renderDots(n, status){
  const onCount = status === "done" ? n : (status === "progress" ? Math.max(1, Math.ceil(n/2)) : 0);
  let out = "";
  for(let i=1;i<=n;i++){
    out += `<span class="${i<=onCount?'on':''}"></span>`;
  }
  return out;
}
function escapeHTML(str){
  return String(str)
    .replaceAll("&","&amp;")
    .replaceAll("<","&lt;")
    .replaceAll(">","&gt;")
    .replaceAll('"',"&quot;")
    .replaceAll("'","&#039;");
}

/* ==========================
   Icons (SVG inline)
   ========================== */
function iconClock(){
  return `
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round">
      <circle cx="12" cy="12" r="9"></circle>
      <path d="M12 7v6l4 2"></path>
    </svg>
  `;
}
function iconUser(){
  return `
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" style="color:rgba(164,106,53,.85)" stroke-width="2" stroke-linecap="round">
      <path d="M20 21a8 8 0 0 0-16 0"></path>
      <circle cx="12" cy="7" r="4"></circle>
    </svg>
  `;
}
function iconStar(){
  return `
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" style="color:rgba(143,94,194,.85)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <path d="M12 2l3 7h7l-5.5 4 2 7L12 16l-6.5 4 2-7L2 9h7z"></path>
    </svg>
  `;
}
function iconDoc(){
  return `
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" style="color:rgba(90,112,140,.85)" stroke-width="2" stroke-linecap="round">
      <path d="M14 2H7a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8z"></path>
      <path d="M14 2v6h6"></path>
      <path d="M8 13h8"></path>
      <path d="M8 17h6"></path>
    </svg>
  `;
}
function iconMonitor(){
  return `
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" style="color:rgba(98,140,219,.9)" stroke-width="2" stroke-linecap="round">
      <rect x="3" y="4" width="18" height="12" rx="2"></rect>
      <path d="M7 20h10"></path>
      <path d="M12 16v4"></path>
    </svg>
  `;
}
function iconShield(){
  return `
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" style="color:rgba(64,162,122,.85)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <path d="M12 2l8 4v6c0 5-3.5 9.4-8 10-4.5-.6-8-5-8-10V6z"></path>
      <path d="M9 12l2 2 4-4"></path>
    </svg>
  `;
}
function iconFlask(){
  return `
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" style="color:rgba(224,107,107,.85)" stroke-width="2" stroke-linecap="round">
      <path d="M10 2v6l-5 9a3 3 0 0 0 2.6 5h8.8A3 3 0 0 0 19 17l-5-9V2"></path>
      <path d="M8 8h8"></path>
    </svg>
  `;
}
function iconPeople(){
  return `
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" style="color:rgba(224,107,107,.85)" stroke-width="2" stroke-linecap="round">
      <path d="M16 11c1.657 0 3-1.79 3-4s-1.343-4-3-4-3 1.79-3 4 1.343 4 3 4Z"/>
      <path d="M8 11c1.657 0 3-1.79 3-4S9.657 3 8 3 5 4.79 5 7s1.343 4 3 4Z"/>
      <path d="M2 21c0-3.314 2.686-6 6-6"/>
      <path d="M22 21c0-3.314-2.686-6-6-6"/>
      <path d="M8 15h8"/>
    </svg>
  `;
}
function iconSmile(){
  return `
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" style="color:rgba(143,94,194,.85)" stroke-width="2" stroke-linecap="round">
      <circle cx="12" cy="12" r="9"></circle>
      <path d="M8.5 10h.01"></path>
      <path d="M15.5 10h.01"></path>
      <path d="M8 14c1.2 1.2 2.5 2 4 2s2.8-.8 4-2"></path>
    </svg>
  `;
}
function iconBeard(){
  return `
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" style="color:rgba(64,162,122,.85)" stroke-width="2" stroke-linecap="round">
      <path d="M3 11c2.5 0 3.5 2 6 2s3.5-2 6-2 3.5 2 6 2"/>
      <path d="M5 13v3a4 4 0 0 0 4 4h6a4 4 0 0 0 4-4v-3"/>
      <path d="M9 7a3 3 0 0 1 6 0"/>
    </svg>
  `;
}
function iconChart(){
  return `
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" style="color:rgba(98,140,219,.9)" stroke-width="2" stroke-linecap="round">
      <path d="M4 19V5"></path>
      <path d="M8 19V9"></path>
      <path d="M12 19V12"></path>
      <path d="M16 19V7"></path>
      <path d="M20 19V10"></path>
    </svg>
  `;
}
