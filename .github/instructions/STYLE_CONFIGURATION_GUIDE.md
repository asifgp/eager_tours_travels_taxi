# Style Configuration Guide

All styling for the Eagle Tours website is now parameterized and centralized in `js/style.js`. This allows you to easily customize colors, fonts, and layouts without touching CSS or HTML files.

## File Structure

- **`js/style.js`** - Main style configuration file containing the `STYLE_CONFIG` object
- **`js/data.js`** - Data configuration (content, not styling)
- **`js/app.js`** - Application logic that applies styles from `STYLE_CONFIG`

## How to Customize Styles

### 1. Global Fonts
Edit the `fonts` section in `js/style.js`:
```javascript
fonts: {
    primary: "'Montserrat', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
    secondary: "'Roboto Slab', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
    body: "-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', sans-serif"
}
```

### 2. Global Colors
Edit the `colors` section in `js/style.js`:
```javascript
colors: {
    primary: '#ffc800',      // Yellow
    secondary: '#ff6b00',    // Orange
    success: '#28a745',      // Green
    danger: '#dc3545',       // Red
    warning: '#ffc107',      // Amber
    info: '#17a2b8',         // Cyan
    light: '#f8f9fa',        // Light Gray
    dark: '#212529',         // Dark Gray
    muted: '#6c757d',        // Gray
    white: '#ffffff',        // White
    black: '#000000'         // Black
}
```

### 3. Section-Specific Styling

Each section has its own configuration object. For example, to customize the Services section:

```javascript
services: {
    backgroundColor: '#ffffff',           // Section background
    textColor: '#212529',                 // Default text color
    headingFont: "'Roboto Slab', sans-serif",  // Heading font
    headingFontSize: '2.5rem',           // Heading size
    headingColor: '#212529',             // Heading color
    subheadingFont: "'Montserrat', sans-serif", // Subheading font
    subheadingFontSize: '1.25rem',      // Subheading size
    subheadingColor: '#6c757d',         // Subheading color
    tileBackgroundColor: '#ffffff',      // Tile/card background
    tileTitleFont: "'Montserrat', sans-serif",  // Tile title font
    tileTitleFontSize: '1.25rem',       // Tile title size
    tileTitleColor: '#212529',           // Tile title color
    tileDescriptionColor: '#6c757d',    // Tile description color
    iconColor: '#ffc800',                // Icon color
    padding: '100px 0'                   // Section padding
}
```

## Available Sections to Customize

1. **navbar** - Navigation bar styling
2. **masthead** - Hero/banner section
3. **services** - Services tiles section
4. **portfolio** - Portfolio/gallery section
5. **about** - Timeline/about section
6. **team** - Team members section
7. **contact** - Contact form section
8. **footer** - Footer styling

## Example: Change Primary Theme Color

To change the primary color from gold (#ffc800) to purple (#9b59b6), edit `STYLE_CONFIG`:

```javascript
// Before
primary: '#ffc800',        // Gold
buttonBackgroundColor: '#ffc800',

// After
primary: '#9b59b6',        // Purple
buttonBackgroundColor: '#9b59b6',
```

Update all references in the relevant sections:
- `masthead.buttonBackgroundColor`
- `services.iconColor`
- `portfolio.hoverOverlayBackgroundColor`
- `about.timelineImageBackgroundColor`
- `contact.submitButtonBackgroundColor`
- `footer.linkColor` and `linkHoverColor`

## Example: Change Font Family

To switch from Montserrat to a different font:

```javascript
fonts: {
    primary: "'Poppins', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
    secondary: "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
    body: "'Open Sans', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif"
}
```

Then update the section fonts to use these new families.

## Example: Create a Dark Theme

To create a dark theme, update the sections:

```javascript
navbar: {
    backgroundColor: '#1a1a1a',
    textColor: '#ffffff',
    ...
},

masthead: {
    backgroundColor: 'rgba(26, 26, 26, 0.95)',
    textColor: '#ffffff',
    subheadingColor: '#ffc800',
    ...
},

services: {
    backgroundColor: '#2d2d2d',
    textColor: '#ffffff',
    headingColor: '#ffffff',
    ...
},
// ... update other sections similarly
```

## Applying Changes

Changes to `js/style.js` are automatically applied when:
1. You refresh the browser (hard refresh with Ctrl+Shift+R recommended)
2. The app re-initializes

No need to modify CSS or HTML files - just update the configuration!

## Common Customizations

### Change Background Color of a Section
Find the section in `STYLE_CONFIG` and modify:
```javascript
backgroundColor: '#rrggbb'  // Use hex color code
```

### Change Text Color
```javascript
textColor: '#rrggbb'        // For body text
headingColor: '#rrggbb'     // For headings
subheadingColor: '#rrggbb'  // For subheadings
```

### Change Font Size
```javascript
headingFontSize: '2.5rem'   // Change the rem value
subheadingFontSize: '1.25rem'
tileTitleFontSize: '1.25rem'
```

### Add Padding to Sections
```javascript
padding: '100px 0'          // Vertical padding of 100px
padding: '50px 20px'        // Custom padding
```

## Notes

- All color values should be in hexadecimal format (#rrggbb)
- Font sizes can use rem, px, or em units
- Padding values follow CSS shorthand (top/bottom left/right)
- The background image for the masthead comes from `data.js` (`masthead.bgImg`)
- Changes are applied via inline styles in the rendered HTML

## Need Help?

Refer to the `QUICK_REFERENCE.md` and `DEVELOPMENT_PLAN.md` for additional information about the project structure.
