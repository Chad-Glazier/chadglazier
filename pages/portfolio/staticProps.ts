import { getNavigationProps, NavigationProps, ProjectProps } from "@/components"

export const navigationProps: NavigationProps = getNavigationProps("Portfolio");

export const projectProps: ProjectProps[] = [
  {
    title: "Vernon Museum Exhibit Website",
    projectLink: "https://vernonmuseum.ca/",
    description: [
      "This website was made for the Greater Vernon Museum and Archives to showcase their virtual exhibits.",
      "For this project, I developed a website for museum guests to browse virtual exhibits. In addition, I made another set of pages and an API with robust authentication for the administrator to create, edit and publish virtual exhibits."
    ],
    image: "/thumbnails/vernon-museum-thumbnail.png"
  }
]