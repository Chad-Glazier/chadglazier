import NavigationProps from "./NavigationProps";

export default function getNavigationProps(currentPage: string): NavigationProps {
  return {
    links: [
      {
        label: "Home",
        url: "/",
        active: currentPage.toLowerCase() === "home"
      },
      {
        label: "Portfolio",
        url: "/portfolio",
        active: currentPage.toLowerCase() === "portfolio"
      },
      {
        label: "Skills",
        url: "/skills",
        active: currentPage.toLowerCase() === "skills"
      },
      {
        label: "Contact",
        url: "/contact",
        active: currentPage.toLowerCase() === "contact"
      }
    ]
  }
}