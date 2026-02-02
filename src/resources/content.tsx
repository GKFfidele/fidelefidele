import { About, Blog, Gallery, Home, Newsletter, Person, Social, Work } from "@/types";
import { Line, Row, Text } from "@once-ui-system/core";

const person: Person = {
  firstName: "Fidele",
  lastName: "GOUSSIKINDE",
  name: `GOUSSIKINDE Kpessou Fidele`,
  role: "Data Scientist & AI Enthusiast",
  avatar: "/images/avatar.jpg",
  email: "goussikindefidele20@gmail.com",
  location: "Africa/Porto-Novo", // Expecting the IANA time zone identifier, e.g., 'Europe/Vienna'
  languages: ["English", "Français"], // optional: Leave the array empty if you don't want to display languages
};

const newsletter: Newsletter = {
  display: true,
  title: <>Newsletter de {person.firstName}</>,
  description: <>Ma newsletter hebdomadaire sur la créativité et l'ingénierie</>,
};

const social: Social = [
  // Links are automatically displayed.
  // Import new icons in /once-ui/icons.ts
  // Set essentials: true for links you want to show on the about page
  {
    name: "GitHub",
    icon: "github",
    link: "https://github.com/once-ui-system",
    essential: true,
  },
  {
    name: "LinkedIn",
    icon: "linkedin",
    link: "https://www.linkedin.com/company/once-ui/",
    essential: true,
  },
  {
    name: "Instagram",
    icon: "instagram",
    link: "https://www.instagram.com/once_ui/",
    essential: false,
  },
  {
    name: "Threads",
    icon: "threads",
    link: "https://www.threads.com/@once_ui",
    essential: true,
  },
  {
    name: "Email",
    icon: "email",
    link: `mailto:${person.email}`,
    essential: true,
  },
];

const home: Home = {
  path: "/",
  image: "/images/og/home.jpg",
  label: "Accueil",
  title: `Portfolio de ${person.name}`,
  description: `Site web portfolio présentant mon travail en tant que ${person.role}`,
  headline: <>Construire des ponts entre le design et le code</>,
  featured: {
    display: true,
    title: (
      <Row gap="12" vertical="center">
        <strong className="ml-4">Once UI</strong>{" "}
        <Line background="brand-alpha-strong" vert height="20" />
        <Text marginRight="4" onBackground="brand-medium">
          Travail en vedette
        </Text>
      </Row>
    ),
    href: "/work/building-once-ui-a-customizable-design-system",
  },
  subline: (
    <>
      Je suis Fidele, un data scientist et passionné d'IA, où je crée des <br /> expériences utilisateur intuitives. En dehors des heures de travail, je développe mes propres projets.
    </>
  ),
};

const about: About = {
  path: "/about",
  label: "À propos",
  title: `À propos – ${person.name}`,
  description: `Rencontrez ${person.name}, ${person.role} originaire de ${person.location}`,
  tableOfContent: {
    display: true,
    subItems: false,
  },
  avatar: {
    display: true,
  },
  calendar: {
    display: true,
    link: "https://cal.com",
  },
  intro: {
    display: true,
    title: "Introduction",
    description: (
      <>
        Fidele est un data scientist et passionné d'IA basé au Bénin avec une solide formation en mathématiques et informatique.
        Passionné par l'utilisation des données pour résoudre des problèmes complexes, il se spécialise dans l'apprentissage automatique,
        l'analyse statistique et le développement de systèmes intelligents qui génèrent des insights significatifs et l'innovation.
      </>
    ),
  },
  work: {
    display: true, // set to false to hide this section
    title: "Expérience Professionnelle",
    experiences: [
      {
        company: "DataTech Solutions",
        timeframe: "2023 - Présent",
        role: "Data Scientist Senior",
        achievements: [
          <>
            Développé des modèles d'apprentissage automatique qui ont amélioré la précision des prédictions de 35% pour l'analyse
            du comportement client, générant plus de 2M$ de revenus supplémentaires grâce aux campagnes marketing ciblées.
          </>,
          <>
            Dirigé la mise en œuvre de pipelines de données automatisés utilisant Python et les technologies cloud, réduisant
            le temps de traitement des données de 60% et permettant des capacités d'analyse en temps réel.
          </>,
        ],
        images: [
          // optional: leave the array empty if you don't want to display images
          {
            src: "/images/projects/project-01/cover-01.jpg",
            alt: "Projet Data Science",
            width: 16,
            height: 9,
          },
        ],
      },
      {
        company: "AI Innovation Lab",
        timeframe: "2021 - 2023",
        role: "Ingénieur en Apprentissage Automatique",
        achievements: [
          <>
            Conçu et déployé des modèles de vision par ordinateur pour les systèmes de contrôle qualité automatisé,
            atteignant 94% de précision dans la détection des défauts et économisant 25% des coûts de fabrication.
          </>,
          <>
            Construit des applications de traitement du langage naturel pour le service client automatisé,
            traitant 10 000+ requêtes quotidiennes avec un taux de résolution de 85% sans intervention humaine.
          </>,
        ],
        images: [],
      },
    ],
  },
  studies: {
    display: true, // set to false to hide this section
    title: "Formation",
    institutions: [
      {
        name: "Université d'Abomey-Calavi (UAC)",
        description: <>Licence en Mathématiques Appliquées et Informatique - Focus sur la Data Science et l'IA.</>,
      },
      {
        name: "Université d'Abomey-Calavi (UAC)",
        description: <>Licence en Mathématiques - Base en analyse statistique et méthodes computationnelles.</>,
      },
    ],
  },
  technical: {
    display: true, // set to false to hide this section
    title: "Expertise Technique",
    skills: [
      {
        title: "Apprentissage Automatique & IA",
        description: (
          <>Expert dans le développement et le déploiement de modèles ML utilisant TensorFlow, PyTorch et scikit-learn pour diverses applications.</>
        ),
        tags: [
          {
            name: "Python",
            icon: "python",
          },
          {
            name: "TensorFlow",
            icon: "tensorflow",
          },
          {
            name: "PyTorch",
            icon: "pytorch",
          },
        ],
        // optional: leave the array empty if you don't want to display images
        images: [
          {
            src: "/images/projects/project-01/cover-02.jpg",
            alt: "Projet ML",
            width: 16,
            height: 9,
          },
          {
            src: "/images/projects/project-01/cover-03.jpg",
            alt: "Implémentation IA",
            width: 16,
            height: 9,
          },
        ],
      },
      {
        title: "Data Science & Analytics",
        description: (
          <>Compétent en analyse de données, modélisation statistique et visualisation utilisant des outils et frameworks modernes.</>
        ),
        tags: [
          {
            name: "SQL",
            icon: "sql",
          },
          {
            name: "Pandas",
            icon: "pandas",
          },
          {
            name: "Tableau",
            icon: "tableau",
          },
        ],
        // optional: leave the array empty if you don't want to display images
        images: [
          {
            src: "/images/projects/project-01/cover-04.jpg",
            alt: "Tableau de Bord Analytics",
            width: 16,
            height: 9,
          },
        ],
      },
    ],
  },
};

const blog: Blog = {
  path: "/blog",
  label: "Blog",
  title: "Writing about design and tech...",
  description: `Read what ${person.name} has been up to recently`,
  // Create new blog posts by adding a new .mdx file to app/blog/posts
  // All posts will be listed on the /blog route
};

const work: Work = {
  path: "/work",
  label: "Work",
  title: `Projects – ${person.name}`,
  description: `Design and dev projects by ${person.name}`,
  // Create new project pages by adding a new .mdx file to app/blog/posts
  // All projects will be listed on the /home and /work routes
};

const gallery: Gallery = {
  path: "/gallery",
  label: "Gallery",
  title: `Photo gallery – ${person.name}`,
  description: `A photo collection by ${person.name}`,
  // Images by https://lorant.one
  // These are placeholder images, replace with your own
  images: [
    {
      src: "/images/gallery/horizontal-1.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/vertical-4.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/horizontal-3.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/vertical-1.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/vertical-2.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/horizontal-2.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/horizontal-4.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/vertical-3.jpg",
      alt: "image",
      orientation: "vertical",
    },
  ],
};

export { person, social, newsletter, home, about, blog, work, gallery };
