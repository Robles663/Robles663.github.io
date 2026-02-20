import avatar from '../assets/images/avatar.jpg';
import hero from '../assets/images/hero.jpg';
import type { SiteConfig } from '../types';

const siteConfig: SiteConfig = {
    website: 'https://example.com',
    avatar: {
        src: avatar,
        alt: 'Ethan Donovan'
    },
    title: 'Alejandro Robles',
    subtitle: 'Este es mi portafolio de analisis de datos',
    description: 'Astro.js and Tailwind CSS theme for blog and portfolio by justgoodui.com',
    image: {
        src: '/dante-preview.jpg',
        alt: 'Dante - Astro.js and Tailwind CSS theme'
    },
    headerNavLinks: [
        {
            text: 'Home',
            href: '/'
        },
        {
            text: 'Projects',
            href: '/projects'
        },
        {
            text: 'Blog',
            href: '/blog'
        },
        {
            text: 'GitHub',
            href: 'https://github.com/Robles663'
        }
    ],
    footerNavLinks: [
        {
            text: 'About',
            href: '/about'
        },
        {
            text: 'Contact',
            href: '/contact'
        },
        {
            text: 'Terms',
            href: '/terms'
        }
    ],
    socialLinks: [
        {
            text: 'LinkedIn',
            href: 'www.linkedin.com/in/alejandrorobleslizarraga'
        }
    ],
    hero: {
        title: 'Hola y bienvenido a mi portafolio!',
        text: "Soy Analista de Datos enfocado en convertir datos en información clara y accionable para la toma de decisiones. Trabajo principalmente con Python y herramientas de análisis para limpiar, transformar y explorar datos, identificando patrones y tendencias que permitan comprender problemas reales desde una perspectiva cuantitativa.  Me caracterizo por un enfoque analítico, aprendizaje continuo y mejora constante de mis habilidades técnicas y metodológicas.  Actualmente continúo fortaleciendo mis competencias en análisis de datos, visualización y resolución de problemas basados en datos, con el objetivo de crecer profesionalmente como Data Analyst y aportar valor en entornos donde la información impulse mejores decisiones.  Sientete libre de revisar mis proyectos",
        image: {
            src: hero,
            alt: 'A person sitting at a desk in front of a computer'
        },
        actions: [
            {
                text: 'LinkedIn',
                href: 'www.linkedin.com/in/alejandrorobleslizarraga'
            }
        ]
    },
    subscribe: {
        enabled: true,
        title: 'Subscribe to Dante Newsletter',
        text: 'One update per week. All the latest posts directly in your inbox.',
        form: {
            action: '#'
        }
    },
    postsPerPage: 8,
    projectsPerPage: 8
};

export default siteConfig;
