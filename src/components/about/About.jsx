import React from 'react';
import './About.css';
import profil from '../../assets/sagor.jpg';

const About = () => {
  return (
    <div id='about' className='about'>
      <div className="header-container">
      <div className="line"></div>
      <h1>About Me</h1>
      <div className="line"></div>
      </div>
      <div className="about-section">
        <div className="about-left">
          <img src={profil} alt="Profile" />
        </div>
        <div className="about-right">
        <h2> Hi, I'm <span>Muhammad Sagor !</span> </h2>
          <p className='sagor'>I’m a passionate web developer with a strong foundation in mathematics from the National University, now embarking on my journey in the tech world. I’m currently a Trainee at the <span>ISDB-BISEW IT Scholarship Program,</span> where I’m honing my skills and building real-world applications.

With a keen interest in both front-end and back-end development, I’ve worked with a variety of technologies to create dynamic and responsive web experiences. Whether it's building a sleek UI or optimizing server-side code, I love the challenge of solving problems and bringing ideas to life on the web.</p>
          
          <div className="about-skills">
            <div className="about-skill">
              <p>PHP</p>
              <hr style={{ width: "70%" }} />
            </div>
            <div className="about-skill">
              <p>Laravel</p>
              <hr style={{ width: "50%" }} />
            </div>
            <div className="about-skill">
              <p>React.js</p>
              <hr style={{ width: "60%" }} />
            </div>
          </div>
        </div>
      </div>
      <div className="about-achivements">
        <div className="about-achivement">
          <h1>2+</h1>
          <p>Years of Experience</p>
        </div>
        <hr />
        <div className="about-achivement">
          <h1>10+</h1>
          <p>Projects Completed</p>
        </div>
        <hr />
        <div className="about-achivement">
          <h1>5+</h1>
          <p>Happy Clients</p>
        </div>
      </div>
    </div>
  );
}

export default About;
