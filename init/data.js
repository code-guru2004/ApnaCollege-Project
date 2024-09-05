const sample = [
    {
        title: "The Hans Coco Palms",
        description: "Set in Puri, within 100 metres of Golden Beach and 2 km of Puri Beach, Hotel Subham Beach inn!",
        img: "https://media.istockphoto.com/id/175319885/photo/swimming-pool.jpg?s=1024x1024&w=is&k=20&c=1UX66a_QYcV_hsZvuuxS17C0T0DcuYv7V2O7q9XwQy4=",
        price: 150000,
        location: "New York",
        country: "USA"
    },
    {
        title: "Villa Verona",
        description: "An exquisite antique vase from the Qing Dynasty.",
        img: "https://images.pexels.com/photos/1134176/pexels-photo-1134176.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        price: 300,
        location: "London",
        country: "UK"
    },
    {
        title: "Toscana Terrace",
        description: "A contemporary painting by a well-known artist.",
        img: "https://images.pexels.com/photos/594077/pexels-photo-594077.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        price: 500,
        location: "Paris",
        country: "France"
    },
    {
        title: "Golden Gamble",
        description: "A stylish and durable leather backpack perfect for everyday use.",
        img: "https://images.pexels.com/photos/261395/pexels-photo-261395.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        price: 80,
        location: "Berlin",
        country: "Germany"
    },
    {
        title: "Hotel Chanoud Garh",
        description: "Walk to Chanoud Village, heritage walk, Jeep Safari, a glimpse into the lives of Rabaris, and a variety of dining locations like Moti Mahal, Mor Chowk, Badal Mahal, and Hawa Mahal.",
        img: "https://images.pexels.com/photos/1488515/pexels-photo-1488515.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        price: 200,
        location: "Toronto",
        country: "Canada"
    },
    {
        title: "Taj Lake Palace",
        description: "The Jiva Spa boat, city tour in a vintage car, and resident-only restaurants.",
        img: "https://images.pexels.com/photos/9119733/pexels-photo-9119733.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        price: 150,
        location: "Taj Lake Palace, Pichola, Udaipur, Rajasthan 313001",
        country: "India"
    },
    {
        title: "The Leela Palace Udaipur",
        description: "Folk performances and music, fine-dining restaurant Sheesh Mahal, romantic boat cruise, and spa treatment.",
        img: "https://images.pexels.com/photos/1287460/pexels-photo-1287460.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        price: 300,
        location: "Piplia Haveli Outside Chand Pole, Udaipur – 313001, Rajasthan, India",
        country: "UK"
    },
    {
        title: "The Oberoi Udaivilas",
        description: "Stunning views of the Jag Mandir and City Palace, live music and traditional performances, yoga sessions, and spa treatment.",
        img: "https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        price: 500,
        location: "HMGC+VVV, Badi-Gorela-Mulla Talai Rd, Haridas Ji Ki Magri, Pichola, Udaipur, Rajasthan 313001",
        country: "France"
    },
    {
        title: "Radisson Blu Plaza Delhi Airport",
        description: "On-site restaurants and bars, spa, fitness center, yoga room, and outdoor pool.",
        img: "https://images.pexels.com/photos/2873639/pexels-photo-2873639.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        price: 80,
        location: "	Nh 8, near Mahipalpur Extension, Block R, Mahipalpur Village, Mahipalpur, New Delhi, Delhi 110037",
        country: "Germany"
    },
    {
        title: " Taj Resort & Convention Centre, Goa",
        description: "Club rooms with club lounge, conferencing venue, private cinema, awesome view of the sea, and tropical flavor.",
        img: "https://images.pexels.com/photos/2598638/pexels-photo-2598638.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        price: 200,
        location: "Vainguinim Beach, Dona Paula, Panaji, Goa 403004",
        country: "Canada"
    },
    {
        title: "Taj Aravali Resort & Spa",
        description: "Spa treatment, swimming pool, and stunning view of the Fateh Sagar Lake and Aravali ranges.",
        img: "https://media.istockphoto.com/id/173701423/photo/sacramento-downtown.jpg?s=1024x1024&w=is&k=20&c=3o_rQqSKq7DGfjxvjzxsMF9e261KJDROg4xxT0u3ghk=",
        price: 150,
        location: "	Near, 1, Kheemach Kheda, Kodiyat Main Rd, Forest Chowki, Bujra, Rajasthan 313031",
        country: "USA"
    },
    {
        title: "The Westin Gurgaon, New Delhi",
        description: "Heavenly spa, inspiring events, and season tastes.",
        img: "https://images.pexels.com/photos/16116486/pexels-photo-16116486/free-photo-of-top-view-of-a-tourist-resort.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        price: 300,
        location: "1 Mg Road, Sector 29, New Delhi, Ncr, Gurugram, Haryana 122002",
        country: "UK"
    },
    {
        title: "Modern Art Painting",
        description: "A contemporary painting by a well-known artist.",
        img: "https://images.pexels.com/photos/16116489/pexels-photo-16116489/free-photo-of-high-angle-view-of-a-tourist-resort.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        price: 500,
        location: "Paris",
        country: "France"
    },
    {
        title: "Leather Backpack",
        description: "A stylish and durable leather backpack perfect for everyday use.",
        img: "https://images.pexels.com/photos/14504291/pexels-photo-14504291.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        price: 80,
        location: "Berlin",
        country: "Germany"
    },
    {
        title: "Niraamaya Retreats, Surya Samudra Kovalam",
        description: "A beautifully handcrafted wooden table, ideal for any dining room.",
        img: "https://images.pexels.com/photos/17061346/pexels-photo-17061346/free-photo-of-aerial-view-of-the-grand-oasis-cancun-resort-cancun-mexico.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        price: 200,
        location: "P.O, Pulinkudi Rd, Vizhinjam, Mullur, Kazhivoor, Kerala 695521",
        country: "Canada"
    }, 
    {
        title: "Trident, Udaipur",
        description: "A classic vintage camera from the 1980s, still in excellent condition.",
        img: "https://images.pexels.com/photos/1082326/pexels-photo-1082326.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        price: 150,
        location: "Malla Talai Chowk, Trident Rd, near Pichola, Haridas Ji Ki Magri, Udaipur, Rajasthan 313001",
        country: "USA"
    },
    {
        title: "Shangri-La Eros, New Delhi",
        description: "Shangri-La Eros is a 5-star hotel in Delhi offering the utmost comfort to guests. Located just a few minutes from the metro station, the hotel has 320 rooms & suites, prime locations within proximity, and 5 award-winning restaurants and bars. All rooms provide a spectacular view of the city.",
        img: "https://images.pexels.com/photos/24805054/pexels-photo-24805054/free-photo-of-view-of-the-terrace-with-a-swimming-pool-at-the-resort.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        price: 300,
        location: "19, Ashoka Rd, Janpath, Connaught Place, New Delhi, Delhi 110001",
        country: "UK"
    },
    {
        title: " ITC Narmada, Gujarat",
        description: "The suites are beautifully designed with marble chandeliers, leather loungers, freestanding bathtubs, and nature-inspired murals.",
        img: "https://images.pexels.com/photos/13012214/pexels-photo-13012214.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        price: 500,
        location: "Survey # 104 A, Judges Bunglow Rd, I I M, Vastrapur, Ahmedabad, Gujarat 380015",
        country: "France"
    },
    {
        title: "Dolkhar, Leh",
        description: "A stylish and durable leather backpack perfect for everyday use.",
        img: "https://images.pexels.com/photos/14213318/pexels-photo-14213318.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
        price: 80,
        location: "Lower Tukcha Rd, opposite Community Hall, Leh, Ladakh 194101",
        country: "Germany"
    },
    {
        title: "JW Marriott Jaipur Resort and Spa",
        description: "Numerous popular tourist attractions like Amber Fort, relaxing spa sessions, and on-site restaurants.",
        img: "https://images.pexels.com/photos/14025905/pexels-photo-14025905.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
        price: 200,
        location: "Ashram Marg, Near, Jawahar Circle, Jaipur, Rajasthan 302015",
        country: "Canada"
    },
    {
        title: "The Hans Coco Palms",
        description: "Set in Puri, within 100 metres of Golden Beach and 2 km of Puri Beach, Hotel Subham Beach inn!",
        img: "https://images.pexels.com/photos/16010609/pexels-photo-16010609/free-photo-of-facade-of-one-of-the-buildings-in-the-fiesta-americana-hotel-in-cuba.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
        price: 150000,
        location: "New York",
        country: "USA"
    },
    {
        title: "Villa Verona",
        description: "An exquisite antique vase from the Qing Dynasty.",
        img: "https://images.pexels.com/photos/8270207/pexels-photo-8270207.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
        price: 300,
        location: "London",
        country: "UK"
    },
    {
        title: "Toscana Terrace",
        description: "A contemporary painting by a well-known artist.",
        img: "https://images.pexels.com/photos/13122004/pexels-photo-13122004.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        price: 500,
        location: "Paris",
        country: "France"
    },
    {
        title: "The Hans Coco Palms",
        description: "Set in Puri, within 100 metres of Golden Beach and 2 km of Puri Beach, Hotel Subham Beach inn!",
        img: "https://images.pexels.com/photos/59924/pexels-photo-59924.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        price: 150000,
        location: "New York",
        country: "USA"
    },
    {
        title: "Villa Verona",
        description: "An exquisite antique vase from the Qing Dynasty.",
        img: "https://images.pexels.com/photos/26859049/pexels-photo-26859049/free-photo-of-luxurious-bedroom-with-hot-tub-and-balcony-in-hotel.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        price: 300,
        location: "London",
        country: "UK"
    },
    {
        title: "Toscana Terrace",
        description: "A contemporary painting by a well-known artist.",
        img: "https://images.pexels.com/photos/13871326/pexels-photo-13871326.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        price: 500,
        location: "Paris",
        country: "France"
    },
];

module.exports = {data : sample};