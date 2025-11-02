const myicon = L.icon({
    iconUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png",
    shadowUrl:"https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png",
    iconSize: [25, 41], 
    iconAnchor: [12, 41], 
    shadowAnchor : [12,41],
    popupAnchor: [1, -34]
})

const cafeicon = L.icon({
    iconUrl : "https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-red.png",
    shadowUrl : "https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-shadow.png",
    iconSize:[25,41],
    iconAnchor:[12,41],
    shadowAnchor:[12,41],
    popupAnchor:[1,-34]
})

let userLat = 0;
let userLng = 0;

const map = L.map('map').setView([0, 0], 8)
const marker = L.marker([0, 0],{ icon:myicon}).addTo(map)

marker.bindPopup("Current position")
marker.bindTooltip("You are here")

L.tileLayer('https://api.maptiler.com/maps/streets-v2/{z}/{x}/{y}.png?key=0BVAkBuXkBXoegHRFQJ2', {
    attribution: '<a href="https://www.maptiler.com/copyright/" target="_blank">&copy; MapTiler</a> <a href="https://www.openstreetmap.org/copyright" target="_blank">&copy; OpenStreetMap contributors</a>'
}).addTo(map)

if (navigator.geolocation) {
    // console.log("Geolocation available...")

    navigator.geolocation.getCurrentPosition((pos) => {
        userLat = pos.coords.latitude;
        userLng = pos.coords.longitude;

        map.setView([userLat, userLng], 13)
        marker.setLatLng([userLat, userLng])

        const nominatimUrl = `https://nominatim.openstreetmap.org/search?q=cafe&format=json&bounded=1&viewbox=${userLng - 0.05},${userLat - 0.05},${userLng + 0.05},${userLat + 0.05}&limit=50`;

        async function getcafedata(){
            try {
                const response = await fetch(nominatimUrl)
                const data = await response.json()
                console.log(data)
                addcafemarkers(data)
            } 
            catch(error) {
                console.error(`Error occured: ${error.message}`)
            } 
            finally {
                console.log("Performed cafe data function.")
            }
        }

        getcafedata()

    }, (error) => {
        console.error(`Error while getting live location : ${error.message}`)
    });

} else {
    console.error("This browser doesn't support Live Location !!")
}

// Center button functionality
document.addEventListener('DOMContentLoaded', function() {
    const centerBtn = document.getElementById('center-btn');
    if (centerBtn) {
        centerBtn.addEventListener('click', function() {
            if (userLat !== 0 && userLng !== 0) {
                map.setView([userLat, userLng], 13);
                marker.setLatLng([userLat, userLng]);
            }
        });
    }
});

// Cafe marker addition function
function addcafemarkers(cafes){
    if(cafes.length == 0){
        console.log("There is no cafe!")
        return 
    }

    cafes.forEach(cafe =>{
        let cafe_lat = cafe.lat
        let cafe_lng = cafe.lon
        let cafe_display_name = cafe.display_name
        let cafe_name = cafe.name

        L.marker([cafe_lat,cafe_lng],{icon:cafeicon}).addTo(map).bindPopup(`${cafe_display_name}`).bindTooltip(`${cafe_name}`)
    })
}