/*!
* Start Bootstrap - Agency v7.0.12 (https://startbootstrap.com/theme/agency)
* Copyright 2013-2023 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-agency/blob/master/LICENSE)
*/

class AgencyApp {
    constructor(data, styles) {
        this.data = data;
        this.styles = styles || STYLE_CONFIG;
        this.app = document.getElementById('app');
    }

    // Helper method to create inline style strings
    createStyleString(styleObject) {
        return Object.entries(styleObject)
            .map(([key, value]) => {
                const cssKey = key.replace(/([A-Z])/g, '-$1').toLowerCase();
                return `${cssKey}: ${value}`;
            })
            .join('; ');
    }

    init() {
        this.render();
        this.setupEventListeners();
    }

    render() {
        this.app.innerHTML = this.renderNavbar() + 
                            this.renderMasthead() + 
                            (this.data.services.visible ? this.renderServices() : '') + 
                            (this.data.portfolio.visible ? this.renderPortfolio() : '') +
                            (this.data.about.visible ? this.renderAbout() : '') +
                            (this.data.team.visible ? this.renderTeam() : '') +
                            (this.data.clients.visible ? this.renderClients() : '') +
                            (this.data.contact.visible ? this.renderContact() : '') +
                            this.renderFooter() +
                            this.renderPortfolioModals();
    }

    renderNavbar() {
        const navItems = this.data.navbar.nav.map(item => 
            `<li class="nav-item"><a class="nav-link" href="${item.href}" style="color: ${this.styles.sections.navbar.textColor}; font-family: ${this.styles.sections.navbar.font}; font-size: ${this.styles.sections.navbar.fontSize};">${item.label}</a></li>`
        ).join('');

        const navbarStyle = `background-color: ${this.styles.sections.navbar.backgroundColor}; font-family: ${this.styles.sections.navbar.font};`;

        return `
            <nav class="navbar navbar-expand-lg navbar-dark fixed-top" id="mainNav" style="${navbarStyle}">
                <div class="container">
                    <a class="navbar-brand" href="#page-top" style="color: ${this.styles.sections.navbar.textColor}; font-family: ${this.styles.sections.navbar.font};">${this.data.navbar.brand}</a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                        Menu
                        <i class="fas fa-bars ms-1"></i>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarResponsive">
                        <ul class="navbar-nav text-uppercase ms-auto py-4 py-lg-0">
                            ${navItems}
                        </ul>
                    </div>
                </div>
            </nav>
        `;
    }

    renderMasthead() {
        const mastheadBg = this.data.masthead.bgImg 
            ? `background-image: url('${this.data.masthead.bgImg}'); background-size: ${this.styles.sections.masthead.backgroundSize}; background-position: ${this.styles.sections.masthead.backgroundPosition};`
            : `background-color: ${this.styles.sections.masthead.backgroundColor};`;
        
        const mastheadStyle = `${mastheadBg} min-height: ${this.styles.sections.masthead.minHeight};`;
        
        return `
            <header class="masthead" style="${mastheadStyle}">
                <div class="container">
                    <div class="masthead-subheading" style="color: ${this.styles.sections.masthead.subheadingColor}; font-family: ${this.styles.sections.masthead.subheadingFont}; font-size: ${this.styles.sections.masthead.subheadingFontSize};">${this.data.masthead.subheading}</div>
                    <div class="masthead-heading text-uppercase" style="color: ${this.styles.sections.masthead.textColor}; font-family: ${this.styles.sections.masthead.headingFont}; font-size: ${this.styles.sections.masthead.headingFontSize};">${this.data.masthead.heading}</div>
                    <a class="btn btn-primary btn-xl text-uppercase" href="${this.data.masthead.buttonHref}" style="background-color: ${this.styles.sections.masthead.buttonBackgroundColor}; color: ${this.styles.sections.masthead.buttonTextColor}; border-color: ${this.styles.sections.masthead.buttonBackgroundColor};">${this.data.masthead.buttonText}</a>
                </div>
            </header>
        `;
    }

    renderServices() {
        const serviceCards = this.data.services.tiles.map(service => `
            <div class="col-md-4">
                <div style="text-align: center;">
                    <span class="fa-stack fa-4x">
                        <i class="fas fa-circle fa-stack-2x" style="color: ${this.styles.sections.services.iconColor};"></i>
                        <i class="fas fa-${service.icon} fa-stack-1x fa-inverse"></i>
                    </span>
                    <h4 class="my-3" style="color: ${this.styles.sections.services.tileTitleColor}; font-family: ${this.styles.sections.services.tileTitleFont}; font-size: ${this.styles.sections.services.tileTitleFontSize};">${service.title}</h4>
                    <p style="color: ${this.styles.sections.services.tileDescriptionColor};">${service.description}</p>
                </div>
            </div>
        `).join('');

        return `
            <section class="page-section" id="services" style="background-color: ${this.styles.sections.services.backgroundColor}; color: ${this.styles.sections.services.textColor}; padding: ${this.styles.sections.services.padding};">
                <div class="container">
                    <div class="text-center">
                        <h2 class="section-heading text-uppercase" style="color: ${this.styles.sections.services.headingColor}; font-family: ${this.styles.sections.services.headingFont}; font-size: ${this.styles.sections.services.headingFontSize};">${this.data.services.heading}</h2>
                        <h3 class="section-subheading" style="color: ${this.styles.sections.services.subheadingColor}; font-family: ${this.styles.sections.services.subheadingFont}; font-size: ${this.styles.sections.services.subheadingFontSize};">${this.data.services.subheading}</h3>
                    </div>
                    <div class="row text-center">
                        ${serviceCards}
                    </div>
                </div>
            </section>
        `;
    }

    renderPortfolio() {
        const portfolioItems = this.data.portfolio.tiles.map((item, index) => `
            <div class="col-lg-4 col-sm-6 mb-4${index >= 3 ? (index === 3 || index === 4 ? ' mb-lg-0' : ' mb-sm-0') : ''}">
                <div class="portfolio-item">
                    <a class="portfolio-link" data-bs-toggle="modal" href="#portfolioModal${item.id}">
                        <div class="portfolio-hover" style="background-color: ${this.styles.sections.portfolio.hoverOverlayBackgroundColor};">
                            <div class="portfolio-hover-content"><i class="fas fa-plus fa-3x" style="color: white;"></i></div>
                        </div>
                        <img class="img-fluid" src="${item.imageAlt}" alt="${item.title}" loading="lazy" />
                    </a>
                    <div class="portfolio-caption">
                        <div class="portfolio-caption-heading" style="color: ${this.styles.sections.portfolio.itemTitleColor}; font-family: ${this.styles.sections.portfolio.itemTitleFont}; font-size: ${this.styles.sections.portfolio.itemTitleFontSize};">${item.title}</div>
                        <div class="portfolio-caption-subheading" style="color: ${this.styles.sections.portfolio.itemCategoryColor};">${item.category}</div>
                    </div>
                </div>
            </div>
        `).join('');

        return `
            <section class="page-section bg-light" id="fleet" style="background-color: ${this.styles.sections.portfolio.backgroundColor}; color: ${this.styles.sections.portfolio.textColor}; padding: ${this.styles.sections.portfolio.padding};">
                <div class="container">
                    <div class="text-center">
                        <h2 class="section-heading text-uppercase" style="color: ${this.styles.sections.portfolio.headingColor}; font-family: ${this.styles.sections.portfolio.headingFont}; font-size: ${this.styles.sections.portfolio.headingFontSize};">${this.data.portfolio.heading}</h2>
                        <h3 class="section-subheading" style="color: ${this.styles.sections.portfolio.subheadingColor}; font-family: ${this.styles.sections.portfolio.subheadingFont}; font-size: ${this.styles.sections.portfolio.subheadingFontSize};">${this.data.portfolio.subheading}</h3>
                    </div>
                    <div class="row">
                        ${portfolioItems}
                    </div>
                </div>
            </section>
        `;
    }

    renderAbout() {
        const lastContent = '<h4>Be Part<br/>Of Our<br/>Story!</h4>';
        const timelineItems = this.data.about.timeline.map((item, index) => {
            const isInverted = item.inverted ? 'class="timeline-inverted"' : '';

            return `
                <li ${isInverted}>
                    <div class="timeline-image" style="background-color: ${this.styles.sections.about.timelineImageBackgroundColor};">
                                <img class="rounded-circle img-fluid" src="${item.imageAlt}" alt="${item.title}" loading="lazy" />
                            </div>
                    <div class="timeline-panel">
                        <div class="timeline-heading">
                            <h4 style="color: ${this.styles.sections.about.timelineYearColor}; font-family: ${this.styles.sections.about.timelineYearFont}; font-size: ${this.styles.sections.about.timelineYearFontSize};">${item.year}</h4>
                            <h4 class="subheading" style="color: ${this.styles.sections.about.timelineTitleColor}; font-family: ${this.styles.sections.about.timelineTitleFont}; font-size: ${this.styles.sections.about.timelineTitleFontSize};">${item.title}</h4>
                        </div>
                        <div class="timeline-body"><p style="color: ${this.styles.sections.about.timelineDescriptionColor};">${item.description}</p></div>
                    </div>
                </li>
            `;
        }).join('');

        return `
            <section class="page-section" id="about" style="background-color: ${this.styles.sections.about.backgroundColor}; color: ${this.styles.sections.about.textColor}; padding: ${this.styles.sections.about.padding};">
                <div class="container">
                    <div class="text-center">
                        <h2 class="section-heading text-uppercase" style="color: ${this.styles.sections.about.headingColor}; font-family: ${this.styles.sections.about.headingFont}; font-size: ${this.styles.sections.about.headingFontSize};">${this.data.about.heading}</h2>
                        <h3 class="section-subheading" style="color: ${this.styles.sections.about.subheadingColor}; font-family: ${this.styles.sections.about.subheadingFont}; font-size: ${this.styles.sections.about.subheadingFontSize};">${this.data.about.subheading}</h3>
                    </div>
                    <ul class="timeline">
                        ${timelineItems}
                        <li class="timeline-inverted">
                            <div class="timeline-image" style="background-color: ${this.styles.sections.about.timelineImageBackgroundColor};">
                                ${lastContent}
                            </div>
                        </li>
                    </ul>
                </div>
            </section>
        `;
    }

    renderTeam() {
        const teamCards = this.data.team.members.map(member => {
            const socialLinks = member.social.map(social => 
                `<a class="btn btn-dark btn-social mx-2" href="${social.url}" aria-label="${member.name} ${social.icon} Profile" style="background-color: ${this.styles.sections.team.socialIconBackgroundColor}; color: ${this.styles.sections.team.socialIconColor};"><i class="fab fa-${social.icon}"></i></a>`
            ).join('');

            return `
                <div class="col-lg-4">
                    <div class="team-member">
                        <img class="mx-auto rounded-circle" src="${member.imageAlt}" alt="${member.name}" loading="lazy" />
                        <h4 style="color: ${this.styles.sections.team.memberNameColor}; font-family: ${this.styles.sections.team.memberNameFont}; font-size: ${this.styles.sections.team.memberNameFontSize};">${member.name}</h4>
                        <p style="color: ${this.styles.sections.team.memberRoleColor}; font-family: ${this.styles.sections.team.memberRoleFont};">${member.role}</p>
                        ${socialLinks}
                    </div>
                </div>
            `;
        }).join('');

        return `
            <section class="page-section bg-light" id="team" style="background-color: ${this.styles.sections.team.backgroundColor}; color: ${this.styles.sections.team.textColor}; padding: ${this.styles.sections.team.padding};">
                <div class="container">
                    <div class="text-center">
                        <h2 class="section-heading text-uppercase" style="color: ${this.styles.sections.team.headingColor}; font-family: ${this.styles.sections.team.headingFont}; font-size: ${this.styles.sections.team.headingFontSize};">${this.data.team.heading}</h2>
                        <h3 class="section-subheading" style="color: ${this.styles.sections.team.subheadingColor}; font-family: ${this.styles.sections.team.subheadingFont}; font-size: ${this.styles.sections.team.subheadingFontSize};">${this.data.team.subheading}</h3>
                    </div>
                    <div class="row">
                        ${teamCards}
                    </div>
                    <div class="row">
                        <div class="col-lg-8 mx-auto text-center"><p class="large" style="color: ${this.styles.sections.team.descriptionColor};">${this.data.team.teamDescription}</p></div>
                    </div>
                </div>
            </section>
        `;
    }

    renderClients() {
        const clientLinks = this.data.clients.names.map(client => `
            <div class="col-md-3 col-sm-6 my-3">
                <a href="${client.url}" style="display: flex; align-items: center; justify-content: center; height: 100px; font-size: 2rem; color: #999; opacity: 0.5; transition: opacity 0.3s ease;" 
                   onmouseover="this.style.opacity='1'" onmouseout="this.style.opacity='0.5'">
                    <i class="fas fa-${client.name.toLowerCase() === 'microsoft' ? 'windows' : client.name.toLowerCase() === 'google' ? 'google' : 'facebook-f'}"></i>
                </a>
            </div>
        `).join('');

        return `
            <div class="py-5">
                <div class="container">
                    <div class="row align-items-center">
                        ${clientLinks}
                    </div>
                </div>
            </div>
        `;
    }

    renderContact() {
        return `
            <section class="page-section" id="contact" style="background-color: ${this.styles.sections.contact.backgroundColor}; color: ${this.styles.sections.contact.textColor}; padding: ${this.styles.sections.contact.padding};">
                <div class="container">
                    <div class="text-center mb-4">
                        <h2 class="section-heading text-uppercase" style="color: ${this.styles.sections.contact.headingColor}; font-family: ${this.styles.sections.contact.headingFont}; font-size: ${this.styles.sections.contact.headingFontSize};">${this.data.contact.heading}</h2>
                        <h3 class="section-subheading" style="color: ${this.styles.sections.contact.subheadingColor}; font-family: ${this.styles.sections.contact.subheadingFont}; font-size: ${this.styles.sections.contact.subheadingFontSize};">${this.data.contact.subheading}</h3>
                    </div>

                    <div class="row justify-content-center">
                        <div class="col-md-6">
                            <div class="card" style="border: none;">
                                <div class="card-body text-center">
                                    <p style="margin-bottom: 0.5rem;"><strong>Phone:</strong> <a href="tel:${this.data.contact.phone}" style="color: ${this.styles.sections.contact.headingColor};">${this.data.contact.phone}</a></p>
                                    <p style="margin-bottom: 0.5rem;"><strong>Email:</strong> <a href="mailto:${this.data.contact.email}" style="color: ${this.styles.sections.contact.headingColor};">${this.data.contact.email}</a></p>
                                    <p style="margin-bottom: 0.5rem;"><strong>Address:</strong> ${this.data.contact.address}</p>
                                    <p style="margin-bottom: 0.5rem;"><strong>Business Hours:</strong> ${this.data.contact.hours}</p>
                                    <div style="margin-top:1rem;">
                                        ${this.data.footer.social.map(s => `<a class="btn btn-outline-dark btn-social mx-1" href="${s.url}" aria-label="${s.icon}"><i class="fab fa-${s.icon}"></i></a>`).join('')}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        `;
    }

    renderFooter() {
        const socialLinks = this.data.footer.social.map(social => 
            `<a class="btn btn-dark btn-social mx-2" href="${social.url}" aria-label="${social.icon}" style="background-color: ${this.styles.sections.footer.socialIconBackgroundColor}; color: ${this.styles.sections.footer.socialIconColor};"><i class="fab fa-${social.icon}"></i></a>`
        ).join('');

        const footerLinks = this.data.footer.links.map(link => 
            `<a class="link-dark text-decoration-none me-3" href="${link.url}" style="color: ${this.styles.sections.footer.linkColor};">${link.text}</a>`
        ).join('');

        return `
            <footer class="footer py-4" style="background-color: ${this.styles.sections.footer.backgroundColor}; color: ${this.styles.sections.footer.textColor}; padding: ${this.styles.sections.footer.padding} !important;">
                <div class="container">
                    <div class="row align-items-center">
                        <div class="col-lg-4 text-lg-start" style="color: ${this.styles.sections.footer.copyrightColor}; font-family: ${this.styles.sections.footer.copyrightFont};">${this.data.footer.copyright}</div>
                        <div class="col-lg-4 my-3 my-lg-0">
                            ${socialLinks}
                        </div>
                        <div class="col-lg-4 text-lg-end">
                            ${footerLinks}
                        </div>
                    </div>
                </div>
            </footer>
        `;
    }

    renderPortfolioModals() {
        return this.data.portfolio.tiles.map(item => `
            <div class="portfolio-modal modal fade" id="portfolioModal${item.id}" tabindex="-1" role="dialog" aria-hidden="true">
                <div class="modal-dialog">
                    <div class="modal-content">
                        <button type="button" class="close-modal" data-bs-dismiss="modal">
                            <i class="fas fa-times" style="font-size: 1.5rem; color: #212529;"></i>
                        </button>
                        <div class="container">
                            <div class="row justify-content-center">
                                <div class="col-lg-8">
                                    <div class="modal-body">
                                        <h2 class="text-uppercase">${item.title}</h2>
                                        <p class="item-intro text-muted">${item.client} — ${item.category}</p>
                                        <div style="width: 100%; height: 300px; display:flex; align-items:center; justify-content:center; margin-bottom:1.5rem;">
                                            <img src="${item.imageAlt}" alt="${item.title}" loading="lazy" style="max-width:100%; max-height:100%; object-fit:cover;" />
                                        </div>
                                        <p>${item.description}</p>
                                        <ul class="list-inline">
                                            <li style="display: inline-block; margin-right: 2rem; margin-bottom: 1rem;">
                                                <strong>Seats:</strong>
                                                ${item.client}
                                            </li>
                                            <li style="display: inline-block; margin-bottom: 1rem;">
                                                <strong>Category:</strong>
                                                ${item.category}
                                            </li>
                                        </ul>
                                        <button class="btn btn-primary btn-xl text-uppercase" data-bs-dismiss="modal" type="button">
                                            <i class="fas fa-xmark me-1"></i>
                                            Close Project
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        `).join('');
    }

    setupEventListeners() {
        window.addEventListener('DOMContentLoaded', () => {
            this.setupNavbarShrink();
            this.setupScrollSpy();
            this.setupNavbarToggler();
            this.setupFormHandling();
        });
    }

    setupNavbarShrink() {
        const navbarShrink = () => {
            const navbarCollapsible = document.body.querySelector('#mainNav');
            if (!navbarCollapsible) return;
            
            if (window.scrollY === 0) {
                navbarCollapsible.classList.remove('navbar-shrink');
            } else {
                navbarCollapsible.classList.add('navbar-shrink');
            }
        };

        navbarShrink();
        document.addEventListener('scroll', navbarShrink);
    }

    setupScrollSpy() {
        const mainNav = document.body.querySelector('#mainNav');
        if (mainNav) {
            new bootstrap.ScrollSpy(document.body, {
                target: '#mainNav',
                rootMargin: '0px 0px -40%',
            });
        }
    }

    setupNavbarToggler() {
        const navbarToggler = document.body.querySelector('.navbar-toggler');
        const responsiveNavItems = [].slice.call(
            document.querySelectorAll('#navbarResponsive .nav-link')
        );
        responsiveNavItems.forEach(responsiveNavItem => {
            responsiveNavItem.addEventListener('click', () => {
                if (window.getComputedStyle(navbarToggler).display !== 'none') {
                    navbarToggler.click();
                }
            });
        });
    }

    setupFormHandling() {
        const contactForm = document.getElementById('contactForm');
        if (contactForm) {
            contactForm.addEventListener('submit', (event) => {
                event.preventDefault();
                this.handleFormSubmit(contactForm);
            });
        }
    }

    handleFormSubmit(form) {
        const name = document.getElementById('name').value.trim();
        const email = document.getElementById('email').value.trim();
        const phone = document.getElementById('phone').value.trim();
        const pickupLocation = document.getElementById('pickupLocation').value.trim();
        const dropoffLocation = document.getElementById('dropoffLocation').value.trim();
        const pickupDate = document.getElementById('pickupDate').value;
        const returnDate = document.getElementById('returnDate').value;
        const vehicle = document.getElementById('vehicle').value;
        const message = document.getElementById('message').value.trim();

        if (!name || !email || !phone || !pickupLocation || !pickupDate || !returnDate || !vehicle) {
            document.getElementById('submitErrorMessage').classList.remove('d-none');
            return;
        }

        if (!this.isValidEmail(email)) {
            document.getElementById('submitErrorMessage').classList.remove('d-none');
            return;
        }

        // Basic date validation: returnDate should not be before pickupDate
        if (new Date(returnDate) < new Date(pickupDate)) {
            document.getElementById('submitErrorMessage').classList.remove('d-none');
            return;
        }

        // Prepare booking object and save to localStorage (static site only)
        const booking = {
            name, email, phone, pickupLocation, dropoffLocation, pickupDate, returnDate, vehicle, message, createdAt: new Date().toISOString()
        };

        document.getElementById('submitErrorMessage').classList.add('d-none');
        document.getElementById('submitButton').disabled = true;

        try {
            const key = 'eagle_bookings';
            const existing = JSON.parse(localStorage.getItem(key) || '[]');
            existing.push(booking);
            localStorage.setItem(key, JSON.stringify(existing));

            document.getElementById('submitSuccessMessage').classList.remove('d-none');
            form.reset();
        } catch (e) {
            document.getElementById('submitErrorMessage').classList.remove('d-none');
        } finally {
            document.getElementById('submitButton').disabled = false;
            setTimeout(() => document.getElementById('submitSuccessMessage').classList.add('d-none'), 4000);
        }
    }

    isValidEmail(email) {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(email);
    }
}

// Initialize the app when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
    const app = new AgencyApp(APP_DATA, STYLE_CONFIG);
    app.init();
});
