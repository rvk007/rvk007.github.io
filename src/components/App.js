import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import history from '../history';
import About from './About';
import Experience from './Experience';
import Projects from './Projects';
import Publication from './Publication';
import ObjectDetection from './projects/ObjectDetection';
import Tanoshi from './projects/Tanoshi';
import DepthEstimationSegmentation from './projects/DepthEstimationSegmentation';
import AdvancedComputerVision from './projects/AdvancedComputerVision';
import DeepNet from './projects/Deepnet';
import MachineTranslation from './projects/MachineTranslation';
// import FirstAmericanIndia from './experiences/FirstAmericanIndia';
// import UQAM from './experiences/UQAM';
// import IITPatna from './experiences/IITPatna';
import '../App.css';
import Navbar from './Navbar';

const App = () => {
  return (
    <Router history={history}>
      <div>
        <Navbar />
        <Switch>
          <Route path="/" exact component={About} />
          <Route path="/Experience" exact component={Experience} />
          <Route path="/Projects" exact component={Projects} />
          <Route path="/Publication" exact component={Publication} />
          <Route
            path="/Projects/ObjectDetection"
            exact
            component={ObjectDetection}
          />
          <Route path="/Projects/Tanoshi" exact component={Tanoshi} />
          <Route path="/Projects/DeepNet" exact component={DeepNet} />
          <Route
            path="/Projects/DepthEstimationSegmentation"
            exact
            component={DepthEstimationSegmentation}
          />
          <Route
            path="/Projects/AdvancedComputerVision"
            exact
            component={AdvancedComputerVision}
          />
          <Route
            path="/Projects/MachineTranslation"
            exact
            component={MachineTranslation}
          />
          {/* <Route
            path="/Experience/FirstAmericanIndia"
            exact
            component={FirstAmericanIndia}
          />
          <Route path="/Experience/UQAM" exact component={UQAM} />
          <Route path="/Experience/IITPatna" exact component={IITPatna} /> */}
        </Switch>
      </div>
    </Router>
  );
};

export default App;
