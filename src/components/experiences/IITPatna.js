import React from 'react';
import Navbar from '../Navbar';
import objectDetection from '../../images/LEGO_Batman.gif';
import maskHelmetDetection from '../../images/mask_helmet.gif';

const Uqam = () => {
  return (
    <div className="container">
      <Navbar />
      <div style={{ textAlign: 'center' }}>
        <p class="mt-2">
          <h3>UNIVERSITÉ DU QUÉBEC À MONTRÉAL</h3>
        </p>
        <hr />
        <img src={objectDetection} height="350vh" />
        <br />
        <br />
        <a
          href="https://github.com/rvk007/EVA4/tree/master/S13"
          target="_blank"
          rel="noopener noreferrer"
          class="col mb-4"
        >
          <button type="button" class="btn btn-success">
            GitHub
          </button>
        </a>
        <br />
        <br />
        <div>Explain</div>
        <img src={maskHelmetDetection} height="250vh" />
      </div>
    </div>
  );
};

export default Uqam;
