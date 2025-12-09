// =======================================================
// Mobile Menu Toggle
// =======================================================
const menuIcon = document.querySelector('#menu-icon');
const navLinks = document.querySelector('.nav-links');

if (menuIcon && navLinks) {
    menuIcon.addEventListener('click', () => {
        navLinks.classList.toggle('active');
        menuIcon.classList.toggle('fa-xmark');
    });

    // Close menu when clicking outside
    document.addEventListener('click', (e) => {
        if (!navLinks.contains(e.target) && !menuIcon.contains(e.target)) {
            navLinks.classList.remove('active');
            menuIcon.classList.remove('fa-xmark');
        }
    });

    // Close menu when clicking a nav link
    navLinks.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            navLinks.classList.remove('active');
            menuIcon.classList.remove('fa-xmark');
        });
    });
}

// =======================================================
// THEME TOGGLE (dark / light) - restores previous behavior
// =======================================================
const themeIcon = document.querySelector('#theme-icon');
const body = document.body;
const darkModeKey = 'darkModeEnabled';
// Debug helpers to help verify toggle behavior in the browser console
console.log('[theme] script loaded. themeIcon found?', !!themeIcon);

function applyTheme(isDark) {
    if (isDark) {
        body.classList.add('dark-mode');
        document.documentElement.classList.add('dark-mode');
        if (themeIcon) {
            themeIcon.classList.remove('fa-moon');
            themeIcon.classList.add('fa-sun');
        }
    } else {
        body.classList.remove('dark-mode');
        document.documentElement.classList.remove('dark-mode');
        if (themeIcon) {
            themeIcon.classList.remove('fa-sun');
            themeIcon.classList.add('fa-moon');
        }
    }
}

if (themeIcon) {
    const saved = localStorage.getItem(darkModeKey);
    console.log('[theme] saved localStorage value:', saved);
    if (saved === 'true') {
        applyTheme(true);
    } else if (saved === 'false') {
        applyTheme(false);
    } else {
        // default: keep current body class (if any) or light
        applyTheme(body.classList.contains('dark-mode'));
    }

    themeIcon.addEventListener('click', () => {
        const isDark = body.classList.contains('dark-mode');
        const next = !isDark;
        console.log('[theme] toggling theme ->', next ? 'dark' : 'light');
        applyTheme(next);
        localStorage.setItem(darkModeKey, next);
    });
}

// =======================================================
// CONTACT FORM (unchanged)
// =======================================================
const contactForm = document.querySelector('.contact-form');
const submitButton = document.querySelector('.contact-form .btn');
const formActionUrl = contactForm ? contactForm.action : '';

if (contactForm) {
    contactForm.addEventListener('submit', async (e) => {
        e.preventDefault();
        submitButton.textContent = 'Enviando...';
        submitButton.disabled = true;
        const formData = new FormData(contactForm);
        try {
            const response = await fetch(formActionUrl, {
                method: 'POST',
                body: formData,
                headers: {
                    'Accept': 'application/json'
                }
            });
            if (response.ok) {
                contactForm.reset();
                submitButton.textContent = 'Enviado com Sucesso!';
                setTimeout(() => {
                    submitButton.textContent = 'Submit';
                    submitButton.disabled = false;
                }, 4000);
            } else {
                alert('Ocorreu um erro ao enviar a mensagem. Tente novamente.');
                submitButton.textContent = 'Falha no Envio';
                submitButton.disabled = false;
            }
        } catch (error) {
            console.error('Erro de rede:', error);
            alert('Erro de conexão. Verifique sua rede e tente novamente.');
            submitButton.textContent = 'Submit';
            submitButton.disabled = false;
        }
    });
}