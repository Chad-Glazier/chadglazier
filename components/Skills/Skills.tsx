import style from "./Skills.module.css";
import { DynamicText } from "@/components";

export default function Skills() {
  return (
    <section className={style.main} id="skills">
      <DynamicText>
        <h2>Technical Skills</h2>
        <h2>Programming Skills</h2>
      </DynamicText>
      <DynamicText>
        <h3>Programming Languages</h3>
        <h3>Languages</h3>
      </DynamicText>
      <ul>
        <DynamicText>
          <li>TypeScript</li>
          <li>TypeScript on both Client and Node.js Runtimes</li>
        </DynamicText> 
        <DynamicText>
          <li>Java</li>
        </DynamicText>
        <DynamicText>
          <li>C</li>
        </DynamicText>  
        <DynamicText>
          <li>PHP</li>
        </DynamicText>     
      </ul>
      <DynamicText>
        <h3>Libraries / Frameworks</h3>
        <h3>Web Frameworks and Libraries</h3>
      </DynamicText>
      <ul>
        <DynamicText>
          <li>Next</li>
          <li>NextJS was used to make this website!</li>
        </DynamicText>
        <DynamicText>
          <li>React</li>
          <li>ReactJS</li>
        </DynamicText>
        <DynamicText>
          <li>Express</li>
          <li>ExpressJS</li>
        </DynamicText>
      </ul>
      <DynamicText>
        <h3>Databases</h3>
        <h3>Database Management Systems</h3>
      </DynamicText>
      <ul>
        <DynamicText>
          <li>Prisma</li>
          <li>Prisma Object-Relational Mapper</li>
        </DynamicText>
        <DynamicText>
          <li>Mongo</li>
          <li>MongoDB with Mongoose</li>
        </DynamicText>
        <DynamicText>
          <li>SQL</li>
          <li>MySQL</li>
          <li>Oracle PL/SQL</li>
          <li>SQLite3</li>
        </DynamicText>
      </ul>
      <DynamicText>
        <h2>Soft Skills</h2>
        <h2>Team Skills</h2>
      </DynamicText>
      <p>I have taken a number of courses in Project management and software development methodologies. I am most familiar with Scrum, and have used Jira and Microsoft Projects to manage projects with classmates.</p>
      <p>As a team member, I reliably complete tasks assigned to me and always ensure that the quality of my work is something I can take pride in.</p>
    </section>
  )
}