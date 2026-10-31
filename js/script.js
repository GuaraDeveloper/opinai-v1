// Botões e busca (ainda sem função real: ficam para a versão 2)
document.getElementById("btn-cadastro").addEventListener("click", () => {
  alert("O cadastro estará disponível na próxima versão do Opinaí.");
});

document.getElementById("btn-login").addEventListener("click", () => {
  alert("O login estará disponível na próxima versão do Opinaí.");
});

document.getElementById("search").addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    alert("A busca estará disponível na próxima versão do Opinaí.");
  }
});

// Slider com rolagem horizontal
function setupSlider(prevBtnId, nextBtnId, scrollContainerId) {
  const prevBtn = document.getElementById(prevBtnId);
  const nextBtn = document.getElementById(nextBtnId);
  const scrollContainer = document.getElementById(scrollContainerId);

  // Quanto rolar por clique: largura de um card mais a margem (aprox. 260px)
  const scrollAmount = 260;

  // Ativa ou desativa os botões conforme a posição da rolagem
  function updateButtons() {
    prevBtn.disabled = scrollContainer.scrollLeft <= 0;
    nextBtn.disabled =
      scrollContainer.scrollLeft >=
      scrollContainer.scrollWidth - scrollContainer.clientWidth - 1;
  }

  prevBtn.addEventListener("click", () => {
    scrollContainer.scrollBy({ left: -scrollAmount, behavior: "smooth" });
  });

  nextBtn.addEventListener("click", () => {
    scrollContainer.scrollBy({ left: scrollAmount, behavior: "smooth" });
  });

  scrollContainer.addEventListener("scroll", updateButtons);

  // Verificação inicial
  updateButtons();
}

setupSlider("prev-works", "next-works", "high-works");
setupSlider("prev-animes", "next-animes", "anime-cards");
