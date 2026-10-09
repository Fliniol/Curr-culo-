// Expande ou recolhe a bio.
function toggleReadMore() {
  const bio = document.querySelector('.hotel-bio');
  const btn = document.getElementById('readMoreBtn');
  if (!bio || !btn) return;
  bio.classList.toggle('expanded');
  btn.textContent = bio.classList.contains('expanded') ? 'Ler menos' : 'Ler mais...';
}

function setPopover(open) {
  const popover = document.getElementById('hotelPopover');
  const bioContainer = document.getElementById('bioContainer');
  const button = document.getElementById('popoverToggle');
  if (!popover) return;
  popover.classList.toggle('active', open);
  if (bioContainer) bioContainer.classList.toggle('is-dimmed', open);
  if (button) button.setAttribute('aria-expanded', String(open));
}

function togglePopover() {
  const popover = document.getElementById('hotelPopover');
  if (popover) setPopover(!popover.classList.contains('active'));
}

const dados = {
    nome: { titulo: "Nome", conteudo: "Christopher Feitosa do Monte" },
    idade: { titulo: "Idade", conteudo: "29/01/2003" },
    email: { titulo: "E-mail", conteudo: "Christopher.oldm@gmail.com" },
    telefone: { titulo: "Telefone", conteudo: "(85) 9 9975-4989" }
};

function abrirPainel(tipo) {
    const painel = document.getElementById("painel-dados");
    const titulo = document.getElementById("titulo-dados");
    const conteudo = document.getElementById("conteudo-dados");
    const bioContainer = document.getElementById("bioContainer");

    const informacao = dados[String(tipo).toLowerCase()];
    if (!informacao || !painel || !titulo || !conteudo) return;
    
    titulo.textContent = informacao.titulo;
    conteudo.textContent = informacao.conteudo;
    painel.classList.add("ativo");
    if (bioContainer) bioContainer.classList.add("is-dimmed");
    setPopover(false);
}

function selectOption(optionName) {
    abrirPainel(optionName);
}

document.addEventListener('DOMContentLoaded', () => {
  // Força a reprodução automática do vídeo no carregamento da página
  const video = document.getElementById('bg-video');
  if (video) {
    video.muted = true;
    video.play().catch(error => {
      console.log("A reprodução automática do vídeo foi bloqueada:", error);
    });
  }

  const popover = document.getElementById('hotelPopover');
  const button = document.getElementById('popoverToggle');
  const fechar = document.getElementById("fechar-dados");
  const painel = document.getElementById("painel-dados");
  const bioContainer = document.getElementById("bioContainer");

  if (button) {
    button.addEventListener('click', (event) => {
      event.stopPropagation();
      togglePopover();
    });
  }

  if (popover) {
    popover.addEventListener('click', (event) => event.stopPropagation());
  }

  if (fechar) {
    fechar.addEventListener("click", () => {
      if (painel) painel.classList.remove("ativo");
      if (bioContainer) bioContainer.classList.remove("is-dimmed");
    });
  }

  document.addEventListener('click', () => setPopover(false));
});