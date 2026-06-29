// Style Configuration
const STYLE_CONFIG = {
    // Global Font Families
    fonts: {
        primary: "'Montserrat', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
        secondary: "'Roboto Slab', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
        body: "-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', sans-serif"
    },

    // Global Color Palette
    colors: {
        primary: '#ffc800',
        secondary: '#ff6b00',
        success: '#28a745',
        danger: '#dc3545',
        warning: '#ffc107',
        info: '#17a2b8',
        light: '#f8f9fa',
        dark: '#212529',
        muted: '#6c757d',
        white: '#ffffff',
        black: '#000000'
    },

    // Section Configurations
    sections: {
        // Navbar styling
        navbar: {
            backgroundColor: '#212529',
            textColor: '#ffffff',
            font: "'Montserrat', sans-serif",
            fontSize: '0.85rem'
        },

        // Masthead/Hero section
        masthead: {
            backgroundColor: 'rgba(33, 37, 41, 0.9)',
            textColor: '#ffffff',
            headingFont: "'Roboto Slab', sans-serif",
            headingFontSize: '3.5rem',
            subheadingFont: "'Montserrat', sans-serif",
            subheadingFontSize: '1.5rem',
            subheadingColor: '#ffc800',
            buttonBackgroundColor: '#ffc800',
            buttonTextColor: '#212529',
            backgroundImage: './assets/img/bg.webp',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            minHeight: '600px'
        },

        // Services section
        services: {
            backgroundColor: '#ffffff',
            textColor: '#212529',
            headingFont: "'Roboto Slab', sans-serif",
            headingFontSize: '2.5rem',
            headingColor: '#212529',
            subheadingFont: "'Montserrat', sans-serif",
            subheadingFontSize: '1.25rem',
            subheadingColor: '#6c757d',
            tileBackgroundColor: '#ffffff',
            tileTitleFont: "'Montserrat', sans-serif",
            tileTitleFontSize: '1.25rem',
            tileTitleColor: '#212529',
            tileDescriptionColor: '#6c757d',
            iconColor: '#ffc800',
            padding: '100px 0'
        },

        // Portfolio section
        portfolio: {
            backgroundColor: '#f8f9fa',
            textColor: '#212529',
            headingFont: "'Roboto Slab', sans-serif",
            headingFontSize: '2.5rem',
            headingColor: '#212529',
            subheadingFont: "'Montserrat', sans-serif",
            subheadingFontSize: '1.25rem',
            subheadingColor: '#6c757d',
            itemTitleFont: "'Montserrat', sans-serif",
            itemTitleFontSize: '1.25rem',
            itemTitleColor: '#212529',
            itemCategoryColor: '#6c757d',
            hoverOverlayBackgroundColor: 'rgba(255, 200, 0, 0.9)',
            padding: '100px 0'
        },

        // About/Timeline section
        about: {
            backgroundColor: '#ffffff',
            textColor: '#212529',
            headingFont: "'Roboto Slab', sans-serif",
            headingFontSize: '2.5rem',
            headingColor: '#212529',
            subheadingFont: "'Montserrat', sans-serif",
            subheadingFontSize: '1.25rem',
            subheadingColor: '#6c757d',
            timelineYearFont: "'Montserrat', sans-serif",
            timelineYearFontSize: '1.5rem',
            timelineYearColor: '#ffc800',
            timelineTitleFont: "'Roboto Slab', sans-serif",
            timelineTitleFontSize: '1.5rem',
            timelineTitleColor: '#212529',
            timelineDescriptionColor: '#6c757d',
            timelineImageBackgroundColor: '#ffc800',
            padding: '100px 0'
        },

        // Team section
        team: {
            backgroundColor: '#f8f9fa',
            textColor: '#212529',
            headingFont: "'Roboto Slab', sans-serif",
            headingFontSize: '2.5rem',
            headingColor: '#212529',
            subheadingFont: "'Montserrat', sans-serif",
            subheadingFontSize: '1.25rem',
            subheadingColor: '#6c757d',
            memberNameFont: "'Montserrat', sans-serif",
            memberNameFontSize: '1.25rem',
            memberNameColor: '#212529',
            memberRoleFont: "'Montserrat', sans-serif",
            memberRoleColor: '#6c757d',
            descriptionColor: '#6c757d',
            socialIconBackgroundColor: '#212529',
            socialIconColor: '#ffffff',
            padding: '100px 0'
        },

        // Contact section
        contact: {
            backgroundColor: '#ffffff',
            textColor: '#212529',
            headingFont: "'Roboto Slab', sans-serif",
            headingFontSize: '2.5rem',
            headingColor: '#212529',
            subheadingFont: "'Montserrat', sans-serif",
            subheadingFontSize: '1.25rem',
            subheadingColor: '#6c757d',
            formLabelFont: "'Montserrat', sans-serif",
            formLabelColor: '#212529',
            formInputBackgroundColor: '#ffffff',
            formInputBorderColor: '#dee2e6',
            formInputTextColor: '#212529',
            submitButtonBackgroundColor: '#ffc800',
            submitButtonTextColor: '#212529',
            successMessageColor: '#28a745',
            errorMessageColor: '#dc3545',
            padding: '100px 0'
        },

        // Footer section
        footer: {
            backgroundColor: '#212529',
            textColor: '#ffffff',
            copyrightFont: "'Montserrat', sans-serif",
            copyrightColor: '#ffffff',
            linkColor: '#ffc800',
            linkHoverColor: '#ffffff',
            socialIconColor: '#ffffff',
            socialIconBackgroundColor: '#212529',
            padding: '25px 0'
        }
    }
};
