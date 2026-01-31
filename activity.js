const countryData = {
  france: {
    name: "France 🇫🇷",
    featured: [
      {
        title: "Eiffel Tower",
        img: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34",
        rating: "⭐ 4.8 (230)",
        desc: "The Eiffel Tower is a global symbol of France and a must-see attraction ✨",
      },
      {
        title: "Seine River Cruise",
        img: "https://images.unsplash.com/photo-1499856871958-5b9627545d1a?q=80&w=1120&auto=format&fit=crop",
        rating: "⭐ 4.6 (345)",
        desc: "Relaxing cruise with iconic Paris views from the river 🚤✨",
      },
      {
        title: "Paris Street Walk",
        img: "https://media.istockphoto.com/id/840587406/photo/woman-walking-in-paris.jpg?s=2048x2048&w=is&k=20&c=xByqAR8IV2VEa97j4zLwI_S7OjCBAvSVna73g76t4wE=",
        rating: "⭐ 4.7 (180)",
        desc: "Paris streets are lively and beautiful, filled with cafés, art, and historic buildings.Walking through them feels romantic and full of culture. ✨",
      },
      {
        title: "Seine River at Night",
        img: "https://media.istockphoto.com/id/653900604/photo/cityscape-of-paris-with-the-eiffel-tower-during-the-blue-hour-before-sunrise-the-rouelle.jpg?s=2048x2048&w=is&k=20&c=vvorV_KpkLjRGP2upympq9z5DQpN1Ky7FUJn4uVL1lk=",
        rating: "⭐ 4.7 (180)",
        desc: "Cafés, art & romance — Paris streets are a vibe 💜",
      },
    ],
    museum: [
      {
        title: "Louvre Museum",
        img: "https://images.unsplash.com/photo-1587648415693-4a5362b2ce41?q=80&w=1932&auto=format&fit=crop",
        rating: "⭐ 4.7 (200)",
        desc: "The Louvre is the world’s largest art museum and a historic monument in Paris, home to thousands of works including the Mona Lisa and Venus de Milo.",
      },

       {
        title: "orsay Museum",
        img: "https://images.unsplash.com/photo-1732841021162-b3c37f05e6eb?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        rating: "⭐ 4.7 (200)",
        desc: "Musée d’Orsay is a famous art museum in Paris known for Impressionist paintings.It is located in a former railway station and holds many masterpieces.",
      },

       {
        title: "Rodin Museum",

        img:"https://media.istockphoto.com/id/172210613/photo/rodin-museum.jpg?s=1024x1024&w=is&k=20&c=trVFS_F_AJ6gfrkmTuF0Hp2I6jhQABOPfrrI_B94si8=",

        rating: "⭐ 4.7 (200)",
        desc: "The Rodin Museum in Paris showcases the works of sculptor Auguste Rodin, including The Thinker and The Kiss.",
      },


       {
        title: "pompidou Center",
        img: "https://media.istockphoto.com/id/1182122290/photo/paris-typical-roofs-in-the-marais.jpg?s=2048x2048&w=is&k=20&c=g5abAf1k4DJ9Lekj38KtMSNMLqa6sCJJmP5EvcEo63I=",
        rating: "⭐ 4.7 (200)",
        desc: "The Centre Pompidou is a modern art museum in Paris known for its unique architecture and contemporary art collections.",
      },
    ],
    day: [
      {
        title: "City Day Tour",
        img: "https://media.istockphoto.com/id/1145422105/photo/eiffel-tower-aerial-view-paris.jpg?s=2048x2048&w=is&k=20&c=i3FwinI2s_TAoJOCa72v2_1PQTXeoUFYEFZe0rgFoac=",
        rating: "⭐ 4.6",
        desc: "Explore the vibrant city of Paris with this guided day tour, visiting iconic landmarks and experiencing the local culture.",
      },
       {
        title: "Nature Excursion",
        img: "https://images.unsplash.com/photo-1501785888041-af3ef285b470",
    
        rating: "⭐ 4.6",
        desc: "Discover the natural beauty surrounding Paris with a day trip to scenic parks and gardens.",
      },
       {
        title: "Village Tour",
        img: "https://images.unsplash.com/photo-1598603396168-4d3efd660a42?q=80&w=1273&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        rating: "⭐ 4.6",
        desc: "Experience the charm of French villages with a day tour exploring local culture and traditions.",
      },
       {
        title: "historic tour",
        img: "https://plus.unsplash.com/premium_photo-1754262065996-5b89faa933cd?q=80&w=1339&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        rating: "⭐ 4.6",
        desc: "Explore the rich history of Paris with this guided historic tour.",
      },
    ],
    night: [
      {
        title: "Paris Night Lights",
        img: "https://media.istockphoto.com/id/621580846/photo/eiffel-tower-paris-france-march-25-2016.jpg?s=2048x2048&w=is&k=20&c=wdaRJN2GZdvcFiJe6h1yUA-oLUqPxlDox9RBs86Zy4U=",
        rating: "⭐ 4.7",
        desc: "Night tour with illuminated landmarks.",
      },
       {
        title: "paris night walk",
        img: "https://plus.unsplash.com/premium_photo-1694475370053-e90ef86676ab?q=80&w=2077&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        rating: "⭐ 4.7",
        desc: "Experience the charm of Paris at night with this guided walking tour.",
      },
       {
        title: "street life tour",
        img: "https://media.istockphoto.com/id/1483917209/photo/ferris-wheel-on-place-dela-concorde.jpg?s=2048x2048&w=is&k=20&c=sKpeJJuS3NQZNFQ8BMKKfgbHA0bMZ81z8VV5RLxnvYs=",

        rating: "⭐ 4.7",
        desc: "Explore the vibrant street life of Paris.",
      }, {
        title: "Seine River Night Cruise",
        img: "https://images.unsplash.com/photo-1758206238100-425897ad6833?q=80&w=1425&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        rating: "⭐ 4.7",
        desc: "Enjoy a scenic night cruise along the Seine River.",
      },
    ],
  },

  russia: {
    name: "Russia 🇷🇺",
    featured: [
      {
        title: "Red Square",
        img: "https://plus.unsplash.com/premium_photo-1697730261041-ce58fb9acf29?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        rating: "⭐ 4.7 (500)",
        desc: "Historic heart of Moscow — powerful vibes 🏛️",

      },
      {
        title: "Saint Basil’s Cathedral",
        img: "https://images.unsplash.com/photo-1642695113989-105367adabe6?q=80&w=683&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        rating: "⭐ 4.8 (800)",
        desc: "Iconic colorful cathedral in Moscow.",
      },

      {
        title: "Lake Baikal",
        img: "https://images.unsplash.com/photo-1548130729-90d4d11826f8?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        rating: "⭐ 4.8 (800)",
        desc: "The deepest lake in the world with crystal clear water.",
      },

      {
        title: "sochi",
        img: "https://images.unsplash.com/photo-1567245597540-5232c358e457?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        rating: "⭐ 4.8 (800)",
        desc: "Popular resort city on the Black Sea coast.",
      },
    ],
    museum: [
      {
        title: "russian Museum",
        img: "https://plus.unsplash.com/premium_photo-1694475548474-62ed644e6919?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        rating: "⭐ 4.6 (300)",
        desc: "Extensive Russian art collection in St. Petersburg.",
      },

{
        title: "the state tretyakov gallery",
        img: "https://images.unsplash.com/photo-1753811606130-d10391ba2ce8?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        rating: "⭐ 4.6 (300)",
        desc: "One of the largest and oldest museums in the world, located in St. Petersburg.",
      },
      {
        title: "hermitage Museum",
        img: "https://images.unsplash.com/photo-1603877510016-5ecf6c6cf83b?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        rating: "⭐ 4.6 (300)",
        desc: "One of the largest and oldest museums in the world, located in St. Petersburg.",
      },

       {
        title: "pushkin Museum of fine arts",
        img: "https://images.unsplash.com/photo-1696436392889-d6520968a826?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        rating: "⭐ 4.6 (300)",
        desc: "One of the most important museums of fine arts in Russia.",
      },

    ],
    day: [

      {
        title: "altai mountains tour",
        img: "https://images.unsplash.com/photo-1619426288206-e678b4d09d2d?q=80&w=1229&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        rating: "⭐ 4.5",
        desc: "Explore the stunning Altai Mountains with guided hikes and nature tours.",
      },
{
        title:"Peterhof Palace Tour",
        img: "https://images.unsplash.com/photo-1610197361600-33a3a5073cad?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",

        rating: "⭐ 4.5",
        desc: "Explore the beautiful Peterhof Palace in St. Petersburg.",
      },


      {
        title: "gorky park tour",
        img: "https://plus.unsplash.com/premium_photo-1694475542490-2392e8dee8c2?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        rating: "⭐ 4.5",
        desc: "Explore the beautiful Gorky Park in Moscow.",
      },


      {
        title: "nevey prospect tour",
        img: "https://images.unsplash.com/photo-1571850566949-37629c93ca92?q=80&w=735&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        rating: "⭐ 4.5",
        desc: "Explore the beautiful Nevey Prospect area in Moscow.",
      },


    


    ],
    night: [
      
      {
        title: "Moscow Night",
        img: "https://images.unsplash.com/photo-1514813621023-7a1e3fca8c1b?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        rating: "⭐ 4.4",
        desc: "City lights & vibrant nightlife.",
      },
 {
        title: "zaryadye park night tour",
        img: "https://plus.unsplash.com/premium_photo-1724336774996-4c9e00ed53df?q=80&w=1171&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        rating: "⭐ 4.4",
        desc: "Explore the beautiful Zaryadye Park at night.",
      },
       {
        title: "vladivostok golden bridge night tour",
        img: "https://images.unsplash.com/photo-1587637885131-8b08567433d6?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        rating: "⭐ 4.4",
        desc: "Scenic night views of the Golden Bridge in Vladivostok.",
      },
       {
        title: "white nights embankment tour",
        img: "https://media.istockphoto.com/id/1167357582/photo/baku-ferris-wheel-azerbaijan-high-angel-view.jpg?s=1024x1024&w=is&k=20&c=kJLJ9TudgXIzQ_eNBibeid_sDlGmpVk8nRxbPsLFnbc=",
        rating: "⭐ 4.4",
        desc: "Night vibes with city lights & streets.",
      },


      
    ],
  },

  italy: {
    name: "Italy 🇮🇹",
    featured: [
      {
        title: "rome Colosseum",
        img: "https://images.unsplash.com/photo-1552832230-c0197dd311b5?q=80&w=1096&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        rating: "⭐ 4.8 (900)",
        desc: "Ancient Roman gladiator arena — legendary place!",
      },
      {
        title: "Venice",
        img: "https://images.unsplash.com/photo-1519112232436-9923c6ba3d26?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        rating: "⭐ 4.8 (900)",
        desc: "Canals, gondolas & romance — Venice vibes!",
      },
      {
        title: "florence ",
        img: "https://images.unsplash.com/photo-1528114039593-4366cc08227d?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        rating: "⭐ 4.8 (900)",
        desc: "Beautiful Renaissance city with art & history.",
      },
      {
        title: "milan",
        img: "https://plus.unsplash.com/premium_photo-1661962887170-e7db3f307c7a?q=80&w=1171&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        rating: "⭐ 4.8 (900)",
        desc: "Milan is known for its fashion, design, and art.",
      },















    ],
    museum: [
      {
        title: "Vatican Museums",
        img: "https://plus.unsplash.com/premium_photo-1694475441223-4beecbf927cc?q=80&w=1169&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        rating: "⭐ 4.7 (700)",
        desc: "Art + history + Sistine Chapel.",
      },


       {
        title: "uffizi Gallery",
        img: "https://images.unsplash.com/photo-1601130200455-cdd4befa65fc?q=80&w=735&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        rating: "⭐ 4.7 (700)",
        desc: "Renaissance art masterpieces in Florence.",
      },
 {
        title: "accademia Museums",
        img: "https://media.istockphoto.com/id/471870875/photo/the-acaddemia-florence-italy.jpg?s=1024x1024&w=is&k=20&c=y5MHRVdiVaiSpodbFEan2LiXpYavGym0yhYh9dNS06o=",
        rating: "⭐ 4.7 (700)",
        desc: "Home of Michelangelo’s David sculpture.",
      },

       {
        title: "museo egizio",
        img: "https://plus.unsplash.com/premium_photo-1697729501403-fdb0b267a027?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        rating: "⭐ 4.7 (700)",
        desc: "Egyptian artifacts and ancient history.",
      },


    ],
    day: [
     {
        title: "Rome Food Tour",
        img: "https://media.istockphoto.com/id/1388524218/photo/woman-with-ice-cream-while-traveling-in-rome.jpg?s=1024x1024&w=is&k=20&c=uU_X9Q1dFqSHgew06edb0JDRc490H20Op5dA42zOhvE=",
        rating: "⭐ 4.6",
        desc: "Pizza, pasta, gelato — Italy doesn’t miss 😄",
      },
      {
        title: "leaning tower of Pisa tour",
        img: "https://images.unsplash.com/photo-1590226053097-e2984346ceaa?q=80&w=734&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        rating: "⭐ 4.6",
        desc: "Iconic leaning tower experience.",
      },
       {
        title: "St.Mark's Square tour",
        img: "https://images.unsplash.com/photo-1506437655018-dd8ec8371702?q=80&w=1349&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        rating: "⭐ 4.6",
        desc: "St.Mark's Square in Venice is a must-see.",
      },
       {
        title: "cinque terre villages",
        img: "https://plus.unsplash.com/premium_photo-1661962567804-e4ad10d30d1d?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        rating: "⭐ 4.6",
        desc: "Beautiful coastal villages in Cinque Terre.",
      },



    ],
    night: [
      
      {
        title: "Night Walk Rome",
        img: "https://images.unsplash.com/photo-1564174359424-00b349f9f383?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        rating: "⭐ 4.5",
        desc: "Rome at night = pure magic & history.",
      },
      {
        title: "Trevi Fountain ",
        img: "https://plus.unsplash.com/premium_photo-1661964110043-15217313f891?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        rating: "⭐ 4.5",
        desc: "Rome at night = pure magic & history.",
      },
      {
        title: "grand canal Venice",
        img: "https://plus.unsplash.com/premium_photo-1661953180092-94e620a0d1ba?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        rating: "⭐ 4.5",
        desc: "Grand Canal in Venice is a must-see.",
      },
      {
        title: "Amalfi Coast Night",
        img: "https://plus.unsplash.com/premium_photo-1677359734743-231e33b5c7d3?q=80&w=760&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        rating: "⭐ 4.5",
        desc: "Amalfi Coast at night = cinematic vibes.",
      },

    ],
  },

  japan: {
    name: "Japan 🇯🇵",
    featured: [
      {
        title: "Tokyo Streets",
        img: "https://images.unsplash.com/photo-1549693578-d683be217e58?q=80&w=1200&auto=format&fit=crop",
        rating: "⭐ 4.9 (1200)",
        desc: "Neon lights + future vibes 💫",
      },
      {
        title: "Mount Fuji",
        img: "https://plus.unsplash.com/premium_photo-1661964177687-57387c2cbd14?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        rating: "⭐ 4.9 (1200)",
        desc: "Iconic mountain view in Japan.",
      },
      {
        title: "nara deer park",
        img:"https://images.unsplash.com/photo-1726737699208-bee1475d3a3f?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",

        rating: "⭐ 4.9 (1200)",
        desc: "Beautiful deer park in Nara.",
      },
      {
        title: "kyoto temples",
        img: "https://images.unsplash.com/photo-1558870832-c8db4b5b47d1?q=80&w=688&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        rating: "⭐ 4.9 (1200)",
        desc: "Beautiful temples in Kyoto.",
      },

























    ],
    museum: [
      {
        title: "Tokyo National Museum",
        img: "https://images.unsplash.com/photo-1677774398078-dfebffbfcd54?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        rating: "⭐ 4.7 (350)",
        desc: "Beautiful Japanese art & culture.",
      },
       {
        title:"ghibli museum",
        img: "https://images.unsplash.com/photo-1576026934423-c08ffbd8cef5?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        rating: "⭐ 4.7 (350)",
        desc: "Ghibli Museum in Tokyo is a must-visit for fans of Studio Ghibli.",
      },
       {
        title: " kyoto National Museum",
        img: "https://plus.unsplash.com/premium_photo-1723669629708-0de9b27820b5?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        rating: "⭐ 4.7 (350)",
        desc: "Beautiful Kyoto museum showcasing Japanese history.",
      },
       {
        title: "osaka Museum of History",
        img: "https://images.unsplash.com/photo-1769304728292-459d97fc0b8b?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        rating: "⭐ 4.7 (350)",
        desc: "Beautiful Osaka museum showcasing Japanese history.",
      },























    ],
    day: [
      {
        title: "Mount Fuji Day Trip",
        img: "https://plus.unsplash.com/premium_photo-1661964177687-57387c2cbd14?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        rating: "⭐ 4.8",
        desc: "Fuji views + chill tour.",
      },
       {
        title: "hiroshima Day Trip",
        img: "https://plus.unsplash.com/premium_photo-1724336774996-4c9e00ed53df?q=80&w=1171&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        rating: "⭐ 4.8",
        desc: "Explore the history and peace of Hiroshima.",
      },
       {
        title: "nagasakiDay Trip",
        img: "https://images.unsplash.com/photo-1646657508506-615eb18f863e?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        rating: "⭐ 4.8",
        desc: "Explore the history and peace of Nagasaki. ",
      },
       {
        title: "Edo toky0 Day Trip",
        img: "https://images.unsplash.com/photo-1667736452055-6d5459138e90?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        rating: "⭐ 4.8",
        desc: "Explore the history and culture of Edo Tokyo.",
      },
    ],
    night: [
      {
        title: "Shibuya Night",
        img: "https://images.unsplash.com/photo-1503899036084-c55cdd92da26?q=80&w=1200&auto=format&fit=crop",
        rating: "⭐ 4.7",
        desc: "Shibuya crossing at night hits different.",
      },
       {
        title: "odaiba night view",
        img: "https://plus.unsplash.com/premium_photo-1661877991606-9ff3119acc60?q=80&w=1172&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        rating: "⭐ 4.7",
        desc: "Odaiba at night is magical.",
      },
       {
        title: "Tokyo tower at Night",
        img: "https://images.unsplash.com/photo-1536098561742-ca998e48cbcc?q=80&w=836&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        rating: "⭐ 4.7",
        desc: "Tokyo tower at night is magical.",
      },
       {
        title: "yokohama minato mirai night",
        img: "https://images.unsplash.com/photo-1541850034634-55298d176508?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        rating: "⭐ 4.7",
        desc: "Yokohama minato mirai at night is magical.",
      },
    ],
  },

 

  india: {
    name: "India 🇮🇳",
    featured: [
      {
        title: "Taj Mahal",
        img: "https://images.unsplash.com/photo-1524492412937-b28074a5d7da?q=80&w=1200&auto=format&fit=crop",
        rating: "⭐ 4.9 (5000)",
        desc: "One of the 7 wonders — pure beauty 💛",
      },
       {
        title: "Hampi",
        img: "https://images.unsplash.com/photo-1616606484004-5ef3cc46e39d?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        rating: "⭐ 4.9 (5000)",
        desc: "Hampi is a UNESCO World Heritage Site with ancient ruins and temples. 💛",
      },
       {
        title: "madurai Meenakshi Temple",
        img: "https://media.istockphoto.com/id/172798272/photo/gopurams-of-the-meenakshi-temple.jpg?s=2048x2048&w=is&k=20&c=xROCWjenC_kNcVi-ox3a0pnydRJcxlDmlKBCKWdPw2I=",
        rating: "⭐ 4.9 (5000)",
        desc: "Madurai Meenakshi Temple is a UNESCO World Heritage Site with stunning gopurams and intricate architecture. 💛",
      },
       {
        title: "thanjavur Brihadeeswarar Temple",
        img: "https://images.unsplash.com/photo-1675677044118-3fd84f9deaf0?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        rating: "⭐ 4.9 (5000)",
        desc: "Thanjavur Brihadeeswarar Temple is a UNESCO World Heritage Site with ancient architecture and intricate carvings. 💛",
      },

























    ],
    museum: [
      {
        title: "National Museum",
        img: "https://plus.unsplash.com/premium_photo-1697730497487-7bda47e4baff?q=80&w=880&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        rating: "⭐ 4.6",
        desc: "Indian history & culture in one place.",
      },
       {
        title: "Indian  Museum",
        img: "https://images.unsplash.com/photo-1598431415889-f712fa9c5c50?q=80&w=735&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        rating: "⭐ 4.6",
        desc: "Indian history & culture in one place.",
      },
       {
        title: "Salar Jung Museum",
        img: "https://images.unsplash.com/photo-1652919197421-49df1892c8d1?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        rating: "⭐ 4.6",
        desc: "Indian history & culture in one place.",
      },
       {
        title: "government Museum Chennai",
        img: "https://media.istockphoto.com/id/472942802/photo/madras-university.jpg?s=2048x2048&w=is&k=20&c=1pbIlnmDWpKt3zb1g78hB5Ke3WheZihh8mxofs3aI_U=",
        rating: "⭐ 4.6",
        desc: "Indian history & culture in one place.",
      },


















    ],
    day: [
      {
        title: "Agra Heritage Tour",
        img: "https://images.unsplash.com/photo-1602643163983-ed0babc39797?q=80&w=1200&auto=format&fit=crop",
        rating: "⭐ 4.7",
        desc: "Taj + Agra Fort + street food combo.",
      },
       {
        title: "varkala Beach Day Trip",
        img: "https://images.unsplash.com/photo-1708149852480-d499bbada7ce?q=80&w=1071&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        rating: "⭐ 4.7",
        desc: "Varkala Beach is known for its stunning cliffs and golden sands.",
      },
       {
        title: "valley of flowers National Park",
        img: "https://images.unsplash.com/photo-1502439502085-ebf78244370a?q=80&w=1249&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        rating: "⭐ 4.7",
        desc: "Valley of Flowers is a UNESCO World Heritage Site known for its alpine meadows and diverse flora.",
      },
       {
        title: "jaipur City Palace Tour",
        img: "https://plus.unsplash.com/premium_photo-1661963054563-ce928e477ff3?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        rating: "⭐ 4.7",
        desc: "Jaipur City Palace is a UNESCO World Heritage Site with stunning architecture and royal history.",
      },
















    ],
    night: [
      {
        title: " gateway of india at night",
        img: "https://plus.unsplash.com/premium_photo-1697730404282-e00b45d5b76e?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        rating: "⭐ 4.5",
        desc: "the gateway of india is the beautiful way",

      },
 {
        title: " marine drive",
        img: "https://images.unsplash.com/photo-1642233803470-00129cdeba8f?q=80&w=735&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        rating: "⭐ 4.5",
        desc: "Called the queens of necklace",
      },
       {
        title:"varanasi ganga aarti",
        img:"https://images.unsplash.com/photo-1665413793441-13aedeb062d3?q=80&w=658&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        rating: "⭐ 4.5",
        desc:"evening river ceremony with lamps and chants",
      },
       {
        title: "lotus temple",
        img:"https://media.istockphoto.com/id/671951258/photo/lotus-temple-in-new-delhi-india.jpg?s=2048x2048&w=is&k=20&c=IQ9OsQ_SomLoA9RDgeGrZqH1eMLKPaFtVh-deb1U8W8=",
        rating: "⭐ 4.5",
        desc: "peaceful and nicely illuminated",
      },











      

    ],
  },

/* OPEN COUNTRY */
function openCountry(cardEl) {
  const countryKey = cardEl.dataset.country;
  const data = countryData[countryKey];
  if (!data) return;

  document.getElementById("page1").classList.remove("active");
  document.getElementById("page2").classList.add("active");

  document.getElementById("countryName").innerText = data.name;
  document.getElementById("countryTitle").innerText = `Explore ${data.name}`;

  renderGrid("featuredGrid", data.featured);
  renderGrid("museumGrid", data.museum);
  renderGrid("dayGrid", data.day);
  renderGrid("nightGrid", data.night);

  window.scrollTo({ top: 0, behavior: "smooth" });
}

/* RENDER SECTION */
function renderGrid(gridId, items = []) {
  const grid = document.getElementById(gridId);
  grid.innerHTML = "";

  items.forEach((item) => {
    grid.innerHTML += `
      <div class="card">
        <span class="heart">♥</span>
        <img src="${item.img}" alt="${item.title}">
        <div class="info">
          <h3>${item.title}</h3>
          <div class="rating">${item.rating}</div>
          <div class="desc">${item.desc}</div>
        </div>
      </div>
    `;
  });
}

/* GO TO SECTION */
function go(id) {
  document.getElementById(id).scrollIntoView({ behavior: "smooth" });
}

/* HEART TOGGLE */
function toggleHeart(icon) {
  icon.classList.toggle("active");
  if (icon.classList.contains("fa-heart")) {
    icon.classList.toggle("fa-solid");
    icon.classList.toggle("fa-regular");
  }
}

document.addEventListener("click", function (e) {
  if (e.target.classList.contains("heart")) {
    e.target.classList.toggle("active");
  }
});

/* CALENDAR */
const overlay = document.getElementById("overlay");
const daysBox = document.getElementById("days");
const monthBox = document.getElementById("month");

let m = 0;
const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
const days = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

function render() {
  daysBox.innerHTML = "";
  monthBox.innerText = months[m];

  for (let i = 1; i <= days[m]; i++) {
    let d = document.createElement("div");
    d.innerText = i;
    daysBox.appendChild(d);
  }
}
function openCal() {
  overlay.style.display = "flex";
  render();
}
function closeCal() {
  overlay.style.display = "none";
}
function prev() {
  m = (m + 11) % 12;
  render();
}
function next() {
  m = (m + 1) % 12;
  render();
}