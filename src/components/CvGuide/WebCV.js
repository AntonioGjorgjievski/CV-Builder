import React, { useContext } from "react";
import "../CssForCvBuilder/WebCv.css";
import { CvContext } from "../../Context/ContextProvider";
import WebCvImg from "../../images/CV-images/elon.jpg";
const WebCV = () => {
  const { mouseTipsClick } = useContext(CvContext);
  return (
    <div className="cv-container">
      <div className="container">
        <div className="row mb-3 cv-header pb-4">
          <div className="col-12 order-3 order-md-1 col-md-5">
            <div className="row">
              <div className="col-1 px-0">
                <div className="dark-squere"></div>
              </div>
              <div
                className="col-11"
                data-tips="about"
                onClick={mouseTipsClick}
              >
                <h2 className="font-weight-bold">Elon Musk</h2>
                <p className="font-weight-bold blue line-height">
                  Entrepreneur, Engineer, Inventor and Investor
                </p>
                <p className="line-height">
                  Aiming to reduce global warming through sustainable energy
                  production and consumption. Planning to reduce the risk of
                  human extinction by making life multi-planetary and setting up
                  a human colony on Mars
                </p>
              </div>
            </div>
          </div>
          <div className=" col-12 order-1 col-md-3 order-md-2 text-center">
            <img
              className="rounded-circle elon"
              data-tips="img"
              onClick={mouseTipsClick}
              src={WebCvImg}
              alt=""
            />
          </div>
          <div
            className=" col-12 order-2 order-md-3 py-3 py-mb-0 col-md-4"
            data-tips="contact"
            onClick={mouseTipsClick}
          >
            <ul className="elon-contact text-md-right">
              <li>
                <p>
                  elon@teslamotors.com
                  <span>
                    <i className="fas fa-envelope"></i>
                  </span>
                </p>
              </li>
              <li>
                <p>
                  620-681-5000
                  <span>
                    <i className="fas fa-mobile-alt"></i>
                  </span>
                </p>
              </li>
              <li>
                <p>
                  Los Angeles, USA
                  <span>
                    <i className="fas fa-map-marker-alt"></i>
                  </span>
                </p>
              </li>
              <li>
                <p>
                  @elonmusk
                  <span>
                    <i className="fab fa-twitter"></i>
                  </span>
                </p>
              </li>
            </ul>
          </div>
        </div>
        <div className="row py-3">
          <div className="col-12 col-md-6">
            <div className="row">
              <div className="col-12 py-2">
                <div className="row">
                  <div className="col-1 px-0">
                    <div className=" blue-square"></div>
                  </div>
                  <div
                    className="col-11"
                    data-tips="workExperience"
                    onClick={mouseTipsClick}
                  >
                    <h5 className="font-weight-bold">WORK EXPERIENCE</h5>
                    <p className="sz-19">Founder, CEO & Lead Designer</p>
                    <p className="sz-16">
                      SpaceX - Space Exploration Technologies
                    </p>
                    <div className="row">
                      <div className="col-6">
                        <p className="blue sz-14">
                          <i>06/2020 - Present</i>
                        </p>
                        <p className="blue sz-14">
                          <i>Accomplishments</i>
                        </p>
                      </div>
                      <div className="col-6 text-right">
                        <p className="blue sz-14">
                          <i>Hawthorne, USA</i>
                        </p>
                      </div>
                    </div>
                    <ul className="squere-ul-list line-height">
                      <li>
                        Raised $10m by selling 20.000 flamethrowers in 4 days.
                      </li>
                      <li>Raised $1m by selling 50.000 baseball caps.</li>
                      <li>
                        Hyperloop -- an ultra high-speed underground public
                        transportation system in which passengers are
                        transported on autonomous electric pods traveling at
                        600+ miles per hour in a pressurized cabin.
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-12 py-2">
                <div className="row">
                  <div className="col-1 px-0">
                    <div className="blue-square mt-2"></div>
                  </div>
                  <div className="col-11">
                    <p className="sz-19">Founder</p>
                    <p className="sz-16">The Boring Company</p>
                    <div className="row">
                      <div className="col-6">
                        <p className="blue sz-14">
                          <i>12/2016 - Present</i>
                        </p>
                        <p className="blue sz-14">
                          <i>Accomplishments</i>
                        </p>
                      </div>
                      <div className="col-6 text-right">
                        <p className="blue sz-14">
                          <i>Hawthorne, USA</i>
                        </p>
                      </div>
                    </div>
                    <ul className="squere-ul-list line-height">
                      <li>
                        Successfully launched Falcon Heavy, the most powerful
                        operational rocket in the world by a factor of two, with
                        the ability to lift into orbit nearly 64 metric tons
                        (141.000 lb) -- a mass greater than a 737 jetliner
                        loaded with passengers, crew, luggage and fuel.
                      </li>
                      <li>
                        Plans to reduce space transportation costs to enable
                        people to colonize Mars.
                      </li>
                      <li>
                        Developed the Falcon 9 spacecraft which replaced the
                        space shuttle when it retired in 2011
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-12 py-2">
                <div className="row">
                  <div className="col-1 px-0">
                    <div className="blue-square mt-2"></div>
                  </div>
                  <div className="col-11">
                    <p className="sz-19">CEO and Product Architect</p>
                    <p className="sz-16">Tesla Inc.</p>
                    <div className="row">
                      <div className="col-6">
                        <p className="blue sz-14">
                          <i>2004 - Present</i>
                        </p>
                        <p className="blue sz-14">
                          <i>Accomplishments</i>
                        </p>
                      </div>
                      <div className="col-6 text-right">
                        <p className="blue sz-14">
                          <i>San Mateo, USA</i>
                        </p>
                      </div>
                    </div>
                    <ul className="squere-ul-list line-height">
                      <li>
                        Global sales passed 250,000 units in September 2017
                      </li>
                      <li>
                        Global sales passed 250,000 units in September 2017
                      </li>
                      <li>
                        Topped Consumer Reports Annual Owner Satisfaction Survey
                        at 91% in 2016
                      </li>
                    </ul>
                  </div>
                  <div className="col-12 py-2">
                    <div className="row">
                      <div className="col-1 px-0">
                        <div className="blue-square mt-2"></div>
                      </div>
                      <div className="col-11">
                        <p className="sz-19">Co-founder and Former Chairman</p>
                        <p className="sz-16">
                          SolarCity (subsidiary of Tesla Inc.)
                        </p>
                        <div className="row">
                          <div className="col-6">
                            <p className="blue sz-14">
                              <i>06/2006 - Present</i>
                            </p>
                            <p className="blue sz-14">
                              <i>Accomplishments</i>
                            </p>
                          </div>
                          <div className="col-6 text-right">
                            <p className="blue sz-14">
                              <i>San Mateo, USA</i>
                            </p>
                          </div>
                        </div>
                        <ul className="squere-ul-list line-height">
                          <li>
                            Merged the company with Tesla Inc. and now offers
                            energy storage service through Tesla, including a
                            turnkey residential battery backup service that
                            incorporates Tesla's Powerwall.
                          </li>
                          <li>
                            In 2015, installed 870MW of solar power,
                            approximately 28% of non-utility solar installation
                            in the U.S. that year.
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-12 col-md-6">
            <div className="row">
              <div
                className="col-12"
                data-tips="skills"
                onClick={mouseTipsClick}
              >
                <h5 className="font-weight-bold mb-3">SKILLS & COMPETENCIES</h5>
              </div>
            </div>
            <div className="row py-2">
              <div className="col-auto mb-2 pr-0">
                <div className="skil">
                  <p>Thinking through first principles</p>
                </div>
              </div>
              <div className="col-auto mb-2 pr-0">
                <div className="skil">
                  <p>Marketing</p>
                </div>
              </div>
              <div className="col-auto mb-2 pr-0">
                <div className="skil">
                  <p>Micromanagement</p>
                </div>
              </div>
              <div className="col-auto mb-2 pr-0">
                <div className="skil">
                  <p>Goal oriented</p>
                </div>
              </div>
              <div className="col-auto mb-2 pr-0">
                <div className="skil">
                  <p>Resiliency</p>
                </div>
              </div>
              <div className="col-auto mb-2 pr-0">
                <div className="skil">
                  <p>Future focused</p>
                </div>
              </div>
              <div className="col-auto mb-2 pr-0">
                <div className="skil">
                  <p>Leadership</p>
                </div>
              </div>
              <div className="col-auto mb-2 pr-0">
                <div className="skil">
                  <p>Creativity</p>
                </div>
              </div>
              <div className="col-auto mb-2 pr-0">
                <div className="skil">
                  <p>Time Management</p>
                </div>
              </div>
              <div className="col-auto mb-2 pr-0">
                <div className="skil">
                  <p>Persistence</p>
                </div>
              </div>
              <div className="col-auto mb-2 pr-0">
                <div className="skil">
                  <p>Turning ideas into companies</p>
                </div>
              </div>
              <div className="col-auto mb-3 pr-0">
                <div className="skil">
                  <p>Long-term thinking</p>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-12">
                <h5 className="font-weight-bold mb-3">
                  ACHIEVEMENTS & CERTIFICATES
                </h5>
                <p className="line-height">
                  53rd Richest person in the world - Forbes (2018)
                </p>
                <p className="line-height">
                  21st on the Forbes list of the world's Most Powerful people
                  (2016)
                </p>
                <p className="mb-0">IEEE Honorary Membership</p>
                <p className="text-muted sz-14 line-height">
                  <i>
                    Given to the people who have rendered meritorious service to
                    humanity in the IEEE's designated fields of interest.
                  </i>
                </p>
                <p className="line-height">
                  Businessperson of The Year by Fortune Magazine (2013)
                </p>
                <p className="mb-0">FAI Gold Space Medal (2010)</p>
                <p className="text-muted sz-14 line-height">
                  <i>
                    One of the highest honors in the aerospace industry shared
                    with prominent personalities like Neil Armstrong and John
                    Glenn.
                  </i>
                </p>
                <p className="line-height">
                  Honorary Doctorate in Design from the Art Center College of
                  Design
                </p>
                <p className="line-height">
                  Honorary Doctorate (DUniv) in Aerospace Engineering from the
                  university of Surrey.
                </p>
                <p className="line-height">
                  Honorary Doctorate of Engineering and Technology from Yale
                  University
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WebCV;
