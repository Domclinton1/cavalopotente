document.querySelectorAll(".faq-question").forEach(button => {
    button.addEventListener("click", () => {
    const answer = button.nextElementSibling;
    const isActive = answer.style.display === "block";
    document.querySelectorAll(".faq-answer").forEach(ans => ans.style.display = "none");
    answer.style.display = isActive ? "none" : "block";
    });
    });