document.querySelectorAll(".faq-question").forEach(button => {
    button.addEventListener("click", () => {
    const answer = button.nextElementSibling;
    const isActive = answer.style.display === "block";
    document.querySelectorAll(".faq-answer").forEach(ans => ans.style.display = "none");
    answer.style.display = isActive ? "none" : "block";
    });
    });


function atualizarContador() {
    const inicio = new Date(); // Momento atual
    const fim = new Date(inicio.getTime() + 15 * 60 * 1000); // 15 minutos a partir de agora

    function atualizar() {
        const agora = new Date();
        const diferenca = fim - agora;

        if (diferenca <= 0) {
            document.getElementById("contador").innerText = "Tempo Esgotado!";
            return;
        }

        const minutos = Math.floor((diferenca / (1000 * 60)) % 60);
        const segundos = Math.floor((diferenca / 1000) % 60);

        document.getElementById("contador").innerText = 
            `${minutos}m ${segundos}s`;

        setTimeout(atualizar, 1000);
    }

    atualizar();
}

atualizarContador();
