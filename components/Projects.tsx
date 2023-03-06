import style from "@/styles/Projects.module.css";
import { Skill } from "@/types";
import Link from "next/link";
import { DynamicText } from "@/components";
import Image from "next/image";

export interface Project {
  title: string;
  description: string;
  projectLink: string;
  githubLink: string;
  technologies: Skill[];
  image: string;
}

export interface ProjectsProps {
  projects: Project[];
}

export default function Projects({ projects }: ProjectsProps) {
  return (
    <section className={style.main} id="projects">
      <DynamicText>
        <h1>Projects</h1>
        <h1>Websites</h1>
      </DynamicText>
      {projects.map((project: Project, index: number) => {
        return (
          <div key={index} className="project">
            <img className="thumbnail" src={project.image} />
            <Link href={project.projectLink} target="_blank">
              <DynamicText>
                <h2>{project.title}</h2>
                <h2>{`${index + 1}${suffix(index + 1)} Project`}</h2>
              </DynamicText>
            </Link>
            <p>{project.description}</p>
            <p>
              This project was developed with {project.technologies.join(", ")}
            </p>
          </div>
        );
      })}
    </section>
  )
}

function suffix(n: number): string {
  if (n == 1) return "st";
  if (n == 2) return "nd";
  if (n == 3) return "rd";
  return "th";
}