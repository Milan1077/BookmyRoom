// Nepal-based property data
const kathmanduProperties = [
    {
        title: "Hotel Yak & Yeti, Kathmandu",
        price: "रु 15,000 for 2 nights",
        rating: "4.92",
        image: "images/1.jpg",
        favorite: true
    },
    {
        title: "Traditional Comfort, Kathmandu",
        price: "रु 12,500 for 2 nights",
        rating: "4.95",
        image: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=400&h=250&fit=crop",
        favorite: true
    },
    {
        title: "Hotel Shanker, Kathmandu",
        price: "रु 10,000 for 2 nights",
        rating: "4.97",
        image: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=400&h=250&fit=crop",
        favorite: false
    },
    {
        title: "Kumari Boutique Hotel, Kathmandu",
        price: "रु 8,500 for 2 nights",
        rating: "5.0",
        image: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=400&h=250&fit=crop",
        favorite: true
    }
];

const pokharaProperties = [
    {
        title: "Temple Tree Resort, Pokhara",
        price: "रु 13,000 for 2 nights",
        rating: "4.88",
        image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=400&h=250&fit=crop",
        favorite: false
    },
    {
        title: "Fish Tail Lodge, Pokhara",
        price: "रु 14,500 for 2 nights",
        rating: "4.92",
        image: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=400&h=250&fit=crop",
        favorite: false
    },
    {
        title: "Hotel Barahi, Pokhara",
        price: "रु 9,800 for 2 nights",
        rating: "4.85",
        image: "https://images.unsplash.com/photo-1581977012607-4091712d36f9?w=400&h=250&fit=crop",
        favorite: false
    }
];

const chitwanProperties = [
    {
        title: "Green Park Chitwan",
        price: "रु 11,000 for 2 nights",
        rating: "4.81",
        image: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=400&h=250&fit=crop",
        favorite: false
    },
    {
        title: "Barahi Jungle Lodge, Chitwan",
        price: "रु 16,000 for 2 nights",
        rating: "4.90",
        image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=400&h=250&fit=crop",
        favorite: false
    }
];

const mustangProperties = [
    {
        title: "Royal Mustang Resort, Mustang",
        price: "रु 18,000 for 2 nights",
        rating: "4.97",
        image: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=400&h=250&fit=crop",
        favorite: true
    },
    {
        title: "Mystic Mountain, Mustang",
        price: "रु 20,000 for 2 nights",
        rating: "4.93",
        image: "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=400&h=250&fit=crop",
        favorite: true
    }
];

// Render property cards to the page
function renderProperties(properties, containerId) {
    const container = document.getElementById(containerId);
    if (!container) return;
    container.innerHTML = properties.map(property => `
        <div class="property-card hotel-link" onclick="window.location.href='pages/login.html'">
            <img class="property-image" src="${property.image}" alt="${property.title}">
            ${property.favorite ? '<div class="guest-favorite">Guest favorite</div>' : ''}
            <button class="favorite-btn">${property.favorite ? '❤️' : '🤍'}</button>
            <div class="property-info">
                <div class="property-title">${property.title}</div>
                <div class="property-price">
                    <span class="price">${property.price}</span>
                    <span class="rating">⭐ ${property.rating}</span>
                </div>
            </div>
        </div>
    `).join('');
}

// Render all property sections on DOMContentLoaded
document.addEventListener('DOMContentLoaded', function() {
    renderProperties(kathmanduProperties, 'kathmandu-properties');
    renderProperties(pokharaProperties, 'pokhara-properties');
    renderProperties(chitwanProperties, 'chitwan-properties');
    renderProperties(mustangProperties, 'mustang-properties');
});
