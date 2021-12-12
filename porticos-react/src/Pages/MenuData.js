const menu = [
  {
    id: 1,
    title: 'Se formó el Bembé 6pc/12pc',
    category: 'Entradas',
    price: "$8/$15",
    img:
      'https://ocdn.eu/pulscms-transforms/1/N2Ek9kpTURBXy82ZjFhYTI3NzBjNDhkNDczYTRiMTg2NWE0ZDNmNmFlNy5qcGeSlQLNAxQAwsOVAgDNAvjCw4GhMAU',
    desc: `Alitas Fritas con salsa de tu selección; Mojo Isleño, Parcha y/o Guayaba.`,
  },
  {
    id: 2,
    title: 'Buñuelos de Bacalao',
    category: 'Entradas',
    price: "$7",
    img:
      'https://ocdn.eu/pulscms-transforms/1/zI6k9kpTURBXy8yMzRlMTBmNDBmMzg0YTFjZDZiYjczZDIxZTc2YzE3MC5qcGeSlQLNAxQAwsOVAgDNAvjCw4GhMAU',
    desc: `Fritura de name, yautía y bacalao.`,
  },

  {
    id: 3,
    title: 'Queso frito',
    category: 'Entradas',
    price: "$8",
    img:
      'https://ocdn.eu/pulscms-transforms/1/N2Ek9kpTURBXy82ZjFhYTI3NzBjNDhkNDczYTRiMTg2NWE0ZDNmNmFlNy5qcGeSlQLNAxQAwsOVAgDNAvjCw4GhMAU',
    desc: `Queso del país con salsa de guayaba y/o parcha.`,
  },

  {
    id: 4,
    title: 'Yuca frita con Picadillo',
    category: 'Entradas',
    price: "$9",
    img: 'https://www.chefspencil.com/wp-content/uploads/Suya.jpg',
    desc: `Palitos de yuca acompañada de carne molida y salsa de ajo, cilantro y queso.`,
  },
  {
    id: 5,
    title: 'Carne Frita al Limón',
    category: 'Entradas',
    price: "$8",
    img:
      'https://ocdn.eu/pulscms-transforms/1/N2Ek9kpTURBXy82ZjFhYTI3NzBjNDhkNDczYTRiMTg2NWE0ZDNmNmFlNy5qcGeSlQLNAxQAwsOVAgDNAvjCw4GhMAU',
    desc: `Masitas de cerdo fritas al limón, incluye 2 complementos.`,
  },
  {
    id: 6,
    title: 'Pica Pollo',
    category: 'Entradas',
    price: "$9",
    img:
      'https://img.buzzfeed.com/buzzfeed-static/static/2019-01/14/17/asset/buzzfeed-prod-web-06/sub-buzz-25688-1547505890-13.jpg?output-quality=auto&output-format=auto',
    desc: `Masitas de pollo empanadas con la salsa de su elección.`,
  },
  {
    id: 7,
    title: 'Wah Gwaan',
    category: 'Entradas',
    price: "$9",
    img:
      'https://img.buzzfeed.com/buzzfeed-static/static/2019-01/14/17/asset/buzzfeed-prod-web-06/sub-buzz-25688-1547505890-13.jpg?output-quality=auto&output-format=auto',
    desc: `Albóndigas de carne de res con especies en un guiso jamaiquino.`,
  },
  {
    id: 8,
    title: 'El Fracatán 12pc/24pc',
    category: 'Entradas',
    price: "$10/$16",
    img:
      'https://ocdn.eu/pulscms-transforms/1/Mg3k9kpTURBXy81Mjc2OWJjZGI3ZTE0NDljMTRhZmYyYWI1MzhmNmRlMC5qcGeSlQLNAxQAwsOVAgDNAvjCw4GhMAU',
    desc: `Llámalas como quieras, surtido de empanadillas o pastelillos. Escoge entre 12 pcs o 24 pcs.`,
  },
  {
    id: 9,
    title: 'La Tripleta',
    category: 'Emparedados/Hamburguesas',
    price: "$12",
    img:
      'https://ocdn.eu/pulscms-transforms/1/U_fk9kpTURBXy81NGM2MzIxNGE2NTVmYmI2YmU4Njg0MTJkM2QyODQzNy5qcGeSlQLNAxQAwsOVAgDNAvjCw4GhMAU',
    desc: `Emparedado de ropa vieja, lomo de cerdo, jamón, pollo, repollo fresco, queso del país, salsa rosada en pan artesanal. Acompañado de palitos de yuca.`,
  },
  {
    id: 10,
    title: 'El Boricua',
    category: 'Emparedados/Hamburguesas',
    price: "$12",
    img:
      'https://ocdn.eu/pulscms-transforms/1/N2Ek9kpTURBXy82ZjFhYTI3NzBjNDhkNDczYTRiMTg2NWE0ZDNmNmFlNy5qcGeSlQLNAxQAwsOVAgDNAvjCw4GhMAU',
    desc: `Emparedado de bistec encebollado, amarillos, aguacate, repollo, lechuga del país y salsa rosada. Acompañado de papas fritas.`,
  },
  {
    id: 11,
    title: 'La Frita',
    category: 'Emparedados/Hamburguesas',
    price: "$11",
    img:
      'https://ocdn.eu/pulscms-transforms/1/N2Ek9kpTURBXy82ZjFhYTI3NzBjNDhkNDczYTRiMTg2NWE0ZDNmNmFlNy5qcGeSlQLNAxQAwsOVAgDNAvjCw4GhMAU',
    desc: `Trio de Hamburguesas de res sazonada a estilo Cubano.`,
  },

  {
    id: 12,
    title: 'El Agitao',
    category: 'A La Parrilla',
    price: "$32",
    img:
      'https://ocdn.eu/pulscms-transforms/1/N2Ek9kpTURBXy82ZjFhYTI3NzBjNDhkNDczYTRiMTg2NWE0ZDNmNmFlNy5qcGeSlQLNAxQAwsOVAgDNAvjCw4GhMAU',
    desc: `Churrasco cocido a la parrilla. Bañado en una salsa de mojo isleño. Incluye dos acompañantes.`,
  },

  {
    id: 13,
    title: 'El Julepe (que problema)...',
    category: 'A La Parrilla',
    price: "$36",
    img:
      'https://ocdn.eu/pulscms-transforms/1/N2Ek9kpTURBXy82ZjFhYTI3NzBjNDhkNDczYTRiMTg2NWE0ZDNmNmFlNy5qcGeSlQLNAxQAwsOVAgDNAvjCw4GhMAU',
    desc: `"Rib Eye" de 10 oz cocido a la parrilla, cubierto de una mantequilla de ajo, cilantro y limón. Incluye dos acompañantes.`,
  },

  {
    id: 14,
    title: 'Dale Que Es Tarde',
    category: 'A La Parrilla',
    price: "$38",
    img:
      'https://ocdn.eu/pulscms-transforms/1/N2Ek9kpTURBXy82ZjFhYTI3NzBjNDhkNDczYTRiMTg2NWE0ZDNmNmFlNy5qcGeSlQLNAxQAwsOVAgDNAvjCw4GhMAU',
    desc: `Filete Mignon de 10 oz cocido a la parrilla, relleno mantequilla de ajo rostizado, queso del país y pimientos morrones. Incluye dos acompañantes.`,
  },

  {
    id: 15,
    title: 'Por La Orilla',
    category: 'A La Parrilla',
    price: "$38",
    img:
      'https://ocdn.eu/pulscms-transforms/1/N2Ek9kpTURBXy82ZjFhYTI3NzBjNDhkNDczYTRiMTg2NWE0ZDNmNmFlNy5qcGeSlQLNAxQAwsOVAgDNAvjCw4GhMAU',
    desc: `Mar y Tierra de Churrasco cocido a la parrilla, relleno de camarones en salsa cremosa. Incluye dos acompañantes.`,
  },

  {
    id: 16,
    title: 'Apretadera',
    category: 'A La Parrilla',
    price: "$18",
    img:
      'https://ocdn.eu/pulscms-transforms/1/N2Ek9kpTURBXy82ZjFhYTI3NzBjNDhkNDczYTRiMTg2NWE0ZDNmNmFlNy5qcGeSlQLNAxQAwsOVAgDNAvjCw4GhMAU',
    desc: `Chuletón de Cerdo cortado en lámina gruesa con un tope de un escabeche de cebolla. Incluye dos acompañantes.`,
  },

  {
    id: 17,
    title: 'Plaza Santo Domingo *****',
    category: 'A La Parrilla',
    price: "$45",
    img:
      'https://ocdn.eu/pulscms-transforms/1/N2Ek9kpTURBXy82ZjFhYTI3NzBjNDhkNDczYTRiMTg2NWE0ZDNmNmFlNy5qcGeSlQLNAxQAwsOVAgDNAvjCw4GhMAU',
    desc: `Parrillada que incluye una galería de cortes de carnes y fusiones de cada una de las Antillas Mayores. Lomo de cerdo, churrasco, pechuga de pollo y chuletón. Incluye dos acompañantes.`,
  },

  {
    id: 18,
    title: 'La Kalentura',
    category: 'A La Parrilla',
    price: "Precio por libra",
    img:
      'https://ocdn.eu/pulscms-transforms/1/N2Ek9kpTURBXy82ZjFhYTI3NzBjNDhkNDczYTRiMTg2NWE0ZDNmNmFlNy5qcGeSlQLNAxQAwsOVAgDNAvjCw4GhMAU',
    desc: `Langosta fresca a la parrilla bañada en una mantequilla de limón y ajo. Incluye dos acompañantes.`,
  },

  {
    id: 19,
    title: 'El Esmayao (Churrasco, Camarones, Chillo, Mariscada, Otras Combinaciones.)',
    category: 'Principales',
    img:
      'https://ocdn.eu/pulscms-transforms/1/N2Ek9kpTURBXy82ZjFhYTI3NzBjNDhkNDczYTRiMTg2NWE0ZDNmNmFlNy5qcGeSlQLNAxQAwsOVAgDNAvjCw4GhMAU',
    desc: "Precios: ($23 Churrasco, $23 Camarones, $25 Chillo, $30 Mariscada, $16 Otras Combinaciones.) Mofongo de plátano verde, relleno de tu mejor elección como: pica pollo, carne frita al limón, ropa vieja, o pollo al curry jamaiquino.",
  },

  {
    id: 20,
    title: 'Todo El Año Es Navidad',
    category: 'Principales',
    price: "$15",
    img:
      'https://ocdn.eu/pulscms-transforms/1/N2Ek9kpTURBXy82ZjFhYTI3NzBjNDhkNDczYTRiMTg2NWE0ZDNmNmFlNy5qcGeSlQLNAxQAwsOVAgDNAvjCw4GhMAU',
    desc: `Pernil de Cerdo desmenuzado. Bañado en salsa de ron, acompañado de un pastel de masa y cerdo con mamposteado de gandules del país.`,
  },
  {
    id: 21,
    title: "Sal pa' Fuera",
    category: 'Principales',
    price: "$16",
    img:
      'https://ocdn.eu/pulscms-transforms/1/N2Ek9kpTURBXy82ZjFhYTI3NzBjNDhkNDczYTRiMTg2NWE0ZDNmNmFlNy5qcGeSlQLNAxQAwsOVAgDNAvjCw4GhMAU',
    desc: `Pechuga 10oz salteada, bañada en una salsa al ajillo. Incluye dos acompañantes.`,
  },
  {
    id: 22,
    title: 'El Porta Coeli',
    category: 'Principales',
    price: "$14",
    img:
      'https://ocdn.eu/pulscms-transforms/1/N2Ek9kpTURBXy82ZjFhYTI3NzBjNDhkNDczYTRiMTg2NWE0ZDNmNmFlNy5qcGeSlQLNAxQAwsOVAgDNAvjCw4GhMAU',
    desc: `Pastelón de plátano maduro y majado de viandas con carne de cerdo bien marinada y una salsa cremosa de queso, ajo y cilantro. Incluye dos acompañantes.`,
  },
  {
    id: 23,
    title: 'Las Lomas',
    category: 'Principales',
    price: "$20",
    img:
      'https://ocdn.eu/pulscms-transforms/1/N2Ek9kpTURBXy82ZjFhYTI3NzBjNDhkNDczYTRiMTg2NWE0ZDNmNmFlNy5qcGeSlQLNAxQAwsOVAgDNAvjCw4GhMAU',
    desc: `Chuleta Kan-Kan del país, bañada en una salsa de mojo isleño. Incluye dos acompañantes.`,
  },
  {
    id: 24,
    title: 'Un, Dos, Tres, PESCAO...',
    category: 'Principales',
    price: "Precio por libra",
    img:
      'https://ocdn.eu/pulscms-transforms/1/N2Ek9kpTURBXy82ZjFhYTI3NzBjNDhkNDczYTRiMTg2NWE0ZDNmNmFlNy5qcGeSlQLNAxQAwsOVAgDNAvjCw4GhMAU',
    desc: `Pesca fresca del día de 1 libra en adelante. Incluye dos acompañantes.`,
  },
  {
    id: 25,
    title: 'Frutos De Mi Tierra',
    category: 'Principales',
    price: "$12",
    img:
      'https://ocdn.eu/pulscms-transforms/1/N2Ek9kpTURBXy82ZjFhYTI3NzBjNDhkNDczYTRiMTg2NWE0ZDNmNmFlNy5qcGeSlQLNAxQAwsOVAgDNAvjCw4GhMAU',
    desc: `Majado de viandas con tope de vegetales, salteados en vino albariño y aceite de oliva acompañados de amarillos de plátano.`,
  },
  {
    id: 26,
    title: 'La Fajada',
    category: 'Principales',
    price: "$16",
    img:
      'https://ocdn.eu/pulscms-transforms/1/N2Ek9kpTURBXy82ZjFhYTI3NzBjNDhkNDczYTRiMTg2NWE0ZDNmNmFlNy5qcGeSlQLNAxQAwsOVAgDNAvjCw4GhMAU',
    desc: `Carne de res estilo ropa vieja cubana. Incluye dos acompañantes.`,
  },
  {
    id: 27,
    title: 'A Caballo Es Que Es',
    category: 'Principales',
    price: "$14",
    img:
      'https://ocdn.eu/pulscms-transforms/1/N2Ek9kpTURBXy82ZjFhYTI3NzBjNDhkNDczYTRiMTg2NWE0ZDNmNmFlNy5qcGeSlQLNAxQAwsOVAgDNAvjCw4GhMAU',
    desc: `Picadillo de carne molida estilo cubano con tope de huevo frito y arroz blanco. Incluye un acompañantes.`,
  },
  {
    id: 28,
    title: 'No Cojas Luchas',
    category: 'Principales',
    price: "Precio por libra",
    img:
      'https://ocdn.eu/pulscms-transforms/1/N2Ek9kpTURBXy82ZjFhYTI3NzBjNDhkNDczYTRiMTg2NWE0ZDNmNmFlNy5qcGeSlQLNAxQAwsOVAgDNAvjCw4GhMAU',
    desc: `Fresca Langosta del país cocida en arroz cremoso de mariscos. SERVICIO PARA DOS PERSONAS. Incluye un acompañante.`,
  },

  {
    id: 29,
    title: '¡Oh! Pero, Bueno! (Churrasco, Camarones, Chillo, Mariscada, Otras Combinaciones.)',
    category: 'Principales',
    img:
      'https://ocdn.eu/pulscms-transforms/1/N2Ek9kpTURBXy82ZjFhYTI3NzBjNDhkNDczYTRiMTg2NWE0ZDNmNmFlNy5qcGeSlQLNAxQAwsOVAgDNAvjCw4GhMAU',
    desc: "Precios: ($23 Churrasco, $23 Camarones, $25 Chillo, $30 Mariscada, $16 Otras Combinaciones.) Mangú dominicano, majado de plátanos verdes con cebollas caramelizadas relleno de su mejor elección como: pica pollo, carne frita al limón, ropa vieja, o pollo al curry jamaiquino.",
  },

  {
    id: 30,
    title: 'El Cocotazo',
    category: 'Principales',
    price: "$25",
    img:
      'https://ocdn.eu/pulscms-transforms/1/N2Ek9kpTURBXy82ZjFhYTI3NzBjNDhkNDczYTRiMTg2NWE0ZDNmNmFlNy5qcGeSlQLNAxQAwsOVAgDNAvjCw4GhMAU',
    desc: `Filete de chillo en la salsa de su selección; coco, criolla, cebolla escabeche, ajo y limón o chutney de papaya, mango y piña. SE RECOMIENDA EN SALSA DE COCO. Incluye dos acompañantes.`,
  },
  {
    id: 31,
    title: 'Mi Deh Yah (Aqui Estoy)',
    category: 'Principales',
    price: "$16",
    img:
      'https://ocdn.eu/pulscms-transforms/1/N2Ek9kpTURBXy82ZjFhYTI3NzBjNDhkNDczYTRiMTg2NWE0ZDNmNmFlNy5qcGeSlQLNAxQAwsOVAgDNAvjCw4GhMAU',
    desc: `Pollo o lomo de cerdo marinado al estilo jerk servido con una salsa chutney de papaya y su guarnición deseada. Incluye dos acompañantes.`,
  },
  {
    id: 32,
    title: 'Ya Mon (No problem)',
    category: 'Principales',
    price: "$16",
    img:
      'https://ocdn.eu/pulscms-transforms/1/N2Ek9kpTURBXy82ZjFhYTI3NzBjNDhkNDczYTRiMTg2NWE0ZDNmNmFlNy5qcGeSlQLNAxQAwsOVAgDNAvjCw4GhMAU',
    desc: `Pollo o lomo de cerdo del País, salteado al estilo jamaiquino con curry, se sirve con su guarnición deseada. Incluye dos acompañantes.`,
  },
  {
    id: 33,
    title: 'La "Bless Up Moore" ',
    category: 'Principales',
    price: "$16",
    img:
      'https://ocdn.eu/pulscms-transforms/1/N2Ek9kpTURBXy82ZjFhYTI3NzBjNDhkNDczYTRiMTg2NWE0ZDNmNmFlNy5qcGeSlQLNAxQAwsOVAgDNAvjCw4GhMAU',
    desc: `Ensalada jamaiquina con pechuga de pollo, lechuga fresca, queso del país, aderezo de papaya / mango / piña.`,
  },
  {
    id: 34,
    title: 'El Pide Que Hay',
    category: 'Principales',
    img:
      'https://ocdn.eu/pulscms-transforms/1/N2Ek9kpTURBXy82ZjFhYTI3NzBjNDhkNDczYTRiMTg2NWE0ZDNmNmFlNy5qcGeSlQLNAxQAwsOVAgDNAvjCw4GhMAU',
    desc: `Cocina creativa con fusiones caribeñas del Chef, varía según el día. Favor de preguntar a su mesero.`,
  },
  

  {
    id: 35,
    title: '¡Ay Bendito!',
    category: 'Postres',
    price: "$7",
    img:
      'https://ocdn.eu/pulscms-transforms/1/N2Ek9kpTURBXy82ZjFhYTI3NzBjNDhkNDczYTRiMTg2NWE0ZDNmNmFlNy5qcGeSlQLNAxQAwsOVAgDNAvjCw4GhMAU',
    desc: `Bizcocho mojado con salsa a base de 4 leches, Caramelo salado y helado de vainilla.`,
  },
  {
    id: 36,
    title: 'Coco, Queso, Calabaza, Queso Guayaba',
    category: 'Postres',
    price: "$5",
    img:
      'https://ocdn.eu/pulscms-transforms/1/N2Ek9kpTURBXy82ZjFhYTI3NzBjNDhkNDczYTRiMTg2NWE0ZDNmNmFlNy5qcGeSlQLNAxQAwsOVAgDNAvjCw4GhMAU',
    desc: `Variedad de cremosos flanes.`,
  },
  
  {
    id: 37,
    title: 'Crème Brûlée - Vainilla',
    category: 'Postres',
    price: "$7",
    img:
      'https://ocdn.eu/pulscms-transforms/1/N2Ek9kpTURBXy82ZjFhYTI3NzBjNDhkNDczYTRiMTg2NWE0ZDNmNmFlNy5qcGeSlQLNAxQAwsOVAgDNAvjCw4GhMAU',
    desc: `Variedad de cremosos flanes En Porticos1606`,
  },
  
  {
    id: 38,
    title: "Mi Tierrita, Es Un ENCANTO",
    category: 'Postres',
    price: "$7",
    img:
      'https://ocdn.eu/pulscms-transforms/1/N2Ek9kpTURBXy82ZjFhYTI3NzBjNDhkNDczYTRiMTg2NWE0ZDNmNmFlNy5qcGeSlQLNAxQAwsOVAgDNAvjCw4GhMAU',
    desc: "Variedad de cremosos flanes En Porticos1606",
  },
  
  {
    id: 39,
    title: 'Sopa o Crema del dia',
    category: 'Sopas',
    img:'https://ocdn.eu/pulscms-transforms/1/N2Ek9kpTURBXy82ZjFhYTI3NzBjNDhkNDczYTRiMTg2NWE0ZDNmNmFlNy5qcGeSlQLNAxQAwsOVAgDNAvjCw4GhMAU',
    desc: `Pregunte por la sopa o crema del dia.`,
  },

  {

    id: 40,
    title: 'Menu de Bebidas',
    category: 'Bebidas',
    img: '/assets/content/restaurant2/images/DrinkMenu.png',
    link:'/assets/content/restaurant2/images/DrinkMenu.png'

  },

  
]
export default menu