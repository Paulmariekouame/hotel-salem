// hamburger.js
document.addEventListener('DOMContentLoaded', function () {
    const navbarToggler = document.querySelector('.navbar-toggler');
    const navbarCollapse = document.querySelector('.navbar-collapse');

    navbarToggler.addEventListener('click', function () {
        navbarCollapse.classList.toggle('show');
    });
});
    document.querySelectorAll(".btn a").forEach(button => {
        button.addEventListener("click", function(event) {
            event.preventDefault(); // Empêche le lien de recharger la page

            let numero = "2250759822511"; // Ton numéro WhatsApp
            let item = this.closest(".item"); // Trouver l'élément parent contenant les données
            let nom = item.querySelector(".titre span").textContent.trim();
            let prix = item.querySelector(".prix span").textContent.trim();
            let image = item.querySelector(".image-container img").src; // Récupérer l'URL de l'image

            let message = `Bonjour, je voudrais commander un ${nom} `;
            let url = `https://api.whatsapp.com/send?phone=${numero}&text=${encodeURIComponent(message)}`;

            window.open(url, "_blank"); // Ouvre WhatsApp dans un nouvel onglet
        });
 
    });

    function initMap() {
        var location = {lat:5.950458102809945, lng:-4.192509968016795};
        var map = new google.maps.Map(document.getElementById('map'), {
            zoom: 15,
            center: location
        });
        var marker = new google.maps.Marker({
            position: location,
            map: map
        });
          }