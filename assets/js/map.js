document.addEventListener('DOMContentLoaded', () => {
    const map = L.map('map-container').setView([0, 0], 2);

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; OpenStreetMap contributors'
    }).addTo(map);

    // Example data points
    const countries = [
        { name: 'USA', coords: [37.0902, -95.7129] },
        { name: 'Germany', coords: [51.1657, 10.4515] },
        { name: 'Japan', coords: [36.2048, 138.2529] }
    ];

    countries.forEach(country => {
        L.marker(country.coords).addTo(map).bindPopup(country.name);
    });
});
