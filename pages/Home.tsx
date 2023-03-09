import Head from "next/head";
import style from "./Home.module.css";
import { Introduction, Skills, Project, Navigation } from "@/components";
import { getProjects } from "@/functions";
import { navigationProps } from "./staticProps";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Home() {
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    setShowContent(true);

    return () => setShowContent(false);
  }, [])

  return (
    <>
      <Head>
        <title>Portfolio | Chad Glazier</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Navigation {...navigationProps} />
      <main className={style.main + (showContent ? " " + style.fadeIn : "")}>
        <Introduction />
        <Skills />
        <section id="projects">
          {getProjects().map((project, index) =>
            <Project {...project}  key={index} />
          )}          
        </section>
      </main>
    </>
  )
}