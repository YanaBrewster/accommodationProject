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
        photo: "QTRoom-Wellington.jpg"
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
        photo: "corpthorneRoom-Wellington.jpg"
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
        photo: "ibisRoom-Wellington.jpg"
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
        photo: "CopthorneHotelRoom-Auckland.jpg"
      },
      {
        id: 5,
        name: "Rydges Auckland",
        stars: "4stars.png",
        description: "A restaurant, a 24-hour fitness center," + " and a bar/lounge are available at this smoke-free hotel." + " WiFi in public areas is free. Additionally, a coffee shop/café,",
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
        photo: "rydgesRoom-Auckland.jpg"
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
        photo: "SKYCITYHotelAucklandRoom.jpg"
      },
      {
        id: 7,
        name: "Heartland Hotel Queenstown",
        stars: "4stars.png",
        description: "Along with a restaurant, this smoke-free hotel has a bar/lounge and a coffee shop/café. Free WiFi in public areas and free self parking are also provided",
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
        photo: "HeartlandHotelQueenstownRoom.jpg"
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
        photo: "RydgesLakelandResortQueenstownRoom.jpg"
      },
      {
        id: 9,
        name: "Novotel Queenstown Lakeside",
        stars: "4stars.png",
        description: "A restaurant, a fitness center, and a bar/lounge are available at this hotel. " + "WiFi in public areas is free. Other amenities include a spa tub, valet parking, and 24-hour room service.",
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
        thumbnail: "",
        photo: "NovotelQueenstownLakesideroom.jpg"
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
        photo: "apolloMotelRoom-Wellington.jpg"
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
        photo: "capitalViewMotorInnRoom-Wellington.jpg"
      },
      {
        id: 12,
        name: "Marksman Motor Inn",
        stars: "4stars.png",
        description: "Just 3 minutes’ walk from Government House Wellington, " + "Marksman Motor Inn offers accommodation with flat-screen satellite TV and a microwave." + " The property features Wi-Fi internet access and free parking.",
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
        photo: "marksmenMotorInnRoom-Wellington.jpg"
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
        photo: "GreenLaneMotelRoom-Auckland.jpg"
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
        photo: "TudorCourtMotorLodgeRoom-Auckland.jpg"
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
        location: "Wellington",
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
        photo: "NewHavenMotelRoom-Auckland.jpg"
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
        thumbnail: "",
        photo: "AutolineMotelRoom.jpg"
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
        thumbnail: "",
        photo: "AmberLodgeMotelRoom.jpg"
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
        thumbnail: "",
        photo: "ColonialVillageMotelQueenstownRoom.jpg"
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
        address: "Thorndon, Wellington City, Wellington, New Zealand",
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
        photo: "balconySuiteRoom-Wellington.jpg"
      },
      {
        id: 20,
        name: "Stunning contemporary city fringe town house",
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
        address: "Northland, Wellington City, Wellington, New Zealand",
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
        photo: "cityfringetownhouseRoom-Wellington.jpg"
      },
      {
        id: 21,
        name: "Architecturally Designed Studio Apartment",
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
        address: "Kilbirnie, Wellington",
        nearby: [
          {
            place: "Kilbirnie township",
            walk: 5
          }
        ],
        price: 240,
        thumbnail: "parkMewsExterior-Wellington.jpg",
        photo: "parkMewsRoom-Wellington.jpg"
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
        address: "Queen St, Auckland",
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
        photo: "JuanPlaceRoom-Auckland.jpg"
      },
      {
        id: 23,
        name: "A double room and some luxurities in CBD area",
        stars: "5stars.png",
        description: "You will have our extra double room for yourself," + " in the central Auckland in a modern apartment building with a gym, a steam room, and a pool. " + "You'll have a beautiful view over the city from our balcony! You are welcome to use the kitchen.",
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
        photo: "HostedbyEveliinaRoom-Auckland.jpg"
      },
      {
        id: 24,
        name: "Sunny Townhouse Near Trendy K Road",
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
        photo: "nadiaRoom-Auckland.jpg"
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
        address: "Queenstown, Otago, New Zealand",
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
        thumbnail: "",
        photo: "Shannon&MiaRoom.JPG"
      },
      {
        id: 26,
        name: "Queenstown home with a view",
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
        address: "Queenstown, Otago, New Zealand",
        nearby: [
          {
            place: "Queenstown Lake",
            walk: 1
          }
        ],
        price: 240,
        thumbnail: "",
        photo: "SantoshRoom.jpg"
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
        thumbnail: "",
        photo: "KatRoom.JPG"
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
        photo: "yhaRoom-Wellington.jpg"
      },

      {
        id: 29,
        name: "Hotel Waterloo & Backpackers",
        stars: "4stars.png",
        description: "Hotel Waterloo & Backpackers offers budget accommodation in the centre of Wellington. " + "It features a 24-hour guest kitchen, self-service laundry facilities and a games room with pool tables." + " Guests receive 1GB of free WiFi per 24 hours. ",
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
        photo: "HotelWaterlooBackpackersRoom-Wellington.jpg"
      },
      {
        id: 30,
        name: "Nomads Capital Backpackers",
        stars: "5stars.png",
        description: "Located in the heart of the city, " + "Nomads Capital Backpackers offers 5-star backpackers accommodation. " + " It is a 5-minute walk from Wellington's stunning waterfront.",
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
        photo: "nomadsCapitalBackpackersRoom-Wellington.jpg"
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
        photo: "HakaLodgeAucklandRoom.jpg"
      },
      {
        id: 32,
        name: "YMCA Hostel Auckland",
        stars: "3stars.png",
        description: "Along with a fitness center, " + " this smoke-free hostel has WiFi in public areas and self parking. " + "Other amenities include laundry facilities, a 24-hour front desk, and tour/ticket assistance.",
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
        photo: "ymcaRoom-Auckland.jpg"
      },
      {
        id: 33,
        name: "Queen Street Backpackers",
        stars: "3stars.png",
        description: "Along with a bar/lounge," + " this smoke-free hostel has coffee/tea in a common area and a microwave in a common area. " + "Free continental breakfast and free WiFi in public areas are also provided.",
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
        photo: "QueenStreetBackpackersRoom- Auckland.jpg"
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
        thumbnail: "",
        photo: "NomadsQueenstownBackpackersRoom.jpg"
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
        thumbnail: "",
        photo: "YHAQueenstownCentralRoom.jpg"
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
        thumbnail: "",
        photo: "BaseQueenstownRoom.jpg"
      }
    ]
  }
]

// FILTER SEARCH BAR IN JQUERY

var city, travellers, days;

$(document).ready(function(){

  $(".auckland").click(function(){
    city = "auckland";
    console.log(city);
  });

  $(".wellington").click(function(){
    city = "wellington";
    console.log(city);
  });
  $(".queenstown").click(function(){
    city = "queenstown";
    console.log(city);
  });

  $(".trv1").click(function(){
    travellers = 1;
    console.log(travellers);
  });
  $(".trv2").click(function(){
    travellers = 2;
    console.log(travellers);
  });
  $(".trv3").click(function(){
    travellers = 3;
    console.log(travellers);
  });
  $(".trv4").click(function(){
    travellers = 4;
    console.log(travellers);
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

    dateDiff();

    getPlaces(travellers, days, city);

  });

  // FILTER/VALIDATION FUNCTION IN JS

  function getPlaces(t, d, c){
    var checker = false;
        $("#searchResults").empty();
    placesCards.innerHTML =" ";
    for (var i = 0 ; i < allPlaces.length ; i ++) {
      for (var j = 0 ; j < allPlaces[i].places.length ; j ++) {

        if (( t >= allPlaces[i].places[j].sleeps.minPeople) && ( t <= allPlaces[i].places[j].sleeps.maxPeople)) {
          if (( d >= allPlaces[i].places[j].sleeps.minLength) && ( d <= allPlaces[i].places[j].sleeps.maxLength)) {
            if ( c == allPlaces[i].places[j].location) {
              checker = true;
              // SUCCESSFUL VALIDATION
              var total = d * allPlaces[i].places[j].price ;

              placesCards.innerHTML += "<div class=\"col-12 col-lg-6 col-sm-12 col-md-6 mb-2 mt-4\">" +
              "<div class=\"border-primary card h-100 mr-4 ml-4\">" +
              "<div class=\"accomm-thumb h-100\" data-id=\"" + allPlaces[i].places[j].id +"\">" +
              "<img src=\"css/images/" + allPlaces[i].places[j].photo + "\"class=\"card-img-top\" alt=\"accommodation exterior\">" + "<div class=\"card-body px-4 mt-3\"><h4>" + allPlaces[i].places[j].name + "</h4><img src=\"css/images/" + allPlaces[i].places[j].stars + "\"><div class=\"pt-4 d-block\">" +  allPlaces[i].places[j].description + "</div><div class=\"pt-2 d-block\"><br><h4>Type</h4> "+  allPlaces[i].type + "<br><br><h4>Amenities</h4>" +  allPlaces[i].places[j].amenities + "</div><br><h4>Address</h4>" +  allPlaces[i].places[j].address + "<h4 class=\"text-center mt-4\">$" + allPlaces[i].places[j].price + " per night </h4></div><div class=\"text-center mt-2\"><a class=\" btn-lg btn btn-primary text-white show-more mb-4\"' onclick='calcCost(" + total + ", " + d +")'>Reserve</a></div></div>";
            }
          }
        }
      }//loop j fin
    }//loop i fin

    // UNSUCCESSFUL VALIDATION
    if (checker == false){

      $("#searchResults").html("<div class=\"col-12 text-center py-5\"><h4>Search was unsuccessful, we could not find accommodation that matches your search requirements.</h4></div>");
    }
  }
});

// CALCULATE COSTS AND DISPLAY IN JS

function calcCost (totalCost, days) {
  document.getElementById("cost").innerHTML = "<p>The total cost for your stay is $" + totalCost + " for " + days + " day/s. <br><br> <h4> Special Offer </h4> Choose one free breakfast option for your stay</p>";
}

// MEAL DATA/OBJECT IN JS

var breakfast = [
  {
    name:  "Continential Breakfast",
    description: "Juice, coffee or tea with museli and toast",
    image: "continentialbreakfast.jpg"
  },
  {
    name: "Full Cooked Breakfast",
    description: "Eggs with tomato, bacon, sausage, and toast",
    image: "bigbreakfast.jpg"
  }
]

// SHOW MEAL OPTIONS IN JQUERY/JS

$(document).ready(function(){

  breakfastCards.innerHTML = " ";
  var x;
  for (x = 0 ; x < breakfast.length ; x ++) {


    breakfastCards.innerHTML += "<div class=\"col-12 col-sm-6 col-md-6 col-lg-3 mb-3 mt-4\">" +
    "<div class=\"border-primary card h-100\">" + "<div class=\"h-100\"><img src=\"css/images/" + breakfast[x].image + "\"class=\"card-img-top mb-2\" \"alt=\"breakfast option\">" + "<div class=\"card-body px-4\"><h4>" + breakfast[x].name + "</h4><br><p>" + breakfast[x].description + "</p> <div class=\" pb-4 float-right form-check\"><input class=\"form-check-input breakfast bg-primary\" type=\"radio\" name=\"breakfast\" value=\"option\"><label class=\"form-check-label\" for=\"breakfast\"></label></div></div>";
  }
});


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
    console.log(stDate);


    $("#datePicker2").datepicker( "option", "minDate", stDate );
    var enDate = new Date(selectedDate.getTime() + 15 * msecsInADay);

    $("#datePicker2").datepicker( "option", "maxDate", enDate );

  }
});

$("#datePicker2").datepicker({
  dateFormat: "yy-mm-dd",
  changeMonth: true,
});

// CHECKOUT FORM VALIDATION IN JQUERY

function emailCheck(){
  if($("#email").val()==""){
    $("#email").addClass("is-invalid");
    return false;
  }else{
    var regMail     =   /^([_a-zA-Z0-9-]+)(\.[_a-zA-Z0-9-]+)*@([a-zA-Z0-9-]+\.)+([a-zA-Z]{2,3})$/;
    if(regMail.test($("#email").val()) == false){
      $("#email").addClass("is-invalid");
      return false;
    }else{
      $("#email").removeClass("is-invalid");
      $("#next-form").collapse("show");
    }

  }
}
function validation(){
  if($("#fullName, #phone").val()==""){
    $("#fullName, #phone").addClass("is-invalid");
    return false;

  }else{
    $("#fullName, #phone").removeClass("is-invalid");
  }

}
$(document).ready(function() {
  $("#fullName").on("keyup",function(){
    if($("#fullName").val()==""){
      $("#fullName").addClass("is-invalid");
      return false;
    }else{
      $("#fullName").removeClass("is-invalid");
    }
  });
  $("#phone").on("keyup",function(){
    if($("#phone").val()==""){
      $("#phone").addClass("is-invalid");
      return false;
    }else{
      $("#phone").removeClass("is-invalid");
    }
  });

});

// DISPLAY PAGES IN JQUERY

$(document).ready(function(){

  $("#searchBar").ready(function(){
    $("#checkoutPage").hide();
    $("#confirmedPage").hide();
    $("#resultsPage").hide();

    $("#search").click(function(){
      $("#resultsPage").show();
      $("#checkoutPage").hide();
      $("#confirmedPage").hide();

      $(".show-more").click(function(){
        $("#resultsPage").hide();
        $("#checkoutPage").show();
        $("#confirmedPage").hide();
        $("#searchBar").hide();
        $("#slideshow").hide();
        $("#slideshow").hide();
        $(".googleMap").hide();
      });
      $("#confirm").click(function(){
        $("#resultsPage").hide();
        $("#checkoutPage").hide();
        $("#confirmedPage").show();
        $("#searchBar").hide();
        $("#slideshow").hide();
        $(".googleMap").hide();
      });
      $("#home").click(function(){
        $("#searchBar").show();
        $("#slideshow").show();
        $("#resultsPage").hide();
        $("#checkoutPage").hide();
        $("#confirmedPage").hide();
      });
    });
  });
});

// 3RD PARTY PLUGIN IN JQUERY

$(document).ready(function(){
  $(".owl-carousel").owlCarousel();
});

$(".owl-carousel").owlCarousel({
  items:1,
  margin:10,
  autoHeight:false,
  animateOut: "fadeOut"
});
