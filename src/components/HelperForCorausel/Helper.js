import React from "react";
import "./Helper.css";

function Helper({ isShown, details, tip, clickedCategory }) {
  var slider;
  if (isShown === true) {
    if (tip === "link1") {
      slider = (
        <>
          {clickedCategory === "Web Development" ? (
            <h5>
              Make sure that your title matches your skills. E.g., if you’re an
              entry level PHP developer, don’t say that you’re a PHP Expert.
              Skip the abbreviations and titles – keep it short and modest. Be
              concise and easy to understand. Don’t use overdone motivational
              quotes about work ethics and inspiration, try to make the ‘about’
              section as personal and as reflective of you as possible. Use the
              new “Open for business” feature. State your area of expertise and
              industry, to let recruiters know they can reach you. Don’t write
              in things that you wouldn’t like to happen. For example, if you
              say you work good under pressure, employers might have an ace up
              their sleeve when stacking a lot of work with a short deadline,
              because you said so. Value your skills and free time accordingly.
            </h5>
          ) : clickedCategory === "Data Science" ? (
            <h5>
              Make sure that your title matches your skills. E.g., if you’re an
              entry level Data Scientist, don’t say that you’re a Data Science
              Expert. Skip the abbreviations and titles – keep it short and
              modest. Be concise and easy to understand. Don’t use overdone
              motivational quotes about work ethics and inspiration, try to make
              the ‘about’ section as personal and as reflective of you as
              possible. Use the new “Open for business” feature. State your area
              of expertise and industry, to let recruiters know they can reach
              you. Don’t write in things that you wouldn’t like to happen. For
              example, if you say you work good under pressure, employers might
              have an ace up their sleeve when stacking a lot of work with a
              short deadline, because you said so. Value your skills and free
              time accordingly.
            </h5>
          ) : clickedCategory === "Digital Marketing" ? (
            <h5>
              Previous Next Make sure that your title matches your skills. E.g.,
              if you’re an entry level PPC specialist, don’t say that you’re a
              PPC Expert. Skip the abbreviations and titles – keep it short and
              modest. Be concise and easy to understand. Don’t use overdone
              motivational quotes about work ethics and inspiration, try to make
              the ‘about’ section as personal and as reflective of you as
              possible. Use the new “Open for business” feature. State your area
              of expertise and industry, to let recruiters know they can reach
              you. Don’t write in things that you wouldn’t like to happen. For
              example, if you say you work good under pressure, employers might
              have an ace up their sleeve when stacking a lot of work with a
              short deadline, because you said so. Value your skills and free
              time accordingly.
            </h5>
          ) : clickedCategory === "Design" ? (
            <h5>
              Make sure that your title matches your skills. E.g., if you only
              finished an academy or course, don’t say you are a Graphic Design
              Expert. Skip the abbreviations and titles – keep it short and
              modest. Be concise and easy to understand. Don’t use overdone
              motivational quotes about work ethics and inspiration, try to make
              the ‘about’ section as personal and as reflective of you as
              possible. Use the new “Open for business” feature. State your area
              of expertise and industry, to let recruiters know they can reach
              you. Don’t write in things that you wouldn’t like to happen. For
              example, if you say you work good under pressure, employers might
              have an ace up their sleeve when stacking a lot of work with a
              short deadline, because you said so. Value your skills and free
              time accordingly.
            </h5>
          ) : (
            ""
          )}
        </>
      );
    }
    if (tip === "link2") {
      slider = (
        <h5>
          Tip: Add connections from the same field of work as you; even people
          you don’ t know personally.That way, recruiters have a bigger chance
          of coming across your profile.Put in the skills you are most
          experienced in , so you can be endorsed from other people.Tip: Ask
          friends and coworkers to endorse you.
        </h5>
      );
    }
    if (tip === "link3") {
      slider = (
        <h5>
          Explain every work experience you’ ve had in detail– what were your
          obligations and tasks, what was your job title, which technologies and
          tools did you use etc.Don’ t be shy on listing experience that isn’ t
          connected to your current profession.Volunteering at a local community
          center, summer jobs, projects you were a part of , pro bono work you
          did to improve your skills and gain experience– everything
          counts.Plus, every experience serves as proof to your work ethics and
          adaptability.Tip: If you have no experience and education to build up
          your profile, do some pro bono work or volunteer.You can help someone,
          and at the same time enrich your portfolio.
        </h5>
      );
    }
    if (tip === "link4") {
      slider = (
        <h5>
          Under education, list all the formal and non - formal education you
          have, with focus on the education that is relevant to your current
          title.For example, if you put Brainster Coding Academy as an
          education, list all the modules and projects you have worked on.Make
          sure to list your major and bachelor / master / doctor thesis subject
          under the university education.
        </h5>
      );
    }
    if (tip === "link5") {
      slider = (
        <h5>
          List all your relevant accomplishments.Don’ t say you have a black
          belt in karate, but mention an award from a hackaton.
        </h5>
      );
    }
    if (tip === "laika1") {
      slider = (
        <h5>
          List all your relevant accomplishments.Don’ t say you have a black
          belt in karate, but mention an award from a hackaton.
        </h5>
      );
    }
    if (tip === "laika2") {
      slider = (
        <h5>
          Link all your social media and portfolios you want companies and
          recruiters to be able to see (LinkedIn, Facebook, Stack Overflow,
          GitHub, your personal website etc.)
        </h5>
      );
    }
    if (tip === "laika3") {
      slider = (
        <h5>
          Be realistic when choosing the reason why you have a portfolio on
          Laika. This will help recruiters know whether you are suitable for the
          position on the long run.
        </h5>
      );
    }
    if (tip === "laika4") {
      slider = (
        <h5>
          *You can only pick 1 industry out of the given 9 (Software
          Engineering, Design, Marketing and Communication, Data Science, IT and
          Sysadmin, Sales and Business Development, HR and Recruitment, Project
          and Product Management, Customer Support).
        </h5>
      );
    }
    if (tip === "laika5") {
      slider = (
        <h5>
          *Choose up to 8 technologies, but make sure you really know their ins
          and outs. The matching algorithm connects you to companies whose job
          openings have precise technologies listed.
        </h5>
      );
    }
    if (tip === "laika6") {
      slider = (
        <h5>
          Work experience is not mandatory, but it helps companies know what
          kind of experience and in which industry you have.
        </h5>
      );
    }
    if (tip === "laika7") {
      slider = (
        <h5>
          Education is also not mandatory, but it adds weight to your portfolio
          if you have any academic knowledge.
        </h5>
      );
    }
    if (tip === "laika8") {
      slider = (
        <h5>
          Work experience is not mandatory, but it helps companies know what
          kind of experience and in which industry you have.
        </h5>
      );
    }
    if (tip === "laika9") {
      slider = (
        <h5>
          *Select your desired salary. Don’t try to be too accessible, but
          please be realistic – make sure you desired salary is in accordance to
          your experience.
        </h5>
      );
    }
    if (tip === "laika10") {
      slider = (
        <h5>*You can choose multiple choices for your desired job plan</h5>
      );
    }
  } else {
    slider = <h5> {details} </h5>;
  }
  return <div className="helper-container"> {slider} </div>;
}

export default Helper;
