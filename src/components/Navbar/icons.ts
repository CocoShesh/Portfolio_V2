interface Link {
  title: string;
  src: string;
  link: string;
}

export const Navlinks: Link[] = [
  {
    title: "Home",
    src: "./icon/house.svg",
    link: "#about",
  },
  {
    title: "Work Experience",
    src: "./icon/code.svg",
    link: "#work",
  },
  {
    title: "Education",
    src: "./icon/notebook.svg",
    link: "#education",
  },
  {
    title: "Skills",
    src: "./icon/pencil-line.svg",
    link: "#skills",
  },
];

export const SocialLinks: Link[] = [
  {
    title: "Github",
    src: "./icon/github.svg",
    link: "/",
  },
  {
    title: "Linkedin",
    src: "./icon/linkedin.svg",
    link: "/",
  },
  {
    title: "Facebook",
    src: "./icon/facebook.svg",
    link: "/",
  },
  {
    title: "Instagram",
    src: "./icon/twitter.svg",
    link: "/",
  },
];
