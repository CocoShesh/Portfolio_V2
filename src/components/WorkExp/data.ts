interface Experience {
  company: string;
  position: string;
  date: string;
  image: string;
  id: number;
}

export const Work: Experience[] = [
  {
    id: 1,
    company: "Highly Succeed Inc.",
    position: "Frontend Developer",
    date: "January 2024 - April 2024",
    image: "/HSI.jpg",
  },
  {
    id: 2,
    company: "Barangay Sucat",
    position: "Senior High Internship",
    date: "October 2020 - January 2021",
    image: "/city_government_title.jpg",
  },
];
