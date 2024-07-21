interface Experience {
  company: string;
  position: string;
  date: string;
  image: string;
  id: number;
  responsibilities: string;
}

export const Work: Experience[] = [
  {
    id: 1,
    company: "Highly Succeed Inc.",
    position: "Frontend Developer Intern",
    date: "January 2024 - April 2024",
    image: "/HSI.jpg",
    responsibilities:
      "Transformed UI designs into code. Integrated APIs to ensure seamless functionality. Assisted other interns with their tasks. Ensured responsive design compatibility across various devices and browsers. Participated in daily stand-ups and sprint planning meetings to ensure project milestones were met.",
  },
  {
    id: 2,
    company: "Barangay Sucat",
    position: "Senior High Internship",
    date: "October 2020 - January 2021",
    image: "/city_government_title.jpg",
    responsibilities:
      "Responsible for accurately transcribing recorded meetings into text. Ensured the effective documentation of important discussions and information. ",
  },
];
