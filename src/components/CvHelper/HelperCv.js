import React, { useContext } from "react";
import "./HelperCv.css";
import { CvContext } from "../../Context/ContextProvider";
const HelperCv = () => {
  const { clickedCategory, isShownTip, editedCvTip } = useContext(CvContext);
  var tips;
  if (isShownTip === true) {
    if (clickedCategory === "Web Development") {
      tips = (
        <>
          {editedCvTip === "img" ? (
            <h6>
              Your photo should be professional. It’s better to send a CV
              without a photo, that with one that makes you seem unserious.
            </h6>
          ) : editedCvTip === "about" ? (
            <h6>
              Tailor the CV according to job you’re applying for. There is no
              ‘one size fits all’ CV – so always adapt it before applying to a
              job. Write a short intro that truly represents you – not cheesy
              quotes, but something you truly believe in. Don’t put overused
              buzzwords, describe yourself and your capabilities with your own
              vocabulary.
            </h6>
          ) : editedCvTip === "contact" ? (
            <h6>
              Email, phone number and date of birth are the practical part of
              the assembly of a CV. Enter your professional email address,
              preferably on Gmail. Your city of living is an information that
              interests your potential employers. Don’t leave your home
              address.\nInclude your LinkedIn profile link, but don’t just copy
              and paste the whole profile URL, shorten it. You’re applying for
              data science jobs, so most employers are going to look at your
              portfolio to see what kinds of projects you’re working on.
            </h6>
          ) : editedCvTip === "workExperience" ? (
            <h6>
              Write your previous job experience and if you’re currently
              working, your current job titles. Explain your responsibilities
              and projects and list the tech stack and products/projects you
              worked on. If you were working in a team, let the recruiter know
              what your role was.\nDates – a time frame in which you have been
              on a certain job title. If you are still working there, leave a
              hyphen ( - ). Leave your most recent experience first, and the
              oldest ones last. Tip: Use Action verbs to demonstrate your
              experience. Examples include: “applied”, “improved”, “implemented”
              etc.
            </h6>
          ) : editedCvTip === "education" ? (
            <h6>
              Education is an important section – but be sure to select only
              what is relevant to the job you’re applying for. Write about your
              university degrees, relevant courses and if you have any
              publications, but skip the high and elementary school.
            </h6>
          ) : editedCvTip === "language" ? (
            <h6>
              All languages, even those you don’t speak fluently, can help you
              get a certain position. It’s good to use expressions such as
              “fluent in”, “speaking level of”, “native language” and similar.
            </h6>
          ) : editedCvTip === "skills" ? (
            <h6>
              Showcase your tech stack . List the stack under every previous
              project you have worked on, or showcase your projects on GitHub.
              The easiest way to do this is to list the stack under a previous
              project that you have worked on. Another way is to showcase your
              projects on GitHub.
            </h6>
          ) : (
            ""
          )}
        </>
      );
    } else if (clickedCategory === "Data Science") {
      tips = (
        <>
          {editedCvTip === "img" ? (
            <h6>
              Put a photo made with a good camera. It’s better to send a CV
              without a photo, if you were planning on cropping yourself from a
              group photo from a dinner with friends, or a selfie in you room.
            </h6>
          ) : editedCvTip === "about" ? (
            <h6>
              Write a short intro that truly represents you –not cheesy quotes,
              but something you truly believe in. Don’t put overused buzzwords,
              describe yourself and your capabilities with your own vocabulary.
            </h6>
          ) : editedCvTip === "contact" ? (
            <h6>
              Email, phone number and date of birth are the practical part of
              the assembly of a CV. Enter your professional email address,
              preferably on Gmail. Your city of living is an information that
              interests your potential employers. Don’t leave your home
              address.\nInclude your LinkedIn profile link, but don’t just copy
              and paste the whole profile URL, shorten it. You’re applying for
              data science jobs, so most employers are going to look at your
              portfolio to see what kinds of projects you’re working on.
            </h6>
          ) : editedCvTip === "workExperience" ? (
            <h6>
              Write your previous job experience, and if you’re currently
              working, your current job title. Explain your responsibilities and
              projects and list the tech stack and products/projects you worked
              on. If you were working in a team, let the recruiter know what
              your role was.
            </h6>
          ) : editedCvTip === "education" ? (
            <h6>
              Let the recruiter know about your education , but only write the
              important parts – skip the high school and elementary, stick to
              the university degrees and courses relevant to the job you’re
              applying for.
            </h6>
          ) : editedCvTip === "language" ? (
            <h6>
              All languages, even those you don’t speak fluently, can help you
              get a certain position. It’s good to use expressions such as
              “fluent in”, “speaking level of”, “native language” and similar.
            </h6>
          ) : editedCvTip === "skills" ? (
            <h6>
              Make sure you use keywords that will put the focus on your best
              skills. If an HR/recruiter just scans your CV, they will catch
              their attention. Highlight terms like “Python” or “Machine
              learning”. Space is limited, so don’t waste t on soft skills like
              leadership or communication.
            </h6>
          ) : (
            ""
          )}
        </>
      );
    } else if (clickedCategory === "Digital Marketing") {
      tips = (
        <>
          {editedCvTip === "img" ? (
            <h6>
              Put a photo that looks professional – made with a good camera and
              showing you in a warm light. It’s better to send a CV without a
              photo, than a photo that makes you seem unprofessional.
            </h6>
          ) : editedCvTip === "about" ? (
            <h6>
              Know your unique value proposition and communicate it effectively.
              You need a personal tagline that will help you stand out from
              everyone else. This line should be the first impression the hiring
              manager will get from you. E.g. if you’re a Content Writer, don’t
              just say ‘’I’m a great content writer’’. Be creative and say why
              they should hire you to handle their content.\nDo your research in
              advance to create a value proposition relevant to the company
              you’re applying to.
            </h6>
          ) : editedCvTip === "contact" ? (
            <h6>
              Email, phone number and date of birth are the practical part of
              the assembly of a CV. Enter your professional email address,
              preferably on Gmail. Your city of living is an information that
              interests your potential employers. Don’t leave your home address.
            </h6>
          ) : editedCvTip === "workExperience" ? (
            <h6>
              List the job experiences that are relevant to the position you’re
              applying for. If you’re currently working, your current job
              titles. Explain your responsibilities and projects and list the
              strategies and projects you created or worked on.\nTailor your CV
              to the company and position you’re applying for. Highlight the
              keywords from the job specification on your CV. For example, if
              you’re applying for an e-commerce role, include keywords such as
              ‘’Conversion, bounce rate and Google Analytics’’.\nTalk about
              campaigns you worked on, the budget you had, how it benefited the
              company etc. This will help recruiters learn how you could benefit
              them based on your past experience.\nUse numbers. If you helped a
              social media page gain a lot of followers, put the number in. If
              your campaign influenced a spike in sales, write in the
              percentage. Also, explain how you got there too.
            </h6>
          ) : editedCvTip === "education" ? (
            <h6>
              Under education, list only the relevant studies and courses, like
              university degree or Digital Marketing Academy. Don’t write where
              you went to high school.
            </h6>
          ) : editedCvTip === "language" ? (
            <h6>
              All languages, even those you don’t speak fluently, can help you
              get a certain position. It’s good to use expressions such as
              “fluent in”, “speaking level of”, “native language” and similar.
            </h6>
          ) : editedCvTip === "skills" ? (
            <h6>
              Analyze what your key skills are. Make sure to list the skills you
              can shine in from day one.\nShowcase all the tools and
              technologies you know how to use. Everything that’s useful to a
              marketer: from Typeform and Canva, to Photoshop and Data Studio.
              Link campaigns you worked on If possible.
            </h6>
          ) : (
            ""
          )}
        </>
      );
    } else if (clickedCategory === "Design") {
      tips = (
        <>
          {editedCvTip === "about" ? (
            <h6>
              Write a short intro that truly represents you –not cheesy quotes,
              but something you truly believe in. Don’t put overused buzzwords,
              describe yourself and your capabilities with your own vocabulary.
            </h6>
          ) : editedCvTip === "contact" ? (
            <h6>
              Email, phone number and date of birth are the practical part of
              the assembly of a CV. Enter your professional email address,
              preferably on Gmail. Your city of living is an information that
              interests your potential employers. Don’t leave your home address.
              Leave a link to your LinkedIn profile, or Behance/Dribbble/WiX.
              Make sure it’s clickable, and shorten it.
            </h6>
          ) : editedCvTip === "workExperience" ? (
            <h6>
              Describe every job experience with a few words about your most
              relevant responsibilities and projects connected to the title
              you’re applying for.
            </h6>
          ) : editedCvTip === "education" ? (
            <h6>
              List relevant education , including workshops or lectures you have
              visited. If you have a bachelor in Sports, and now you are
              applying as a designer because you finished a course, the course
              should be the highest in your “education” section. Don’t put in
              high and elementary school.
            </h6>
          ) : editedCvTip === "skills" ? (
            <h6>
              List all the skills, tools and technologies that you know well.
            </h6>
          ) : (
            ""
          )}
        </>
      );
    }
  } else {
    tips = (
      <h6>
        Write your resume in the language that you would use at your workplace.
        Keep it brief It might require more work and research, but customize
        your CV according to the position you are applying for. Add small
        details in some places in accordance to the job description. Tip: Speak
        in the third person, in bullet form. Don’t write long sentences, try to
        go straight to the point. Try to incorporate the answers to these
        questions: What did they commend me for? Which technologies and tools
        did I use? Did I implement a new idea? Order: Start with the skills and
        recent job positions. Languages and other qualifications should come
        after that. If you need space, leave out your personal interests, or at
        least use a smaller font for them.
      </h6>
    );
  }

  return (
    <div className="helperCv-container">
      <div className="helper">
        <div className="tips">{tips}</div>
      </div>
    </div>
  );
};
export default HelperCv;
