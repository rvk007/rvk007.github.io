import React from 'react';
import Navbar from '../Navbar';
import tanoshi from '../../images/tanoshi.gif';
import tanoshi_flowchart from '../../images/tanoshi_flowchart.png';
import image_dataset from '../../images/image_dataset.png';
import text_dataset from '../../images/text_dataset.png';

const Tanoshi = () => {
  return (
    <div className="container">
      <div style={{ textAlign: 'center' }}>
        <p class="mt-2">
          <p class="line-1 sub-heading">TANOSHI</p>
        </p>
        <hr />
        <a
          href="https://tanoshi.herokuapp.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img class="gif rounded" src={tanoshi} height="500vh" />
        </a>
        <br />
        <br />
        <a
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
          <button type="button" class="btn btn-success">
            Website
          </button>
        </a>
        <br />
        <br />
      </div>
      <div>
        This is an end-to-end platform where you can upload your own custom
        dataset, set model parameters and train your own deep learning model
        without writing any line of code.
        <br />
        <br />
        Tanoshi currently provides Image classification and Sentiment Analysis
        machine learning models. It has a feature to create a custom model by
        setting model parameters such as:
        <ul>
          <li>Batch size</li>
          <li>Optimizer</li>
          <li>Learning rate</li>
          <li>Number of epochs</li>
          <li>Training-Validation ratio</li>
        </ul>
        After validating the model parameters an input dataset file a user token
        is created and training starts, which takes around five-ten minutes.
        Once training is completed the user can use that token to test their
        model. <br />
        <br />
        <div>
          There are three major components: of this project:
          <ul>
            <li>
              <a
                href="https://github.com/rvk007/Tanoshi/tree/master/web"
                target="_blank"
              >
                Heroku
              </a>
            </li>
            <li>
              <a
                href="https://github.com/rvk007/Tanoshi/tree/master/web"
                target="_blank"
              >
                EC2 instance
              </a>
            </li>
            <li>
              <a
                href="https://github.com/rvk007/Tanoshi/tree/master/web"
                target="_blank"
              >
                AWS Lambda
              </a>
            </li>
          </ul>
          [Go to the above links to know more about this project in detail.]
          <br />
          <br />
          The below image explains the work of each component and how they are
          related to each other:
          <br />
          <p style={{ textAlign: 'center' }}>
            <img class="gif rounded" src={tanoshi_flowchart} height="500vh" />
          </p>
        </div>
        <div>
          <h4>Image Classification</h4>
          Image classification, as the name suggests, ia an algorithm which
          predicts the content of an image. This project provides two different
          models, Resnet34 and MobileNetV2 which are pretrained on Imagenet
          dataset, to classify an image. Use the below format while creating the
          dataset and make sure to zip it before uploading else it won't be
          accepted. <br />
          <p style={{ textAlign: 'center' }}>
            <img class="gif rounded" src={image_dataset} height="350vh" />
          </p>
        </div>
        <div>
          <h4>Sentiment Analysis</h4>
          Sentiment Analysis is a type of text classification, where a text is
          classified as Positive and Negative. Although, in this project
          Sentiment analysis is trained from scratch so it can be used for any
          kind text classification. Again, use the below specified format to
          create your dataset. The file should be a csv file. <br />
          <p style={{ textAlign: 'center' }}>
            <img class="gif rounded" src={text_dataset} height="350vh" />
          </p>
        </div>
      </div>
    </div>
  );
};

export default Tanoshi;
