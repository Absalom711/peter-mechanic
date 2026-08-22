// ==========================================
// NANAPO AUTO — app.js
// Main website JavaScript
// ==========================================

document.addEventListener("DOMContentLoaded", () => {

    // ==========================================
    // CURRENT YEAR
    // ==========================================

    const year = document.getElementById("year");

    if (year) {
        year.textContent = new Date().getFullYear();
    }


    // ==========================================
    // SCROLL REVEAL
    // ==========================================

    const reveals = document.querySelectorAll(".reveal");

    const revealObserver = new IntersectionObserver(
        (entries, observer) => {

            entries.forEach((entry) => {

                if (entry.isIntersecting) {

                    entry.target.classList.add("active");

                    // Stop observing after animation
                    observer.unobserve(entry.target);
                }

            });

        },
        {
            threshold: 0.15
        }
    );


    reveals.forEach((element) => {
        revealObserver.observe(element);
    });


    // ==========================================
    // MOBILE NAVIGATION
    // ==========================================

    const navbar = document.querySelector(".navbar");
    const navLinks = document.querySelector(".nav-links");

    if (navbar && navLinks) {

        // Create mobile menu button
        const menuToggle = document.createElement("button");

        menuToggle.className = "menu-toggle";
        menuToggle.setAttribute("type", "button");
        menuToggle.setAttribute("aria-label", "Toggle navigation");
        menuToggle.setAttribute("aria-expanded", "false");

        menuToggle.innerHTML = "☰";

        navbar.appendChild(menuToggle);


        // Toggle menu
        menuToggle.addEventListener("click", () => {

            const isOpen =
                navLinks.classList.toggle("active");

            menuToggle.setAttribute(
                "aria-expanded",
                String(isOpen)
            );

            menuToggle.innerHTML =
                isOpen ? "✕" : "☰";

        });


        // Close menu when a link is clicked
        const links = navLinks.querySelectorAll("a");

        links.forEach((link) => {

            link.addEventListener("click", () => {

                navLinks.classList.remove("active");

                menuToggle.setAttribute(
                    "aria-expanded",
                    "false"
                );

                menuToggle.innerHTML = "☰";

            });

        });

    }


    // ==========================================
    // SMOOTH SCROLL
    // ==========================================

    const internalLinks =
        document.querySelectorAll('a[href^="#"]');

    internalLinks.forEach((link) => {

        link.addEventListener("click", (event) => {

            const targetId =
                link.getAttribute("href");

            if (!targetId || targetId === "#") {
                return;
            }

            const target =
                document.querySelector(targetId);

            if (target) {

                event.preventDefault();

                target.scrollIntoView({
                    behavior: "smooth",
                    block: "start"
                });

            }

        });

    });


    // ==========================================
    // WHATSAPP BUTTON
    // ==========================================

    const whatsappBtn =
        document.querySelector(".whatsapp-float");

    if (whatsappBtn) {

        whatsappBtn.addEventListener(
            "mouseenter",
            () => {

                whatsappBtn.classList.add("whatsapp-hover");

            }
        );


        whatsappBtn.addEventListener(
            "mouseleave",
            () => {

                whatsappBtn.classList.remove(
                    "whatsapp-hover"
                );

            }
        );

    }


    // ==========================================
    // NAVBAR SCROLL EFFECT
    // ==========================================

    if (navbar) {

        window.addEventListener(
            "scroll",
            () => {

                if (window.scrollY > 50) {

                    navbar.classList.add("scrolled");

                } else {

                    navbar.classList.remove("scrolled");

                }

            },
            { passive: true }
        );

    }


    // ==========================================
    // GALLERY IMAGE LIGHTBOX
    // ==========================================

    const galleryImages =
        document.querySelectorAll(".gallery .card img");

    if (galleryImages.length > 0) {

        galleryImages.forEach((image) => {

            image.style.cursor = "pointer";

            image.addEventListener("click", () => {

                const overlay =
                    document.createElement("div");

                overlay.className = "image-lightbox";

                overlay.innerHTML = `
                    <div class="lightbox-content">
                        <button
                            class="lightbox-close"
                            aria-label="Close image">
                            ✕
                        </button>

                        <img
                            src="${image.src}"
                            alt="${image.alt}">
                    </div>
                `;

                document.body.appendChild(overlay);


                // Close button
                const closeButton =
                    overlay.querySelector(
                        ".lightbox-close"
                    );

                closeButton.addEventListener(
                    "click",
                    () => {
                        overlay.remove();
                    }
                );


                // Click outside image
                overlay.addEventListener(
                    "click",
                    (event) => {

                        if (
                            event.target === overlay
                        ) {
                            overlay.remove();
                        }

                    }
                );


                // Escape key
                document.addEventListener(
                    "keydown",
                    function closeWithEscape(event) {

                        if (event.key === "Escape") {

                            overlay.remove();

                            document.removeEventListener(
                                "keydown",
                                closeWithEscape
                            );

                        }

                    }
                );

            });

        });

    }


    // ==========================================
    // CONTACT FORM VALIDATION
    // ==========================================

    const contactForm =
        document.querySelector("form");

    if (contactForm) {

        contactForm.addEventListener(
            "submit",
            (event) => {

                const name =
                    contactForm.querySelector(
                        '[name="name"]'
                    );

                const email =
                    contactForm.querySelector(
                        '[name="email"]'
                    );

                const message =
                    contactForm.querySelector(
                        '[name="message"]'
                    );


                if (
                    !name?.value.trim() ||
                    !email?.value.trim() ||
                    !message?.value.trim()
                ) {

                    event.preventDefault();

                    alert(
                        "Please complete all fields before sending your message."
                    );

                    return;

                }

            }
        );

    }


    // ==========================================
    // BACK TO TOP
    // ==========================================

    const backToTop =
        document.createElement("button");

    backToTop.className = "back-to-top";
    backToTop.innerHTML = "↑";
    backToTop.setAttribute(
        "aria-label",
        "Back to top"
    );

    document.body.appendChild(backToTop);


    window.addEventListener(
        "scroll",
        () => {

            if (window.scrollY > 500) {

                backToTop.classList.add("visible");

            } else {

                backToTop.classList.remove("visible");

            }

        },
        { passive: true }
    );


    backToTop.addEventListener(
        "click",
        () => {

            window.scrollTo({
                top: 0,
                behavior: "smooth"
            });

        }
    );


    // ==========================================
    // PAGE LOADED
    // ==========================================

    console.log(
        "Nanapo Auto website initialized successfully."
    );

});
