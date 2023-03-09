import { NavigationProps, Navigation } from "@/components";
import Head from "next/head";
import style from "./Contact.module.css";
import { navigationProps } from "./staticProps";

export default function Contact() {
  return (
    <>
      <Head>
        <title>Contact | Chad Glazier</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Navigation {...navigationProps} />
      <main className={style.main}>
        
      </main>
    </>
  )
}