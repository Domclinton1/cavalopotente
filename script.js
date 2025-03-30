document.querySelectorAll(".faq-question").forEach(button => {
    button.addEventListener("click", () => {
    const answer = button.nextElementSibling;
    const isActive = answer.style.display === "block";
    document.querySelectorAll(".faq-answer").forEach(ans => ans.style.display = "none");
    answer.style.display = isActive ? "none" : "block";
    });
    });


function atualizarContador() {
        const agora = new Date();
        const fimDoDia = new Date();
        fimDoDia.setHours(23, 59, 59, 999); // Define para 23:59:59
    
        const diferenca = fimDoDia - agora;
        
        if (diferenca <= 0) {
            document.getElementById("contador").innerText = "Tempo Esgotado!";
            return;
        }
    
        const horas = Math.floor((diferenca / (1000 * 60 * 60)) % 24);
        const minutos = Math.floor((diferenca / (1000 * 60)) % 60);
        const segundos = Math.floor((diferenca / 1000) % 60);
    
        document.getElementById("contador").innerText = 
            `${horas}h ${minutos}m ${segundos}s`;
    
        setTimeout(atualizarContador, 1000);
    }
    
    atualizarContador();