import React, { createContext, useState } from "react";
import html2pdf from "html2pdf.js";
import { v4 as uuid } from "uuid";
import aboutData from "../Data/aboutData.js";
import contactData from "../Data/contactData.js";
import imgData from "../Data/ImgData.js";
import informalEducationData from "../Data/informalEducationData.js";
import workExperienceData from "../Data/workExperienceData.js";
import educationData from "../Data/educationData.js";
import languageData from "../Data/languagesData.js";
import achievementData from "../Data/achievementData.js";
import skilsData from "../Data/skilsData.js";

const Context = createContext({});
const Provider = (props) => {
  ///TIPS
  const [isShownTip, setIsShownTip] = useState(false);
  const [editedCvTip, setEditedCvTip] = useState("");
  const mouseTipsClick = (e) => {
    setIsShownTip(true);
    setEditedCvTip(e.currentTarget.attributes.getNamedItem("data-tips").value);
  };
  //!!!!!!
  //Clicked cv vategory
  const [clickedCategory, setClickedCategory] = useState("");
  const chooseCategory = (e) => {
    setClickedCategory(
      e.currentTarget.parentElement.parentElement.parentElement.children[0]
        .innerText
    );
  };
  //!!!!!1
  //ABOUT
  const [about, setAbout] = useState(aboutData);
  const updateAboutInput = (e, id) => {
    setAbout([
      ...about.map((el) => {
        if (el.id === id) {
          el[e.target.name] = e.target.value;
        }
        return el;
      }),
    ]);
  };
  //!!!!!!
  // Img
  const [img, setImg] = useState(imgData);
  const fileUploadInputChange = (e) => {
    e.target.value && setImg({ img: URL.createObjectURL(e.target.files[0]) });
  };
  // !!!!!!!!!!
  //CONTACT fns
  const [contact, setContact] = useState(contactData);
  const updateContactInputs = (event, index) => {
    setContact([
      ...contact.map((el, idx) => {
        if (idx === index) {
          el.text = event.target.value;
        }
        return el;
      }),
    ]);
  };
  const deleteContact = () => {
    setContact([...contact.filter((el, idx) => idx !== 3)]);
  };
  //!!!!!!!
  //WORK EXPERIENCE fns
  const [workExperience, setWorkExperience] = useState(workExperienceData);
  const updateWorkExperience = (e, id) => {
    setWorkExperience([
      ...workExperience.map((el) => {
        if (el.id === id) {
          el[e.target.name] = e.target.value;
        }
        return el;
      }),
    ]);
  };
  const addExperience = () => {
    const newExperience = {
      id: uuid(),
      title: "",
      company: "",
      mnthStart: "",
      yearStart: "",
      mnthEnd: "",
      yearEnd: "",
      city: "",
      country: "",
      check: false,
      accomplishments: "",
      jobDescription: [
        { id: uuid(), task: "New Task" },
        { id: uuid(), task: "New Task" },
      ],
    };
    setWorkExperience([...workExperience, newExperience]);
  };
  const deleteExperience = (id) => {
    setWorkExperience([...workExperience.filter((exp) => exp.id !== id)]);
  };

  const updateCheckValue = (e, id) => {
    setWorkExperience([
      ...workExperience.map((el) => {
        if (el.id === id) {
          if (e.target.name === "check") {
            el[e.target.name] = !e.target.checked;
            return el;
          }
          el[e.target.name] = e.target.value;
        }
        return el;
      }),
    ]);
  };
  //TASK fns
  const addWorkTask = (parentId) => {
    const newWorkTask = {
      id: uuid(),
      task: "New Task",
    };
    const indexOfParent = workExperience.findIndex((el) => el.id === parentId);
    let updated = [...workExperience];
    updated[indexOfParent].jobDescription.push(newWorkTask);
    setWorkExperience(updated);
  };
  const deleteWorkTask = (index, parentId) => {
    const workExperienceEditing = workExperience.findIndex(
      (el) => el.id === parentId
    );
    const updated = [...workExperience];
    updated[workExperienceEditing].jobDescription.splice(index, 1);
    setWorkExperience(updated);
  };
  const updateWorkTaskInputs = (e, index, parentId) => {
    const { value } = e.target;
    const workExperienceEditing = workExperience.findIndex(
      (el) => el.id === parentId
    );
    const updated = [...workExperience];
    updated[workExperienceEditing].jobDescription[index].task = value;
    setWorkExperience(updated);
  };
  //!!!!!!!!!!!
  //-!!!!!!!!!!!!!!
  //EDUCATION fns
  const [education, setEducation] = useState(educationData);
  const updateEducation = (e, id) => {
    setEducation([
      ...education.map((el) => {
        if (el.id === id) {
          el[e.target.name] = e.target.value;
        }
        return el;
      }),
    ]);
  };
  const addEducation = () => {
    const newEducation = {
      id: uuid(),
      title: "",
      company: "",
      mnthStart: "",
      yearStart: "",
      mnthEnd: "",
      yearEnd: "",
      city: "",
      country: "",
      accomplishments: "",
      edDescription: [
        { id: uuid(), task: "Thing Learned" },
        { id: uuid(), task: "Thing Learned" },
      ],
    };
    setEducation([...education, newEducation]);
  };
  const deleteEducation = (id) => {
    setEducation([...education.filter((exp) => exp.id !== id)]);
  };
  const updateCheckEducationValue = (e, id) => {
    setEducation([
      ...education.map((el) => {
        if (el.id === id) {
          if (e.target.name === "check") {
            el[e.target.name] = !e.target.checked;
            return el;
          }
          el[e.target.name] = e.target.value;
        }
        return el;
      }),
    ]);
  };
  //TASK fns
  const addEdTask = (parentId) => {
    const newEdTask = {
      id: uuid(),
      task: "New Study Item",
    };
    const indexOfParent = education.findIndex((el) => el.id === parentId);
    let updated = [...education];
    updated[indexOfParent].edDescription.push(newEdTask);
    setEducation(updated);
  };
  const deleteEdTask = (index, parentId) => {
    const educationEditing = education.findIndex((el) => el.id === parentId);
    const updated = [...education];
    updated[educationEditing].edDescription.splice(index, 1);
    setEducation(updated);
  };
  const updateEdTaskInputs = (e, index, parentId) => {
    const { value } = e.target;
    const educationEditing = education.findIndex((el) => el.id === parentId);
    const updated = [...education];
    updated[educationEditing].edDescription[index].task = value;
    setEducation(updated);
  };
  //!!!!!!!!!!!
  //-!!!!!!!!!!!!!!
  //SKILLS fns
  const [skills, setSkils] = useState(skilsData);

  const updateSkillInput = (e, id) => {
    setSkils([
      ...skills.map((el) => {
        if (el.id === id) {
          el.skill = e.target.value;
        }
        return el;
      }),
    ]);
  };
  const deleteSkill = (e, id) => {
    setSkils([...skills.filter((skill) => skill.id !== id)]);
  };
  const addSkill = () => {
    setSkils([...skills, { id: uuid(), skill: `New Skill`, level: 2 }]);
  };

  const handleSkillLevel = (e, id) => {
    const updatedValue = [...skills];
    const index = updatedValue.findIndex((el) => el.id === id);
    updatedValue[index].level = e;
    setSkils(updatedValue);
  };
  //!!!!!!!!!1
  //ACHIEVEMENT fns
  const [achievement, setAchievement] = useState(achievementData);
  const updateAchievementInput = (e, id) => {
    setAchievement([
      ...achievement.map((el) => {
        if (el.id === id) {
          el[e.target.name] = e.target.value;
        }
        return el;
      }),
    ]);
  };
  const addAchievement = () => {
    const newAchievement = {
      id: uuid(),
      achv: "",
      desc: "",
    };
    setAchievement([...achievement, newAchievement]);
  };
  const deleteAchievement = (id) => {
    setAchievement([...achievement.filter((el) => el.id !== id)]);
  };
  //!!!!!!!!!
  //LANGUAGE fns
  const [language, setLanguage] = useState(languageData);
  const updateLanguageInput = (e, id) => {
    setLanguage([
      ...language.map((el) => {
        if (el.id === id) {
          el.language = e.target.value;
        }
        return el;
      }),
    ]);
  };
  const deleteLanguage = (e, id) => {
    setLanguage([...language.filter((el) => el.id !== id)]);
  };
  const addLanguage = () => {
    setLanguage([
      ...language,
      {
        id: uuid(),
        language: "Language",
        level: "",
      },
    ]);
  };
  const languageChangeHandler = (e, idx) => {
    const { name, value, className } = e.target;
    let updated = language.slice();
    if (name === "language") {
      updated[idx].language = value;
    } else {
      updated[idx].level = Number(className);
    }
    setLanguage(updated);
  };
  //INFORMAL EDUCATION fns
  const [informalEd, setInformalEd] = useState(informalEducationData);

  const updateInformalEdInput = (e, id) => {
    setInformalEd([
      ...informalEd.map((el) => {
        if (el.id === id) {
          el.text = e.target.value;
        }
        return el;
      }),
    ]);
  };

  const addInformalEd = () => {
    setInformalEd([...informalEd, { id: uuid(), text: `New One` }]);
  };
  const deleteInformalEd = (e, id) => {
    setInformalEd([...informalEd.filter((el) => el.id !== id)]);
  };
  ///!!!!!!!!
  //DOWNLOAD PDF
  const [modal, setModal] = useState(false);
  const [isLinkedInChecked, setLinkedInChecked] = useState(false);
  const [isWeAreLaikaChecked, setIsWeAreLaikaChecked] = useState(false);
  const handleLinkedIn = (value) => {
    setLinkedInChecked(value);
  };
  const handleWeAreLaika = (value) => {
    setIsWeAreLaikaChecked(value);
  };

  const handleDownload = (el) => {
    if (isLinkedInChecked && isWeAreLaikaChecked) {
      window.scrollTo(0, 0);
      let opt = {
        margin: [12, 0, 0, 0],
        filename: "",
        image: { type: "png", quality: 1 },
        html2canvas: { scale: 2, useCORS: true },
        jsPDF: { unit: "mm", format: "letter" },
      };
      html2pdf().from(el).set(opt).save();
    } else {
      setModal(true);
    }
  };
  const handleCloseModal = () => {
    setModal(false);
  };
  //!!!!!
  //!!!!!!!!!
  const contextObj = {
    //TIPS
    isShownTip,
    editedCvTip,
    mouseTipsClick,
    //!!!!!1
    //ABOUT
    about,
    updateAboutInput,
    //!!!!!!!!!!
    //Img
    img,
    fileUploadInputChange,
    //!!!
    //CONTACT
    contact,
    updateContactInputs,
    deleteContact,
    //!!!!!!
    //WORK EXPERIENCE
    workExperience,
    updateWorkExperience,
    addExperience,
    deleteExperience,
    updateCheckValue,
    //!!!!!
    //EDUCATION
    education,
    updateCheckEducationValue,
    updateEducation,
    addEducation,
    deleteEducation,
    //!!!!!!
    //SKILLS
    handleSkillLevel,
    skills,
    updateSkillInput,
    deleteSkill,
    addSkill,
    //!!!!!!!
    //ACHIEVEMENT
    achievement,
    updateAchievementInput,
    deleteAchievement,
    addAchievement,
    //!!!!!!!!
    //LANGUAGE
    language,
    updateLanguageInput,
    addLanguage,
    deleteLanguage,
    languageChangeHandler,
    //!!!!!
    // INFORMAL EDUCATION
    informalEd,
    updateInformalEdInput,
    addInformalEd,
    deleteInformalEd,
    //!!!!!!!
    //TASK
    addWorkTask,
    deleteWorkTask,
    updateWorkTaskInputs,
    addEdTask,
    deleteEdTask,
    updateEdTaskInputs,
    //!!!!!!!!
    //PDF
    modal,
    handleCloseModal,
    handleLinkedIn,
    handleWeAreLaika,
    handleDownload,
    isWeAreLaikaChecked,
    isLinkedInChecked,
    //!!!!!
    chooseCategory,
    clickedCategory,

    ///!!!!!!
  };

  return (
    <>
      <Context.Provider value={contextObj}>{props.children}</Context.Provider>
    </>
  );
};

export const ContextProvider = Provider;
export const CvContext = Context;
