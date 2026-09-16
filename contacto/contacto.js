/* ============================================================
   ESTACIÓN 180
   CONTACTO.JS
   ============================================================ */


/* ============================================================
   01. CONFIGURACIÓN DE CONTACTO
   ============================================================ */

const CONTACT_CONFIG = {

    whatsappNumber:
        "51999014976",

    whatsappMessage:
        "Hola Estación 180 👋 Quisiera realizar una consulta.",

    cartStorageKey:
        "estacion180-cart"

};



/* ============================================================
   02. ELEMENTOS DE LA PÁGINA
   ============================================================ */

const contactWhatsappHero =
    document.getElementById(
        "contactWhatsappHero"
    );


const contactWhatsappCard =
    document.getElementById(
        "contactWhatsappCard"
    );


const contactWhatsappFinal =
    document.getElementById(
        "contactWhatsappFinal"
    );


const contactCartButton =
    document.getElementById(
        "cartButton"
    );


const contactCartItems =
    document.getElementById(
        "cartItems"
    );



/* ============================================================
   03. INICIALIZACIÓN
   ============================================================ */

document.addEventListener(
    "DOMContentLoaded",
    () => {

        initializeContactPage();

    }
);



function initializeContactPage() {

    /*
        Marcar Contacto como activo.
    */

    setContactActiveNavigation();


    /*
        Animaciones.
    */

    initializeContactAnimations();


    /*
        Sincronizar carrito.
    */

    synchronizeContactCart();


    /*
        Corregir imágenes que app.js
        haya colocado en el carrito.
    */

    fixContactCartImages();


    /*
        Cada vez que se abre el carrito,
        volvemos a revisar las imágenes.
    */

    initializeContactCartImageFix();

}



/* ============================================================
   04. ABRIR WHATSAPP
   ============================================================ */

function openContactWhatsApp(
    message = CONTACT_CONFIG.whatsappMessage
) {

    const url =
        `https://wa.me/${CONTACT_CONFIG.whatsappNumber}` +
        `?text=${encodeURIComponent(message)}`;


    window.open(

        url,

        "_blank",

        "noopener,noreferrer"

    );

}



/* ============================================================
   05. BOTÓN WHATSAPP DEL HERO
   ============================================================ */

if (contactWhatsappHero) {

    contactWhatsappHero.addEventListener(
        "click",
        () => {

            openContactWhatsApp(

                "Hola Estación 180 👋 Quisiera realizar una consulta."

            );

        }
    );

}



/* ============================================================
   06. BOTÓN WHATSAPP DE LA TARJETA
   ============================================================ */

if (contactWhatsappCard) {

    contactWhatsappCard.addEventListener(
        "click",
        () => {

            openContactWhatsApp(

                "Hola Estación 180 👋 Quisiera consultar sobre sus productos y el servicio de delivery."

            );

        }
    );

}



/* ============================================================
   07. BOTÓN WHATSAPP FINAL
   ============================================================ */

if (contactWhatsappFinal) {

    contactWhatsappFinal.addEventListener(
        "click",
        () => {

            openContactWhatsApp(

                "Hola Estación 180 👋 Quisiera realizar un pedido."

            );

        }
    );

}



/* ============================================================
   08. MARCAR CONTACTO COMO PÁGINA ACTIVA
   ============================================================ */

function setContactActiveNavigation() {

    const links =
        document.querySelectorAll(
            "[data-page]"
        );


    links.forEach(
        link => {

            if (
                link.dataset.page ===
                "contacto"
            ) {

                link.classList.add(
                    "active"
                );

            } else {

                link.classList.remove(
                    "active"
                );

            }

        }
    );

}



/* ============================================================
   09. SINCRONIZAR CARRITO CON APP.JS
   ============================================================ */

function synchronizeContactCart() {

    /*
        app.js contiene el carrito global.

        Volvemos a cargarlo desde localStorage
        para asegurarnos de tener la versión
        más reciente.
    */

    if (
        typeof loadCart ===
        "function"
    ) {

        try {

            cart =
                loadCart();

        } catch (error) {

            console.error(
                "Error sincronizando carrito:",
                error
            );

        }

    }


    /*
        Volvemos a renderizar el carrito
        utilizando app.js.
    */

    if (
        typeof renderGlobalCart ===
        "function"
    ) {

        renderGlobalCart();

    }

}



/* ============================================================
   10. NORMALIZAR RUTA DE IMAGEN
   ============================================================ */

function normalizeContactCartImage(
    image
) {

    let path =
        String(
            image || ""
        ).trim();


    if (!path) {

        return "../imagenes/logo.jpeg";

    }


    /*
        Eliminar ../ iniciales.

        Ejemplo:

        ../imagenes/1011.png

        se convierte en:

        imagenes/1011.png
    */

    path =
        path.replace(
            /^(\.\.\/)+/,
            ""
        );


    /*
        Eliminar / inicial.
    */

    path =
        path.replace(
            /^\/+/,
            ""
        );


    /*
        IMÁGENES DEL CATÁLOGO

        imagenes/1011.png
        →
        ../imagenes/1011.png
    */

    if (
        path.startsWith(
            "imagenes/"
        )
    ) {

        return "../" + path;

    }


    /*
        Compatibilidad por si alguna imagen
        antigua está guardada como:

        productos/1011.png
    */

    if (
        path.startsWith(
            "productos/"
        )
    ) {

        return "../" + path;

    }


    /*
        Si solamente tenemos el archivo:

        1011.png

        asumimos que está en /imagenes/.
    */

    return "../imagenes/" + path;

}



/* ============================================================
   11. OBTENER CARRITO GUARDADO
   ============================================================ */

function getContactStoredCart() {

    try {

        const stored =
            localStorage.getItem(
                CONTACT_CONFIG.cartStorageKey
            );


        if (!stored) {

            return [];

        }


        const parsed =
            JSON.parse(
                stored
            );


        return Array.isArray(parsed)
            ? parsed
            : [];

    } catch (error) {

        console.error(
            "Error leyendo carrito:",
            error
        );


        return [];

    }

}



/* ============================================================
   12. CORREGIR IMÁGENES DEL CARRITO
   ============================================================ */

function fixContactCartImages() {

    if (!contactCartItems) {

        return;

    }


    const storedCart =
        getContactStoredCart();


    if (
        storedCart.length === 0
    ) {

        return;

    }


    const cartArticles =
        contactCartItems.querySelectorAll(
            ".cart-item"
        );


    cartArticles.forEach(
        (
            article,
            index
        ) => {

            const imageElement =
                article.querySelector(
                    ".cart-item-image img"
                );


            if (!imageElement) {

                return;

            }


            const item =
                storedCart[index];


            if (!item) {

                return;

            }


            const correctImage =
                normalizeContactCartImage(
                    item.image
                );


            imageElement.src =
                correctImage;


            /*
                Si incluso después de corregir
                la ruta la imagen no existe,
                mostramos el logo.
            */

            imageElement.onerror =
                function () {

                    this.onerror =
                        null;


                    this.src =
                        "../imagenes/logo.jpeg";

                };

        }
    );

}



/* ============================================================
   13. CORREGIR IMÁGENES AL ABRIR EL CARRITO
   ============================================================ */

function initializeContactCartImageFix() {

    if (!contactCartButton) {

        return;

    }


    contactCartButton.addEventListener(
        "click",
        () => {

            /*
                app.js puede renderizar el carrito
                durante este mismo click.

                Esperamos al siguiente ciclo para
                corregir las imágenes después.
            */

            requestAnimationFrame(
                () => {

                    fixContactCartImages();

                }
            );

        }
    );

}



/* ============================================================
   14. OBSERVAR CAMBIOS DEL CARRITO
   ============================================================ */

/*
    Esto también corrige las imágenes cuando
    app.js vuelve a renderizar el carrito por:

    + aumentar cantidad
    - disminuir cantidad
    x eliminar producto
*/

if (
    contactCartItems &&
    "MutationObserver" in window
) {

    const contactCartObserver =
        new MutationObserver(
            () => {

                fixContactCartImages();

            }
        );


    contactCartObserver.observe(

        contactCartItems,

        {

            childList:
                true,

            subtree:
                true

        }

    );

}



/* ============================================================
   15. ANIMACIONES DE ENTRADA
   ============================================================ */

function initializeContactAnimations() {

    const animatedElements =
        document.querySelectorAll(

            ".contact-hero-content, " +
            ".contact-card, " +
            ".contact-help-box, " +
            ".contact-final-card"

        );


    if (
        animatedElements.length === 0
    ) {

        return;

    }



    /* ========================================================
       RESPETAR REDUCCIÓN DE MOVIMIENTO
    ======================================================== */

    const reducedMotion =
        window.matchMedia(
            "(prefers-reduced-motion: reduce)"
        ).matches;


    if (reducedMotion) {

        animatedElements.forEach(
            element => {

                element.classList.add(
                    "contact-visible"
                );

            }
        );


        return;

    }



    /* ========================================================
       FALLBACK NAVEGADORES ANTIGUOS
    ======================================================== */

    if (
        !(
            "IntersectionObserver"
            in window
        )
    ) {

        animatedElements.forEach(
            element => {

                element.classList.add(
                    "contact-visible"
                );

            }
        );


        return;

    }



    /* ========================================================
       OBSERVER
    ======================================================== */

    const observer =
        new IntersectionObserver(

            entries => {

                entries.forEach(
                    entry => {

                        if (
                            !entry.isIntersecting
                        ) {

                            return;

                        }


                        entry.target.classList.add(
                            "contact-visible"
                        );


                        observer.unobserve(
                            entry.target
                        );

                    }
                );

            },

            {

                threshold:
                    0.12,

                rootMargin:
                    "0px 0px -40px 0px"

            }

        );


    animatedElements.forEach(
        element => {

            observer.observe(
                element
            );

        }
    );

}



/* ============================================================
   16. ACTUALIZAR AL VOLVER A CONTACTO
   ============================================================ */

window.addEventListener(
    "pageshow",
    () => {

        setContactActiveNavigation();


        synchronizeContactCart();


        requestAnimationFrame(
            () => {

                fixContactCartImages();

            }
        );

    }
);



/* ============================================================
   17. SINCRONIZACIÓN ENTRE PESTAÑAS
   ============================================================ */

window.addEventListener(
    "storage",
    event => {

        if (
            event.key !==
            CONTACT_CONFIG.cartStorageKey
        ) {

            return;

        }


        synchronizeContactCart();


        requestAnimationFrame(
            () => {

                fixContactCartImages();

            }
        );

    }
);