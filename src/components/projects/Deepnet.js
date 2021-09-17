import React from 'react';
import deepnet from '../../images/deepnet_white.png';

const Deepnet = () => {
  return (
    <div className="container">
      <div style={{ textAlign: 'center' }}>
        <p class="mt-2">
          <p class="line-1 sub-heading">DEEPNET</p>
        </p>
        <hr />
        <img
          src={deepnet}
          className="rounded"
          width="1000vh"
          height="220vh"
          alt="deepnet"
        />
        <br />
        <br />
        <a
          href="https://github.com/rvk007/DeepNet "
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
      <div>
        Deepnet is an open-source library built on PyTorch used for solving
        problems of Computer vision in Deep Learning.
      </div>
      <br />
      <div>Coming Soon!</div>
      {/* <div>
          <h5>Install Dependencies</h5>
          Install the required packages <br />
          <code>pip install -r requirements.txt</code>
          <br />
          Features DeepNet currently supports the following features:
          <h5>Models</h5>
          <h5>Training and Validation</h5>
        </div> */}
    </div>
  );
};

export default Deepnet;
