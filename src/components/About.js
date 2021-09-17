import 'font-awesome/css/font-awesome.min.css';
import React from 'react';
import Navbar from './Navbar';
import photo1 from '../images/photo.jpg';
import photo from '../images/2.png';
import gmail from '../images/gmail.svg';
import cv from '../images/cv.png';
import cap from '../images/cap.png';

const About = () => {
  return (
    <div className="container">
      <div class="mt-5">
        <div class="row">
          <div class="col-4 about" style={{ textAlign: 'center' }}>
            <img
              src={photo}
              height="270vh"
              width="270vh"
              class="rounded-circle"
            />
            <h2 class="mt-3">Rakhee</h2>
            <h3 class="mt-3" style={{ fontSize: '2vh' }}>
              CS Grad Student
            </h3>
            <a
              href="https://www.nyu.edu/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <h3
                class="university"
                style={{ fontSize: '2.2vh', color: 'orange' }}
              >
                New York University
              </h3>
            </a>

            <div class="mt-2">
              <a
                href="https://github.com/rvk007"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="https://raw.githubusercontent.com/devicons/devicon/9f4f5cdb393299a81125eb5127929ea7bfe42889/icons/github/github-original.svg"
                  width="25vh"
                  class="rounded icon"
                  style={{ backgroundColor: 'whitesmoke' }}
                />
              </a>
              <a
                href="https://www.linkedin.com/in/rvk007/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="https://raw.githubusercontent.com/devicons/devicon/9f4f5cdb393299a81125eb5127929ea7bfe42889/icons/linkedin/linkedin-original.svg"
                  width="25vh"
                  class="ml-4 icon"
                />
              </a>
              <a href="mailto:rakhee@nyu.edu">
                <img src={gmail} width="35vh" height="35vh" class="ml-4 icon" />
              </a>
              <a
                href="https://twitter.com/vsharma_rakhee"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="https://raw.githubusercontent.com/devicons/devicon/9f4f5cdb393299a81125eb5127929ea7bfe42889/icons/twitter/twitter-original.svg"
                  width="25vh"
                  class="ml-4 icon"
                />
              </a>
              <a
                href="https://www.instagram.com/rakhee_1.0/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="https://www.vectorlogo.zone/logos/instagram/instagram-icon.svg"
                  width="25vh"
                  class="ml-4 icon"
                />
              </a>
              <a
                href="https://www.facebook.com/rakhee.vishwakarma.3"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="https://raw.githubusercontent.com/devicons/devicon/9f4f5cdb393299a81125eb5127929ea7bfe42889/icons/facebook/facebook-original.svg"
                  width="25vh"
                  class="ml-4 icon"
                />
              </a>
              <a
                href="https://drive.google.com/file/d/1m4vhwxlrJQT9SeMgglLd7udAgmfqgbhO/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src={cv}
                  style={{ backgroundColor: 'whitesmoke' }}
                  width="25vh"
                  class="ml-4 rounded icon"
                />
              </a>
            </div>
          </div>
          <div class="col-8">
            <h1 class="experience">Biography</h1>
            <p>
              I am a Master’s student in the Department of Computer Science at
              the New York University graduating in May 2023. I have a Bachelor
              of Technology degree in Computer Science and Engineering from the
              National Institute of Technology (NIT) Mizoram.{' '}
            </p>
            <p>
              Previously, I worked at First American India as a Software
              Engineer, where I elevated legacy IT infrastructure of the company
              from in-house servers to AWS and made it more secure by applying
              encryption over MSMQ and TLS communication for database
              connections. I led a project called “Requirement Analysis
              Optimization”, which identifies security requirements from a task
              at the initial stages using machine learning which reduced the
              time to complete a task by 30%.
            </p>

            <p>
              Aside from work, I am also an open-source enthusiast and have
              created projects in AI. My interests lie in solving problems
              related to Computer Vision and Deep Learning.
            </p>

            <div class="row mt-5">
              <div class="col-6">
                <h5 style={{ color: 'orange' }}>Interests</h5>
                <ul>
                  <li>Artificial Intelligence</li>
                  <li>Computer Vision</li>
                  <li>Natural Language Processing</li>
                  <li>Deep Reinforcement Learning</li>
                </ul>
              </div>
              <div class="col-6">
                <h5 style={{ color: 'orange' }}>Education</h5>
                <ul>
                  <div class="row">
                    <div>
                      <img
                        src={cap}
                        width="20vh"
                        height="20vh"
                        class="rounded icon"
                      />
                    </div>
                    <div class="col-11">
                      MS in Computer Science, 2023
                      <br />
                      <p style={{ fontSize: '1.4vh' }}>New York University</p>
                    </div>
                  </div>
                  <div class="row">
                    <div>
                      <img
                        src={cap}
                        width="20vh"
                        height="20vh"
                        class="rounded icon"
                      />
                    </div>
                    <div class="col-11">
                      BTech in Computer Science, 2019
                      <br />
                      <p style={{ fontSize: '1.4vh' }}>
                        National Institute of Technology Mizoram
                      </p>
                    </div>
                  </div>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
