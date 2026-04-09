
import { Project } from "@/types/types";

export const PROJECTS: Project[] = [
    {
        id: 1,
        title: "SCSU WLL Website Capstone Project",
        description: "Collaborated with university faculty members Miaowei Weng, Erin Larkin, and SCSU webmaster Jian Chan on a capstone project to restructure the World Languages and Literature website. Used HTML/CSS, JavaScript, XAMPP, SQL, and other tools to enhance accessibility, interactivity, and user experience..",
        imageUrl: "/images/project-one.png",
        tags: ["SQL", "HTML/CSS", "JavaScript"],
    },
    {
        id: 2,
        title: "CSC-540 Final Project",
        description: "This is the second project.",
        imageUrl: "/images/project-two.png",
        tags: ["Next.js", "Tailwind CSS"],
    },
    {
        id: 3,
        title: "CSC-330 Final Project",
        description: "This is the third project.",
        imageUrl: "/images/project-three.png",
        tags: ["Node.js", "Express"],
    },
];

export const getProjectById = (id: number): Project | undefined => {
    return PROJECTS.find(project => project.id === id);
};