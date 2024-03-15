document.addEventListener("DOMContentLoaded", function() {
    const modalBtn = document.getElementById("modal-btn");
    const modal = document.getElementById("modal");
    const closeBtn = document.getElementById("close-btn");

    modalBtn.addEventListener("click", function() {
        modal.style.display = "block";
    });

    closeBtn.addEventListener("click", function() {
        modal.style.display = "none";
    });
});