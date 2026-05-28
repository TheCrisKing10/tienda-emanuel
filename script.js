/// LISTA DE PRECIOS FINALIZADO EL 12/SEPTIEMBRE/2025

// Definición de productos SIN ID (se asignan después)
let products = [
    // ======================
    // 🚬 CATEGORÍA: CIGARROS
    // ======================
    { name: "Benson Crystal Violet 20's", price: 89.96, piecesPerPackage: 10, image: "(cigarros) benson crystal violet.webp", calcType: "multiply", unitLabel: "paquete", category: "Cigarros" },

    { name: "Camel Yellow 20's", price: 94.76, piecesPerPackage: 10, image: "(cigarros) camel yellow.webp", calcType: "multiply", unitLabel: "paquete", category: "Cigarros" },

    { name: "Link Azul 20's", price: 44.00, piecesPerPackage: 10, image: "(cigarros) link azul.webp", calcType: "multiply", unitLabel: "paquete", category: "Cigarros" },
    { name: "Link Negro 20's", price: 42.00, piecesPerPackage: 10, image: "(cigarros) link negro.webp", calcType: "multiply", unitLabel: "paquete", category: "Cigarros" },
    { name: "Link Rojo 20's", price: 42.00, piecesPerPackage: 10, image: "(cigarros) link rojo.webp", calcType: "multiply", unitLabel: "paquete", category: "Cigarros" },
    { name: "Link Rojo 100 20's", price: 42.00, piecesPerPackage: 10, image: "(cigarros) link rojo.webp", calcType: "multiply", unitLabel: "paquete", category: "Cigarros" },
    
    { name: "Marlboro Rojo 20's", price: 95.00, piecesPerPackage: 10, image: "(cigarros) marlboro rojo.webp", calcType: "multiply", unitLabel: "paquete", category: "Cigarros" },
    { name: "Marlboro Chester 25's", price: 82.08, piecesPerPackage: 8, image: "(cigarros) marlboro chesterfield.webp", calcType: "multiply", unitLabel: "paquete", category: "Cigarros" },
    { name: "Marlboro Mentolado 20's", price: 94.25, piecesPerPackage: 10, image: "(cigarros) marlboro mentolado.webp", calcType: "multiply", unitLabel: "paquete", category: "Cigarros" },
    { name: "Marlboro Clavo 20's", price: 99.01, piecesPerPackage: 10, image: "(cigarros) marlboro clavo.webp", calcType: "multiply", unitLabel: "paquete", category: "Cigarros" },
    { name: "Marlboro Chicle 20's", price: 84.48, piecesPerPackage: 10, image: "(cigarros) marlboro chicle.webp", calcType: "multiply", unitLabel: "paquete", category: "Cigarros" },
    { name: "Marlboro Guayaba 20's", price: 84.48, piecesPerPackage: 10, image: "(cigarros) marlboro guayaba.webp", calcType: "multiply", unitLabel: "paquete", category: "Cigarros" },
    { name: "Marlboro Sandía 20's", price: 84.48, piecesPerPackage: 10, image: "(cigarros) marlboro sandia.webp", calcType: "multiply", unitLabel: "paquete", category: "Cigarros" },
    { name: "Marlboro Durazno 20's", price: 94.25, piecesPerPackage: 10, image: "(cigarros) marlboro durazno.webp", calcType: "multiply", unitLabel: "paquete", category: "Cigarros" },
    { name: "Marlboro Ruby 20's", price: 94.25, piecesPerPackage: 10, image: "(cigarros) marlboro ruby.webp", calcType: "multiply", unitLabel: "paquete", category: "Cigarros" },
    
    { name: "Pall Mall Alaska 20's", price: 90.90, piecesPerPackage: 10, image: "(cigarros) pall mall alaska.webp", calcType: "multiply", unitLabel: "paquete", category: "Cigarros" },
    { name: "Pall Mall Pepino 20's", price: 90.90, piecesPerPackage: 10, image: "(cigarros) pall mall pepino.webp", calcType: "multiply", unitLabel: "paquete", category: "Cigarros" },
    { name: "Pall Mall Cereza 20's", price: 90.90, piecesPerPackage: 10, image: "(cigarros) pall mall cereza.webp", calcType: "multiply", unitLabel: "paquete", category: "Cigarros" },
    { name: "Pall Mall Manzana 20's", price: 90.90, piecesPerPackage: 10, image: "(cigarros) pall mall manzana.webp", calcType: "multiply", unitLabel: "paquete", category: "Cigarros" },
    { name: "Pall Mall Platano 20's", price: 90.90, piecesPerPackage: 10, image: "(cigarros) pall mall platano.webp", calcType: "multiply", unitLabel: "paquete", category: "Cigarros" },
    { name: "Pall Mall Mango 20's", price: 90.90, piecesPerPackage: 10, image: "(cigarros) pall mall mango.webp", calcType: "multiply", unitLabel: "paquete", category: "Cigarros" },
    { name: "Pall Mall Iceland 20's", price: 69.12, piecesPerPackage: 10, image: "(cigarros) pall mall iceland.webp", calcType: "multiply", unitLabel: "paquete", category: "Cigarros" },
    
    { name: "Shots 14's", price: 44.09, piecesPerPackage: 10, image: "(cigarros) shots 14.webp", calcType: "multiply", unitLabel: "paquete", category: "Cigarros" },
    { name: "Shots 20's", price: 61.75, piecesPerPackage: 10, image: "(cigarros) shots 20.webp", calcType: "multiply", unitLabel: "paquete", category: "Cigarros" },
    { name: "Shots 25's", price: 69.70, piecesPerPackage: 8, image: "(cigarros) shots 25.webp", calcType: "multiply", unitLabel: "paquete", category: "Cigarros" },
    
    { name: "Encendedor Tokai", price: 130.00, piecesPerPackage: 1, image: "(cigarros) tokai.webp", calcType: "multiply", unitLabel: "paquete", category: "Cigarros" },

    // ========================
    // 🥤 CATEGORÍA: COCA-COLA
    // ========================
    { name: "Coca-Cola 3L Ret (6 pack)", price: 178.00, piecesPerPackage: 6, image: "(coca-cola) coca-cola 3l ret.webp", calcType: "divide", unitLabel: "pieza", category: "Coca-Cola" },
    { name: "Coca-Cola 1.25L Ret (8 pack)", price: 160.00, piecesPerPackage: 8, image: "(coca-cola) coca-cola 1.25l ret.webp", calcType: "divide", unitLabel: "pieza", category: "Coca-Cola" },
    { name: "Coca-Cola 500ml Ret (24 pack)", price: 339.00, piecesPerPackage: 24, image: "(coca-cola) coca-cola 500ml.webp", calcType: "divide", unitLabel: "pieza", category: "Coca-Cola" },
    
    { name: "Coca-Cola 3L (4 pack)", price: 156.00, piecesPerPackage: 4, image: "(coca-cola) coca-cola 3l.webp", calcType: "divide", unitLabel: "pieza", category: "Coca-Cola" },
    { name: "Coca-Cola 1.75L (4 pack)", price: 123.00, piecesPerPackage: 4, image: "(coca-cola) coca-cola 1.75l.webp", calcType: "divide", unitLabel: "pieza", category: "Coca-Cola" },
    { name: "Coca-Cola 1.35L (6 pack)", price: 158.01, piecesPerPackage: 6, image: "(coca-cola) coca-cola 1.35l.webp", calcType: "divide", unitLabel: "pieza", category: "Coca-Cola" },
    { name: "Coca-Cola 600ml (24 pack)", price: 467.00, piecesPerPackage: 24, image: "(coca-cola) coca-cola 600ml.webp", calcType: "divide", unitLabel: "pieza", category: "Coca-Cola" },
    { name: "Coca-Cola 400ml (12 pack)", price: 170.00, piecesPerPackage: 12, image: "(coca-cola) coca-cola 400ml.webp", calcType: "divide", unitLabel: "pieza", category: "Coca-Cola" },
    { name: "Coca-Cola 355ml Choby (12 pack)", price: 138.00, piecesPerPackage: 12, image: "(coca-cola) coca-cola 355ml choby.webp", calcType: "divide", unitLabel: "pieza", category: "Coca-Cola" },
    { name: "Coca-Cola 355ml Lata (12 pack)", price: 233.00, piecesPerPackage: 12, image: "(coca-cola) coca-cola 355ml lata.webp", calcType: "divide", unitLabel: "pieza", category: "Coca-Cola" },
    { name: "Coca-Cola 3L Zero (4 pack)", price: 140.00, piecesPerPackage: 4, image: "(coca-cola) coca-cola 3l zero.webp", calcType: "divide", unitLabel: "pieza", category: "Coca-Cola" },
    { name: "Coca-Cola 600ml Zero (12 pack)", price: 189.00, piecesPerPackage: 12, image: "(coca-cola) coca-cola 600ml zero.webp", calcType: "divide", unitLabel: "pieza", category: "Coca-Cola" },
    { name: "Coca-Cola 355ml Zero Choby (12 pack)", price: 84.00, piecesPerPackage: 12, image: "(coca-cola) coca-cola 355ml choby zero.webp", calcType: "divide", unitLabel: "pieza", category: "Coca-Cola" },
    { name: "Del Valle Fizz Naranjada 600ml (6 pack)", price: 100.01, piecesPerPackage: 6, image: "(coca-cola) del valle fizz naranjada 600ml.webp", calcType: "divide", unitLabel: "pieza", category: "Coca-Cola" },
    { name: "Fizz Mezcla 235ml Lata (12 pack)", price: 80.00, piecesPerPackage: 12, image: "(coca-cola) fizz mezcla.webp", calcType: "divide", unitLabel: "pieza", category: "Coca-Cola" },
    { name: "Topo Chico 600ml (6 pack)", price: 110.00, piecesPerPackage: 6, image: "(coca-cola) topo chico 600ml.webp", calcType: "divide", unitLabel: "pieza", category: "Coca-Cola" },
    { name: "Néctar Del Valle Durazno 1L (6 pack)", price: 147.00, piecesPerPackage: 6, image: "(coca-cola) nectar del valle durazno 1l.webp", calcType: "divide", unitLabel: "pieza", category: "Coca-Cola" },
    { name: "Néctar Del Valle Mango 1L (6 pack)", price: 147.00, piecesPerPackage: 6, image: "(coca-cola) nectar del valle mango 1l.webp", calcType: "divide", unitLabel: "pieza", category: "Coca-Cola" },
    { name: "Néctar Del Valle Durazno 413ml (6 pack)", price: 105.00, piecesPerPackage: 6, image: "(coca-cola) nectar del valle durazno 413ml.webp", calcType: "divide", unitLabel: "pieza", category: "Coca-Cola" },
    { name: "Néctar Del Valle Mango 413ml (6 pack)", price: 105.00, piecesPerPackage: 6, image: "(coca-cola) nectar del valle mango 413ml.webp", calcType: "divide", unitLabel: "pieza", category: "Coca-Cola" },
    
    { name: "Delaware Punch 3L (4 pack)", price: 140.00, piecesPerPackage: 4, image: "(coca-cola) delaware 3l.webp", calcType: "divide", unitLabel: "pieza", category: "Coca-Cola" },
    { name: "Fanta 3L (4 pack)", price: 140.00, piecesPerPackage: 4, image: "(coca-cola) fanta 3l.webp", calcType: "divide", unitLabel: "pieza", category: "Coca-Cola" },
    { name: "Fresca 3L (4 pack)", price: 140.00, piecesPerPackage: 4, image: "(coca-cola) fresca 3l.webp", calcType: "divide", unitLabel: "pieza", category: "Coca-Cola" },
    { name: "Sidral Mundet 3L (4 pack)", price: 140.00, piecesPerPackage: 4, image: "(coca-cola) sidral mundet 3l.webp", calcType: "divide", unitLabel: "pieza", category: "Coca-Cola" },
    { name: "Sprite 3L (4 pack)", price: 140.00, piecesPerPackage: 4, image: "(coca-cola) sprite 3l.webp", calcType: "divide", unitLabel: "pieza", category: "Coca-Cola" },
    { name: "Valle Frut 3L (4 pack)", price: 140.00, piecesPerPackage: 4, image: "(coca-cola) valle frut 3l.webp", calcType: "divide", unitLabel: "pieza", category: "Coca-Cola" },

    { name: "Delaware Punch 2L (4 pack)", price: 98.00, piecesPerPackage: 4, image: "(coca-cola) delaware 2l.webp", calcType: "divide", unitLabel: "pieza", category: "Coca-Cola" },
    { name: "Fanta 2L (4 pack)", price: 98.00, piecesPerPackage: 4, image: "(coca-cola) fanta 2l.webp", calcType: "divide", unitLabel: "pieza", category: "Coca-Cola" },
    { name: "Fresca 2L (4 pack)", price: 98.00, piecesPerPackage: 4, image: "(coca-cola) fresca 2l.webp", calcType: "divide", unitLabel: "pieza", category: "Coca-Cola" },
    { name: "Fresca 2L Fusion (4 pack)", price: 98.00, piecesPerPackage: 4, image: "(coca-cola) fresca fusion 2l.webp", calcType: "divide", unitLabel: "pieza", category: "Coca-Cola" },
    { name: "Sidral Mundet 2L (4 pack)", price: 98.00, piecesPerPackage: 4, image: "(coca-cola) sidral mundet 2l.webp", calcType: "divide", unitLabel: "pieza", category: "Coca-Cola" },
    { name: "Mundet Ameyal 2L (4 pack)", price: 83.00, piecesPerPackage: 4, image: "(coca-cola) sidral ameyal 2l.webp", calcType: "divide", unitLabel: "pieza", category: "Coca-Cola" },
    { name: "Mundet Manzana Durazno 2L (4 pack)", price: 83.00, piecesPerPackage: 4, image: "(coca-cola) sidral manzana durazno 2l.webp", calcType: "divide", unitLabel: "pieza", category: "Coca-Cola" },
    { name: "Sprite 2L (4 pack)", price: 98.00, piecesPerPackage: 4, image: "(coca-cola) sprite 2l.webp", calcType: "divide", unitLabel: "pieza", category: "Coca-Cola" },
    { name: "Valle Frut 2L (8 pack)", price: 196.00, piecesPerPackage: 4, image: "(coca-cola) valle frut 2l.webp", calcType: "divide", unitLabel: "pieza", category: "Coca-Cola" },
    
    { name: "Delaware Punch 600ml (12 pack)", price: 210.00, piecesPerPackage: 12, image: "(coca-cola) delaware 600ml.webp", calcType: "divide", unitLabel: "pieza", category: "Coca-Cola" },
    { name: "Fanta 600m ml (12 pack)", price: 211.00, piecesPerPackage: 12, image: "(coca-cola) fanta 600ml.webp", calcType: "divide", unitLabel: "pieza", category: "Coca-Cola" },
    { name: "Fresca 600ml (12 pack)", price: 211.00, piecesPerPackage: 12, image: "(coca-cola) fresca 600ml.webp", calcType: "divide", unitLabel: "pieza", category: "Coca-Cola" },
    { name: "Sidral Mundet 600ml (12 pack)", price: 211.00, piecesPerPackage: 12, image: "(coca-cola) sidral mundet 600ml.webp", calcType: "divide", unitLabel: "pieza", category: "Coca-Cola" },
    { name: "Sprite 600ml (12 pack)", price: 211.00, piecesPerPackage: 12, image: "(coca-cola) sprite 600ml.webp", calcType: "divide", unitLabel: "pieza", category: "Coca-Cola" },
    { name: "Valle Frut 600ml (12 pack)", price: 210.00, piecesPerPackage: 12, image: "(coca-cola) valle frut 600ml.webp", calcType: "divide", unitLabel: "pieza", category: "Coca-Cola" },
    { name: "Mezcladito Sabores (12 pack)", price: 210.00, piecesPerPackage: 12, image: "(coca-cola) mezcladito sabores 600ml.webp", calcType: "divide", unitLabel: "pieza", category: "Coca-Cola" },
    
    { name: "Powerade Moras 1L (6 pack)", price: 170.00, piecesPerPackage: 6, image: "(coca-cola) powerade moras 1l.webp", calcType: "divide", unitLabel: "pieza", category: "Coca-Cola" },
    { name: "Powerade Naranja 1L (6 pack)", price: 170.00, piecesPerPackage: 6, image: "(coca-cola) powerade naranja 1l.webp", calcType: "divide", unitLabel: "pieza", category: "Coca-Cola" },
    { name: "Powerade Ponche 1L (6 pack)", price: 170.00, piecesPerPackage: 6, image: "(coca-cola) powerade ponche 1l.webp", calcType: "divide", unitLabel: "pieza", category: "Coca-Cola" },
    { name: "Powerade Uva 1L (6 pack)", price: 170.00, piecesPerPackage: 6, image: "(coca-cola) powerade uva 1l.webp", calcType: "divide", unitLabel: "pieza", category: "Coca-Cola" },
    
    { name: "Monster Green 473ml (4 pack)", price: 127.00, piecesPerPackage: 4, image: "(coca-cola) monster green 473ml.webp", calcType: "divide", unitLabel: "pieza", category: "Coca-Cola" },
    { name: "Monster White 473ml (4 pack)", price: 127.00, piecesPerPackage: 4, image: "(coca-cola) monster white 473ml.webp", calcType: "divide", unitLabel: "pieza", category: "Coca-Cola" },
    
    { name: "Predator Gold 473ml (6 pack)", price: 110.00, piecesPerPackage: 6, image: "(coca-cola) predator gold 473ml.webp", calcType: "divide", unitLabel: "pieza", category: "Coca-Cola" },
    { name: "Predator Purple 473ml (6 pack)", price: 110.00, piecesPerPackage: 6, image: "(coca-cola) predator purple 473ml.webp", calcType: "divide", unitLabel: "pieza", category: "Coca-Cola" },
    { name: "Predator Red 473ml (6 pack)", price: 110.00, piecesPerPackage: 6, image: "(coca-cola) predator red 473ml.webp", calcType: "divide", unitLabel: "pieza", category: "Coca-Cola" },
    { name: "Predator Blue 473ml (6 pack)", price: 110.00, piecesPerPackage: 6, image: "(coca-cola) predator blue 473ml.webp", calcType: "divide", unitLabel: "pieza", category: "Coca-Cola" },

    { name: "Agua Ciel 10L (1 pack)", price: 34.00, piecesPerPackage: 1, image: "(coca-cola) agua ciel 10l.webp", calcType: "divide", unitLabel: "pieza", category: "Coca-Cola" },
    
    { name: "Santa Clara Entera 1L (6 pack)", price: 169.00, piecesPerPackage: 6, image: "(coca-cola) santa clara entera 1l.webp", calcType: "divide", unitLabel: "pieza", category: "Coca-Cola" },
    { name: "Santa Clara Deslactosada 1L (6 pack)", price: 174.00, piecesPerPackage: 6, image: "(coca-cola) santa clara deslactosada 1l.webp", calcType: "divide", unitLabel: "pieza", category: "Coca-Cola" },
    { name: "Santa Clara Fresa 180ml (4 pack)", price: 47.00, piecesPerPackage: 4, image: "(coca-cola) santa clara fresa 180ml.webp", calcType: "divide", unitLabel: "pieza", category: "Coca-Cola" },
    { name: "Santa Clara Vainilla 180ml (4 pack)", price: 47.00, piecesPerPackage: 4, image: "(coca-cola) santa clara vainilla 180ml.webp", calcType: "divide", unitLabel: "pieza", category: "Coca-Cola" },
    { name: "Santa Clara Chocolate 180ml (4 pack)", price: 47.00, piecesPerPackage: 4, image: "(coca-cola) santa clara chocolate 180ml.webp", calcType: "divide", unitLabel: "pieza", category: "Coca-Cola" },
    { name: "Santa Clara Capuccino 180ml (4 pack)", price: 47.00, piecesPerPackage: 4, image: "(coca-cola) santa clara capuccino 180ml.webp", calcType: "divide", unitLabel: "pieza", category: "Coca-Cola" },
    
    { name: "Tubi-Papa Original (10 pack)", price: 160.50, piecesPerPackage: 10, image: "(coca-cola) papa sol original.webp", calcType: "divide", unitLabel: "pieza", category: "Coca-Cola" },
    { name: "Tubi-Papa Enchilado (10 pack)", price: 166.50, piecesPerPackage: 10, image: "(coca-cola) papa sol enchilado.webp", calcType: "divide", unitLabel: "pieza", category: "Coca-Cola" },
    { name: "Tubi-Papa No Enchilado (10 pack)", price: 166.50, piecesPerPackage: 10, image: "(coca-cola) papa sol no enchilado.webp", calcType: "divide", unitLabel: "pieza", category: "Coca-Cola" },

    // ========================
    // 🥤 CATEGORÍA: JARRITOS
    // ========================
    { name: "Red Cola 3L (8 pack)", price: 249.00, piecesPerPackage: 8, image: "(jarritos) red cola 3l.webp", calcType: "divide", unitLabel: "pieza", category: "Jarritos" },
    { name: "Red Cola 2L (8 pack)", price: 187.00, piecesPerPackage: 8, image: "(jarritos) red cola 2l.webp", calcType: "divide", unitLabel: "pieza", category: "Jarritos" },
    { name: "Red Cola 600ml (24 pack)", price: 324.00, piecesPerPackage: 24, image: "(jarritos) red cola 600ml.webp", calcType: "divide", unitLabel: "pieza", category: "Jarritos" },

    { name: "Jarritos 2L Limón (8 pack)", price: 179.00, piecesPerPackage: 8, image: "(jarritos) jarritos limon 2l.webp", calcType: "divide", unitLabel: "pieza", category: "Jarritos" },
    { name: "Jarritos 2L Mandarina (8 pack)", price: 179.00, piecesPerPackage: 8, image: "(jarritos) jarritos mandarina 2l.webp", calcType: "divide", unitLabel: "pieza", category: "Jarritos" },
    { name: "Jarritos 2L Manzana (8 pack)", price: 179.00, piecesPerPackage: 8, image: "(jarritos) jarritos manzana 2l.webp", calcType: "divide", unitLabel: "pieza", category: "Jarritos" },
    { name: "Jarritos 2L Piña (8 pack)", price: 179.00, piecesPerPackage: 8, image: "(jarritos) jarritos piña 2l.webp", calcType: "divide", unitLabel: "pieza", category: "Jarritos" },
    { name: "Jarritos 2L Tamarindo (8 pack)", price: 179.00, piecesPerPackage: 8, image: "(jarritos) jarritos tamarindo 2l.webp", calcType: "divide", unitLabel: "pieza", category: "Jarritos" },
    { name: "Jarritos 2L Toronja (8 pack)", price: 179.00, piecesPerPackage: 8, image: "(jarritos) jarritos toronja 2l.webp", calcType: "divide", unitLabel: "pieza", category: "Jarritos" },
    { name: "Jarritos 2L Tutifruti (8 pack)", price: 179.00, piecesPerPackage: 8, image: "(jarritos) jarritos tutifruti 2l.webp", calcType: "divide", unitLabel: "pieza", category: "Jarritos" },
    { name: "Jarritos 2L Uva (8 pack)", price: 179.00, piecesPerPackage: 8, image: "(jarritos) jarritos uva 2l.webp", calcType: "divide", unitLabel: "pieza", category: "Jarritos" },
    { name: "Jarritos 600ml Surtido (24 pack)", price: 304.00, piecesPerPackage: 24, image: "", calcType: "divide", unitLabel: "pieza", category: "Jarritos" },

    { name: "Mineralita 2L (8 pack)", price: 108.00, piecesPerPackage: 8, image: "(jarritos) mineralita 2l.webp", calcType: "divide", unitLabel: "pieza", category: "Jarritos" },
    { name: "Mineralita 600ml (24 pack)", price: 212.00, piecesPerPackage: 24, image: "(jarritos) mineralita 600ml.webp", calcType: "divide", unitLabel: "pieza", category: "Jarritos" },

    { name: "Skarch 10L (3 pack)", price: 92.00, piecesPerPackage: 3, image: "(jarritos) skarch 10l.webp", calcType: "divide", unitLabel: "pieza", category: "Jarritos" },
    { name: "Skarch Sabor 1.5L (12 pack)", price: 134.00, piecesPerPackage: 12, image: "(jarritos) skarch sabores 1.5l.webp", calcType: "divide", unitLabel: "pieza", category: "Jarritos" },
    { name: "Skarch Natural 1.5L (12 pack)", price: 122.00, piecesPerPackage: 12, image: "(jarritos) skarch 1.5l.webp", calcType: "divide", unitLabel: "pieza", category: "Jarritos" },
    { name: "Skarch Natural 1L (12 pack)", price: 120.00, piecesPerPackage: 12, image: "(jarritos) skarch 1l.webp", calcType: "divide", unitLabel: "pieza", category: "Jarritos" },
    { name: "Skarch Natural 600ml (24 pack)", price: 170.00, piecesPerPackage: 24, image: "(jarritos) skarch 600ml.webp", calcType: "divide", unitLabel: "pieza", category: "Jarritos" },
    { name: "Skarch Natural 330ml (24 pack)", price: 85.00, piecesPerPackage: 24, image: "(jarritos) skarch 330ml.webp", calcType: "divide", unitLabel: "pieza", category: "Jarritos" },
    
    { name: "Leche Sabrolé 900ml (6 pack)", price: 84.50, piecesPerPackage: 6, image: "(jarritos) leche sabrolé 900ml.webp", calcType: "divide", unitLabel: "pieza", category: "Jarritos" },
    { name: "Leche Sabrolé 900ml (6 pack)", price: 85.00, piecesPerPackage: 6, image: "(jarritos) leche sabrolé 900ml.webp", calcType: "divide", unitLabel: "pieza", category: "Jarritos" },

    // ========================
    // 🥤 CATEGORÍA: SABRITAS
    // ========================

    { name: "Sabritas Original", price: 17.12, piecesPerPackage: 0, image: "", calcType: "divide", unitLabel: "pieza", category: "Sabritas" },
    { name: "Sabritas Limón", price: 17.12, piecesPerPackage: 0, image: "", calcType: "divide", unitLabel: "pieza", category: "Sabritas" },
    { name: "Sabritas Adobadas", price: 17.12, piecesPerPackage: 0, image: "", calcType: "divide", unitLabel: "pieza", category: "Sabritas" },
    { name: "Sabritas Habanero", price: 17.12, piecesPerPackage: 0, image: "", calcType: "divide", unitLabel: "pieza", category: "Sabritas" },
    { name: "Sabritas Especias", price: 17.12, piecesPerPackage: 0, image: "", calcType: "divide", unitLabel: "pieza", category: "Sabritas" },
    { name: "Sabritas Flamint Hot", price: 17.12, piecesPerPackage: 0, image: "", calcType: "divide", unitLabel: "pieza", category: "Sabritas" },
    { name: "Sabritas Receta Crujiente", price: 17.12, piecesPerPackage: 0, image: "", calcType: "divide", unitLabel: "pieza", category: "Sabritas" },
    { name: "Ruffles Original", price: 17.12, piecesPerPackage: 0, image: "", calcType: "divide", unitLabel: "pieza", category: "Sabritas" },
    { name: "Ruffles Queso", price: 17.12, piecesPerPackage: 0, image: "", calcType: "divide", unitLabel: "pieza", category: "Sabritas" },
    { name: "Ruffles Jalapeño", price: 17.12, piecesPerPackage: 0, image: "", calcType: "divide", unitLabel: "pieza", category: "Sabritas" },
    { name: "Ruffles Salsa Roja", price: 17.12, piecesPerPackage: 0, image: "", calcType: "divide", unitLabel: "pieza", category: "Sabritas" },
    { name: "Doritos Nacho", price: 17.12, piecesPerPackage: 0, image: "", calcType: "divide", unitLabel: "pieza", category: "Sabritas" },
    { name: "Doritos Pizzerola", price: 17.12, piecesPerPackage: 0, image: "", calcType: "divide", unitLabel: "pieza", category: "Sabritas" },
    { name: "Doritos Incógnita", price: 17.12, piecesPerPackage: 0, image: "", calcType: "divide", unitLabel: "pieza", category: "Sabritas" },
    { name: "Doritos Diablo", price: 17.12, piecesPerPackage: 0, image: "", calcType: "divide", unitLabel: "pieza", category: "Sabritas" },
    { name: "Doritos 3D", price: 17.12, piecesPerPackage: 0, image: "", calcType: "divide", unitLabel: "pieza", category: "Sabritas" },
    { name: "Doritos Flamint Hot", price: 17.12, piecesPerPackage: 0, image: "", calcType: "divide", unitLabel: "pieza", category: "Sabritas" },
    { name: "Doritos Dinamita Chile Limón", price: 17.12, piecesPerPackage: 0, image: "", calcType: "divide", unitLabel: "pieza", category: "Sabritas" },
    { name: "Doritos Dinamita Flamint Hot", price: 17.12, piecesPerPackage: 0, image: "", calcType: "divide", unitLabel: "pieza", category: "Sabritas" },
    { name: "Tostitos Salsa Verde", price: 17.12, piecesPerPackage: 0, image: "", calcType: "divide", unitLabel: "pieza", category: "Sabritas" },
    { name: "Tostitos Flamint Hot", price: 17.12, piecesPerPackage: 0, image: "", calcType: "divide", unitLabel: "pieza", category: "Sabritas" },
    { name: "Rancheritos", price: 15.41, piecesPerPackage: 0, image: "", calcType: "divide", unitLabel: "pieza", category: "Sabritas" },
    { name: "Crujitos", price: 15.41, piecesPerPackage: 0, image: "", calcType: "divide", unitLabel: "pieza", category: "Sabritas" },
    { name: "Fritos Sal Limón", price: 15.41, piecesPerPackage: 0, image: "", calcType: "divide", unitLabel: "pieza", category: "Sabritas" },
    { name: "Fritos Chile Limón", price: 15.41, piecesPerPackage: 0, image: "", calcType: "divide", unitLabel: "pieza", category: "Sabritas" },
    { name: "Fritos Chorizo Chipotle", price: 15.41, piecesPerPackage: 0, image: "", calcType: "divide", unitLabel: "pieza", category: "Sabritas" },
    { name: "Churrumais Original", price: 14.55, piecesPerPackage: 0, image: "", calcType: "divide", unitLabel: "pieza", category: "Sabritas" },
    { name: "Churrumais Flamint Hot", price: 14.55, piecesPerPackage: 0, image: "", calcType: "divide", unitLabel: "pieza", category: "Sabritas" },
    { name: "Cheetos Torciditos", price: 14.55, piecesPerPackage: 0, image: "", calcType: "divide", unitLabel: "pieza", category: "Sabritas" },
    { name: "Cheetos Jalapeño", price: 14.55, piecesPerPackage: 0, image: "", calcType: "divide", unitLabel: "pieza", category: "Sabritas" },
    { name: "Cheetos Flamint Hot", price: 14.55, piecesPerPackage: 0, image: "", calcType: "divide", unitLabel: "pieza", category: "Sabritas" },
    { name: "Cheetos Bolitas", price: 14.55, piecesPerPackage: 0, image: "", calcType: "divide", unitLabel: "pieza", category: "Sabritas" },
    { name: "Cheetos Poffs", price: 14.55, piecesPerPackage: 0, image: "", calcType: "divide", unitLabel: "pieza", category: "Sabritas" },
    { name: "Cheetos Palomita", price: 14.55, piecesPerPackage: 0, image: "", calcType: "divide", unitLabel: "pieza", category: "Sabritas" },
    { name: "Cheetos Colmillo", price: 14.55, piecesPerPackage: 0, image: "", calcType: "divide", unitLabel: "pieza", category: "Sabritas" },
    { name: "Paketaxo Naranja", price: 18.84, piecesPerPackage: 0, image: "", calcType: "divide", unitLabel: "pieza", category: "Sabritas" },
    { name: "Paketaxo Azúl", price: 18.84, piecesPerPackage: 0, image: "", calcType: "divide", unitLabel: "pieza", category: "Sabritas" },
    { name: "Paketaxo Morado", price: 18.84, piecesPerPackage: 0, image: "", calcType: "divide", unitLabel: "pieza", category: "Sabritas" },
    { name: "Paketaxo Verde", price: 18.84, piecesPerPackage: 0, image: "", calcType: "divide", unitLabel: "pieza", category: "Sabritas" },
    { name: "Bolzaza Sabritas Receta Crujiente", price: 21.35, piecesPerPackage: 0, image: "", calcType: "divide", unitLabel: "pieza", category: "Sabritas" },
    { name: "Bolzaza Sabritas Original", price: 21.35, piecesPerPackage: 0, image: "", calcType: "divide", unitLabel: "pieza", category: "Sabritas" },
    { name: "Bolzaza Ruffles Queso", price: 21.35, piecesPerPackage: 0, image: "", calcType: "divide", unitLabel: "pieza", category: "Sabritas" },
    { name: "Bolzaza Doritos Nacho", price: 21.35, piecesPerPackage: 0, image: "", calcType: "divide", unitLabel: "pieza", category: "Sabritas" },
    { name: "Bolzaza Cheetos Torciditos", price: 21.35, piecesPerPackage: 0, image: "", calcType: "divide", unitLabel: "pieza", category: "Sabritas" },
    { name: "Bolzaza Cheetos Flamint Hot ", price: 21.35, piecesPerPackage: 0, image: "", calcType: "divide", unitLabel: "pieza", category: "Sabritas" },
    { name: "Sabritas Original Grande", price: 47.20, piecesPerPackage: 0, image: "", calcType: "divide", unitLabel: "pieza", category: "Sabritas" },
    { name: "Paketaxo Grande Naranja", price: 47.20, piecesPerPackage: 0, image: "", calcType: "divide", unitLabel: "pieza", category: "Sabritas" },
    { name: "Paketaxo Grande Azúl", price: 47.20, piecesPerPackage: 0, image: "", calcType: "divide", unitLabel: "pieza", category: "Sabritas" },
    { name: "Paketaxo Grande Morado", price: 47.20, piecesPerPackage: 0, image: "", calcType: "divide", unitLabel: "pieza", category: "Sabritas" },
    { name: "Paketaxo Grande Verde", price: 47.20, piecesPerPackage: 0, image: "", calcType: "divide", unitLabel: "pieza", category: "Sabritas" },
    { name: "Valentones", price: 32.00, piecesPerPackage: 0, image: "", calcType: "divide", unitLabel: "pieza", category: "Sabritas" },
    { name: "Karate Kat Mag", price: 17.12, piecesPerPackage: 0, image: "", calcType: "divide", unitLabel: "pieza", category: "Sabritas" },

    // { name: "", price: 1.00, piecesPerPackage: 0, image: "", calcType: "divide", unitLabel: "pieza", category: "Sabritas" },
    // { name: "", price: 1.00, piecesPerPackage: 0, image: "", calcType: "divide", unitLabel: "pieza", category: "Sabritas" },
    // { name: "", price: 1.00, piecesPerPackage: 0, image: "", calcType: "divide", unitLabel: "pieza", category: "Sabritas" },
    // { name: "", price: 1.00, piecesPerPackage: 0, image: "", calcType: "divide", unitLabel: "pieza", category: "Sabritas" },
    // { name: "", price: 1.00, piecesPerPackage: 0, image: "", calcType: "divide", unitLabel: "pieza", category: "Sabritas" },
    // { name: "", price: 1.00, piecesPerPackage: 0, image: "", calcType: "divide", unitLabel: "pieza", category: "Sabritas" },
    // { name: "", price: 1.00, piecesPerPackage: 0, image: "", calcType: "divide", unitLabel: "pieza", category: "Sabritas" },
    // { name: "", price: 1.00, piecesPerPackage: 0, image: "", calcType: "divide", unitLabel: "pieza", category: "Sabritas" },
];

// ==========================
// Asignar IDs Automáticamente
// ==========================
products = products.map((p, index) => ({ id: 101 + index, ...p }));

// ==========================
// LÓGICA DE LA APP (igual que antes)
// ==========================
let cart = [];

const productsContainer = document.getElementById('products');
const cartItemsContainer = document.getElementById('cart-items');
const totalElement = document.getElementById('total');
const searchInput = document.getElementById('search-input');
const checkoutBtn = document.getElementById('checkout-btn');
const categoryFilter = document.getElementById('category-filter');

function formatPrice(number) {
    return number.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

document.addEventListener('DOMContentLoaded', () => {
    renderProducts(products);
    renderCart();
});

function renderProducts(filteredProducts) {
    productsContainer.innerHTML = '';
    filteredProducts.forEach(product => {
        const cartItem = cart.find(item => item.id === product.id);
        const quantity = cartItem ? cartItem.quantity : 0;

        let pricePerPiece;
        if (product.calcType === "multiply") {
            pricePerPiece = product.price * product.piecesPerPackage;
        } else {
            pricePerPiece = product.price / product.piecesPerPackage;
        }

        const productCard = document.createElement('div');
        productCard.classList.add('product-card');
        productCard.innerHTML = `
            <img src="imagenes/${product.image}" alt="${product.name}" class="product-image">
            <div class="product-info">
                <h3 class="product-name">${product.name}</h3>
                <p class="product-price">$${formatPrice(product.price)}</p>
                ${product.piecesPerPackage > 1 ? `<p class="price-per-piece">$${formatPrice(pricePerPiece)} / ${product.unitLabel}</p>` : ''}
                <div class="quantity-control-product" data-id="${product.id}">
                    <button class="quantity-btn decrease" data-id="${product.id}">-</button>
                    <span class="quantity" data-id="${product.id}">${quantity}</span>
                    <button class="quantity-btn increase" data-id="${product.id}">+</button>
                </div>
            </div>
        `;
        productsContainer.appendChild(productCard);
    });
}

function renderCart() {
    cartItemsContainer.innerHTML = '';
    let total = 0;

    const sortedCart = cart.sort((a, b) => a.id - b.id);

    if (sortedCart.length === 0) {
        cartItemsContainer.innerHTML = '<p style="text-align: center; color: #666;">Tu carrito está vacío.</p>';
        totalElement.textContent = '$0,00';
        return;
    }

    sortedCart.forEach(item => {
        let pricePerPiece;
        if (item.calcType === "multiply") {
            pricePerPiece = item.price * item.piecesPerPackage;
        } else {
            pricePerPiece = item.price / item.piecesPerPackage;
        }

        const cartItem = document.createElement('div');
        cartItem.classList.add('cart-item');
        cartItem.innerHTML = `
            <img src="imagenes/${item.image}" alt="${item.name}" class="cart-item-image">
            <div class="cart-item-details">
                <span class="cart-item-name">${item.name}</span>
                <p class="cart-item-price">$${formatPrice(item.price * item.quantity)}</p>
                ${item.piecesPerPackage > 1 ? `<p class="cart-item-per-piece">$${formatPrice(pricePerPiece)} / ${item.unitLabel}</p>` : ''}
            </div>
            <div class="quantity-control">
                <button class="quantity-btn decrease" data-id="${item.id}">-</button>
                <span class="quantity">${item.quantity}</span>
                <button class="quantity-btn increase" data-id="${item.id}">+</button>
            </div>
            <button class="remove-item-btn" data-id="${item.id}">X</button>
        `;
        cartItemsContainer.appendChild(cartItem);
        total += item.price * item.quantity;
    });

    totalElement.textContent = `$${formatPrice(total)}`;
}

function handleCart(event) {
    const target = event.target;
    const id = parseInt(target.dataset.id);
    if (!id) return;

    const product = products.find(p => p.id === id);
    let cartItem = cart.find(item => item.id === id);

    if (target.classList.contains('increase')) {
        if (cartItem) {
            cartItem.quantity++;
        } else {
            cart.push({ ...product, quantity: 1 });
        }
    } else if (target.classList.contains('decrease')) {
        if (cartItem && cartItem.quantity > 1) {
            cartItem.quantity--;
        } else if (cartItem && cartItem.quantity === 1) {
            cart = cart.filter(item => item.id !== id);
        }
    } else if (target.classList.contains('remove-item-btn')) {
        cart = cart.filter(item => item.id !== id);
    }
    
    // ❌ Antes: renderProducts(products);
    // ✅ Ahora:
    filterProducts();
    renderCart();
}


function filterProducts() {
    const searchTerm = searchInput.value.toLowerCase();
    const category = categoryFilter.value;

    const filtered = products.filter(product => {
        const matchesSearch = product.name.toLowerCase().includes(searchTerm);
        const matchesCategory = (category === "all" || product.category === category);
        return matchesSearch && matchesCategory;
    });

    renderProducts(filtered);
}

function generateTicket() {
    if (cart.length === 0) {
        alert("El carrito está vacío. Agrega productos para generar un ticket.");
        return;
    }

    const ticketContainer = document.createElement('div');
    ticketContainer.classList.add('ticket-style');
    ticketContainer.style.width = '430px';
    ticketContainer.style.padding = '1rem';
    ticketContainer.style.fontFamily = 'monospace';
    ticketContainer.style.backgroundColor = '#fff';
    ticketContainer.style.color = '#000';
    ticketContainer.style.border = '2px dashed #000';
    ticketContainer.style.margin = '20px auto';
    ticketContainer.style.boxShadow = '0 0 10px rgba(0,0,0,0.2)';

    // 1. Agrupar los productos por categoría
    const categoriesGroup = {};
    cart.forEach(item => {
        if (!categoriesGroup[item.category]) {
            categoriesGroup[item.category] = [];
        }
        categoriesGroup[item.category].push(item);
    });

    // 2. Construir el contenido del ticket iterando por categorías
    let ticketContent = `
        <h2 style="text-align: center; margin-bottom: 1rem; text-transform: uppercase; font-size: 1.2rem;">Pedido</h2>
        <p style="text-align: center; font-size: 0.8rem; margin-bottom: 1rem;">Ticket de Compra</p>
        <div style="border-top: 1px dashed #000; padding-top: 1rem;">
    `;

    for (const category in categoriesGroup) {
        // Ordenar los productos dentro de la categoría por ID (opcional, mantiene tu lógica)
        categoriesGroup[category].sort((a, b) => a.id - b.id);

        // Añadir el separador/título de la categoría
        ticketContent += `
            <div style="margin-top: 1rem; margin-bottom: 0.5rem; border-bottom: 1px solid #000; padding-bottom: 2px;">
                <span style="font-weight: bold; text-transform: uppercase; font-size: 0.9rem; letter-spacing: 1px;">
                    ⚫ ${category}
                </span>
            </div>
        `;

        // Añadir los productos pertenecientes a esta categoría
        ticketContent += categoriesGroup[category].map(item => `
            <div style="display: flex; align-items: center; gap: 0.5rem; margin-bottom: 0.75rem;">
                <img src="imagenes/${item.image}" alt="${item.name}" style="width: 40px; height: 40px; object-fit: cover; border-radius: 4px;">
                <div style="flex-grow: 1;">
                    <p style="font-weight: bold; margin: 0;">${item.name}</p>
                    <p style="margin: 0; font-size: 0.9rem;">Cantidad: ${item.quantity} x $${formatPrice(item.price)}</p>
                </div>
                <p style="font-weight: bold; margin: 0;">$${formatPrice(item.price * item.quantity)}</p>
            </div>
        `).join('');
    }

    ticketContent += `
        </div>
        <div style="border-top: 1px dashed #000; margin-top: 1rem; padding-top: 1rem;">
            <p style="display: flex; justify-content: space-between; font-weight: bold; font-size: 1.2rem;">
                <span>Total:</span><span>${totalElement.textContent}</span>
            </p>
        </div>
        <p style="text-align: center; margin-top: 1rem; font-size: 0.8rem;">¡Gracias por tu compra!</p>
    `;
    
    ticketContainer.innerHTML = ticketContent;
    document.body.appendChild(ticketContainer);

    html2canvas(ticketContainer, { scale: 3 }).then(canvas => {
        const image = canvas.toDataURL('image/png', 1.0);
        const link = document.createElement('a');
        link.href = image;
        link.download = 'ticket.png';
        link.click();
        document.body.removeChild(ticketContainer);
    });
}

productsContainer.addEventListener('click', handleCart);
cartItemsContainer.addEventListener('click', handleCart);
searchInput.addEventListener('input', filterProducts);
categoryFilter.addEventListener('change', filterProducts);
checkoutBtn.addEventListener('click', generateTicket);
