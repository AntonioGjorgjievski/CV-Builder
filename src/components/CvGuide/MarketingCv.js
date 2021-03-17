import React, { useContext } from "react";
import MarketingCvImg from "../../images/CV-images/stefanija.jpg";
import "../CssForCvBuilder/MarketingCv.css";
import { CvContext } from "../../Context/ContextProvider";
const MarketingCv = () => {
  const { mouseTipsClick } = useContext(CvContext);
  return (
    <div className="cv-container">
      <div className="container">
        <div className="row justify-content-center align-items-center pb-4">
          <div
            className="col-12 py-3 py-md-0 col-md-3 text-center"
            data-tips="img"
            onClick={mouseTipsClick}
          >
            <img
              className="rounded-circle aleksandra"
              src={MarketingCvImg}
              alt=""
            />
          </div>
          <div
            className="col-12 col-md-9"
            data-tips="about"
            onClick={mouseTipsClick}
          >
            <h2 className="font-weight-bold">Stefanija Tenekedjieva</h2>
            <p className="font-weight-bold grey sz-19 line-height">
              Digital Marketer
            </p>
            <p className="line-height">
              Fascinated by the power of communication and media. Quick learner.
              Endlessly curious and keen to know more.
            </p>
          </div>
        </div>
        <div
          className="row justify-content-around py-3 marketing-contact"
          data-tips="contact"
          onClick={mouseTipsClick}
        >
          <div className="col-auto">
            <p className="mb-0">
              <span>
                <i className="fas fa-envelope mr-2"></i>
              </span>
              stefanija.tenekedjieva@gmail.com
            </p>
          </div>
          <div className="col-auto">
            <p className="mb-0">
              <span>
                <i className="fas fa-mobile-alt mr-2"></i>
              </span>
              Phone Number
            </p>
          </div>
        </div>
        <div className="row py-3">
          <div className="col-12 col-md-6">
            <div className="row">
              <div className="col-12 py-2">
                <div className="row">
                  <div className="col-1 px-0">
                    <div className="dark-square"></div>
                  </div>
                  <div
                    className="col-11"
                    data-tips="workExperience"
                    onClick={mouseTipsClick}
                  >
                    <h5 className="font-weight-bold">WORK EXPERIENCE</h5>
                    <p className="sz-19">Digital Marketer</p>
                    <p className="sz-16">Laika</p>
                    <div className="row">
                      <div className="col-6">
                        <p className="dark-blue sz-14">
                          <i>07/2019 - Present</i>
                        </p>
                        <p className="dark-blue sz-14">
                          <i>Accomplishments/Tasks</i>
                        </p>
                      </div>
                      <div className="col-6 text-right">
                        <p className="dark-blue sz-14">
                          <i>Skopje, Macedonia</i>
                        </p>
                      </div>
                    </div>
                    <ul className="circle-ul-list line-height">
                      <li>content writing</li>
                      <li>social media advertising</li>
                      <li>lead generation</li>
                      <li>conversion rate optimisation</li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-12 py-2">
                <div className="row">
                  <div className="col-1 px-0">
                    <div className="dark-square mt-3"></div>
                  </div>
                  <div className="col-11">
                    <p className="sz-19">Project coordinator</p>
                    <p className="sz-16">Radio MOF</p>
                    <div className="row">
                      <div className="col-6">
                        <p className="dark-blue sz-14">
                          <i>12/2017 - 02/2019</i>
                        </p>
                        <p className="dark-blue sz-14">
                          <i>Accomplishments/Tasks</i>
                        </p>
                      </div>
                      <div className="col-6 text-right">
                        <p className="dark-blue sz-14">
                          <i>Skopje, Macedoni</i>
                        </p>
                      </div>
                    </div>
                    <ul className="circle-ul-list line-height">
                      <li>
                        Editing, writing, planning and reporting for the
                        projects of radio mof
                      </li>
                      <li>
                        Maintaining social media profiles, web content and
                        statistics of www.radiomof.mk through Google Analytics
                      </li>
                      <li>
                        Editing and proofreading of content on www.radiomof.mk
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-12 py-2">
                <div className="row">
                  <div className="col-1 px-0">
                    <div className="dark-square mt-3"></div>
                  </div>
                  <div className="col-11">
                    <p className="sz-19">Journalist</p>
                    <p className="sz-16">Radio MOF</p>
                    <div className="row">
                      <div className="col-6">
                        <p className="dark-blue sz-14">
                          <i>05/2015 - 12/2017</i>
                        </p>
                        <p className="dark-blue sz-14">
                          <i>Accomplishments/Tasks</i>
                        </p>
                      </div>
                      <div className="col-6 text-right">
                        <p className="dark-blue sz-14">
                          <i>Skopje, Macedonia</i>
                        </p>
                      </div>
                    </div>
                    <ul className="circle-ul-list line-height">
                      <li>Content writing and reporting for Radio MOF</li>
                      <li>Reports and articles for radios shows</li>
                      <li>
                        Hosting trainings for Civil and Digital Journalism
                      </li>
                    </ul>
                  </div>
                  <div className="col-12 py-2">
                    <div className="row">
                      <div className="col-1 px-0">
                        <div className="dark-square"></div>
                      </div>
                      <div
                        className="col-11"
                        data-tips="education"
                        onClick={mouseTipsClick}
                      >
                        <h5 className="font-weight-bold">EDUCATION</h5>
                        <p className="sz-19">Education</p>
                        <p className="sz-16">
                          Brainster Digital Marketing Academy
                        </p>
                        <div className="row">
                          <div className="col-6">
                            <p className="dark-blue sz-14">
                              <i>04/2019 - 09/2019</i>
                            </p>
                            <p className="dark-blue sz-14">
                              <i>Coursess</i>
                            </p>
                          </div>
                          <div className="col-6 text-right">
                            <p className="dark-blue sz-14">
                              <i>City, Country</i>
                            </p>
                          </div>
                        </div>
                        <ul className="circle-ul-list line-height">
                          <li>Integrated Marketing Comunication</li>
                          <li>Funnel Marketing.</li>
                          <li>Unpaid & Paid Social Media</li>
                          <li>Lead Generation</li>
                          <li>Google Analytics</li>
                          <li>SEO</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-12 col-md-6">
            <div className="row pt-2">
              <div className="col-12">
                <h5 className="font-weight-bold mb-3">SKILLS & COMPETENCIES</h5>
              </div>
            </div>
            <div
              className="row py-2"
              data-tips="skills"
              onClick={mouseTipsClick}
            >
              <div className="col-auto mb-2 pr-0">
                <div className="skil-dark-blue">
                  <p>Thinking through first principles</p>
                </div>
              </div>
              <div className="col-auto mb-2 pr-0">
                <div className="skil-dark-blue">
                  <p>Marketing</p>
                </div>
              </div>
              <div className="col-auto mb-2 pr-0">
                <div className="skil-dark-blue">
                  <p>Micromanagement</p>
                </div>
              </div>
              <div className="col-auto mb-2 pr-0">
                <div className="skil-dark-blue">
                  <p>Goal oriented</p>
                </div>
              </div>
              <div className="col-auto mb-2 pr-0">
                <div className="skil-dark-blue">
                  <p>Resiliency</p>
                </div>
              </div>
              <div className="col-auto mb-2 pr-0">
                <div className="skil-dark-blue">
                  <p>Future focused</p>
                </div>
              </div>
              <div className="col-auto mb-2 pr-0">
                <div className="skil-dark-blue">
                  <p>Leadership</p>
                </div>
              </div>
              <div className="col-auto mb-2 pr-0">
                <div className="skil-dark-blue">
                  <p>Creativity</p>
                </div>
              </div>
              <div className="col-auto mb-2 pr-0">
                <div className="skil-dark-blue">
                  <p>Time Management</p>
                </div>
              </div>
              <div className="col-auto mb-2 pr-0">
                <div className="skil-dark-blue">
                  <p>Persistence</p>
                </div>
              </div>
              <div className="col-auto mb-2 pr-0">
                <div className="skil-dark-blue">
                  <p>Turning ideas into companies</p>
                </div>
              </div>
              <div className="col-auto mb-3 pr-0">
                <div className="skil-dark-blue">
                  <p>Long-term thinking</p>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-12 pb-4">
                <h5 className="font-weight-bold mb-3">
                  ACHIEVEMENTS & CERTIFICATES
                </h5>
                <p className="line-height">
                  First Award for Professional reporting of the refugee crisis
                  in 2017 by UNHCR and MYLA
                </p>
                <p className="line-height">
                  Third Award for Best journalistic story from the Macedonian
                  Council of Ethics in Media
                </p>
              </div>
              <div
                className="col-12"
                data-tips="language"
                onClick={mouseTipsClick}
              >
                <h5 className="font-weight-bold mb-3">LANGUAGES</h5>
                <p className="mb-0">English</p>
                <p className="text-muted sz-14 line-height">
                  <i>Full Professional Proficiency</i>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MarketingCv;
