import React from 'react';
import Navbar from '../Navbar';
import advance_cv from '../../images/advance_cv.jpeg';

const AdvancedComputerVision = () => {
  return (
    <div className="container">
      <div style={{ textAlign: 'center' }}>
        <p class="mt-2">
          <p class="line-1 sub-heading">ADVANCED COMPUTER VISION</p>
        </p>
        <hr />
        <img src={advance_cv} class="rounded" height="400vh" />
        <br />
        <br />
        <a
          href="https://github.com/rvk007/Advance-Computer-Vision"
          target="_blank"
          rel="noopener noreferrer"
          class="col mb-4"
        >
          <button type="button" class="btn btn-light">
            GitHub
          </button>
        </a>
        <br />
        <br />
      </div>
      <div>Coming soon!</div>
    </div>
  );
};

export default AdvancedComputerVision;
