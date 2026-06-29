// Application Data
const APP_DATA = {

    // Navigation items
    navbar: {
        brand: 'Eagle Car Rentals',
        nav: [
            { label: 'Services', href: '#services' },
            { label: 'Fleet', href: '#fleet' },
            { label: 'About', href: '#about' },
            { label: 'Drivers', href: '#team' },
            { label: 'Contact', href: '#contact' }
        ]
    },

    // Masthead section
    masthead: {
        subheading: 'Reliable Cars • Local Drivers • Great Rates',
        heading: 'Explore Kashmir By Road With Eagle',
        buttonText: 'View Fleet',
        buttonHref: '#fleet',
        bgImg: './assets/img/bg.webp'
    },

    // Services section
    services: {
        visible: true,
        heading: 'Our Services',
        subheading: 'Everything you need for comfortable car travel across Kashmir',
        tiles: [
            {
                icon: 'car',
                title: 'Self-drive Rental',
                description: 'Modern, well-maintained cars available for short and long-term rental. Flexible pickup and drop-off.'
            },
            {
                icon: 'user-tie',
                title: 'Chauffeur Service',
                description: 'Professional local drivers with knowledge of safe routes and local attractions.'
            },
            {
                icon: 'plane-arrival',
                title: 'Airport Transfers',
                description: 'On-time pickups and drop-offs to/from the airport and railway stations.'
            }
        ]
    },

    // Portfolio items
    portfolio: {
        visible: true,
        heading: 'Our Fleet',
        subheading: 'Choose from a selection of well-maintained vehicles for every need.',
        tiles: [
            {
                id: 1,
                title: 'Toyota Innova',
                category: '7-seater • MPV',
                imageAlt: './assets/img/portfolio/1.jpg',
                client: 'Comfort • 7 seats',
                description: 'Spacious MPV ideal for families and groups. Comfortable seating and ample luggage space. Rates from INR 3500/day.'
            },
            {
                id: 2,
                title: 'Maruti Suzuki Dzire',
                category: '4-seater • Sedan',
                imageAlt: './assets/img/portfolio/2.jpg',
                client: 'Economy • 4 seats',
                description: 'Fuel-efficient sedan suitable for city travel and short trips. Rates from INR 2000/day.'
            },
            {
                id: 3,
                title: 'Mahindra Thar',
                category: '4-seater • SUV',
                imageAlt: './assets/img/portfolio/3.jpg',
                client: 'Adventure • 4 seats',
                description: 'Robust SUV great for rougher terrain and off-road sightseeing. Rates from INR 4500/day.'
            },
            {
                id: 4,
                title: 'Honda City',
                category: '4-seater • Sedan',
                imageAlt: './assets/img/portfolio/4.jpg',
                client: 'Comfort • 4 seats',
                description: 'Premium sedan with comfortable ride quality. Rates from INR 2500/day.'
            },
            {
                id: 5,
                title: 'Toyota Fortuner',
                category: '7-seater • SUV',
                imageAlt: './assets/img/portfolio/5.jpg',
                client: 'Premium • 7 seats',
                description: 'High-end SUV with powerful performance for long journeys. Rates from INR 7000/day.'
            },
            {
                id: 6,
                title: 'Hatchback Combo',
                category: '2-4 seater • Hatchback',
                imageAlt: './assets/img/portfolio/6.jpg',
                client: 'Budget • 2-4 seats',
                description: 'Compact and economical—best for solo or two-person trips. Rates from INR 1500/day.'
            }
        ]
    },

    // Timeline (About section)
    about: {
        visible: true,
        heading: 'ABOUT EAGLE',
        subheading: 'Local fleet and experienced drivers serving Kashmir since 2010.',
        timeline: [
            {
                year: '2010',
                title: 'Founded in Srinagar',
                description: 'Started as a small taxi service focused on safe, local travel for visitors.',
                inverted: false,
                imageAlt: './assets/img/about/1.jpg'
            },
            {
                year: '2014',
                title: 'Fleet Expansion',
                description: 'Scaled to a mixed fleet of sedans, hatchbacks and SUVs to meet growing demand.',
                inverted: true,
                imageAlt: './assets/img/about/2.jpg'

            },
            {
                year: '2018',
                title: 'Professional Drivers Program',
                description: 'Launched a driver-training program to improve service quality and safety.',
                inverted: false,
                imageAlt: './assets/img/about/3.jpg'
            },
            {
                year: '2022',
                title: 'Online Booking & Expansion',
                description: 'Introduced online booking and added airport transfer services.',
                inverted: true,
                imageAlt: './assets/img/about/4.jpg'
            }
        ],
    },

    // Team members
    team:{
        visible: true,
        heading: 'Our Drivers',
        subheading: 'Experienced and courteous local drivers.',
        members: [
            {
                name: 'Amit Khan',
                role: 'Senior Driver',
                imageAlt: './assets/img/team/1.jpg',
                social: [
                    { icon: 'twitter', url: '#!' },
                    { icon: 'facebook-f', url: '#!' },
                    { icon: 'linkedin-in', url: '#!' }
                ]
            },
            {
                name: 'Munira Begum',
                role: 'Driver & Guide',
                imageAlt: './assets/img/team/2.jpg',
                social: [
                    { icon: 'twitter', url: '#!' },
                    { icon: 'facebook-f', url: '#!' },
                    { icon: 'linkedin-in', url: '#!' }
                ]
            },
            {
                name: 'Rohit Sharma',
                role: 'Airport Specialist',
                imageAlt: './assets/img/team/3.jpg',
                social: [
                    { icon: 'twitter', url: '#!' },
                    { icon: 'facebook-f', url: '#!' },
                    { icon: 'linkedin-in', url: '#!' }
                ]
            }
        ],
        teamDescription: 'Local drivers with clean records, verified IDs, and deep knowledge of the region.'
    },

    // Clients
    clients: {
        visible: false,
        names: [
            { name: 'Microsoft', url: '#!' },
            { name: 'Google', url: '#!' },
            { name: 'Facebook', url: '#!' },
            { name: 'IBM', url: '#!' }
        ],
    },

    // Contact section
    contact: {
        visible: true,
        heading: 'Contact Us',
        subheading: 'For inquiries, call or email us — we respond within 24 hours.',
        phone: '+91 98765 43210',
        email: 'info@eaglecarrentals.example',
        address: 'Main Market, Srinagar, Jammu & Kashmir, India',
        hours: 'Mon–Sun: 06:00 – 22:00'
    },

    // Footer
    footer: {
        copyright: 'Copyright © Your Website 2023',
        social: [
            { icon: 'twitter', url: '#!' },
            { icon: 'facebook-f', url: '#!' },
            { icon: 'linkedin-in', url: '#!' }
        ],
        links: [
            { text: 'Privacy Policy', url: '#!' },
            { text: 'Terms of Use', url: '#!' }
        ]
    }
};
