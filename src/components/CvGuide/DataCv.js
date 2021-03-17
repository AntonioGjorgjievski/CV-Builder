import React, { useContext } from "react";
import "../CssForCvBuilder/DataCv.css";
import DataCvImg from "../../images/CV-images/aleksandra.jpg";
import StarRatingComponent from "react-star-rating-controlled-component";
import { CvContext } from "../../Context/ContextProvider";
const DataCv = () => {
  const { mouseTipsClick } = useContext(CvContext);
  return (
    <div className="cv-container">
      <div className="container">
        <div className="row justify-content-center align-items-center pb-4">
          <div
            className="col-12 col-md-3 text-center"
            data-tips="img"
            onClick={mouseTipsClick}
          >
            <img className="rounded-circle aleksandra" src={DataCvImg} alt="" />
          </div>
          <div
            className="col-12 col-md-9"
            data-tips="about"
            onClick={mouseTipsClick}
          >
            <h2 className="font-weight-bold">Aleksandra Janakievska</h2>
            <p className="font-weight-bold grey sz-19 line-height">
              Data Scientist
            </p>
            <p className="line-height">
              Highly accurate and experienced Data Scientist adept at
              collecting, analyzing and interpreting large datasets, developing
              developing new forecasting models, and performing data management
              tasks.
            </p>
          </div>
        </div>
        <div
          className="row justify-content-around py-2 data-contact"
          data-tips="contact"
          onClick={mouseTipsClick}
        >
          <div className="col-auto">
            <p className="mb-0">
              <span>
                <i className="fas fa-envelope mr-2"></i>
              </span>
              aleksandraxx@wearelaika.com
            </p>
          </div>
          <div className="col-auto">
            <p className="mb-0">
              <span>
                <i className="fas fa-mobile-alt mr-2"></i>
              </span>
              xxxxxx
            </p>
          </div>
        </div>
        <div className="row py-4">
          <div className="col-12 col-md-6">
            <div className="row">
              <div
                className="col-12"
                data-tips="workExperience"
                onClick={mouseTipsClick}
              >
                <h4 className="mb-3">WORK EXPERIENCE</h4>
                <p className="sz-19">Data Scientist</p>
                <p className="sz-16">Rocket Corp</p>
                <div className="row">
                  <div className="col-6">
                    <p className="grey sz-14">
                      <i>11/2016 - Present</i>
                    </p>
                    <p className="grey sz-14">
                      <i>Achiemenets/Tasks</i>
                    </p>
                  </div>
                  <div className="col-6 text-right">
                    <p className="grey sz-14">
                      <i>Skopje</i>
                    </p>
                  </div>
                </div>
                <ul className="line-data-ul-list line-height">
                  <li>
                    Collecting, analyzing and interpeting raw data from various
                    websites
                  </li>
                  <li>
                    Collaborating with the Operations and Technology Department
                    on the development of new automated data management/analysis
                    software which increases the overall productivity and cut
                    unnecessary costs
                  </li>
                  <li>Maintaining and managing company's MS SQL server</li>
                </ul>
              </div>
              <div className="col-12">
                <p className="sz-19">Data Science Intern</p>
                <p className="sz-16">Random Co.</p>
                <div className="row">
                  <div className="col-6">
                    <p className="grey sz-14">
                      <i>07/2019 - 10/2019</i>
                    </p>
                    <p className="grey sz-14">
                      <i>Achiemenets/Tasks</i>
                    </p>
                  </div>
                  <div className="col-6 text-right">
                    <p className="grey sz-14">
                      <i>Skopje</i>
                    </p>
                  </div>
                </div>
                <ul className="line-data-ul-list line-height">
                  <li>
                    Reported actionable, statistical and analytical insights to
                    executives for effective strategic positioning in the market
                    place
                  </li>
                  <li>
                    Shadowed data scientist and assist in developing algorithms
                    for predictive modeling
                  </li>
                  <li>
                    Analyzed and processed sophisticated data sets using SAS,
                    MYSQL and Excel
                  </li>
                  <li>Wrote python scripts to automate everyday tasks</li>
                </ul>
              </div>
              <div
                className="col-12"
                data-tips="education"
                onClick={mouseTipsClick}
              >
                <h4 className="mb-3">EDUCATION</h4>
                <p className="sz-19">Data Science Academy</p>
                <p className="sz-16">Brainster</p>
                <div className="row">
                  <div className="col-6">
                    <p className="grey sz-14">
                      <i>01/2019 - 01/2020</i>
                    </p>
                    <p className="grey sz-14">
                      <i>Achiemenets/Tasks</i>
                    </p>
                  </div>
                  <div className="col-6 text-right">
                    <p className="grey sz-14">
                      <i>Skopje</i>
                    </p>
                  </div>
                </div>
                <ul className="data-education-list line-height">
                  <li>Financial management</li>
                  <li>
                    Faculty of Economy, University "St. Cyril and Methodius"
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-6">
            <div className="row pb-4">
              <div
                className="col-12"
                data-tips="skills"
                onClick={mouseTipsClick}
              >
                <h4 className="mb-3">SKILLS</h4>
                <div className="d-flex align-items-center justify-content-between mb-2">
                  <div>
                    <p className="mb-0">Python</p>
                  </div>
                  <StarRatingComponent
                    name="Python"
                    editing={true}
                    renderStarIcon={() => (
                      <div className="ml-2 p-2 rounded-circle"></div>
                    )}
                    starCount={5}
                    value={4}
                  />
                </div>
                <div className="d-flex align-items-center justify-content-between mb-2">
                  <div>
                    <p className="mb-0">MySQL</p>
                  </div>
                  <StarRatingComponent
                    name="MySQL"
                    editing={true}
                    renderStarIcon={() => (
                      <div className="ml-2 p-2 rounded-circle"></div>
                    )}
                    starCount={5}
                    value={4}
                  />
                </div>
                <div className="d-flex align-items-center justify-content-between mb-2">
                  <div>
                    <p className="mb-0">PHP</p>
                  </div>
                  <StarRatingComponent
                    name="PHP"
                    editing={true}
                    renderStarIcon={() => (
                      <div className="ml-2 p-2 rounded-circle"></div>
                    )}
                    starCount={5}
                    value={3}
                  />
                </div>
                <div className="d-flex align-items-center justify-content-between mb-2">
                  <div>
                    <p className="mb-0">R</p>
                  </div>
                  <StarRatingComponent
                    name="R"
                    editing={true}
                    renderStarIcon={() => (
                      <div className="ml-2 p-2 rounded-circle"></div>
                    )}
                    starCount={5}
                    value={3}
                  />
                </div>
                <div className="d-flex align-items-center justify-content-between mb-2">
                  <div>
                    <p className="mb-0">C</p>
                  </div>
                  <StarRatingComponent
                    name="C"
                    editing={true}
                    renderStarIcon={() => (
                      <div className="ml-2 p-2 rounded-circle"></div>
                    )}
                    starCount={5}
                    value={3}
                  />
                </div>
              </div>
            </div>
            <div className="row pb-4">
              <div className="col-12">
                <h4 className="mb-3 achiemenetsData">
                  ACHIEVEMENTS & CERTIFICATES
                </h4>
                <p>
                  The Impact of Targeted Data Management Training for Field
                  Research Projects (06/2019)
                </p>
              </div>
            </div>
            <div className="row pb-4">
              <div
                className="col-12"
                data-tips="language"
                onClick={mouseTipsClick}
              >
                <h4 className="mb-3">LANGUAGES</h4>
                <p className="mb-0">English</p>
                <p className="text-muted sz-14 line-height">
                  <i>Full Professional Proficiency</i>
                </p>
              </div>
            </div>
            <div className="row">
              <div className="col-12">
                <h4 className="mb-3">INFORMAL EDUCATION</h4>
                <div className="row">
                  <div className="col-auto pb-2">
                    <div>
                      <p className="border p-2 rounded">
                        Artificial Intelligence Webinar
                      </p>
                    </div>
                  </div>
                  <div className="col-auto">
                    <div>
                      <p className="border p-2 rounded">
                        Business Analytics Course
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DataCv;
