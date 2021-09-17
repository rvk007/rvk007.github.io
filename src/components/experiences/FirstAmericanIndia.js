import React from 'react';
import Navbar from '../Navbar';
import faiEthnicDay from '../../images/fai_ethnicday.jpeg';
import faiOuting from '../../images/fai_outing.jpeg';

const Fai = () => {
  return (
    <div className="container">
      <Navbar />
      <div style={{ textAlign: 'center' }}>
        <p class="mt-2">
          <h3>FIRST AMERICAN INDIA</h3>
        </p>
        <hr />
        <img
          src={faiEthnicDay}
          class="rounded"
          alt="..."
          height="450vh"
          width="1000vh"
        />
        <br />
        <br />
      </div>
      <div>
        I joined First American India right after my undergraduate studies.
      </div>
    </div>
  );
};

export default Fai;
