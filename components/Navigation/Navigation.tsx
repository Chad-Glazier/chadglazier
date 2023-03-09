import style from "./Navigation.module.css";
import NavigationProps from "./NavigationProps";
import Link from "next/link";
import { DynamicText } from "@/components";
import { FormEvent, ReactNode, useState } from "react";
import { changeNode, sleep } from "@/functions";
import { useRouter } from "next/router";

export default function Navigation(
  { links, onNavigation }: NavigationProps
) {
  const router = useRouter();

  const [navItems, setNavItems] = useState<JSX.Element[]>(
    links.map((link, index) => 
      <Link
        href={link.url}
        className={style.link + (link.active ? " " + style.active : "" )}
        key={index}
        onClick={async (e) => await beforeNavigating(e, link)}
      >
        {link.label}
      </Link>   
    )
  );
  const [heading, setHeading] = useState<ReactNode>(
    <h1><DynamicText onload>{links.find(link => link.active)?.label}</DynamicText></h1>
  );

  async function beforeNavigating(
    e: FormEvent<HTMLAnchorElement>, 
    clickedLink: {label: string, url: string}
  ) {
    e.preventDefault();
    changeNode(
      heading,
      <h1><DynamicText onload>{clickedLink.label}</DynamicText></h1>,
      setHeading,
    );
    onNavigation ? await onNavigation() : await sleep(50);
    router.push(clickedLink.url);
  }

  return (
    <nav className={style.main}>
      <div className={style.menu}>
        {...navItems}
      </div>
      {heading}
    </nav>
  )
}