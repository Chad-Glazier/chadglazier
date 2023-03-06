import style from "@/styles/Introduction.module.css";
import Link from "next/link";
import { DynamicText } from "@/components";

export default function Introduction() {

  return (
    <section className={style.main} id="introduction">
      <DynamicText onload>
        <h1>Hello, my name is Chad</h1>
        <h1>Hello, my name is Chad Glazier</h1>
      </DynamicText>
      <p>I am a full-time student at Okanagan College, and this April I will complete my Diploma in Computer Information Systems. I am currently looking to enter the workforce as a web developer.</p>
    </section>        
  );
}