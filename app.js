/* ============================================================
   ESTACIÓN 180
   APP.JS
   ============================================================ */


/* ============================================================
   01. CONFIGURACIÓN
   ============================================================ */

const CONFIG = {

    whatsappNumber:
        "51999014976",

    whatsappMessage:
        "Hola Estación 180 👋 Quisiera realizar una consulta o pedido."

};



/* ============================================================
   02. ELEMENTOS GENERALES
   ============================================================ */

const body =
    document.body;


const header =
    document.getElementById(
        "header"
    );


/* ============================================================
   MENÚ
   ============================================================ */

const mobileMenuButton =
    document.getElementById(
        "mobileMenuButton"
    );


const mobileMenu =
    document.getElementById(
        "mobileMenu"
    );


const navigationLinks =
    document.querySelectorAll(
        "[data-page]"
    );



/* ============================================================
   HERO
   ============================================================ */

const btnProductos =
    document.getElementById(
        "btnProductos"
    );



/* ============================================================
   TARJETAS HOME
   ============================================================ */

const homeMenuCards =
    document.querySelectorAll(
        ".home-menu-card"
    );



/* ============================================================
   CARRITO GLOBAL
   ============================================================ */

const cartButton =
    document.getElementById(
        "cartButton"
    );


const cartSidebar =
    document.getElementById(
        "cartSidebar"
    );


const cartOverlay =
    document.getElementById(
        "cartOverlay"
    );


const closeCart =
    document.getElementById(
        "closeCart"
    );


const cartCount =
    document.getElementById(
        "cartCount"
    );


const cartItems =
    document.getElementById(
        "cartItems"
    );


const cartTotal =
    document.getElementById(
        "cartTotal"
    );


const cartCheckout =
    document.getElementById(
        "cartCheckout"
    );



/* ============================================================
   WHATSAPP
   ============================================================ */

const floatingWhatsapp =
    document.getElementById(
        "floatingWhatsapp"
    );



/* ============================================================
   MODAL EDAD
   ============================================================ */

const ageModal =
    document.getElementById(
        "ageModal"
    );


const confirmAge =
    document.getElementById(
        "confirmAge"
    );


const denyAge =
    document.getElementById(
        "denyAge"
    );



/* ============================================================
   TOAST
   ============================================================ */

const toast =
    document.getElementById(
        "toast"
    );



/* ============================================================
   03. CARRITO
   ============================================================ */

/*
    IMPORTANTE:

    Se mantiene como "let cart" porque productos.js
    y promociones.js utilizan este mismo carrito.

    No cambiar a const.
*/

let cart =
    loadCart();



/* ============================================================
   04. INICIALIZACIÓN
   ============================================================ */

document.addEventListener(
    "DOMContentLoaded",
    () => {

        initializeAgeValidation();


        cart =
            loadCart();


        renderGlobalCart();


        initializeAnimations();

    }
);



/* ============================================================
   05. VALIDACIÓN DE EDAD
   ============================================================ */

function initializeAgeValidation() {

    const ageAccepted =
        sessionStorage.getItem(
            "estacion180-age-confirmed"
        );


    if (
        ageAccepted === "true"
    ) {

        hideAgeModal();

        return;

    }


    showAgeModal();

}



/* ============================================================
   MOSTRAR MODAL
   ============================================================ */

function showAgeModal() {

    if (!ageModal) {

        return;

    }


    ageModal.classList.remove(
        "hidden"
    );


    body.classList.add(
        "modal-open"
    );

}



/* ============================================================
   OCULTAR MODAL
   ============================================================ */

function hideAgeModal() {

    if (!ageModal) {

        return;

    }


    ageModal.classList.add(
        "hidden"
    );


    body.classList.remove(
        "modal-open"
    );

}



/* ============================================================
   CONFIRMAR EDAD
   ============================================================ */

if (confirmAge) {

    confirmAge.addEventListener(
        "click",
        () => {

            sessionStorage.setItem(
                "estacion180-age-confirmed",
                "true"
            );


            hideAgeModal();

        }
    );

}



/* ============================================================
   MENOR DE EDAD
   ============================================================ */

if (denyAge) {

    denyAge.addEventListener(
        "click",
        () => {

            if (!ageModal) {

                return;

            }


            const ageBox =
                ageModal.querySelector(
                    ".age-box"
                );


            if (!ageBox) {

                return;

            }


            ageBox.innerHTML = `

                <div class="age-badge">
                    +18
                </div>


                <h2>
                    Acceso no disponible
                </h2>


                <p>

                    Estación 180 comercializa bebidas alcohólicas
                    exclusivamente a personas mayores de 18 años.

                </p>


                <small class="age-warning">

                    Gracias por tu comprensión.

                </small>

            `;

        }
    );

}



/* ============================================================
   06. MENÚ MÓVIL
   ============================================================ */

if (
    mobileMenuButton &&
    mobileMenu
) {

    mobileMenuButton.addEventListener(
        "click",
        () => {

            const isOpen =
                mobileMenu.classList.toggle(
                    "open"
                );


            mobileMenuButton.classList.toggle(
                "active",
                isOpen
            );


            mobileMenuButton.setAttribute(
                "aria-expanded",
                String(
                    isOpen
                )
            );

        }
    );

}



/* ============================================================
   CERRAR MENÚ
   ============================================================ */

function closeMobileMenu() {

    if (
        !mobileMenu ||
        !mobileMenuButton
    ) {

        return;

    }


    mobileMenu.classList.remove(
        "open"
    );


    mobileMenuButton.classList.remove(
        "active"
    );


    mobileMenuButton.setAttribute(
        "aria-expanded",
        "false"
    );

}



/* ============================================================
   07. NAVEGACIÓN
   ============================================================ */

navigationLinks.forEach(
    link => {

        link.addEventListener(
            "click",
            event => {

                const page =
                    link.dataset.page;


                const href =
                    link.getAttribute(
                        "href"
                    );


                closeMobileMenu();


                /*
                    Si existe una URL real,
                    dejamos trabajar al navegador.
                */

                if (
                    href &&
                    href !== "#" &&
                    !href.startsWith("#")
                ) {

                    return;

                }


                event.preventDefault();


                handleNavigation(
                    page
                );

            }
        );

    }
);



/* ============================================================
   MANEJAR NAVEGACIÓN
   ============================================================ */

function handleNavigation(
    page
) {

    switch (page) {


        case "inicio":

            window.scrollTo({

                top:
                    0,

                behavior:
                    "smooth"

            });

            break;



        case "productos":

            window.location.href =
                "productos/productos.html";

            break;



        case "promociones":

            window.location.href =
                "promociones/promociones.html";

            break;



        case "como-pedir":

            if (
                window.location.pathname
                    .toLowerCase()
                    .includes("/como-pedir/")
            ) {

                window.scrollTo({
                    top: 0,
                    behavior: "smooth"
                });

            } else {

                window.location.href =
                    "como-pedir/pedir.html";

            }

            break;



        case "contacto":

            if (
                window.location.pathname
                    .toLowerCase()
                    .includes("/contacto/")
            ) {

                window.scrollTo({

                    top: 0,

                    behavior: "smooth"

                });

            } else {

                window.location.href =
                    "contacto/contacto.html";

            }

            break;



        default:

            break;

    }

}



/* ============================================================
   08. BOTÓN PRINCIPAL HOME
   ============================================================ */

if (btnProductos) {

    btnProductos.addEventListener(
        "click",
        () => {

            const menuSection =
                document.querySelector(
                    ".home-menu"
                );


            if (!menuSection) {

                return;

            }


            menuSection.scrollIntoView({

                behavior:
                    "smooth",

                block:
                    "start"

            });

        }
    );

}



/* ============================================================
   09. TARJETAS HOME
   ============================================================ */

homeMenuCards.forEach(
    card => {

        card.addEventListener(
            "click",
            () => {

                const action =
                    card.dataset.action;


                if (!action) {

                    return;

                }


                handleNavigation(
                    action
                );

            }
        );

    }
);



/* ============================================================
   10. WHATSAPP
   ============================================================ */

if (floatingWhatsapp) {

    floatingWhatsapp.addEventListener(
        "click",
        () => {

            openWhatsApp(
                CONFIG.whatsappMessage
            );

        }
    );

}



/* ============================================================
   ABRIR WHATSAPP
   ============================================================ */

function openWhatsApp(
    message
) {

    const url =
        `https://wa.me/${CONFIG.whatsappNumber}` +
        `?text=${encodeURIComponent(message)}`;


    window.open(

        url,

        "_blank",

        "noopener,noreferrer"

    );

}



/* ============================================================
   11. HEADER AL HACER SCROLL
   ============================================================ */

window.addEventListener(
    "scroll",
    () => {

        if (!header) {

            return;

        }


        header.classList.toggle(

            "header-scrolled",

            window.scrollY > 20

        );

    }
);



/* ============================================================
   12. ABRIR CARRITO
   ============================================================ */

if (cartButton) {

    cartButton.addEventListener(
        "click",
        () => {

            /*
                Siempre recuperamos la versión más reciente
                del carrito desde localStorage.
            */

            cart =
                loadCart();


            renderGlobalCart();


            openCart();

        }
    );

}



if (closeCart) {

    closeCart.addEventListener(
        "click",
        closeCartSidebar
    );

}



if (cartOverlay) {

    cartOverlay.addEventListener(
        "click",
        closeCartSidebar
    );

}



/* ============================================================
   ABRIR SIDEBAR
   ============================================================ */

function openCart() {

    if (
        !cartSidebar ||
        !cartOverlay
    ) {

        return;

    }


    cartSidebar.classList.add(
        "open"
    );


    cartOverlay.classList.add(
        "active"
    );


    cartSidebar.setAttribute(
        "aria-hidden",
        "false"
    );


    body.classList.add(
        "cart-open"
    );


    closeMobileMenu();

}



/* ============================================================
   CERRAR SIDEBAR
   ============================================================ */

function closeCartSidebar() {

    if (
        !cartSidebar ||
        !cartOverlay
    ) {

        return;

    }


    cartSidebar.classList.remove(
        "open"
    );


    cartOverlay.classList.remove(
        "active"
    );


    cartSidebar.setAttribute(
        "aria-hidden",
        "true"
    );


    body.classList.remove(
        "cart-open"
    );

}



/* ============================================================
   ESC
   ============================================================ */

document.addEventListener(
    "keydown",
    event => {

        if (
            event.key !== "Escape"
        ) {

            return;

        }


        closeCartSidebar();

        closeMobileMenu();

    }
);



/* ============================================================
   13. CARGAR CARRITO
   ============================================================ */

function loadCart() {

    try {

        const stored =
            localStorage.getItem(
                "estacion180-cart"
            );


        if (!stored) {

            return [];

        }


        const parsed =
            JSON.parse(
                stored
            );


        if (
            !Array.isArray(
                parsed
            )
        ) {

            return [];

        }


        /*
            Validamos y normalizamos las cantidades.
        */

        return parsed
            .filter(
                item =>
                    item &&
                    item.id !== undefined &&
                    item.name
            )
            .map(
                item => {

                    return {

                        ...item,

                        quantity:
                            Math.max(
                                1,
                                Number(
                                    item.quantity || 1
                                )
                            ),

                        price:
                            Number(
                                item.price || 0
                            )

                    };

                }
            );


    } catch (error) {

        console.error(
            "No se pudo cargar el carrito:",
            error
        );


        return [];

    }

}



/* ============================================================
   14. GUARDAR CARRITO
   ============================================================ */

function saveCart() {

    try {

        localStorage.setItem(

            "estacion180-cart",

            JSON.stringify(
                cart
            )

        );

    } catch (error) {

        console.error(
            "No se pudo guardar el carrito:",
            error
        );

    }

}



/* ============================================================
   15. SABER SI ESTAMOS EN UNA SUBCARPETA
   ============================================================ */

/*
    Tu estructura es:

    /
      index.html
      app.js
      imagenes/

      productos/
          productos.html

      promociones/
          promociones.html

    productos.html y promociones.html están
    un nivel dentro de la raíz.
*/

function isCommerceSubpage() {

    const pathname =
        window.location.pathname
            .toLowerCase();

    return (

        pathname.includes(
            "/productos/"
        ) ||

        pathname.includes(
            "/promociones/"
        ) ||

        pathname.includes(
            "/como-pedir/"
        )

    );

}



/* ============================================================
   16. FALLBACK DE IMAGEN
   ============================================================ */

function getCartFallbackImage() {

    if (
        isCommerceSubpage()
    ) {

        return "../imagenes/logo.jpeg";

    }


    return "imagenes/logo.jpeg";

}



/* ============================================================
   17. RESOLVER RUTA DE IMAGEN
   ============================================================ */

function getCartImagePath(
    item
) {

    let image =
        String(
            item?.image || ""
        )
            .trim()
            .replaceAll(
                "\\",
                "/"
            );


    /*
        Si no existe imagen.
    */

    if (!image) {

        return getCartFallbackImage();

    }



    /*
        Imágenes externas o data URI.
    */

    if (
        image.startsWith("http://") ||
        image.startsWith("https://") ||
        image.startsWith("data:") ||
        image.startsWith("blob:")
    ) {

        return image;

    }



    /*
        Eliminar ./ inicial.
    */

    image =
        image.replace(
            /^\.\/+/,
            ""
        );



    /* ========================================================
       IMAGEN GUARDADA COMO:

       ../imagenes/1011.png
    ======================================================== */

    if (
        image.startsWith("../")
    ) {

        /*
            Desde Productos o Promociones:

            ../imagenes/1011.png

            es correcto.
        */

        if (
            isCommerceSubpage()
        ) {

            return image;

        }


        /*
            Desde index.html:

            ../imagenes/1011.png

            debe convertirse en:

            imagenes/1011.png
        */

        return image.replace(
            /^(\.\.\/)+/,
            ""
        );

    }



    /* ========================================================
       IMAGEN GUARDADA COMO:

       imagenes/1011.png
    ======================================================== */

    image =
        image.replace(
            /^\/+/,
            ""
        );


    if (
        image.startsWith(
            "imagenes/"
        )
    ) {

        if (
            isCommerceSubpage()
        ) {

            return (
                "../" +
                image
            );

        }


        return image;

    }



    /* ========================================================
       COMPATIBILIDAD CON RUTAS ANTIGUAS
    ======================================================== */

    if (
        image.startsWith(
            "productos/"
        ) ||
        image.startsWith(
            "promociones/"
        )
    ) {

        if (
            isCommerceSubpage()
        ) {

            return (
                "../" +
                image
            );

        }


        return image;

    }



    /* ========================================================
       SI SOLO SE GUARDÓ EL NOMBRE:

       1011.png

       asumimos que está en /imagenes/
    ======================================================== */

    if (
        isCommerceSubpage()
    ) {

        return (
            "../imagenes/" +
            image
        );

    }


    return (
        "imagenes/" +
        image
    );

}



/* ============================================================
   18. CLAVE ÚNICA DE ITEM
   ============================================================ */

/*
    Esto permite diferenciar:

    product + 1011

    de

    promotion + 1011

    si algún día coinciden los ID.
*/

function getCartItemType(
    item
) {

    return String(
        item?.type || ""
    );

}



/* ============================================================
   19. RENDER GLOBAL DEL CARRITO
   ============================================================ */

/*
    IMPORTANTE:

    Se llama renderGlobalCart y NO renderProductsPageCart.

    Así evitamos conflictos con productos.js y promociones.js.
*/

function renderGlobalCart() {

    if (
        !cartItems ||
        !cartCount ||
        !cartTotal
    ) {

        return;

    }


    cartItems.innerHTML =
        "";



    /* ========================================================
       CARRITO VACÍO
    ======================================================== */

    if (
        cart.length === 0
    ) {

        cartItems.innerHTML = `

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


        cartCount.textContent =
            "0";


        cartTotal.textContent =
            formatCartPrice(
                0
            );


        if (cartCheckout) {

            cartCheckout.disabled =
                true;

        }


        return;

    }



    /* ========================================================
       ITEMS
    ======================================================== */

    cart.forEach(
        item => {

            const element =
                document.createElement(
                    "article"
                );


            element.className =
                "cart-item";


            const imagePath =
                getCartImagePath(
                    item
                );


            const itemType =
                getCartItemType(
                    item
                );


            element.innerHTML = `

                <div class="cart-item-image">

                    <img
                        src="${escapeCartHTML(
                            imagePath
                        )}"
                        alt="${escapeCartHTML(
                            item.name
                        )}"
                    >

                </div>


                <div class="cart-item-info">


                    <span class="cart-item-brand">

                        ${escapeCartHTML(
                            item.brand ||
                            "Estación 180"
                        )}

                    </span>


                    <h4>

                        ${escapeCartHTML(
                            item.name
                        )}

                    </h4>


                    <strong>

                        ${formatCartPrice(
                            item.price
                        )}

                    </strong>


                    <div class="cart-item-controls">


                        <!-- MENOS -->

                        <button
                            type="button"
                            class="cart-minus"
                            data-cart-id="${escapeCartHTML(
                                item.id
                            )}"
                            data-cart-type="${escapeCartHTML(
                                itemType
                            )}"
                            aria-label="Disminuir cantidad"
                        >
                            −
                        </button>


                        <!-- CANTIDAD -->

                        <span class="cart-item-quantity">

                            ${Number(
                                item.quantity || 1
                            )}

                        </span>


                        <!-- MÁS -->

                        <button
                            type="button"
                            class="cart-plus"
                            data-cart-id="${escapeCartHTML(
                                item.id
                            )}"
                            data-cart-type="${escapeCartHTML(
                                itemType
                            )}"
                            aria-label="Aumentar cantidad"
                        >
                            +
                        </button>


                        <!-- ELIMINAR -->

                        <button
                            type="button"
                            class="cart-remove"
                            data-cart-id="${escapeCartHTML(
                                item.id
                            )}"
                            data-cart-type="${escapeCartHTML(
                                itemType
                            )}"
                            aria-label="Eliminar producto"
                        >
                            ✕
                        </button>


                    </div>


                </div>

            `;



            /* ====================================================
               ERROR DE IMAGEN
            ==================================================== */

            const image =
                element.querySelector(
                    "img"
                );


            if (image) {

                image.addEventListener(
                    "error",
                    () => {

                        /*
                            Evitar bucle infinito
                            si también falla el logo.
                        */

                        image.onerror =
                            null;


                        image.src =
                            getCartFallbackImage();

                    }
                );

            }



            cartItems.appendChild(
                element
            );

        }
    );


    bindGlobalCartControls();


    updateGlobalCartSummary();

}



/* ============================================================
   20. COMPATIBILIDAD CON CÓDIGO ANTIGUO
   ============================================================ */

/*
    Si alguna otra parte de tu página llama:

    renderCart();

    seguirá funcionando.

    Internamente utilizamos renderGlobalCart()
    para evitar conflictos.
*/

function renderCart() {

    renderGlobalCart();

}



/* ============================================================
   21. CONTROLES DEL CARRITO
   ============================================================ */

function bindGlobalCartControls() {


    /* ========================================================
       MÁS
    ======================================================== */

    document
        .querySelectorAll(
            ".cart-plus"
        )
        .forEach(
            button => {

                button.addEventListener(
                    "click",
                    event => {

                        event.preventDefault();

                        event.stopPropagation();


                        changeGlobalCartQuantity(

                            button.dataset.cartId,

                            button.dataset.cartType,

                            1

                        );

                    }
                );

            }
        );



    /* ========================================================
       MENOS
    ======================================================== */

    document
        .querySelectorAll(
            ".cart-minus"
        )
        .forEach(
            button => {

                button.addEventListener(
                    "click",
                    event => {

                        event.preventDefault();

                        event.stopPropagation();


                        changeGlobalCartQuantity(

                            button.dataset.cartId,

                            button.dataset.cartType,

                            -1

                        );

                    }
                );

            }
        );



    /* ========================================================
       ELIMINAR
    ======================================================== */

    document
        .querySelectorAll(
            ".cart-remove"
        )
        .forEach(
            button => {

                button.addEventListener(
                    "click",
                    event => {

                        event.preventDefault();

                        event.stopPropagation();


                        removeGlobalCartItem(

                            button.dataset.cartId,

                            button.dataset.cartType

                        );

                    }
                );

            }
        );

}



/* ============================================================
   22. BUSCAR ITEM DEL CARRITO
   ============================================================ */

function findGlobalCartItemIndex(
    id,
    type = ""
) {

    return cart.findIndex(
        item => {

            const sameId =
                String(
                    item.id
                ) ===
                String(
                    id
                );


            /*
                Si type está vacío,
                mantenemos compatibilidad con
                elementos antiguos.
            */

            const sameType =

                !type ||

                String(
                    item.type || ""
                ) ===
                String(
                    type
                );


            return (
                sameId &&
                sameType
            );

        }
    );

}



/* ============================================================
   23. CAMBIAR CANTIDAD
   ============================================================ */

function changeGlobalCartQuantity(
    id,
    type,
    change
) {

    /*
        Antes de modificar recuperamos
        la versión más reciente.
    */

    cart =
        loadCart();


    const index =
        findGlobalCartItemIndex(
            id,
            type
        );


    if (
        index === -1
    ) {

        console.warn(
            "No se encontró el item:",
            id,
            type
        );


        return;

    }


    const item =
        cart[
            index
        ];


    item.quantity =
        Number(
            item.quantity || 0
        ) +
        Number(
            change
        );



    /* ========================================================
       SI LLEGA A CERO, ELIMINAR
    ======================================================== */

    if (
        item.quantity <= 0
    ) {

        removeGlobalCartItem(
            id,
            type
        );


        return;

    }



    saveCart();


    renderGlobalCart();


    refreshPageSpecificCart();

}



/* ============================================================
   24. ELIMINAR ITEM
   ============================================================ */

function removeGlobalCartItem(
    id,
    type = ""
) {

    /*
        Muy importante:

        recargamos primero el carrito
        para evitar operar sobre una
        versión desactualizada.
    */

    cart =
        loadCart();


    const index =
        findGlobalCartItemIndex(
            id,
            type
        );


    if (
        index === -1
    ) {

        console.warn(
            "No se encontró el item para eliminar:",
            id,
            type
        );


        return;

    }



    /*
        IMPORTANTE:

        NO hacemos:

        cart = cart.filter(...)

        Usamos splice para mantener
        la misma referencia del array.
    */

    cart.splice(
        index,
        1
    );


    saveCart();


    renderGlobalCart();


    refreshPageSpecificCart();

}



/* ============================================================
   25. ACTUALIZAR CARRITO ESPECÍFICO DE CADA PÁGINA
   ============================================================ */

function refreshPageSpecificCart() {

    /*
        PRODUCTOS.JS
    */

    if (
        typeof renderProductsPageCart ===
        "function"
    ) {

        renderProductsPageCart();

    }



    /*
        PROMOCIONES.JS

        Si promociones.js tiene esta función,
        también se actualizará.
    */

    if (
        typeof renderPromotionsPageCart ===
        "function"
    ) {

        renderPromotionsPageCart();

    }

}



/* ============================================================
   26. ACTUALIZAR RESUMEN GLOBAL
   ============================================================ */

function updateGlobalCartSummary() {

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



    if (cartCount) {

        cartCount.textContent =
            String(
                quantity
            );

    }



    if (cartTotal) {

        cartTotal.textContent =
            formatCartPrice(
                total
            );

    }



    if (cartCheckout) {

        cartCheckout.disabled =
            quantity === 0;

    }

}



/* ============================================================
   27. CONTINUAR PEDIDO
   ============================================================ */

if (cartCheckout) {

    cartCheckout.addEventListener(
        "click",
        () => {

            cart =
                loadCart();


            if (
                cart.length === 0
            ) {

                return;

            }



            let message =
                "Hola Estación 180 👋\n\n";


            message +=
                "Quiero realizar el siguiente pedido:\n\n";



            cart.forEach(
                (
                    item,
                    index
                ) => {

                    const quantity =
                        Number(
                            item.quantity || 1
                        );


                    const price =
                        Number(
                            item.price || 0
                        );


                    const subtotal =
                        price *
                        quantity;



                    message +=
                        `${index + 1}. ${item.name}\n`;


                    if (item.brand) {

                        message +=
                            `Marca: ${item.brand}\n`;

                    }


                    message +=
                        `Código: ${item.id}\n`;


                    message +=
                        `Cantidad: ${quantity}\n`;


                    message +=
                        `Precio: ${formatCartPrice(price)}\n`;


                    message +=
                        `Subtotal: ${formatCartPrice(subtotal)}\n\n`;

                }
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



            message +=
                `TOTAL: ${formatCartPrice(total)}\n\n`;


            message +=
                "Quedo atento para coordinar el delivery.";



            openWhatsApp(
                message
            );

        }
    );

}



/* ============================================================
   28. FORMATEAR PRECIO
   ============================================================ */

function formatCartPrice(
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
        Number(
            value
        ) || 0
    );

}



/* ============================================================
   COMPATIBILIDAD CON CÓDIGO ANTIGUO
   ============================================================ */

function formatPrice(
    value
) {

    return formatCartPrice(
        value
    );

}



/* ============================================================
   29. ESCAPAR HTML
   ============================================================ */

function escapeCartHTML(
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
   COMPATIBILIDAD
   ============================================================ */

function escapeHTML(
    value
) {

    return escapeCartHTML(
        value
    );

}



/* ============================================================
   30. TOAST
   ============================================================ */

let toastTimer;


function showToast(
    message
) {

    if (!toast) {

        return;

    }


    clearTimeout(
        toastTimer
    );


    toast.textContent =
        message;


    toast.classList.add(
        "show"
    );


    toastTimer =
        setTimeout(
            () => {

                toast.classList.remove(
                    "show"
                );

            },
            2200
        );

}



/* ============================================================
   31. ANIMACIONES
   ============================================================ */

function initializeAnimations() {

    const animatedElements =
        document.querySelectorAll(

            ".home-menu-card, " +
            ".hero-content, " +
            ".hero-visual"

        );


    if (
        animatedElements.length === 0
    ) {

        return;

    }



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
                    0.12

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
   32. ACTUALIZAR AL VOLVER A UNA PÁGINA
   ============================================================ */

window.addEventListener(
    "pageshow",
    () => {

        cart =
            loadCart();


        renderGlobalCart();


        refreshPageSpecificCart();

    }
);



/* ============================================================
   33. SINCRONIZACIÓN ENTRE PESTAÑAS
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


        cart =
            loadCart();


        renderGlobalCart();


        refreshPageSpecificCart();

    }
);