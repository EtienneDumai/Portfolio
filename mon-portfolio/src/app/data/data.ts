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
    nom:string;
    icon?:string;
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
        description: "Lors d'un projet sur la 3ème année de BUT Informatique, l'APE Jules Ferry de l'école primaire portant le même nom nous a demandé de créer une application permettant la communication et la répartition des parents d'élèves sur l'organisation des différents événements organisés par l'APE.",
        date_debut: new Date("2025-09-01"),
        status: "En cours",
        type: "Scolaire",
        stack: [{icon:"fa-brands fa-angular",nom:"Angular"}, {icon:"fa-brands fa-typescript",nom:"Typescript"}, {nom:"Laravel",icon:"fa-brands fa-laravel"}, {nom:"PHP",icon:"fa-brands fa-php"}, {nom:"PostgreSQL", icon:"fa-brands fa-postgresql"}, {nom:"Docker", icon:"fa-brands fa-docker"}, {nom:"Jasmine", icon:"fa-brands fa-js"}, {nom:"PHPUnit", icon:"fa-brands fa-php"}, {nom:"TailwindCSS", icon:"fa-brands fa-tailwind-css"}],
        roles: ["Analyste", "Concepteur", "Développeur", "Scrum master"],
        imageUrl: "",
        lienGithub: "https://github.com/EtienneDumai/SAE-5.01-APE-Jules-Ferry"
    },
    {
        id: 2,
        nom: "Bibliothèque de jeux vidéo",
        description: "Lors de la fin du cours sur le framework Angular il nous été demandé de faire une application web pour gérer des jeux vidéos.",
        date_debut: new Date("2025-03-25"),
        date_fin: new Date("2025-04-05"),
        status: "Terminé",
        type: "Scolaire",
        stack: [{nom:"Angular", icon:"fa-brands fa-angular"}, {nom:"Angular Material",icon:"fa-brands fa-angular"}, {nom:"JSON Server", icon:"fa-solid fa-server"}],
        roles: ["Développeur"],
        lienGithub: "https://github.com/EtienneDumai/ProjetR4.D.12"
    },
    {
        id: 3,
        nom: "Représentation d'algorithme de plus court chemin",
        description: "Lors de la première année pour un projet de fin de semestre il nous été demandé de coder des algorithmes de plus court chemin en prenant comme données les rues de la ville de Bayonne et de faire une représentation graphique pour les visualiser.",
        date_debut: new Date("2024-04-08"),
        date_fin: new Date("2024-05-29"),
        status: "Terminé",
        type: "Scolaire",
        stack: [{nom:"Python", icon:"fa-brands fa-python"}],
        roles: ["Développeur"],
        lienGithub: "https://github.com/EtienneDumai/S2.02",
    },
    {
        id: 3,
        nom: "Nuit De l'Info 2025",
        description: "La Nuit De l'Info est un événement national visant à developper une application web en une nuit sur un thème donné. Cette année le thème était Numérique Inclusif Responsable et Durable. Le but était de démontrer qu'il était possible de se passer des GAFAM avec des solutions libre de droits tout en réalisant certains défis technique ou non.",
        date_debut: new Date("2025-12-04"),
        date_fin: new Date("2025-12-05"),
        status: "Terminé",
        type: "Personnel",
        stack: [{nom:"Laravel", icon:"fa-brands fa-laravel"}, {nom:"PHP",icon:"fa-brands fa-php"}, {nom:"TailwindCSS", icon:"fa-brands fa-tailwind-css"}],
        roles: ["Développeur", "DevOps"],
        lienGithub: "https://github.com/NDI-2025/NDI-2025",
        lienDemo: "https://impslicks.alwaysdata.net"
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
        id: 7,
        icon: "devicon-archlinux-plain colored",
        nom: "Arch Linux",
        niveau: 3,
        category: "Systèmes / Bas niveau"
    },
    {
        id: 8,
        icon: "devicon-python-plain colored",
        nom: "Python",
        niveau: 4,
        category: "Données"
    },
    {
        id: 9,
        icon: "devicon-mysql-original colored",
        nom: "MySQL",
        niveau: 4,
        category: "Données"
    },
    {
        id: 10,
        icon: "devicon-postgresql-plain colored",
        nom: "PostgreSQL",
        niveau: 4,
        category: "Données"
    },
    {
        id: 11,
        icon: "devicon-mongodb-plain colored",
        nom: "MongoDB",
        niveau: 3,
        category: "Données"
    },
    {
        id: 12,
        icon: "devicon-git-plain colored",
        nom: "Git",
        niveau: 4,
        category: "DevOps / Outils"
    },
    {
        id: 13,
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
        nom: "Scripting",
        niveau: 4,
        category: "DevOps / Outils"
    },
]
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
        etablissement:"Lycée André Malraux",
        lieu: "Biarritz",
        pays: "France",
    },
]



