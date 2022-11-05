const Products = [
  {
    id: 1,
    title: "Chuck 70",
    gender: "women",
    category: "sneakers",
    price: "15.344,99",
    img: require("../images/mujer/calzado/img1.jpg"),
    desc: "Las Chuck 70 combinan los mejores detalles de las Chuck de los 70 con una confección artesanal impecable y materiales premium.",
  },
  {
    id: 2,
    title: "Peanuts Chuck Taylor All Star",
    gender: "women",
    categoy: "sneakers",
    price: "16.473,99",
    img: require("../images/mujer/calzado/img2.jpg"),
    desc: "Converse se une a la icónica tira cómica para traer un poco de positividad alegre al mundo. ",
  },
  {
    id: 3,
    title: "Run Star Hike",
    gender: "women",
    category: "sneakers",
    price: "21.208,99",
    img: require("../images/mujer/calzado/img3.jpg"),
    desc: "La plataforma voluminosa y la suela de goma dentada dan un toque inesperado a tus Chuck de todos los días. ",
  },
  {
    id: 4,
    title: "Weapon CX NBA",
    gender: "women",
    category: "sneakers",
    price: "19.582,99",
    img: require("../images/mujer/calzado/img4.jpg"),
    desc: "Esta leyenda del baskeball lanzada en 1986 se reinventa para homenajear al mejor partido de la historia. ",
  },
  {
    id: 5,
    title: "Mochila Straight",
    gender: "women",
    category: "accessories",
    price: "11.287,99",
    img: require("../images/mujer/accesorios/img1.jpg"),
    desc: "Mochila con compartimento interno para laptop. Bolsillos laterales para botellas. Tres bolsillos delanteros. ",
  },
  {
    id: 6,
    title: "Bandolera Comms Pouch 2.0",
    gender: "women",
    category: "accessories",
    price: "13.492,99",
    img: require("../images/mujer/accesorios/img2.jpg"),
    desc: "Bandolera pequeña de ripstop. Panel trasero transparente para smartphone. Bolsillo principal con cierre. Cordones para ajuste personalizado.",
  },
  {
    id: 7,
    title: "Mochila Go 2",
    gender: "women",
    category: "accessories",
    price: "14.108,99",
    img: require("../images/mujer/accesorios/img3.jpg"),
    desc: "Mochila con compartimento interno para laptop. Bolsillos laterales para botellas. Dos bolsillos delanteros con cierre.",
  },
  {
    id: 8,
    title: "Bandolera Comms Pouch 2.0 Print Archive Leopard",
    gender: "women",
    category: "accessories",
    price: "15.568",
    img: require("../images/mujer/accesorios/img4.jpg"),
    desc: "Bandolera pequeña de ripstop. Panel trasero transparente para smartphone. Bolsillo principal con cierre. Cordones para ajuste personalizado.",
  },
  {
    id: 9,
    title: "Remera Snake",
    gender: "women",
    category: "sportswear",
    price: "7.769,99",
    img: require("../images/mujer/indumentaria/img1.jpg"),
    desc: "Remera escote redondo. Manga corta. Estampa en el frente.",
  },
  {
    id: 10,
    title: "Top Fit",
    gender: "women",
    category: "sportswear",
    price: "8.985,99",
    img: require("../images/mujer/indumentaria/img2.jpg"),
    desc: "Top escote redondo. Elastico a tono en parte inferior. Logo estampado en pecho y en espalda.",
  },
  {
    id: 11,
    title: "Remera Metals Star Chevron",
    gender: "women",
    category: "sportswear",
    price: "5.715",
    img: require("../images/mujer/indumentaria/img3.jpg"),
    desc: "Remera escote redondo. Manga corta. Estampa metalizada en frente.",
  },
  {
    id: 12,
    title: "Remera All Star",
    gender: "women",
    category: "sportswear",
    price: "4.645,99",
    img: require("../images/mujer/indumentaria/img4.jpg"),
    desc: "Remera classic fit. Manga corta. Estampa en el frente.",
  },
  {
    id: 13,
    title: "Chuck 70",
    gender: "men",
    category: "sneakers",
    price: "22.628,99",
    img: require("../images/hombre/calzado/img1.jpg"),
    desc: "Las Chuck 70 combinan los mejores detalles de las Chuck de los 70 con una confección artesanal impecable y materiales premium.",
  },
  {
    id: 14,
    title: "Jack Purcell",
    gender: "men",
    category: "sneakers",
    price: "26.458,99",
    img: require("../images/hombre/calzado/img2.jpg"),
    desc: "Un estilo a tu manera y modernos detalles se unen en estas zapatillas Converse Jack Purcell Vantage Crush.",
  },
  {
    id: 15,
    title: "Rebound",
    gender: "men",
    category: "sneakers",
    price: "24.893,99",
    img: require("../images/hombre/calzado/img3.jpg"),
    desc: "Inspiradas en los modelos Converse de los años 80´s, Converse Rebound resignifica a las zapatillas de básquet más icónicas de la década dorada.",
  },
  {
    id: 16,
    title: "Rival mid",
    gender: "men",
    category: "sneakers",
    price: "23.355,99",
    img: require("../images/hombre/calzado/img4.jpg"),
    desc: "Inspiradas en los modelos originales de basketball: Fastbreak y Pro Mesh, las zapatillas Converse Rival cuentan con el estilo urbano de siempre pero con un giro vanguardista.",
  },
  {
    id: 17,
    title: "Mochila Speed 2",
    gender: "men",
    category: "accessories",
    price: "15.129,99",
    img: require("../images/hombre/accesorios/img2.jpg"),
    desc: "Mochila con estampa logo. Bolsillo delantero con cierre. Bolsillo para botella lateral. Liviana.",
  },
  {
    id: 18,
    title: "Riñonera Sling Pack Black",
    gender: "men",
    category: "accessories",
    price: "11.930,99",
    img: require("../images/hombre/accesorios/img3.jpg"),
    desc: "Bandolera pequeña de poliester 100% reciclado. Bolsillo con cierre. Funda interna para organización. Ajuste con hebilla.",
  },
  {
    id: 19,
    title: "Gorra Chuck Patch Baseball Hps",
    gender: "men",
    category: "accessories",
    price: "4.555,99",
    img: require("../images/hombre/accesorios/img4.jpg"),
    desc: "Cap clasico six panel con patch. Visera pre curvada.",
  },
  {
    id: 20,
    title: "Gorro Novelty",
    gender: "men",
    category: "accessories",
    price: "5.439,99",
    img: require("../images/hombre/accesorios/img1.jpg"),
    desc: "Sombrero de pescador. Ala ancha para protegerse del sol. Aspecto clásico y plano.",
  },
  {
    id: 21,
    title: "Remera Cons Face",
    gender: "men",
    category: "sportswear",
    price: "10.045,99",
    img: require("../images/hombre/indumentaria/img1.jpg"),
    desc: "Remera classic fit. Manga corta. Bolsillo aplicado en frente con estampa.",
  },
  {
    id: 22,
    title: "Remera Chuck",
    gender: "men",
    category: "sportswear",
    price: "7.936,99",
    img: require("../images/hombre/indumentaria/img2.jpg"),
    desc: "Remera classic fit. Manga corta. Con estampa en frente.",
  },
  {
    id: 23,
    title: "Buzo Star Chevron",
    gender: "men",
    category: "sportswear",
    price: "18.296,99",
    img: require("../images/hombre/indumentaria/img3.jpg"),
    desc: "Buzo con capucha y bolsillo canguro. Estampa en frente y espalda.",
  },
  {
    id: 24,
    title: "Remera Cons Stain",
    gender: "men",
    category: "sportswear",
    price: "7.936,99",
    img: require("../images/hombre/indumentaria/img4.jpg"),
    desc: "Remera classic fit. Manga corta. Tela base sublimada. Logo estampado en frente.",
  },
  {
    id: 25,
    title: "Chuck Taylor All Star Platform",
    gender: "kids",
    category: "sneakers",
    price: "17.470,99",
    img: require("../images/niño/calzado/img1.jpg"),
    desc: "Diseñadas para los chicos con un gran estilo, estas Chuck con plataforma son imprescindibles. Los tonos pasteles combinan con todo lo que tengan en su armario.",
  },
  {
    id: 26,
    title: "Chuck Taylor All Star 2V",
    gender: "kids",
    category: "sneakers",
    price: "21.504,99",
    img: require("../images/niño/calzado/img2.jpg"),
    desc: "Es difícil negar que los niños se ven realmente lindos con las zapatillas Chuck Taylor All Star.",
  },
  {
    id: 27,
    title: "Chuck Taylor All Star",
    gender: "kids",
    category: "sneakers",
    price: "18.091,99",
    img: require("../images/niño/calzado/img3.jpg"),
    desc: "Es difícil negar que los niños se ven realmente lindos con las zapatillas Chuck Taylor All Star.",
  },
  {
    id: 28,
    title: "Chuck Taylor All Star",
    gender: "kids",
    category: "sneakers",
    price: "15.368,99",
    img: require("../images/niño/calzado/img4.jpg"),
    desc: "Para un estilo en el que puedas confiar, las zapatillas Chuck Taylor All Star son un elemento básico de la moda. Las icónicas siluetas de caña alta y baja se mantienen fieles al legado.",
  },
  {
    id: 29,
    title: "Short All Star",
    gender: "kids",
    category: "sportswear",
    price: "4.664,99",
    img: require("../images/niño/indumentaria/img1.jpg"),
    desc: "Bermuda con cintura elastizada. Cordon interno para ajustar. Bolsillos en frente y espalda. Logo estampado en lateral.",
  },
  {
    id: 30,
    title: "Musculosa All Star",
    gender: "kids",
    category: "sportswear",
    price: "5.477,99",
    img: require("../images/niño/indumentaria/img2.jpg"),
    desc: "Remera sin mangas. Logo estampado en frente. Cuello de ribb.",
  },
  {
    id: 31,
    title: "Campera Hoodie Nova",
    gender: "kids",
    category: "sportswear",
    price: "14.132,99",
    img: require("../images/niño/indumentaria/img3.jpg"),
    desc: "Campera con acceso por cierre diente de perro a tono. Capucha con cordón para ajustar. Bolsillos delanteros. Cintura y puños de ribb. Logo estampado en frente.",
  },
  {
    id: 32,
    title: "Remera Mini Patch",
    gender: "kids",
    category: "sportswear",
    price: "5.365,99",
    img: require("../images/niño/indumentaria/img4.jpg"),
    desc: "Remera classic fit. Manga corta. Logo estampado en frente.",
  }
];

export const getProducts = () => {
 return new Promise(function (resolve) {
    setTimeout(() => {
      resolve(Products);
    }, 2000);
  });
};