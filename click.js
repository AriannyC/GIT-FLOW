document.addEventListener("click", function(e){
    if(e.target.classList.contains("galeria-iten" )){
        const src= e.target.getAttribute("src");
        document.querySelector(".modal-img").src =src;
        const myModal = new bootstrap.Modal(document.getElementById('Modal-galeria'));
        myModal.show();
    }
})