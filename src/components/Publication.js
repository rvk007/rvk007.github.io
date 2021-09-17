import React from 'react';
import paper from '../images/paper.jpg';

const Publication = () => {
  return (
    <div className="container">
      <p class="mt-3" style={{ textAlign: 'center' }}>
        <p class="line-1 anim-typewriter-experience">PUBLICATIONS</p>
        <hr />
      </p>
      <div class="card shadow mb-4 rounded border border-secondary animated animatedFadeInUp fadeInUp">
        <div class="card-body">
          <div class="row col-12">
            <div class="col-sm-6 col-md-3">
              <a
                href="https://ieeexplore.ieee.org/document/8614265"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  class="gif rounded"
                  src={paper}
                  height="300vh"
                  alt="publication"
                />
              </a>
            </div>
            <div class="col-6 col-md-9 d-flex align-items-center justify-content-center">
              <div>
                <h5 class="experience">
                  Multimodal Sentiment Analysis Using Deep Learning
                </h5>
                <p style={{ color: 'orange' }}>
                  <a
                    href="https://www.linkedin.com/in/rvk007/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Rakhee
                  </a>
                  , Ngoc Le Tan, Fatiha Sadat
                  <br />
                  17th IEEE International Conference on Machine Learning and
                  Applications (ICMLA) <br />
                  Orlando, Florida, USA (2018)
                </p>
                <p>
                  Since about a decade ago, deep learning has emerged as a
                  powerful machine learning technique and produced
                  state-of-the-art results in many application domains, ranging
                  from computer vision and speech recognition to NLP. Applying
                  deep learning to sentiment analysis has also become very
                  popular recently. In this paper, we propose a comparative
                  study for multimodal sentiment analysis using deep neural
                  networks involving visual recognition and natural language
                  processing. Initially we make different models for the model
                  using text and another for image and see the results on
                  various models and compare them.
                </p>
                <div>
                  <a
                    href="https://ieeexplore.ieee.org/document/8614265"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <button type="button" class="btn btn-primary">
                      Paper
                    </button>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Publication;
