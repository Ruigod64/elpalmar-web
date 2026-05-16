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
      'hero.title':     'Aquí la vida',
      'hero.title2':    'es más sabrosa.',
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
      'menu.tab1':         'Vamos empezando',
      'menu.tab2':         'Ceviches y Aguachiles',
      'menu.tab3':         'Lo caliente del palmar',
      'menu.tab4':         'Entradas',
      'menu.tab5':         'Arroz',
      'menu.tab6':         'Sushis',
      'menu.tab7':         'Niños',
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
      'menu.e1.desc':  '¡Claro o picante! O fría. Camarón cocido, pulpo, caracol, pepino y cebolla morada.',

      /* Entradas — subtítulos */
      'menu.e.sub1': 'Cocteles',
      'menu.e.sub2': 'Campechano',
      'menu.e.sub3': 'La Orden para Picar',
      'menu.e.sub4': 'Especialidades',

      /* Entradas — Cocteles */
      'menu.ec1.name': 'Camarón',
      'menu.ec2.name': 'Pulpo',
      'menu.ec3.name': 'Mixto',

      /* Entradas — Campechano */
      'menu.ecampe.desc': 'Aguachile · Camarón cocido · Pulpo · Caracol.',
      'menu.ecampe.note': 'Pepino y cebolla morada en julianas.',

      /* Entradas — La Orden para Picar */
      'menu.ep1.name': 'Camarón',
      'menu.ep2.name': 'Pulpo',
      'menu.ep3.name': 'Mixto (Camarón, Pulpo)',

      /* Entradas — Jaiba y Patés */
      'menu.e.jaiba.name':     'Jaiba Chametla',
      'menu.e.jaiba.desc':     'Orden de fresca pulpa de jaiba, coronada con pepino y cebolla morada finamente picados.',
      'menu.e.patecc.name':    'Paté de Camarón',
      'menu.e.pateml.name':    'Paté de Marlín',

      /* Entradas — Especialidades */
      'menu.e.torre.name':     'Torre del Palmar',
      'menu.e.torre.desc':     'Exquisita torre con camarón crudo, cocido, pulpo, caracol, atún, cebolla, pepino, aguacate, salsa negra de la casa.',
      'menu.e.molcajete.name': 'Molcajete Palmar',
      'menu.e.molcajete.desc': 'Surtido de nuestros mariscos, camarón cocido, camarón crudo, pulpo, atún, pepino, cebolla, cilantro, ahogado en salsas de la casa y clamato.',

      /* Tamaños adicionales */
      'menu.size.orden':   'Orden',
      'menu.size.tostada': 'Tostada',

      /* Seafood — subtítulos y etiquetas */
      'menu.sf.sub1':       'Ceviches',
      'menu.sf.sub2':       'Aguachiles y Sashimis',
      'menu.tag.aguachile': 'Aguachile',
      'menu.tag.nuevo':     'Nuevo',

      /* Seafood — Ceviches */
      'menu.sf1.name':  'El Vale',
      'menu.sf1.desc':  'Cubos de Atún, pepino y cebolla morada en julianas, salsa negra, roja y un toque de clamato.',
      'menu.sf2.name':  'Loreto',
      'menu.sf2.desc':  'Camarón crudo, camarón cocido, camarón seco, pulpo, pepino, cebolla morada, salsa verde y de habanero.',
      'menu.sf3.name':  'Camarón',
      'menu.sf3.desc':  'Camarón crudo, pepino, cebolla morada, tomate, un toque de cilantro y salsa verde.',
      'menu.sf4.name':  'Sierra Natural',
      'menu.sf4.desc':  'Sierra, con cebolla morada, un toque de cilantro y combinación de salsa verde y roja. Puedes pedirlo con tostitos.',
      'menu.sf5.name':  'Sierra Zanahoria',
      'menu.sf5.desc':  'Sierra, con zanahoria, cebolla morada, cilantro, chile serrano y chiltepín seco. Puedes pedirlo con tostitos.',
      'menu.sf6.name':  'Mazatlán',
      'menu.sf6.desc':  'Camarón crudo, pulpo, caracol, callo de hacha, pepino, cebolla morada, salsa verde y un toque de salsa negra.',
      'menu.sf7.name':  'Tres Puertos',
      'menu.sf7.desc':  'Combinación de camarón crudo, cocido y pulpo, pepino, cebolla morada, combinación de salsa verde, roja y negra.',
      'menu.sf8.name':  'San Blas',
      'menu.sf8.desc':  'Combinación de camarón crudo, cocido, pulpo con una coronita de pulpa de jaiba, pepino, cebolla morada, combinación de salsas verde, roja.',
      'menu.sf9.name':  'Teacapán',
      'menu.sf9.desc':  'Combinación de camarón crudo, cocido y seco, pepino, cebolla morada, combinación de salsa verde, roja y un toque de clamato de la casa.',
      'menu.sf10.name': 'Bahía Esmeralda',
      'menu.sf10.desc': 'Cuadros de pesca del día, pepino, cebolla en cuadros con un toque de cilantro, salsa verde y negra.',
      'menu.sf11.name': 'San Carlos',
      'menu.sf11.desc': 'Camarón crudo, camarón cocido, pulpo y atún, pepino, cebolla morada, un toque de cilantro, salseadito con salsa negra y un toque de clamato.',
      'menu.sf12.name': 'El Japonés',
      'menu.sf12.desc': 'Kanikama, camarón cocido, pulpo, callo de hacha, pepino y salsa picante oriental.',
      'menu.sf13.name': 'Ceviche Morita',
      'menu.sf13.desc': 'Camarón crudo, cebolla, pepino y aguacate con nuestra deliciosa salsa morita.',

      /* Seafood — Aguachiles */
      'menu.sf.ag1.name': 'Aguachile Tradicional (Salsa Verde)',
      'menu.sf.ag2.name': 'Aguachile Altata (Salsa Negra)',
      'menu.sf.ag3.name': 'Aguachile Maviri (Salsa Roja)',
      'menu.sf.ag.desc':  '¡De nuestra tierra! Camarón crudo, pepino, cebolla morada en julianas.',
      'menu.sf.ag4.name': 'Tres Puertos',
      'menu.sf.ag4.desc': 'Camarón crudo, camarón cocido, pulpo, pepino, cebolla morada en julianas con nuestra mezcla de salsas.',
      'menu.sf.ag5.name': 'Altata',
      'menu.sf.ag5.desc': 'Camarón crudo, pepino, cebolla morada, salsa negra especial.',

      /* Caliente — subtítulos */
      'menu.c.sub1':    'La Taquiza del Palmar',
      'menu.c.sub2':    'Lo Caliente del Palmar',
      'menu.c.sub3':    'Pescados',
      'menu.c.sub4':    'Camarones',

      /* Caliente — nota guarnición */
      'menu.c.guarn':   'Servidos con ensalada fresca, arroz y salsa tatemada.',

      /* Caliente — Lo Caliente */
      'menu.c7.name':   'Chicharrón Atún/Pescado',
      'menu.c7.desc':   '200 gramos de crujiente cubos de atún o pesca del día; servido en una cama de lechuga fresca, con guacamole y nuestra salsa tatemada.',
      'menu.c8.name':   'Hamburguesa El Palmar',
      'menu.c8.desc':   'Jugosa carne y camarones salteados, queso gouda, lechuga, tomate, cebolla asada, aderezo de chipotle, acompañada de crujientes papas a la francesa.',
      'menu.c9.name':   'Asado',
      'menu.c9.desc':   'El tradicional de Mazatlán, cuadros de atún/camarón y papa, fritos, coronado con lechuga, zanahoria, cebolla encurtida, queso, crema y nuestro caldo de camarón.',

      /* Caliente — Pescados */
      'menu.c.p1.name': 'Filete a la Plancha',
      'menu.c.p2.name': 'Filete Empanizado',
      'menu.c.p3.name': 'Filete Zarandeado',
      'menu.c.p4.name': 'Medallón de Atún',

      /* Caliente — Arrachera & Pulpo */
      'menu.c.arr.name': 'Arrachera',
      'menu.c.arr.desc': 'Asada a la plancha, servida con ensalada fresca, arroz y guacamole.',
      'menu.c11.name':   'Pulpo Zarandeado',
      'menu.c11.desc':   'Salteado a la mantequilla con ajo y nuestra salsa del Zarandeado de la casa.',

      /* Caliente — Camarones */
      'menu.c.cam1.name': 'Empanizados',
      'menu.c.cam2.name': 'Roca',
      'menu.c.cam3.name': 'Al Coco',
      'menu.c.cam4.name': 'Imperiales',

      /* Caliente — La Taquiza */
      'menu.c1.name':   'Tacos Gobernador Camarón',
      'menu.c1.desc':   'Orden de 3, con nuestra receta especial, y guacamole.',
      'menu.c2.name':   'Tacos Gobernador Marlín',
      'menu.c2.desc':   'Orden de 3, con nuestra receta especial, y guacamole.',
      'menu.c3.name':   'Taco Morita',
      'menu.c3.desc':   'De camarón, pulpo o mixto con toque de nuestra salsa morita, servido con lechuga, cebolla encurtida y guacamole.',
      'menu.c4.name':   'Taco Zarandeado',
      'menu.c4.desc':   'De camarón, pulpo o mixto con nuestra salsa zarandeada, servido con lechuga, cebolla encurtida y guacamole.',
      'menu.c5.name':   'Tacos Dorados de Camarón',
      'menu.c5.desc':   '¡Orden de 3, como en la cenaduría, servido con lechuga, zanahoria, cebolla encurtida y nuestro caldo de camarón, una delicia!',
      'menu.c6.name':   'Chorreada El Palmar',
      'menu.c6.desc':   'La tradicional chorreada mazatleca, gordita con asiento, queso, camarón y pulpo marinados con nuestro aderezo, coronado con lechuga, cebolla encurtida y guacamole.',

      /* Appetizers — subtítulos */
      'menu.a.sub1':    'Entradas',
      'menu.a.sub2':    'Teriyaki',

      /* Appetizers — variantes de precio */
      'menu.var.queso':      'Queso',
      'menu.var.platano':    'Plátano',
      'menu.var.platqueso':  'Plát. y Queso',
      'menu.var.camaron':    'Camarón',
      'menu.var.pollo':      'Pollo',
      'menu.var.res':        'Res',
      'menu.var.filete':     'Filete de Res',
      'menu.var.mixto':      'Mixto',

      /* Appetizers — nombres y descripciones */
      'menu.a1.name':   'Kushiages (2 pz)',
      'menu.a1.desc':   'Las tradicionales brochetas empanizadas con un aderezo agridulce y salsa tártara.',
      'menu.a2.name':   'Koikas (2 pz)',
      'menu.a2.desc':   'Calamar relleno de pasta de cangrejo, bañado con salsa de anguila y ajonjolí.',
      'menu.a3.name':   'Camarones Yú (4 pz)',
      'menu.a3.desc':   'Crujientes camarones empanizados rellenos de philadelphia con un topping de spicy cangrejo, bañados con salsa de anguila y ajonjolí.',
      'menu.a4.name':   'Chiles Yú (3 pz)',
      'menu.a4.desc':   'Chiles caribe empanizados rellenos de tampico, camarón y queso gouda, acompañados de aderezos picositos y tártara.',
      'menu.a5.name':   'Curricanes de Atún (8 pz)',
      'menu.a5.desc':   'Láminas de atún rellenas de kanikama y aguacate, en tiras bañado en un aderezo picosito de serrano y salsa yuzu.',
      'menu.a6.name':   'Concha Kai',
      'menu.a6.desc':   'Concha de mariscos, callo de hacha, camarón, pulpo y salmón preparados con aderezo spicy al horno.',
      'menu.a7.name':   'Sopa Dobimushi',
      'menu.a7.desc':   'Sopa de mariscos, callo de hacha, camarón, pulpo y salmón con un ligero toque de cebollín.',
      'menu.a.teriyaki.desc': 'Frescos pimientos, cebolla y zanahoria salteados con nuestra salsa Teriyaki especial, ¡hecha en casa! Servido sobre una cama de arroz al vapor.',

      /* Arroz — nombres y descripciones */
      'menu.r1.name':   'Tuna Tower',
      'menu.r1.desc':   'Torre de arroz, aguacate, pasta de cangrejo, masago y delicioso spicy de atún fresco, bañada con aderezo de la casa, salsa de anguila y ajonjolí.',
      'menu.r2.name':   'Yakimeshi Supremo',
      'menu.r2.desc':   'Arroz frito con verduras e ingrediente a elegir (pollo, res o camarón) pasta maki, aguacate, philadelphia y trocitos de camarón crujiente encima, bañado con salsa de anguila y ajonjolí.',
      'menu.r3.name':   'Yakimeshi Especial',
      'menu.r3.desc':   'Arroz frito con verduras e ingrediente a elegir (pollo, res o camarón), tampico, aguacate y topping philadelphia.',
      'menu.r4.name':   'Yakimeshi',
      'menu.r4.desc':   'Exquisito arroz frito con verduras e ingrediente a elegir (pollo, res o camarón).',
      'menu.r5.name':   'Gohan Especial',
      'menu.r5.desc':   'Arroz al vapor con un ingrediente a elegir (pollo, res o camarón), tampico, aguacate y philadelphia encima.',

      /* Sushi — subtítulos */
      'menu.su.sub1':   'Rollos Naturales',
      'menu.su.sub2':   'Rollos Empanizados',
      'menu.su.sub3':   'Rollos Especiales',
      'menu.su.sub4':   'Rollos Horneados',

      /* Sushi — Rollos Naturales */
      'menu.sn1.name':  'California Roll',
      'menu.sn1.desc':  'Camarón, aguacate, pepino y philadelphia.',
      'menu.sn2.name':  'California Especial',
      'menu.sn2.desc':  'Masago por fuera, camarón, aguacate, pepino y philadelphia por dentro.',
      'menu.sn3.name':  'Avocado Maki',
      'menu.sn3.desc':  'Aguacate por fuera, camarón, pepino y philadelphia por dentro.',
      'menu.sn4.name':  'Philadelphia Roll',
      'menu.sn4.desc':  'Philadelphia por fuera, camarón, aguacate, pepino y philadelphia por dentro.',
      'menu.sn5.name':  'Yú Maki',
      'menu.sn5.desc':  'Alga por fuera, pasta maki, aguacate, pepino y philadelphia por dentro.',
      'menu.sn6.name':  'Beach Roll',
      'menu.sn6.desc':  'Masago por fuera, camarón, atún, aguacate, pepino y philadelphia por dentro, bañado con salsa de anguila y ajonjolí.',
      'menu.sn7.name':  'Ninja Roll',
      'menu.sn7.desc':  'Fresco rollo envuelto en hoja de pepino, por dentro kanikama, masago, aguacate y philadelphia.',
      'menu.sn8.name':  'Eby Roll',
      'menu.sn8.desc':  'Camarón por fuera, tampico, aguacate, pepino y philadelphia por dentro.',
      'menu.sn9.name':  'Sakura Roll',
      'menu.sn9.desc':  'Kanikama por fuera, salmón, aguacate y philadelphia por dentro.',
      'menu.sn10.name': 'Bandera Roll',
      'menu.sn10.desc': 'Salmón, aguacate y philadelphia por fuera, camarón, maki, pepino y philadelphia por dentro.',
      'menu.sn11.name': 'Gusano Roll',
      'menu.sn11.desc': 'Pasta maki por fuera, camarón empanizado, kanikama, pepino y philadelphia por dentro, encima finas rajas de aguacate, salsa de anguila y ajonjolí.',
      'menu.sn12.name': 'Mango Roll',
      'menu.sn12.desc': 'Delicioso rollo envuelto en mango, por dentro camarón tempura, kanikama spicy, aguacate, pepino y philadelphia, encima un ligero toque picante, salsa de anguila y ajonjolí.',
      'menu.sn13.name': 'Shake Roll',
      'menu.sn13.desc': 'Fresco rollo envuelto en salmón, por dentro camarón, aguacate, pepino y philadelphia.',
      'menu.sn14.name': 'Rainbow Roll',
      'menu.sn14.desc': 'Delicioso rollo envuelto en salmón, atún, masago y aguacate, por dentro anguila ahumada, maki, pepino y philadelphia, bañado con salsa de anguila y ajonjolí.',

      /* Sushi — Rollos Empanizados */
      'menu.se1.name':  'Tempura Especial',
      'menu.se1.desc':  'Camarón, aguacate y philadelphia por dentro; con topping tampico.',
      'menu.se2.name':  'Mar y Tierra',
      'menu.se2.desc':  'Camarón, res, aguacate y philadelphia.',
      'menu.se3.name':  'Favorito Especial',
      'menu.se3.desc':  'Por dentro cangrejo, aguacate y philadelphia, encima pasta maki, finas rajas de aguacate, bañado con salsa de anguila y ajonjolí.',
      'menu.se4.name':  'Tres Quesos',
      'menu.se4.desc':  'Por fuera queso philadelphia, manchego y amarillo, por dentro camarón, aguacate y philadelphia.',
      'menu.se5.name':  'Camarón Blue',
      'menu.se5.desc':  'Por fuera queso manchego, por dentro camarón, tocino, aguacate y philadelphia.',
      'menu.se6.name':  'Cordón Blue',
      'menu.se6.desc':  'Por fuera queso manchego, por dentro pollo, tocino, aguacate y philadelphia.',

      /* Sushi — Rollos Especiales */
      'menu.sp1.name':  'Dai Roll',
      'menu.sp1.desc':  'Fresco rollo envuelto en alga de soya, por dentro atún, mango, masago, pepino y aguacate.',
      'menu.sp2.name':  'Akira Roll',
      'menu.sp2.desc':  'Exquisito rollo envuelto en alga de soya, por dentro atún, salmón, kanikama spicy y aguacate.',
      'menu.sp3.name':  'Osaka Roll',
      'menu.sp3.desc':  'Fresco rollo envuelto en atún, por dentro salmón, masago, aguacate y pepino.',
      'menu.sp4.name':  'Spicy Cangrejo',
      'menu.sp4.desc':  'Cangrejo, aguacate, pepino y philadelphia por dentro, con topping spicy de cangrejo encima.',
      'menu.sp5.name':  'Spicy Camarón',
      'menu.sp5.desc':  'Camarón, aguacate, pepino y philadelphia por dentro, con topping spicy de camarón encima.',
      'menu.sp6.name':  'Spicy Callo',
      'menu.sp6.desc':  'Camarón, aguacate, pepino y philadelphia por dentro, con topping spicy de callo encima.',
      'menu.sp7.name':  'Spicy Pulpo',
      'menu.sp7.desc':  'Pulpo, aguacate, pepino y philadelphia por dentro, con topping spicy de pulpo encima.',
      'menu.sp8.name':  'Spicy Atún',
      'menu.sp8.desc':  'Atún, aguacate, pepino y philadelphia por dentro, con topping spicy de atún encima.',
      'menu.sp9.name':  'Spicy Salmón',
      'menu.sp9.desc':  'Salmón, aguacate, pepino y philadelphia por dentro, con topping spicy de salmón encima.',
      'menu.sp10.name': 'Spicy Calamar',
      'menu.sp10.desc': 'Cangrejo, aguacate, pepino y philadelphia por dentro, con topping spicy de calamar encima.',
      'menu.sp11.name': 'Avocado Especial',
      'menu.sp11.desc': 'Exquisito rollo envuelto en finas rajas de aguacate, por dentro camarón, pepino y philadelphia, con topping spicy cangrejo, camarón empanizado, salsa de anguila y ajonjolí encima.',
      'menu.sp12.name': 'Tunita Especial (sin arroz)',
      'menu.sp12.desc': 'Exquisito rollo envuelto en atún y finas rajas de aguacate, por dentro camarón tempura, kanikama spicy, pasta maki y philadelphia, con un ligero toque de aderezo y de cilantro.',
      'menu.sp13.name': 'Camarón Rico',
      'menu.sp13.desc': 'Cuatro camarones envueltos en alga marina y tempura, relleno de spicy de camarón cangrejo.',
      'menu.sp14.name': 'Power Roll',
      'menu.sp14.desc': 'Delicioso rollo envuelto en salmón, por dentro camarón, aguacate, pepino y philadelphia, con topping spicy de camarón tempura.',
      'menu.sp15.name': 'Especial Roll',
      'menu.sp15.desc': 'Exquisito rollo envuelto en aguacate y masago, por dentro camarón, pepino y philadelphia, con topping spicy de camarón tempura.',
      'menu.sp16.name': 'Kento Roll',
      'menu.sp16.desc': 'Masago por fuera, por dentro camarón empanizado, pasta maki, aguacate, pepino y philadelphia, con topping spicy de camarón y kanikama, bañado con salsa de anguila y ajonjolí.',
      'menu.sp17.name': 'Fitness Roll (sin arroz)',
      'menu.sp17.desc': 'Fresco rollo envuelto en pepino, atún y kanikama, por dentro maki, aguacate y philadelphia, con topping spicy de callo y camarón, bañado con salsa de anguila y ajonjolí.',
      'menu.sp18.name': 'No Name Roll (sin arroz)',
      'menu.sp18.desc': 'Fresco rollo envuelto en atún, por dentro maki, callo de hacha, camarón, masago, aguacate y philadelphia, bañado con salsa de anguila y ajonjolí.',
      'menu.sp19.name': 'Ryo Roll',
      'menu.sp19.desc': 'Rollo envuelto en salmón, por dentro aguacate, pepino y philadelphia, con topping spicy (callo/camarón/kanikama/atún), encima trocitos de camarón empanizado, salsa de anguila y ajonjolí.',
      'menu.sp20.name': 'Yu Especial',
      'menu.sp20.desc': 'Anguila ahumada y masago por fuera, por dentro camarón, aguacate, pepino y philadelphia, bañado con salsa de anguila y ajonjolí.',
      'menu.sp21.name': 'Guamuchilito Roll',
      'menu.sp21.desc': 'Rollo envuelto en camarón y pulpo, por dentro cangrejo, pepino y philadelphia, encima tampico, finas rajas de aguacate, salsa de anguila y ajonjolí.',
      'menu.sp22.name': 'Vallarta Roll',
      'menu.sp22.desc': 'Rollo envuelto en camarón, aguacate y philadelphia, por dentro camarón empanizado, pepino y philadelphia, con topping spicy cangrejo bañado en salsa de anguila y ajonjolí.',
      'menu.sp23.name': 'Baby Roll',
      'menu.sp23.desc': 'Rollo envuelto en alga y tempura, por dentro camarón, aguacate, pepino y philadelphia, encima spicy de callo, bañado con salsa de anguila y ajonjolí.',
      'menu.sp24.name': 'Hana Roll',
      'menu.sp24.desc': 'Envuelto en salmón y aguacate, por dentro pepino, aguacate y camarón tempura, encima spicy camarón, kanikama, pulpo y atún.',

      /* Sushi — Rollos Horneados */
      'menu.sh1.name':  'Salmoncito Hot',
      'menu.sh1.desc':  'Salmón por fuera, por dentro maki, camarón, aguacate y philadelphia, encima spicy camarón, bañado con salsa de anguila y ajonjolí.',
      'menu.sh2.name':  'Beluman',
      'menu.sh2.desc':  'Rollo envuelto en salmón, por dentro camarón, maki, aguacate y philadelphia, horneado con aderezo spicy, bañado con salsa de anguila y ajonjolí.',
      'menu.sh3.name':  'Banana',
      'menu.sh3.desc':  'Rollo envuelto en plátano macho, por dentro camarón capeado, maki, aguacate y philadelphia, bañado con salsa de anguila y ajonjolí.',
      'menu.sh4.name':  'Nagano',
      'menu.sh4.desc':  'Rollo envuelto en camarón, por dentro maki, aguacate y philadelphia, encima spicy (camarón/kanikama/queso gouda), bañado con salsa de anguila y ajonjolí.',
      'menu.sh5.name':  'Camarón Especial',
      'menu.sh5.desc':  'Rollo envuelto en camarón, por dentro kanikama, aguacate y philadelphia, horneado con aderezo de la casa, bañado con salsa de anguila y ajonjolí.',
      'menu.sh6.name':  'Campechano Hot',
      'menu.sh6.desc':  'Rollo envuelto en finas rajas de aguacate, por dentro camarón, pepino y philadelphia, encima spicy de camarón, cangrejo y ostión ahumado, con un ligero toque picante.',
      'menu.sh7.name':  'House Especial',
      'menu.sh7.desc':  'Rollo envuelto en pasta de cangrejo, por dentro camarón, aguacate y philadelphia, encima spicy de camarón, bañado con salsa de anguila y ajonjolí.',
      'menu.sh8.name':  'Avocado Hot',
      'menu.sh8.desc':  'Rollo envuelto en finas rajas de aguacate, por dentro camarón, pepino y philadelphia, encima spicy pulpo/camarón con un ligero toque de salsa de anguila y ajonjolí.',

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

      /* Vino de Mesa */
      'menu.d.sub.wine': 'Vino de Mesa (por copa)',
      'menu.dw1.name':   'House Red',
      'menu.dw2.name':   'House White',

      /* Nuevas No Alcohólicas */
      'menu.dna14.name': 'Mineral Orangeade',
      'menu.dna15.name': 'Jamaica (Hibiscus)',
      'menu.dna16.name': 'Refrescos 355 ml',

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
      'menu.dc1.desc':  'Mezcal, maracuyá, limón.',
      'menu.dc2.name':  'Old Sapphire',
      'menu.dc2.desc':  'Ginebra, frutos rojos, limón.',
      'menu.dc3.name':  'Paloma Tonic',
      'menu.dc3.desc':  'Tequila, fresa, limón y agua tónica.',
      'menu.dc4.name':  'Mezcalina',
      'menu.dc4.desc':  'Mezcal, chamoy, sal de gusano, Jamaica o maracuyá.',
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

      /* Mission & Vision */
      'about.mv.tag':         'Misión & Visión',
      'about.mission.title':  'Misión',
      'about.mission.body':   'Creamos memorias mediante experiencias únicas e inolvidables a través de la fusión de sabores, frescura y calidad de nuestros platillos elaborados con amor, para hacer felices a nuestros invitados.',
      'about.vision.title':   'Visión',
      'about.vision.body':    'Somos una empresa que conquista nuevos mercados con nuestro concepto único, siendo líderes por nuestra fusión de sabores, acompañados de nuestra familia y colaboradores exitosos que viven los valores de El Palmar.',

      /* Values */
      'about.values.tag':  'Nuestros Valores',
      'about.v1.title':    'Respeto',
      'about.v1.quote':    '"El respeto se vive"',
      'about.v1.body':     'Valoro y cuido mi lugar de trabajo, a mis compañeros e invitados, brindándoles un trato amable y empático. Tratando a los demás como me gustaría ser tratado.',
      'about.v2.title':    'Compromiso',
      'about.v2.quote':    '"Siempre cumplo mi palabra"',
      'about.v2.body':     'Creemos en lo que hacemos, trabajamos juntos hacia el cumplimiento de nuestras metas, actuando con un sentido de pertenencia cuidando el bienestar de la empresa.',
      'about.v3.title':    'Integridad',
      'about.v3.quote':    '"Hago lo correcto"',
      'about.v3.body':     'Actúo con honestidad, bondad y haciendo lo correcto en todo momento, tomando decisiones por el bien nuestro y de nuestro entorno.',
      'about.v4.title':    'Amabilidad',
      'about.v4.quote':    '"Siempre se puede elegir, elige una actitud positiva"',
      'about.v4.body':     'Brindamos una atención amable a nuestros invitados, siempre con entusiasmo y una sonrisa, con la finalidad de que se lleven una grata experiencia de su visita.',
      'about.v5.title':    'Liderazgo',
      'about.v5.quote':    '"Predico con el ejemplo"',
      'about.v5.body':     'Somos fuente de inspiración influyendo de manera positiva y directa en nuestro equipo de trabajo, como en su formación a través de la pasión y energía que ponemos en todo lo que hacemos.',

      /* Reserve */
      'reserve.tag':        'Reservaciones',
      'reserve.title':      'Reserva tu mesa',
      'reserve.subtitle':   'Cuéntanos cuándo llegas y nosotros nos encargamos del resto.',
      'reserve.f.name':     'Nombre',
      'reserve.f.phone':    'WhatsApp',
      'reserve.f.guests':   'Personas',
      'reserve.f.date':     'Fecha',
      'reserve.f.time':     'Hora',
      'reserve.f.notes':    'Notas adicionales',
      'reserve.optional':   '(opcional)',
      'reserve.ph.name':    'Tu nombre completo',
      'reserve.ph.phone':   '669 100 0000',
      'reserve.ph.guests':  'Número de personas',
      'reserve.ph.notes':   'Alergias, ocasión especial, preferencias de mesa...',
      'reserve.opt.11':     '11 – 15 personas',
      'reserve.opt.16':     '16 – 20 personas',
      'reserve.opt.20':     'Más de 20',
      'reserve.err.name':   'Por favor ingresa tu nombre.',
      'reserve.err.phone':  'Por favor ingresa tu número de WhatsApp.',
      'reserve.err.guests': 'Por favor selecciona el número de personas.',
      'reserve.err.date':   'Por favor selecciona una fecha.',
      'reserve.err.time':   'Por favor selecciona la hora (12:00 – 22:00).',
      'reserve.submit':     'Reservar por WhatsApp',
      'reserve.call':       'Llamar al restaurante',
      'reserve.nav':        'Reservar',

      /* Destacados */
      'dest.tag':      'Nuestros Sabores',
      'dest.title':    'Del mar',
      'dest.title2':   'a tu mesa',
      'dest.sub':      'Desliza cada galería y descubre los sabores que hacen de El Palmar un lugar que no se olvida.',
      'dest.cat1':     'Vamos Empezando',
      'dest.cat2':     'Ceviches, Aguachiles y Tostadas',
      'dest.cat3':     'Taquiza y Lo Caliente',
      'dest.cat4':     'Sushi Entradas y Arroz',
      'dest.cat5':     'Rolls',
      'dest.cat6':     'Cócteles',
      'dest.s1.label':  'Para Empezar',
      'dest.s1.title':  'Así empieza',
      'dest.s1.title2': 'la experiencia',
      'dest.s1.body':   'Frescos, generosos y con el sello inconfundible del Pacífico. Todo lo que necesitas para abrir el apetito.',
      'dest.s2.label':  'El Mar Crudo',
      'dest.s2.title':  'Frescura que',
      'dest.s2.title2': 'no se disculpa',
      'dest.s2.body':   'Cada ceviche, un diálogo entre el océano y la tradición sinaloense. Sin artificios, solo el producto del día.',
      'dest.s3.label':  'Fuego y Tradición',
      'dest.s3.title':  'Del taco al zarán,',
      'dest.s3.title2': 'el Pacífico en llamas',
      'dest.s3.body':   'Taquiza sinaloense y cocina caliente, dos mundos que en El Palmar comparten el mismo fuego.',
      'dest.s4.label':  'Precisión Japonesa',
      'dest.s4.title':  'Donde Sinaloa',
      'dest.s4.title2': 'se encuentra con Japón',
      'dest.s4.body':   'Kushiage, nigiris, yakimeshi. Técnica y producto que demuestran que la fusión no es moda — es destino.',
      'dest.s5.label':  'Creatividad sin Límites',
      'dest.s5.title':  'Rolls que',
      'dest.s5.title2': 'no se olvidan',
      'dest.s5.body':   'Once rolls, once historias. Cada uno con su personalidad, todos con el mismo compromiso: sorprenderte.',
      'dest.s6.label':  'La Experiencia Completa',
      'dest.s6.title':  'La tarde perfecta',
      'dest.s6.title2': 'tiene un sabor',
      'dest.s6.body':   'Ven a descubrirlo. Una mesa, un cóctel y el menú completo esperándote frente al Pacífico.',
      'dest.cta1':     'Ver el menú completo',
      'dest.cta2':     'Reservar mesa',
    },

    en: {
      /* Nav */
      'nav.about':    'About',
      'nav.menu':     'Menu',
      'nav.reviews':  'Reviews',
      'nav.contact':  'Contact',

      /* Hero */
      'hero.eyebrow':   'Mazatlán, Sinaloa · Mexico',
      'hero.title':     'Here, life',
      'hero.title2':    'is more flavorful.',
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
      'menu.tab1':         'Let´s start',
      'menu.tab2':         'Cevivhes & Aguachiles',
      'menu.tab3':         'Palmar´s Hotties',
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
      'menu.e1.desc':  'Clear or spicy! Or chilled. Cooked shrimp, octopus, sea snail, cucumber and red onion.',

      /* Entradas — subtitles */
      'menu.e.sub1': 'Cocktails',
      'menu.e.sub2': 'Campechano',
      'menu.e.sub3': 'The Snack Order',
      'menu.e.sub4': 'Specialties',

      /* Entradas — Cocktails */
      'menu.ec1.name': 'Shrimp',
      'menu.ec2.name': 'Octopus',
      'menu.ec3.name': 'Mixed',

      /* Entradas — Campechano */
      'menu.ecampe.desc': 'Aguachile · Cooked shrimp · Octopus · Sea snail.',
      'menu.ecampe.note': 'Cucumber and red onion in julienne.',

      /* Entradas — The Snack Order */
      'menu.ep1.name': 'Shrimp',
      'menu.ep2.name': 'Octopus',
      'menu.ep3.name': 'Mixed (Shrimp, Octopus)',

      /* Entradas — Jaiba & Pâtés */
      'menu.e.jaiba.name':     'Jaiba Chametla',
      'menu.e.jaiba.desc':     'Order of fresh crab pulp, topped with finely diced cucumber and red onion.',
      'menu.e.patecc.name':    'Shrimp Pâté',
      'menu.e.pateml.name':    'Marlin Pâté',

      /* Entradas — Specialties */
      'menu.e.torre.name':     'Palmar Tower',
      'menu.e.torre.desc':     'Exquisite tower with raw and cooked shrimp, octopus, sea snail, tuna, onion, cucumber, avocado, homemade black sauce.',
      'menu.e.molcajete.name': 'Palmar Molcajete',
      'menu.e.molcajete.desc': 'A selection of our seafood — cooked shrimp, raw shrimp, octopus, tuna, cucumber, onion, cilantro, drowned in homemade sauces and clamato.',

      /* Additional size labels */
      'menu.size.orden':   'Order',
      'menu.size.tostada': 'Tostada',

      /* Seafood — subtitles and tags */
      'menu.sf.sub1':       'Ceviches',
      'menu.sf.sub2':       'Aguachiles & Sashimis',
      'menu.tag.aguachile': 'Aguachile',
      'menu.tag.nuevo':     'New',

      /* Seafood — Ceviches */
      'menu.sf1.name':  'El Vale',
      'menu.sf1.desc':  'Tuna cubes, cucumber and red onion in julienne, black sauce, red sauce and a touch of clamato.',
      'menu.sf2.name':  'Loreto',
      'menu.sf2.desc':  'Raw shrimp, cooked shrimp, dried shrimp, octopus, cucumber, red onion, green and habanero sauce.',
      'menu.sf3.name':  'Shrimp',
      'menu.sf3.desc':  'Raw shrimp, cucumber, red onion, tomato, a touch of cilantro and green sauce.',
      'menu.sf4.name':  'Sierra Natural',
      'menu.sf4.desc':  'Sierra fish with red onion, a touch of cilantro and a blend of green and red sauce. You can order it with tostitos.',
      'menu.sf5.name':  'Sierra Zanahoria',
      'menu.sf5.desc':  'Sierra fish with carrot, red onion, cilantro, serrano pepper and dried chiltepín. You can order it with tostitos.',
      'menu.sf6.name':  'Mazatlán',
      'menu.sf6.desc':  'Raw shrimp, octopus, sea snail, scallop, cucumber, red onion, green sauce and a touch of black sauce.',
      'menu.sf7.name':  'Tres Puertos',
      'menu.sf7.desc':  'Mix of raw, cooked shrimp and octopus, cucumber, red onion, blend of green, red and black sauce.',
      'menu.sf8.name':  'San Blas',
      'menu.sf8.desc':  'Mix of raw, cooked shrimp and octopus topped with fresh crab pulp, cucumber, red onion, blend of green and red sauce.',
      'menu.sf9.name':  'Teacapán',
      'menu.sf9.desc':  'Mix of raw, cooked and dried shrimp, cucumber, red onion, blend of green, red sauce and a touch of house clamato.',
      'menu.sf10.name': 'Bahía Esmeralda',
      'menu.sf10.desc': 'Catch-of-the-day cubes, cucumber, onion with a touch of cilantro, green and black sauce.',
      'menu.sf11.name': 'San Carlos',
      'menu.sf11.desc': 'Raw shrimp, cooked shrimp, octopus and tuna, cucumber, red onion, a touch of cilantro, drizzled with black sauce and a touch of clamato.',
      'menu.sf12.name': 'El Japonés',
      'menu.sf12.desc': 'Kanikama, cooked shrimp, octopus, scallop, cucumber and oriental spicy sauce.',
      'menu.sf13.name': 'Ceviche Morita',
      'menu.sf13.desc': 'Raw shrimp, onion, cucumber and avocado with our delicious morita sauce.',

      /* Seafood — Aguachiles */
      'menu.sf.ag1.name': 'Traditional Aguachile (Green Sauce)',
      'menu.sf.ag2.name': 'Altata Aguachile (Black Sauce)',
      'menu.sf.ag3.name': 'Maviri Aguachile (Red Sauce)',
      'menu.sf.ag.desc':  'From our land! Raw shrimp, cucumber, red onion in julienne.',
      'menu.sf.ag4.name': 'Tres Puertos',
      'menu.sf.ag4.desc': 'Raw shrimp, cooked shrimp, octopus, cucumber, red onion in julienne with our mixed sauces.',
      'menu.sf.ag5.name': 'Altata',
      'menu.sf.ag5.desc': 'Raw shrimp, cucumber, red onion, special black sauce.',

      /* Caliente — subtitles */
      'menu.c.sub1':    'The Taquiza',
      'menu.c.sub2':    'Hot Plates',
      'menu.c.sub3':    'Fish',
      'menu.c.sub4':    'Shrimp',

      /* Caliente — garnish note */
      'menu.c.guarn':   'Served with fresh salad, rice and tatemada sauce.',

      /* Caliente — Hot Plates */
      'menu.c7.name':   'Chicharrón Tuna/Fish',
      'menu.c7.desc':   '200 grams of crispy tuna or catch-of-the-day cubes; served on a bed of fresh lettuce, with guacamole and our tatemada sauce.',
      'menu.c8.name':   'El Palmar Burger',
      'menu.c8.desc':   'Juicy beef and sautéed shrimp, gouda cheese, lettuce, tomato, grilled onion, chipotle dressing, served with crispy french fries.',
      'menu.c9.name':   'Asado',
      'menu.c9.desc':   'The Mazatlán classic — tuna or shrimp cubes with potato, fried, topped with lettuce, carrot, pickled onion, cheese, cream and our shrimp broth.',

      /* Caliente — Fish */
      'menu.c.p1.name': 'Grilled Fillet',
      'menu.c.p2.name': 'Breaded Fillet',
      'menu.c.p3.name': 'Zarandeado Fillet',
      'menu.c.p4.name': 'Tuna Medallion',

      /* Caliente — Arrachera & Octopus */
      'menu.c.arr.name': 'Arrachera',
      'menu.c.arr.desc': 'Grilled skirt steak, served with fresh salad, rice and guacamole.',
      'menu.c11.name':   'Zarandeado Octopus',
      'menu.c11.desc':   'Sautéed in butter with garlic and our homemade zarandeado sauce.',

      /* Caliente — Shrimp */
      'menu.c.cam1.name': 'Breaded',
      'menu.c.cam2.name': 'Rock Style',
      'menu.c.cam3.name': 'Coconut',
      'menu.c.cam4.name': 'Imperial',

      /* Caliente — The Taquiza */
      'menu.c1.name':   'Governor Shrimp Tacos',
      'menu.c1.desc':   'Order of 3, with our special recipe and guacamole.',
      'menu.c2.name':   'Governor Marlin Tacos',
      'menu.c2.desc':   'Order of 3, with our special recipe and guacamole.',
      'menu.c3.name':   'Morita Taco',
      'menu.c3.desc':   'Shrimp, octopus or mixed with a touch of our morita sauce, served with lettuce, pickled onion and guacamole.',
      'menu.c4.name':   'Zarandeado Taco',
      'menu.c4.desc':   'Shrimp, octopus or mixed with our zarandeada sauce, served with lettuce, pickled onion and guacamole.',
      'menu.c5.name':   'Crispy Shrimp Tacos',
      'menu.c5.desc':   'Order of 3, cenaduría style, served with lettuce, carrot, pickled onion and our shrimp broth — a delight!',
      'menu.c6.name':   'Chorreada El Palmar',
      'menu.c6.desc':   'The traditional Mazatlán chorreada, gordita with pork lard, cheese, shrimp and octopus marinated with our dressing, topped with lettuce, pickled onion and guacamole.',
      'menu.c16.name':  'Rock Shrimp',
      'menu.c16.desc':  'Rock-style shrimp with our special sauce.',

      /* Appetizers — subtitles */
      'menu.a.sub1':    'Starters',
      'menu.a.sub2':    'Teriyaki',

      /* Appetizers — price variants */
      'menu.var.queso':      'Cheese',
      'menu.var.platano':    'Plantain',
      'menu.var.platqueso':  'Plant. & Cheese',
      'menu.var.camaron':    'Shrimp',
      'menu.var.pollo':      'Chicken',
      'menu.var.res':        'Beef',
      'menu.var.filete':     'Beef Fillet',
      'menu.var.mixto':      'Mixed',

      /* Appetizers — names and descriptions */
      'menu.a1.name':   'Kushiages (2 pcs)',
      'menu.a1.desc':   'Traditional breaded skewers with a sweet-and-sour dressing and tartar sauce.',
      'menu.a2.name':   'Koikas (2 pcs)',
      'menu.a2.desc':   'Squid stuffed with crab paste, drizzled with eel sauce and sesame.',
      'menu.a3.name':   'Yú Shrimp (4 pcs)',
      'menu.a3.desc':   'Crispy breaded shrimp stuffed with philadelphia, topped with spicy crab, drizzled with eel sauce and sesame.',
      'menu.a4.name':   'Yú Peppers (3 pcs)',
      'menu.a4.desc':   'Breaded caribe peppers stuffed with tampico, shrimp and gouda cheese, served with spicy dressings and tartar.',
      'menu.a5.name':   'Tuna Curricanes (8 pcs)',
      'menu.a5.desc':   'Tuna slices stuffed with kanikama and avocado, drizzled with a spicy serrano dressing and yuzu sauce.',
      'menu.a6.name':   'Concha Kai',
      'menu.a6.desc':   'Seafood shell with scallop, shrimp, octopus and salmon prepared with spicy dressing, baked.',
      'menu.a7.name':   'Dobimushi Soup',
      'menu.a7.desc':   'Seafood soup with scallop, shrimp, octopus and salmon with a light touch of chives.',
      'menu.a.teriyaki.desc': 'Fresh peppers, onion and carrot sautéed with our special homemade Teriyaki sauce! Served over steamed rice.',

      /* Rice — names and descriptions */
      'menu.r1.name':   'Tuna Tower',
      'menu.r1.desc':   'Rice tower, avocado, crab paste, masago and delicious spicy fresh tuna, drizzled with house dressing, eel sauce and sesame.',
      'menu.r2.name':   'Yakimeshi Supremo',
      'menu.r2.desc':   'Fried rice with vegetables and your choice of protein (chicken, beef or shrimp), maki paste, avocado, philadelphia and crispy shrimp bits on top, drizzled with eel sauce and sesame.',
      'menu.r3.name':   'Yakimeshi Especial',
      'menu.r3.desc':   'Fried rice with vegetables and your choice of protein (chicken, beef or shrimp), tampico, avocado and philadelphia topping.',
      'menu.r4.name':   'Yakimeshi',
      'menu.r4.desc':   'Exquisite fried rice with vegetables and your choice of protein (chicken, beef or shrimp).',
      'menu.r5.name':   'Gohan Especial',
      'menu.r5.desc':   'Steamed rice with your choice of protein (chicken, beef or shrimp), tampico, avocado and philadelphia on top.',

      /* Sushi — subtitles */
      'menu.su.sub1':   'Natural Rolls',
      'menu.su.sub2':   'Breaded Rolls',
      'menu.su.sub3':   'Special Rolls',
      'menu.su.sub4':   'Baked Rolls',

      /* Sushi — Natural Rolls */
      'menu.sn1.name':  'California Roll',
      'menu.sn1.desc':  'Shrimp, avocado, cucumber and philadelphia.',
      'menu.sn2.name':  'California Special',
      'menu.sn2.desc':  'Masago outside, shrimp, avocado, cucumber and philadelphia inside.',
      'menu.sn3.name':  'Avocado Maki',
      'menu.sn3.desc':  'Avocado outside, shrimp, cucumber and philadelphia inside.',
      'menu.sn4.name':  'Philadelphia Roll',
      'menu.sn4.desc':  'Philadelphia outside, shrimp, avocado, cucumber and philadelphia inside.',
      'menu.sn5.name':  'Yú Maki',
      'menu.sn5.desc':  'Seaweed outside, maki paste, avocado, cucumber and philadelphia inside.',
      'menu.sn6.name':  'Beach Roll',
      'menu.sn6.desc':  'Masago outside, shrimp, tuna, avocado, cucumber and philadelphia inside, drizzled with eel sauce and sesame.',
      'menu.sn7.name':  'Ninja Roll',
      'menu.sn7.desc':  'Fresh roll wrapped in cucumber leaf, with kanikama, masago, avocado and philadelphia inside.',
      'menu.sn8.name':  'Eby Roll',
      'menu.sn8.desc':  'Shrimp outside, tampico, avocado, cucumber and philadelphia inside.',
      'menu.sn9.name':  'Sakura Roll',
      'menu.sn9.desc':  'Kanikama outside, salmon, avocado and philadelphia inside.',
      'menu.sn10.name': 'Bandera Roll',
      'menu.sn10.desc': 'Salmon, avocado and philadelphia outside, shrimp, maki, cucumber and philadelphia inside.',
      'menu.sn11.name': 'Gusano Roll',
      'menu.sn11.desc': 'Maki paste outside, breaded shrimp, kanikama, cucumber and philadelphia inside, topped with thin avocado slices, eel sauce and sesame.',
      'menu.sn12.name': 'Mango Roll',
      'menu.sn12.desc': 'Delicious roll wrapped in mango, with tempura shrimp, spicy kanikama, avocado, cucumber and philadelphia inside, topped with a light spicy touch, eel sauce and sesame.',
      'menu.sn13.name': 'Shake Roll',
      'menu.sn13.desc': 'Fresh roll wrapped in salmon, with shrimp, avocado, cucumber and philadelphia inside.',
      'menu.sn14.name': 'Rainbow Roll',
      'menu.sn14.desc': 'Delicious roll wrapped in salmon, tuna, masago and avocado, with smoked eel, maki, cucumber and philadelphia inside, drizzled with eel sauce and sesame.',

      /* Sushi — Breaded Rolls */
      'menu.se1.name':  'Tempura Special',
      'menu.se1.desc':  'Shrimp, avocado and philadelphia inside; with tampico topping.',
      'menu.se2.name':  'Surf & Turf',
      'menu.se2.desc':  'Shrimp, beef, avocado and philadelphia.',
      'menu.se3.name':  'Favorito Special',
      'menu.se3.desc':  'Crab, avocado and philadelphia inside, topped with maki paste, thin avocado slices, drizzled with eel sauce and sesame.',
      'menu.se4.name':  'Tres Quesos',
      'menu.se4.desc':  'Philadelphia, manchego and yellow cheese outside, shrimp, avocado and philadelphia inside.',
      'menu.se5.name':  'Camarón Blue',
      'menu.se5.desc':  'Manchego cheese outside, shrimp, bacon, avocado and philadelphia inside.',
      'menu.se6.name':  'Cordón Blue',
      'menu.se6.desc':  'Manchego cheese outside, chicken, bacon, avocado and philadelphia inside.',

      /* Sushi — Special Rolls */
      'menu.sp1.name':  'Dai Roll',
      'menu.sp1.desc':  'Fresh roll wrapped in soy seaweed, with tuna, mango, masago, cucumber and avocado inside.',
      'menu.sp2.name':  'Akira Roll',
      'menu.sp2.desc':  'Exquisite roll wrapped in soy seaweed, with tuna, salmon, spicy kanikama and avocado inside.',
      'menu.sp3.name':  'Osaka Roll',
      'menu.sp3.desc':  'Fresh roll wrapped in tuna, with salmon, masago, avocado and cucumber inside.',
      'menu.sp4.name':  'Spicy Crab',
      'menu.sp4.desc':  'Crab, avocado, cucumber and philadelphia inside, with spicy crab topping.',
      'menu.sp5.name':  'Spicy Shrimp',
      'menu.sp5.desc':  'Shrimp, avocado, cucumber and philadelphia inside, with spicy shrimp topping.',
      'menu.sp6.name':  'Spicy Scallop',
      'menu.sp6.desc':  'Shrimp, avocado, cucumber and philadelphia inside, with spicy scallop topping.',
      'menu.sp7.name':  'Spicy Octopus',
      'menu.sp7.desc':  'Octopus, avocado, cucumber and philadelphia inside, with spicy octopus topping.',
      'menu.sp8.name':  'Spicy Tuna',
      'menu.sp8.desc':  'Tuna, avocado, cucumber and philadelphia inside, with spicy tuna topping.',
      'menu.sp9.name':  'Spicy Salmon',
      'menu.sp9.desc':  'Salmon, avocado, cucumber and philadelphia inside, with spicy salmon topping.',
      'menu.sp10.name': 'Spicy Squid',
      'menu.sp10.desc': 'Crab, avocado, cucumber and philadelphia inside, with spicy squid topping.',
      'menu.sp11.name': 'Avocado Special',
      'menu.sp11.desc': 'Exquisite roll wrapped in thin avocado slices, with shrimp, cucumber and philadelphia inside, topped with spicy crab, breaded shrimp, eel sauce and sesame.',
      'menu.sp12.name': 'Tunita Special (no rice)',
      'menu.sp12.desc': 'Exquisite roll wrapped in tuna and thin avocado slices, with tempura shrimp, spicy kanikama, maki paste and philadelphia inside, with a light touch of dressing and cilantro.',
      'menu.sp13.name': 'Camarón Rico',
      'menu.sp13.desc': 'Four shrimp wrapped in marine seaweed and tempura, filled with spicy shrimp and crab.',
      'menu.sp14.name': 'Power Roll',
      'menu.sp14.desc': 'Delicious roll wrapped in salmon, with shrimp, avocado, cucumber and philadelphia inside, topped with spicy tempura shrimp.',
      'menu.sp15.name': 'Special Roll',
      'menu.sp15.desc': 'Exquisite roll wrapped in avocado and masago, with shrimp, cucumber and philadelphia inside, topped with spicy tempura shrimp.',
      'menu.sp16.name': 'Kento Roll',
      'menu.sp16.desc': 'Masago outside, breaded shrimp, maki paste, avocado, cucumber and philadelphia inside, with spicy shrimp and kanikama topping, drizzled with eel sauce and sesame.',
      'menu.sp17.name': 'Fitness Roll (no rice)',
      'menu.sp17.desc': 'Fresh roll wrapped in cucumber, tuna and kanikama, with maki, avocado and philadelphia inside, topped with spicy scallop and shrimp, drizzled with eel sauce and sesame.',
      'menu.sp18.name': 'No Name Roll (no rice)',
      'menu.sp18.desc': 'Fresh roll wrapped in tuna, with maki, scallop, shrimp, masago, avocado and philadelphia inside, drizzled with eel sauce and sesame.',
      'menu.sp19.name': 'Ryo Roll',
      'menu.sp19.desc': 'Roll wrapped in salmon, with avocado, cucumber and philadelphia inside, topped with spicy (scallop/shrimp/kanikama/tuna), breaded shrimp bits, eel sauce and sesame.',
      'menu.sp20.name': 'Yu Special',
      'menu.sp20.desc': 'Smoked eel and masago outside, shrimp, avocado, cucumber and philadelphia inside, drizzled with eel sauce and sesame.',
      'menu.sp21.name': 'Guamuchilito Roll',
      'menu.sp21.desc': 'Roll wrapped in shrimp and octopus, with crab, cucumber and philadelphia inside, topped with tampico, thin avocado slices, eel sauce and sesame.',
      'menu.sp22.name': 'Vallarta Roll',
      'menu.sp22.desc': 'Roll wrapped in shrimp, avocado and philadelphia, with breaded shrimp, cucumber and philadelphia inside, topped with spicy crab drizzled in eel sauce and sesame.',
      'menu.sp23.name': 'Baby Roll',
      'menu.sp23.desc': 'Roll wrapped in seaweed and tempura, with shrimp, avocado, cucumber and philadelphia inside, topped with spicy scallop, drizzled with eel sauce and sesame.',
      'menu.sp24.name': 'Hana Roll',
      'menu.sp24.desc': 'Wrapped in salmon and avocado, with cucumber, avocado and tempura shrimp inside, topped with spicy shrimp, kanikama, octopus and tuna.',

      /* Sushi — Baked Rolls */
      'menu.sh1.name':  'Salmoncito Hot',
      'menu.sh1.desc':  'Salmon outside, maki, shrimp, avocado and philadelphia inside, topped with spicy shrimp, drizzled with eel sauce and sesame.',
      'menu.sh2.name':  'Beluman',
      'menu.sh2.desc':  'Roll wrapped in salmon, with shrimp, maki, avocado and philadelphia inside, baked with spicy dressing, drizzled with eel sauce and sesame.',
      'menu.sh3.name':  'Banana',
      'menu.sh3.desc':  'Roll wrapped in plantain, with battered shrimp, maki, avocado and philadelphia inside, drizzled with eel sauce and sesame.',
      'menu.sh4.name':  'Nagano',
      'menu.sh4.desc':  'Roll wrapped in shrimp, with maki, avocado and philadelphia inside, topped with spicy (shrimp/kanikama/gouda cheese), drizzled with eel sauce and sesame.',
      'menu.sh5.name':  'Camarón Especial',
      'menu.sh5.desc':  'Roll wrapped in shrimp, with kanikama, avocado and philadelphia inside, baked with house dressing, drizzled with eel sauce and sesame.',
      'menu.sh6.name':  'Campechano Hot',
      'menu.sh6.desc':  'Roll wrapped in thin avocado slices, with shrimp, cucumber and philadelphia inside, topped with spicy shrimp, crab and smoked oyster, with a light spicy touch.',
      'menu.sh7.name':  'House Special',
      'menu.sh7.desc':  'Roll wrapped in crab paste, with shrimp, avocado and philadelphia inside, topped with spicy shrimp, drizzled with eel sauce and sesame.',
      'menu.sh8.name':  'Avocado Hot',
      'menu.sh8.desc':  'Roll wrapped in thin avocado slices, with shrimp, cucumber and philadelphia inside, topped with spicy octopus/shrimp with a light touch of eel sauce and sesame.',

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

      /* Table Wine */
      'menu.d.sub.wine': 'Table Wine (by the glass)',
      'menu.dw1.name':   'House Red',
      'menu.dw2.name':   'House White',

      /* New Non-Alcoholic */
      'menu.dna14.name': 'Mineral Orangeade',
      'menu.dna15.name': 'Jamaica (Hibiscus)',
      'menu.dna16.name': 'Refreshments 355 ml',

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
      'menu.dc1.desc':  'Mezcal, passion fruit, lemon.',
      'menu.dc2.name':  'Old Sapphire',
      'menu.dc2.desc':  'Gin, berries, lemon.',
      'menu.dc3.name':  'Paloma Tonic',
      'menu.dc3.desc':  'Tequila, strawberry, lemon and tonic water.',
      'menu.dc4.name':  'Mezcalina',
      'menu.dc4.desc':  'Mezcal, chamoy, worm salt, Jamaica or passion fruit.',
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

      /* Mission & Vision */
      'about.mv.tag':         'Mission & Vision',
      'about.mission.title':  'Mission',
      'about.mission.body':   'We create memories through unique and unforgettable experiences by blending flavors, freshness, and quality in dishes crafted with love, to make our guests happy.',
      'about.vision.title':   'Vision',
      'about.vision.body':    'We are a company that conquers new markets with our unique concept, being leaders through our blend of flavors, accompanied by our family and successful collaborators who live the values of El Palmar.',

      /* Values */
      'about.values.tag':  'Our Values',
      'about.v1.title':    'Respect',
      'about.v1.quote':    '"Respect is lived"',
      'about.v1.body':     'I value and care for my workplace, my colleagues and guests, providing them with a kind and empathetic treatment — treating others as I would like to be treated.',
      'about.v2.title':    'Commitment',
      'about.v2.quote':    '"I always keep my word"',
      'about.v2.body':     'We believe in what we do, we work together toward our goals, acting with a sense of belonging and caring for the well-being of the company.',
      'about.v3.title':    'Integrity',
      'about.v3.quote':    '"I do what is right"',
      'about.v3.body':     'I act with honesty, kindness, and doing what is right at all times, making decisions for the good of ourselves and our surroundings.',
      'about.v4.title':    'Kindness',
      'about.v4.quote':    '"You can always choose — choose a positive attitude"',
      'about.v4.body':     'We provide kind attention to our guests, always with enthusiasm and a smile, so that they take home a wonderful experience from their visit.',
      'about.v5.title':    'Leadership',
      'about.v5.quote':    '"I lead by example"',
      'about.v5.body':     'We are a source of inspiration, positively and directly influencing our team, as well as their growth, through the passion and energy we put into everything we do.',

      /* Reserve */
      'reserve.tag':        'Reservations',
      'reserve.title':      'Reserve your table',
      'reserve.subtitle':   'Tell us when you\'re coming and we\'ll take care of the rest.',
      'reserve.f.name':     'Name',
      'reserve.f.phone':    'WhatsApp',
      'reserve.f.guests':   'Guests',
      'reserve.f.date':     'Date',
      'reserve.f.time':     'Time',
      'reserve.f.notes':    'Additional notes',
      'reserve.optional':   '(optional)',
      'reserve.ph.name':    'Your full name',
      'reserve.ph.phone':   '669 100 0000',
      'reserve.ph.guests':  'Number of guests',
      'reserve.ph.notes':   'Allergies, special occasion, seating preferences...',
      'reserve.opt.11':     '11 – 15 guests',
      'reserve.opt.16':     '16 – 20 guests',
      'reserve.opt.20':     'More than 20',
      'reserve.err.name':   'Please enter your name.',
      'reserve.err.phone':  'Please enter your WhatsApp number.',
      'reserve.err.guests': 'Please select the number of guests.',
      'reserve.err.date':   'Please select a date.',
      'reserve.err.time':   'Please select a time (12:00 pm – 10:00 pm).',
      'reserve.submit':     'Reserve via WhatsApp',
      'reserve.call':       'Call the restaurant',
      'reserve.nav':        'Reserve',

      /* Destacados */
      'dest.tag':      'Our Flavors',
      'dest.title':    'From the sea',
      'dest.title2':   'to your table',
      'dest.sub':      'Swipe through each gallery and discover the flavors that make El Palmar an unforgettable place.',
      'dest.cat1':     'Let\'s Get Started',
      'dest.cat2':     'Ceviches, Aguachiles & Tostadas',
      'dest.cat3':     'Tacos & Hot Dishes',
      'dest.cat4':     'Sushi Starters & Rice',
      'dest.cat5':     'Rolls',
      'dest.cat6':     'Cocktails',
      'dest.s1.label':  'To Start',
      'dest.s1.title':  'This is how',
      'dest.s1.title2': 'the experience begins',
      'dest.s1.body':   'Fresh, generous, with the unmistakable mark of the Pacific. Everything you need to open your appetite.',
      'dest.s2.label':  'Raw Sea',
      'dest.s2.title':  'Freshness that',
      'dest.s2.title2': 'needs no apology',
      'dest.s2.body':   'Each ceviche, a dialogue between the ocean and Sinaloan tradition. No tricks — just the day\'s finest catch.',
      'dest.s3.label':  'Fire & Tradition',
      'dest.s3.title':  'From tacos to zarán,',
      'dest.s3.title2': 'the Pacific in flames',
      'dest.s3.body':   'Sinaloan tacos and hot dishes — two worlds that share the same fire at El Palmar.',
      'dest.s4.label':  'Japanese Precision',
      'dest.s4.title':  'Where Sinaloa',
      'dest.s4.title2': 'meets Japan',
      'dest.s4.body':   'Kushiage, nigiris, yakimeshi. Technique and product proving that fusion is not a trend — it\'s destiny.',
      'dest.s5.label':  'Creativity Unleashed',
      'dest.s5.title':  'Rolls that',
      'dest.s5.title2': 'stay with you',
      'dest.s5.body':   'Eleven rolls, eleven stories. Each with its own character, all with the same promise: to surprise you.',
      'dest.s6.label':  'The Full Experience',
      'dest.s6.title':  'The perfect afternoon',
      'dest.s6.title2': 'has a flavor',
      'dest.s6.body':   'Come discover it. A table, a cocktail, and the full menu waiting for you by the Pacific.',
      'dest.cta1':     'See the full menu',
      'dest.cta2':     'Reserve a table',
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
