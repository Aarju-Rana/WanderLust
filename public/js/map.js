  const map = L.map('map').setView([29.9457, 78.1642], 13);

    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; OpenStreetMap contributors'
    }).addTo(map);

    L.marker([29.9457, 78.1642])
    .addTo(map)
    .openPopup(); 
    
    
    

