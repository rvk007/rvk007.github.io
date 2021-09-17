import React from 'react';
import Navbar from '../Navbar';
import machine_translation from '../../images/machine_translation.jpeg';

const MachineTranslation = () => {
  return (
    <div className="container">
      <div style={{ textAlign: 'center' }}>
        <p class="mt-2">
          <p class="line-1 sub-heading">MACHINE TRANSLATION</p>
        </p>
        <hr />
        <img src={machine_translation} class="rounded" height="450vh" />
        <br />
        <br />
        {/* <a
            href="https://github.com/rvk007/Tanoshi"
            target="_blank"
            rel="noopener noreferrer"
            class="col mb-4"
          >
            <button type="button" class="btn btn-light">
              GitHub
            </button>
          </a>
          <a
            href="https://tanoshi.herokuapp.com/"
            target="_blank"
            rel="noopener noreferrer"
            class="col mb-4"
          >
            <button type="button" class="btn btn-primary">
              Website
            </button>
          </a>
          <br />
          <br /> */}
      </div>
      <div>Coming Soon!</div>
    </div>
  );
};

export default MachineTranslation;
