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


document.getElementById("downloadButton").addEventListener("click", function() {
    // Definește link-ul pe care vrei să-l descarci
    var link = "https://www.mediafire.com/file/2851gim9gu8g6e9/snake-release-v-1.0.93.apk/file";
    
    // Creează un element de ancoră invizibil pentru descărcarea automată
    var a = document.createElement("a");
    a.style.display = "none";
    document.body.appendChild(a);
    
    // Setează link-ul și forțează clicul pe acesta pentru a începe descărcarea
    a.href = link;
    a.download = "Snake Hack"; // Poți seta numele fișierului aici
    a.click();
    
    // Șterge elementul de ancoră după ce descărcarea a fost inițiată
    document.body.removeChild(a);
});