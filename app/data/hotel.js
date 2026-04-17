/* --- HOTEL DATA SOURCE --- */
export const HOTEL_DATA = {
  hotel: {
    name: "Walnut Village Resort",
    tagline: "Where the Himalayas Meet Your Doorstep",
    description: "Walnut Village Resort sits in Movera, one of Pahalgam's quietest and most scenic villages, surrounded by walnut groves and the sound of the Lidder River. With 16 thoughtfully appointed rooms, a restaurant, lush garden, and a hot tub to soak in after a day in the mountains, the resort offers a rare combination of comfort and genuine Kashmiri character. Whether you're here for the Betaab Valley, the Baisaran meadows, or the Amarnath Yatra, Walnut Village is your base for all of it.",
    website: "https://www.walnutvillageresort.com",
    social_media: { instagram: "instagram.com/walnutresorts", facebook: null }
  },
  location: {
    address: "Awura Road, Walnut Village Resort, Movera, Pahalgam, Anantnag, Jammu & Kashmir 192401, India",
    google_maps: "https://maps.google.com/?q=Walnut+Village+Resort+Pahalgam",
    google_pin_link: "https://maps.google.com/?q=Walnut+Village+Resort+Pahalgam",
    attractions: [
      { name: "Baisaran Valley", dist: "~3 km" },
      { name: "Betaab Valley", dist: "~10 km" },
      { name: "Aru Valley", dist: "~11 km" },
      { name: "Rafting Point (Lidder River)", dist: "~1 km" },
    ],
  },
  contact: {
    phones: ["+91 88997 79869", "+91 88999 01175"],
    email: "reservations@walnutvillageresort.com",
    address: "Awura Road, Walnut Village Resort, Movera, Pahalgam, Anantnag, Jammu & Kashmir 192401, India",
  },
  rooms: [
    {
      id: "deluxe-room",
      type: "Deluxe Room",
      description: "Spacious and warmly furnished with Himalayan views, a private balcony, flat-screen TV, electric kettle, and an en-suite bathroom with free toiletries.",
      features: [
        "Mountain view",
        "Air conditioning",
        "Free WiFi"
      ],
      image: "/images/rooms/deluxe-1.jpeg",
    },
    {
      id: "river-view-room",
      type: "Riverview Room",
      description: "Generously sized for families, with mountain views, multiple sleeping configurations, and all modern comforts.",
      features: [
        "Mountain view",
        "Private balcony",
        "Air conditioning",
        "Free WiFi"
      ],
      image: "/images/rooms/riverview-1.jpeg",
    },
    {
      id: "suite",
      type: "Suite",
      description: "The resort's premium offering — extra space, premium furnishings, and sweeping terrace views of the Lidder Valley.",
      features: [
        "Panoramic mountain view",
        "Large private lounge",
        "Massive Seating area",
        "Free WiFi"
      ],
      image: "/images/rooms/premium-1.jpeg",
    },
  ],
  amenities: [
    { name: "Free Wi-Fi", icon: "Wifi" },
    { name: "Free Parking", icon: "Car" },
    { name: "24-Hour Front Desk", icon: "Clock" },
    { name: "On-site Restaurant", icon: "Coffee" },
    { name: "Room Service", icon: "Phone" },
    { name: "Family Rooms", icon: "Shield" },
    { name: "Heating", icon: "Thermometer" },
    { name: "Airport Transfer", icon: "Car" },
  ],
  ratings: {
    google: 5.0,
  },
  policies: {
    checkin: "14:00",
    checkout: "11:00",
  },
  external_links: {
    booking_com: "https://www.booking.com/hotel/in/walnut-village-resort.en-gb.html?aid=2127562&label=metagha-link-MRIN-hotel-15934410_dev-desktop_los-1_bw-5_dow-Tuesday_defdate-1_room-0_gstadt-2_rateid-public_aud-0_gacid-_mcid-10_ppa-0_clrid-0_ad-0_gstkid-0_checkin-20260421_ppt-&sid=c88fb04c73001b087e0e3cc24d4fdd01&all_sr_blocks=1593441003_430394561_2_1_0&checkin=2026-04-21&checkout=2026-04-22&dest_id=15934410&dest_type=hotel&dist=0&group_adults=2&group_children=0&hapos=1&highlighted_blocks=1593441003_430394561_2_1_0&hpos=1&matching_block_id=1593441003_430394561_2_1_0&no_rooms=1&req_adults=2&req_children=0&room1=A%2CA&sb_price_type=total&sr_order=popularity&sr_pri_blocks=1593441003_430394561_2_1_0__600000&srepoch=1776342995&srpvid=408658a34b08003f&type=total&ucfs=1&",
    vio_com: "https://www.vio.com/Hotel/Search?checkIn=2026-04-21&checkOut=2026-04-22&currency=INR&deviceType=desktop&epv=MS4y&esd=NwFNi1EAdiOG2nJbf_199dBlty-Fa8oHsMDwuZDFkar8Tc9i6sk-3F1SVvgja2Br241inE0UN0ehgRuo8ggk77Z10fAGYfz39K8NW7u_DuV5wQNyh0kj_wqbxLxxWg%3D%3D&forceCurrencyChange=1&forceLanguageChange=1&hotelId=152119860&is_retargeting=true&label=_th%3D1836539145%26cid%3D%26closerateid%3D%26cltype%3Dhotel%26currency%3DINR%26datype%3Ddefault%26day%3D21%26dts%3D1776336766%26gsite%3Dmapresults%26hotel%3D152119860%26isAudienceUser%3D0%26isPaidClick%3D0%26isPrivateRate%3D0%26listid%3D%26los%3D1%26month%3D04%26price%3D6300.00%26promo%3D0%26query%3D2%26rateid%3DIN_D%26src%3Dgha%26ucountry%3DIN%26udevice%3Ddesktop%26vf%3D0%26year%3D2026&lang=en&oti=sJ4n07SC-Ss&pid=click-tracker&preferredRate=6300.00&profile=r2d2m73kn8&rooms=2%3A&userCountry=IN&utm_medium=cpc&utm_source=gha&overlay=2OiVlr",
    booking: "https://wa.me/+918899779869",
    google_reviews: "https://share.google/XXxpKOzTS3syycS8F",
  },
  testimonials: [
    {
      text: "Stayed at Walnut Village for couple of nights. Hotel is very good. Overall room cleanliness, service, food quality is excellent. Will definitely recommend this hotel. Mr Naim at reception was very courteous and helped us in smooth checkin and checkout.",
      author: "Yatin Valsangkar",
      location: "Google Review",
    },
    {
      text: "Nice serene hotel at scenic place with luxurious rooms and professional staff.. A next level hospitality at walnut village, i would recommend everyone visiting Pahalgam to atleast have a stay in this marvelous hotel...",
      author: "zahid manzoor",
      location: "Local Guide",
    },
    {
      text: "Had a wonderful stay here! The rooms are beautifully done, clean, comfortable, and thoughtfully designed. The service was equally impressive; the staff is extremely courteous and always ready to help. Highly recommend this place for a relaxed and comfortable stay!",
      author: "arika shukla",
      location: "Google Review",
    },
    {
      text: "Had a great experience with my family at this hotel. Staff is very cooperative and caring. The point i would like to highlight is that you feel very safe there if you are visiting with your family.",
      author: "Mohammad Talib",
      location: "Google Review",
    },
    {
      text: "What a wonderful property. Everything feels so new and welcoming. The staff the food everything was absolutely amazing. Would love to visit again and bring a lot of friends along.",
      author: "Fateh Babar khanyari",
      location: "Google Review",
    },
    {
      text: "Best hospitality and services in Pahalgam. Rooms were clean and the staff was very humble. The location is also great.",
      author: "Nahar Mushtaq",
      location: "Google Review",
    },
  ],
  gallery: [
    "/images/gallery/1.jpeg",
    "/images/gallery/2.jpeg",
    "/images/gallery/3.jpeg",
    "/images/gallery/4.jpeg",
    "/images/gallery/5.jpeg",
    "/images/gallery/6.jpeg",
    "/images/gallery/7.jpeg",
    "/images/gallery/8.jpeg",
    "/images/gallery/9.jpeg",
    "/images/gallery/10.jpeg",
    "/images/gallery/11.jpeg",
    "/images/gallery/12.jpeg",
    "/images/gallery/13.jpeg",
    "/images/gallery/14.jpeg",
    "/images/gallery/15.jpeg",
    "/images/gallery/16.jpeg",
    "/images/gallery/17.jpeg",
    "/images/gallery/18.jpeg",
  ],
};
