const map = L.map("map").setView([0, 0], 15)

L.tileLayer('https://api.maptiler.com/maps/streets-v2/{z}/{x}/{y}.png?key=0BVAkBuXkBXoegHRFQJ2', {
    attribution: '<a href="https://www.maptiler.com/copyright/" target="_blank">&copy; MapTiler</a> <a href="https://www.openstreetmap.org/copyright" target="_blank">&copy; OpenStreetMap contributors</a>'
}).addTo(map)

const marker = L.marker([0,0]).addTo(map)
marker.bindPopup("Hey , You Are here currently!")
marker.bindTooltip("Hey , You Are here currently!")

if (navigator.geolocation) {
    console.log("geoloaction is supported by this browser.")

    navigator.geolocation.getCurrentPosition((pos) => {
        const lat = pos.coords.latitude
        const lng = pos.coords.longitude
        // console.log(lat,lng)
        map.setView([lat,lng],15)
        marker.setLatLng([lat,lng])
    },(error)=>{
        alert(`Error fetching location : ${error}`)
    }
)
} else {
    console.error("not supported..")
}


