import { v4 as uuid } from "uuid";
const educationData = [
  {
    id: uuid(),
    title: "Study program",
    company: "Institution",
    mnthStart: "00",
    yearStart: "2000",
    mnthEnd: "00",
    yearEnd: "2000",
    city: "City, Country",
    check: false,
    accomplishments: "Accomplishments/Tasks/Duties (Optional)",
    edDescription: [
      { id: uuid(), task: "Thing Learned" },
      { id: uuid(), task: "Thing Learned" },
    ],
  },
];
export default educationData;
