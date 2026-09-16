/* ============================================================
   ESTACIÓN 180
   PEDIR.JS
   PÁGINA: CÓMO PEDIR
   ============================================================ */


/* ============================================================
   01. ELEMENTOS DE LA PÁGINA
   ============================================================ */

const openCartFromSteps =
    document.getElementById(
        "openCartFromSteps"
    );


const orderWhatsappButton =
    document.getElementById(
        "orderWhatsappButton"
    );


const orderStepCards =
    document.querySelectorAll(
        ".order-step-card"
    );


const orderInfoCards =
    document.querySelectorAll(
        ".order-info-card"
    );


const orderFlowBox =
    document.querySelector(
        ".order-flow-box"
    );


const orderFinalCard =
    document.querySelector(
        ".order-final-card"
    );



/* ============================================================
   02. INICIALIZACIÓN
   ============================================================ */

document.addEventListener(
    "DOMContentLoaded",
    () => {

        initializeOrderPage();

    }
);



function initializeOrderPage() {

    /*
        Animaciones específicas
        de la página Cómo pedir.
    */

    initializeOrderAnimations();


    /*
        Marcar correctamente
        "Cómo pedir" como activo.
    */

    setOrderActiveNavigation();

}



/* ============================================================
   03. ABRIR CARRITO DESDE PASO 02
   ============================================================ */

/*
    app.js ya contiene:

    - loadCart()
    - renderGlobalCart()
    - openCart()

    Por lo tanto, NO duplicamos
    ninguna de esas funciones.
*/

if (openCartFromSteps) {

    openCartFromSteps.addEventListener(
        "click",
        event => {

            event.preventDefault();


            /*
                Recuperar la versión más reciente
                del carrito antes de abrirlo.
            */

            if (
                typeof loadCart ===
                "function"
            ) {

                cart =
                    loadCart();

            }


            if (
                typeof renderGlobalCart ===
                "function"
            ) {

                renderGlobalCart();

            }


            if (
                typeof openCart ===
                "function"
            ) {

                openCart();

            }

        }
    );

}



/* ============================================================
   04. BOTÓN WHATSAPP DEL CTA FINAL
   ============================================================ */

if (orderWhatsappButton) {

    orderWhatsappButton.addEventListener(
        "click",
        () => {

            const message =
                "Hola Estación 180 👋 " +
                "Quisiera realizar un pedido. " +
                "¿Podrían ayudarme?";


            /*
                openWhatsApp() ya existe
                globalmente en app.js.
            */

            if (
                typeof openWhatsApp ===
                "function"
            ) {

                openWhatsApp(
                    message
                );


                return;

            }



            /*
                Fallback por si app.js
                no estuviera disponible.
            */

            const whatsappNumber =
                "51999014976";


            const url =
                `https://wa.me/${whatsappNumber}` +
                `?text=${encodeURIComponent(message)}`;


            window.open(
                url,
                "_blank",
                "noopener,noreferrer"
            );

        }
    );

}



/* ============================================================
   05. MARCAR "CÓMO PEDIR" COMO ACTIVO
   ============================================================ */

function setOrderActiveNavigation() {

    const links =
        document.querySelectorAll(
            "[data-page]"
        );


    links.forEach(
        link => {

            if (
                link.dataset.page ===
                "como-pedir"
            ) {

                link.classList.add(
                    "active"
                );

                return;

            }


            /*
                Solo eliminamos active
                de los links de navegación.

                No afecta otros elementos.
            */

            link.classList.remove(
                "active"
            );

        }
    );

}



/* ============================================================
   06. ANIMACIONES
   ============================================================ */

function initializeOrderAnimations() {

    const animatedElements = [

        ...orderStepCards,

        ...orderInfoCards,

        orderFlowBox,

        orderFinalCard

    ].filter(Boolean);



    if (
        animatedElements.length ===
        0
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
                    "visible"
                );

            }
        );


        return;

    }



    /* ========================================================
       NAVEGADORES SIN INTERSECTION OBSERVER
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
                    "visible"
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
                            "visible"
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
                    "0px 0px -35px 0px"

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
   07. SCROLL SUAVE PARA LINKS INTERNOS
   ============================================================ */

document
    .querySelectorAll(
        'a[href^="#"]'
    )
    .forEach(
        link => {

            link.addEventListener(
                "click",
                event => {

                    const href =
                        link.getAttribute(
                            "href"
                        );


                    /*
                        Ignorar simplemente href="#"
                    */

                    if (
                        !href ||
                        href === "#"
                    ) {

                        return;

                    }


                    const target =
                        document.querySelector(
                            href
                        );


                    if (!target) {

                        return;

                    }


                    event.preventDefault();


                    target.scrollIntoView({

                        behavior:
                            "smooth",

                        block:
                            "start"

                    });

                }
            );

        }
    );



/* ============================================================
   08. ACTUALIZAR CARRITO AL VOLVER A LA PÁGINA
   ============================================================ */

/*
    app.js ya hace esto globalmente.

    Aquí solamente aseguramos que la página
    Cómo pedir refleje el carrito actualizado
    cuando el navegador restaura la página
    desde caché.
*/

window.addEventListener(
    "pageshow",
    () => {

        if (
            typeof loadCart ===
            "function"
        ) {

            cart =
                loadCart();

        }


        if (
            typeof renderGlobalCart ===
            "function"
        ) {

            renderGlobalCart();

        }

    }
);



/* ============================================================
   09. SINCRONIZACIÓN DEL CARRITO ENTRE PESTAÑAS
   ============================================================ */

window.addEventListener(
    "storage",
    event => {

        if (
            event.key !==
            "estacion180-cart"
        ) {

            return;

        }


        if (
            typeof loadCart ===
            "function"
        ) {

            cart =
                loadCart();

        }


        if (
            typeof renderGlobalCart ===
            "function"
        ) {

            renderGlobalCart();

        }

    }
);