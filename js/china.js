const China_cities = [
    { latitude: 23.13, longitude: 113.26, name: "Guangzhou", description: "Cantonese cuisine, trade, southern vibes", introduction:"Located in the heart of southern China, Guangzhou is a city where ancient culture and cutting-edge modernity exist side by side. Known globally for its Cantonese cuisine — think dim sum, roast duck, and seafood feasts — Guangzhou is also a major port and trading hub with a rich maritime history. Strolling through its leafy boulevards, you'll find a city that’s fast-paced yet rooted in deep tradition. From the iconic Canton Tower to bustling street markets, Guangzhou radiates southern charm, economic dynamism, and a love for food that defines its identity.",
        images:[{url:'./image/China/guangzhou1.jpg', alt:'Delicious Cantonese food'}, {url:'./image/China/guangzhou2.jpg', alt:'Delicious Cantonese food'}]
    },
    { latitude: 34.27, longitude: 108.95, name: "Xi'an", description: "Terracotta warriors, ancient capital, history", introduction:"Once the capital of over a dozen dynasties, Xi’an is a living museum of Chinese history and a must-visit for anyone fascinated by ancient civilizations. As the eastern terminus of the Silk Road, it has long been a cultural crossroads. Most famous for the awe-inspiring Terracotta Warriors, Xi’an also offers rich street food, towering city walls, and a timeless old town. Whether you're biking atop ancient fortifications or wandering through Muslim Quarter alleys filled with spice and steam, Xi’an makes history feel alive at every turn.",
        images:[{url:'./image/China/xian1.jpeg', alt:'Ancient bell tower'}, {url:'./image/China/xian2.jpeg', alt:'Ancient border wall'}]
    },
    { latitude: 37.46, longitude: 121.45, name: "Yantai", description: "Coastal city, wine, seafood heaven", introduction:"Perched on the northern coastline of Shandong Province, Yantai is a tranquil seaside city known for its breezy beaches, fresh seafood, and rising wine industry. Less frantic than China's megacities, it offers a relaxing retreat with a laid-back pace of life. Fishing harbors, lighthouses, and coastal promenades are part of its charm, while nearby vineyards and cherry orchards bring a splash of seasonal color. Yantai’s salty air and friendly rhythm make it a hidden gem for nature lovers and foodies alike.",
        images:[{url:'./image/China/yantai1.jpg', alt:'Coastal beauty'}, {url:'./image/China/yantai2.jpg', alt:'Coastal sunset'}]
    },
    { latitude: 26.65, longitude: 106.63, name: "Guiyang", description: "Misty hills, minority culture, nature", introduction:"Guiyang, the capital of Guizhou Province, is a city nestled among misty green mountains and famous for its cool climate and ethnic diversity. While not as well-known as some other Chinese cities, Guiyang is a treasure trove of traditional festivals, spicy food, and natural beauty. Its large minority populations — including the Miao and Dong — add vibrant cultural flair to the city’s streets and markets. With nearby waterfalls, caves, and karst landscapes, Guiyang offers a peaceful and authentic experience far from the tourist crowds.",
        images:[{url:'./image/China/guiyang1.jpg', alt:'Beautiful lake'}, {url:'./image/China/guiyang2.jpg', alt:'Minority culture'}]
    },
    { latitude: 28.23, longitude: 112.94, name: "Changsha", description: "Hot food, riverside city charm", introduction:"As the capital of Hunan Province, Changsha is a dynamic riverside city bursting with youthful spirit and fiery flavors. Known for its spicy cuisine — like stinky tofu and Hunan-style hotpot — it’s also a city that pulses with history, being the home of Mao Zedong’s early revolutionary days. Today, Changsha is alive with modern architecture, creative street art, neon-lit night markets, and an energetic local culture. Whether you’re exploring ancient academies or indulging in food adventures, Changsha leaves a lasting impression of heat, heritage, and heart.",
        images:[{url:'./image/China/changsha1.jpeg', alt:'Lovely sunset'}, {url:'./image/China/changsha2.jpeg', alt:'Riverside beauty'}]
    },
    { latitude: 23.35, longitude: 116.68, name: "Shantou", description: "Teochew roots, port city vibes", introduction:"Shantou sits along the eastern coast of Guangdong and proudly preserves the essence of Teochew culture — from language and music to cuisine and art. As a historic treaty port, it has seen waves of migration, both in and out, shaping its unique identity. Strolling through Shantou reveals colonial-era buildings, lively old districts, and aromatic street stalls serving Teochew congee and goose. With a strong overseas Chinese influence, the city bridges the past and present in ways that feel both nostalgic and refreshingly local.",
        images:[{url:'./image/China/shantou1.jpeg', alt:'Port city charm'}, {url:'./image/China/shantou2.jpeg', alt:'Teochew culture'}]
    },
    { latitude: 30.57, longitude: 104.07, name: "Chengdu", description: "Pandas, hotpot, chill city energy", introduction:"Famous worldwide as the hometown of giant pandas, Chengdu offers far more than its cuddly mascots. This Sichuanese capital is renowned for its slow pace of life, spicy cuisine, and deep artistic roots. Locals sip tea in bamboo courtyards, play mahjong in street-side lounges, and gather around bubbling hotpots that numb the tongue and warm the soul. Chengdu is also a gateway to Tibetan culture and stunning western Sichuan landscapes. It’s a city that invites you to slow down, savor life, and smile a little more.",
        images:[{url:'./image/China/chengdu1.jpg', alt:'Panda'}, {url:'./image/China/chengdu2.jpg', alt:'Cute panda'}]
    },
    { latitude: 30.27, longitude: 120.16, name: "Hangzhou", description: "West Lake, tea, silk beauty", introduction:"Poetically referred to as “Heaven on Earth,” Hangzhou captivates visitors with its timeless beauty and cultural elegance. At the heart of the city lies West Lake, a tranquil oasis surrounded by temples, pagodas, and willow-lined pathways that have inspired poets for centuries. Beyond the lake, tea plantations roll across the hills, producing the famed Longjing (Dragon Well) tea. Hangzhou also boasts modern vibrancy with tech innovation and sleek urban developments, yet it never loses its poetic soul or classical grace.",
        images:[{url:'./image/China/hangzhou1.jpeg', alt:'West Lake'}, {url:'./image/China/hangzhou2.jpeg', alt:'Leifeng tower'}]
    },
    { latitude: 31.23, longitude: 121.47, name: "Shanghai", description: "Skyscrapers, finance, fashion, global hub", introduction:"Shanghai is the beating heart of modern China — a dazzling metropolis that never sleeps. With its futuristic skyline on the Pudong side and colonial heritage in the Bund district, the city is a blend of East and West, past and future. It’s a place where high fashion meets street food, where global finance shares space with art districts and jazz bars. Walk its bustling streets and you’ll see everything from skyscrapers and shopping arcades to quiet alleyways and noodle stalls. Shanghai is a symbol of ambition, diversity, and reinvention.",
        images:[{url:'./image/China/shanghai1.jpeg', alt:'Sunset'}, {url:'./image/China/shanghai2.jpeg', alt:'Sunset by lake'}]
    },
    { latitude: 25.61, longitude: 100.27, name: "Dali", description: "Mountains, lakes, laid-back backpacker town", introduction:"Nestled between the Cangshan Mountains and Erhai Lake, Dali is a picturesque town in Yunnan that has become a magnet for backpackers, artists, and nature lovers. Home to the Bai ethnic group, Dali is known for its laid-back vibe, traditional architecture, and breathtaking views. Its old town offers charming cobblestone streets, local crafts, and cafes that encourage lingering. Whether hiking, biking, or simply soaking in the scenery, Dali is where time slows and creativity flows freely.",
        images:[{url:'./image/China/dali1.jpeg', alt:'Lake views'}, {url:'./image/China/dali2.jpeg', alt:'Lakeside beauty'}]
    },
    { latitude: 24.88, longitude: 102.83, name: "Kunming", description: "Spring city, flowers, ethnic diversity", introduction:"Known as the 'City of Eternal Spring' for its pleasant climate, Kunming is a vibrant and diverse capital of Yunnan Province. The city thrives with a mosaic of ethnic cultures, each bringing its own traditions, music, and cuisine. Botanical gardens and flower markets add splashes of color, while Stone Forest and nearby highland lakes invite exploration beyond the city. Kunming balances natural beauty and urban energy in a way that feels refreshingly harmonious.",
        images:[{url:'./image/China/kunming1.jpeg', alt:'Spring city'}, {url:'./image/China/kunming2.jpeg', alt:'Nature beauty'}]
    },
    { latitude: 24.26, longitude: 118.04, name: "Xiamen", description: "Seaside city, colonial past charm",  introduction:"Xiamen is a coastal city in southeastern China where maritime history meets modern leisure. With colonial-era architecture, palm-lined beaches, and the popular Gulangyu Island just offshore, Xiamen charms visitors with its laid-back elegance. The city’s strong Minnan culture is evident in its language, music, and beloved local snacks like oyster omelets. Xiamen is a place where you can wander past 19th-century villas in the morning and sip coffee by the sea in the afternoon — all with a gentle sea breeze on your face.",
        images:[{url:'./image/China/xiamen1.jpg', alt:'Seaside views'}, {url:'./image/China/xiamen2.jpeg', alt:'Colonial charm'}]
    },
    { latitude: 28.68, longitude: 115.86, name: "Nanchang", description: "Revolution history, growing urban center", introduction:"As the capital of Jiangxi Province, Nanchang is often overlooked but holds a special place in modern Chinese history as the birthplace of the People’s Liberation Army. Today, it’s a rapidly developing city with striking bridges, shimmering skyscrapers, and a revitalized urban center. With the Gan River flowing through its heart and numerous parks and cultural spots, Nanchang offers a mix of revolutionary pride and rising cosmopolitanism that reflects China’s broader transformation.",
        images:[{url:'./image/China/nanchang.jpeg', alt:'Revolution history'}]
    },
    { latitude: 39.90, longitude: 116.41, name: "Beijing", description: "Capital city, Great Wall, heritages", introduction:"Beijing is the cultural and political epicenter of China, steeped in thousands of years of imperial history. From the majestic Forbidden City and Tiananmen Square to the hutongs and the Great Wall beyond, Beijing is a city where history breathes through every alley. But it’s also a modern capital with a thriving arts scene, world-class dining, and high-speed connections. Beijing is a city of contrasts — where ancient temples stand beside glass towers, and where tradition fuels innovation every day.",
        images:[{url:'./image/China/beijing1.jpg', alt:"Tian'anmeng square"}]
    }
];



var map = L.map('map').setView([34.32, 100], 4.);
L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

China_cities.map((city, index) => {
    const marker = L.marker([city.latitude, city.longitude]).addTo(map);
    marker.bindPopup(`<b>${city.name}</b><br>${city.description}`);

    marker.on('click', (e) => {
        document.querySelector('#gallery').innerHTML = `<p>${city.introduction}</p>`
        city.images.map((image, index) => {
            document.querySelector('#gallery').innerHTML += `<img src=${image.url} alt=${image.alt} >`;
        });
    });
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