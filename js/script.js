var placesCards = document.getElementById("placeDetails") ;
var breakfastCards = document.getElementById("mealOption") ;
var totalCost = document.getElementById("cost") ;


// DATABASE/OBJECT

var allPlaces = [
  {
    type: "Hotel",
    places: [
      {
        id: 1,
        name: "QT Hotel Wellington",
        stars: "4stars.png",
        description: "Opposite the Museum of New Zealand Te Papa Tongarewa," + " this quirky boutique hotel is 6.1 km from Wellington International Airport." + " This smoke-free hotel features a restaurant, an indoor pool, and 2 bars/lounges. WiFi in public areas is free.",
        sleeps: {
          minLength: 1,
          maxLength: 5,
          minPeople: 1,
          maxPeople: 2
        },
        amenities: ["Pool", " Free Wifi", " Air Conditioning", " Spa", " Restaurant", " Gym"],
        location: "Wellington",
        address: "90 Cable Street, Te Aro, Wellington, 6011",
        nearby:[
          {
            place: "Te Papa",
            walk: 3
          },
          {
            place: "Courtenay Place",
            walk: 4
          },
          {
            place: "Michael Fowler Centre",
            walk: 6
          }
        ],
        price: 157,
        thumbnail: "QTExterior-Wellington.jpg",
        photo: "QTRoom-Wellington.jpg",
        lat: -41.291691,
        lng: 174.782623
      },
      {
        id: 2,
        name: "Copthorne Hotel Wellington",
        stars: "4stars.png",
        description: "Across the street from Wellington Harbour," + " this refined hotel is a 6-minute walk from the Museum of New Zealand Te Papa Tongarewa and 3 km from Wellington Botanic Garden." + " Refined rooms offer balconies, free Wi-Fi, flat-screen TVs and minibars, plus tea and coffeemaking facilities." ,
        sleeps: {
          minLength: 1,
          maxLength: 5,
          minPeople: 1,
          maxPeople: 2
        },
        amenities: ["Soundproof Rooms", " Free Wifi", " Restaurant", " Breakfast Available", " Business Services", " Parking Available"],
        location: "Wellington",
        address: "100 Oriental Parade, Oriental Bay, Wellington 6011",
        nearby:[
          {
            place: "Te Papa",
            walk: 8
          },
          {
            place: "Courtenay Place",
            walk: 8
          },
          {
            place: "Mount Victoria Lookout",
            walk: 18
          }
        ],
        price: 157,
        thumbnail: "corpthorneExterior-Wellington.jpg",
        photo: "corpthorneRoom-Wellington.jpg",
        lat: -41.29182,
        lng: 174.7876
      },
      {
        id: 3,
        name: "ibis Wellington",
        stars: "3stars.png",
        description: "This contemporary hotel is a 7-minute walk from the Wellington City Libraries, " + "8 minutes on foot from City Gallery Wellington and 1 km from the Museum of New Zealand Te Papa Tongarewa.",
        sleeps: {
          minLength: 1,
          maxLength: 5,
          minPeople: 1,
          maxPeople: 2
        },
        amenities: ["Air Conditioning", " 24/7 Front Desk", " Restaurant", " Bar"],
        location: "Wellington",
        address: "153 Featherston Street, Wellington 6011",
        nearby:[
          {
            place: "Lambton Quay",
            walk: 2
          },
          {
            place: "TSB Bank Arena",
            walk: 5
          },
          {
            place: "Wellington Cable Car",
            walk: 7
          }
        ],
        price: 157,
        thumbnail: "ibisExterior-Wellington.jpg",
        photo: "ibisRoom-Wellington.jpg",
        lat: -41.28378,
        lng: 174.7769
      },
      {
        id: 4,
        name: "Copthorne Auckland",
        stars: "4stars.png",
        description: "A restaurant, a bar/lounge, and self parking are available at this smoke-free hotel. WiFi in public areas is free. Other amenities include 24-hour room service, concierge services, and dry cleaning.",
        sleeps: {
          minLength: 1,
          maxLength: 5,
          minPeople: 1,
          maxPeople: 2
        },
        amenities: ["Soundproof Rooms", " Free Wifi", " Restaurant", " Breakfast Available", " Business Services", " Parking Available"],
        location: "Auckland",
        address: "150 Anzac Avenue, Auckland",
        nearby:[
          {
            place: "University of Auckland",
            walk: 5
          },
          {
            place: "Spark Arena",
            walk: 9
          },
          {
            place: "Queen Street Shopping District",
            walk: 11
          }
        ],
        price: 157,
        thumbnail: "CopthorneHotelExterior-Auckland.jpg",
        photo: "CopthorneHotelRoom-Auckland.jpg",
        lat: -36.849603,
        lng: 174.773486
      },
      {
        id: 5,
        name: "Rydges Auckland",
        stars: "4stars.png",
        description: "A restaurant, a 24-hour fitness centre," + " and a bar/lounge are available at this smoke-free hotel." + " WiFi in public areas is free.",
        sleeps: {
          minLength: 1,
          maxLength: 5,
          minPeople: 1,
          maxPeople: 2
        },
        amenities: ["Air Conditioning", " Free Wifi", " Restaurant", " Breakfast Available", " Business Services", " Parking Available"],
        location: "Auckland",
        address: "59 Federal St, Auckland, 1010",
        nearby:[
          {
            place: "SkyCity Casino",
            walk: 2
          },
          {
            place: "Sky Tower",
            walk: 2
          },
          {
            place: "Queen Street Shopping District",
            walk: 3
          }
        ],
        price: 157,
        thumbnail: "rydgesExterior-Auckland.jpg",
        photo: "rydgesRoom-Auckland.jpg",
        lat: -36.847198,
        lng: 174.762466
      },
      {
        id: 6,
        name: "Skycity Hotel Auckland",
        stars: "4stars.png",
        description: "Along with 15 restaurants, this smoke-free hotel has a full-service spa and a casino." + " WiFi in public areas is free. Other amenities include 8 bars/lounges, a fitness center, and 2 coffee shops/cafés.",
        sleeps: {
          minLength: 1,
          maxLength: 5,
          minPeople: 1,
          maxPeople: 2
        },
        amenities: ["Air Conditioning", " Spa", " Restaurant", " Bar"],
        location: "Auckland",
        address: "Corner Victoria and Federal Streets, Auckland",
        nearby:[
          {
            place: "Sky Tower",
            walk: 1
          },
          {
            place: "SkyCity Casino",
            walk: 1
          },
          {
            place: "Queen Street Shopping District",
            walk: 4
          }
        ],
        price: 157,
        thumbnail: "SKYCITYHotelAucklandExterior.jpg",
        photo: "SKYCITYHotelAucklandRoom.jpg",
        lat: -36.848217,
        lng: 174.762569
      },
      {
        id: 7,
        name: "Heartland Hotel Queenstown",
        stars: "4stars.png",
        description: "Along with a restaurant, this smoke-free hotel has a bar/lounge and a coffee shop/café. Free WiFi in public areas and free self parking are also provided.",
        sleeps: {
          minLength: 1,
          maxLength: 5,
          minPeople: 1,
          maxPeople: 2
        },
        amenities: ["Free Parking", " Free Wifi", " Restaurant", " Breakfast Available", " Bar", " Room Service"],
        location: "Queenstown",
        address: "27 Stanley Street, Queenstown",
        nearby:[
          {
            place: "Queenstown Mall",
            walk: 4
          },
          {
            place: "Queenstown Beach",
            walk: 5
          },
          {
            place: "Skycity Queenstown Casino",
            walk: 6
          }
        ],
        price: 157,
        thumbnail: "HeartlandHotelQueenstownExterior.jpg",
        photo: "HeartlandHotelQueenstownRoom.jpg",
        lat: -45.032352,
        lng: 168.664896
      },
      {
        id: 8,
        name: "Rydges Lakeland Resort Queenstown",
        stars: "3stars.png",
        description: "Along with a restaurant, this smoke-free hotel has an outdoor pool and a bar/lounge." + " WiFi in public areas is free. Other amenities include a sauna, a rooftop terrace, and self parking.",
        sleeps: {
          minLength: 1,
          maxLength: 5,
          minPeople: 1,
          maxPeople: 2
        },
        amenities: ["Pool", " Free Wifi", " Restaurant", " Breakfast Available", " Bar", " Spa"],
        location: "Queenstown",
        address: "38-54 Lake Esplanade, Queenstown",
        nearby:[
          {
            place: "Steamer Wharf",
            walk: 6
          },
          {
            place: "TSS Earnslaw Steamship",
            walk: 7
          },
          {
            place: "Fear Factory Queenstown",
            walk: 8
          }
        ],
        price: 157,
        thumbnail: "RydgesLakelandResortQueenstownExterior.jpg",
        photo: "RydgesLakelandResortQueenstownRoom.jpg",
        lat: -45.035072,
        lng: 168.651911
      },
      {
        id: 9,
        name: "Novotel Queenstown Lakeside",
        stars: "4stars.png",
        description: "A restaurant, a fitness centre, and a bar/lounge are available at this hotel. " + "WiFi in public areas is free. Other amenities include a spa tub, valet parking, and 24-hour room service.",
        sleeps: {
          minLength: 1,
          maxLength: 5,
          minPeople: 1,
          maxPeople: 2
        },
        amenities: ["Air Conditioning", " Spa", " Restaurant", " Bar"],
        location: "Queenstown",
        address: "Corner of Earl and Marine Parade, Queenstown",
        nearby:[
          {
            place: "Queenstown Mall",
            walk: 3
          },
          {
            place: "Skycity Queenstown Casino",
            walk: 4
          },
          {
            place: "Queenstown Beach",
            walk: 4
          }
        ],
        price: 157,
        thumbnail: "NovotelQueenstownLakesideExterior.jpg",
        photo: "NovotelQueenstownLakesideroom.jpg",
        lat: -45.033196,
        lng: 168.660871
      }
    ]
  },
  {
    type: "Motel",
    places: [
      {
        id: 10,
        name: "Apollo Lodge Motel",
        stars: "4stars.png",
        description: "This laid-back motel is a 9-minute walk" + " from Museum of New Zealand Te Papa Tongarewa and 4 km from the Wellington Zoo. " + "It's 7 km from tours at The Weta Cave.",
        sleeps: {
          minLength: 3,
          maxLength: 10,
          minPeople: 2,
          maxPeople: 4
        },
        amenities: ["Free Wi-Fi", " Parking — Free", " Airport shuttle", " Good for kids"],
        location: "Wellington",
        address: "49 Majoribanks St, Mount Victoria, Wellington 6011",
        nearby: [
          {
            place: "Te Papa",
            walk: 9
          },
          {
            place: "Courtenay Place",
            walk: 1
          },
          {
            place: "New World Supermarket",
            walk: 5
          }
        ],
        price: 90,
        thumbnail: "apolloMotelExterior-Wellington.jpg",
        photo: "apolloMotelRoom-Wellington.jpg",
        lat: -41.29473,
        lng: 174.7866
      },
      {
        id: 11,
        name: "Capital View Motor Inn",
        stars: "4stars.png",
        description: "Just 5 minutes' walk from Cuba Street's bars and restaurants," + " Capital View Motor Inn offers self-contained apartments with views of the harbor and Wellington city. " + "Guests enjoy free onsite parking and unlimited free WiFi." ,
        sleeps: {
          minLength: 3,
          maxLength: 10,
          minPeople: 2,
          maxPeople: 4
        },
        amenities: ["Free Wi-Fi", " Parking — Free", " Airport shuttle", " Good for kids", " Non-smoking rooms" ],
        location: "Wellington",
        address: "12 Thompson Street, 6011 Wellington",
        nearby: [
          {
            place: "Cuba Street",
            walk: 5
          },
          {
            place: "Courtenay Place",
            walk: 10
          }
        ],
        price: 90,
        thumbnail: "capitalViewMotorInnExterior-Wellington.jpg",
        photo: "capitalViewMotorInnRoom-Wellington.jpg",
        lat: -41.29762,
        lng: 174.77163
      },
      {
        id: 12,
        name: "Marksman Motor Inn",
        stars: "4stars.png",
        description: "Just 3 minutes’ walk from Government House Wellington, " + "Marksman Motor Inn offers accomm with flat-screen satellite TV and a microwave." + " The property features Wi-Fi internet access and free parking.",
        sleeps: {
          minLength: 3,
          maxLength: 10,
          minPeople: 2,
          maxPeople: 4
        },
        amenities: ["Free Wi-Fi", " Parking — Free", " Family rooms", " Non-smoking rooms"],
        location: "Wellington",
        address: "40-44 Sussex Street, 6021 Wellington",
        nearby: [
          {
            place: "Government House Wellington",
            walk: 3
          },
          {
            place: "Courtenay Place",
            walk: 10
          },
          {
            place: "Cuba Street",
            walk: 5
          }
        ],
        price: 90,
        thumbnail: "marksmenMotorInnExterior-Wellington.jpg",
        photo: "marksmenMotorInnRoom-Wellington.jpg",
        lat: -41.300717,
        lng: 174.778826
      },

      {
        id: 13,
        name: "Greenlane Motel",
        stars: "3stars.png",
        description: "Along with a restaurant, this motel has a coffee shop/café and laundry facilities." + " Free continental breakfast, free WiFi in public areas, and free self parking are also provided.",
        sleeps: {
          minLength: 3,
          maxLength: 10,
          minPeople: 2,
          maxPeople: 4
        },
        amenities: ["Free Wi-Fi", " Parking — Free", " Free Breakfast", " Laundry", " Housekeeping" ],
        location: "Auckland",
        address: "453 Great South Road Penrose, Auckland",
        nearby: [
          {
            place: "Alexandra Park",
            walk: 15
          },
          {
            place: "Mt. Smart Stadium",
            walk: 15
          }
        ],
        price: 90,
        thumbnail: "GreenLaneMotelExterior-Auckland.jpg",
        photo: "GreenLaneMotelRoom-Auckland.jpg",
        lat: -36.902981,
        lng: 174.807383
      },

      {
        id: 14,
        name: "Tudor Court Motor Lodge",
        stars: "4stars.png",
        description: "Laundry facilities, express check-out, " + "and multilingual staff are available at this smoke-free motel." + " Free WiFi in public areas and free self parking are also provided.",
        sleeps: {
          minLength: 3,
          maxLength: 10,
          minPeople: 2,
          maxPeople: 4
        },
        amenities: ["Free Wi-Fi", " Parking — Free", " Free Breakfast", " Laundry", " Housekeeping" ],
        location: "Auckland",
        address: "108 Great South Road, Epsom, Auckland",
        nearby: [
          {
            place: "Alexandra Park",
            walk: 15
          },
          {
            place: "ASB Showgrounds",
            walk: 15
          },
          {
            place: "Mt. Eden Domain",
            walk: 25
          }
        ],
        price: 90,
        thumbnail: "TudorCourtMotorLodgeExterior-Auckland.jpg",
        photo: "TudorCourtMotorLodgeRoom-Auckland.jpg",
        lat: -36.879991,
        lng: 174.783361
      },
      {
        id: 15,
        name: "New Haven Motel",
        stars: "4stars.png",
        description: "This smoke-free motel features an outdoor pool, a fitness center, and a spa tub. " + "Free WiFi in public areas and free self parking are also provided.",
        sleeps: {
          minLength: 3,
          maxLength: 10,
          minPeople: 2,
          maxPeople: 4
        },
        amenities: ["Free Wi-Fi", " Parking — Free", " Airport shuttle", " Good for kids"],
        location: "Auckland",
        address: "3162 Great North Road, Kelston, New Lynn, Auckland",
        nearby: [
          {
            place: "Auckland Zoo",
            walk: 40
          },
          {
            place: "Eden Park",
            walk: 50
          },
          {
            place: "Western Springs Stadium",
            walk: 60
          }
        ],
        price: 90,
        thumbnail: "NewHavenMotelExterior-Auckland.jpg",
        photo: "NewHavenMotelRoom-Auckland.jpg",
        lat: -36.909159,
        lng: 174.675319
      },
      {
        id: 16,
        name: "Autoline Motel",
        stars: "4stars.png",
        description: "A perfect getaway for skiers, Autoline Motel offers conveniences such as laundry facilities," + " tour/ticket assistance, and free self parking. All 13 rooms provide conveniences like kitchenettes and coffee makers.",
        sleeps: {
          minLength: 3,
          maxLength: 10,
          minPeople: 2,
          maxPeople: 4
        },
        amenities: ["Free Wi-Fi", " Parking — Free", " Air Conditioning", " Laundry", " Housekeeping" ],
        location: "Queenstown",
        address: "2-4 Dublin Street, Queenstown",
        nearby: [
          {
            place: "Queenstown Beach",
            walk: 7
          },
          {
            place: "Queenstown Mall",
            walk: 9
          },
          {
            place: "Queenstown Hill",
            walk: 11
          }
        ],
        price: 90,
        thumbnail: "AutolineMotelExterior.jpg",
        photo: "AutolineMotelRoom.jpg",
        lat: -45.032692,
        lng: 168.670114
      },
      {
        id: 17,
        name: "Amber Lodge Motel",
        stars: "3stars.png",
        description: "A perfect getaway for skiers, Amber Lodge Motel offers conveniences such as laundry facilities," + " tour/ticket assistance, and free self parking." + " All 12 rooms feature kitchens with refrigerators and microwaves, plus free WiFi and TVs.",
        sleeps: {
          minLength: 3,
          maxLength: 10,
          minPeople: 2,
          maxPeople: 4
        },
        amenities: ["Free Wi-Fi", " Parking — Free", " Laundry", " Housekeeping" ],
        location: "Queenstown",
        address: "1 Gorge Road, Queenstown",
        nearby: [
          {
            place: "Skycity Queenstown Casino",
            walk: 4
          },
          {
            place: "Queenstown Mall",
            walk: 4
          },
          {
            place: "Fear Factory Queenstown",
            walk: 5
          }
        ],
        price: 90,
        thumbnail: "AmberLodgeMotelExterior.jpg",
        photo: "AmberLodgeMotelRoom.jpg",
        lat: -45.029347,
        lng: 168.662195
      },
      {
        id: 18,
        name: "Colonial Village Motel",
        stars: "3stars.png",
        description: "Along with laundry facilities, this motel has tour/ticket assistance and a garden. " + "Free WiFi in public areas and free self parking are also provided. ",
        sleeps: {
          minLength: 3,
          maxLength: 10,
          minPeople: 2,
          maxPeople: 4
        },
        amenities: ["Free Wi-Fi", " Parking — Free", " Pet Friendly", " Housekeeping"],
        location: "Queenstown",
        address: "136 Frankton Road, Queenstown",
        nearby: [
          {
            place: "Queenstown Beach",
            walk: 14
          },
          {
            place: "Queenstown Hill",
            walk: 20
          },
          {
            place: "Queenstown (ZQN-Queenstown Intl.)",
            walk: 30
          }
        ],
        price: 90,
        thumbnail: "ColonialVillageMotelQueenstownExterior.jpg",
        photo: "ColonialVillageMotelQueenstownRoom.jpg",
        lat: -45.033985,
        lng: 168.676335
      }
    ]
  },
  {
    type:"House",
    places: [
      {
        id: 19,
        name: "The Balcony Suite",
        stars: "4stars.png",
        description: "The Balcony Suite is a true home away from home." + " It comes equipped with two bedrooms: one with a queen sized four poster bed, the other with a queen sized bed and a single bed. " + "There is a separate modern bathroom that also contains laundry facilities.",
        sleeps: {
          minLength: 2,
          maxLength: 15,
          minPeople: 1,
          maxPeople: 4
        },
        amenities: ["Free Wi-fi", " Air Conditioning", " TV", " Washer & Dryer", " Children Welcome"],
        location: "Wellington",
        address: "Thorndon, Wellington City, Wellington",
        nearby: [
          {
            place: "Bus Stop",
            walk: 1
          },
          {
            place: "CBD",
            walk: 20
          },
          {
            place: "Westpac Stadium",
            walk: 15
          }
        ],
        price: 240,
        thumbnail: "balconySuiteExterior-Wellington.jpg",
        photo: "balconySuiteRoom-Wellington.jpg",
        lat: -41.274540,
        lng: 174.775631
      },
      {
        id: 20,
        name: "Contemporary Town House",
        stars: "5stars.png",
        description: "Close to town in a sunny suburb with off street parking and close to bus stop." + " Cable car near by as is the university and Zealandia. " + "Easy access to motorway and ferry.",
        sleeps: {
          minLength: 2,
          maxLength: 15,
          minPeople: 1,
          maxPeople: 4
        },
        amenities: ["Free-Wifi", " Air Conditioning", " No Smoking", " Children Welcome"],
        location: "Wellington",
        address: "Northland, Wellington City",
        nearby: [
          {
            place: "Iconic Kelburn village",
            walk: 10
          },
          {
            place: "Botanic Gardens",
            walk: 10
          }
        ],
        price: 240,
        thumbnail: "cityfringetownhouseExterior-Wellington.jpg",
        photo: "cityfringetownhouseRoom-Wellington.jpg",
        lat: -41.282339,
        lng: 174.757356
      },
      {
        id: 21,
        name: "Architecturally Designed Apartment",
        stars: "4stars.png",
        description: "This iconic Roger Walker apartment block," + " sometimes known as Noddy town, is an integral feature in Wellington's architecturally designed buildings. " + "It's quirky turrets and private passageways make it quite unique to visit.",
        sleeps: {
          minLength: 2,
          maxLength: 15,
          minPeople: 1,
          maxPeople: 4
        },
        amenities: ["Free Wi-fi", " Children Welcome"],
        location: "Wellington",
        address: "Kilbirnie, Wellington City",
        nearby: [
          {
            place: "Kilbirnie township",
            walk: 5
          }
        ],
        price: 240,
        thumbnail: "parkMewsExterior-Wellington.jpg",
        photo: "parkMewsRoom-Wellington.jpg",
        lat: -41.316646,
        lng: 174.798093
      },
      {
        id: 22,
        name: "Juan's Place",
        stars: "5stars.png",
        description: "The room can fit two people comfortably and there is a Sofa Bed in the living room for a 3rd person. " + "The guests will have their own private bathroom. The apartment is on the 5th floor and there is access to an indoor pool and tennis court." + " The apartment is conveniently located right in the city centre.",
        sleeps: {
          minLength: 2,
          maxLength: 15,
          minPeople: 1,
          maxPeople: 4
        },
        amenities: ["Free-Wifi", " Kitchen", " Lift", " Cable TV"],
        location: "Auckland",
        address: "Queen Street, Auckland",
        nearby: [
          {
            place: "Britomart Train Station",
            walk: 1
          },
          {
            place: "The Ferry Station",
            walk: 7
          },
          {
            place: "Sky Tower",
            walk: 15
          }
        ],
        price: 240,
        thumbnail: "JuanPlaceExterior-Auckland.jpg",
        photo: "JuanPlaceRoom-Auckland.jpg",
        lat: -36.849941,
        lng: 174.764938
      },
      {
        id: 23,
        name: "Double Room in CBD Area",
        stars: "5stars.png",
        description: "You will have our extra double room for yourself," + " in the central Auckland in a modern apartment building with a gym, a steam room, and a pool. " + "You are welcome to use the kitchen.",
        sleeps: {
          minLength: 2,
          maxLength: 15,
          minPeople: 1,
          maxPeople: 4
        },
        amenities: ["Free-Wifi", " Gym", " Kitchen", " Lift"],
        location: "Auckland",
        address: "Auckland CBD",
        nearby: [
          {
            place: "Downtown Auckland",
            walk: 10
          }
        ],
        price: 240,
        thumbnail: "HostedbyEveliinaExterior-Auckland.jpg",
        photo: "HostedbyEveliinaRoom-Auckland.jpg",
        lat: -36.849941,
        lng: 174.764938
      },
      {
        id: 24,
        name: "Sunny Townhouse Near K Road",
        stars: "5stars.png",
        description: "Share this light-filled home with Frank the dachshund and Indi the cat." + " Contemporary decor is pleasingly neutral with pops of summery colour – sip a coffee on the plant-peppered patio before heading out to discover the hipstery neighbourhood haunts.",
        sleeps: {
          minLength: 2,
          maxLength: 15,
          minPeople: 1,
          maxPeople: 4
        },
        amenities: ["Free Wi-fi", " Full Kitchen", " TV", " Washer & Dryer", " Coffee Maker"],
        location: "Auckland",
        address: "K Road, Auckland CBD, Auckland",
        nearby: [
          {
            place: "Downtown Auckland",
            walk: 10
          }
        ],
        price: 240,
        thumbnail: "nadiaExterior-Auckland.jpg",
        photo: "nadiaRoom-Auckland.jpg",
        lat: -36.852095,
        lng: 174.763180
      },
      {
        id: 25,
        name: "Modern private room, stunning views from your room",
        stars: "5stars.png",
        description: "Wake up and look out to the stunning views of Lake Wakatipu" + " and the jagged peaks of The Remarkables from your bed! " + "Our guestroom is a private room in our warm and modern home.",
        sleeps: {
          minLength: 2,
          maxLength: 15,
          minPeople: 1,
          maxPeople: 4
        },
        amenities: ["Free-Wifi", " Air Conditioning", " Free Parking", " Iron"],
        location: "Queenstown",
        address: "Queenstown, Otago",
        nearby: [
          {
            place: "Queenstown CBD",
            walk: 25
          },
          {
            place: "Bus stop",
            walk: 10
          }
        ],
        price: 240,
        thumbnail: "Shannon&MiaExterior.jpg",
        photo: "Shannon&MiaRoom.JPG",
        lat: -45.031720,
        lng: 168.660810
      },
      {
        id: 26,
        name: "Queenstown Home",
        stars: "4stars.png",
        description: "Apartment is located in the heart of town surrounded by restaurants and shops opposite the lake. You can view the lake from the apartment.",
        sleeps: {
          minLength: 2,
          maxLength: 15,
          minPeople: 1,
          maxPeople: 4
        },
        amenities: ["Free-Wifi", " Kitchen", " Iron", " Shampoo"],
        location: "Queenstown",
        address: "Queenstown, Otago",
        nearby: [
          {
            place: "Queenstown Lake",
            walk: 1
          }
        ],
        price: 240,
        thumbnail: "SantoshExterior.jpg",
        photo: "SantoshRoom.jpg",
        lat: -45.031720,
        lng: 168.660810
      },
      {
        id: 27,
        name: "Spacious Bedroom/Ensuite",
        stars: "5stars.png",
        description: "Spacious, sunny and warm room with great views of the mountains and lake, a peaceful haven to relax.Has own private entrance. Private upstairs level with comfy super king bed, bathroom with shower and bath, walk-in wardrobe, private balcony.",
        sleeps: {
          minLength: 2,
          maxLength: 15,
          minPeople: 1,
          maxPeople: 4
        },
        amenities: ["Free Wi-fi", " Breakfast", " Shampoo"],
        location: "Queenstown",
        address: "Fernhill, Queenstown 9300",
        nearby: [
          {
            place: "Bus Stop",
            walk: 1
          },
          {
            place: "Skifield Bus",
            walk: 5
          },
          {
            place: "Fish & Chips Store",
            walk: 3
          }
        ],
        price: 240,
        thumbnail: "KatExterior.JPG",
        photo: "KatRoom.JPG",
        lat: -45.038747,
        lng: 168.637178
      },
    ]
  },
  {
    type:"Hostel",
    places: [
      {
        id: 28,
        name: "YHA Wellington Backpacker Hostel",
        stars: "4stars.png",
        description: "Set in the inner-city Te Aro district," + " this modern youth hostel is a 5-minute walk from the Museum of New Zealand Te Papa Tongarewa and a 14-minute walk from the National War Memorial." + " Bright rooms offer free Wi-Fi; most provide en suite bathrooms. ",
        sleeps: {
          minLength: 1,
          maxLength: 10,
          minPeople: 1,
          maxPeople: 1
        },
        amenities: ["Wifi", " Laundry service", " Smoke-free property", " Child care"],
        location: "Wellington",
        address: "292 Wakefield St, Te Aro, Wellington 6011",
        nearby: [
          {
            place: "Te Papa",
            walk: 5
          },
          {
            place: "Courtenay Place",
            walk: 2
          },
          {
            place: "New World Supermarket",
            walk: 1
          }
        ],
        price: 30,
        thumbnail: "yhaExterior-Wellington.jpg",
        photo: "yhaRoom-Wellington.jpg",
        lat: -41.293099,
        lng: 174.783913
      },

      {
        id: 29,
        name: "Hotel Waterloo & Backpackers",
        stars: "4stars.png",
        description: "Hotel Waterloo & Backpackers offers budget accomm in the centre of Wellington. " + "It features a 24-hour guest kitchen, self-service laundry facilities and a games room with pool tables." + " Guests receive 1GB of free WiFi per 24 hours. ",
        sleeps: {
          minLength: 1,
          maxLength: 10,
          minPeople: 1,
          maxPeople: 1
        },
        amenities: ["Free-Wifi", " Family Rooms", " 24-hour front desk", " Restaurant"],
        location: "Wellington",
        address: "1 Bunny Street, 6011 Wellington",
        nearby: [
          {
            place: "Wellington Train Station",
            walk: 1
          },
          {
            place: "New World Metro",
            walk: 2
          },
        ],
        price: 30,
        thumbnail: "HotelWaterlooBackpackersExterior-Wellington.jpg",
        photo: "HotelWaterlooBackpackersRoom-Wellington.jpg",
        lat: -41.280252,
        lng: 174.779942
      },
      {
        id: 30,
        name: "Nomads Capital Backpackers",
        stars: "5stars.png",
        description: "Located in the heart of the city, " + "Nomads Capital Backpackers offers 5-star backpackers accomm. " + " It is a 5-minute walk from Wellington's stunning waterfront.",
        sleeps: {
          minLength: 1,
          maxLength: 10,
          minPeople: 1,
          maxPeople: 1
        },
        amenities: ["Free-Wifi", " Facilities for disabled guests", " Non-smoking", " Breakfast"],
        location: "Wellington",
        address: "118 Wakefield Street, 6011 Wellington",
        nearby: [
          {
            place: "Te Papa Museum",
            walk: 5
          },
          {
            place: "Courtney Place",
            walk: 7
          },
          {
            place: "New World Metro",
            walk: 4
          }
        ],
        price: 30,
        thumbnail: "nomadsCapitalBackpackersExterior-Wellington.jpg",
        photo: "nomadsCapitalBackpackersRoom-Wellington.jpg",
        lat: -41.289626,
        lng: 174.776859
      },
      {
        id: 31,
        name: "Haka Lodge Auckland Hostel",
        stars: "4stars.png",
        description: "This smoke-free hostel features laundry facilities," + " tour/ticket assistance, and free WiFi in public areas. Rooms offer free WiFi and showers.",
        sleeps: {
          minLength: 1,
          maxLength: 10,
          minPeople: 1,
          maxPeople: 1
        },
        amenities: ["Free-Wifi", " Kitchen", " Laundry"],
        location: "Auckland",
        address: "373 Karangahape Rd, Auckland",
        nearby: [
          {
            place: "Auckland Town Hall",
            walk: 12
          },
          {
            place: "Sky Tower",
            walk: 15
          },
        ],
        price: 30,
        thumbnail: "HakaLodgeAucklandExterior.jpg",
        photo: "HakaLodgeAucklandRoom.jpg",
        lat: -36.857880,
        lng: 174.756589
      },
      {
        id: 32,
        name: "YMCA Hostel Auckland",
        stars: "3stars.png",
        description: "Along with a fitness centre, " + " this smoke-free hostel has WiFi in public areas and self parking. " + "Other amenities include laundry facilities, a 24-hour front desk, and tour/ticket assistance.",
        sleeps: {
          minLength: 1,
          maxLength: 10,
          minPeople: 1,
          maxPeople: 1
        },
        amenities: ["Kitchen", " Gym", " Free Parking", " Breakfast Available"],
        location: "Auckland",
        address: "20 Pitt Street, Auckland",
        nearby: [
          {
            place: "Auckland Town Hall",
            walk: 8
          },
          {
            place: "Sky Tower",
            walk: 10
          },
        ],
        price: 30,
        thumbnail: "ymcaExterior-Auckland.jpg",
        photo: "ymcaRoom-Auckland.jpg",
        lat: -36.856768,
        lng: 174.758918
      },
      {
        id: 33,
        name: "Queen Street Backpackers",
        stars: "3stars.png",
        description: "Along with a bar/lounge," + " this smoke-free hostel has coffee/tea in a common area and a microwave in a common area. " + "Free continental breakfast and free Wi-Fi in public areas are also provided.",
        sleeps: {
          minLength: 1,
          maxLength: 10,
          minPeople: 1,
          maxPeople: 1
        },
        amenities: ["Free-Wifi", " Kitchen", " Bar", " Free Breakfast"],
        location: "Auckland",
        address: "4 Fort Street, Auckland",
        nearby: [
          {
            place: "Queen Street Shopping District",
            walk: 1
          },
          {
            place: "SkyCity Casino",
            walk: 8
          },
        ],
        price: 30,
        thumbnail: "QueenStreetBackpackersExterior - Auckland.jpg",
        photo: "QueenStreetBackpackersRoom- Auckland.jpg",
        lat: -36.845845,
        lng: 174.766994
      },
      {
        id: 34,
        name: "Nomads Queenstown Backpackers",
        stars: "4stars.png",
        description: "Cozy up to a roaring lobby fireplace at Nomads Queenstown Backpackers after an exciting day on the slopes. " + "Rooms offer WiFi and hair dryers.",
        sleeps: {
          minLength: 1,
          maxLength: 10,
          minPeople: 1,
          maxPeople: 1
        },
        amenities: ["Air Conditioning", " Spa", " 24-hour front desk", " Laundry"],
        location: "Queenstown",
        address: "5-11 Church Street, Queenstown",
        nearby: [
          {
            place: "Queenstown Mall",
            walk: 2
          },
          {
            place: "Skycity Queenstown Casino",
            walk: 4
          },
        ],
        price: 30,
        thumbnail: "NomadsQueenstownBackpackersExterior.jpg",
        photo: "NomadsQueenstownBackpackersRoom.jpg",
        lat: -45.032642,
        lng: 168.661582
      },
      {
        id: 35,
        name: "YHA Queenstown Central Hostel",
        stars: "4stars.png",
        description: "Laundry facilities, a library, " + "and tour/ticket assistance are available at this hostel." + " WiFi in public areas is free. Other amenities include a vending machine." + " All 30 rooms offer free WiFi, coffee makers, and TVs.",
        sleeps: {
          minLength: 1,
          maxLength: 10,
          minPeople: 1,
          maxPeople: 1
        },
        amenities: [" Free-Wifi", " Laundry", " Housekeeping"],
        location: "Queenstown",
        address: "48 Shotover Street, Queenstown",
        nearby: [
          {
            place: "Fear Factory Queenstown",
            walk: 1
          },
          {
            place: "Skycity Queenstown Casino",
            walk: 2
          },
        ],
        price: 30,
        thumbnail: "YHAQueenstownCentralExterior.jpg",
        photo: "YHAQueenstownCentralRoom.jpg",
        lat: -45.032031,
        lng: 168.658956
      },
      {
        id: 36,
        name: "Base Queenstown Hostel",
        stars: "3stars.png",
        description: "This smoke-free hostel features a nightclub," + " a bar/lounge, and coffee/tea in a common area." + " WiFi in public areas is free. Additionally, laundry facilities, a 24-hour front desk, and free newspapers are onsite.",
        sleeps: {
          minLength: 1,
          maxLength: 10,
          minPeople: 1,
          maxPeople: 1
        },
        amenities: ["Free-Wifi", " Laundry service", " Bar", " Housekeeping"],
        location: "Queenstown",
        address: "47-49 Shotover Street, Queenstown",
        nearby: [
          {
            place: "Fear Factory Queenstown",
            walk: 1
          },
          {
            place: "Skycity Queenstown Casino",
            walk: 2
          },
          {
            place: "TSS Earnslaw Steamship",
            walk: 3
          }
        ],
        price: 30,
        thumbnail: "BaseQueenstownExterior.jpg",
        photo: "BaseQueenstownRoom.jpg",
        lat: -45.032389,
        lng: 168.657899
      }
    ]
  }
]

// FILTER SEARCH BAR IN JQUERY

var city, accommodation, travellers, days;

$(document).ready(function(){

  // CITY
  $(".auckland").click(function(){
    city = "auckland";
  });
  $(".wellington").click(function(){
    city = "wellington";
  });
  $(".queenstown").click(function(){
    city = "queenstown";
  });

  //ACCOMMODATION
  $(".hotel").click(function(){
    accommodation = "hotel";
  });
  $(".motel").click(function(){
    accommodation = "motel";
  });
  $(".house").click(function(){
    accommodation = "house";
  });
  $(".hostel").click(function(){
    accommodation = "hostel";
  });

  // TRAVELLERS
  $(".trv1").click(function(){
    travellers = 1;
  });
  $(".trv2").click(function(){
    travellers = 2;
  });
  $(".trv3").click(function(){
    travellers = 3;
  });
  $(".trv4").click(function(){
    travellers = 4;
  });

  function dateDiff() {

    var start = $("#datePicker1").datepicker("getDate");
    var end = $("#datePicker2").datepicker("getDate");
    days  = (end - start)/1000/60/60/24;
    return days;
  }

  $("#search").click(function(){
    var city = document.getElementById("city").value ;
    var travellers = document.getElementById("travellers").value ;
    var accommodation = document.getElementById("accommodation").value ;

    dateDiff();

    getPlaces(travellers, accommodation, days, city);

  });


  // FILTER/VALIDATION FUNCTION IN JS

  function getPlaces(t, a, d, c){
    var checker = false;
    $("#searchResults").empty();
    placesCards.innerHTML =" ";
    for (var i = 0 ; i < allPlaces.length ; i ++) {

      for (var j = 0 ; j < allPlaces[i].places.length ; j ++) {

        if (( t >= allPlaces[i].places[j].sleeps.minPeople) && ( t <= allPlaces[i].places[j].sleeps.maxPeople)) {
          if (( d >= allPlaces[i].places[j].sleeps.minLength) && ( d <= allPlaces[i].places[j].sleeps.maxLength)) {
            if ( c == allPlaces[i].places[j].location) {
              if ( a == allPlaces[i].type) {
                checker = true;

                // SUCCESSFUL VALIDATION
                var total = d * allPlaces[i].places[j].price ;

                placesCards.innerHTML += "<div class=\"col-12 col-lg-3 col-sm-12 col-md-6 mb-2 mt-4\">" +
                "<div class=\"border-primary card accomm-thumb h-100 mr-4 ml-4\">" +
                "<div class=\"accomm-thumb h-100\" data-id=\"" + allPlaces[i].places[j].id +"\">" +
                "<img src=\"css/images/" + allPlaces[i].places[j].thumbnail + "\"class=\"card-img-top\" alt=\"accommodation exterior\">" + "<div class=\"card-body px-4 mt-2\"><h4>" + allPlaces[i].places[j].name + "</h4><img src=\"css/images/" + allPlaces[i].places[j].stars + "\"><div class=\"pt-4 d-block text-truncate\">" +  allPlaces[i].places[j].description + "</div><h4 class=\"text-center mt-4\">$" + allPlaces[i].places[j].price + " per night </h4></div><div class=\"text-center mt-2\"><a class=\" btn-lg btn btn-primary text-white mb-4\" onclick=\"calcCost(" + total + ", " + d +"), showMore("+ allPlaces[i].places[j].id +")\">View More</div>";
              }
            }
          }
        }
      }
    }

    // UNSUCCESSFUL VALIDATION
    if (checker == false){

      $("#searchResults").html("<div class=\"col-12 text-center py-5\"><h4>Search was unsuccessful, we could not find accommodation that matches your duration dates and/or the number of travellers selected.</h4></div>");
    }
  }

  $(".owl-carousel").owlCarousel();

});


// MEAL DATA/OBJECT IN JS

var breakfast = [
  {
    name:  "Continental Breakfast",
    description: "Juice, coffee or tea with muesli and toast",
    image: "continentialbreakfast.jpg"
  },
  {
    name: "Full Cooked Breakfast",
    description: "Eggs with tomato, bacon, sausage, and toast",
    image: "bigbreakfast.jpg"
  }
]

// SHOW MEAL OPTIONS IN JQUERY/JS

breakfastCards.innerHTML = " ";
var x;
for (x = 0 ; x < breakfast.length ; x ++) {


  breakfastCards.innerHTML += "<div class=\"col-12 col-sm-6 col-md-6 col-lg-3 mb-3 mt-4\">" +
  "<div class=\"border-primary card h-100\">" + "<div class=\"h-100\"><img src=\"css/images/" + breakfast[x].image + "\"class=\"card-img-top mb-2\" \"alt=\"breakfast option\">" + "<div class=\"card-body px-4\"><h4>" + breakfast[x].name + "</h4><br><p>" + breakfast[x].description + "</p> <div class=\" pb-4 float-right form-check\"><input class=\"form-check-input breakfast bg-primary\" type=\"radio\" name=\"breakfast\" value=\"option\"><label class=\"form-check-label\" for=\"breakfast\"></label></div></div>";
}



// DATE PICKER FUNCTION IN JQUERY WITH JQUERY UI

$("#datePicker1").datepicker({
  dateFormat: "yy-mm-dd",
  changeMonth: true,
  minDate: new Date(),
  maxDate: "+1Y",
  onSelect: function(date){

    var selectedDate = new Date(date);
    var msecsInADay = 86400000;
    var stDate = new Date(selectedDate.getTime() + msecsInADay);

    $("#datePicker2").datepicker( "option", "minDate", stDate );
    var enDate = new Date(selectedDate.getTime() + 15 * msecsInADay);

    $("#datePicker2").datepicker( "option", "maxDate", enDate );
  }
});

$("#datePicker2").datepicker({
  dateFormat: "yy-mm-dd",
  changeMonth: true,
});


// BOOKING FORM VALIDATION IN JS

window.onload = function() {
  init();
};

function init() {
  var submit = document.getElementById("bookingSubmit");
  submit.onclick = function(evt) {
    evt.preventDefault();
    validateForm();
  };

  function validateForm() {

    var nameInput = document.getElementById("nameInput").value;
    var emailInput = document.getElementById("emailInput").value;
    var phoneInput = document.getElementById("phoneInput").value;

    var emailError = document.getElementById("emailError");
    var phoneError = document.getElementById("phoneError");
    var nameError = document.getElementById("nameError");
    var validated  = document.getElementById("bookingValid");

    var checker = false;
    if(nameInput.length <= 6 || nameInput.length >= 30) {
      nameError.innerHTML = "*please enter either a shorter or longer name";
    }

    if(emailInput.length <= 6 || emailInput.length >= 30) {
      emailError.innerHTML = "*please enter either a shorter or longer email address";
    }

    if(phoneInput.length <= 6 || phoneInput.length >= 12) {
      phoneError.innerHTML = "*please enter a shorter or longer phone number";
    }

    if(nameInput == "") {
      nameError.innerHTML = "*please enter a name";
    }
    if(emailInput == "") {
      emailError.innerHTML = "*please enter an email address";
    }
    if(phoneInput == "") {
      phoneError.innerHTML = "*please enter a phone number";
    } else {
      $("#bookingSubmit").hide();
      validated.innerHTML = "<a class=\"btn btn-primary text-white pt-2\">Confirm Booking</a>";
      checker = true;
    }
  }
};

// DISPLAY PAGES IN JQUERY

$("#searchBar").ready(function(){
  $("#checkoutPage").hide();
  // $("#map").hide();
  // $("#slideshow").hide();
  $("#confirmedPage").hide();
  $("#resultsPage").hide();


  $("#search").click(function(){
    $("#resultsPage").show();
    $("#checkoutPage").hide();
    $("#confirmedPage").hide();
    $("#slideshow").hide();

    $("#reserve").click(function(){
      $("#resultsPage").hide();
      $("#checkoutPage").show();
      $("#confirmedPage").hide();
      $("#searchBar").hide();
      $("#slideshow").hide();
      $("#map").hide();
    });
    $("#bookingValid").click(function(){
      $("#resultsPage").hide();
      $("#checkoutPage").hide();
      $("#accommPopUp").hide();
      $("#confirmedPage").show();
      window.scrollTo(500, 0);
      $("#searchBar").hide();
      $("#slideshow").show();
      $("#map").hide();
    });
    $("#home").click(function(){
      $("#searchBar").show();
      $("#slideshow").hide();
      $("#resultsPage").hide();
      $("#checkoutPage").hide();
      $("#confirmedPage").hide();
      $("#slideshow").show();
      $("#map").show();
    });
  });
});


// 3RD PARTY PLUGIN IN JQUERY

$(".owl-carousel").owlCarousel({
  items:1,
  margin:10,
  autoHeight:false,
  animateOut: "fadeOut"
});


// POP UP IN JS

function showMore(placeNumber){
  var singlePlace;

  for (var i = 0; i < allPlaces.length; i++) {
    for (var j = 0 ; j < allPlaces[i].places.length ; j ++) {

      if (allPlaces[i].places[j].id === placeNumber) {
        singlePlace = allPlaces[i].places[j];
        break;
      }
    }
  }

  document.getElementById("photo1").src = "css/images/" + singlePlace.photo;
  document.getElementById("photo2").src = "css/images/" + singlePlace.thumbnail;
  document.getElementById("name").innerText =  singlePlace.name;
  document.getElementById("stars").src = "css/images/"+ singlePlace.stars;
  document.getElementById("description").innerHTML = singlePlace.description;
  document.getElementById("amenities").innerText = singlePlace.amenities;
  document.getElementById("location").innerText = singlePlace.location;
  document.getElementById("address").innerText = singlePlace.address;
  document.getElementById("place").innerHTML = "";
  document.getElementById("walk").innerHTML = "";

  for (var a = 0; a < singlePlace.nearby.length; a ++) {
    for (var b = 0; b < singlePlace.nearby[a].place[b].length; b ++){
      document.getElementById("place").innerHTML += "<li>" + singlePlace.nearby[a].place + "</li>";
      document.getElementById("walk").innerHTML += "<li>" + singlePlace.nearby[a].walk + " m</li>";
    }
  };

  document.getElementById("price").innerHTML = "<p>$" + singlePlace.price + " per night</p>";
  document.getElementById("reserve").innerHTML = "<a class=\"float-lg-right btn-lg btn btn-primary text-white show-more mb-4\"'onclick='calcCost(" + totalCost + ", " + days +")'>Reserve</a></div>";

  document.getElementById("accommPopUp").style.display = "flex";
  document.body.style.overflow = "hidden";

  document.getElementById("close").addEventListener("click",function(){
    document.getElementById("accommPopUp").style.display = "none";
    document.body.style.overflow = "scroll";

  });

  document.getElementById("reserve").addEventListener("click",function(){
    document.getElementById("accommPopUp").style.display = "none";
    document.body.style.overflow = "scroll";
    window.scrollTo(500, 0);

  });

}

var accommThumbnails = document.getElementsByClassName("accomm-thumb");
for (var i = 0; i < accommThumbnails.length; i++) {
  var id = parseInt(accommThumbnails[i].dataset.id);
  accommThumbnails[i].onclick = function(){
    var id= parseInt(this.dataset.id);
    showMore(id);
  };
}


// CALCULATE COSTS AND DISPLAY IN JS

function calcCost (totalCost, days) {
  document.getElementById("cost").innerHTML = "<p>The total cost for your stay is $" + totalCost + " for " + days + " night/s. <br><br> <h4> Special Offer </h4> Choose one free breakfast option for your stay</p>";
}

// MAP

var map;

// DISPLAYING MAP AND STYLING

// // white
//  #ffffff
//  // primary
// #33CCFF
//$secondary
// #333333
// // black
// #000000
// // light gray
//  #666666
//  // dark green
//  #336666
//  // medium green
//  #339999
//  // light green
//  #33cccc

function initMap(getPlaces){
  map = new google.maps.Map(document.getElementById("map"), {
    center: {lat: -42.027300, lng: 172.718029},
    zoom: 5,
    fullscreenControl: false,
    streetViewControl: false,
    mapTypeControl: false,
    scrollwheel: false,
    styles: [
            {elementType: "geometry", stylers: [{color: "#339999"}]},
            {elementType: "labels.text.stroke", stylers: [{color: "#336666"}]},
            {elementType: "labels.text.fill", stylers: [{color: "#ffffff"}]},
            {
              featureType: "administrative.locality",
              elementType: "labels.text.fill",
              stylers: [{color: "#ffffff"}]
            },
            {
              featureType: "poi",
              elementType: "labels.text.fill",
              stylers: [{color: "#ffffff"}]
            },
            {
              featureType: "poi.park",
              elementType: "geometry",
              stylers: [{color: "#33cccc"}]
            },
            {
              featureType: "poi.park",
              elementType: "labels.text.fill",
              stylers: [{color: "#ffffff"}]
            },
            {
              featureType: "road",
              elementType: "geometry",
              stylers: [{color: "#33CCFF"}]
            },
            {
              featureType: "road",
              elementType: "geometry.stroke",
              stylers: [{color: "#33CCFF"}]
            },
            {
              featureType: "road",
              elementType: "labels.text.fill",
              stylers: [{color: "#ffffff"}]
            },
            {
              featureType: "road.highway",
              elementType: "geometry",
              stylers: [{color: "#33CCFF"}]
            },
            {
              featureType: "road.highway",
              elementType: "geometry.stroke",
              stylers: [{color: "#336666"}]
            },
            {
              featureType: "road.highway",
              elementType: "labels.text.fill",
              stylers: [{color: "#ffffff"}]
            },
            {
              featureType: "transit",
              elementType: "geometry",
              stylers: [{color: "#336666"}]
            },
            {
              featureType: "transit.station",
              elementType: "labels.text.fill",
              stylers: [{color: "#ffffff"}]
            },
            {
              featureType: "water",
              elementType: "geometry",
              stylers: [{color: "#666666"}]
            },
            {
              featureType: "water",
              elementType: "labels.text.fill",
              stylers: [{color: "#ffffff"}]
            },
            {
              featureType: "water",
              elementType: "labels.text.stroke",
              stylers: [{color: "#336666"}]
            }
          ]
  });

  // SHOW ALL LOCATIONS ON MAP AND CUSTOMISE MARKER

  for (var e = 0; e < allPlaces.length; e++) {
    for (var f = 0; f < allPlaces[e].places.length; f++) {
      var marker = new google.maps.Marker({
        position:{
          lat: allPlaces[e].places[f].lat,
          lng: allPlaces[e].places[f].lng
        },
        map: map,
        animation: google.maps.Animation.DROP,
        icon: "css/images/markericon.png",
        markerTitle: allPlaces[e].places[f].name,
        markerDescription: allPlaces[e].places[f].description,
        markerLocation: allPlaces[e].places[f].address,
        markerType: allPlaces[e].type,
        markerStars: allPlaces[e].places[f].stars,
        markerID: allPlaces[e].places[f].id,
        markerMinPeople: allPlaces[e].places[f].sleeps.minPeople,
        markerMaxPeople: allPlaces[e].places[f].sleeps.maxPeople,
        markerMinLength: allPlaces[e].places[f].sleeps.minLength,
        markerMaxLength: allPlaces[e].places[f].sleeps.maxLength
      });
      addClickEventToMarker(marker);
    }
  }
  // SHOW LOCATION INFORMATION ONCLICK

  var infobox;

  function addClickEventToMarker(singleMarker){

    if (infobox){
      infobox.close();
    }

    infobox = new google.maps.InfoWindow();
    google.maps.event.addListener(singleMarker, "click", function(){

      infobox.setContent("<div><h3>" + singleMarker.markerTitle + "</h3><img src=\"css/images/" + singleMarker.markerStars + "\">  <span class=\"badge badge-secondary text-white\"><h5>" + singleMarker.markerType + "</h5></span></div><br><div><p>Sleeps " + singleMarker.markerMinPeople + " - " + singleMarker.markerMaxPeople + " people from " + singleMarker.markerMinLength + " to " + singleMarker.markerMaxLength + " nights.</p></div><div><p>" + singleMarker.markerDescription + "<p><div><div><p>Address: " + singleMarker.markerLocation + "</p></div>");
      infobox.open(map, singleMarker);

      for (var e = 0; e < allPlaces.length; e++){
        for (var f = 0; f < allPlaces[e].places.length; f++) {
          if (allPlaces[e].places[f].id === singleMarker.markerID){
            var markerSingle = allPlaces[e];
            break;
          }
        }
      }

    })

  };
}

google.maps.event.addDomListener(window, "load", initMap);
