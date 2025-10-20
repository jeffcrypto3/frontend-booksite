import React from "react";
import "../styles/aboutAuthor.css";
// import AuthorImage from "../assets/azimi.jpg"; 

const AboutAuthor = () => {
  return (
    <section className="about-author">
      <div className="about-content">
        <div className="about-text">
          <h2>Meet the Visionary</h2>
          <p>
            <strong>🦴 The Patient Dog Who Ate the Fattest Bone</strong><br />
            From struggle to strength — a story of patience, purpose, and persistence.
          </p>
          <p>
            I was born with a birth defect and lost my father at the age of three. Life forced me
            to grow through pain, not privilege. I fought through short attention and a school
            system that rewarded memorization over meaning.
          </p>
          <p>
            In search of a better life, I traveled to the United States — only to find that my
            dreamland would test every ounce of my resolve. While others found shortcuts, I worked
            two jobs, 80 hours a week, earning just $2.13 an hour to pay international student fees
            four times higher than Americans.
          </p>
          <p>
            I refused to cheat. I refused to compromise. I chose patience over pressure, and
            integrity over convenience. When I finally earned my degree, I came back home to
            Nigeria — not to rest, but to rebuild. I turned my experience into two books and a
            mission: to help others believe that you don’t need corruption, privilege, or luck to
            make it. You only need patience, discipline, and faith.
          </p>
          <p>
            Now, everything I once waited for — money, fame, power, and love — is arriving at once.
            I call my story “The Patient Dog Who Ate the Fattest Bone.” Because in the end, those
            who refuse to give up will always eat the best share.
          </p>

          <h3>🔥 My Mission</h3>
          <p>
            To inspire a new generation of Nigerians — and Africans everywhere — to rebuild their
            lives with honesty, hard work, and vision.
          </p>

          <h3>📘 My Work</h3>
          <ul>
            <li>Author of two national development books</li>
            <li>Advocate for youth empowerment and ethical leadership</li>
            <li>
              Founder of “Yes We Can” Book Club — helping ordinary people write and publish
              extraordinary ideas
            </li>
          </ul>

          <h3>💬 My Message</h3>
          <p className="quote">
            “You don’t have to cheat to win. You just have to keep walking — even when no one is
            watching.”
          </p>

          <div className="author-buttons">
            <button>📧 Join Our Newsletter</button>
            <button>☎️ Contact Us</button>
          </div>

          <p className="contact-info">
            +234 7033627981 | azimikoko5@gmail.com
          </p>
        </div>

        {/* <div className="about-image">
          <img src={AuthorImage} alt="Azimi Koko" />
        </div> */}
      </div>
    </section>
  );
};

export default AboutAuthor;
