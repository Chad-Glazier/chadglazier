import { ProjectsProps } from "@/components/Projects";
import { Skill } from "@/types";

export default function getProjects(): ProjectsProps {
  return {
    projects: [
      {
        title: "Vernon Museum Exhibit Website",
        projectLink: "https://exhibit.vernonmuseum.ca/",
        description: "This website was made for the Greater Vernon Museum and Archives to provide an interface for guests to view virtual exhibits.",
        githubLink: "https://github.com/Chad-Glazier/exhibit-site",
        technologies: [
          Skill.Next,
          Skill.Prisma,
          Skill.React,
          Skill.TypeScript
        ],
        image: "/thumbnails/vernon-museum-thumbnail.png"
      }
    ]
  };
}