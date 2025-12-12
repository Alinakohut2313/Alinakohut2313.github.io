
let map = L.map('map').setView([48.9226, 24.7111], 13);


L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: ' OpenStreetMap'
}).addTo(map);


function startTracking() {
    if (!navigator.geolocation) {
        alert("Геолокація не підтримується вашим браузером");
        return;
    }

    
    navigator.geolocation.watchPosition(updateLocation, (err) => {
        alert("Помилка або немає доступу до геоданих!");
    });
}


function updateLocation(position) {
    const lat = position.coords.latitude;
    const lng = position.coords.longitude;
    const time = new Date().toLocaleTimeString(); 

    map.setView([lat, lng], 16);

    
    L.marker([lat, lng]).addTo(map)
        .bindPopup(`<b>Ви тут!</b><br>Координати: ${lat.toFixed(4)}, ${lng.toFixed(4)}<br>Час: ${time}`)
        .openPopup();
}


function goToDestination() {
    
    let lat = document.getElementById('latInput').value;
    let lng = document.getElementById('lngInput').value;

 
    if (lat === "" || lng === "") {
        alert("Введіть координати!");
        return;
    }

    
    map.flyTo([lat, lng], 14);


    L.marker([lat, lng]).addTo(map)
        .bindPopup("<b>Пункт призначення</b>")
        .openPopup();
}