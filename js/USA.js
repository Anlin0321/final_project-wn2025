const US_cities = [
    { latitude: 41.95, longitude: -87.67, name: "Chicago", description: "Skyscrapers, lakefront, deep-dish pizza", introduction:"Chicago, the Windy City, stands proudly on the shores of Lake Michigan, boasting a skyline that rivals any in the world. Known for its deep-dish pizza, jazz and blues heritage, and fierce sports culture, the city pulses with energy and creativity. From Millennium Park and the iconic Bean to historic neighborhoods like Hyde Park and Wicker Park, Chicago blends modern urban living with rich Midwestern roots. It’s a city where bold architecture, lakefront strolls, and world-class museums create a dynamic cultural experience all year round.",
        images:[{url:'./image/US/chicago1.jpeg', alt:'Skyscrapers and lakefront'}, {url:'./image/US/chicago2.jpeg', alt:'Deep-dish pizza'}]
    },
    { latitude: 34.03, longitude: -118.15, name: "LA", description: "Hollywood, palm trees, sprawling city", introduction:"Los Angeles is a sprawling, sun-soaked metropolis where dreams are made and stars are born. As the heart of the global entertainment industry, LA is home to Hollywood, iconic studios, and countless creative minds. But beyond the glitz, you’ll find laid-back beach towns, world-class hiking in the hills, and diverse communities that add spice to every neighborhood. Whether you're watching surfers in Venice, catching a show in Downtown, or just cruising under palm trees, LA’s spirit is bold, eclectic, and endlessly inspiring.",
        images:[{url:'./image/US/la1.jpeg', alt:'Palm trees and cityscape'}, {url:'./image/US/la2.jpeg', alt:'Griffith view'}]
    },
    { latitude: 36.19, longitude: -115.18, name: "Las Vegas", description: "Casinos, neon lights, desert fun", introduction:"Las Vegas dazzles in the heart of the Nevada desert, a neon-lit oasis of entertainment, luxury, and extravagance. Famous for its world-class casinos, vibrant nightlife, and over-the-top performances, it’s a city that thrives on spectacle. But beyond the Strip lies a quieter beauty — stunning desert landscapes, Red Rock Canyon, and a growing art scene. Vegas is a place of reinvention, where visitors come to escape, indulge, and immerse themselves in a world unlike anywhere else.",
        images:[{url:'./image/US/lasvegas1.jpeg', alt:'Welcome to Las Vegas sign'}, {url:'./image/US/lasvegas2.jpeg', alt:'The sphere'}]
    },
    // { latitude: 29.45, longitude: -95.21, name: "Houston", description: "Space Center, diversity, big energy", introduction:"Houston is Texas-sized in every way — a sprawling metropolis of culture, cuisine, and innovation. It’s one of the most diverse cities in the U.S., where you can find everything from award-winning Tex-Mex to global fusion food on a single block. Known for its contributions to space exploration through NASA and a thriving energy sector, Houston also surprises with green parks, thriving art districts, and a strong sense of community. It’s a place where big ideas and warm hospitality meet.",
    //     images:[{url:'./image/US/houston1.jpeg', alt:'NASA Space Center'}, {url:'./image/US/houston2.jpeg', alt:'City skyline'}]
    // },
    // { latitude: 29.43, longitude: -98.49, name: "San Antonio", description: "Alamo, riverwalk, Tex-Mex charm", introduction:"Rich with history and bursting with life, San Antonio offers a unique blend of Texan pride and Spanish colonial heritage. At its heart is the famous Alamo and the scenic River Walk — a lively promenade lined with restaurants, music, and culture. From vibrant festivals to historic missions and delicious tacos, the city invites exploration at every corner. San Antonio maintains a slower, more soulful rhythm that celebrates its multicultural roots and warm, welcoming spirit.",
    //     images:[{url:'./image/US/sanantonio1.jpeg', alt:'Alamo'}, {url:'./image/US/sanantonio2.jpeg', alt:'San Antonio Riverwalk'}]
    // },
    // { latitude: 32.72, longitude: -117.16, name: "San Diego", description: "Beaches, sunshine, laid-back vibes", introduction:"With its perfect year-round weather, miles of coastline, and relaxed lifestyle, San Diego is a coastal paradise that charms at first glance. Whether you're soaking up sun in La Jolla, exploring the world-famous San Diego Zoo, or surfing in Pacific Beach, there's always something to enjoy outdoors. The city is also home to a vibrant craft beer scene, a strong military presence, and cultural gems like Balboa Park. It’s a place where nature, city life, and chill vibes coexist beautifully.",
    //     images:[{url:'./image/US/sandiego1.jpeg', alt:'San Diego beach'}, {url:'./image/US/sandiego2.jpeg', alt:'Laid-back city'}]
    // },
    { latitude: 40.71, longitude: -74.01, name: "New York City", description: "Skyscrapers, hustle, global capital", introduction:"New York City is a world unto itself — fast-paced, fiercely independent, and endlessly iconic. From the towering skyscrapers of Manhattan to the hip enclaves of Brooklyn, every block has a story. It’s a global capital of finance, fashion, media, and the arts, where diversity is the norm and ambition fills the air. Whether you’re catching a Broadway show, eating from a street cart, or strolling through Central Park, NYC never fails to electrify. It’s a city that never sleeps and never stops evolving.",
        images:[{url:'./image/US/nyc.jpeg', alt:'NYC skyline'}]
    },
    { latitude: 42.44, longitude: -76.50, name: "Ithaca", description: "Waterfalls, campus town, nature charm", introduction:"Nestled in the heart of New York’s Finger Lakes region, Ithaca is a charming college town known for its stunning natural beauty and progressive spirit. Home to Cornell University and Ithaca College, it’s a haven for students, scholars, and nature lovers alike. With over 100 waterfalls, lush trails, and a passionate local food movement, Ithaca is as intellectually vibrant as it is environmentally conscious. It’s the kind of place that invites deep thought, quiet hikes, and lakeside sunsets.",
        images:[{url:'./image/US/ithaca1.jpeg', alt:'College town feel'}, {url:'./image/US/ithaca2.jpeg', alt:'Ithaca waterfalls'}]
    },
    { latitude: 33.50, longitude: -116.32, name: "Palm Spring", description: "Desert oasis, mid-century, chill", introduction:"Palm Springs is a desert retreat where mid-century modern design meets luxury and relaxation. Long a favorite getaway for Hollywood stars, the city offers stylish resorts, palm-lined boulevards, and an artsy downtown. The surrounding desert landscape — with its striking mountains and cactus-studded valleys — creates a serene backdrop for hiking, golfing, and stargazing. With year-round sunshine and a retro-cool aesthetic, Palm Springs is the ultimate destination for unwinding in vintage glamour.",
        images:[{url:'./image/US/palmspring1.jpeg', alt:'Stars'}, {url:'./image/US/palmspring2.jpeg', alt:'Menroe statue'}]
    },
    { latitude: 42.16, longitude: -83.44, name: "Ann Arbor", description: "University town, trees, cozy vibe", introduction:"Ann Arbor is a vibrant college town with a soul rooted in education, creativity, and community. Anchored by the University of Michigan, it blends intellectual energy with small-town charm. The downtown buzzes with indie bookstores, craft breweries, farmers markets, and a rich arts scene. Surrounded by nature and filled with youthful spirit, Ann Arbor feels both grounded and forward-looking — a place where curiosity thrives and conversations are never far from a cozy coffee shop.",
        images:[{url:'./image/US/annarbor1.jpeg', alt:'Fall trees in Ann Arbor'}, {url:'./image/US/annarbor2.jpeg', alt:'Campus atmosphere'}]
    }
];

var map = L.map('map').setView([39.50, -98.35], 4.);
L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

US_cities.map((city, index)=>{
    const marker = L.marker([city.latitude, city.longitude]).addTo(map);
    marker.bindPopup(`<b>${city.name}</b><br>${city.description}`);
    marker.on('click', (e)=>{
        document.querySelector('#gallery').innerHTML = `<p>${city.introduction}</p>`
        city.images.map((image, index)=>{
            document.querySelector('#gallery').innerHTML += `<img src=${image.url} alt=${image.alt} >`;
        })
    })
})


// var circle = L.circle([42.280855, -83.720949], {
//     color: 'yellow',
//     fillColor: '#f03',
//     fillOpacity: 0.5,
//     radius: 500
// }).addTo(map);

// var polygon = L.polygon([
//     [42.278495, -83.740625],
//     [42.274891, -83.740604],
//     [42.275081, -83.73584]
// ]).addTo(map);

// marker.bindPopup("<b>North Quad</b><br>Taking SI579 here").openPopup();
// circle.bindPopup("I am the ARB.");
// polygon.bindPopup("I am the diag.");

// var popup = L.popup()
//     .setLatLng([42.281844, -83.737428])
//     .setContent("This is where I am")
//     .openOn(map);


var popup = L.popup();

function onMapClick(e) {
    popup
        .setLatLng(e.latlng)
        .setContent("You clicked the map at " + e.latlng.toString())
        .openOn(map);
}

map.on('click', onMapClick);
