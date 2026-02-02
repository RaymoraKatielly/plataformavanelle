// ==========================
// DADOS
// ==========================

// sessão fundamentos essenciais
const fundamentals = [
  {
    id: "apresentacao",
    title: "Apresentação Pessoal",
    timeMin: 20,
    desc: "Boas-vindas ao Vanélle Concept e o propósito que sustenta nossa excelência.",
    icon: iconUser(),
    status: "none",
    dots: 3,
    content: `
      <h4>BEM-VINDO(A) AO VANÉLLE CONCEPT</h4>
      <p>
        Bem-vindo(a) ao <b>Vanélle Concept Beleza e Bem-Estar</b> — um espaço único, sonhado e construído com propósito.
        Aqui, unimos <b>marcas</b>, <b>gestão</b> e <b>excelência</b> para entregar uma experiência completa em beleza e bem-estar.
      </p>

      <h4>NOSSAS MARCAS</h4>
      <p>Dentro desse lugar abençoado, vivem duas marcas que carregam história e identidade:</p>
      <ul>
        <li>✓ <b>Morena Rosa Art e Beleza</b> — excelência em cuidados capilares e estética feminina</li>
        <li>✓ <b>Barba Negra Barbearia</b> — ambiente exclusivo para barba e estilo masculino</li>
      </ul>

      <h4>POR QUE EXISTIMOS</h4>
      <p>
        Nós existimos por um motivo: <b>transformar pessoas na sua melhor versão</b>, com padrão, respeito e profissionalismo.
      </p>

      <p style="padding:10px 12px;border-radius:14px;border:1px solid rgba(164,106,53,.26);background:rgba(240,228,207,.7)">
        <b>Sua MELHOR VERSÃO… sempre no MELHOR LUGAR.</b>
      </p>

      <h4>NOSSA HISTÓRIA</h4>
      <p>
        Em <b>julho de 2010</b>, abrimos o <b>Morena Rosa Art e Beleza</b>. Desde então, crescemos com consistência, fé e trabalho diário.
        O Morena Rosa nasceu em um momento difícil financeiramente — mas com um chamado no coração e um legado de família:
        o amor pela beleza e pelo servir.
      </p>

      <p>
        Desde cedo, compreendemos algo que carregamos até hoje: <b>beleza também é ordem, organização e padrão</b>.
        Quando chegamos em <b>Água Boa</b> com família pequena, recomeçamos do zero. Foram dias simples, difíceis e cheios de superação.
        Mas Deus nos sustentou e, com trabalho intenso, visão e disciplina, construímos uma empresa sólida — com estrutura,
        processos e uma cultura que respeita pessoas e valoriza profissionais.
      </p>

      <p>
        Depois, nasceu a <b>Barba Negra Barbearia</b>: um ambiente exclusivo para homens, onde seguimos construindo uma marca forte,
        com identidade e excelência.
      </p>

      <p>
        Hoje, somamos <b>mais de 20 parceiros diretos</b> e <b>mais de 50 indiretos</b>, entre CLT, parceiros, sublocatários e especialistas
        de apoio (contabilidade, jurídico, segurança do trabalho e outros).
      </p>

      <p>🙏 Só temos que agradecer a Deus por tudo que Ele tem nos proporcionado.</p>

      <h4>NOSSA ESSÊNCIA</h4>
      <p style="padding:10px 12px;border-radius:14px;border:1px solid rgba(164,106,53,.26);background:rgba(240,228,207,.7)">
        <b>Contratamos caráter e treinamos habilidades.</b><br/>
        <span style="color:rgba(43,31,22,.75)">E isso não é frase bonita: é critério.</span>
      </p>

      <p>
        Aqui, somos especialistas em fazer cada cliente sair daqui <b>melhor do que entrou</b> — por fora e por dentro,
        com respeito, cuidado, técnica e postura.
      </p>
    `
  },
  {
    id: "missao",
    title: "Missão, Visão e Valores",
    timeMin: 30,
    desc: "Propósito, direção e princípios inegociáveis que sustentam o padrão Vanélle.",
    icon: iconStar(),
    status: "none",
    dots: 3,
    content: `
      <h4>MISSÃO</h4>
      <p>
        Existimos para entregar <b>beleza com propósito</b>, <b>bem-estar com excelência</b> e
        <b>identidade com significado</b>. Criamos experiências que transformam autoestima,
        confiança e a forma como cada cliente se vê — sempre revelando a sua
        <b>MELHOR VERSÃO</b>.
      </p>

      <h4>VISÃO</h4>
      <p>
        Ser referência em <b>excelência</b>, <b>profissionalismo</b> e <b>experiência premium</b>
        no segmento da beleza no <b>Vale do Araguaia</b>, com crescimento sustentável,
        organização, inovação e reconhecimento pela satisfação dos clientes e pelo
        desenvolvimento de profissionais.
      </p>

      <h4>VALORES (INEGOCIÁVEIS)</h4>
      <ul>
        <li>✓ <b>Excelência</b> — fazemos bem feito, sempre, em cada detalhe</li>
        <li>✓ <b>Organização e processos</b> — nada é improvisado; seguimos padrão</li>
        <li>✓ <b>Profissionalismo</b> — postura vem antes da habilidade</li>
        <li>✓ <b>Respeito</b> — ao cliente, à equipe, aos parceiros e ao ambiente</li>
        <li>✓ <b>Qualidade e segurança</b> — serviços responsáveis, técnicos e conscientes</li>
        <li>✓ <b>Crescimento contínuo</b> — evolução profissional e pessoal constante</li>
        <li>✓ <b>Responsabilidade coletiva</b> — cada ação impacta o todo</li>
        <li>✓ <b>Honra, verdade, fé e legado</b> — crescemos com princípios</li>
      </ul>

      <p style="padding:10px 12px;border-radius:14px;border:1px solid rgba(164,106,53,.26);background:rgba(240,228,207,.7)">
        <b>Aqui, valores não são discurso.</b><br/>
        São prática diária.
      </p>
    `
  },
  {
    id: "conduta",
    title: "Código de Conduta e Regulamento Interno",
    timeMin: 25,
    desc: "Princípios, normas, cultura e estrutura que orientam o comportamento na Vanélle.",
    icon: iconDoc(),
    status: "none",
    dots: 3,
    content: `
      <h4>APRESENTAÇÃO</h4>
      <p>
        Este documento estabelece os <b>princípios</b>, <b>normas</b> e <b>diretrizes</b> que regulam
        o comportamento, as responsabilidades e os direitos de todos os colaboradores do
        <b>Vanélle Concept</b>.
      </p>

      <h4>ORGANOGRAMA & AUTORIDADE</h4>
      <p>
        A Vanélle é uma empresa estruturada. Clareza evita conflitos.
        Conhecer a estrutura garante que cada decisão chegue ao lugar certo.
      </p>

      <h4>ESTRUTURA EXECUTIVA</h4>
      <ul>
        <li>
          ✓ <b>Diretora Geral & Criativa — Mirelle Sousa</b><br/>
          Responsável por visão estratégica, criatividade, marca, experiência do cliente
          e direção geral.
        </li>
        <li>
          ✓ <b>Diretora Financeira & Administrativa — Vandriellen Alves Ferreira</b><br/>
          Responsável por finanças, administração, processos internos e recursos humanos.
        </li>
      </ul>

      <h4>ESTRUTURA DE CADA SETOR</h4>
      <p>Todos os setores possuem:</p>
      <ul>
        <li>✓ Responsável definido — uma pessoa clara como referência</li>
        <li>✓ Função clara — sabemos exatamente o que cada um faz</li>
        <li>✓ Limite de atuação — autonomia dentro de fronteiras</li>
      </ul>

      <p style="padding:10px 12px;border-radius:14px;border:1px solid rgba(164,106,53,.26);background:rgba(240,228,207,.7)">
        <b>Isso não é burocracia. É clareza.</b>
      </p>

      <h4>RESPEITANDO O ORGANOGRAMA</h4>
      <ul>
        <li>✓ Decisões devem ser escaladas para o responsável correto</li>
        <li>✓ Não pule etapas ou contorne o organograma</li>
        <li>✓ Respeite os limites de autoridade de cada pessoa</li>
        <li>✓ Em caso de dúvida, procure seu gestor direto</li>
      </ul>

      <h4>CULTURA DO TIME</h4>
      <p>Na Vanélle, acreditamos em princípios fundamentais:</p>

      <h4>CARÁTER VEM ANTES DA TÉCNICA</h4>
      <p>
        Você pode ser o profissional mais hábil do mercado, mas sem caráter não pertence aqui.
        Honestidade, integridade e ética são <b>inegociáveis</b>.
      </p>

      <h4>ORGANIZAÇÃO GERA CRESCIMENTO</h4>
      <p>
        Uma empresa desorganizada é uma empresa que falha.
        Aqui, tudo tem <b>ordem</b>, <b>padrão</b> e <b>processo</b>.
      </p>

      <h4>POSTURA SUSTENTA RESULTADOS</h4>
      <p>
        Elegância, profissionalismo e respeito sustentam os resultados no longo prazo.
      </p>

      <h4>FRASE-BASE DA NOSSA CULTURA</h4>
      <p style="padding:10px 12px;border-radius:14px;border:1px solid rgba(164,106,53,.26);background:rgba(240,228,207,.7)">
        <b>"Contratamos caráter. Habilidades, treinamos."</b><br/>
        Aqui você sempre pode evoluir tecnicamente — mas caráter é não-negociável.
      </p>
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
    title: "Higiene, Segurança e Padrões de Excelência",
    timeMin: 45,
    desc: "Protocolos obrigatórios de higiene, segurança e postura profissional.",
    icon: iconShield(),
    status: "none",
    dots: 3,
    content: `
      <h4>PROTOCOLOS DE HIGIENE, SEGURANÇA E EXCELÊNCIA</h4>
      <p>
        A higiene e a segurança são a <b>base da confiança</b> que nossos clientes depositam em nós.
        Cada ação nessa área é um compromisso com a <b>vida</b> e o <b>bem-estar</b>.
      </p>

      <h4>PADRÕES MÍNIMOS OBRIGATÓRIOS</h4>
      <p>Estes padrões <b>NÃO são negociáveis</b>. São critério mínimo de funcionamento:</p>

      <h4>🧹 LIMPEZA E ORGANIZAÇÃO</h4>
      <ul>
        <li>✓ Bancada, carrinho e lavatório limpos após cada atendimento</li>
        <li>✓ Ferramentas e instrumentos higienizados a cada uso</li>
        <li>✓ Descarte adequado de resíduos e perfurocortantes</li>
      </ul>

      <h4>✅ SEGURANÇA DO CLIENTE</h4>
      <ul>
        <li>✓ Diagnóstico obrigatório antes de qualquer procedimento</li>
        <li>✓ Cumprimento rigoroso dos protocolos técnicos</li>
        <li>✓ Comunicação constante durante todo o atendimento</li>
      </ul>

      <h4>🗂️ ORGANIZAÇÃO INDIVIDUAL</h4>
      <ul>
        <li>✓ Você é responsável pela sua estação de trabalho</li>
        <li>✓ Produtos, ferramentas e utensílios identificados e acessíveis</li>
        <li>✓ Ambiente mantido limpo durante <b>TODO</b> o expediente</li>
      </ul>

      <h4>APRESENTAÇÃO PESSOAL</h4>
      <p><b>Você é a imagem da marca.</b></p>

      <h4>PADRÃO ESPERADO</h4>
      <ul>
        <li>✓ Vestimenta adequada e profissional</li>
        <li>✓ Higiene pessoal impecável</li>
        <li>✓ Cabelo alinhado</li>
        <li>✓ Perfume suave — respeitando a sensibilidade do cliente</li>
        <li>✓ Linguagem educada e respeitosa</li>
        <li>✓ Postura elegante — sempre</li>
      </ul>

      <h4>📵 CELULAR — USO APENAS PROFISSIONAL</h4>
      <p>
        Durante atendimentos, o celular deve permanecer <b>no bolso e no silencioso</b>.
        Seu foco deve estar <b>100% no cliente</b>.
      </p>

      <p style="padding:10px 12px;border-radius:14px;border:1px solid rgba(164,106,53,.26);background:rgba(240,228,207,.7)">
        <b>Elegância, discrição e postura.</b><br/>
        Sempre.
      </p>
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
  { id:"t-recepcao", title:"Recepção",     desc:"Atendimento ao cliente, agendamentos e pagamentos",          modules:8,  done:1, icon: iconPeople() },
  { id:"t-cabelos",  title:"Cabeleireiros", desc:"Cortes, colorimetria, alongamentos e tratamentos",          modules:12, done:4, icon: iconSmile() },
  { id:"t-barbeiros",title:"Barbeiros",     desc:"Navalha clássica, acabamento e tratamento facial",          modules:6,  done:3, icon: iconBeard() },
  { id:"t-gestao",   title:"Gestão",        desc:"Financeiro, recursos humanos e relatórios",                modules:5,  done:1, icon: iconChart() }
];

const trackModules = {
  recepcao: [
    {
      id: "r-01",
      title: "Padrão de Atendimento na Recepção",
      timeMin: 20,
      desc: "Como receber, orientar e conduzir com excelência.",
      icon: iconPeople(),
      status: "none",
      dots: 3,
      content: `<h4>PADRÃO DE ATENDIMENTO — RECEPÇÃO</h4><p>Conteúdo em construção. Aqui vai o protocolo completo.</p>`
    },
  ],
  cabeleireiros: [
    {
      id: "c-01",
      title: "Diagnóstico Capilar Obrigatório",
      timeMin: 25,
      desc: "Perguntas-chave e registro antes do procedimento.",
      icon: iconSmile(),
      status: "none",
      dots: 3,
      content: `<h4>DIAGNÓSTICO CAPILAR</h4><p>Conteúdo em construção.</p>`
    },
  ],
  barbeiros: [
    {
      id: "b-01",
      title: "Acabamento e Postura Profissional",
      timeMin: 20,
      desc: "Detalhes que elevam o padrão Barba Negra.",
      icon: iconBeard(),
      status: "none",
      dots: 3,
      content: `<h4>ACABAMENTO & POSTURA</h4><p>Conteúdo em construção.</p>`
    },
  ],
  gestao: [
    {
      id: "g-01",
      title: "Rotina Administrativa e Relatórios",
      timeMin: 30,
      desc: "Fluxo de caixa, metas e acompanhamento.",
      icon: iconChart(),
      status: "none",
      dots: 3,
      content: `<h4>ROTINA ADMINISTRATIVA</h4><p>Conteúdo em construção.</p>`
    },
  ],
};

// ==========================
// STORAGE (estado)
// ==========================
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

// ==========================
// ELEMENTOS
// ==========================
const fundGrid   = document.getElementById("fundGrid");
const tracksGrid = document.getElementById("tracksGrid");
const overallPct = document.getElementById("overallPct");
const overallBar = document.getElementById("overallBar");
const nextHint   = document.getElementById("nextHint");

// badges (menu)
document.getElementById("badge-recepcao").textContent      = tracks.find(t=>t.title==="Recepção")?.modules ?? 8;
document.getElementById("badge-cabeleireiros").textContent = tracks.find(t=>t.title==="Cabeleireiros")?.modules ?? 12;
document.getElementById("badge-barbeiros").textContent     = tracks.find(t=>t.title==="Barbeiros")?.modules ?? 6;
document.getElementById("badge-gestao").textContent        = tracks.find(t=>t.title==="Gestão")?.modules ?? 5;

// aplica status salvo (fundamentals)
for(const m of fundamentals){
  if(state.moduleStatus[m.id]){
    m.status = state.moduleStatus[m.id];
  }
}

// aplica status salvo (trackModules)
for(const sectionKey of Object.keys(trackModules)){
  for(const m of trackModules[sectionKey]){
    if(state.moduleStatus[m.id]){
      m.status = state.moduleStatus[m.id];
    }
  }
}

// ==========================
// RENDER
// ==========================
function renderFundamentals(){
  if(!fundGrid) return;
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
  if(!tracksGrid) return;
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

function renderTrackSection(sectionKey){
  const grid = document.getElementById(`grid-${sectionKey}`);
  if(!grid) return;

  const list = trackModules[sectionKey] || [];
  grid.innerHTML = "";

  list.forEach((m) => {
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

    el.addEventListener("click", () => openCustomModule(m));
    grid.appendChild(el);
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

// ==========================
// MODAL / OVERLAY
// ==========================
const overlay         = document.getElementById("overlay");
const closeModalBtn   = document.getElementById("closeModal");
const backBtn         = document.getElementById("backBtn");
const markProgressBtn = document.getElementById("markProgressBtn");

const modalTitle  = document.getElementById("modalTitle");
const modalTime   = document.getElementById("modalTime");
const modalStatus = document.getElementById("modalStatus");
const modalBody   = document.getElementById("modalBody");
const modalIcon   = document.getElementById("modalIcon");

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
  document.body.classList.add("module-open");
  overlay.scrollTop = 0;
}

function openCustomModule(m){
  currentModuleId = m.id;

  modalTitle.textContent = m.title;
  modalTime.textContent = "⏱ " + m.timeMin + " min";
  modalStatus.textContent = statusLabel(m.status);
  modalIcon.innerHTML = m.icon;
  modalBody.innerHTML = m.content;

  overlay.classList.add("show");
  overlay.setAttribute("aria-hidden","false");
  document.body.classList.add("module-open");
  overlay.scrollTop = 0;
}

function closeModule(){
  overlay.classList.remove("show");
  overlay.setAttribute("aria-hidden","true");

  // ✅ AQUI entra o remove
  document.body.classList.remove("module-open");
  currentModuleId = null;
}

overlay.addEventListener("click", (e) => { if(e.target === overlay) closeModule(); });
closeModalBtn.addEventListener("click", closeModule);
backBtn.addEventListener("click", closeModule);

markProgressBtn.addEventListener("click", () => {
  if(!currentModuleId) return;

  // tenta achar no fundamentals
  let m = fundamentals.find(x => x.id === currentModuleId);

  // se não tiver, tenta achar nos trackModules
  if(!m){
    for(const key of Object.keys(trackModules)){
      const found = trackModules[key].find(x => x.id === currentModuleId);
      if(found){ m = found; break; }
    }
  }

  if(!m) return;

  const next = m.status === "none" ? "progress" : (m.status === "progress" ? "done" : "none");
  m.status = next;

  state.moduleStatus[m.id] = next;
  saveState();

  modalStatus.textContent = statusLabel(m.status);

  renderFundamentals();
  renderTrackSection("recepcao");
  renderTrackSection("cabeleireiros");
  renderTrackSection("barbeiros");
  renderTrackSection("gestao");

  computeOverall();
});

document.addEventListener("keydown", (e) => {
  if(e.key === "Escape" && overlay.classList.contains("show")) closeModule();
});

// ==========================
// NAVEGAÇÃO / ACTIVE SECTION
// ==========================
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

  // se o módulo (overlay) estiver aberto, fecha antes de navegar
  if (overlay.classList.contains("show")) {
    closeModule();
  }

  // navega
  scrollToSection(section, true);

  // fecha o menu no mobile
  closeDrawer();
});


// detect section on scroll
const sections = ["home","fundamentos","trilhas","recepcao","cabeleireiros","barbeiros","gestao"];
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

// ==========================
// MOBILE DRAWER
// ==========================
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

// ==========================
// CONTINUE BUTTON
// ==========================
document.getElementById("continueBtn").addEventListener("click", () => {
  const next = fundamentals.find(m => m.status !== "done") || fundamentals[0];
  if(next) openModule(next.id);
});

// ==========================
// INIT
// ==========================
function init(){
  renderFundamentals();
  renderTracks();

  // ✅ AQUI entra o renderTrackSection(...)
  renderTrackSection("recepcao");
  renderTrackSection("cabeleireiros");
  renderTrackSection("barbeiros");
  renderTrackSection("gestao");

  computeOverall();

  if(typeof state.scrollY === "number" && state.scrollY > 0){
    window.scrollTo({ top: state.scrollY, behavior: "auto" });
  }
  setActive(state.activeSection || "home");

  const d = new Date();
  document.getElementById("lastUpdate").textContent =
    "Hoje (" + d.toLocaleDateString("pt-BR") + ")";
}
init();

// ==========================
// HELPERS
// ==========================
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

// ==========================
// ICONS (SVG inline)
// ==========================
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
