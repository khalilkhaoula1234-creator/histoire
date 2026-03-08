// ============================================
// CARTE INTERACTIVE SOUSS-MASSA
// ============================================

// Données des monuments et sites d'intérêt
const monuments = [
    {
        id: 1,
        nom: "Agadir",
        type: "Ville",
        latitude: 30.4278,
        longitude: -9.5981,
        description: "Ville côtière principale du Souss-Massa, célèbre pour ses plages, son port et son climat ensoleillé toute l'année.",
        icone: "fa-city",
        categorie: "Ville"
    },
    {
        id: 2,
        nom: "Kasbah de Taourirt",
        type: "Monument Historique",
        latitude: 30.9200,
        longitude: -6.9000,
        description: "Ancienne kasbah fortifiée, témoin de l'architecture amazigh traditionnelle et de l'histoire de la région.",
        icone: "fa-monument",
        categorie: "Patrimoine"
    },
    {
        id: 3,
        nom: "Taroudant",
        type: "Ville Historique",
        latitude: 30.4700,
        longitude: -8.8700,
        description: "Ville historique entourée de remparts impressionnants, surnommée 'la petite Marrakech'. Marché traditionnel et artisanat local.",
        icone: "fa-city",
        categorie: "Ville"
    },
    {
        id: 4,
        nom: "Tiznit",
        type: "Ville Fortifiée",
        latitude: 29.7167,
        longitude: -9.7167,
        description: "Ville fortifiée célèbre pour ses remparts, son artisanat d'argent et sa médina authentique.",
        icone: "fa-city",
        categorie: "Ville"
    },
    {
        id: 5,
        nom: "Paradise Valley",
        type: "Site Naturel",
        latitude: 30.5500,
        longitude: -9.5000,
        description: "Oasis naturelle avec piscines naturelles, cascades et palmiers. Lieu de baignade populaire dans les montagnes.",
        icone: "fa-water",
        categorie: "Nature"
    },
    {
        id: 6,
        nom: "Gorges de Tislite",
        type: "Site Naturel",
        latitude: 30.8000,
        longitude: -7.2000,
        description: "Gorges spectaculaires creusées par la rivière, offrant des paysages à couper le souffle et des possibilités de randonnée.",
        icone: "fa-mountain",
        categorie: "Nature"
    },
    {
        id: 7,
        nom: "Musée Claudio Bravo",
        type: "Musée",
        latitude: 30.4200,
        longitude: -9.6000,
        description: "Musée dédié à l'artiste chilien Claudio Bravo, situé dans un palais traditionnel à Tanger. Collection d'œuvres d'art contemporain.",
        icone: "fa-museum",
        categorie: "Culture"
    },
    {
        id: 8,
        nom: "Aït Baha",
        type: "Ville",
        latitude: 30.0700,
        longitude: -9.1500,
        description: "Petite ville de montagne, point de départ pour explorer les villages amazigh et les paysages de l'Atlas.",
        icone: "fa-mountain",
        categorie: "Ville"
    },
    {
        id: 9,
        nom: "Taghazout",
        type: "Station Balnéaire",
        latitude: 30.5333,
        longitude: -9.7000,
        description: "Village de pêcheurs transformé en station balnéaire, célèbre pour le surf et ses plages de sable fin.",
        icone: "fa-water",
        categorie: "Plage"
    },
    {
        id: 10,
        nom: "Souk de Taroudant",
        type: "Marché",
        latitude: 30.4700,
        longitude: -8.8700,
        description: "Marché traditionnel animé où l'on trouve artisanat local, épices, huile d'argan et produits du terroir.",
        icone: "fa-store",
        categorie: "Commerce"
    },
    {
        id: 11,
        nom: "Kasbah d'Aït Benhaddou",
        type: "Monument Historique",
        latitude: 31.0470,
        longitude: -7.1300,
        description: "Ksar classé au patrimoine mondial de l'UNESCO, exemple remarquable d'architecture amazigh en terre.",
        icone: "fa-monument",
        categorie: "Patrimoine"
    },
    {
        id: 12,
        nom: "Plage d'Agadir",
        type: "Plage",
        latitude: 30.4200,
        longitude: -9.6000,
        description: "Longue plage de sable fin de 10 km, bordée de cafés et restaurants. Idéale pour la baignade et les sports nautiques.",
        icone: "fa-water",
        categorie: "Plage"
    },
    {
        id: 13,
        nom: "Restaurant Dar Souss",
        type: "Restaurant",
        latitude: 30.4200,
        longitude: -9.6000,
        description: "Cuisine traditionnelle amazigh. Situé à Agadir - Marina d'Agadir. Note: 4.7/5",
        icone: "fa-utensils",
        categorie: "Restaurant"
    },
    {
        id: 14,
        nom: "Le Jardin d'Argan",
        type: "Restaurant",
        latitude: 30.4700,
        longitude: -8.8700,
        description: "Plats aux produits d'argan. Situé à Taroudant - Près de la place Assarag. Note: 4.8/5",
        icone: "fa-utensils",
        categorie: "Restaurant"
    },
    {
        id: 15,
        nom: "Port de Pêche",
        type: "Restaurant",
        latitude: 30.4278,
        longitude: -9.5981,
        description: "Fruits de mer ultra-frais. Situé à Agadir - Port d'Agadir. Note: 4.6/5",
        icone: "fa-utensils",
        categorie: "Restaurant"
    },
    {
        id: 16,
        nom: "Riad Maryam",
        type: "Restaurant",
        latitude: 29.7167,
        longitude: -9.7167,
        description: "Tajines authentiques. Situé à Tiznit - Médina de Tiznit. Note: 4.5/5",
        icone: "fa-utensils",
        categorie: "Restaurant"
    }
];

// Initialisation de la carte
let map;
let markers = [];

// Fonction d'initialisation
function initMap() {
    // Centre de la carte sur la région Souss-Massa
    map = L.map('map').setView([30.5, -9.0], 8);

    // Ajout de la couche de tuiles OpenStreetMap
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '© OpenStreetMap contributors',
        maxZoom: 18,
    }).addTo(map);

    // Ajout des marqueurs pour chaque monument
    monuments.forEach(monument => {
        addMarker(monument);
    });

    // Vérifier si un restaurant est spécifié dans l'URL
    const urlParams = new URLSearchParams(window.location.search);
    const restaurantParam = urlParams.get('restaurant');
    
    if (restaurantParam) {
        // Trouver le restaurant correspondant par ID ou nom
        const restaurant = monuments.find(m => {
            // Essayer de trouver par ID
            if (!isNaN(restaurantParam) && m.id === parseInt(restaurantParam)) {
                return true;
            }
            // Essayer de trouver par nom (normalisé)
            const normalizedParam = restaurantParam.toLowerCase().replace(/\s+/g, '-');
            const normalizedName = m.nom.toLowerCase().replace(/\s+/g, '-');
            return normalizedName === normalizedParam;
        });
        
        if (restaurant) {
            // Centrer la carte sur le restaurant et ouvrir la popup
            setTimeout(() => {
                map.setView([restaurant.latitude, restaurant.longitude], 14);
                const restaurantMarker = markers.find(m => m.monument.id === restaurant.id);
                if (restaurantMarker) {
                    restaurantMarker.marker.openPopup();
                }
            }, 500);
        }
    }
}

// Fonction pour ajouter un marqueur
function addMarker(monument) {
    // Choix de l'icône selon la catégorie
    let iconColor = '#1e3a8a'; // Bleu par défaut
    let iconClass = 'fa-map-marker-alt';

    switch(monument.categorie) {
        case 'Ville':
            iconColor = '#2563eb';
            iconClass = 'fa-city';
            break;
        case 'Patrimoine':
            iconColor = '#d97706';
            iconClass = 'fa-monument';
            break;
        case 'Nature':
            iconColor = '#10b981';
            iconClass = 'fa-mountain';
            break;
        case 'Plage':
            iconColor = '#06b6d4';
            iconClass = 'fa-water';
            break;
        case 'Culture':
            iconColor = '#8b5cf6';
            iconClass = 'fa-museum';
            break;
        case 'Commerce':
            iconColor = '#f59e0b';
            iconClass = 'fa-store';
            break;
        case 'Restaurant':
            iconColor = '#ef4444';
            iconClass = 'fa-utensils';
            break;
    }

    // Création d'une icône personnalisée
    const customIcon = L.divIcon({
        className: 'custom-marker',
        html: `<div style="
            background-color: ${iconColor};
            width: 40px;
            height: 40px;
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            color: white;
            font-size: 18px;
            border: 3px solid white;
            box-shadow: 0 2px 8px rgba(0,0,0,0.3);
        "><i class="fas ${iconClass}"></i></div>`,
        iconSize: [40, 40],
        iconAnchor: [20, 20],
        popupAnchor: [0, -20]
    });

    // Création du marqueur
    const marker = L.marker([monument.latitude, monument.longitude], {
        icon: customIcon
    }).addTo(map);

    // Contenu de la popup
    const popupContent = `
        <div style="font-family: 'Inter', sans-serif; min-width: 250px;">
            <h3 style="color: #1e3a8a; margin-bottom: 0.5rem; font-size: 1.2rem;">
                <i class="fas ${monument.icone}" style="margin-right: 0.5rem; color: ${iconColor};"></i>
                ${monument.nom}
            </h3>
            <p style="color: #4b5563; margin: 0.25rem 0; font-size: 0.9rem;">
                <strong>Type:</strong> ${monument.type}
            </p>
            <p style="color: #4b5563; margin: 0.5rem 0; font-size: 0.9rem; line-height: 1.5;">
                ${monument.description}
            </p>
        </div>
    `;

    marker.bindPopup(popupContent);

    markers.push({
        marker: marker,
        monument: monument
    });
}

// Scroll to top button
const scrollTopBtn = document.getElementById('scrollTop');

window.addEventListener('scroll', () => {
    if (window.pageYOffset > 300) {
        scrollTopBtn.classList.add('show');
    } else {
        scrollTopBtn.classList.remove('show');
    }
});

scrollTopBtn.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// Initialisation quand le DOM est chargé
document.addEventListener('DOMContentLoaded', () => {
    initMap();
});
