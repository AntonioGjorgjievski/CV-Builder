import React, { useContext } from "react";
import "../CssForCvBuilder/DesignCv.css";
import { CvContext } from "../../Context/ContextProvider";
const DesignCv = () => {
  const { mouseTipsClick } = useContext(CvContext);
  return (
    <div className="cv-container">
      <div className="container">
        <div className="row mb-5">
          <div className="col-12 main-design-wrapper">
            <div className="row" data-tips="about" onClick={mouseTipsClick}>
              <div className="col-12 col-md-8 design-info d-flex align-items-end justify-content-center">
                <div>
                  <h1 className="font-weight-bold designer-name">
                    KIRIL <br />
                    NIKOLOVSKI
                  </h1>
                  <h4 className="font-weight-normal line-height designer-desc text-center">
                    GRAPHIC DESIGNER
                  </h4>
                </div>
              </div>
            </div>
            <div className="row about-design pb-3">
              <div className="col-12 col-md-8">
                <p
                  className="line-height "
                  data-tips="about"
                  onClick={mouseTipsClick}
                >
                  Graphic Designer with expertise in branding and logo design,
                  packing design, typography, creative direction and
                  illustration. Oriented into helping small businesses realize
                  their unique vision.
                </p>
              </div>
            </div>
            <div className="row py-4">
              <div className="col-12 col-md-6">
                <div className="row">
                  <div
                    className="col-11"
                    data-tips="workExperience"
                    onClick={mouseTipsClick}
                  >
                    <h5 className="font-weight-bold mb-4">WORK EXPERIENCE</h5>
                    <p className="sz-19">Junior Graphic Designer</p>
                    <p className="sz-16">Brainster.Co, Skopje</p>
                    <div className="row mb-2">
                      <div className="col-6">
                        <p className="grey sz-14">
                          <i>06/2020 - Present</i>
                        </p>
                      </div>
                      <div className="col-6 text-right">
                        <p className="grey sz-14">
                          <i>Skopje</i>
                        </p>
                      </div>
                    </div>
                    <ul className="line-height design-list mb-5">
                      <li className="mb-2">
                        Creating visual concepts to communicate ideas that
                        inspire, inform and captivate consumers. Developing
                        overall layout and production design for ads, brochures,
                        magazines and corporate digital marketing content.
                      </li>
                    </ul>
                    <p className="sz-19">Freelance Graphic Designer</p>
                    <p className="sz-19">Upwork</p>
                    <div className="row mb-2">
                      <div className="col-6">
                        <p className="grey sz-14">
                          <i>06/2020 - Present</i>
                        </p>
                      </div>
                      <div className="col-6 text-right">
                        <p className="grey sz-14">
                          <i>Skopje</i>
                        </p>
                      </div>
                    </div>
                    <ul className="line-height design-list mb-5">
                      <li className="mb-2">
                        Working with international clients and helping them to
                        get their ideas out in a workable way
                      </li>
                      <li className="mb-2">
                        Conceptualizing visuals based on their requirements,
                        Shaping the visual aspects of brand identities, product
                        packingng, book covers, magazines, brochures, posters
                        and many more.
                      </li>
                    </ul>
                  </div>
                  <div
                    className="col-12"
                    data-tips="contact"
                    onClick={mouseTipsClick}
                  >
                    <p>kiril.nikolovskixx@gmail.com</p>
                    <p>xxxxxxxx</p>
                    <p>Skopje, Macedonia</p>
                    <p>linkedin.com/in/kiril-nikolovski</p>
                  </div>
                </div>
              </div>

              <div className="col-6 col-12 col-md-6">
                <div className="row">
                  <div
                    className="col-11 pb-5"
                    data-tips="education"
                    onClick={mouseTipsClick}
                  >
                    <h5 className="font-weight-bold mb-4">EDUCATION</h5>
                    <p className="sz-19">Study program</p>
                    <p className="sz-16">Brainster Academy of Design</p>
                    <div className="row">
                      <div className="col-6">
                        <p className="grey sz-14">
                          <i>2018 - 2019</i>
                        </p>
                      </div>
                      <div className="col-6 text-right">
                        <p className="grey sz-14">
                          <i>Skopje</i>
                        </p>
                      </div>
                    </div>
                    <p className="sz-19">Study program</p>
                    <p className="sz-16">
                      Ss. Cyril and Methodious University Faculty of Mechanical
                      Engineering Industrial Design
                    </p>
                    <div className="row">
                      <div className="col-6">
                        <p className="grey sz-14">
                          <i>2016 - 2019</i>
                        </p>
                      </div>
                      <div className="col-6 text-right">
                        <p className="grey sz-14">
                          <i>Skopje</i>
                        </p>
                      </div>
                    </div>
                  </div>
                  <div
                    className="col-12"
                    data-tips="skills"
                    onClick={mouseTipsClick}
                  >
                    <h5 className="font-weight-bold mb-4">
                      SKILLS & COMPETENCIES
                    </h5>
                    <p>Adobe Photoshop</p>
                    <p>Adobe Illustator</p>
                    <p>Adobe inDesign</p>
                    <p>Adobe Premiere Pro</p>
                    <p>Adobe Xd</p>
                    <p>MS Office</p>
                    <p>SolidWorks</p>
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

export default DesignCv;
