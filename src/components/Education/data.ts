interface Education {
  id: number;
  name: string;
  degree: string;
  date: string;
  image: string;
  about?: string;
}

export const EducationData: Education[] = [
  {
    id: 1,
    name: "Pamantasan Lungsod ng Muntinlupa",
    degree: "Bachelor of Science in Information Technology",
    date: "2020 - 2024",
    image: "./School/college.png",
    about: "Achieved Dean's List recognition during the second year.",
  },
  {
    id: 2,
    name: "Senior High School",
    degree: "ICT Strand",
    date: "2018 - 2020",
    image: "./School/shs.png",
    about:
      "Consistently ranked as an Honor Student in the ICT strand. Achieved Second Honor in class. Participated in various seminars, including 3D printing.",
  },
  {
    id: 3,
    name: "Muntinlupa Business High School",
    degree: "Junior High School",
    date: "2014 - 2018",
    image: "./School/high school.jpg",
    about: "Maintained Honor Student status throughout Junior High School.",
  },
  {
    id: 4,
    name: "Sucat Elementary School",
    degree: "Elementary",
    date: "2008 - 2014",
    image: "./School/elementary.jpg",
    about:
      "Consistently recognized as an Honor Student throughout Elementary School.",
  },
];
