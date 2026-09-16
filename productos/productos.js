/* ============================================================
   ESTACIÓN 180
   PRODUCTOS.JS
   ============================================================ */


/* ============================================================
   01. DATOS DEL CATÁLOGO
   ============================================================ */

/*
    IMPORTANTE

    MARCAS:
    Por ahora todas usan:
    ../imagenes/01.jpeg

    PRODUCTOS:
    Por ahora todos usan:
    ../imagenes/02.jpeg

    Luego puedes cambiar manualmente
    la imagen de cada marca y producto.
*/

const catalogData = {


    /* ========================================================
       CERVEZAS
    ======================================================== */

    cervezas: {

        name: "Cervezas",

        brands: {


            /* PILSEN */

            "Pilsen": {

                image: "../imagenes/1001.png",

                products: [

                    {
                        id: "1011",
                        name: "1 Caja Pilsen",
                        brand: "Pilsen",
                        price: 90.00,
                        category: "cervezas",
                        image: "../imagenes/1011.png"
                    },

                    {
                        id: "1012",
                        name: "Twelve pack lata 335 ml",
                        brand: "Pilsen",
                        price: 60.00,
                        category: "cervezas",
                        image: "../imagenes/1012.png"
                    },
                    {
                        id: "1013",
                        name: "Six pack lata 355 ml",
                        brand: "Pilsen",
                        price: 33.00,
                        category: "cervezas",
                        image: "../imagenes/1013.png"
                    }

                ]

            },


            /*  Cristal */

            "Cristal": {

                image: "../imagenes/1002.png",

                products: [

                    {
                        id: "1021",
                        name: "1 Caja Cristal",
                        brand: "Cristal",
                        price: 65.00,
                        category: "cervezas",
                        image: "../imagenes/1021.png"
                    },
                    {
                        id: "1022",
                        name: "Six pack botella 330 ml",
                        brand: "Cristal",
                        price: 22.00,
                        category: "cervezas",
                        image: "../imagenes/1022.png"
                    },
                    {
                        id: "1023",
                        name: "Six pack ultra botella 330 ml",
                        brand: "Cristal",
                        price: 22.00,
                        category: "cervezas",
                        image: "../imagenes/1023.png"
                    }

                ]

            },


            /* Cusqueña */

            "Cusqueña": {

                image: "../imagenes/1003.png",

                products: [

                    {
                        id: "1031",
                        name: "Six pack trigo botella 330 ml",
                        brand: "Cusqueña",
                        price: 38.00,
                        category: "cervezas",
                        image: "../imagenes/1031.png"
                    },

                    {
                        id: "1032",
                        name: "Six pack dorada botella ",
                        brand: "Cusqueña",
                        price: 38.00,
                        category: "cervezas",
                        image: "../imagenes/1032.png"
                    },
                    {
                        id: "1033",
                        name: "Six pack red lager botella ",
                        brand: "Cusqueña",
                        price: 38.00,
                        category: "cervezas",
                        image: "../imagenes/1033.png"
                    }

                ]

            },


            /* HEINEKEN */

            "Heineken": {

                image: "../imagenes/1004.png",

                products: [

                    {
                        id: "1041",
                        name: "Six pack",
                        brand: "Heineken",
                        price: 38.00,
                        category: "cervezas",
                        image: "../imagenes/1041.png"
                    }

                ]

            },

            /* Lowenbrau */

            "Lowenbrau": {

                image: "../imagenes/1005.png",

                products: [

                    {
                        id: "1051",
                        name: "Six pack botella",
                        brand: "Lowenbrau",
                        price: 24.00,
                        category: "cervezas",
                        image: "../imagenes/1051.png"
                    }

                ]

            },
            
            /* Miller */

            "Miller": {

                image: "../imagenes/1006.png",

                products: [

                    {
                        id: "1061",
                        name: "Six pack botella 355 ml",
                        brand: "Miller",
                        price: 28.00,
                        category: "cervezas",
                        image: "../imagenes/1061.png"
                    }

                ]

            },
            
             /* Budweiser */

            "Budweiser": {

                image: "../imagenes/1007.png",

                products: [

                    {
                        id: "1071",
                        name: "Six pack botella",
                        brand: "Budweiser",
                        price: 26.00,
                        category: "cervezas",
                        image: "../imagenes/1071.png"
                    }

                ]

            },

             /* Peroni */

            "Peroni": {

                image: "../imagenes/1008.png",

                products: [

                    {
                        id: "1081",
                        name: "Six pack",
                        brand: "Peroni",
                        price: 33.00,
                        category: "cervezas",
                        image: "../imagenes/1081.png"
                    }

                ]

            },

             /* Corona */

            "Corona": {

                image: "../imagenes/1009.png",

                products: [

                    {
                        id: "1091",
                        name: "Six pack 355 ml",
                        brand: "Corona",
                        price: 38.40,
                        category: "cervezas",
                        image: "../imagenes/1091.png"
                    }

                ]

            },

        }

    },



    /* ========================================================
       VINOS
    ======================================================== */

    vinos: {

        name: "Vinos",

        brands: {


            "Navarro Correas": {

                image: "../imagenes/2001.png",

                products: [

                    {
                        id: "20011",
                        name: "Los Arboles Malbec",
                        brand: "Navarro Correas",
                        price: 45.00,
                        category: "vinos",
                        image: "../imagenes/20011.png"
                    },

                    {
                        id: "20012",
                        name: "Colección Privada Blend",
                        brand: "Navarro Correas",
                        price: 60.00,
                        category: "vinos",
                        image: "../imagenes/20012.png"
                    },
                    {
                        id: "20013",
                        name: "Colección Privada Malbec",
                        brand: "Navarro Correas",
                        price: 60.00,
                        category: "vinos",
                        image: "../imagenes/20013.jpeg"
                    },
                    {
                        id: "20014",
                        name: "Los Arboles Cabernet Sauvignon",
                        brand: "Navarro Correas",
                        price: 45.00,
                        category: "vinos",
                        image: "../imagenes/20014.png"
                    },
                    {
                        id: "20015",
                        name: "Colección Priv. Cabernet Sauvignon",
                        brand: "Navarro Correas",
                        price: 60.00,
                        category: "vinos",
                        image: "../imagenes/20015.png"
                    },

                ]

            },

            "Tabernero": {

                image: "../imagenes/2002.png",

                products: [

                    {
                        id: "20021",
                        name: "Borgoña Selección",
                        brand: "Tabernero",
                        price: 23.00,
                        category: "vinos",
                        image: "../imagenes/20021.png"
                    },
                    {
                        id: "20022",
                        name: "Borgoña",
                        brand: "Tabernero",
                        price: 23.00,
                        category: "vinos",
                        image: "../imagenes/20022.png"
                    },

                   

                ]

            },


            "Santiago Queirolo": {

                image: "../imagenes/2003.png",

                products: [

                    {
                        id: "20031",
                        name: "Magdalena",
                        brand: "Santiago Queirolo",
                        price: 23.00,
                        category: "vinos",
                        image: "../imagenes/20031.png"
                    }

                ]

            },

            "Tacama": {

                image: "../imagenes/2004.png",

                products: [

                    {
                        id: "20041",
                        name: "Tacama Rose Semiseco",
                        brand: "Tacama",
                        price: 30.00,
                        category: "vinos",
                        image: "../imagenes/20041.png"
                    },
                    {
                        id: "20042",
                        name: "Gran Tinto Dulce",
                        brand: "Tacama",
                        price: 30.00,
                        category: "vinos",
                        image: "../imagenes/20042.png"
                    },
                    {
                        id: "20043",
                        name: "Gran Blanco seco",
                        brand: "Tacama",
                        price: 30.00,
                        category: "vinos",
                        image: "../imagenes/20043.png"
                    }

                ]

            },

            "Concha y Toro": {

                image: "../imagenes/2005.png",

                products: [

                    {
                        id: "20051",
                        name: "Frontera Carmenere",
                        brand: "Concha y Toro",
                        price: 42.00,
                        category: "vinos",
                        image: "../imagenes/20051.png"
                    }

                ]

            },

                "Casillero del diablo": {

                image: "../imagenes/2006.png",

                products: [

                    {
                        id: "20061",
                        name: "Cabernet",
                        brand: "Casillero del diablo",
                        price: 45.00,
                        category: "vinos",
                        image: "../imagenes/20061.png"
                    }

                ]

            },

                "Intipalka": {

                image: "../imagenes/2007.png",

                products: [

                    {
                        id: "20071",
                        name: "Intipalka Malbec",
                        brand: "Intipalka",
                        price: 40.00,
                        category: "vinos",
                        image: "../imagenes/20071.png"
                    },
                    {
                        id: "20072",
                        name: "Intipalka Sauvignon Blanc",
                        brand: "Intipalka",
                        price: 40.00,
                        category: "vinos",
                        image: "../imagenes/20072.png"
                    }

                ]

            },

                "Fin de ciclo": {

                image: "../imagenes/2008.png",

                products: [

                    {
                        id: "20081",
                        name: "XIII Lunas",
                        brand: "Fin de ciclo",
                        price: 49.00,
                        category: "vinos",
                        image: "../imagenes/20081.png"
                    }

                ]

            },

                "Trapiche": {

                image: "../imagenes/2009.png",

                products: [

                    {
                        id: "20091",
                        name: "Reserva Malbec",
                        brand: "Trapiche",
                        price: 62.00,
                        category: "vinos",
                        image: "../imagenes/20091.png"
                    }

                ]

            },

                "Fin del Mundo ": {

                image: "../imagenes/2010.png",

                products: [

                    {
                        id: "20101",
                        name: "Malbec Reserva",
                        brand: "Fin del Mundo",
                        price: 62.00,
                        category: "vinos",
                        image: "../imagenes/20101.png"
                    }

                ]

            },

                "Graffigna ": {

                image: "../imagenes/2011.png",

                products: [

                    {
                        id: "20111",
                        name: "Malbec Graffigna",
                        brand: "Graffigna",
                        price: 45.00,
                        category: "vinos",
                        image: "../imagenes/20111.png"
                    }

                ]

            },

                "Altos las Hormigas ": {

                image: "../imagenes/2012.png",

                products: [

                    {
                        id: "20121",
                        name: "Malbec",
                        brand: "Altos las Hormigas",
                        price: 68.00,
                        category: "vinos",
                        image: "../imagenes/20121.png"
                    }

                ]

            },

                "Salentein ": {

                image: "../imagenes/2013.png",

                products: [

                    {
                        id: "20131",
                        name: "Chardonnay Reserve",
                        brand: "Salentein",
                        price: 90.00,
                        category: "vinos",
                        image: "../imagenes/20131.png"
                    }

                ]

            },


            

        }

    },



    /* ========================================================
       ESPUMANTES
    ======================================================== */

    espumantes: {

        name: "Espumantes",

        brands: {


            "FREIXENET": {

                image: "../imagenes/3001.png",

                products: [

                    {
                        id: "3001",
                        name: "Cordon Rosado",
                        brand: "FREIXENET",
                        price: 45.00,
                        category: "espumantes",
                        image: "../imagenes/30011.png"
                    }

                ]

            },


            "RICCADONNA": {

                image: "../imagenes/3002.png",

                products: [

                    {
                        id: "30021",
                        name: "Ricadonna Asti",
                        brand: "RICCADONNA",
                        price: 68.00,
                        category: "espumantes",
                        image: "../imagenes/30021.png"
                    },
                    {
                        id: "30022",
                        name: "Ricadonna Rubí",
                        brand: "RICCADONNA",
                        price: 68.00,
                        category: "espumantes",
                        image: "../imagenes/30022.png"
                    }

                ]

            }

        }

    },



    /* ========================================================
       COMPLEMENTOS
    ======================================================== */

    complementos: {

        name: "Complementos",

        brands: {


            "Hielo y Agua": {

                image: "../imagenes/4001.png",

                products: [

                    {
                        id: "40011",
                        name: "Bolsa de hielo 3 kg",
                        brand: "Hielo y agua",
                        price: 8.00,
                        category: "complementos",
                        image: "../imagenes/40011.png"
                    },
                    {
                        id: "40012",
                        name: "Agua San Luis con gas 2.5 L ",
                        brand: "Hielo y agua",
                        price: 4.00,
                        category: "complementos",
                        image: "../imagenes/40012.png"
                    },
                    {
                        id: "40013",
                        name: "Agua San Luis sin gas 2.5 L ",
                        brand: "Hielo y agua",
                        price: 4.00,
                        category: "complementos",
                        image: "../imagenes/40013.png"
                    },

                ]

            },


            "Jugos": {

                image: "../imagenes/4002.png",

                products: [

                    {
                        id: "40021",
                        name: "Gloria Maracuyá 1 L",
                        brand: "Jugos",
                        price: 5.00,
                        category: "complementos",
                        image: "../imagenes/40021.png"
                    },
                    {
                        id: "40022",
                        name: "Gloria Durazno 1 L",
                        brand: "Jugos",
                        price: 5.00,
                        category: "complementos",
                        image: "../imagenes/40022.png"
                    },
                    {
                        id: "40023",
                        name: "Gloria Piña 1 L",
                        brand: "Jugos",
                        price: 5.00,
                        category: "complementos",
                        image: "../imagenes/40023.png"
                    },
                    {
                        id: "40024",
                        name: "Gloria Pera 1 L",
                        brand: "Jugos",
                        price: 5.00,
                        category: "complementos",
                        image: "../imagenes/40024.png"
                    },
                    {
                        id: "40025",
                        name: "Gloria Naranja 1 L",
                        brand: "Jugos",
                        price: 5.00,
                        category: "complementos",
                        image: "../imagenes/40025.png"
                    },
                    {
                        id: "40026",
                        name: "Jugo de Tomate Britvic 150 ml",
                        brand: "Jugos",
                        price: 8.00,
                        category: "complementos",
                        image: "../imagenes/40026.png"
                    },
                    {
                        id: "40027",
                        name: "Britvic Ginger Ale 150 ml",
                        brand: "Jugos",
                        price: 4.00,
                        category: "complementos",
                        image: "../imagenes/40027.png"
                    },
                    {
                        id: "40028",
                        name: "Tampico Naranja 2 L",
                        brand: "Jugos",
                        price: 6.00,
                        category: "complementos",
                        image: "../imagenes/40028.png"
                    },
                    {
                        id: "40029",
                        name: "Tampico Granadilla 2 L",
                        brand: "Jugos",
                        price: 5.00,
                        category: "complementos",
                        image: "../imagenes/40029.png"
                    },


                ]

            },

            "Jarabe": {

                image: "../imagenes/4003.png",

                products: [

                    {
                        id: "40031",
                        name: "Jarabe de Goma",
                        brand: "Jarabe",
                        price: 14.00,
                        category: "complementos",
                        image: "../imagenes/40031.png"
                    },
                    {
                        id: "40032",
                        name: "Jarabe de Granadilla",
                        brand: "Jarabe",
                        price: 14.00,
                        category: "complementos",
                        image: "../imagenes/40032.png"
                    },

                ]

            },

            "Gaseosas": {

                image: "../imagenes/4004.png",

                products: [

                    {
                        id: "40041",
                        name: "Vervess 1.5 L    ",
                        brand: "Gaseosas",
                        price: 8.00,
                        category: "complementos",
                        image: "../imagenes/40041.png"
                    },
                    {
                        id: "40042",
                        name: "Coca Cola Zero 1.5 L",
                        brand: "Gaseosas",
                        price: 8.00,
                        category: "complementos",
                        image: "../imagenes/40042.png"
                    },
                    {
                        id: "40043",
                        name: "Coca Cola 3 L",
                        brand: "Gaseosas",
                        price: 10.00,
                        category: "complementos",
                        image: "../imagenes/40043.png"
                    },
                    {
                        id: "40044",
                        name: "Coca Cola 2.5 L",
                        brand: "Gaseosas",
                        price: 8.00,
                        category: "complementos",
                        image: "../imagenes/40044.png"
                    },
                    {
                        id: "40045",
                        name: "Coca Cola 1.5 L",
                        brand: "Gaseosas",
                        price: 6.00,
                        category: "complementos",
                        image: "../imagenes/40045.png"
                    },
                    {
                        id: "40046",
                        name: "Inca Kola 3 L",
                        brand: "Gaseosas",
                        price: 10.00,
                        category: "complementos",
                        image: "../imagenes/40046.png"
                    },
                    {
                        id: "40047",
                        name: "Inca Kola 1.5 L",
                        brand: "Gaseosas",
                        price: 6.00,
                        category: "complementos",
                        image: "../imagenes/40047.png"
                    },
                    {
                        id: "40048",
                        name: "Guarana 3 L",
                        brand: "Gaseosas",
                        price: 8.00,
                        category: "complementos",
                        image: "../imagenes/40048.png"
                    },
                    {
                        id: "40049",
                        name: "Guarana 2 L",
                        brand: "Gaseosas",
                        price: 6.00,
                        category: "complementos",
                        image: "../imagenes/40049.png"
                    },
                    {
                        id: "400491",
                        name: "Sprite 1.5 L",
                        brand: "Gaseosas",
                        price: 6.00,
                        category: "complementos",
                        image: "../imagenes/400491.png"
                    },
                    {
                        id: "400492",
                        name: "Schweppes 1.5 L",
                        brand: "Gaseosas",
                        price: 8.00,
                        category: "complementos",
                        image: "../imagenes/400492.png"
                    },
                    {
                        id: "400493",
                        name: "Schweppes 1.5 L",
                        brand: "Gaseosas",
                        price: 8.00,
                        category: "complementos",
                        image: "../imagenes/400493.png"
                    },





                ]

            },
            "Energizantes": {

                image: "../imagenes/4005.png",

                products: [

                    {
                        id: "40051",
                        name: "Gatorade 500 ml",
                        brand: "Energizantes",
                        price: 3.00,
                        category: "complementos",
                        image: "../imagenes/40051.png"
                    },
                    {
                        id: "40052",
                        name: "Red Bull Energy Drink Lata",
                        brand: "Energizantes",
                        price: 9.00,
                        category: "complementos",
                        image: "../imagenes/40052.png"
                    },


                ]

            },


            

        }

    },



    /* ========================================================
       CIGARROS
    ======================================================== */

    cigarros: {

        name: "Cigarros",

        brands: {

            "Lucky Strike": {

                image: "../imagenes/5001.png",

                products: [

                    {
                        id: "50011",
                        name: "Lucky Convertible Azul 20 und.",
                        brand: "Lucky Strike",
                        price: 25.00,
                        category: "cigarros",
                        image: "../imagenes/50011.jpg"
                    },
                    {
                        id: "50012",
                        name: "Lucky Mora 20 und.",
                        brand: "Lucky Strike",
                        price: 25.00,
                        category: "cigarros",
                        image: "../imagenes/50012.jpg"
                    },
                    {
                        id: "50013",
                        name: "Lucky Convertible Doble Click amarillo",
                        brand: "Lucky Strike",
                        price: 25.00,
                        category: "cigarros",
                        image: "../imagenes/50013.jpg"
                    },
                    {
                        id: "50014",
                        name: "Lucky Silver 20 unid.",
                        brand: "Lucky Strike",
                        price: 25.00,
                        category: "cigarros",
                        image: "../imagenes/50014.jpg"
                    },
                    {
                        id: "50015",
                        name: "Lucky Convertible Verde 20 und.",
                        brand: "Lucky Strike",
                        price: 25.00,
                        category: "cigarros",
                        image: "../imagenes/50015.jpg"
                    },
                    {
                        id: "50016",
                        name: "Lucky Light 20 und.",
                        brand: "Lucky Strike",
                        price: 25.00,
                        category: "cigarros",
                        image: "../imagenes/50016.jpg"
                    },

                ]

            },

            "Marlboro": {

                image: "../imagenes/5002.png",

                products: [

                    {
                        id: "50021",
                        name: "Marlboro Mora 20 Unid.",
                        brand: "Marlboro",
                        price: 25.00,
                        category: "cigarros",
                        image: "../imagenes/50021.jpg"
                    },

                    {
                        id: "50022",
                        name: "Marlboro Convertible Azul 20 Unid.",
                        brand: "Marlboro",
                        price: 25.00,
                        category: "cigarros",
                        image: "../imagenes/50022.jpg"
                    },
                    {
                        id: "50023",
                        name: "Marlboro Rojo 20 Unid.",
                        brand: "Marlboro",
                        price: 25.00,
                        category: "cigarros",
                        image: "../imagenes/50023.jpg"
                    },
                    {
                        id: "50024",
                        name: "Marlboro Light 20 Unid.",
                        brand: "Marlboro",
                        price: 25.00,
                        category: "cigarros",
                        image: "../imagenes/50024.jpg"
                    },


                ]

            },
            "Pall Mall": {

                image: "../imagenes/5003.png",

                products: [

                    {
                        id: "50031",
                        name: "Pall Mall Verde 20 unid.",
                        brand: "Pall Mall",
                        price: 25.00,
                        category: "cigarros",
                        image: "../imagenes/50031.png"
                    },

                    {
                        id: "50032",
                        name: "Pall Mall Azul 20 unid.",
                        brand: "Pall Mall",
                        price: 25.00,
                        category: "cigarros",
                        image: "../imagenes/50032.jpg"
                    },
                    {
                        id: "50033",
                        name: "Pall Mall Rojo 20 unid.",
                        brand: "Pall Mall",
                        price: 25.00,
                        category: "cigarros",
                        image: "../imagenes/50033.jpg"
                    },

                ]

            },
            "Hamilton": {

                image: "../imagenes/5004.png",

                products: [

                    {
                        id: "50041",
                        name: "Hamilton Verde 20 Unid.",
                        brand: "Hamilton",
                        price: 25.00,
                        category: "cigarros",
                        image: "../imagenes/50041.jpg"
                    },

                    {
                        id: "50042",
                        name: "Hamilton Azul 20 Unid.",
                        brand: "Hamilton",
                        price: 25.00,
                        category: "cigarros",
                        image: "../imagenes/50042.jpg"
                    }

                ]

            },



        }

    },



    /* ========================================================
       SNACKS
    ======================================================== */

    snacks: {

        name: "Snacks",

        brands: {


            "Lay's": {

                image: "../imagenes/6001.png",

                products: [

                    {
                        id: "60011",
                        name: "Papas lay´s",
                        brand: "Lay's",
                        price: 12.00,
                        category: "snacks",
                        image: "../imagenes/60011.png"
                    }

                ]

            },


            "Doritos": {

                image: "../imagenes/6002.png",

                products: [

                    {
                        id: "60021",
                        name: "Doritos",
                        brand: "Doritos",
                        price: 12.00,
                        category: "snacks",
                        image: "../imagenes/60021.png"
                    }

                ]

            },


            "Pringles": {

                image: "../imagenes/6003.png",

                products: [

                    {
                        id: "60031",
                        name: "Pringles grande",
                        brand: "Pringles",
                        price: 12.00,
                        category: "snacks",
                        image: "../imagenes/60031.png"
                    }

                ]

            },

            "Piqueo Snax": {

                image: "../imagenes/6004.png",

                products: [

                    {
                        id: "60041",
                        name: "Piqueo Snax",
                        brand: "Piqueo Snax",
                        price: 12.00,
                        category: "snacks",
                        image: "../imagenes/60041.png"
                    }

                ]

            },
            "Halls": {

                image: "../imagenes/6005.png",

                products: [

                    {
                        id: "60051",
                        name: "Halls Sandia 128 gr.",
                        brand: "Halls",
                        price: 4.00,
                        category: "snacks",
                        image: "../imagenes/60051.png"
                    },
                    {
                        id: "60052",
                        name: "Halls Mora 128 gr.",
                        brand: "Halls",
                        price: 4.00,
                        category: "snacks",
                        image: "../imagenes/60052.png"
                    },
                    {
                        id: "60053",
                        name: "Halls Cherry 128 gr.",
                        brand: "Halls",
                        price: 4.00,
                        category: "snacks",
                        image: "../imagenes/60053.png"
                    },


                ]

            },


        }

    }

};



/* ============================================================
   02. ESTADO
   ============================================================ */

let selectedCategory = null;

let selectedBrand = null;

let productSearchTerm = "";



/* ============================================================
   03. VISTAS
   ============================================================ */

const categoriesView =
    document.getElementById(
        "categoriesView"
    );


const brandsView =
    document.getElementById(
        "brandsView"
    );


const productsView =
    document.getElementById(
        "productsView"
    );



/* ============================================================
   04. CATEGORÍAS
   ============================================================ */

const categoryCards =
    document.querySelectorAll(
        ".catalog-category-card"
    );



/* ============================================================
   05. MARCAS
   ============================================================ */

const brandsGrid =
    document.getElementById(
        "brandsGrid"
    );


const brandsTitle =
    document.getElementById(
        "brandsTitle"
    );


const brandsCount =
    document.getElementById(
        "brandsCount"
    );



/* ============================================================
   06. PRODUCTOS
   ============================================================ */

const productsGrid =
    document.getElementById(
        "productsGrid"
    );


const productsTitle =
    document.getElementById(
        "productsTitle"
    );


const productsCount =
    document.getElementById(
        "productsCount"
    );


const productsEmpty =
    document.getElementById(
        "productsEmpty"
    );


const productSearch =
    document.getElementById(
        "productSearch"
    );


const clearProductSearch =
    document.getElementById(
        "clearProductSearch"
    );


const resetProducts =
    document.getElementById(
        "resetProducts"
    );



/* ============================================================
   07. RETROCEDER
   ============================================================ */

const backToCategories =
    document.getElementById(
        "backToCategories"
    );


const backToBrands =
    document.getElementById(
        "backToBrands"
    );



/* ============================================================
   08. BREADCRUMB
   ============================================================ */

const breadcrumbCategories =
    document.getElementById(
        "breadcrumbCategories"
    );


const breadcrumbCategory =
    document.getElementById(
        "breadcrumbCategory"
    );


const breadcrumbBrand =
    document.getElementById(
        "breadcrumbBrand"
    );


const breadcrumbSeparatorCategory =
    document.getElementById(
        "breadcrumbSeparatorCategory"
    );


const breadcrumbSeparatorBrand =
    document.getElementById(
        "breadcrumbSeparatorBrand"
    );



/* ============================================================
   09. CARRITO
   ============================================================ */

const productsCartItems =
    document.getElementById(
        "cartItems"
    );


const productsCartCount =
    document.getElementById(
        "cartCount"
    );


const productsCartTotal =
    document.getElementById(
        "cartTotal"
    );


const productsCartCheckout =
    document.getElementById(
        "cartCheckout"
    );


const productsToast =
    document.getElementById(
        "toast"
    );



/* ============================================================
   10. INICIO
   ============================================================ */

document.addEventListener(
    "DOMContentLoaded",
    () => {

        initializeCategoryCards();

        showCategories();

        renderProductsPageCart();

    }
);



/* ============================================================
   11. INICIALIZAR TARJETAS DE CATEGORÍA
   ============================================================ */

function initializeCategoryCards() {

    categoryCards.forEach(
        card => {

            card.addEventListener(
                "click",
                () => {

                    openCategory(
                        card.dataset.category
                    );

                }
            );


            /*
                También funciona con teclado.
            */

            card.addEventListener(
                "keydown",
                event => {

                    if (
                        event.key !== "Enter" &&
                        event.key !== " "
                    ) {

                        return;

                    }


                    event.preventDefault();


                    openCategory(
                        card.dataset.category
                    );

                }
            );

        }
    );

}



/* ============================================================
   12. ABRIR CATEGORÍA
   ============================================================ */

function openCategory(
    categoryKey
) {

    const category =
        catalogData[
            categoryKey
        ];


    if (!category) {

        console.error(
            "Categoría no encontrada:",
            categoryKey
        );


        return;

    }


    selectedCategory =
        categoryKey;


    selectedBrand =
        null;


    productSearchTerm =
        "";


    if (productSearch) {

        productSearch.value =
            "";

    }


    showBrands();


    renderBrands();


    updateBreadcrumb();

}



/* ============================================================
   13. RENDERIZAR MARCAS
   ============================================================ */

function renderBrands() {

    if (
        !selectedCategory ||
        !brandsGrid
    ) {

        return;

    }


    const category =
        catalogData[
            selectedCategory
        ];


    brandsGrid.innerHTML =
        "";


    const brands =
        Object.entries(
            category.brands
        );


    if (brandsTitle) {

        brandsTitle.textContent =
            category.name;

    }


    if (brandsCount) {

        brandsCount.textContent =
            String(
                brands.length
            );

    }


    brands.forEach(
        (
            [
                brandName,
                brandData
            ]
        ) => {

            const card =
                createBrandCard(
                    brandName,
                    brandData
                );


            brandsGrid.appendChild(
                card
            );

        }
    );

}



/* ============================================================
   14. CREAR TARJETA DE MARCA
   ============================================================ */

function createBrandCard(
    brandName,
    brandData
) {

    const card =
        document.createElement(
            "article"
        );


    card.className =
        "brand-card";


    card.tabIndex =
        0;


    card.dataset.brand =
        brandName;


    card.innerHTML = `

        <div class="brand-card-image">

            <img
                src="${escapeProductHTML(
                    brandData.image ||
                    "../imagenes/01.jpeg"
                )}"
                alt="${escapeProductHTML(
                    brandName
                )}"
                loading="lazy"
            >

        </div>


        <div class="catalog-card-overlay"></div>


        <div class="brand-card-content">

            <span class="catalog-card-label">
                MARCA
            </span>


           


            <p>
                Ver productos disponibles
            </p>

        </div>


        <span class="catalog-card-arrow">
            →
        </span>

    `;


    const image =
        card.querySelector(
            "img"
        );


    if (image) {

        image.addEventListener(
            "error",
            () => {

                image.src =
                    "../imagenes/01.jpeg";

            },
            {
                once: true
            }
        );

    }



    /* CLICK */

    card.addEventListener(
        "click",
        () => {

            openBrand(
                brandName
            );

        }
    );



    /* TECLADO */

    card.addEventListener(
        "keydown",
        event => {

            if (
                event.key !== "Enter" &&
                event.key !== " "
            ) {

                return;

            }


            event.preventDefault();


            openBrand(
                brandName
            );

        }
    );


    return card;

}



/* ============================================================
   15. ABRIR MARCA
   ============================================================ */

function openBrand(
    brandName
) {

    if (!selectedCategory) {

        return;

    }


    const category =
        catalogData[
            selectedCategory
        ];


    if (
        !category.brands[
            brandName
        ]
    ) {

        return;

    }


    selectedBrand =
        brandName;


    productSearchTerm =
        "";


    if (productSearch) {

        productSearch.value =
            "";

    }


    showProducts();


    renderProducts();


    updateBreadcrumb();

}



/* ============================================================
   16. RENDERIZAR PRODUCTOS
   ============================================================ */

function renderProducts() {

    if (
        !selectedCategory ||
        !selectedBrand ||
        !productsGrid
    ) {

        return;

    }


    const category =
        catalogData[
            selectedCategory
        ];


    const brandData =
        category.brands[
            selectedBrand
        ];


    let products =
        brandData.products ||
        [];


    /*
        FILTRO DEL BUSCADOR
    */

    products =
        products.filter(
            product => {

                if (
                    productSearchTerm === ""
                ) {

                    return true;

                }


                const searchable =
                    normalizeProductText(
                        `
                        ${product.id}
                        ${product.name}
                        ${product.brand}
                        `
                    );


                return searchable.includes(
                    productSearchTerm
                );

            }
        );


    productsGrid.innerHTML =
        "";


    if (productsTitle) {

        productsTitle.textContent =
            selectedBrand;

    }


    if (productsCount) {

        productsCount.textContent =
            String(
                products.length
            );

    }


    if (productsEmpty) {

        productsEmpty.hidden =
            products.length !== 0;

    }


    products.forEach(
        (
            product,
            index
        ) => {

            const card =
                createProductCard(
                    product
                );


            productsGrid.appendChild(
                card
            );


            /*
                Entrada animada
            */

            setTimeout(
                () => {

                    card.classList.add(
                        "visible"
                    );

                },
                Math.min(
                    index * 60,
                    300
                )
            );

        }
    );

}



/* ============================================================
   17. CREAR TARJETA DE PRODUCTO
   ============================================================ */

function createProductCard(
    product
) {

    const card =
        document.createElement(
            "article"
        );


    card.className =
        "product-card";


    /*
        Mantenemos los data-* por compatibilidad
        con tu lógica anterior.
    */

    card.dataset.id =
        product.id;


    card.dataset.name =
        product.name;


    card.dataset.brand =
        product.brand;


    card.dataset.price =
        String(
            product.price
        );


    card.dataset.category =
        product.category;


    card.dataset.image =
        product.image;


    card.innerHTML = `

        <div class="product-image-wrapper">

            <img
                src="${escapeProductHTML(
                    product.image ||
                    "../imagenes/02.jpeg"
                )}"
                alt="${escapeProductHTML(
                    product.name
                )}"
                class="product-image"
                loading="lazy"
            >


            <span class="product-category-badge">

                ${escapeProductHTML(
                    catalogData[
                        product.category
                    ]?.name?.toUpperCase() ||
                    "PRODUCTO"
                )}

            </span>

        </div>



        <div class="product-content">


            <div class="product-info">


                <span class="product-code">

                    COD. ${escapeProductHTML(
                        product.id
                    )}

                </span>


                <h3>

                    ${escapeProductHTML(
                        product.name
                    )}

                </h3>


                <span class="product-brand">

                    ${escapeProductHTML(
                        product.brand
                    )}

                </span>


            </div>



            <div class="product-price-row">

                <div>

                    <span class="product-price-label">
                        PRECIO
                    </span>

                    <strong>

                        ${formatProductPrice(
                            product.price
                        )}

                    </strong>

                </div>

            </div>



            <button
                type="button"
                class="product-add-cart"
                data-id="${escapeProductHTML(
                    product.id
                )}"
            >

                <span>
                    Agregar al carrito
                </span>

                <span>
                    🛒
                </span>

            </button>


        </div>

    `;



    /* ========================================================
       FALLBACK DE IMAGEN
    ======================================================== */

    const image =
        card.querySelector(
            ".product-image"
        );


    if (image) {

        image.addEventListener(
            "error",
            () => {

                image.src =
                    "../imagenes/02.jpeg";

            },
            {
                once: true
            }
        );

    }



    /* ========================================================
       BOTÓN AGREGAR
    ======================================================== */

    const button =
        card.querySelector(
            ".product-add-cart"
        );


    if (button) {

        button.addEventListener(
            "click",
            event => {

                event.preventDefault();

                event.stopPropagation();


                addProductToCart(
                    product,
                    button
                );

            }
        );

    }


    return card;

}



/* ============================================================
   18. AGREGAR PRODUCTO AL CARRITO
   ============================================================ */

function addProductToCart(
    product,
    button
) {

    /*
        cart debe existir en app.js
    */

    if (
        typeof cart ===
        "undefined"
    ) {

        console.error(
            "No se encontró el carrito global de app.js"
        );


        return;

    }


    const existingProduct =
        cart.find(
            item =>
                String(item.id) ===
                String(product.id)
        );


    if (existingProduct) {

        existingProduct.quantity =
            Number(
                existingProduct.quantity || 0
            ) + 1;

    } else {

        cart.push({

            id:
                product.id,

            name:
                product.name,

            brand:
                product.brand,

            price:
                Number(
                    product.price
                ),

            category:
                product.category,

            image:
                product.image,

            quantity:
                1,

            type:
                "product"

        });

    }



    /* ========================================================
       GUARDAR CARRITO
    ======================================================== */

    if (
        typeof saveCart ===
        "function"
    ) {

        saveCart();

    }



    /* ========================================================
       ACTUALIZAR
    ======================================================== */

    renderProductsPageCart();


    animateProductButton(
        button
    );


    showProductToast(
        `${product.name} agregado al carrito.`
    );

}



/* ============================================================
   19. MOSTRAR CATEGORÍAS
   ============================================================ */

function showCategories() {

    selectedCategory =
        null;


    selectedBrand =
        null;


    productSearchTerm =
        "";


    if (categoriesView) {

        categoriesView.hidden =
            false;

    }


    if (brandsView) {

        brandsView.hidden =
            true;

    }


    if (productsView) {

        productsView.hidden =
            true;

    }


    updateBreadcrumb();

}



/* ============================================================
   20. MOSTRAR MARCAS
   ============================================================ */

function showBrands() {

    if (categoriesView) {

        categoriesView.hidden =
            true;

    }


    if (brandsView) {

        brandsView.hidden =
            false;

    }


    if (productsView) {

        productsView.hidden =
            true;

    }


    scrollToCatalog();

}



/* ============================================================
   21. MOSTRAR PRODUCTOS
   ============================================================ */

function showProducts() {

    if (categoriesView) {

        categoriesView.hidden =
            true;

    }


    if (brandsView) {

        brandsView.hidden =
            true;

    }


    if (productsView) {

        productsView.hidden =
            false;

    }


    scrollToCatalog();

}



/* ============================================================
   22. BOTÓN VOLVER A CATEGORÍAS
   ============================================================ */

if (backToCategories) {

    backToCategories.addEventListener(
        "click",
        () => {

            showCategories();


            scrollToCatalog();

        }
    );

}



/* ============================================================
   23. BOTÓN VOLVER A MARCAS
   ============================================================ */

if (backToBrands) {

    backToBrands.addEventListener(
        "click",
        () => {

            selectedBrand =
                null;


            productSearchTerm =
                "";


            if (productSearch) {

                productSearch.value =
                    "";

            }


            showBrands();


            renderBrands();


            updateBreadcrumb();

        }
    );

}



/* ============================================================
   24. BREADCRUMB PRODUCTOS
   ============================================================ */

if (breadcrumbCategories) {

    breadcrumbCategories.addEventListener(
        "click",
        () => {

            showCategories();


            scrollToCatalog();

        }
    );

}



/* ============================================================
   25. BREADCRUMB CATEGORÍA
   ============================================================ */

if (breadcrumbCategory) {

    breadcrumbCategory.addEventListener(
        "click",
        () => {

            if (!selectedCategory) {

                return;

            }


            selectedBrand =
                null;


            showBrands();


            renderBrands();


            updateBreadcrumb();

        }
    );

}



/* ============================================================
   26. ACTUALIZAR BREADCRUMB
   ============================================================ */

function updateBreadcrumb() {

    const hasCategory =
        Boolean(
            selectedCategory
        );


    const hasBrand =
        Boolean(
            selectedBrand
        );



    /* PRODUCTOS */

    if (breadcrumbCategories) {

        breadcrumbCategories.classList.toggle(
            "active",
            !hasCategory
        );

    }



    /* SEPARADOR CATEGORÍA */

    if (breadcrumbSeparatorCategory) {

        breadcrumbSeparatorCategory.hidden =
            !hasCategory;

    }



    /* CATEGORÍA */

    if (breadcrumbCategory) {

        breadcrumbCategory.hidden =
            !hasCategory;


        breadcrumbCategory.classList.toggle(
            "active",
            hasCategory &&
            !hasBrand
        );


        if (hasCategory) {

            breadcrumbCategory.textContent =
                catalogData[
                    selectedCategory
                ].name;

        }

    }



    /* SEPARADOR MARCA */

    if (breadcrumbSeparatorBrand) {

        breadcrumbSeparatorBrand.hidden =
            !hasBrand;

    }



    /* MARCA */

    if (breadcrumbBrand) {

        breadcrumbBrand.hidden =
            !hasBrand;


        if (hasBrand) {

            breadcrumbBrand.textContent =
                selectedBrand;

        }

    }

}



/* ============================================================
   27. BUSCADOR
   ============================================================ */

if (productSearch) {

    productSearch.addEventListener(
        "input",
        () => {

            productSearchTerm =
                normalizeProductText(
                    productSearch.value
                );


            renderProducts();

        }
    );

}



/* ============================================================
   28. LIMPIAR BUSCADOR
   ============================================================ */

if (clearProductSearch) {

    clearProductSearch.addEventListener(
        "click",
        () => {

            productSearchTerm =
                "";


            if (productSearch) {

                productSearch.value =
                    "";


                productSearch.focus();

            }


            renderProducts();

        }
    );

}



/* ============================================================
   29. RESTABLECER PRODUCTOS
   ============================================================ */

if (resetProducts) {

    resetProducts.addEventListener(
        "click",
        () => {

            productSearchTerm =
                "";


            if (productSearch) {

                productSearch.value =
                    "";

            }


            renderProducts();

        }
    );

}



/* ============================================================
   30. SCROLL AL CATÁLOGO
   ============================================================ */

function scrollToCatalog() {

    const catalog =
        document.querySelector(
            ".products-section"
        );


    if (!catalog) {

        return;

    }


    /*
        Delay pequeño para permitir que la
        nueva vista se muestre antes del scroll.
    */

    requestAnimationFrame(
        () => {

            catalog.scrollIntoView({

                behavior:
                    "smooth",

                block:
                    "start"

            });

        }
    );

}



/* ============================================================
   31. NORMALIZAR TEXTO
   ============================================================ */

function normalizeProductText(
    value
) {

    return String(
        value || ""
    )

        .toLowerCase()

        .normalize(
            "NFD"
        )

        .replace(
            /[\u0300-\u036f]/g,
            ""
        )

        .trim();

}



/* ============================================================
   32. ANIMACIÓN DEL BOTÓN
   ============================================================ */

function animateProductButton(
    button
) {

    if (!button) {

        return;

    }


    const originalHTML =
        button.innerHTML;


    button.innerHTML = `

        <span>
            Agregado
        </span>

        <span>
            ✓
        </span>

    `;


    button.classList.add(
        "added"
    );


    button.disabled =
        true;


    setTimeout(
        () => {

            button.innerHTML =
                originalHTML;


            button.classList.remove(
                "added"
            );


            button.disabled =
                false;

        },
        900
    );

}



/* ============================================================
   33. RENDER DEL CARRITO
   ============================================================ */

function renderProductsPageCart() {

    if (
        typeof cart ===
        "undefined" ||
        !productsCartItems ||
        !productsCartCount ||
        !productsCartTotal
    ) {

        return;

    }


    productsCartItems.innerHTML =
        "";



    /* ========================================================
       VACÍO
    ======================================================== */

    if (
        cart.length === 0
    ) {

        productsCartItems.innerHTML = `

            <div class="empty-cart">

                <div class="empty-cart-icon">
                    🛒
                </div>


                <h3>
                    Tu pedido está vacío
                </h3>


                <p>

                    Los productos que agregues
                    aparecerán aquí.

                </p>

            </div>

        `;


        productsCartCount.textContent =
            "0";


        productsCartTotal.textContent =
            formatProductPrice(
                0
            );


        if (productsCartCheckout) {

            productsCartCheckout.disabled =
                true;

        }


        return;

    }



    /* ========================================================
       ITEMS
    ======================================================== */

    cart.forEach(
        item => {

            const article =
                document.createElement(
                    "article"
                );


            article.className =
                "cart-item";


            const imagePath =
                getCartImage(
                    item
                );


            article.innerHTML = `

                <div class="cart-item-image">

                    <img
                        src="${escapeProductHTML(
                            imagePath
                        )}"
                        alt="${escapeProductHTML(
                            item.name
                        )}"
                    >

                </div>


                <div class="cart-item-info">


                    <span class="cart-item-brand">

                        ${escapeProductHTML(
                            item.brand ||
                            "Estación 180"
                        )}

                    </span>


                    <h4>

                        ${escapeProductHTML(
                            item.name
                        )}

                    </h4>


                    <strong>

                        ${formatProductPrice(
                            item.price
                        )}

                    </strong>


                    <div class="cart-item-controls">


                        <button
                            type="button"
                            class="product-cart-minus"
                            data-cart-id="${escapeProductHTML(
                                item.id
                            )}"
                            aria-label="Disminuir"
                        >
                            −
                        </button>


                        <span>

                            ${Number(
                                item.quantity || 1
                            )}

                        </span>


                        <button
                            type="button"
                            class="product-cart-plus"
                            data-cart-id="${escapeProductHTML(
                                item.id
                            )}"
                            aria-label="Aumentar"
                        >
                            +
                        </button>


                        <button
                            type="button"
                            class="product-cart-remove"
                            data-cart-id="${escapeProductHTML(
                                item.id
                            )}"
                            aria-label="Eliminar"
                        >
                            ✕
                        </button>


                    </div>


                </div>

            `;


            const image =
                article.querySelector(
                    "img"
                );


            if (image) {

                image.addEventListener(
                    "error",
                    () => {

                        image.src =
                            "../imagenes/logo.jpeg";

                    },
                    {
                        once: true
                    }
                );

            }


            productsCartItems.appendChild(
                article
            );

        }
    );


    bindCartControls();


    updateCartSummary();

}



/* ============================================================
   34. RUTA IMAGEN CARRITO
   ============================================================ */

function getCartImage(
    item
) {

    if (item.image) {

        return item.image;

    }


    if (
        item.type ===
        "product"
    ) {

        return "../imagenes/02.jpeg";

    }


    return "../imagenes/logo.jpeg";

}



/* ============================================================
   35. CONTROLES CARRITO
   ============================================================ */

function bindCartControls() {


    /* MÁS */

    document
        .querySelectorAll(
            ".product-cart-plus"
        )
        .forEach(
            button => {

                button.addEventListener(
                    "click",
                    () => {

                        changeCartQuantity(
                            button.dataset.cartId,
                            1
                        );

                    }
                );

            }
        );



    /* MENOS */

    document
        .querySelectorAll(
            ".product-cart-minus"
        )
        .forEach(
            button => {

                button.addEventListener(
                    "click",
                    () => {

                        changeCartQuantity(
                            button.dataset.cartId,
                            -1
                        );

                    }
                );

            }
        );



    /* ELIMINAR */

    document
        .querySelectorAll(
            ".product-cart-remove"
        )
        .forEach(
            button => {

                button.addEventListener(
                    "click",
                    () => {

                        removeCartItem(
                            button.dataset.cartId
                        );

                    }
                );

            }
        );

}



/* ============================================================
   36. CAMBIAR CANTIDAD
   ============================================================ */

function changeCartQuantity(
    id,
    change
) {

    if (
        typeof cart ===
        "undefined"
    ) {

        return;

    }


    const item =
        cart.find(
            product =>
                String(product.id) ===
                String(id)
        );


    if (!item) {

        return;

    }


    item.quantity =
        Number(
            item.quantity || 0
        ) + change;


    if (
        item.quantity <= 0
    ) {

        removeCartItem(
            id
        );


        return;

    }


    if (
        typeof saveCart ===
        "function"
    ) {

        saveCart();

    }


    renderProductsPageCart();

}



/* ============================================================
   37. ELIMINAR DEL CARRITO
   ============================================================ */
function removeCartItem(id) {

    if (
        typeof cart ===
        "undefined"
    ) {

        return;

    }


    const index =
        cart.findIndex(
            item =>
                String(item.id) ===
                String(id)
        );


    if (
        index === -1
    ) {

        return;

    }


    /* ELIMINAR SIN REEMPLAZAR EL ARRAY */

    cart.splice(
        index,
        1
    );


    /* GUARDAR */

    if (
        typeof saveCart ===
        "function"
    ) {

        saveCart();

    }


    /* ACTUALIZAR CARRITO */

    renderProductsPageCart();

}


/* ============================================================
   38. ACTUALIZAR CARRITO
   ============================================================ */

function updateCartSummary() {

    if (
        typeof cart ===
        "undefined"
    ) {

        return;

    }


    const quantity =
        cart.reduce(
            (
                total,
                item
            ) => {

                return (
                    total +
                    Number(
                        item.quantity || 0
                    )
                );

            },
            0
        );


    const total =
        cart.reduce(
            (
                accumulator,
                item
            ) => {

                return (
                    accumulator +
                    (
                        Number(
                            item.price || 0
                        ) *
                        Number(
                            item.quantity || 0
                        )
                    )
                );

            },
            0
        );


    if (productsCartCount) {

        productsCartCount.textContent =
            String(
                quantity
            );

    }


    if (productsCartTotal) {

        productsCartTotal.textContent =
            formatProductPrice(
                total
            );

    }


    if (productsCartCheckout) {

        productsCartCheckout.disabled =
            quantity === 0;

    }

}



/* ============================================================
   39. PRECIO
   ============================================================ */

function formatProductPrice(
    value
) {

    return new Intl.NumberFormat(

        "es-PE",

        {

            style:
                "currency",

            currency:
                "PEN",

            minimumFractionDigits:
                2

        }

    ).format(
        Number(value) || 0
    );

}



/* ============================================================
   40. ESCAPAR HTML
   ============================================================ */

function escapeProductHTML(
    value
) {

    return String(
        value ?? ""
    )

        .replaceAll(
            "&",
            "&amp;"
        )

        .replaceAll(
            "<",
            "&lt;"
        )

        .replaceAll(
            ">",
            "&gt;"
        )

        .replaceAll(
            '"',
            "&quot;"
        )

        .replaceAll(
            "'",
            "&#039;"
        );

}



/* ============================================================
   41. TOAST
   ============================================================ */

let productToastTimer;


function showProductToast(
    message
) {

    if (!productsToast) {

        return;

    }


    clearTimeout(
        productToastTimer
    );


    productsToast.textContent =
        message;


    productsToast.classList.add(
        "show"
    );


    productToastTimer =
        setTimeout(
            () => {

                productsToast.classList.remove(
                    "show"
                );

            },
            2200
        );

}