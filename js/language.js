/**
 * language.js
 * Bilingual i18n system (ES / EN).
 * Detects system language, provides toggle.
 */

(function () {
  'use strict';

  /* ── Translations ───────────────────────────────── */
  var i18n = {
    es: {
      /* Nav */
      'nav.about':    'Nosotros',
      'nav.menu':     'Menú',
      'nav.reviews':  'Reseñas',
      'nav.contact':  'Contacto',

      /* Hero */
      'hero.eyebrow':   'Mazatlán, Sinaloa · México',
      'hero.title':     'No venimos a convencerte.',
      'hero.title2':    'El mar lo hará por nosotros.',
      'hero.subtitle':  'Mariscos que recuerdan el Pacífico. Sushi que reescribe lo que conoces del mar.',
      'hero.cta':       'Explorar el menú',
      'hero.cta2':      'Reservar mesa',
      'hero.scroll':    'Desplazar',

      /* About */
      'about.tag':        'Nuestra historia',
      'about.title':      'El oceáno en cada bocado',
      'about.body1':      'Mazatlán tiene un secreto: los mejores mariscos no se anuncian, se descubren. Y una vez que los pruebas, el Océano Pacífico nunca vuelve a ser el mismo fondo de pantalla.',
      'about.body2':      'En El Palmar fusionamos la tradición pesquera de Sinaloa con la precisión del sushi japonés. Cada plato es una conversación entre dos mares, dos culturas y un solo propósito: que te quedes sin palabras.',
      'about.cta':        'Ver el menú completo',
      'about.stat1':      'Años frente al mar',
      'about.stat2':      'Platillos únicos',
      'about.stat3':      'Años de tradición',
      'about.f1.title':   'Del barco al plato',
      'about.f1.body':    'Trabajamos directamente con pescadores locales. Sin intermediarios, sin frigoríficos de por medio. El producto llega fresco cada mañana.',
      'about.f2.title':   'Fusión sin forzar',
      'about.f2.body':    'No mezclamos por moda. Mezclamos porque el camarón sinaloense y el arroz de sushi nacieron para encontrarse.',
      'about.f3.title':   'Ambiente que acompaña',
      'about.f3.body':    'La palapa, la brisa y el rumor del mar de fondo. Un lugar donde el tiempo corre a otra velocidad.',

      /* Menu */
      'menu.tag':          'Lo que preparamos',
      'menu.title':        'El menú',
      'menu.subtitle':     'Navega por nuestras categorías y encuentra tu favorito.',
      'menu.tab1':         'Entradas',
      'menu.tab2':         'Seafood',
      'menu.tab3':         'Caliente',
      'menu.tab4':         'Appetizers',
      'menu.tab5':         'Arroz',
      'menu.tab6':         'Sushi',
      'menu.tab7':         'Kids',
      'menu.tab8':         'Bebidas',
      'menu.tab9':         'Charola',
      'menu.coming':       'Menú completo próximamente — cada platillo fotografiado y descrito.',
      'menu.coming.short': 'Próximamente',
      'menu.badge':        'Pronto',
      'menu.tag.especial': 'Especial',
      'menu.tag.coctel':   'Cóctel',
      'menu.tag.entrada':  'Entrada',
      'menu.tag.taco':     'Taco',
      'menu.size.ch':      'Chico',
      'menu.size.gde':     'Grande',

      /* Entradas — nombres y descripciones */
      'menu.e1.name':  'Campechana',
      'menu.e1.desc':  'Cóctel de camarón chico, camarón pasado, pulpo, caracol, pepino y cebolla morada.',
      'menu.e2.name':  'Coctel de Camarón',
      'menu.e2.desc':  'Camarón fresco marinado en limón con pepino y cebolla morada.',
      'menu.e3.name':  'Coctel de Pulpo',
      'menu.e3.desc':  'Pulpo tierno en su jugo con limón, cebolla y verduras frescas.',
      'menu.e4.name':  'Coctel Campechana',
      'menu.e4.desc':  'Aguachile · Camarón Coco · Pasado (aparte).',
      'menu.e5.name':  'Jaba Omelette',
      'menu.e5.desc':  'Omelette de jaiba marinada servido con salsa de la casa.',
      'menu.e6.name':  'Tostada de Maíz',
      'menu.e6.desc':  'Tostada artesanal de maíz con mariscos y salsas de la casa.',
      'menu.e7.name':  'Taco de Camarón',
      'menu.e7.desc':  'Camarón grande en tortilla de maíz con salsas de la casa.',
      'menu.e8.name':  'Taco de Marlín',
      'menu.e8.desc':  'Marlín ahumado en tortilla de maíz con verduras y salsa.',
      'menu.e9.name':  'Torre de Palmar',
      'menu.e9.desc':  'Camarón crudo y cocido, pulpo asado, camarón frito, salsa de la casa y salsa piña-habanero con pepino.',
      'menu.e10.name': 'Molcajete Palmar',
      'menu.e10.desc': 'Aguacate con almeja, camarón crudo y cocido, pulpo, cilantro y salsas de la casa.',

      /* Seafood — subtítulos y etiquetas */
      'menu.sf.sub1':       'Ceviches',
      'menu.sf.sub2':       'Aguachiles & Sashimis',
      'menu.tag.aguachile': 'Aguachile',

      /* Seafood — nombres y descripciones */
      'menu.sf1.name':  'El Vale',
      'menu.sf1.desc':  'Ceviche de pescado y camarón, cebolla morada en salsa estilo El Palmar.',
      'menu.sf2.name':  'Limeto',
      'menu.sf2.desc':  'Camarón crudo con una coctelera de sopa de pata de mula.',
      'menu.sf3.name':  'Sinaloense',
      'menu.sf3.desc':  'Camarón crudo, pepino, cebolla morada, chile serrano y aguacate.',
      'menu.sf4.name':  'Sierra Natural',
      'menu.sf4.desc':  'Sierra fresca natural con cebolla, pepino y limón.',
      'menu.sf5.name':  'Sierra Cevichada',
      'menu.sf5.desc':  'Sierra cevichada con pepino, cebolla morada y cilantro.',
      'menu.sf6.name':  'Sierra Campechana',
      'menu.sf6.desc':  'Sierra con camarón, pulpo, cebolla morada y verduras frescas.',
      'menu.sf7.name':  'Tres Huertos',
      'menu.sf7.desc':  'Pepino, chile serrano y verduras frescas de temporada.',
      'menu.sf8.name':  'San Blas',
      'menu.sf8.desc':  'Ceviche con una coctelera de sopa de pata de mula.',
      'menu.sf9.name':  'Acapulcada',
      'menu.sf9.desc':  'Camarón crudo y cocido con salsa estilo Acapulco.',
      'menu.sf10.name': 'San Carlos',
      'menu.sf10.desc': 'Camarón crudo, camarón pasado, cebolla morada y pepino.',
      'menu.sf11.name': 'Japonés',
      'menu.sf11.desc': 'Ceviche con soya y el toque japonés del palmar.',
      'menu.sf12.name': 'Ceviche Mixto',
      'menu.sf12.desc': 'Mezcla de mariscos frescos con verduras de temporada.',
      'menu.sf13.name': 'Aguachiles',
      'menu.sf13.desc': 'Camarón crudo, pepino, cebolla morada. Elige tu salsa.',
      'menu.sf14.name': 'Sashimi Atún',
      'menu.sf14.desc': 'Láminas de atún, cebollín, shishimi, soya con el toque japonés del palmar.',
      'menu.sf15.name': 'Sashimi de Marlín Ahumado en Frío',
      'menu.sf15.desc': 'Láminas de marlín fresco, cebollín, shishimi, soya con el toque japonés del palmar.',

      /* Caliente — subtítulos */
      'menu.c.sub1':    'Tacos',
      'menu.c.sub2':    'Lo Caliente del Palmar',

      /* Caliente — nombres y descripciones */
      'menu.c1.name':   'Tacos Gobernador Camarón',
      'menu.c1.desc':   'Orden de 3, con nuestra receta especial, y guacamole.',
      'menu.c2.name':   'Tacos Gobernador Marlín',
      'menu.c2.desc':   'Orden de 3, con nuestra receta especial, y guacamole.',
      'menu.c3.name':   'Taco Morita',
      'menu.c3.desc':   'De camarón, pulpo o mixto con toque de nuestra salsa morita, servido con lechuga, cebolla encurtida y guacamole.',
      'menu.c4.name':   'Taco Zarandeado',
      'menu.c4.desc':   'De camarón, pulpo o mixto con nuestra salsa zarandeada, servido con lechuga, cebolla encurtida y guacamole.',
      'menu.c5.name':   'Tacos Dorados de Camarón',
      'menu.c5.desc':   'Orden de 3, como en la cenaduría, servido con lechuga, zanahoria, cebolla encurtida y nuestro caldo de camarón.',
      'menu.c6.name':   'Chorreada El Palmar',
      'menu.c6.desc':   'La tradicional chorreada mazatleca, gordita con asiento, queso, camarón y pulpo marinados con nuestro aderezo, coronado con lechuga, cebolla encurtida y guacamole.',
      'menu.c7.name':   'Camarón / Atún Fresado',
      'menu.c7.desc':   '200 gramos de exquisito cajún de atún y piezas del día marinados con nuestra receta, lechuga, tomate, frijol refrito y guacamole.',
      'menu.c8.name':   'Hamburguesa El Palmar',
      'menu.c8.desc':   'Jugosa res o camarón empanizado, queso gouda, lechuga, tomate, cebolla asada, aderezo de chipotle, acompañada de papas fritas a la francesa.',
      'menu.c9.name':   'Alitas de Pollo BBQ',
      'menu.c9.desc':   'Preparadas al horno con salsa de alcachofa y escabeche, queso, crema y nuestro caldo de camarón.',
      'menu.c10.name':  'Pescado',
      'menu.c10.desc':  'Empanizado o zarandeado (filete).',
      'menu.c11.name':  'Pulpo Zarandeado',
      'menu.c11.desc':  'Pulpo a las brasas con salsa zarandeada de la casa.',
      'menu.c12.name':  'Camarón a la Diabla',
      'menu.c12.desc':  'Camarones en salsa de chile de árbol con el toque del Palmar.',
      'menu.c13.name':  'Mariscada',
      'menu.c13.desc':  'Mezcla de mariscos frescos a la plancha con verduras.',
      'menu.c14.name':  'Camarones Empanizados',
      'menu.c14.desc':  'Camarones crujientes empanizados, servidos con guarnición.',
      'menu.c15.name':  'Camarones al Coco',
      'menu.c15.desc':  'Camarones empanizados con coco rallado, servidos con guarnición.',
      'menu.c16.name':  'Camarones Roca',
      'menu.c16.desc':  'Camarones estilo roca con nuestra salsa especial.',

      /* Appetizers — subtítulos */
      'menu.a.sub1':    'Entradas',
      'menu.a.sub2':    'Teriyaki',

      /* Appetizers — variantes de precio */
      'menu.var.queso':      'Queso',
      'menu.var.platqueso':  'Plát. y Queso',
      'menu.var.camaron':    'Camarón',
      'menu.var.pollo':      'Pollo',
      'menu.var.res':        'Res',

      /* Appetizers — nombres y descripciones */
      'menu.a1.name':   'Kushiage (2 pz)',
      'menu.a1.desc':   'Las tradicionales brochetas empanizadas con un aderezo especial y salsa cítrica.',
      'menu.a2.name':   'Gyoza (4 pz)',
      'menu.a2.desc':   'Rollos rellenos de pasta de cangrejo, bañados en salsa de la casa.',
      'menu.a3.name':   'Camarones YO (4 pz)',
      'menu.a3.desc':   'Camarones preparados al estilo de la casa con salsa especial.',
      'menu.a4.name':   'Cevichaca de Atún (8 pz)',
      'menu.a4.desc':   'Láminas de atún rellenas de kanikama, bañadas en salsa de la casa.',
      'menu.a5.name':   'Concha Ahí',
      'menu.a5.desc':   'Concha rellena de atún ahí con aderezo especial del Palmar.',
      'menu.a6.name':   'Teriyaki',
      'menu.a6.desc':   'Brócoli, pimientos, cebolla y zanahorias salteadas con salsa de soya y teriyaki.',

      /* Arroz — nombres y descripciones */
      'menu.r1.name':   'Tuna Tower',
      'menu.r1.desc':   'Torre de arroz, aguacate, pasta de cangrejo, masago y delicioso spicy de atún fresco, bañada con aderezo de la casa, salsa de arúgula y ajonjolí.',
      'menu.r2.name':   'Yakimeshi Supreme',
      'menu.r2.desc':   'Arroz frito con verduras e ingrediente a elegir (pollo, res o camarón) y trocitos de camarón crujiente, ensalada de arúgula y ajonjolí.',
      'menu.r3.name':   'Yakimeshi Especial',
      'menu.r3.desc':   'Arroz frito con verduras e ingrediente a elegir (pollo, res o camarón), tampico, aguacate y topping philadelphia.',
      'menu.r4.name':   'Yakimeshi',
      'menu.r4.desc':   'Exquisito arroz frito con verduras e ingrediente a elegir (pollo, res o camarón).',
      'menu.r5.name':   'Gohan Especial',
      'menu.r5.desc':   'Arroz al vapor con un ingrediente a elegir (pollo, res o camarón).',

      /* Sushi — subtítulos */
      'menu.su.sub1':   'Rollos Naturales',
      'menu.su.sub2':   'Rollos Empanizados',
      'menu.su.sub3':   'Rollos Especiales',
      'menu.su.sub4':   'Rollos Horneados',

      /* Sushi — Rollos Naturales */
      'menu.sn1.name':  'California Roll',
      'menu.sn1.desc':  'Cangrejo, aguacate, pepino y ajonjolí.',
      'menu.sn2.name':  'California Especial',
      'menu.sn2.desc':  'Cangrejo, aguacate, pepino, ajonjolí y topping especial.',
      'menu.sn3.name':  'Philadelphia Roll',
      'menu.sn3.desc':  'Salmón, queso philadelphia y aguacate.',
      'menu.sn4.name':  'Avocado Maki',
      'menu.sn4.desc':  'Aguacate envuelto en alga y arroz.',
      'menu.sn5.name':  'Spicy Tuna',
      'menu.sn5.desc':  'Atún picante con pepino y ajonjolí.',
      'menu.sn6.name':  'Palmar Roll',
      'menu.sn6.desc':  'Rollo especial de la casa con camarón, aguacate y topping premium.',
      'menu.sn7.name':  'Gamba',
      'menu.sn7.desc':  'Res, furikake, aguacate y philadelphia.',
      'menu.sn8.name':  'Mango Roll',
      'menu.sn8.desc':  'Camarón, aguacate y mango.',

      /* Sushi — Rollos Empanizados */
      'menu.se1.name':  'Tempura Especial',
      'menu.se1.desc':  'Camarón, aguacate y philadelphia por dentro con topping tampico.',
      'menu.se2.name':  'Mar y Tierra',
      'menu.se2.desc':  'Camarón, res, aguacate y philadelphia.',
      'menu.se3.name':  'Favorito Especial',
      'menu.se3.desc':  'Por dentro cangrejo, aguacate y philadelphia, encima pasta maki, finas rajas de aguacate, bañado con salsa de arúgula y ajonjolí.',
      'menu.se4.name':  'Tres Quesos',
      'menu.se4.desc':  'Por fuera queso philadelphia y croqueta, por dentro camarón, aguacate y philadelphia.',
      'menu.se5.name':  'Camarón Blue',
      'menu.se5.desc':  'Por fuera queso manchego, por dentro camarón, tocino, aguacate y philadelphia.',
      'menu.se6.name':  'Cordón Blue',
      'menu.se6.desc':  'Por fuera queso manchego, por dentro pollo, tocino, aguacate y philadelphia.',

      /* Sushi — Rollos Especiales */
      'menu.sp1.name':  'Sin Roll',
      'menu.sp1.desc':  'Pieza doble envuelta en alga de soya, por dentro salmón, atún, mango, pepino y ajonjolí.',
      'menu.sp2.name':  'Aqua Roll',
      'menu.sp2.desc':  'Exquisito rollo envuelto en alga de soya, por dentro salmón, atún y camarón.',
      'menu.sp3.name':  'Furia Roll',
      'menu.sp3.desc':  'Pieza doble envuelta en alga, por dentro camarón, aguacate y salsa picante.',
      'menu.sp4.name':  'Spicy Camarón',
      'menu.sp4.desc':  'Cangrejo, aguacate y philadelphia por dentro, con topping extra de camarones encima.',
      'menu.sp5.name':  'Eros',
      'menu.sp5.desc':  'Camarón, aguacate, pepino y philadelphia por dentro, con topping especial.',
      'menu.sp6.name':  'Café Calle',
      'menu.sp6.desc':  'Camarón, aguacate y philadelphia por dentro, con salsa especial de la casa.',
      'menu.sp7.name':  'Tinta Especial (con arroz)',
      'menu.sp7.desc':  'Pieza doble envuelta en alga, por dentro aguacate, camarón y cangrejo, con mango y ajonjolí.',
      'menu.sp8.name':  'No Name Roll (con arroz)',
      'menu.sp8.desc':  'Pieza doble, maki, camarón, masago y topping especial del Palmar.',
      'menu.sp9.name':  'Camarón Roll',
      'menu.sp9.desc':  'Camarón empanizado en alga natural, con delicioso spicy de camarón.',
      'menu.sp10.name': 'Pro Roll',
      'menu.sp10.desc': 'Por dentro aguacate, camarón y philadelphia, con topping premium.',
      'menu.sp11.name': 'Bonair Roll',
      'menu.sp11.desc': 'En alga con camarón por dentro, topping especial de camarón tempura.',
      'menu.sp12.name': 'Pro Especial',
      'menu.sp12.desc': 'Aguacate, pepino y philadelphia por dentro, bañado con salsa de arúgula y ajonjolí.',
      'menu.sp13.name': 'Diamondlite Roll',
      'menu.sp13.desc': 'Pieza doble envuelta en alga, por dentro camarón, aguacate y topping especial.',
      'menu.sp14.name': 'Kenny Roll',
      'menu.sp14.desc': 'Camarón, aguacate y philadelphia por dentro, con topping de la casa.',
      'menu.sp15.name': 'Citrus Roll (sin arroz)',
      'menu.sp15.desc': 'Camarón, aguacate y cítricos, envuelto en alga de soya.',

      /* Sushi — Rollos Horneados */
      'menu.sh1.name':  'Salmonito Hot',
      'menu.sh1.desc':  'Salmón horneado con queso philadelphia y topping especial.',
      'menu.sh2.name':  'Hot Roll',
      'menu.sh2.desc':  'Rollo horneado con camarón, queso y topping de la casa.',
      'menu.sh3.name':  'Hot Philadelphia',
      'menu.sh3.desc':  'Philadelphia horneado con salmón y queso gratinado.',

      /* Kids — nombres y descripciones */
      'menu.k1.name':   'Hamburguesa Clásica',
      'menu.k1.desc':   'De carne de res, queso amarillo, lechuga, cebolla, tomate. Acompañada de crujientes papas a la francesa.',
      'menu.k2.name':   'Dedos de Pescado',
      'menu.k2.desc':   'Dedos de filete de pescado acompañado de papas a la francesa.',
      'menu.k3.name':   'Nuggets de Pollo',
      'menu.k3.desc':   'Crujientes nuggets de pollo acompañados de papas a la francesa.',
      'menu.k4.name':   'Papas a la Francesa',
      'menu.k4.desc':   'Crujientes papas fritas acompañadas de cátsup.',
      'menu.k5.name':   'Sushi Kids',
      'menu.k5.desc':   'Rollito empanizado sin alga con camarón, aguacate y philadelphia.',

      /* Bebidas — subtítulos y nota */
      'menu.d.sub1':    'Postres',
      'menu.d.sub2':    'Cervezas',
      'menu.d.sub3':    'No Alcohólicas',
      'menu.d.sub4':    'Cocteles de Firma',
      'menu.d.sub5':    'Bebidas Alcohólicas',
      'menu.d.note1':   'Servidos con cubeta de helado de vainilla.',
      'menu.db.whale':  'Presentación familiar',

      /* Postres */
      'menu.dp1.name':  'Banana Pie',
      'menu.dp2.name':  'Guava Pie',
      'menu.dp3.name':  'Chocolate Cake',
      'menu.dp4.name':  'Cheesecake',
      'menu.dp5.name':  'Flan',

      /* Cervezas */
      'menu.db1.name':  'Pacifico Clara',
      'menu.db2.name':  'Pacifico Light',
      'menu.db3.name':  'Pacifico Suave',
      'menu.db4.name':  'Corona',
      'menu.db5.name':  'Corona Light',
      'menu.db6.name':  'Modelo Especial',
      'menu.db7.name':  'Negra Modelo',
      'menu.db8.name':  'Michelob Ultra',
      'menu.db9.name':  'Pacifico Clara Whale',
      'menu.db10.name': 'Pacifico Light Whale',

      /* No Alcohólicas */
      'menu.dna1.name':  'Jazmin Tea',
      'menu.dna2.name':  'Limón Tea',
      'menu.dna3.name':  'Fresh Lemonade',
      'menu.dna4.name':  'Mineral Lemonade',
      'menu.dna5.name':  'Fresh Orangeade',
      'menu.dna6.name':  'Agua Embotellada',
      'menu.dna7.name':  'Agua Mineral',
      'menu.dna8.name':  'Clamato for Beer',
      'menu.dna9.name':  'Mixed Clamato',
      'menu.dna10.name': 'Pineapple Drinks',
      'menu.dna11.name': 'Mango Drinks',
      'menu.dna12.name': 'Conga',
      'menu.dna13.name': 'Fresada',

      /* Cocteles de Firma */
      'menu.dc1.name':  'Mezcalmar',
      'menu.dc1.desc':  'Mezcal, maracuyá, limón y agua mineral.',
      'menu.dc2.name':  'Old Saphire',
      'menu.dc2.desc':  'Gin, arándano, limón y agua tónica.',
      'menu.dc3.name':  'Falvo Tonic',
      'menu.dc3.desc':  'Coctel de firma con agua tónica y toque cítrico.',
      'menu.dc4.name':  'Mezcalina',
      'menu.dc4.desc':  'Mezcal, mango, maracuyá y limón.',
      'menu.dc5.name':  'Passion Mango',
      'menu.dc5.desc':  'Vodka, mango, maracuyá y limón.',

      /* Bebidas Alcohólicas */
      'menu.da1.name':  'Sangria',
      'menu.da2.name':  'Clericot',
      'menu.da3.name':  'Carajillo',
      'menu.da4.name':  'Mojito',
      'menu.da5.name':  'Flavoured Margarita',
      'menu.da5.desc':  'Fresa, piña, mango o maracuyá.',
      'menu.da6.name':  'Piña Colada',
      'menu.da7.name':  'Paloma',
      'menu.da8.name':  'Daiquiri',

      /* Charola */
      'menu.ch1.name':      'Charola Chica',
      'menu.ch2.name':      'Charola Grande',
      'menu.ch.tag.chica':  'Chica',
      'menu.ch.tag.grande': 'Grande',
      'menu.ch.order':      'Pedidos: 669 546 6940 · 669 100 5111 (WhatsApp)',

      /* Reviews */
      'reviews.tag':      'Lo que dicen',
      'reviews.title':    'Voces del mar',
      'reviews.subtitle': 'No publicidad. Solo personas que se sentaron, comieron y volvieron a casa con algo que contar.',
      'reviews.source':   'Reseñas verificadas en Google Maps',

      /* Contact */
      'contact.tag':       'Encuéntranos',
      'contact.title':     'Ven a donde termina la tierra',
      'contact.addr.l':    'Dirección',
      'contact.addr.v':    'Av. del Mar, Mazatlán, Sinaloa, México',
      'contact.phone.l':   'Teléfono / WhatsApp',
      'contact.hours.l':   'Horario',
      'contact.hours.v':   'Lun – Dom · 12:00 pm – 10:00 pm',
      'contact.social.l':  'Redes sociales',
      'contact.delivery.l':'Pide a domicilio',
      'contact.wa':        'WhatsApp',
      'contact.fb':        'Facebook',
      'contact.ig':        'Instagram',

      /* Footer */
      'footer.tagline':   'Mariscos + Sushi · Mazatlán',
      'footer.nav':       'Navegación',
      'footer.follow':    'Síguenos',
      'footer.copy':      '© 2025 El Palmar Mariscos + Sushi. Todos los derechos reservados.',
      'footer.scroll':    'Subir',
    },

    en: {
      /* Nav */
      'nav.about':    'About',
      'nav.menu':     'Menu',
      'nav.reviews':  'Reviews',
      'nav.contact':  'Contact',

      /* Hero */
      'hero.eyebrow':   'Mazatlán, Sinaloa · Mexico',
      'hero.title':     "We won't convince you.",
      'hero.title2':    'The ocean will.',
      'hero.subtitle':  'Seafood that remembers the Pacific. Sushi that rewrites everything you know about the sea.',
      'hero.cta':       'Explore the menu',
      'hero.cta2':      'Reserve a table',
      'hero.scroll':    'Scroll',

      /* About */
      'about.tag':        'Our story',
      'about.title':      'The ocean in every bite',
      'about.body1':      "Mazatlán's best seafood doesn't advertise itself — it waits for you. And once you find it, the Pacific will never look the same from shore.",
      'about.body2':      "At El Palmar we marry Sinaloa's fishing tradition with Japanese sushi precision. Each plate is a conversation between two oceans, two cultures, and one purpose: to leave you speechless.",
      'about.cta':        'See the full menu',
      'about.stat1':      'Years by the sea',
      'about.stat2':      'Unique dishes',
      'about.stat3':      'Years of tradition',
      'about.f1.title':   'Boat to plate',
      'about.f1.body':    'We work directly with local fishermen. No middlemen, no cold storage chains. The catch arrives fresh every morning.',
      'about.f2.title':   'Fusion without forcing',
      'about.f2.body':    "We don't mix for trend. We mix because Sinaloa shrimp and sushi rice were always meant to meet.",
      'about.f3.title':   'A setting that stays with you',
      'about.f3.body':    'The palapa, the ocean breeze, the distant sound of waves. A place where time moves at a different pace.',

      /* Menu */
      'menu.tag':          'What we cook',
      'menu.title':        'The menu',
      'menu.subtitle':     'Browse our categories and find your favorite.',
      'menu.tab1':         'Starters',
      'menu.tab2':         'Seafood',
      'menu.tab3':         'Hotties',
      'menu.tab4':         'Sushi Appetizers',
      'menu.tab5':         'Rice',
      'menu.tab6':         'Sushi',
      'menu.tab7':         'Kids',
      'menu.tab8':         'Drinks',
      'menu.tab9':         'Charola',
      'menu.tan10':        'Desserts',
      'menu.coming':       'Full menu coming soon — every dish photographed and described.',
      'menu.coming.short': 'Coming soon',
      'menu.badge':        'Soon',
      'menu.tag.especial': 'Special',
      'menu.tag.coctel':   'Cocktail',
      'menu.tag.entrada':  'Starter',
      'menu.tag.taco':     'Taco',
      'menu.size.ch':      'Small',
      'menu.size.gde':     'Large',

      /* Entradas — names and descriptions */
      'menu.e1.name':  'Campechana',
      'menu.e1.desc':  'Cocktail with small shrimp, cooked shrimp, octopus, sea snail, cucumber and red onion.',
      'menu.e2.name':  'Shrimp Cocktail',
      'menu.e2.desc':  'Fresh shrimp marinated in lime with cucumber and red onion.',
      'menu.e3.name':  'Octopus Cocktail',
      'menu.e3.desc':  'Tender octopus in its juices with lime, onion and fresh vegetables.',
      'menu.e4.name':  'Campechana Cocktail',
      'menu.e4.desc':  'Aguachile · Coconut Shrimp · Cooked (separate).',
      'menu.e5.name':  'Jaba Omelette',
      'menu.e5.desc':  'Marinated blue crab omelette served with homemade sauce.',
      'menu.e6.name':  'Corn Tostada',
      'menu.e6.desc':  'Handmade corn tostada with seafood and homemade salsas.',
      'menu.e7.name':  'Shrimp Taco',
      'menu.e7.desc':  'Large shrimp in corn tortilla with homemade salsas.',
      'menu.e8.name':  'Marlin Taco',
      'menu.e8.desc':  'Smoked marlin in corn tortilla with vegetables and salsa.',
      'menu.e9.name':  'Palmar Tower',
      'menu.e9.desc':  'Raw and cooked shrimp, roasted octopus, fried shrimp, homemade sauce and pineapple-habanero sauce with cucumber.',
      'menu.e10.name': 'Palmar Molcajete',
      'menu.e10.desc': 'Avocado with clam, raw and cooked shrimp, octopus, cilantro and homemade salsas.',

      /* Seafood — subtitles and tags */
      'menu.sf.sub1':       'Ceviches',
      'menu.sf.sub2':       'Aguachiles & Sashimis',
      'menu.tag.aguachile': 'Aguachile',

      /* Seafood — names and descriptions (placeholder — awaiting EN translation) */
      'menu.sf1.name':  'El Vale',
      'menu.sf1.desc':  'Fish and shrimp ceviche, red onion in El Palmar-style sauce.',
      'menu.sf2.name':  'Limeto',
      'menu.sf2.desc':  'Raw shrimp with a pata de mula soup cocktail.',
      'menu.sf3.name':  'Sinaloense',
      'menu.sf3.desc':  'Raw shrimp, cucumber, red onion, serrano pepper and avocado.',
      'menu.sf4.name':  'Sierra Natural',
      'menu.sf4.desc':  'Fresh sierra fish with onion, cucumber and lime.',
      'menu.sf5.name':  'Sierra Cevichada',
      'menu.sf5.desc':  'Ceviche-style sierra with cucumber, red onion and cilantro.',
      'menu.sf6.name':  'Sierra Campechana',
      'menu.sf6.desc':  'Sierra with shrimp, octopus, red onion and fresh vegetables.',
      'menu.sf7.name':  'Tres Huertos',
      'menu.sf7.desc':  'Cucumber, serrano pepper and fresh seasonal vegetables.',
      'menu.sf8.name':  'San Blas',
      'menu.sf8.desc':  'Ceviche with a pata de mula soup cocktail.',
      'menu.sf9.name':  'Acapulcada',
      'menu.sf9.desc':  'Raw and cooked shrimp in Acapulco-style sauce.',
      'menu.sf10.name': 'San Carlos',
      'menu.sf10.desc': 'Raw shrimp, cooked shrimp, red onion and cucumber.',
      'menu.sf11.name': 'Japonés',
      'menu.sf11.desc': 'Ceviche with soy sauce and El Palmar\'s Japanese touch.',
      'menu.sf12.name': 'Ceviche Mixto',
      'menu.sf12.desc': 'Mix of fresh seafood with seasonal vegetables.',
      'menu.sf13.name': 'Aguachiles',
      'menu.sf13.desc': 'Raw shrimp, cucumber, red onion. Choose your sauce.',
      'menu.sf14.name': 'Tuna Sashimi',
      'menu.sf14.desc': 'Tuna slices, chives, shishimi, soy sauce with El Palmar\'s Japanese touch.',
      'menu.sf15.name': 'Cold Smoked Marlin Sashimi',
      'menu.sf15.desc': 'Fresh marlin slices, chives, shishimi, soy sauce with El Palmar\'s Japanese touch.',

      /* Caliente — subtitles */
      'menu.c.sub1':    'Tacos',
      'menu.c.sub2':    'Hot Plates',

      /* Caliente — names and descriptions */
      'menu.c1.name':   'Governor Shrimp Tacos',
      'menu.c1.desc':   'Order of 3, with our special recipe and guacamole.',
      'menu.c2.name':   'Governor Marlin Tacos',
      'menu.c2.desc':   'Order of 3, with our special recipe and guacamole.',
      'menu.c3.name':   'Morita Taco',
      'menu.c3.desc':   'Shrimp, octopus or mixed with a touch of our morita sauce, served with lettuce, pickled onion and guacamole.',
      'menu.c4.name':   'Zarandeado Taco',
      'menu.c4.desc':   'Shrimp, octopus or mixed with our zarandeada sauce, served with lettuce, pickled onion and guacamole.',
      'menu.c5.name':   'Crispy Shrimp Tacos',
      'menu.c5.desc':   'Order of 3, cenaduría style, served with lettuce, carrot, pickled onion and our shrimp broth.',
      'menu.c6.name':   'Chorreada El Palmar',
      'menu.c6.desc':   'The traditional Mazatlán chorreada, gordita with pork lard, cheese, shrimp and octopus marinated with our dressing, topped with lettuce, pickled onion and guacamole.',
      'menu.c7.name':   'Shrimp / Tuna Fresado',
      'menu.c7.desc':   '200 grams of exquisite cajun tuna and daily catch marinated with our recipe, lettuce, tomato, refried beans and guacamole.',
      'menu.c8.name':   'El Palmar Burger',
      'menu.c8.desc':   'Juicy beef or breaded shrimp, gouda cheese, lettuce, tomato, grilled onion, chipotle dressing, served with french fries.',
      'menu.c9.name':   'BBQ Chicken Wings',
      'menu.c9.desc':   'Oven-baked with artichoke sauce and pickled vegetables, cheese, cream and our shrimp broth.',
      'menu.c10.name':  'Fish',
      'menu.c10.desc':  'Breaded or zarandeado style (fillet).',
      'menu.c11.name':  'Zarandeado Octopus',
      'menu.c11.desc':  'Grilled octopus with homemade zarandeada sauce.',
      'menu.c12.name':  'Deviled Shrimp',
      'menu.c12.desc':  'Shrimp in árbol chili sauce with El Palmar\'s special touch.',
      'menu.c13.name':  'Seafood Platter',
      'menu.c13.desc':  'Mix of fresh grilled seafood with vegetables.',
      'menu.c14.name':  'Breaded Shrimp',
      'menu.c14.desc':  'Crispy breaded shrimp served with garnish.',
      'menu.c15.name':  'Coconut Shrimp',
      'menu.c15.desc':  'Shrimp breaded with shredded coconut, served with garnish.',
      'menu.c16.name':  'Rock Shrimp',
      'menu.c16.desc':  'Rock-style shrimp with our special sauce.',

      /* Appetizers — subtitles */
      'menu.a.sub1':    'Starters',
      'menu.a.sub2':    'Teriyaki',

      /* Appetizers — price variants */
      'menu.var.queso':      'Cheese',
      'menu.var.platqueso':  'Plant. & Cheese',
      'menu.var.camaron':    'Shrimp',
      'menu.var.pollo':      'Chicken',
      'menu.var.res':        'Beef',

      /* Appetizers — names and descriptions */
      'menu.a1.name':   'Kushiage (2 pcs)',
      'menu.a1.desc':   'Traditional breaded skewers with special dressing and citrus sauce.',
      'menu.a2.name':   'Gyoza (4 pcs)',
      'menu.a2.desc':   'Crab paste filled rolls, drizzled in homemade sauce.',
      'menu.a3.name':   'YO Shrimp (4 pcs)',
      'menu.a3.desc':   'Shrimp prepared house-style with special sauce.',
      'menu.a4.name':   'Tuna Cevichaca (8 pcs)',
      'menu.a4.desc':   'Tuna slices stuffed with kanikama, drizzled in homemade sauce.',
      'menu.a5.name':   'Ahi Shell',
      'menu.a5.desc':   'Shell filled with ahi tuna and El Palmar\'s special dressing.',
      'menu.a6.name':   'Teriyaki',
      'menu.a6.desc':   'Broccoli, peppers, onion and carrots sautéed with soy and teriyaki sauce.',

      /* Rice — names and descriptions */
      'menu.r1.name':   'Tuna Tower',
      'menu.r1.desc':   'Rice tower, avocado, crab paste, masago and delicious spicy fresh tuna, drizzled with house dressing, arugula and sesame sauce.',
      'menu.r2.name':   'Yakimeshi Supreme',
      'menu.r2.desc':   'Fried rice with vegetables and your choice of protein (chicken, beef or shrimp), crispy shrimp bits, arugula and sesame salad.',
      'menu.r3.name':   'Yakimeshi Especial',
      'menu.r3.desc':   'Fried rice with vegetables and your choice of protein (chicken, beef or shrimp), tampico, avocado and philadelphia topping.',
      'menu.r4.name':   'Yakimeshi',
      'menu.r4.desc':   'Exquisite fried rice with vegetables and your choice of protein (chicken, beef or shrimp).',
      'menu.r5.name':   'Gohan Especial',
      'menu.r5.desc':   'Steamed rice with your choice of protein (chicken, beef or shrimp).',

      /* Sushi — subtitles */
      'menu.su.sub1':   'Natural Rolls',
      'menu.su.sub2':   'Breaded Rolls',
      'menu.su.sub3':   'Special Rolls',
      'menu.su.sub4':   'Baked Rolls',

      /* Sushi — Natural Rolls */
      'menu.sn1.name':  'California Roll',
      'menu.sn1.desc':  'Crab, avocado, cucumber and sesame.',
      'menu.sn2.name':  'California Especial',
      'menu.sn2.desc':  'Crab, avocado, cucumber, sesame and special topping.',
      'menu.sn3.name':  'Philadelphia Roll',
      'menu.sn3.desc':  'Salmon, philadelphia cheese and avocado.',
      'menu.sn4.name':  'Avocado Maki',
      'menu.sn4.desc':  'Avocado wrapped in seaweed and rice.',
      'menu.sn5.name':  'Spicy Tuna',
      'menu.sn5.desc':  'Spicy tuna with cucumber and sesame.',
      'menu.sn6.name':  'Palmar Roll',
      'menu.sn6.desc':  'House special roll with shrimp, avocado and premium topping.',
      'menu.sn7.name':  'Gamba',
      'menu.sn7.desc':  'Beef, furikake, avocado and philadelphia.',
      'menu.sn8.name':  'Mango Roll',
      'menu.sn8.desc':  'Shrimp, avocado and mango.',

      /* Sushi — Breaded Rolls */
      'menu.se1.name':  'Tempura Especial',
      'menu.se1.desc':  'Shrimp, avocado and philadelphia inside with tampico topping.',
      'menu.se2.name':  'Surf & Turf',
      'menu.se2.desc':  'Shrimp, beef, avocado and philadelphia.',
      'menu.se3.name':  'Favorito Especial',
      'menu.se3.desc':  'Crab, avocado and philadelphia inside, topped with maki paste, thin avocado slices, drizzled with arugula and sesame sauce.',
      'menu.se4.name':  'Tres Quesos',
      'menu.se4.desc':  'Philadelphia cheese and croquette outside, shrimp, avocado and philadelphia inside.',
      'menu.se5.name':  'Camarón Blue',
      'menu.se5.desc':  'Manchego cheese outside, shrimp, bacon, avocado and philadelphia inside.',
      'menu.se6.name':  'Cordón Blue',
      'menu.se6.desc':  'Manchego cheese outside, chicken, bacon, avocado and philadelphia inside.',

      /* Sushi — Special Rolls */
      'menu.sp1.name':  'Sin Roll',
      'menu.sp1.desc':  'Double piece wrapped in soy seaweed, with salmon, tuna, mango, cucumber and sesame inside.',
      'menu.sp2.name':  'Aqua Roll',
      'menu.sp2.desc':  'Exquisite roll wrapped in soy seaweed, with salmon, tuna and shrimp inside.',
      'menu.sp3.name':  'Furia Roll',
      'menu.sp3.desc':  'Double piece wrapped in seaweed, with shrimp, avocado and spicy sauce inside.',
      'menu.sp4.name':  'Spicy Camarón',
      'menu.sp4.desc':  'Crab, avocado and philadelphia inside, with extra shrimp topping.',
      'menu.sp5.name':  'Eros',
      'menu.sp5.desc':  'Shrimp, avocado, cucumber and philadelphia inside, with special topping.',
      'menu.sp6.name':  'Café Calle',
      'menu.sp6.desc':  'Shrimp, avocado and philadelphia inside, with house special sauce.',
      'menu.sp7.name':  'Tinta Especial (with rice)',
      'menu.sp7.desc':  'Double piece wrapped in seaweed, with avocado, shrimp and crab inside, mango and sesame.',
      'menu.sp8.name':  'No Name Roll (with rice)',
      'menu.sp8.desc':  'Double piece, maki, shrimp, masago and El Palmar\'s special topping.',
      'menu.sp9.name':  'Camarón Roll',
      'menu.sp9.desc':  'Breaded shrimp in natural seaweed, with delicious spicy shrimp.',
      'menu.sp10.name': 'Pro Roll',
      'menu.sp10.desc': 'Avocado, shrimp and philadelphia inside, with premium topping.',
      'menu.sp11.name': 'Bonair Roll',
      'menu.sp11.desc': 'In seaweed with shrimp inside, special shrimp tempura topping.',
      'menu.sp12.name': 'Pro Especial',
      'menu.sp12.desc': 'Avocado, cucumber and philadelphia inside, drizzled with arugula and sesame sauce.',
      'menu.sp13.name': 'Diamondlite Roll',
      'menu.sp13.desc': 'Double piece wrapped in seaweed, with shrimp, avocado and special topping inside.',
      'menu.sp14.name': 'Kenny Roll',
      'menu.sp14.desc': 'Shrimp, avocado and philadelphia inside, with house topping.',
      'menu.sp15.name': 'Citrus Roll (no rice)',
      'menu.sp15.desc': 'Shrimp, avocado and citrus, wrapped in soy seaweed.',

      /* Sushi — Baked Rolls */
      'menu.sh1.name':  'Salmonito Hot',
      'menu.sh1.desc':  'Baked salmon with philadelphia cheese and special topping.',
      'menu.sh2.name':  'Hot Roll',
      'menu.sh2.desc':  'Baked roll with shrimp, cheese and house topping.',
      'menu.sh3.name':  'Hot Philadelphia',
      'menu.sh3.desc':  'Baked philadelphia with salmon and gratin cheese.',

      /* Kids — names and descriptions */
      'menu.k1.name':   'Classic Burger',
      'menu.k1.desc':   'Beef patty, yellow cheese, lettuce, onion, tomato. Served with crispy french fries.',
      'menu.k2.name':   'Fish Fingers',
      'menu.k2.desc':   'Fish fillet fingers served with french fries.',
      'menu.k3.name':   'Chicken Nuggets',
      'menu.k3.desc':   'Crispy chicken nuggets served with french fries.',
      'menu.k4.name':   'French Fries',
      'menu.k4.desc':   'Crispy french fries served with ketchup.',
      'menu.k5.name':   'Sushi Kids',
      'menu.k5.desc':   'Small breaded roll without seaweed, with shrimp, avocado and philadelphia.',

      /* Drinks — subtitles and note */
      'menu.d.sub1':    'Desserts',
      'menu.d.sub2':    'Beers',
      'menu.d.sub3':    'Non-Alcoholic',
      'menu.d.sub4':    'Signature Cocktails',
      'menu.d.sub5':    'Alcoholic Drinks',
      'menu.d.note1':   'Served with wood bucket vanilla ice cream.',
      'menu.db.whale':  'Large format',

      /* Desserts */
      'menu.dp1.name':  'Banana Pie',
      'menu.dp2.name':  'Guava Pie',
      'menu.dp3.name':  'Chocolate Cake',
      'menu.dp4.name':  'Cheesecake',
      'menu.dp5.name':  'Flan',

      /* Beers */
      'menu.db1.name':  'Pacifico Clara',
      'menu.db2.name':  'Pacifico Light',
      'menu.db3.name':  'Pacifico Suave',
      'menu.db4.name':  'Corona',
      'menu.db5.name':  'Corona Light',
      'menu.db6.name':  'Modelo Especial',
      'menu.db7.name':  'Negra Modelo',
      'menu.db8.name':  'Michelob Ultra',
      'menu.db9.name':  'Pacifico Clara Whale',
      'menu.db10.name': 'Pacifico Light Whale',

      /* Non-Alcoholic */
      'menu.dna1.name':  'Jazmin Tea',
      'menu.dna2.name':  'Lemon Tea',
      'menu.dna3.name':  'Fresh Lemonade',
      'menu.dna4.name':  'Mineral Lemonade',
      'menu.dna5.name':  'Fresh Orangeade',
      'menu.dna6.name':  'Bottled Water',
      'menu.dna7.name':  'Sparkling Water',
      'menu.dna8.name':  'Clamato for Beer',
      'menu.dna9.name':  'Mixed Clamato',
      'menu.dna10.name': 'Pineapple Drinks',
      'menu.dna11.name': 'Mango Drinks',
      'menu.dna12.name': 'Conga',
      'menu.dna13.name': 'Fresada',

      /* Signature Cocktails */
      'menu.dc1.name':  'Mezcalmar',
      'menu.dc1.desc':  'Mezcal, passion fruit, lime and sparkling water.',
      'menu.dc2.name':  'Old Saphire',
      'menu.dc2.desc':  'Gin, blueberry, lime and tonic water.',
      'menu.dc3.name':  'Falvo Tonic',
      'menu.dc3.desc':  'Signature cocktail with tonic water and a citrus touch.',
      'menu.dc4.name':  'Mezcalina',
      'menu.dc4.desc':  'Mezcal, mango, passion fruit and lime.',
      'menu.dc5.name':  'Passion Mango',
      'menu.dc5.desc':  'Vodka, mango, passion fruit and lime.',

      /* Alcoholic Drinks */
      'menu.da1.name':  'Sangria',
      'menu.da2.name':  'Clericot',
      'menu.da3.name':  'Carajillo',
      'menu.da4.name':  'Mojito',
      'menu.da5.name':  'Flavoured Margarita',
      'menu.da5.desc':  'Strawberry, pineapple, mango or passion fruit.',
      'menu.da6.name':  'Piña Colada',
      'menu.da7.name':  'Paloma',
      'menu.da8.name':  'Daiquiri',

      /* Charola */
      'menu.ch1.name':      'Small Tray',
      'menu.ch2.name':      'Large Tray',
      'menu.ch.tag.chica':  'Small',
      'menu.ch.tag.grande': 'Large',
      'menu.ch.order':      'Orders: 669 546 6940 · 669 100 5111 (WhatsApp)',

      /* Reviews */
      'reviews.tag':      'What they say',
      'reviews.title':    'Voices from the sea',
      'reviews.subtitle': 'No advertising. Just people who sat down, ate, and went home with a story.',
      'reviews.source':   'Verified reviews on Google Maps',

      /* Contact */
      'contact.tag':       'Find us',
      'contact.title':     'Come to where the land ends',
      'contact.addr.l':    'Address',
      'contact.addr.v':    'Av. del Mar, Mazatlán, Sinaloa, Mexico',
      'contact.phone.l':   'Phone / WhatsApp',
      'contact.hours.l':   'Hours',
      'contact.hours.v':   'Mon – Sun · 12:00 pm – 10:00 pm',
      'contact.social.l':  'Social media',
      'contact.delivery.l':'Order delivery',
      'contact.wa':        'WhatsApp',
      'contact.fb':        'Facebook',
      'contact.ig':        'Instagram',

      /* Footer */
      'footer.tagline':   'Seafood + Sushi · Mazatlán',
      'footer.nav':       'Navigation',
      'footer.follow':    'Follow us',
      'footer.copy':      '© 2025 El Palmar Mariscos + Sushi. All rights reserved.',
      'footer.scroll':    'Back to top',
    }
  };

  /* ── Language Manager ───────────────────────────── */
  var LanguageManager = {
    current: 'es',

    /**
     * Detect language from browser / system.
     * Falls back to 'es'.
     */
    detect: function () {
      var stored = null;
      try { stored = localStorage.getItem('ep-lang'); } catch (e) {}
      if (stored && i18n[stored]) return stored;

      var lang = (navigator.language || navigator.userLanguage || 'es').toLowerCase();
      return lang.startsWith('es') ? 'es' : 'en';
    },

    /**
     * Apply translations to all [data-i18n] elements.
     */
    apply: function (lang) {
      if (!i18n[lang]) return;
      this.current = lang;

      var elements = document.querySelectorAll('[data-i18n]');
      elements.forEach(function (el) {
        var key = el.getAttribute('data-i18n');
        var text = i18n[lang][key];
        if (text !== undefined) {
          if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') {
            el.placeholder = text;
          } else {
            el.textContent = text;
          }
        }
      });

      /* Update html lang attribute */
      document.documentElement.setAttribute('lang', lang);

      /* Update toggle button state */
      var items = document.querySelectorAll('.lang-toggle__item');
      items.forEach(function (item) {
        item.classList.toggle('is-active', item.getAttribute('data-lang') === lang);
      });

      /* Persist */
      try { localStorage.setItem('ep-lang', lang); } catch (e) {}

      /* Fire event for other modules */
      var event = new CustomEvent('ep:langchange', { detail: { lang: lang } });
      document.dispatchEvent(event);
    },

    /**
     * Toggle between ES and EN.
     */
    toggle: function () {
      this.apply(this.current === 'es' ? 'en' : 'es');
    },

    /**
     * Get a translation string.
     */
    t: function (key) {
      return i18n[this.current][key] || key;
    },

    /**
     * Initialize.
     */
    init: function () {
      var self = this;
      var lang = this.detect();
      this.apply(lang);

      /* Wire up toggle buttons */
      document.addEventListener('click', function (e) {
        var toggle = e.target.closest('.lang-toggle');
        if (!toggle) return;

        var item = e.target.closest('.lang-toggle__item');
        if (item) {
          var targetLang = item.getAttribute('data-lang');
          if (targetLang && targetLang !== self.current) {
            self.apply(targetLang);
          }
        } else {
          self.toggle();
        }
      });
    }
  };

  /* Expose globally */
  window.ElPalmarLang = LanguageManager;

  /* Auto-init when DOM is ready */
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', function () {
      LanguageManager.init();
    });
  } else {
    LanguageManager.init();
  }

})();
