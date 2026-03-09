document.addEventListener('DOMContentLoaded', function() {
    // 1. Gestion du bouton "Scroll to Top" (Retour en haut)
    const scrollTopBtn = document.getElementById('scrollTop');
    
    if (scrollTopBtn) {
        window.addEventListener('scroll', function() {
            // Affiche le bouton après 300px de scroll
            if (window.pageYOffset > 300) {
                scrollTopBtn.style.display = "flex";
                // Petit délai pour l'opacité (optionnel)
                setTimeout(() => scrollTopBtn.style.opacity = "1", 10);
            } else {
                scrollTopBtn.style.opacity = "0";
                setTimeout(() => scrollTopBtn.style.display = "none", 300);
            }
        });

        scrollTopBtn.addEventListener('click', function() {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }

    // 2. Animation d'apparition des cartes (Bijoux et Vêtements)
    // On sélectionne toutes les cartes créées dans le HTML
    const cards = document.querySelectorAll('.item-card');
    
    cards.forEach((card, index) => {
        // État initial (caché)
        card.style.opacity = "0";
        card.style.transform = "translateY(30px)";
        card.style.transition = "all 0.6s ease-out";
        
        // Apparition progressive (effet cascade)
        setTimeout(() => {
            card.style.opacity = "1";
            card.style.transform = "translateY(0)";
        }, 100 * index); // Chaque carte attend 100ms de plus que la précédente
    });

    // 3. Log de vérification dans la console du navigateur
    console.log('✨ Page Vêtements et Bijoux : ' + cards.length + ' éléments chargés.');
});