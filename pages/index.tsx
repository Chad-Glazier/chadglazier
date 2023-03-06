import Head from "next/head";
import styles from "@/styles/Home.module.css";
import { Introduction, Skills, Projects, DynamicText } from "@/components";
import { getProjects } from "@/functions";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <Head>
        <title>Portfolio | Chad Glazier</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <main className={styles.main}>
        <Introduction />
        <Skills />
        <Projects {...getProjects()} />
      </main>
    </>
  )
}
