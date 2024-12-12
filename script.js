// Fungsi untuk mengarahkan ke page2.html saat tombol Yes ditekan
function redirectToPage() {
    window.location.href = "page2.html";
}
  
  // Fungsi untuk memindahkan tombol No ke posisi acak

function MoveRandomE1(elm) {
    elm.style.position = "absolute"
    elm.style.top = Math.floor(Math.random()*90 + 5) + "%";
    elm.style.left = Math.floor(Math.random()*90 + 5) + "%";
}
const moveRandom = document.querySelector("#move-random")

moveRandom.addEventListener("mouseenter", function(e){
    MoveRandomE1(e.target);
});