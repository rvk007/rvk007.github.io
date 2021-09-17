import React from 'react';
import fai from '../images/fai_logo.jpeg';
import uqam from '../images/uqam_logo.png';
import iitpatna from '../images/iitpatna_logo.png';
import '../App.css';

const Experience = () => {
  return (
    <div className="container">
      <p class="mt-3" style={{ textAlign: 'center' }}>
        <p class="line-1 anim-typewriter-experience">WORK EXPERIENCE</p>
        <hr />
      </p>
      <div
        style={{ display: 'inline-block' }}
        class="animated animatedFadeInUp fadeInUp"
      >
        <div class="card shadow mb-4 rounded border border-dark">
          <div class="card-body">
            <div class="row col-12">
              <div class="col-sm-6 col-md-3">
                <a>
                  <img
                    src={fai}
                    height="180vh"
                    width="180vh"
                    class="logo rounded-circle"
                    alt="fai"
                  />
                </a>
              </div>
              <div class="col-6 col-md-9 d-flex align-items-center justify-content-center">
                <div>
                  <h4 class="experience">FIRST AMERICAN INDIA</h4>
                  <p style={{ color: 'orange' }}>
                    Member Technical Staff
                    <br />
                    July 2019-July 2021
                  </p>
                  <p>
                    Elevated legacy IT infrastructure of the company from
                    in-house servers to AWS and made it more secure by applying
                    encryption over MSMQ and TLS communication for database
                    connections.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="card my-1 shadow mb-4 rounded border border-dark">
          <div class="card-body">
            <div class="row col-12">
              <div class="col-sm-6 col-md-3">
                <a>
                  <img
                    src={uqam}
                    height="180vh"
                    width="180vh"
                    class="logo rounded-circle"
                    alt="uqam"
                  />
                </a>
              </div>
              <div class="col-6 col-md-9 d-flex align-items-center justify-content-center">
                <div>
                  <h4 class="experience">UNIVERSITÉ DU QUÉBEC À MONTRÉAL</h4>
                  <p style={{ color: 'orange' }}>
                    Research Intern
                    <br />
                    June 2018 - August 2018
                  </p>
                  <p>
                    Created a model to detect and analyze emotions jointly from
                    textual and visual information. The model achieved an
                    accuracy of 88.6% for assigning correct sentiments for text
                    data and 69.02% for image data. The work done was published
                    at the ICMLA Conference.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="card my-1 shadow mb-4 rounded border border-dark">
          <div class="card-body">
            <div class="row col-12">
              <div class="col-sm-6 col-md-3">
                <a>
                  <img
                    src={iitpatna}
                    height="180vh"
                    width="180vh"
                    class="logo rounded-circle"
                    alt="iit_patna"
                  />
                </a>
              </div>
              <div class="col-6 col-md-9 d-flex align-items-center justify-content-center">
                <div>
                  <h4 class="experience">
                    INDIAN INSTITUTE OF TECHNOLOGY PATNA
                  </h4>
                  <p style={{ color: 'orange' }}>
                    Research Intern
                    <br />
                    December 2017 - January 2018
                  </p>
                  <p>
                    Implemented a system that helps in finding the most
                    important bi-cluster in the gene expression data using the
                    concepts of Self Organizing Maps and Differential
                    Evolutionary Algorithm.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
