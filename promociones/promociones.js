/* ============================================================
   ESTACIÓN 180
   PROMOCIONES.JS
   ============================================================ */


/* ============================================================
   CONFIGURACIÓN
   ============================================================ */

const PROMOTIONS_CONFIG = {

    cartStorageKey:
        "estacion180-cart",

    whatsappNumber:
        "51999014976"

};



/* ============================================================
   ELEMENTOS DEL DOM
   ============================================================ */

const promotionCards =
    document.querySelectorAll(
        ".promotion-card"
    );


const promotionButtons =
    document.querySelectorAll(
        ".promotion-add-cart"
    );


const promotionCount =
    document.getElementById(
        "promotionCount"
    );


const promotionsCartButton =
    document.getElementById(
        "cartButton"
    );


const promotionsCartSidebar =
    document.getElementById(
        "cartSidebar"
    );


const promotionsCloseCart =
    document.getElementById(
        "closeCart"
    );


const promotionsCartOverlay =
    document.getElementById(
        "cartOverlay"
    );


const promotionsCartItems =
    document.getElementById(
        "cartItems"
    );


const promotionsCartCount =
    document.getElementById(
        "cartCount"
    );


const promotionsCartTotal =
    document.getElementById(
        "cartTotal"
    );


const promotionsCartCheckout =
    document.getElementById(
        "cartCheckout"
    );


const promotionsToast =
    document.getElementById(
        "toast"
    );


const promotionsMobileMenuButton =
    document.getElementById(
        "mobileMenuButton"
    );


const promotionsMobileMenu =
    document.getElementById(
        "mobileMenu"
    );



/* ============================================================
   CARRITO
   ============================================================ */

let promotionsCart =
    loadPromotionsCart();



/* ============================================================
   INICIALIZACIÓN
   ============================================================ */

document.addEventListener(
    "DOMContentLoaded",
    () => {

        updatePromotionCount();

        renderPromotionsCart();

        initializePromotionAnimations();

        initializePromotionNavigation();

        initializePromotionCartEvents();

    }
);



/* ============================================================
   CONTADOR DE PROMOCIONES
   ============================================================ */

function updatePromotionCount() {

    if (!promotionCount) {

        return;

    }


    promotionCount.textContent =
        String(
            promotionCards.length
        );

}



/* ============================================================
   NAVEGACIÓN
   ============================================================ */

function initializePromotionNavigation() {

    const navigationLinks =
        document.querySelectorAll(
            "a[data-direct-nav]"
        );


    navigationLinks.forEach(
        link => {

            link.addEventListener(
                "click",
                event => {

                    const href =
                        link.getAttribute(
                            "href"
                        );


                    if (
                        !href ||
                        href === "#"
                    ) {

                        return;

                    }


                    event.preventDefault();

                    closePromotionMobileMenu();


                    window.location.href =
                        href;

                }
            );

        }
    );

}



/* ============================================================
   CERRAR MENÚ MÓVIL
   ============================================================ */

function closePromotionMobileMenu() {

    if (
        promotionsMobileMenu
    ) {

        promotionsMobileMenu.classList.remove(
            "open"
        );

    }


    if (
        promotionsMobileMenuButton
    ) {

        promotionsMobileMenuButton.classList.remove(
            "active"
        );


        promotionsMobileMenuButton.setAttribute(
            "aria-expanded",
            "false"
        );

    }

}



/* ============================================================
   BOTONES AGREGAR
   ============================================================ */

promotionButtons.forEach(
    button => {

        button.addEventListener(
            "click",
            event => {

                event.preventDefault();

                event.stopPropagation();


                const card =
                    button.closest(
                        ".promotion-card"
                    );


                if (!card) {

                    return;

                }


                addPromotionFromCard(
                    card,
                    button
                );

            }
        );

    }
);



/* ============================================================
   CREAR PROMOCIÓN
   ============================================================ */

function addPromotionFromCard(
    card,
    button
) {

    const id =
        card.dataset.id;


    const name =
        card.dataset.name;


    const price =
        Number(
            card.dataset.price
        );


    const image =
        card.dataset.image ||
        "";


    if (
        !id ||
        !name ||
        !Number.isFinite(price)
    ) {

        console.error(
            "Promoción inválida."
        );

        return;

    }


    const promotion = {

        id:
            id,

        name:
            name,

        brand:
            "Estación 180",

        price:
            price,

        image:
            normalizeStoredImage(
                image
            ),

        quantity:
            1,

        type:
            "promotion"

    };


    addPromotionToCart(
        promotion
    );


    animatePromotionButton(
        button
    );


    showPromotionToast(
        `${promotion.name} agregada al carrito.`
    );

}



/* ============================================================
   NORMALIZAR IMAGEN PARA LOCALSTORAGE
   ============================================================ */

function normalizeStoredImage(
    image
) {

    return String(
        image || ""
    )

        .replace(
            /^(\.\.\/)+/,
            ""
        )

        .replace(
            /^\/+/,
            ""
        );

}



/* ============================================================
   AGREGAR PROMOCIÓN
   ============================================================ */

function addPromotionToCart(
    promotion
) {

    /*
        Volvemos a leer localStorage antes
        de modificar el carrito.

        Esto permite conservar también los
        productos agregados desde Productos.
    */

    promotionsCart =
        loadPromotionsCart();


    const existing =
        promotionsCart.find(
            item =>
                String(item.id) ===
                String(promotion.id)
        );


    if (existing) {

        existing.quantity =
            Number(
                existing.quantity || 0
            ) + 1;

    } else {

        promotionsCart.push(
            promotion
        );

    }


    savePromotionsCart();

    renderPromotionsCart();

}



/* ============================================================
   CARGAR CARRITO
   ============================================================ */

function loadPromotionsCart() {

    try {

        const stored =
            localStorage.getItem(
                PROMOTIONS_CONFIG.cartStorageKey
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
            "Error cargando carrito:",
            error
        );


        return [];

    }

}



/* ============================================================
   GUARDAR CARRITO
   ============================================================ */

function savePromotionsCart() {

    try {

        localStorage.setItem(

            PROMOTIONS_CONFIG.cartStorageKey,

            JSON.stringify(
                promotionsCart
            )

        );

    } catch (error) {

        console.error(
            "Error guardando carrito:",
            error
        );

    }

}



/* ============================================================
   EVENTOS DEL CARRITO
   ============================================================ */

function initializePromotionCartEvents() {

    /*
        ABRIR CARRITO
    */

    if (
        promotionsCartButton
    ) {

        promotionsCartButton.addEventListener(
            "click",
            () => {

                promotionsCart =
                    loadPromotionsCart();


                renderPromotionsCart();


                openPromotionsCart();

            }
        );

    }



    /*
        CERRAR
    */

    if (
        promotionsCloseCart
    ) {

        promotionsCloseCart.addEventListener(
            "click",
            closePromotionsCart
        );

    }



    /*
        OVERLAY
    */

    if (
        promotionsCartOverlay
    ) {

        promotionsCartOverlay.addEventListener(
            "click",
            closePromotionsCart
        );

    }



    /*
        CONTINUAR PEDIDO

        Se usa captura para asegurar que este
        checkout funcione aunque app.js también
        tenga un listener.
    */

    if (
        promotionsCartCheckout
    ) {

        promotionsCartCheckout.addEventListener(
            "click",
            event => {

                event.preventDefault();

                event.stopPropagation();

                event.stopImmediatePropagation();


                promotionsCart =
                    loadPromotionsCart();


                checkoutPromotionCart();

            },
            true
        );

    }



    /*
        ESCAPE
    */

    document.addEventListener(
        "keydown",
        event => {

            if (
                event.key ===
                "Escape"
            ) {

                closePromotionsCart();

                closePromotionMobileMenu();

            }

        }
    );

}



/* ============================================================
   ABRIR CARRITO
   ============================================================ */

function openPromotionsCart() {

    if (
        !promotionsCartSidebar
    ) {

        return;

    }


    promotionsCartSidebar.classList.add(
        "open"
    );


    promotionsCartSidebar.setAttribute(
        "aria-hidden",
        "false"
    );


    if (
        promotionsCartOverlay
    ) {

        promotionsCartOverlay.classList.add(
            "active"
        );

    }


    document.body.classList.add(
        "cart-open"
    );

}



/* ============================================================
   CERRAR CARRITO
   ============================================================ */

function closePromotionsCart() {

    if (
        promotionsCartSidebar
    ) {

        promotionsCartSidebar.classList.remove(
            "open"
        );


        promotionsCartSidebar.setAttribute(
            "aria-hidden",
            "true"
        );

    }


    if (
        promotionsCartOverlay
    ) {

        promotionsCartOverlay.classList.remove(
            "active"
        );

    }


    document.body.classList.remove(
        "cart-open"
    );

}



/* ============================================================
   RENDERIZAR CARRITO
   ============================================================ */

function renderPromotionsCart() {

    if (
        !promotionsCartItems ||
        !promotionsCartCount ||
        !promotionsCartTotal
    ) {

        return;

    }


    promotionsCartItems.innerHTML =
        "";


    if (
        promotionsCart.length === 0
    ) {

        promotionsCartItems.innerHTML = `

            <div class="empty-cart">

                <div class="empty-cart-icon">
                    🛒
                </div>

                <h3>
                    Tu pedido está vacío
                </h3>

                <p>
                    Las promociones o productos
                    que agregues aparecerán aquí.
                </p>

            </div>

        `;


        updatePromotionsCartSummary();

        return;

    }



    promotionsCart.forEach(
        item => {

            const article =
                document.createElement(
                    "article"
                );


            article.className =
                "cart-item";


            const imagePath =
                getPromotionCartImage(
                    item
                );


            article.innerHTML = `

                <div class="cart-item-image">

                    <img
                        src="${escapePromotionHTML(imagePath)}"
                        alt="${escapePromotionHTML(item.name)}"
                    >

                </div>


                <div class="cart-item-info">

                    <span class="cart-item-brand">

                        ${escapePromotionHTML(
                            item.brand ||
                            "Estación 180"
                        )}

                    </span>


                    <h4>

                        ${escapePromotionHTML(
                            item.name
                        )}

                    </h4>


                    <strong>

                        ${formatPromotionPrice(
                            item.price
                        )}

                    </strong>


                    <div class="cart-item-controls">


                        <button
                            type="button"
                            class="promo-cart-minus"
                            data-cart-id="${escapePromotionHTML(item.id)}"
                            aria-label="Disminuir cantidad"
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
                            class="promo-cart-plus"
                            data-cart-id="${escapePromotionHTML(item.id)}"
                            aria-label="Aumentar cantidad"
                        >
                            +
                        </button>


                        <button
                            type="button"
                            class="promo-cart-remove"
                            data-cart-id="${escapePromotionHTML(item.id)}"
                            aria-label="Eliminar producto"
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


            promotionsCartItems.appendChild(
                article
            );

        }
    );


    bindPromotionCartControls();

    updatePromotionsCartSummary();

}



/* ============================================================
   IMÁGENES DEL CARRITO
   ============================================================ */

function getPromotionCartImage(item) {

    let image =
        normalizeStoredImage(
            item.image
        );


    /* ========================================================
       SI EL ITEM YA TIENE UNA IMAGEN
    ======================================================== */

    if (image) {


        /*
            Ejemplo guardado:
            imagenes/1011.png

            Como promociones.html está dentro de:
            /promociones/

            debemos regresar un nivel:
            ../imagenes/1011.png
        */

        if (
            image.startsWith(
                "imagenes/"
            )
        ) {

            return "../" + image;

        }


        /*
            Compatibilidad por si algún elemento
            se guarda dentro de productos/
        */

        if (
            image.startsWith(
                "productos/"
            )
        ) {

            return "../" + image;

        }


        /*
            Si solo viene el nombre del archivo.
        */

        return "../imagenes/" + image;

    }


    /* ========================================================
       SIN IMAGEN
    ======================================================== */

    return "../imagenes/logo.jpeg";

}
/* ============================================================
   CONTROLES + / - / ELIMINAR
   ============================================================ */

function bindPromotionCartControls() {


    /*
        MÁS
    */

    document
        .querySelectorAll(
            ".promo-cart-plus"
        )
        .forEach(
            button => {

                button.addEventListener(
                    "click",
                    () => {

                        changePromotionQuantity(

                            button.dataset.cartId,

                            1

                        );

                    }
                );

            }
        );



    /*
        MENOS
    */

    document
        .querySelectorAll(
            ".promo-cart-minus"
        )
        .forEach(
            button => {

                button.addEventListener(
                    "click",
                    () => {

                        changePromotionQuantity(

                            button.dataset.cartId,

                            -1

                        );

                    }
                );

            }
        );



    /*
        ELIMINAR
    */

    document
        .querySelectorAll(
            ".promo-cart-remove"
        )
        .forEach(
            button => {

                button.addEventListener(
                    "click",
                    () => {

                        removePromotionCartItem(
                            button.dataset.cartId
                        );

                    }
                );

            }
        );

}



/* ============================================================
   CAMBIAR CANTIDAD
   ============================================================ */

function changePromotionQuantity(
    id,
    amount
) {

    promotionsCart =
        loadPromotionsCart();


    const item =
        promotionsCart.find(
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
        ) +
        Number(
            amount
        );


    if (
        item.quantity <= 0
    ) {

        removePromotionCartItem(
            id
        );

        return;

    }


    savePromotionsCart();

    renderPromotionsCart();

}



/* ============================================================
   ELIMINAR ITEM
   ============================================================ */

function removePromotionCartItem(
    id
) {

    promotionsCart =
        loadPromotionsCart();


    promotionsCart =
        promotionsCart.filter(
            item =>
                String(item.id) !==
                String(id)
        );


    savePromotionsCart();

    renderPromotionsCart();

}



/* ============================================================
   ACTUALIZAR RESUMEN
   ============================================================ */

function updatePromotionsCartSummary() {

    const quantity =
        promotionsCart.reduce(
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
        promotionsCart.reduce(
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


    if (
        promotionsCartCount
    ) {

        promotionsCartCount.textContent =
            String(
                quantity
            );

    }


    if (
        promotionsCartTotal
    ) {

        promotionsCartTotal.textContent =
            formatPromotionPrice(
                total
            );

    }


    if (
        promotionsCartCheckout
    ) {

        promotionsCartCheckout.disabled =
            quantity === 0;

    }

}



/* ============================================================
   CONTINUAR PEDIDO
   ============================================================ */

function checkoutPromotionCart() {

    promotionsCart =
        loadPromotionsCart();


    if (
        promotionsCart.length === 0
    ) {

        showPromotionToast(
            "Tu pedido está vacío."
        );

        return;

    }



    const validItems =
        promotionsCart.filter(
            item =>
                Number(
                    item.quantity || 0
                ) > 0
        );


    if (
        validItems.length === 0
    ) {

        showPromotionToast(
            "Tu pedido está vacío."
        );

        return;

    }



    const orderLines =
        validItems.map(
            item => {

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


                return (
                    `• ${quantity} x ${item.name} - ${formatPromotionPrice(subtotal)}`
                );

            }
        );



    const total =
        validItems.reduce(
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



    const message = [

        "Hola Estación 180 👋",

        "",

        "Deseo realizar el siguiente pedido:",

        "",

        ...orderLines,

        "",

        `TOTAL: ${formatPromotionPrice(total)}`,

        "",

        "¿Me ayudan a coordinar el delivery?"

    ].join(
        "\n"
    );



    const whatsappURL =
        "https://wa.me/" +
        PROMOTIONS_CONFIG.whatsappNumber +
        "?text=" +
        encodeURIComponent(
            message
        );



    window.open(
        whatsappURL,
        "_blank",
        "noopener,noreferrer"
    );

}



/* ============================================================
   ANIMACIÓN AGREGAR
   ============================================================ */

function animatePromotionButton(
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
   TOAST
   ============================================================ */

let promotionToastTimer;


function showPromotionToast(
    message
) {

    if (
        !promotionsToast
    ) {

        return;

    }


    clearTimeout(
        promotionToastTimer
    );


    promotionsToast.textContent =
        message;


    promotionsToast.classList.add(
        "show"
    );


    promotionToastTimer =
        setTimeout(
            () => {

                promotionsToast.classList.remove(
                    "show"
                );

            },
            2200
        );

}



/* ============================================================
   FORMATEAR PRECIO
   ============================================================ */

function formatPromotionPrice(
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
   ESCAPAR HTML
   ============================================================ */

function escapePromotionHTML(
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
   ANIMACIONES DE TARJETAS
   ============================================================ */

function initializePromotionAnimations() {

    if (
        promotionCards.length === 0
    ) {

        return;

    }


    if (
        !(
            "IntersectionObserver"
            in window
        )
    ) {

        promotionCards.forEach(
            card => {

                card.classList.add(
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
                    0.12,

                rootMargin:
                    "0px 0px -40px 0px"

            }

        );


    promotionCards.forEach(
        (
            card,
            index
        ) => {

            card.style.transitionDelay =
                `${index * 70}ms`;


            observer.observe(
                card
            );

        }
    );

}



/* ============================================================
   ACTUALIZAR CARRITO AL VOLVER A LA PÁGINA
   ============================================================ */

window.addEventListener(
    "pageshow",
    () => {

        promotionsCart =
            loadPromotionsCart();


        renderPromotionsCart();

    }
);



/* ============================================================
   SINCRONIZACIÓN ENTRE PESTAÑAS
   ============================================================ */

window.addEventListener(
    "storage",
    event => {

        if (
            event.key !==
            PROMOTIONS_CONFIG.cartStorageKey
        ) {

            return;

        }


        promotionsCart =
            loadPromotionsCart();


        renderPromotionsCart();

    }
);