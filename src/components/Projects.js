import React from 'react';
import Navbar from './Navbar';
import project from '../images/projects.jpeg';
import objectDetection from '../images/LEGO_Batman.gif';
import depthEstimation from '../images/depth.gif';
import tanoshi from '../images/tanoshi.gif';
import deepnet from '../images/deepnet_white.png';
import advance_cv from '../images/advance_cv.jpeg';
import machine_translation from '../images/machine_translation.jpeg';

const Projects = () => {
  return (
    <div className="container">
      <p class="mt-3" style={{ textAlign: 'center' }}>
        <p class="line-1 anim-typewriter-projects">
          WHAT HAS BEEN KEEPING ME OCCUPIED!
        </p>
        <hr />
      </p>

      <div class="card-deck row mt-1 mx-5 row-cols-1 row-cols-md-2 animated animatedFadeInUp fadeInUp">
        <a href="/Projects/ObjectDetection" class="col mb-3">
          <div
            class="card shadow mb-3 rounded border border-secondary"
            style={{ width: '30rem' }}
          >
            <img src={objectDetection} class="card-img-top" height="250vh" />
            <div class="card-body" style={{ textAlign: 'center' }}>
              <h5
                class="card-title btn btn-outline-primary mt-1"
                style={{ color: 'orange' }}
              >
                Object Detection
              </h5>
            </div>
          </div>
        </a>
        <a href="/Projects/DepthEstimationSegmentation" class="col mb-3">
          <div
            class="card shadow mb-3 rounded border border-secondary"
            style={{ width: '30rem' }}
          >
            <img src={depthEstimation} class="card-img-top" height="250vh" />
            <div class="card-body" style={{ textAlign: 'center' }}>
              <h5
                class="card-title btn btn-outline-primary mt-1"
                style={{ color: 'orange' }}
              >
                Depth Estimation and Segmentation
              </h5>
            </div>
          </div>
        </a>
        <a href="/Projects/Tanoshi" class="col mb-3">
          <div
            class="card shadow mb-3 rounded border border-secondary"
            style={{ width: '30rem' }}
          >
            <img src={tanoshi} class="card-img-top" height="250vh" />
            <div class="card-body" style={{ textAlign: 'center' }}>
              <h5
                class="card-title btn btn-outline-primary mt-1"
                style={{ color: 'orange' }}
              >
                Tanoshi
              </h5>
            </div>
          </div>
        </a>
        <a href="/Projects/AdvancedComputerVision" class="col mb-3">
          <div
            class="card shadow mb-3 rounded border border-secondary"
            style={{ width: '30rem' }}
          >
            <img src={advance_cv} class="card-img-top" height="250vh" />
            <div class="card-body" style={{ textAlign: 'center' }}>
              <h5
                class="card-title btn btn-outline-primary mt-1"
                style={{ color: 'orange' }}
              >
                Advanced Computer Vision
              </h5>
            </div>
          </div>
        </a>
        <a href="/Projects/DeepNet" class="col mb-3">
          <div
            class="card shadow mb-3 rounded border border-secondary"
            style={{ width: '30rem' }}
          >
            <img src={deepnet} class="card-img-top" height="250vh" />
            <div class="card-body" style={{ textAlign: 'center' }}>
              <h5
                class="card-title btn btn-outline-primary mt-1"
                style={{ color: 'orange' }}
              >
                DeepNet
              </h5>
            </div>
          </div>
        </a>
        <a href="/Projects/MachineTranslation" class="col mb-3">
          <div
            class="card shadow mb-3 rounded border border-secondary"
            style={{ width: '30rem' }}
          >
            <img
              src={machine_translation}
              class="card-img-top"
              height="250vh"
            />
            <div class="card-body" style={{ textAlign: 'center' }}>
              <h5
                class="card-title btn btn-outline-primary mt-1"
                style={{ color: 'orange' }}
              >
                Machine Translation
              </h5>
            </div>
          </div>
        </a>
      </div>
    </div>
  );
};

export default Projects;
