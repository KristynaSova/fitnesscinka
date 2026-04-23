document.addEventListener('DOMContentLoaded', () => {
    // Dynamický rok v patičce
    const footerYear = document.getElementById('footerYear');
    if (footerYear) footerYear.textContent = new Date().getFullYear();
    // 1. Změna pozadí hlavičky při scrollování (Sticky Header)
    const header = document.querySelector('.header');
    
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });

    // 2. Otevírání mobilního menu
    const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
    const nav = document.querySelector('.nav');
    
    if (mobileMenuToggle && nav) {
        const toggleIcon = mobileMenuToggle.querySelector('i');

        mobileMenuToggle.addEventListener('click', () => {
            nav.classList.toggle('nav--active');
            
            // Změna ikony (bars <-> xmark)
            if (nav.classList.contains('nav--active')) {
                toggleIcon.classList.remove('fa-bars');
                toggleIcon.classList.add('fa-xmark');
            } else {
                toggleIcon.classList.remove('fa-xmark');
                toggleIcon.classList.add('fa-bars');
            }
        });

        // Zavření menu po kliknutí na odkaz a reset ikony
        const navLinks = nav.querySelectorAll('.nav__link');
        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                nav.classList.remove('nav--active');
                if (toggleIcon) {
                    toggleIcon.classList.remove('fa-xmark');
                    toggleIcon.classList.add('fa-bars');
                }
            });
        });
    }

    // 3. Plynulé rolování pro navigační odkazy
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                e.preventDefault();
                
                // Zohlednit výšku fixní hlavičky při posunu
                const headerHeight = header.offsetHeight;
                const elementPosition = targetElement.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - headerHeight;

                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });

    // 4. Slider šipky pro galerii
    const track = document.getElementById('gallery-slider');
    const btnPrev = document.querySelector('.slider-btn--prev');
    const btnNext = document.querySelector('.slider-btn--next');

    if (track && btnPrev && btnNext) {
        btnNext.addEventListener('click', () => {
            track.scrollBy({ left: track.clientWidth / 2, behavior: 'smooth' });
        });
        btnPrev.addEventListener('click', () => {
            track.scrollBy({ left: -(track.clientWidth / 2), behavior: 'smooth' });
        });
    }

    // 6. Back to Top – scroll progress ring s gradientem
    const bttBtn = document.getElementById('bttBtn');
    const bttProgress = document.getElementById('bttProgress');
    const CIRCUMFERENCE = 2 * Math.PI * 23; // 144.51

    if (bttBtn && bttProgress) {
        function updateBtt() {
            const scrollTop = window.scrollY;
            const docHeight = document.documentElement.scrollHeight - window.innerHeight;
            const progress = docHeight > 0 ? Math.min(scrollTop / docHeight, 1) : 0;

            bttBtn.classList.toggle('btt--visible', scrollTop > 300);
            bttProgress.style.strokeDashoffset = CIRCUMFERENCE * (1 - progress);
        }

        window.addEventListener('scroll', updateBtt, { passive: true });
        updateBtt();

        bttBtn.addEventListener('click', () => {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    }

    // 5. Lightbox pro galerii
    const lightbox = document.getElementById('lightbox');
    const lightboxImg = document.getElementById('lightbox-img');
    const lightboxClose = document.querySelector('.lightbox__close');
    const galleryItems = document.querySelectorAll('.gallery-item');

    if (lightbox && lightboxImg && galleryItems.length > 0) {
        galleryItems.forEach(item => {
            item.addEventListener('click', (e) => {
                e.preventDefault(); // Zabrání přechodu na URL obrázku
                const imgSrc = item.getAttribute('href');
                lightboxImg.src = imgSrc;
                lightbox.classList.add('lightbox--active');
            });
        });

        // Zavření po kliku na křížek
        lightboxClose.addEventListener('click', () => {
            lightbox.classList.remove('lightbox--active');
        });

        // Zavření po kliku mimo samotný obrázek (na tmavé pozadí)
        lightbox.addEventListener('click', (e) => {
            if (e.target !== lightboxImg) {
                lightbox.classList.remove('lightbox--active');
            }
        });
    }

    // 7. Výběr barvy na product kartách → aktualizace odkazu Koupit
    document.querySelectorAll('.product-card').forEach(card => {
        const dots = card.querySelectorAll('.color-dot[data-varianta]');
        const buyBtn = card.querySelector('.order-link');

        dots.forEach(dot => {
            dot.addEventListener('click', () => {
                dots.forEach(d => d.classList.remove('color-dot--active'));
                dot.classList.add('color-dot--active');
                if (buyBtn) buyBtn.href = `koupit.html?varianta=${dot.dataset.varianta}`;
            });
        });
    });

    // 8. Předvyplnění varianty z URL parametru (koupit.html)
    const variantaParam = new URLSearchParams(window.location.search).get('varianta');
    if (variantaParam) {
        const select = document.getElementById('varianta');
        if (select) select.value = variantaParam;
    }

    // 9. Odeslání formuláře přes Formspree (AJAX) + honeypot ochrana
    const orderForm = document.getElementById('orderForm');
    if (orderForm) {
        orderForm.addEventListener('submit', async (e) => {
            e.preventDefault();

            // Propis e-mailu zákazníka do _replyto
            const emailField = orderForm.querySelector('input[name="email"]');
            const replyTo = document.getElementById('replyToField');
            if (emailField && replyTo) replyTo.value = emailField.value;

            // Honeypot kontrola
            const hp = orderForm.querySelector('input[name="website"]');
            if (hp && hp.value !== '') return;

            const submitBtn = orderForm.querySelector('[type="submit"]');
            const successMsg = document.getElementById('formSuccess');
            const errorMsg = document.getElementById('formError');

            submitBtn.disabled = true;
            submitBtn.textContent = 'Odesílám…';

            try {
                const response = await fetch(orderForm.action, {
                    method: 'POST',
                    headers: { 'Accept': 'application/json' },
                    body: new FormData(orderForm),
                });

                if (response.ok) {
                    orderForm.hidden = true;
                    successMsg.hidden = false;
                    errorMsg.hidden = true;
                } else {
                    throw new Error('Chyba serveru');
                }
            } catch {
                errorMsg.hidden = false;
                submitBtn.disabled = false;
                submitBtn.textContent = 'Odeslat objednávku';
            }
        });
    }
});
