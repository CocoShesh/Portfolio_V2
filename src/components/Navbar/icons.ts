interface Link {
  title: string;
  src: string;
  link?: string;
}

export const Navlinks: Link[] = [
  {
    title: "Home",
    src: "./icon/house.svg",
    link: "#home",
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
    link: "https://github.com/CocoShesh",
  },
  {
    title: "Linkedin",
    src: "./icon/linkedin.svg",
    link: "https://www.linkedin.com/in/glenard-refamonte-875328282/",
  },
  {
    title: "Facebook",
    src: "./icon/facebook.svg",
    link: "https://www.facebook.com/your.nard/",
  },
  {
    title: "Instagram",
    src: "./icon/twitter.svg",
  },
];
