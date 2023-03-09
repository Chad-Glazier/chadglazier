import style from "./Portfolio.module.css";
import Head from "next/head";
import { navigationProps, projectProps } from "./staticProps";
import { Navigation } from "@/components";

export default function Portfolio() {
  return (
    <>
      <Head>
        <title>Portfolio | Chad Glazier</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Navigation {...navigationProps} />
      <main className={style.main}>
        
      </main>
    </>
  );
}