export interface Project {
    id: number;
    nom: string;
    description: string;
    date_debut: Date;
    date_fin?: Date;
    status: "En cours" | "Terminé"
    type: "Scolaire" | "Professionel" | "Personnel";
    stack?: Technology[];
    roles: string[];
    imageUrl?: string;
    lienGithub?: string;
    lienDemo?: string;
}
export interface Technology {
    nom: string;
    icon?: string;
}
export interface Skills {
    id: number;
    nom: string;
    icon: string;
    niveau: number;
    category: string;
}

export interface APropos {
    nom: string;
    prenom: string;
    date_naissance: Date;
    bio: string;
    lienGithub: string;
    lienLinkedin: string;
}

export interface Entreprise {
    idEntreprise: number;
    nom: string;
    lieu: string;
    pays: string;
    domaine: string;
    role: string;
}

export interface Experience {
    idExperience: number;
    entreprise: string;
    poste: string;
    type: "Stage" | "CDI" | "CDD" | "Alternance" | "Freelance";
    date_debut: Date;
    date_fin?: Date;
    lieu: string;
    pays: string;
    description: string;
    technologies?: Technology[];
    lienEntreprise?: string;
}

export interface Formation {
    idFormation: number;
    date_debut: Date;
    date_fin: Date;
    nom: string;
    etablissement: string;
    lieu: string;
    pays: string;
}

export const Projects: Project[] = [
    {
        id: 1,
        nom: "APE Jules Ferry",
        description: "Application de gestion des bénévoles sur les évennements de l'APE.",
        date_debut: new Date("2025-09-01"),
        date_fin: new Date("2026-04-02"),
        status: "Terminé",
        type: "Scolaire",
        stack: [{ icon: "devicon-angular-plain", nom: "Angular" }, { icon: "fa-brands fa-typescript", nom: "Typescript" }, { nom: "Laravel", icon: "devicon-laravel-original colored" }, { nom: "PHP", icon: "devicon-php-plain colored" }, { nom: "PostgreSQL", icon: "devicon-postgresql-plain colored" }, { nom: "Docker", icon: "devicon-docker-plain colored" }, { nom: "Jasmine", icon: "devicon-jasmine-original" }, { nom: "PHPUnit", icon: "devicon-php-plain colored" }, { nom: "TailwindCSS", icon: "devicon-tailwindcss-original colored" }, { nom: "UML", icon: "devicon-unifiedmodelinglanguage-plain" }],
        roles: ["Analyste", "Concepteur", "Développeur", "Scrum master"],
        imageUrl: "apejulesferry.png",
        lienGithub: "https://github.com/ApeJulesFerryAnglet/SAE-5.01-APE-Jules-Ferry",
        lienDemo: "https://apejulesferry-anglet.fr",
    },
    {
        id: 2,
        nom: "Bibliothèque de jeux vidéo",
        description: "Lors de la fin du cours sur le framework Angular il nous été demandé de faire une application web pour gérer des jeux vidéos.",
        date_debut: new Date("2025-03-25"),
        date_fin: new Date("2025-04-05"),
        status: "Terminé",
        type: "Scolaire",
        stack: [{ nom: "Angular", icon: "devicon-angular-plain" }, { nom: "Angular Material", icon: "devicon-angularmaterial-plain colored" }, { nom: "JSON Server", icon: "devicon-json-plain colored" }],
        roles: ["Développeur"],
        lienGithub: "https://github.com/EtienneDumai/ProjetR4.D.12",
        imageUrl:"projetR4D12.png"
    },
    {
        id: 3,
        nom: "Représentation d'algorithme de plus court chemins",
        description: "Algorithme de plus courts chemins",
        date_debut: new Date("2024-04-08"),
        date_fin: new Date("2024-05-29"),
        status: "Terminé",
        type: "Scolaire",
        stack: [{ nom: "Python", icon: "devicon-python-plain colored" }],
        roles: ["Développeur"],
        lienGithub: "https://github.com/EtienneDumai/S2.02",
        imageUrl:"representationAlgo.png"
    },
    {
        id: 4,
        nom: "Nuit De l'Info 2025",
        description: "La Nuit De l'Info est un événement national visant à developper une application web en une nuit sur un thème donné. Cette année le thème était Numérique Inclusif Responsable et Durable.",
        date_debut: new Date("2025-12-04"),
        date_fin: new Date("2025-12-05"),
        status: "Terminé",
        type: "Personnel",
        stack: [{ nom: "Laravel", icon: "devicon-laravel-original colored" }, { nom: "PHP", icon: "devicon-php-plain colored" }, { nom: "TailwindCSS", icon: "devicon-tailwindcss-original colored" }],
        roles: ["Développeur", "DevOps"],
        imageUrl: "resistTech.png",
        lienGithub: "https://github.com/NDI-2025/NDI-2025",
        lienDemo: "https://impslicks.alwaysdata.net"
    },
    {
        id: 5,
        nom: "Portfolio Web",
        description: "Portfolio Web avec des données statiques, bientôt totalement dynamiques.",
        date_debut: new Date("2026-03-30"),
        status: "En cours",
        type: "Personnel",
        stack: [{ icon: "devicon-angular-plain", nom: "Angular" }, { icon: "fa-brands fa-typescript", nom: "Typescript" }, { nom: "TailwindCSS", icon: "devicon-tailwindcss-original colored" }, ],
        roles: ["Développeur"],
        imageUrl: "portfolio.png",
        lienGithub: "https://github.com/EtienneDumai/Portfolio",
        lienDemo: "https://etiennedumai.github.io/Portfolio/",
    },
    {
        id: 6,
        nom: "Avionics",
        description: "Programme de simulation d'avionique d'un avion pour reprendre du niveau sur des concepts bas niveau.",
        date_debut: new Date("2026-03-19"),
        status: "En cours",
        type: "Personnel",
        stack: [{ icon: "devicon-cplusplus-plain colored", nom: "C++" }],
        roles: ["Développeur"],
        lienGithub: "https://github.com/EtienneDumai/avionics",
    },
];
export const SkillsPerso: Skills[] = [
    {
        id: 1,
        icon: "devicon-angular-plain",
        nom: "Angular",
        niveau: 4,
        category: "Frontend"
    },
    {
        id: 2,
        icon: "devicon-tailwindcss-original colored",
        nom: "TailwindCSS",
        niveau: 3,
        category: "Frontend"
    },
    {
        id: 3,
        icon: "devicon-html5-plain colored",
        nom: "HTML 5",
        niveau: 4,
        category: "Frontend"
    },
    {
        id: 4,
        icon: "devicon-css3-plain colored",
        nom: "CSS",
        niveau: 3,
        category: "Frontend"
    },
    {
        id: 5,
        icon: "devicon-laravel-original colored",
        nom: "Laravel",
        niveau: 4,
        category: "Backend"
    },
    {
        id: 6,
        icon: "devicon-cplusplus-plain colored",
        nom: "C++",
        niveau: 4,
        category: "Systèmes / Bas niveau"
    },
    {
        id: 7,
        icon: "devicon-c-original colored",
        nom: "C",
        niveau: 3,
        category: "Systèmes / Bas niveau"
    },
    {
        id: 8,
        icon: "devicon-archlinux-plain colored",
        nom: "Arch Linux",
        niveau: 2,
        category: "Systèmes / Bas niveau"
    },
    {
        id: 9,
        icon: "devicon-python-plain colored",
        nom: "Python",
        niveau: 3,
        category: "Données"
    },
    {
        id: 10,
        icon: "devicon-mysql-original colored",
        nom: "MySQL",
        niveau: 3,
        category: "Données"
    },
    {
        id: 11,
        icon: "devicon-postgresql-plain colored",
        nom: "PostgreSQL",
        niveau: 3,
        category: "Données"
    },
    {
        id: 12,
        icon: "devicon-mongodb-plain colored",
        nom: "MongoDB",
        niveau: 3,
        category: "Données"
    },
    {
        id: 13,
        icon: "devicon-git-plain colored",
        nom: "Git",
        niveau: 4,
        category: "DevOps / Outils"
    },
    {
        id: 14,
        icon: "devicon-docker-plain colored",
        nom: "Docker",
        niveau: 3,
        category: "DevOps / Outils"
    },
    {
        id: 15,
        icon: "devicon-githubactions-plain colored",
        nom: "GitHub Actions",
        niveau: 3,
        category: "DevOps / Outils"
    },
    {
        id: 16,
        icon: "devicon-githubactions-plain colored",
        nom: "CI/CD",
        niveau: 3,
        category: "DevOps / Outils"
    },
    {
        id: 17,
        icon: "devicon-bash-plain colored",
        nom: "Scripting (Bash)",
        niveau: 4,
        category: "DevOps / Outils"
    },
    {
        id: 18,
        icon: "devicon-php-plain colored",
        nom: "PHP",
        niveau: 4,
        category: "Backend"
    },
    {
        id: 19,
        icon: "devicon-typescript-plain colored",
        nom: "TypeScript",
        niveau: 4,
        category: "Backend"
    },
    {
        id: 20,
        icon: "devicon-nginx-original colored",
        nom: "Nginx",
        niveau: 4,
        category: "DevOps / Outils"
    },

]
export const Experiences: Experience[] = [
    {
        idExperience: 0,
        entreprise: "Geomatika",
        poste: "Développeur web et mobile",
        type: "Alternance",
        date_debut: new Date("2025-04-08"),
        date_fin: new Date("2026-08-31"),
        lieu: "Cambo-les-Bains",
        pays: "France",
        description: "Développement et maintenance d'application web et mobile",
        technologies: [{ nom: "Cordova" }, { nom: "PHP", icon: "devicon-php-plain colored" }, { nom: "HTML", icon: "devicon-html5-plain colored" }, { nom: "JavaScript", icon: "devicon-javascript-plain colored" }, { nom: "PostgreSQL", icon: "devicon-postgresql-plain colored" }, { nom: "SQLite", icon: "devicon-sqlite-plain colored" }, { nom: "Bootstrap", icon: "devicon-bootstrap-plain colored" }],
        lienEntreprise: "https://www.geomatika.fr/",
    },
    {
        idExperience: 1,
        entreprise: "Inviseo",
        poste: "Développeur web",
        type: "Alternance",
        date_debut: new Date("2024-09-01"),
        date_fin: new Date("2025-04-06"),
        lieu: "Saint-Geours-De-Maremne",
        pays: "France",
        description: "Développement et maintenance d'application web",
        technologies: [{ icon: "devicon-angular-plain", nom: "Angular" }, { icon: "devicon-typescript-plain colored", nom: "Typescript" },{nom:"MongoDB", icon:"devicon-mongodb-plain colored"}, {nom:"Express",icon:"devicon-express-original"}, {nom:"Docker", icon:"devicon-docker-plain colored"}],
    }
];

export const Formations: Formation[] = [
    {
        idFormation: 1,
        date_debut: new Date("2023-09-01"),
        date_fin: new Date("2026-07-01"),
        nom: "BUT Informatique",
        etablissement: "IUT de Bayonne et du Pays Basque",
        lieu: "Anglet",
        pays: "France",
    },
    {
        idFormation: 2,
        date_debut: new Date("2020-09-01"),
        date_fin: new Date("2023-07-01"),
        nom: "Baccalauréat spécialité Mathématique, Physique-Chimie, Numérique et Science de l'Informatique",
        etablissement: "Lycée André Malraux",
        lieu: "Biarritz",
        pays: "France",
    },
]



