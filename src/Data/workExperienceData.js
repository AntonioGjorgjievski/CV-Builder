import { v4 as uuid } from "uuid";
const workExperienceData = [
  {
    id: uuid(),
    title: "Position/Title",
    company: "Company/Workplace",
    mnthStart: "00",
    yearStart: "2000",
    mnthEnd: "00",
    yearEnd: "2000",
    city: "City, Country",
    check: false,
    accomplishments: "Accomplishments/Tasks/Duties (Optional)",
    jobDescription: [
      { id: uuid(), task: "Task 1" },
      { id: uuid(), task: "Task 2" },
    ],
  },
];
export default workExperienceData;
