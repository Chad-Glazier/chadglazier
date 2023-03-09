import style from "./Project.module.css";
import Link from "next/link";
import ProjectProps from "./ProjectProps";

export default function Project(
  { title, description, projectLink,
    githubLink, image }: ProjectProps
) {
  return (
    <div className={style.main}>
      <h3 className={style.title}>{title}</h3>
      <div className={style.summary}>
        <img 
          className={style.image}
          src={image}
          alt={`image of the ${title} website`}
        />        
        <div className={style.description}>
          {Array.isArray(description) ?
            description.map((paragraph, index) => <p key={index}>{paragraph}</p>) 
            : <p>{description}</p>
          }
          <p>
            View the project <Link href={projectLink} target="_blank">
              here
            </Link>
          </p>
          {githubLink &&
            <p>
              View the source code
              <Link href={githubLink} target="_blank">
                here
              </Link>
            </p>
          }      
        </div>
      </div>
    </div>
  )
}